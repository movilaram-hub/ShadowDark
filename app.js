(() => {
  'use strict';
  const C = window.SDCore, D = window.SD_DATA, G = window.SDGenerators;
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const plain = value => String(value ?? '').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').trim();
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const storageKey = 'shadowdark-simple-mesa-v1';
  let storageOK = true, noticeTimeout, lightTimeout;
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch { storageOK = false; }
  const torch = new C.Torch(saved?.torch);
  let combatants = Array.isArray(saved?.combatants) ? saved.combatants.filter(c => c && typeof c.id === 'string' && Number.isInteger(c.monsterIndex) && D.MONSTERS[c.monsterIndex]).map(c=>({...C.makeCombatant(D.MONSTERS[c.monsterIndex],c.monsterIndex,c.id,c.ordinal),hp:C.clampInt(c.hp),ac:C.clampInt(c.ac)})) : [];
  const usedIDs = new Set();
  combatants = combatants.filter(c => !usedIDs.has(c.id) && usedIDs.add(c.id));
  const removedCombatants = new Map();
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({torch:torch.serialize(),combatants}));
      storageOK = true;
    } catch {
      if (storageOK) notice('Este navegador no permite guardar la mesa. Mantenla abierta durante la partida.');
      storageOK = false;
      document.querySelector('footer>span:nth-child(2)').textContent = 'Guardado no disponible. Mantén abierta esta pestaña.';
    }
  }
  function notice(message) {
    clearTimeout(noticeTimeout);
    $('notice').textContent = message;
    $('notice').hidden = false;
    noticeTimeout = setTimeout(() => $('notice').hidden = true, 3500);
  }
  const tabs = [...document.querySelectorAll('[data-tab]')];
  function activateTab(name, focus = false) {
    const selected = tabs.some(tab=>tab.dataset.tab===name) ? name : 'mesa';
    setTorchMenu(false);setDiceMenu(false);
    for (const tab of tabs) {
      const active = tab.dataset.tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      $('view-' + tab.dataset.tab).hidden = !active;
      if (active && focus) tab.focus();
    }
  }
  tabs.forEach(tab => tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
    try { history.replaceState(null, '', '#' + tab.dataset.tab); } catch { /* file:// mantiene la navegación sin History API. */ }
  }));
  document.querySelector('.tabs').addEventListener('keydown', e => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault();
    const current = tabs.findIndex(t=>t.getAttribute('aria-selected')==='true');
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (current + (e.key==='ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    activateTab(tabs[next].dataset.tab, true);
  });
  window.addEventListener('hashchange',()=>activateTab(location.hash.slice(1)));
  document.querySelectorAll('a[href="#mesa"]').forEach(a=>a.addEventListener('click',()=>activateTab('mesa')));
  activateTab(location.hash.slice(1));

  // BESTIARIO: solo busca en las criaturas originales; nunca en resultados de tablas.
  $('monster-count').textContent = `${D.MONSTERS.length} criaturas`;
  const sortedMonsters = D.MONSTERS.map((monster,index)=>({...monster,index})).sort((a,b)=>C.monsterName(a.name).localeCompare(C.monsterName(b.name),'es'));
  let searchLimit = 8;
  const alignment = value => ({L:'Legal',N:'Neutral',C:'Caótico'}[value] || value);
  function abilityStats(m) {
    return `<div class="ability-stats">${[['FUE',m.f],['DES',m.d],['CON',m.c],['INT',m.i],['SAB',m.s],['CAR',m.ca_mod]].map(([name,value])=>`<span><small>${name}</small>${esc(value)}</span>`).join('')}</div>`;
  }
  function traitsHTML(m) {
    return (m.traits || []).map(t=>`<p><strong>${esc(t.name)}.</strong> ${esc(t.text)}</p>`).join('');
  }
  function renderSearch() {
    const query = $('monster-search').value.trim();
    $('search-meta').hidden = !query;
    $('search-results').hidden = !query;
    if(!query){
      $('search-results').innerHTML='';
      $('search-summary').textContent='';
      $('clear-search').hidden=true;
      $('more-monsters').hidden=true;
      $('search-footer').hidden=true;
      return;
    }
    const matches = C.searchMonsters(sortedMonsters,query);
    const visible = matches.slice(0,searchLimit);
    $('clear-search').hidden = !query;
    $('search-summary').textContent = `${matches.length} ${matches.length===1?'coincidencia':'coincidencias'}`;
    $('more-monsters').hidden = matches.length <= searchLimit;
    $('search-footer').hidden = matches.length <= searchLimit;
    $('search-results').innerHTML = visible.length ? visible.map(m=>{
      const name = C.monsterName(m.name);
      return `<article class="monster-row"><div class="monster-row-main"><button class="monster-name-button" data-preview="${m.index}" aria-expanded="false" aria-controls="preview-${m.index}" aria-label="Ver ficha de ${esc(name)}"><span class="monster-initial" aria-hidden="true">${esc(name.charAt(0))}</span><span class="monster-name-text"><strong>${esc(name)}</strong><small>Nivel ${esc(m.nv)} · ${esc(alignment(m.al))}</small></span></button><div class="monster-row-stats"><span><small>CA</small>${esc(m.ca)}</span><span><small>PG</small>${esc(m.pg)}</span></div><button class="pin-button" data-pin="${m.index}" aria-label="Anclar ${esc(name)}">${icon('pin')}<span>Anclar</span></button></div><div id="preview-${m.index}" class="monster-preview" hidden><p>${esc(m.desc)}</p>${abilityStats(m)}<p><strong>CA</strong> ${esc(m.ca)} · <strong>PG</strong> ${esc(m.pg)} · <strong>Movimiento</strong> ${esc(m.mv)}</p><p><strong>Ataque.</strong> ${esc(m.atq)}</p>${traitsHTML(m)}</div></article>`;
    }).join('') : '<p class="search-no-results">No hay criaturas con ese nombre. Prueba en español o en inglés.</p>';
  }
  $('monster-search').addEventListener('input',()=>{searchLimit=8;renderSearch();});
  $('clear-search').addEventListener('click',()=>{$('monster-search').value='';searchLimit=8;renderSearch();$('monster-search').focus();});
  $('more-monsters').addEventListener('click',()=>{searchLimit+=12;renderSearch();});
  $('search-results').addEventListener('click',e=>{
    const preview = e.target.closest('[data-preview]');
    if (preview) { const el=$('preview-'+preview.dataset.preview); el.hidden=!el.hidden; preview.setAttribute('aria-expanded',String(!el.hidden)); }
    const pin = e.target.closest('[data-pin]');
    if (pin) {
      const index = Number(pin.dataset.pin), monster = D.MONSTERS[index];
      const knownCopies = [...combatants,...removedCombatants.values()];
      const ordinal = Math.max(0,...knownCopies.filter(c=>c.monsterIndex===index).map(c=>c.ordinal)) + 1;
      const id = globalThis.crypto?.randomUUID?.() || `c${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      const c = C.makeCombatant(monster,index,id,ordinal);
      combatants.push(c);
      $('combat-cards').insertAdjacentHTML('beforeend',cardHTML(c));
      save(); syncCombatCount(); notice(`${C.monsterName(monster.name)} ${ordinal} · anclado a la mesa`);
    }
  });
  function cardHTML(c) {
    const m=D.MONSTERS[c.monsterIndex],name=C.monsterName(m.name),health=C.healthState(c.hp,m.pg);
    const target=esc(`${name} ${c.ordinal}`);
    const stepButton=(stat,delta,value)=>`<button type="button" data-stat="${stat}" data-delta="${delta}" aria-label="${delta<0?'Restar':'Sumar'} 1 ${stat==='hp'?'PG':'CA'} a ${target}" ${(delta<0&&value===0)||(delta>0&&value===99999)?'disabled':''}>${delta<0?'−':'+'}</button>`;
    const input=(stat,label,value)=>`<input id="${esc(c.id)}-${stat}" data-edit="${stat}" type="number" inputmode="numeric" min="0" max="99999" step="1" value="${value}" aria-label="${label} de ${target}">`;
    return `<article class="combat-card ${health}" data-combatant="${esc(c.id)}" data-hp-digits="${String(c.hp).length}" aria-label="${target}">
      <div class="card-overview">
        <header class="card-head"><div><h3>${esc(name)} <span class="count-badge">${c.ordinal}</span></h3><p class="card-status">Nivel ${esc(m.nv)} · ${esc(alignment(m.al))} · ${esc(m.mv)}</p></div><button type="button" class="card-remove" data-remove="${esc(c.id)}" aria-label="Cerrar ficha de ${target}" title="Cerrar ficha">×</button></header>
        <div class="armor-control"><span class="armor-label">Clase de armadura</span><strong class="armor-value" aria-label="Clase de armadura: ${esc(m.ca)}">${esc(m.ca)}</strong></div>
        <div class="stat-control hp-control"><div class="hp-label-row"><label for="${esc(c.id)}-hp">Puntos de golpe</label><span class="hp-condition">${health==='defeated'?'Fuera de combate':health==='wounded'?'Herido':''}</span></div><div class="stepper hp-stepper">${stepButton('hp',-1,c.hp)}<div class="hp-reading">${input('hp','Puntos de golpe',c.hp)}<span>de ${esc(m.pg)} PG</span></div>${stepButton('hp',1,c.hp)}</div></div>
      </div>
      <div class="hp-meter" aria-hidden="true"><span style="width:${Math.min(100,c.hp/Math.max(1,m.pg)*100)}%"></span></div>
      <div class="card-body"><p class="attack"><strong>ATQ</strong>${esc(m.atq)}</p><details class="monster-traits"><summary>Atributos y rasgos</summary>${abilityStats(m)}<p>${esc(m.desc)}</p>${traitsHTML(m)}</details></div>
    </article>`;
  }
  function syncCombatCount() {
    $('combat-count').textContent = combatants.length;
    $('combat-empty').hidden = combatants.length > 0 || removedCombatants.size > 0;
  }
  function renderCombat() {
    $('combat-cards').innerHTML = combatants.map(cardHTML).join('');
    syncCombatCount();
  }
  function refreshCombatant(card,c) {
    const m=D.MONSTERS[c.monsterIndex],health=C.healthState(c.hp,m.pg);
    for(const stat of ['hp']){
      card.querySelector(`[data-edit="${stat}"]`).value=c[stat];
      card.querySelector(`[data-stat="${stat}"][data-delta="-1"]`).disabled=c[stat]===0;
      card.querySelector(`[data-stat="${stat}"][data-delta="1"]`).disabled=c[stat]===99999;
    }
    card.querySelector('.hp-meter span').style.width=Math.min(100,c.hp/Math.max(1,m.pg)*100)+'%';
    card.dataset.hpDigits=String(c.hp).length;
    for(const state of ['normal','wounded','defeated'])card.classList.toggle(state,state===health);
    card.querySelector('.hp-condition').textContent=health==='defeated'?'Fuera de combate':health==='wounded'?'Herido':'';
  }
  function updateCombatant(card, stat, value) {
    const index=combatants.findIndex(c=>c.id===card.dataset.combatant);
    if(index<0)return;
    const before=combatants[index];
    if(String(value).trim()===''||!Number.isInteger(Number(value))){refreshCombatant(card,before);notice('Introduce un número entero para los PG.');return;}
    const after=C.changeStat(before,stat,value);
    combatants[index]=after;
    refreshCombatant(card,after);
    save();
  }
  $('combat-cards').addEventListener('click',e=>{
    const discard=e.target.closest('[data-delete-combatant]');
    if(discard){
      if(!removedCombatants.delete(discard.dataset.deleteCombatant))return;
      const placeholder=discard.closest('.removed-combat-card');
      const next=placeholder.nextElementSibling?.querySelector('button') || placeholder.previousElementSibling?.querySelector('button');
      placeholder.remove();syncCombatCount();
      (next||$('monster-search')).focus({preventScroll:true});return;
    }
    const restore=e.target.closest('[data-restore-combatant]');
    if(restore){
      const c=removedCombatants.get(restore.dataset.restoreCombatant);if(!c)return;
      const placeholder=restore.closest('.removed-combat-card');
      const byID=new Map(combatants.map(c=>[c.id,c]));byID.set(c.id,c);
      const cardID=c.id;placeholder.outerHTML=cardHTML(c);removedCombatants.delete(cardID);
      const cards=[...$('combat-cards').querySelectorAll('.combat-card')];
      combatants=cards.map(card=>byID.get(card.dataset.combatant));
      save();syncCombatCount();
      const card=cards.find(card=>card.dataset.combatant===cardID);
      card.querySelector('.card-remove').focus({preventScroll:true});
      notice(`${C.monsterName(D.MONSTERS[c.monsterIndex].name)} ${c.ordinal} · ficha recuperada`);return;
    }
    const remove=e.target.closest('[data-remove]');
    if(remove){
      const card=remove.closest('[data-combatant]');
      const c=combatants.find(c=>c.id===remove.dataset.remove);if(!c)return;
      removedCombatants.set(c.id,c);
      combatants=combatants.filter(c=>c.id!==remove.dataset.remove);
      const placeholder=document.createElement('div');placeholder.className='removed-combat-card';
      placeholder.innerHTML=`<span>${esc(C.monsterName(D.MONSTERS[c.monsterIndex].name))} ${c.ordinal} desanclado</span><div class="removed-card-actions"><button type="button" data-restore-combatant="${esc(c.id)}" aria-label="Recuperar la ficha desanclada">Recuperar ficha</button><button type="button" class="discard-card" data-delete-combatant="${esc(c.id)}" aria-label="Eliminar definitivamente esta ficha desanclada">Eliminar</button></div>`;
      card.replaceWith(placeholder);save();syncCombatCount();placeholder.querySelector('button').focus({preventScroll:true});return;
    }
    const card=e.target.closest('.combat-card');if(!card)return;
    const c=combatants.find(c=>c.id===card.dataset.combatant);if(!c)return;
    const btn=e.target.closest('[data-stat]');
    if(btn)updateCombatant(card,btn.dataset.stat,c[btn.dataset.stat]+Number(btn.dataset.delta));
  });
  $('combat-cards').addEventListener('change',e=>{if(e.target.matches('[data-edit]'))updateCombatant(e.target.closest('[data-combatant]'),e.target.dataset.edit,e.target.value);});

  // ANTORCHA: reloj absoluto. Los intervalos solo actualizan la pantalla.
  function setTorchMenu(open,returnFocus=false) {
    if(open)setDiceMenu(false);
    $('torch-panel').hidden=!open;
    $('mini-torch').setAttribute('aria-expanded',String(open));
    if(returnFocus)$('mini-torch').focus({preventScroll:true});
  }
  function clearLightEffects() {
    clearTimeout(lightTimeout);$('light-alert').hidden=true;
    document.body.classList.remove('light-pulse','urgent');
    if($('darkness-dialog').open)$('darkness-dialog').close();
  }
  function lightAlert(threshold) {
    clearLightEffects();
    if(threshold===0){
      setTorchMenu(false);setDiceMenu(false);
      if(typeof $('darkness-dialog').showModal==='function')$('darkness-dialog').showModal();
      else { $('light-alert-title').textContent='Todo es oscuridad';$('light-alert-text').textContent='La antorcha se ha consumido.';$('light-alert').hidden=false; }
      return;
    }
    const urgent=threshold===180000;
    $('light-alert-title').textContent=urgent?'La luz está a punto de morir':'La antorcha empieza a consumirse';
    $('light-alert-text').textContent=urgent?'Quedan 3 minutos. Preparad otra fuente de luz.':'Quedan 10 minutos de luz.';
    $('light-alert').hidden=false;$('light-alert').classList.toggle('urgent',urgent);
    // Reinicia una animación lenta de borde, sin destellos rápidos.
    requestAnimationFrame(()=>{document.body.classList.add('light-pulse');document.body.classList.toggle('urgent',urgent);});
    lightTimeout=setTimeout(()=>document.body.classList.remove('light-pulse','urgent'),5100);
  }
  function processAlerts(alerts){if(alerts.length){save();lightAlert(alerts[alerts.length-1]);}}
  let lastTimeText='';
  function renderTorch() {
    const left=torch.left(),text=C.formatTime(left),low=left<=180000&&torch.started;
    if(text!==lastTimeText){$('mini-time').textContent=text;lastTimeText=text;}
    $('mini-torch').classList.toggle('is-burning',torch.running);
    $('mini-torch').classList.toggle('low',low);
    const status=left===0?'Agotada':torch.running?'Encendida':torch.started?'En pausa':'Sin encender';
    $('torch-status').textContent=status;
    $('mini-torch').setAttribute('aria-label',`Antorcha: ${status.toLowerCase()}. ${Math.floor(Math.ceil(left/1000)/60)} minutos y ${Math.ceil(left/1000)%60} segundos restantes. Controles de la antorcha`);
    $('mini-torch').title=`Antorcha · ${status}`;
    const desired=torch.running?'Pausar':torch.started&&left>0?'Reanudar':'Encender antorcha';
    if($('torch-toggle').dataset.label!==desired){$('torch-toggle').innerHTML=(torch.running?'Ⅱ':icon('flame'))+desired;$('torch-toggle').dataset.label=desired;}
    document.querySelectorAll('[data-duration]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.duration)*60000===torch.duration));b.disabled=torch.started&&left>0;});
  }
  function tickTorch(){processAlerts(torch.tick());renderTorch();}
  $('torch-toggle').addEventListener('click',()=>{
    if(torch.running)processAlerts(torch.pause());
    else{clearLightEffects();torch.start();}
    save();renderTorch();
  });
  $('torch-reset').addEventListener('click',()=>{torch.reset(torch.duration/60000);clearLightEffects();save();renderTorch();});
  document.querySelectorAll('[data-duration]').forEach(btn=>btn.addEventListener('click',()=>{torch.reset(Number(btn.dataset.duration));clearLightEffects();save();renderTorch();}));
  $('dismiss-light').addEventListener('click',clearLightEffects);
  $('new-torch').addEventListener('click',()=>{clearLightEffects();torch.reset(torch.duration/60000);torch.start();save();renderTorch();});
  $('stay-dark').addEventListener('click',()=>$('darkness-dialog').close());
  $('mini-torch').addEventListener('click',()=>setTorchMenu($('torch-panel').hidden));
  document.addEventListener('click',e=>{if(!e.target.closest('#torch-menu'))setTorchMenu(false);});
  document.addEventListener('focusin',e=>{if(!e.target.closest('#torch-menu'))setTorchMenu(false);});
  setInterval(tickTorch,250);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)tickTorch();else save();});
  window.addEventListener('pagehide',save);
  window.addEventListener('pageshow',tickTorch);

  // DADOS: los números intermedios son visuales; solo el resultado final se guarda.
  function setDiceMenu(open,returnFocus=false) {
    if(open)setTorchMenu(false);
    $('dice-panel').hidden=!open;
    $('mini-dice').setAttribute('aria-expanded',String(open));
    if(returnFocus)$('mini-dice').focus({preventScroll:true});
  }
  $('mini-dice').addEventListener('click',()=>setDiceMenu($('dice-panel').hidden));
  $('close-dice').addEventListener('click',()=>setDiceMenu(false,true));
  document.addEventListener('click',e=>{if(!e.target.closest('#dice-menu'))setDiceMenu(false);});
  document.addEventListener('focusin',e=>{if(!e.target.closest('#dice-menu'))setDiceMenu(false);});
  $('dice-buttons').innerHTML=C.DICE.map(sides=>`<button type="button" class="die-button" data-die="${sides}" aria-label="Lanzar d${sides}">d${sides}</button>`).join('');
  let diceBusy=false;
  const diceHistory=[];
  $('dice-buttons').addEventListener('click',e=>{
    const button=e.target.closest('[data-die]');if(!button||diceBusy)return;
    diceBusy=true;
    const sides=Number(button.dataset.die),value=C.die(sides);
    const buttons=[...$('dice-buttons').querySelectorAll('button')];
    buttons.forEach(b=>{b.setAttribute('aria-disabled','true');b.classList.toggle('selected',b===button);});
    $('dice-buttons').setAttribute('aria-busy','true');
    $('dice-result').className='dice-result';
    $('dice-result-label').textContent=`DADO d${sides}`;
    $('dice-message').textContent='Lanzando…';
    $('dice-announcement').textContent='';
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const showFrame=()=>{$('dice-value').textContent=1+Math.floor(Math.random()*sides);};
    if(!reduced)showFrame();else $('dice-value').textContent='…';
    const frames=reduced?null:setInterval(showFrame,75);
    setTimeout(()=>{
      if(frames!==null)clearInterval(frames);
      const critical=sides===20&&value===20,fumble=sides===20&&value===1;
      const effect=critical?'critical':fumble?'fumble':'';
      const message=critical?'¡ÉXITO CRÍTICO!':fumble?'¡PIFIA!':'Resultado';
      $('dice-value').textContent=value;
      $('dice-result').className='dice-result settled '+effect;
      $('dice-message').textContent=message;
      $('dice-announcement').textContent=`d${sides}: ${value}. ${message}`;
      diceHistory.unshift({sides,value,effect});diceHistory.splice(5);
      $('dice-history').innerHTML=diceHistory.map(r=>`<li class="${r.effect}"><span>d${r.sides}</span><strong>${r.value}</strong>${r.effect?`<span class="history-extreme">${r.effect==='critical'?'Crítico':'Pifia'}</span>`:''}</li>`).join('');
      $('dice-history-empty').hidden=true;
      buttons.forEach(b=>b.removeAttribute('aria-disabled'));
      $('dice-buttons').removeAttribute('aria-busy');diceBusy=false;
    },reduced?50:750);
  });

  // ORÁCULO: reglas leídas del PDF SoloDark V1, páginas impresas 9–12.
  $('oracle-buttons').addEventListener('click',e=>{
    const button=e.target.closest('[data-odds]');if(!button)return;
    $('oracle-buttons').querySelectorAll('button').forEach(b=>b.classList.toggle('selected',b===button));
    const result=C.askOracle(button.dataset.odds);
    const diceLabel=result.odds==='likely'?'Ventaja':result.odds==='unlikely'?'Desventaja':'d20';
    const inspiration=result.twist?G.prompt():null;
    const effect=result.roll===1?'fumble':result.roll===20?'critical':'';
    const banner=effect?`<p class="oracle-extreme">${effect==='fumble'?'¡PIFIA!':'¡ÉXITO CRÍTICO!'}</p>`:'';
    $('oracle-result').innerHTML=`<div class="oracle-reading ${effect}">${banner}<span class="oracle-roll-label">RESULTADO D20</span><strong class="oracle-roll">${result.roll}</strong><p class="oracle-answer">${esc(result.answer)}</p><p>${esc(result.detail)}</p>${inspiration?`<div class="oracle-prompt"><p class="prompt-words">${esc(plain(inspiration.nombre))}</p><p class="roll-info">${esc(inspiration.rolls)}</p></div>`:''}<p class="roll-info">${diceLabel}: [${result.rolls.join(', ')}]${result.rolls.length>1?' → '+result.roll:''}</p></div>`;
  });

  // GENERADORES: una sola tarjeta temporal. No se escribe en ningún almacenamiento.
  const labels={nombre:'Nombre',nombreCompleto:'Nombre',name:'Nombre',nombreIngles:'Nombre original',desc:'Descripción',descripcion:'Descripción',criatura:'Encuentro',nivel:'Nivel',distancia:'Distancia',actividad:'Actividad',actitud:'Reacción',tesoro:'Tesoro',perfil:'Perfil',ocupacion:'Ocupación',apariencia:'Apariencia',habito:'Hábito',secreto:'Secreto',calidad:'Calidad',etiquetas:'Rasgos',trasfondo:'Trasfondo',instinto:'Instinto',coste:'Coste',combate:'Combate',pgVal:'Puntos de golpe',renombre:'Renombre',fama:'Reputación',riqueza:'Riqueza',alineamiento:'Alineamiento',tactica:'Táctica',tacticas:'Tácticas',miembros:'Miembros',tipo:'Tipo',bonificador:'Bonificador',bono:'Bonificador',rasgo:'Rasgo',rasgoUnico:'Rasgo singular',rasgoTemperamento:'Temperamento',beneficios:'Beneficios',beneficio:'Beneficio',maldiciones:'Maldiciones',maldicion:'Maldición',conjuro:'Conjuro',resultado:'Resultado',esConsciente:'¿Tiene consciencia?',personalidad:'Personalidad',comunicacion:'Comunicación',virtudes:'Virtudes',defectos:'Defectos',valor:'Valor',esGigante:'¿Es gigante?',caracteristica:'Característica',objeto:'Objeto',detalle:'Detalle',efecto:'Efecto',constructor:'Constructores',funcion:'Función original',ruina:'Causa de la ruina',escala:'Escala',temas:'Temas',clasificacion:'Clasificación',contenidoResumen:'Contenido',temaActivo:'Tema',trampa:'Trampa',activador:'Activador',terreno:'Terreno',adjetivo:'Descriptor',nombreClave:'Nombre clave',template:'Composición',lugar:'Lugar',lugarAventura:'Lugar de aventura',accion:'Acción',objetivo:'Objetivo',contexto:'Contexto',mision:'Misión',distritos:'Distritos',puntos:'Puntos de interés',categoria:'Categoría',menu:'Menú',bebidas:'Bebidas',cliente:'Cliente',rumor:'Rumor',fuente:'Fuente',veracidad:'Veracidad',detalleVeracidad:'Interpretación',suceso:'Suceso',extra:'Propiedades',sedeGobierno:'Sede de gobierno'};
  const hiddenKeys=new Set(['raw2d6','totalReac','sedeGovIdx','opcion1','opcion2','parte1','parte2','num','die','d100']);
  const labelFor=key=>labels[key]||key.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/^./,c=>c.toUpperCase());
  const isRoll=key=>/^(roll|rolls)/i.test(key);
  function valueHTML(value,depth=0) {
    if(value===null||value===undefined)return '—';
    if(typeof value==='boolean')return value?'Sí':'No';
    if(Array.isArray(value))return '<ul>'+value.map(item=>'<li>'+valueHTML(item,depth+1)+'</li>').join('')+'</ul>';
    if(typeof value==='object')return fieldsHTML(value,null,depth+1);
    return esc(plain(value));
  }
  function fieldsHTML(object,titleKey,depth=0) {
    return '<dl class="result-fields">'+Object.entries(object).filter(([key,v])=>key!==titleKey&&!hiddenKeys.has(key)&&!isRoll(key)&&v!==undefined&&v!==null&&v!==''&&!(typeof v==='object'&&Object.keys(v).length===0)).map(([key,value])=>`<div class="result-field"><dt>${esc(labelFor(key))}</dt><dd>${valueHTML(value,depth)}</dd></div>`).join('')+'</dl>';
  }
  const generatorEmpty=$('generator-result').innerHTML;
  function clearGeneration(){$('generator-result').innerHTML=generatorEmpty;$('clear-generation').hidden=true;}
  const categories=[...new Set(G.catalog.map(g=>g.category))];
  $('generator-category').innerHTML=categories.map(c=>`<option>${esc(c)}</option>`).join('');
  function renderGeneratorTypes() {
    const options=G.catalog.filter(g=>g.category===$('generator-category').value);
    $('generator-select').innerHTML=options.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');
    renderGeneratorOptions();
  }
  function renderGeneratorOptions() {
    const spec=G.catalog.find(g=>g.id===$('generator-select').value);
    $('generator-options').innerHTML=(spec.options||[]).map(f=>`<label for="gen-${f.id}">${esc(f.label)}</label>${f.type==='number'?`<input id="gen-${f.id}" type="number" min="${f.min}" max="${f.max}" step="1" value="${f.value}">`:`<select id="gen-${f.id}">${f.options.map(([key,name])=>`<option value="${esc(key)}" ${key===f.value?'selected':''}>${esc(name)}</option>`).join('')}</select>`}`).join('');
    clearGeneration();
  }
  $('generator-category').addEventListener('change',renderGeneratorTypes);
  $('generator-select').addEventListener('change',renderGeneratorOptions);
  $('generator-options').addEventListener('change',clearGeneration);
  $('clear-generation').addEventListener('click',clearGeneration);
  $('generate-button').addEventListener('click',()=>{
    const spec=G.catalog.find(g=>g.id===$('generator-select').value),options={};
    for(const f of spec.options||[])options[f.id]=$('gen-'+f.id).value;
    try{
      const result=G.generate(spec.id,options);
      if(spec.id==='settlement'&&Number.isInteger(result.sedeGovIdx)){
        result.sedeGobierno=`Distrito ${result.sedeGovIdx} · ${plain(result.distritos[result.sedeGovIdx-1]?.nombre||'')}`;
        result.distritos=result.distritos.map(d=>({...d,nombre:`${d.num}. ${d.nombre}`}));
      }
      const titleKey=['nombre','nombreCompleto','name','item','mision','titulo'].find(key=>typeof result[key]==='string'&&result[key]);
      const title=titleKey?plain(result[titleKey]):spec.name;
      const rolls=Object.entries(result).filter(([key])=>isRoll(key)).map(([key,value])=>`${key==='roll'&&typeof value==='number'?'d100: ':''}${plain(value)}`);
      $('generator-result').innerHTML=`<article class="generated-result"><p class="result-type">${esc(spec.name)}</p><h2 class="generated-title">${esc(title)}</h2>${fieldsHTML(result,titleKey)}${rolls.length?`<details class="result-rolls"><summary>Ver tiradas</summary><p>${esc(rolls.join('\n'))}</p></details>`:''}</article>`;
      $('clear-generation').hidden=false;
    }catch(error){$('generator-result').innerHTML='<p class="search-no-results">No se ha podido resolver esta tirada. Elige otra tabla o inténtalo de nuevo.</p>';console.error('Generador:',spec.id,error);}
  });
  document.addEventListener('keydown',e=>{
    const editing=e.target.matches('input,textarea,select,[contenteditable="true"]');
    if(e.key==='/'&&!editing&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!$('darkness-dialog').open){e.preventDefault();activateTab('mesa');$('monster-search').focus();}
    if(e.key==='Escape'){
      $('light-alert').hidden=true;
      if(!$('dice-panel').hidden){e.preventDefault();setDiceMenu(false,true);}
      if(!$('torch-panel').hidden){e.preventDefault();setTorchMenu(false,true);}
    }
  });
  renderSearch();renderCombat();renderGeneratorTypes();tickTorch();
  if(!storageOK)document.querySelector('footer>span:nth-child(2)').textContent='Guardado no disponible. Mantén abierta esta pestaña.';
})();
