/* Registro de tablas. Los resultados solo viven en la pestaña de generadores. */
(function (root) {
  'use strict';
  const D = root.SD_DATA, C = root.SDCore;
  const pick = values => values[C.die(values.length) - 1];
  // Los motores heredados usan el mismo lanzador que la nueva aplicación.
  for (const object of Object.values(D)) {
    if (object && typeof object === 'object' && !Array.isArray(object)) {
      if (typeof object.d === 'function') object.d = C.die;
      if (typeof object.pick === 'function') object.pick = pick;
    }
  }
  function prompt() {
    const verbRoll = C.die(100), nounRoll = C.die(100);
    return {nombre:D.ORACLE.promptsVerbs[verbRoll-1] + ' + ' + D.ORACLE.promptsNouns[nounRoll-1], rolls:`Verbo: d100 [${verbRoll}] · Sustantivo: d100 [${nounRoll}]`};
  }
  function dungeonName() {
    const rolls = [C.die(100), C.die(100), C.die(100)];
    const [a,b,c] = rolls.map(C.dungeonNameIndex);
    return {nombre:`${D.ORACLE.dungeonNamesCol1_ES[a]} ${D.ORACLE.dungeonNamesCol2_ES[b]} de(l) ${D.ORACLE.dungeonNamesCol3_ES[c]}`, nombreIngles:`${D.ORACLE.dungeonNamesCol1[a]} of the ${D.ORACLE.dungeonNamesCol2[b]} ${D.ORACLE.dungeonNamesCol3[c]}`, rolls:`3d100 independientes: [${rolls.join(', ')}] · SoloDark, págs. 7–8`};
  }
  // El antiguo motor elegía 2–11 de forma uniforme y lo rotulaba «2d6».
  // Conservamos los rangos de su tabla y tiramos realmente 2d6 al repetir.
  D.MAGIC_ARMOR.rollArmorType = function () {
    let roll = C.die(6) + C.die(6), mithral = roll === 12;
    const rolls = [roll];
    if (mithral) { do { roll = C.die(6) + C.die(6); rolls.push(roll); } while (roll === 12); }
    const entry = this.types.find(t => roll >= t.min && roll <= t.max);
    return {name:entry.name + (mithral ? ' de Mitrilo' : ''), isMithral:mithral, rolls:'2d6: ' + rolls.join(' → ')};
  };
  function event() {
    const roll = C.die(100);
    const entry = D.SOMETHING_HAPPENS.entries.find(e => roll >= e.min && roll <= e.max);
    return {nombre:'Algo sucede', suceso:entry.desc, rolls:`d100 [${roll}]`};
  }
  const specs = {
    encounter:[{id:'environment',label:'Entorno',options:Object.entries(D.ENCOUNTER_TABLES).sort((a,b)=>a[1].name.localeCompare(b[1].name,'es')).map(([key,t])=>[key,t.name]),value:'dungeon_1_3'}, {id:'charisma',label:'Modificador de Carisma · reacción',type:'number',min:-20,max:20,value:0}],
    treasure:[{id:'tier',label:'Nivel del tesoro',options:[['0-3','Niveles 0–3'],['4-6','Niveles 4–6'],['7-9','Niveles 7–9'],['10+','Nivel 10 o más']],value:'0-3'}],
    settlement:[{id:'size',label:'Tamaño',options:[['aldea','Aldea'],['pueblo','Pueblo'],['ciudad','Ciudad'],['metropolis','Metrópolis']],value:'pueblo'}],
    wealth:[{id:'wealth',label:'Categoría',options:[['pobre','Pobre'],['estandar','Estándar'],['rica','Rica']],value:'estandar'}]
  };
  const catalog = [
    {id:'encounter',category:'Encuentros',name:'Encuentro por entorno',options:specs.encounter,run:o=>D.ENCOUNTERS.generateEncounter(o.environment, C.clampInt(o.charisma,-20,20))},
    {id:'event',category:'Encuentros',name:'Algo sucede',run:event},
    {id:'rumor',category:'Encuentros',name:'Rumor',run:()=>D.RUMORS.generateRumor()},
    {id:'name',category:'Nombres y personajes',name:'Nombre de personaje',run:()=>({nombre:pick(D.NPCS.nombres)})},
    {id:'npc',category:'Nombres y personajes',name:'PNJ completo',run:()=>D.NPCS.generateNpc()},
    {id:'follower',category:'Nombres y personajes',name:'Seguidor',run:()=>D.NPCS.generateFollower()},
    {id:'rivals',category:'Nombres y personajes',name:'Banda de aventureros rivales',run:()=>D.NPCS.generateRivals()},
    {id:'dungeon-name',category:'Nombres y personajes',name:'Nombre de mazmorra · SoloDark',run:dungeonName},
    {id:'item-name',category:'Nombres y personajes',name:'Nombre de objeto mágico',run:()=>D.MAGIC_PERSONALITY.generateItemNameIdea()},
    {id:'weapon',category:'Armas y magia',name:'Arma mágica',run:()=>D.MAGIC_WEAPONS.generateWeapon()},
    {id:'armor',category:'Armas y magia',name:'Armadura mágica',run:()=>D.MAGIC_ARMOR.generateArmor()},
    {id:'utility',category:'Armas y magia',name:'Objeto mágico de utilidad',run:()=>D.MAGIC_UTILITY.generateUtilityItem()},
    {id:'potion',category:'Armas y magia',name:'Poción',run:()=>D.MAGIC_POTIONS.generatePotion()},
    {id:'mix-potions',category:'Armas y magia',name:'Mezcla de pociones',run:()=>D.MAGIC_POTIONS.mixPotions()},
    {id:'scroll',category:'Armas y magia',name:'Pergamino',run:()=>D.MAGIC_SPELLS.generateScroll()},
    {id:'wand',category:'Armas y magia',name:'Varita',run:()=>D.MAGIC_SPELLS.generateWand()},
    {id:'magic-item',category:'Armas y magia',name:'Objeto mágico aleatorio',run:()=>D.TREASURE_ENGINE.generateRandomMagicItem()},
    {id:'singular',category:'Armas y magia',name:'Objeto singular',run:()=>D.SINGULAR_ITEMS.getRandomSingular()},
    {id:'personality',category:'Armas y magia',name:'Personalidad de un objeto',run:()=>D.MAGIC_PERSONALITY.generatePersonality()},
    {id:'treasure',category:'Tesoros y dones',name:'Tesoro por nivel',options:specs.treasure,run:o=>D.TREASURE_ENGINE.generate(o.tier)},
    {id:'gem',category:'Tesoros y dones',name:'Gema',run:()=>D.MUNDANE_TABLES.generateGem()},
    {id:'luxury',category:'Tesoros y dones',name:'Objeto de lujo',run:()=>D.MUNDANE_TABLES.generateLuxuryItem()},
    {id:'oath',category:'Tesoros y dones',name:'Juramento',run:()=>D.MUNDANE_TABLES.generateOath()},
    {id:'secret',category:'Tesoros y dones',name:'Secreto',run:()=>D.MUNDANE_TABLES.generateSecret()},
    {id:'blessing',category:'Tesoros y dones',name:'Bendición',run:()=>D.MUNDANE_TABLES.generateBlessing()},
    {id:'boon',category:'Tesoros y dones',name:'Don aleatorio',run:()=>D.MUNDANE_TABLES.generateBoon()},
    {id:'dungeon',category:'Mazmorras',name:'Mazmorra',run:()=>D.DUNGEONS.generateDungeonBase()},
    {id:'room',category:'Mazmorras',name:'Sala',run:()=>D.DUNGEONS.generateRoom()},
    {id:'trap',category:'Mazmorras',name:'Trampa',run:()=>D.DUNGEONS.generateTrap()},
    {id:'region',category:'Lugares y aventuras',name:'Región',run:()=>D.CARTOGRAPHY.generateRegion()},
    {id:'place',category:'Lugares y aventuras',name:'Lugar',run:()=>D.CARTOGRAPHY.generateLugar()},
    {id:'hook',category:'Lugares y aventuras',name:'Gancho de aventura',run:()=>D.CARTOGRAPHY.generateAventuraGancho()},
    {id:'settlement',category:'Lugares y aventuras',name:'Asentamiento',options:specs.settlement,run:o=>D.SETTLEMENTS.generateSettlement(o.size)},
    {id:'tavern',category:'Lugares y aventuras',name:'Taberna',options:specs.wealth,run:o=>D.SETTLEMENTS.generateTavern(o.wealth)},
    {id:'shop',category:'Lugares y aventuras',name:'Tienda',options:specs.wealth,run:o=>D.SETTLEMENTS.generateShop(o.wealth)},
    {id:'prompt',category:'Inspiración SoloDark',name:'Verbo + sustantivo',run:prompt}
  ];
  function generate(id, options = {}) {
    const spec = catalog.find(item => item.id === id);
    if (!spec) throw new Error('Tabla no encontrada');
    const values = {};
    for (const field of spec.options || []) {
      const v = options[field.id] ?? field.value;
      if (field.options && !field.options.some(([key])=>key===v)) throw new Error('Opción no válida');
      values[field.id] = v;
    }
    return spec.run(values);
  }
  root.SDGenerators = {catalog, generate, prompt};
})(typeof window !== 'undefined' ? window : globalThis);
