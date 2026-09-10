/* Lógica de la mesa. Sin dependencias; compatible con navegador y Node.js. */
(function (root, factory) {
  const core = factory();
  if (typeof module === 'object' && module.exports) module.exports = core;
  else root.SDCore = core;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DICE = [2, 4, 6, 8, 10, 12, 20, 100];
  const THRESHOLDS = [600000, 180000, 0];
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const clampInt = (value, min = 0, max = 99999) => Math.max(min, Math.min(max, Math.trunc(Number(value) || 0)));
  function die(sides) {
    if (!Number.isSafeInteger(sides) || sides < 2 || sides > 100000) throw new RangeError('Dado no válido');
    if (globalThis.crypto?.getRandomValues) {
      const bucket = new Uint32Array(1);
      const limit = Math.floor(4294967296 / sides) * sides;
      do { globalThis.crypto.getRandomValues(bucket); } while (bucket[0] >= limit);
      return bucket[0] % sides + 1;
    }
    return Math.floor(Math.random() * sides) + 1;
  }
  function oracleResult(roll) {
    if (!Number.isInteger(roll) || roll < 1 || roll > 20) throw new RangeError('Tirada no válida');
    const twist = roll === 10, extreme = roll === 1 || roll === 20;
    const but = roll % 2 === 1 && roll !== 1;
    let answer = roll >= 11 ? 'Sí' : 'No';
    let detail = 'Interpreta la respuesta según la situación.';
    if (twist) { answer = 'Giro inesperado'; detail = 'Algo cambia. Usa estas palabras para interpretar el giro.'; }
    else if (extreme) { answer += ', y además…'; detail = 'La respuesta es la versión más extrema posible.'; }
    else if (but) { answer += ', pero…'; detail = 'Añade un matiz que cambie la situación sin anular la respuesta.'; }
    return {roll, answer, detail, twist, extreme, but};
  }
  function askOracle(odds = 'even', roller = die) {
    const rolls = [roller(20)];
    if (odds === 'likely' || odds === 'unlikely') rolls.push(roller(20));
    const value = odds === 'likely' ? Math.max(...rolls) : odds === 'unlikely' ? Math.min(...rolls) : rolls[0];
    return {...oracleResult(value), rolls, odds};
  }
  function searchMonsters(monsters, query) {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    return monsters.filter(monster => words.every(word => normalize(monster.name).includes(word)));
  }
  function monsterName(name) {
    const spanish = String(name).replace(/\s*\([^)]*\)\s*/g, ' ').trim().toLocaleLowerCase('es');
    return spanish.charAt(0).toLocaleUpperCase('es') + spanish.slice(1);
  }
  function makeCombatant(monster, monsterIndex, id, ordinal = 1) {
    return {id: String(id), monsterIndex, hp: clampInt(monster.pg), ac: clampInt(monster.ca), ordinal: clampInt(ordinal, 1)};
  }
  function changeStat(combatant, stat, value) {
    if (stat !== 'hp' && stat !== 'ac') throw new Error('Característica no válida');
    return {...combatant, [stat]: clampInt(value)};
  }
  function adjustHitPoints(combatant, amount, action) {
    if (!Number.isInteger(amount) || amount < 1 || amount > 99999) throw new RangeError('Introduce una cantidad entera entre 1 y 99999');
    if (action !== 'damage' && action !== 'heal') throw new Error('Acción no válida');
    return changeStat(combatant, 'hp', combatant.hp + (action === 'heal' ? amount : -amount));
  }
  function healthState(hp, initialHP) {
    if (hp <= 0) return 'defeated';
    return initialHP > 0 && hp <= initialHP / 2 ? 'wounded' : 'normal';
  }
  // Un nivel de deshacer por criatura, independiente de las demás fichas.
  // El historial es de esta sesión; el formato de guardado de la partida no cambia.
  class CombatHistory {
    constructor() { this.previous = new Map(); }
    record(before, after) {
      if (before.id !== after.id) throw new Error('Las fichas no coinciden');
      if (before.hp === after.hp && before.ac === after.ac) return false;
      this.previous.set(before.id, {hp:before.hp, ac:before.ac});
      return true;
    }
    canUndo(id) { return this.previous.has(id); }
    undo(combatant) {
      const previous = this.previous.get(combatant.id);
      if (!previous) return combatant;
      this.previous.delete(combatant.id);
      return {...combatant, ...previous};
    }
  }
  class Torch {
    constructor(saved = null) {
      this.duration = saved?.duration === 1800000 ? 1800000 : 3600000;
      this.remaining = Number.isFinite(saved?.remaining) ? Math.max(0, Math.min(this.duration, saved.remaining)) : this.duration;
      this.endAt = Number.isFinite(saved?.endAt) ? saved.endAt : null;
      this.running = Boolean(saved?.running && this.endAt !== null);
      this.started = Boolean(saved?.started);
      this.alerted = THRESHOLDS.filter(t => Array.isArray(saved?.alerted) && saved.alerted.includes(t));
    }
    left(now = Date.now()) {
      return this.running ? Math.max(0, Math.min(this.duration, this.endAt - now)) : this.remaining;
    }
    start(now = Date.now()) {
      if (this.running) return;
      if (this.remaining <= 0) this.reset(this.duration / 60000);
      this.endAt = now + this.remaining;
      this.running = true;
      this.started = true;
    }
    pause(now = Date.now()) {
      const alerts = this.tick(now);
      this.remaining = this.left(now);
      this.endAt = null;
      this.running = false;
      return alerts;
    }
    reset(minutes = 60) {
      this.duration = minutes === 30 ? 1800000 : 3600000;
      this.remaining = this.duration;
      this.endAt = null;
      this.running = false;
      this.started = false;
      this.alerted = [];
    }
    tick(now = Date.now()) {
      if (!this.started || !this.running) return [];
      const remaining = this.left(now), alerts = [];
      for (const threshold of THRESHOLDS) {
        if (remaining <= threshold && !this.alerted.includes(threshold)) {
          this.alerted.push(threshold);
          alerts.push(threshold);
        }
      }
      this.remaining = remaining;
      if (remaining === 0) { this.running = false; this.endAt = null; }
      return alerts;
    }
    serialize() { return {duration:this.duration, remaining:this.remaining, endAt:this.endAt, running:this.running, started:this.started, alerted:[...this.alerted]}; }
  }
  function formatTime(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
  }
  // Tabla d100 de nombres de mazmorra de SoloDark, págs. 7–8.
  // 01 y 100 tienen una entrada; 50–53 comparten otra. No son 50 resultados equiprobables.
  function dungeonNameIndex(roll) {
    if (roll === 1) return 0;
    if (roll <= 49) return Math.floor(roll / 2);
    if (roll <= 53) return 25;
    if (roll <= 99) return 26 + Math.floor((roll - 54) / 2);
    return 49;
  }
  return {DICE, THRESHOLDS, die, normalize, clampInt, oracleResult, askOracle, searchMonsters, monsterName, makeCombatant, changeStat, adjustHitPoints, healthState, CombatHistory, Torch, formatTime, dungeonNameIndex};
});
