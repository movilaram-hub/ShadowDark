/* Tablas y motores reutilizados de ShadowdarkGM.rar, facilitado por el usuario.
   Se conserva su contenido. La interfaz y las reglas del oráculo están en archivos independientes. */

/* Fuente: cartography.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.CARTOGRAPHY = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  nombresPropios: [
    "Árpád", "Béla", "Géza", "István", "Kálmán", "László", "Zoltán",
    "Akin", "Babatunde", "Ebele", "Folami", "Kayode", "Olufemi", "Sipho",
    "Aapo", "Eetu", "Ilmari", "Kalevi", "Onni", "Tapio", "Väinö", "Viljami"
  ],

  // 1.2 ELEMENTOS DE REGIÓN (1d100)
  elementosRegion: function(roll) {
    var table = {
      1: { t: "Arenas", a: "Yermo", n: "PROPIO" }, 2: { t: "Arenas", a: "Yermo", n: "PROPIO" },
      3: { t: "Bahía", a: "Abrupto", n: "Bruja" }, 4: { t: "Bahía", a: "Abrupto", n: "Bruja" },
      5: { t: "Bajío", a: "Amarillo", n: "Calavera" }, 6: { t: "Bajío", a: "Amarillo", n: "Calavera" },
      7: { t: "Bosque", a: "Ardiente", n: "Ceniza" }, 8: { t: "Bosque", a: "Ardiente", n: "Ceniza" },
      9: { t: "Brezal", a: "Árido", n: "Cielo" }, 10: { t: "Brezal", a: "Árido", n: "Cielo" },
      11: { t: "Canal", a: "Azul", n: "Demonio" }, 12: { t: "Canal", a: "Azul", n: "Demonio" },
      13: { t: "Cañada", a: "Bendito", n: "Desesperación" }, 14: { t: "Cañada", a: "Bendito", n: "Desesperación" },
      15: { t: "Cañón", a: "Blanco", n: "Desolación" }, 16: { t: "Cañón", a: "Blanco", n: "Desolación" },
      17: { t: "Cerros", a: "Borroso", n: "Destino" }, 18: { t: "Cerros", a: "Borroso", n: "Destino" },
      19: { t: "Ciénaga", a: "Brillante", n: "Dios" }, 20: { t: "Ciénaga", a: "Brillante", n: "Dios" },
      21: { t: "Colinas", a: "Brumoso", n: "Dragón" }, 22: { t: "Colinas", a: "Brumoso", n: "Dragón" },
      23: { t: "Cumbres", a: "Caído", n: "Esperanza" }, 24: { t: "Cumbres", a: "Caído", n: "Esperanza" },
      25: { t: "Desierto", a: "Clara", n: "Espina" }, 26: { t: "Desierto", a: "Clara", n: "Espina" },
      27: { t: "Dunas", a: "Doradas", n: "Fantasma" }, 28: { t: "Dunas", a: "Doradas", n: "Fantasma" },
      29: { t: "Erial", a: "Eterno", n: "Fuego" }, 30: { t: "Erial", a: "Eterno", n: "Fuego" },
      31: { t: "Escarpe", a: "Fragoso", n: "Furia" }, 32: { t: "Escarpe", a: "Fragoso", n: "Furia" },
      33: { t: "Estepa", a: "Frío", n: "Gigante" }, 34: { t: "Estepa", a: "Frío", n: "Gigante" },
      35: { t: "Fangal", a: "Funesto", n: "Honor" }, 36: { t: "Fangal", a: "Funesto", n: "Honor" },
      37: { t: "Fosa", a: "Furtivo", n: "Horror" }, 38: { t: "Fosa", a: "Furtivo", n: "Horror" },
      39: { t: "Franja", a: "Helado", n: "Hueso" }, 40: { t: "Franja", a: "Helado", n: "Hueso" },
      41: { t: "Iceberg", a: "Infinito", n: "Humo" }, 42: { t: "Iceberg", a: "Infinito", n: "Humo" },
      43: { t: "Jungla", a: "Inquieto", n: "Infierno" }, 44: { t: "Jungla", a: "Inquieto", n: "Infierno" },
      45: { t: "Ladera", a: "Largo", n: "Lluvia" }, 46: { t: "Ladera", a: "Largo", n: "Lluvia" },
      47: { t: "Lago", a: "Lejano", n: "Luz" }, 48: { t: "Lago", a: "Lejano", n: "Luz" },
      49: { t: "Lamedal", a: "Letal", n: "Maldición" }, 50: { t: "Lamedal", a: "Letal", n: "Maldición" },
      51: { t: "Llanos", a: "Letal", n: "Miedo" }, 52: { t: "Llanos", a: "Letal", n: "Miedo" },
      53: { t: "Llanuras", a: "Maldito", n: "Muerte" }, 54: { t: "Llanuras", a: "Maldito", n: "Muerte" },
      55: { t: "Mar", a: "Malvado", n: "Muerto" }, 56: { t: "Mar", a: "Malvado", n: "Muerto" },
      57: { t: "Marca", a: "Marchito", n: "Niebla" }, 58: { t: "Marca", a: "Marchito", n: "Niebla" },
      59: { t: "Marisma", a: "Mortal", n: "Oro" }, 60: { t: "Marisma", a: "Mortal", n: "Oro" },
      61: { t: "Marjal", a: "Muerto", n: "Oscuridad" }, 62: { t: "Marjal", a: "Muerto", n: "Oscuridad" },
      63: { t: "Matorral", a: "Negro", n: "Paraíso" }, 64: { t: "Matorral", a: "Negro", n: "Paraíso" },
      65: { t: "Meseta", a: "Olvidado", n: "Peligro" }, 66: { t: "Meseta", a: "Olvidado", n: "Peligro" },
      67: { t: "Montaña", a: "Oscuro", n: "Pesadumbre" }, 68: { t: "Montaña", a: "Oscuro", n: "Pesadumbre" },
      69: { t: "Monte", a: "Pardo", n: "Plata" }, 70: { t: "Monte", a: "Pardo", n: "Plata" },
      71: { t: "Muro", a: "Peligroso", n: "Refugio" }, 72: { t: "Muro", a: "Peligroso", n: "Refugio" },
      73: { t: "Pantano", a: "Pétrea", n: "Reina" }, 74: { t: "Pantano", a: "Pétrea", n: "Reina" },
      75: { t: "Paraje", a: "Plateado", n: "Rey" }, 76: { t: "Paraje", a: "Plateado", n: "Rey" },
      77: { t: "Páramo", a: "Púrpura", n: "Salvador" }, 78: { t: "Páramo", a: "Púrpura", n: "Salvador" },
      79: { t: "Picos", a: "Rajada", n: "Señor" }, 80: { t: "Picos", a: "Rajada", n: "Señor" },
      81: { t: "Pradera", a: "Regio", n: "Serpiente" }, 82: { t: "Pradera", a: "Regio", n: "Serpiente" },
      83: { t: "Prado", a: "Rojizo", n: "Sol" }, 84: { t: "Prado", a: "Rojizo", n: "Sol" },
      85: { t: "Risco", a: "Rojo", n: "Sombra" }, 86: { t: "Risco", a: "Rojo", n: "Sombra" },
      87: { t: "Rivera", a: "Roto", n: "Tormenta" }, 88: { t: "Rivera", a: "Roto", n: "Tormenta" },
      89: { t: "Sabana", a: "Sagrado", n: "Traidor" }, 90: { t: "Sabana", a: "Sagrado", n: "Traidor" },
      91: { t: "Sierra", a: "Salvaje", n: "Tristeza" }, 92: { t: "Sierra", a: "Salvaje", n: "Tristeza" },
      93: { t: "Soto", a: "Sombrío", n: "Trol" }, 94: { t: "Soto", a: "Sombrío", n: "Trol" },
      95: { t: "Soto", a: "Temible", n: "Trueno" }, 96: { t: "Soto", a: "Temible", n: "Trueno" },
      97: { t: "Valle", a: "Triste", n: "Victoria" }, 98: { t: "Valle", a: "Triste", n: "Victoria" },
      99: { t: "Yermo", a: "Verde", n: "Vida" }, 100: { t: "Yermo", a: "Verde", n: "Vida" }
    };
    return table[roll] || table[1];
  },

  // 1.4 ELEMENTOS DE LUGAR (1d100)
  elementosLugar: function(roll) {
    var table = {
      1: { l: "Abismo", a: "Agudo", n: "PROPIO" }, 2: { l: "Abismo", a: "Agudo", n: "PROPIO" },
      3: { l: "Agujero", a: "Ajado", n: "Agua" }, 4: { l: "Agujero", a: "Ajado", n: "Agua" },
      5: { l: "Alcázar", a: "Alto", n: "Almas" }, 6: { l: "Alcázar", a: "Alto", n: "Almas" },
      7: { l: "Aldea", a: "Antiguo", n: "Barro" }, 8: { l: "Aldea", a: "Antiguo", n: "Barro" },
      9: { l: "Anillo", a: "Ardiente", n: "Brazo" }, 10: { l: "Anillo", a: "Ardiente", n: "Brazo" },
      11: { l: "Árbol", a: "Aullante", n: "Bruja" }, 12: { l: "Árbol", a: "Aullante", n: "Bruja" },
      13: { l: "Arroyo", a: "Azul", n: "Caballero" }, 14: { l: "Arroyo", a: "Azul", n: "Caballero" },
      15: { l: "Barrera", a: "Bajo", n: "Cabeza" }, 16: { l: "Barrera", a: "Bajo", n: "Cabeza" },
      17: { l: "Bosque", a: "Blanco", n: "Cadáver" }, 18: { l: "Bosque", a: "Blanco", n: "Cadáver" },
      19: { l: "Cabaña", a: "Brillante", n: "Calavera" }, 20: { l: "Cabaña", a: "Brillante", n: "Calavera" },
      21: { l: "Caldero", a: "Caído", n: "Ceniza" }, 22: { l: "Caldero", a: "Caído", n: "Ceniza" },
      23: { l: "Camino", a: "Cercano", n: "Corazón" }, 24: { l: "Camino", a: "Cercano", n: "Corazón" },
      25: { l: "Campo", a: "Cobrizo", n: "Cristal" }, 26: { l: "Campo", a: "Cobrizo", n: "Cristal" },
      27: { l: "Capilla", a: "Dentado", n: "Daga" }, 28: { l: "Capilla", a: "Dentado", n: "Daga" },
      29: { l: "Cascada", a: "Dorado", n: "Dedo" }, 30: { l: "Cascada", a: "Dorado", n: "Dedo" },
      31: { l: "Ciénaga", a: "Eterno", n: "Demonio" }, 32: { l: "Ciénaga", a: "Eterno", n: "Demonio" },
      33: { l: "Círculo", a: "Flotante", n: "Diablo" }, 34: { l: "Círculo", a: "Flotante", n: "Diablo" },
      35: { l: "Ciudad", a: "Helado", n: "Dios" }, 36: { l: "Ciudad", a: "Helado", n: "Dios" },
      37: { l: "Ciudad", a: "Hierro", n: "Espada" }, 38: { l: "Ciudad", a: "Hierro", n: "Espada" },
      39: { l: "Colina", a: "Hundido", n: "Esperanza" }, 40: { l: "Colina", a: "Hundido", n: "Esperanza" },
      41: { l: "Cráter", a: "Ilustre", n: "Espíritu" }, 42: { l: "Cráter", a: "Ilustre", n: "Espíritu" },
      43: { l: "Cresta", a: "Inmundo", n: "Fango" }, 44: { l: "Cresta", a: "Inmundo", n: "Fango" },
      45: { l: "Cripta", a: "Irreal", n: "Fantasma" }, 46: { l: "Cripta", a: "Irreal", n: "Fantasma" },
      47: { l: "Cruce", a: "Leal", n: "Fuego" }, 48: { l: "Cruce", a: "Leal", n: "Fuego" },
      49: { l: "Cubil", a: "Lejano", n: "Gigante" }, 50: { l: "Cubil", a: "Lejano", n: "Gigante" },
      51: { l: "Cuesta", a: "Majado", n: "Goblin" }, 52: { l: "Cuesta", a: "Majado", n: "Goblin" },
      53: { l: "Cueva", a: "Maldito", n: "Guerrero" }, 54: { l: "Cueva", a: "Maldito", n: "Guerrero" },
      55: { l: "Espira", a: "Maligno", n: "Héroe" }, 56: { l: "Espira", a: "Maligno", n: "Héroe" },
      57: { l: "Foso", a: "Muerto", n: "Hollín" }, 58: { l: "Foso", a: "Muerto", n: "Hollín" },
      59: { l: "Fuerte", a: "Nefando", n: "Humo" }, 60: { l: "Fuerte", a: "Nefando", n: "Humo" },
      61: { l: "Lago", a: "Negro", n: "Ladrón" }, 62: { l: "Lago", a: "Negro", n: "Ladrón" },
      63: { l: "Montaña", a: "Nublado", n: "Lanza" }, 64: { l: "Montaña", a: "Nublado", n: "Lanza" },
      65: { l: "Muro", a: "Oculto", n: "Mago" }, 66: { l: "Muro", a: "Oculto", n: "Mago" },
      67: { l: "Paso", a: "Oscuro", n: "Maldición" }, 68: { l: "Paso", a: "Oscuro", n: "Maldición" },
      69: { l: "Piedra", a: "Pardo", n: "Mano" }, 70: { l: "Piedra", a: "Pardo", n: "Mano" },
      71: { l: "Playa", a: "Partido", n: "Marinero" }, 72: { l: "Playa", a: "Partido", n: "Marinero" },
      73: { l: "Prado", a: "Perdido", n: "Miedo" }, 74: { l: "Prado", a: "Perdido", n: "Miedo" },
      75: { l: "Puerta", a: "Plateado", n: "Muerte" }, 76: { l: "Puerta", a: "Plateado", n: "Muerte" },
      77: { l: "Puesto", a: "Rocoso", n: "Niño" }, 78: { l: "Puesto", a: "Rocoso", n: "Niño" },
      79: { l: "Refugio", a: "Roja", n: "Ojo" }, 80: { l: "Refugio", a: "Roja", n: "Ojo" },
      81: { l: "Roca", a: "Roto", n: "Oro" }, 82: { l: "Roca", a: "Roto", n: "Oro" },
      83: { l: "Ruina", a: "Salvaje", n: "Pie" }, 84: { l: "Ruina", a: "Salvaje", n: "Pie" },
      85: { l: "Templo", a: "Sinuoso", n: "Piedra" }, 86: { l: "Templo", a: "Sinuoso", n: "Piedra" },
      87: { l: "Torre", a: "Solitario", n: "Plata" }, 88: { l: "Torre", a: "Solitario", n: "Plata" },
      89: { l: "Trono", a: "Sombrío", n: "Reina" }, 90: { l: "Trono", a: "Sombrío", n: "Reina" },
      91: { l: "Tumba", a: "Temible", n: "Rey" }, 92: { l: "Tumba", a: "Temible", n: "Rey" },
      93: { l: "Valla", a: "Terrible", n: "Sacerdote" }, 94: { l: "Valla", a: "Terrible", n: "Sacerdote" },
      95: { l: "Valle", a: "Turulato", n: "Sangre" }, 96: { l: "Valle", a: "Turulato", n: "Sangre" },
      97: { l: "Zanja", a: "Velado", n: "Trol" }, 98: { l: "Zanja", a: "Velado", n: "Trol" },
      99: { l: "Zarzal", a: "Voluble", n: "Villano" }, 100: { l: "Zarzal", a: "Voluble", n: "Villano" }
    };
    return table[roll] || table[1];
  },

  // ==========================================
  // TABLAS OFICIALES D20 DE AVENTURAS
  // ==========================================
  tablaAventuras: {
    acciones: {
      1: "Rescatar", 2: "Encontrar", 3: "Destruir", 4: "Infiltrarse en",
      5: "Burlar / Esquivar", 6: "Devolver", 7: "Derrotar", 8: "Espiar",
      9: "Sobornar", 10: "Entregar", 11: "Escapar de", 12: "Encarcelar",
      13: "Detener", 14: "Hacerse amigo de", 15: "Pacificar / Calmar",
      16: "Persuadir", 17: "Robar", 18: "Escoltar", 19: "Desterrar / Expulsar", 20: "Liberar"
    },
    objetivos: {
      1: "el Cáliz / la Copa", 2: "al Prisionero", 3: "la Espada", 4: "la Cámara acorazada",
      5: "el Culto", 6: "el Espíritu", 7: "al Asesino", 8: "al Demonio",
      9: "al Noble", 10: "al Cazador", 11: "el Rehén", 12: "al Ladrón",
      13: "al Espía", 14: "el Hombre lobo", 15: "la Reliquia", 16: "al Sumo sacerdote",
      17: "al Mercader", 18: "a la Bruja", 19: "el Ritual", 20: "al Vampiro"
    },
    contextos: {
      1: "del mago maligno", 2: "que acecha en los yermos", 3: "en el fondo del río",
      4: "en las alcantarillas de la ciudad", 5: "bajo los túmulos funerarios",
      6: "del héroe caído", 7: "en la biblioteca mágica", 8: "en la corte del rey",
      9: "del linaje ancestral", 10: "en la torre del hechicero",
      11: "en el Bosque Sombrío (Murkwood)", 12: "que se oculta en los suburbios",
      13: "del señor enano", 14: "en la tumba mohosa", 15: "de los caballeros reales",
      16: "que sacrifica inocentes", 17: "en las catacumbas", 18: "que chantajea al barón",
      19: "en el Gremio de Ladrones", 20: "que asesina a los lugareños"
    }
  },

  tablaLugarAventuras: {
    tipos: {
      1: "Minas de", 2: "Abadía de", 3: "Torre de", 4: "Cuevas de",
      5: "Túmulo de", 6: "Madrigueras de", 7: "Cripta de", 8: "Monasterio de",
      9: "Ruina de", 10: "Túneles de", 11: "Ciudadela de", 12: "Tumba de",
      13: "Castillo de", 14: "Templo de", 15: "Fortaleza de", 16: "Isla de",
      17: "Torreón de", 18: "Mazmorra de", 19: "Necrópolis de", 20: "Santuario de"
    },
    descriptores: {
      1: "la Llama", 2: "el Fantasma", 3: "la Oscuridad", 4: "el Pico",
      5: "las Tierras Fronterizas", 6: "el Rey", 7: "el Crepúsculo", 8: "las Profundidades",
      9: "la Joya", 10: "el Dios", 11: "las Tierras", 12: "la Tormenta",
      13: "el Pantano", 14: "el Barranco", 15: "el Valle", 16: "la Horda",
      17: "la Calavera", 18: "la Reina", 19: "los Yermos", 20: "el Héroe"
    },
    temas: {
      1: "Maldita", 2: "Susurrante", 3: "Sangrante", 4: "Velado / Encapuchado",
      5: "Perdidas", 6: "Muerto", 7: "del Bosque Profundo", 8: "Caídas",
      9: "del Aparecido / Renacido", 10: "Congelado", 11: "Relucientes / Brillantes",
      12: "del Caos", 13: "Abandonado", 14: "Marchito / Asolado", 15: "Olvidado",
      16: "Durmiente", 17: "Salvaje", 18: "Impía", 19: "Encantados", 20: "Inmortal"
    }
  },

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================
  generateRegion: function() {
    var d12 = this.d(12);
    var rollT = this.d(100);
    var rollA = this.d(100);
    var rollN = this.d(100);

    var T = this.elementosRegion(rollT).t;
    var A = this.elementosRegion(rollA).a;
    var N = this.elementosRegion(rollN).n;
    if (N === "PROPIO") { N = this.pick(this.nombresPropios); }

    var masculinos = ["Rey", "Demonio", "Dragón", "Dios", "Fuego", "Honor", "Horror", "Humo", "Infierno", "Miedo", "Muerto", "Oro", "Paraíso", "Peligro", "Plata", "Refugio", "Salvador", "Señor", "Sol", "Traidor", "Trol", "Trueno"];
    var art = (masculinos.indexOf(N) !== -1) ? "del" : "de la";

    var finalName = "";
    var formula = "";

    if (d12 <= 4) {
      finalName = A + " " + T;
      formula = "[Adjetivo] [Terreno]";
    } else if (d12 <= 6) {
      finalName = T + " " + art + " " + N;
      formula = "[Terreno] de(l) [Nombre]";
    } else if (d12 <= 8) {
      finalName = "El " + T + " " + A;
      formula = "El [Terreno] [Adjetivo]";
    } else if (d12 <= 10) {
      finalName = N + " " + T;
      formula = "[Nombre] [Terreno]";
    } else if (d12 === 11) {
      finalName = T + " " + A + " de " + N;
      formula = "[Terreno] [Adjetivo] de [Nombre]";
    } else {
      finalName = A + " " + T + " " + art + " " + N;
      formula = "[Adjetivo] [Terreno] de(l) [Nombre]";
    }

    return {
      name: finalName,
      template: formula,
      terreno: T,
      adjetivo: A,
      nombreClave: N,
      rolls: "1d12:[" + d12 + "] | T:[" + rollT + "] A:[" + rollA + "] N:[" + rollN + "]"
    };
  },

  generateLugar: function() {
    var d12 = this.d(12);
    var rollL = this.d(100);
    var rollA = this.d(100);
    var rollN = this.d(100);

    var L = this.elementosLugar(rollL).l;
    var A = this.elementosLugar(rollA).a;
    var N = this.elementosLugar(rollN).n;
    if (N === "PROPIO") { N = this.pick(this.nombresPropios); }

    var masculinos = ["Agua", "Barro", "Brazo", "Caballero", "Cadáver", "Corazón", "Cristal", "Dedo", "Demonio", "Diablo", "Dios", "Espíritu", "Fango", "Fantasma", "Fuego", "Gigante", "Goblin", "Guerrero", "Héroe", "Hollín", "Humo", "Ladrón", "Mago", "Marinero", "Miedo", "Niño", "Ojo", "Oro", "Pie", "Rey", "Sacerdote", "Trol", "Villano"];
    var art = (masculinos.indexOf(N) !== -1) ? "del" : "de la";

    var finalName = "";
    var formula = "";

    if (d12 <= 4) {
      finalName = "El " + L;
      formula = "El [Lugar]";
    } else if (d12 <= 6) {
      finalName = "El " + L + " " + A;
      formula = "El [Lugar] [Adjetivo]";
    } else if (d12 <= 8) {
      finalName = "El " + L + " " + art + " " + N;
      formula = "El [Lugar] de(l) [Nombre]";
    } else if (d12 <= 10) {
      finalName = L + " de " + N;
      formula = "[Lugar] de [Nombre]";
    } else if (d12 === 11) {
      finalName = L + " de " + A;
      formula = "[Lugar] de [Adjetivo]";
    } else {
      finalName = "El " + N + " " + A;
      formula = "El [Nombre] [Adjetivo]";
    }

    return {
      name: finalName,
      template: formula,
      lugar: L,
      adjetivo: A,
      nombreClave: N,
      rolls: "1d12:[" + d12 + "] | L:[" + rollL + "] A:[" + rollA + "] N:[" + rollN + "]"
    };
  },

  // 1.5 GENERADOR DE AVENTURA COMPLETO (3d20 + 3d20)
  generateAventuraGancho: function() {
    // 3d20 de Gancho
    var dAccion = this.d(20);
    var dObjetivo = this.d(20);
    var dContexto = this.d(20);

    var accion = this.tablaAventuras.acciones[dAccion];
    var objetivo = this.tablaAventuras.objetivos[dObjetivo];
    var contexto = this.tablaAventuras.contextos[dContexto];

    var misionTitulo = accion + " " + objetivo;

    // 3d20 de Nombre de Lugar
    var dTipo = this.d(20);
    var dDesc = this.d(20);
    var dTema = this.d(20);

    var tipoLugar = this.tablaLugarAventuras.tipos[dTipo];
    var desc = this.tablaLugarAventuras.descriptores[dDesc];
    var tema = this.tablaLugarAventuras.temas[dTema];

    // Ajuste de preposiciones: "Minas de" + "la Llama" + "Maldita" -> "Minas de la Llama Maldita"
    var nombreLugar = tipoLugar + " " + desc + " " + tema;

    return {
      mision: misionTitulo,
      lugarAventura: nombreLugar,
      accion: accion,
      objetivo: objetivo,
      contexto: contexto,
      rollsMision: "3d20 Gancho: [" + dAccion + ", " + dObjetivo + ", " + dContexto + "]",
      rollsLugar: "3d20 Lugar: [" + dTipo + ", " + dDesc + ", " + dTema + "]"
    };
  }
};

/* Fuente: dungeons.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.DUNGEONS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 3.1 CIMIENTOS DE LA MAZMORRA (3d12)
  constructores: {
    1: "Civilización antigua / Precursora",
    2: "Culto fanático / Secta",
    3: "Imperio humano extinto",
    4: "Clan enano subterráneo",
    5: "Enclave élfico ancestral",
    6: "Arcanista / Archimago solitario",
    7: "Señor de la guerra tiránico",
    8: "Gremio de ladrones / Forajidos",
    9: "Entidad planar / Demonio",
    10: "Sociedad secreta de sabios",
    11: "Gigantes o titanes",
    12: "Fenómeno natural o excavación monstruosa"
  },

  funciones: {
    1: "Templo / Lugar sagrado",
    2: "Tumba / Panteón dinástico",
    3: "Fortaleza militar / Puesto de avanzada",
    4: "Mina / Complejo de extracción",
    5: "Refugio / Asentamiento secreto",
    6: "Laboratorio / Taller arcano",
    7: "Prisión / Mazmorra de castigo",
    8: "Almacén / Alijo del tesoro",
    9: "Portal / Nexo de poder",
    10: "Biblioteca / Archivo prohibido",
    11: "Residencia colosal / Palacio",
    12: "Guarida de bestias / Colmena"
  },

  ruinas: {
    1: "Cataclismo natural / Terremoto",
    2: "Invasión monstruosa / Horda",
    3: "Maldición / Desastre arcano",
    4: "Plaga / Enfermedad erradicadora",
    5: "Guerra civil / Traición interna",
    6: "Agotamiento de recursos",
    7: "Monstruo despertado en el fondo",
    8: "Brecha planar / Corrupción",
    9: "Intervención divina / Castigo",
    10: "Colapso estructural / Inundación",
    11: "Abandono ritual voluntario",
    12: "Furia salvaje / Devorado por el tiempo"
  },

  // 3.3 NATURALEZA DE LOS TEMAS (1d12)
  temasMundanos: {
    1: "Descomposición / Deterioro",
    2: "Tortura y agonía",
    3: "Locura creciente",
    4: "Desesperación («Todo está perdido»)",
    5: "Noble sacrificio recordado",
    6: "Furia salvaje y sangre",
    7: "Avaricia y saqueo",
    8: "Asedio y defensa rota",
    9: "Fanatismo religioso",
    10: "Traición fratricida",
    11: "Soledad y olvido",
    12: "Hambre insaciable"
  },

  temasInusuales: {
    1: "Veneno y ponzoña",
    2: "Trampas mecánicas letales",
    3: "Crecimiento fúngico descontrolado",
    4: "Bestias mutadas",
    5: "Culto a las sombras",
    6: "Niebla helada perenne",
    7: "Aguas estancadas corruptas",
    8: "Ecos y susurros fantasmales",
    9: "Peste o plaga latente",
    10: "Tumbas profanadas",
    11: "Rastro de fuego abrasador",
    12: "Presencia feérica embaucadora"
  },

  temasExtraordinarios: {
    1: "Portal planar activo",
    2: "Realidad distorsionada / Anomalía",
    3: "Presencia divina latente",
    4: "Magia temporal / Ecos del pasado",
    5: "Fuego fatuo devorador",
    6: "Drenaje arcano ambiental",
    7: "Mente colmena",
    8: "Geometría no euclidiana",
    9: "Entidad estelar dormida",
    10: "Silencio mágico absoluto",
    11: "Levitación e ingravidez",
    12: "Caos elemental puro"
  },

  // 3.5 TABLA DE TRAMPAS OFICIALES (3d12)
  tablaTrampas: {
    tipos: {
      1: "Ballesta",
      2: "Lluvia de agujas",
      3: "Gas tóxico",
      4: "Red con púas",
      5: "Roca rodante",
      6: "Cuchilla cortante",
      7: "Foso con estacas",
      8: "Jabalina",
      9: "Glifo mágico",
      10: "Ráfaga de fuego",
      11: "Bloque que cae",
      12: "Estatua maldita"
    },
    activadores: {
      1: "Alambre de tropiezo",
      2: "Placa de presión",
      3: "Abrir una puerta",
      4: "Interruptor o botón",
      5: "Peldaño falso en escalera",
      6: "Romper un haz de luz",
      7: "Tirar de una palanca",
      8: "Cerrar una puerta",
      9: "Pronunciar una palabra",
      10: "Gancho en un hilo",
      11: "Retirar un objeto",
      12: "Lanzar un conjuro"
    },
    efectos: {
      1: "1d6 de daño",
      2: "1d6 de daño / Sueño (CD 11 CON)",
      3: "1d6 de daño / Paralizar (CD 11 CON)",
      4: "1d6 de daño / Cegar (CD 11 CON)",
      5: "2d8 de daño contundente",
      6: "2d8 de daño / Sueño (CD 13 CON)",
      7: "2d8 de daño / Paralizar (CD 13 CON)",
      8: "2d8 de daño / Confusión (CD 13 SAB)",
      9: "3d10 de daño arcano",
      10: "3d10 de daño / Paralizar (CD 15 CON)",
      11: "3d10 de daño / Inconsciente (CD 15 CON)",
      12: "3d10 de daño / Petrificar (CD 15 CON)"
    }
  },

  descubrimientos: [
    "Inscripción en relieve con una pista secreta",
    "Cofre oculto tras un panel falso",
    "Fuente con agua de propiedades curativas (1d6 PG)",
    "Cadáver de un aventurero con una ganzúa de plata",
    "Altar dedicado a una deidad olvidada",
    "Mural que muestra el mapa parcial del nivel inferior"
  ],

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================

  // 1. CIMIENTOS Y COMPLEJO
  generateDungeonBase: function() {
    var dConst = this.d(12);
    var dFunc = this.d(12);
    var dRuina = this.d(12);

    var constructor = this.constructores[dConst];
    var funcion = this.funciones[dFunc];
    var ruina = this.ruinas[dRuina];

    var dEscala = this.d(12);
    var tamaño = "";
    var numTemas = 1;
    var numSalas = 0;
    var formulaSalas = "";

    if (dEscala <= 3) {
      tamaño = "Pequeña";
      numTemas = this.d(2);
      numSalas = 5 + this.d(3);
      formulaSalas = "6 a 8 áreas";
    } else if (dEscala <= 9) {
      tamaño = "Mediana";
      numTemas = 3;
      numSalas = this.d(6) + this.d(6) + 4;
      formulaSalas = numSalas + " áreas (2d6+4)";
    } else if (dEscala <= 11) {
      tamaño = "Grande";
      numTemas = 4;
      numSalas = this.d(6) + this.d(6) + this.d(6) + 6;
      formulaSalas = numSalas + " áreas (3d6+6)";
    } else {
      tamaño = "Enorme";
      numTemas = 5;
      numSalas = this.d(6) + this.d(6) + this.d(6) + this.d(6) + 10;
      formulaSalas = numSalas + " áreas (4d6+10)";
    }

    var temasSeleccionados = [];
    for (var i = 0; i < numTemas; i++) {
      var dTipoTema = this.d(12);
      var dElemento = this.d(12);
      var temaNombre = "";
      var tipoCat = "";

      if (dTipoTema <= 5) {
        tipoCat = "Mundano";
        temaNombre = this.temasMundanos[dElemento];
      } else if (dTipoTema <= 9) {
        tipoCat = "Inusual";
        temaNombre = this.temasInusuales[dElemento];
      } else {
        tipoCat = "Extraordinario";
        temaNombre = this.temasExtraordinarios[dElemento];
      }
      temasSeleccionados.push("• [" + tipoCat + "] " + temaNombre + " (1d12:[" + dElemento + "])");
    }

    return {
      nombre: "Mazmorra: " + funcion,
      constructor: constructor,
      funcion: funcion,
      ruina: ruina,
      escala: tamaño + " // " + formulaSalas,
      temas: temasSeleccionados.join("<br>"),
      rolls: "Cimientos 3d12: [" + dConst + ", " + dFunc + ", " + dRuina + "] | Escala 1d12: [" + dEscala + "]"
    };
  },

  // 2. SONDEAR SALA (1d12)
  generateRoom: function() {
    var d12 = this.d(12);
    var clasificacion = "";
    var contenido = "";
    var tieneTema = false;
    var esUnica = false;

    if (d12 === 1) {
      clasificacion = "Común (Sin tema)"; contenido = "Vacía";
    } else if (d12 === 2) {
      clasificacion = "Común (Sin tema)"; contenido = "Peligro";
    } else if (d12 <= 4) {
      clasificacion = "Común (Sin tema)"; contenido = "Descubrimiento + Peligro";
    } else if (d12 <= 6) {
      clasificacion = "Común (Sin tema)"; contenido = "Descubrimiento";
    } else if (d12 === 7) {
      clasificacion = "Común (Con tema activo)"; contenido = "Peligro"; tieneTema = true;
    } else if (d12 === 8) {
      clasificacion = "Común (Con tema activo)"; contenido = "Descubrimiento + Peligro"; tieneTema = true;
    } else if (d12 === 9) {
      clasificacion = "Común (Con tema activo)"; contenido = "Descubrimiento"; tieneTema = true;
    } else if (d12 === 10) {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Peligro"; tieneTema = true; esUnica = true;
    } else if (d12 === 11) {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Descubrimiento + Peligro"; tieneTema = true; esUnica = true;
    } else {
      clasificacion = "⭐ ÚNICA (Con tema activo)"; contenido = "Descubrimiento"; tieneTema = true; esUnica = true;
    }

    // Resolver detalles del contenido conectando con la tabla de trampas o descubrimientos
    var detalleContenido = "";
    if (contenido === "Vacía") {
      detalleContenido = "Polvo, escombros y silencio. Sin amenazas inmediatas.";
    } else if (contenido === "Peligro") {
      var tr = this.generateTrap();
      detalleContenido = "⚠️ <strong>Peligro / Trampa:</strong> " + tr.trampa + " activada por " + tr.activador.toLowerCase() + " (" + tr.efecto + ").";
    } else if (contenido === "Descubrimiento") {
      detalleContenido = "✨ <strong>Descubrimiento:</strong> " + this.pick(this.descubrimientos);
    } else {
      var tr2 = this.generateTrap();
      detalleContenido = "✨ <strong>Descubrimiento:</strong> " + this.pick(this.descubrimientos) + "<br>⚠️ <strong>Peligro / Trampa:</strong> " + tr2.trampa + " activada por " + tr2.activador.toLowerCase() + " (" + tr2.efecto + ").";
    }

    return {
      titulo: esUnica ? "ÁREA SINGULAR / CÁMARA MAYOR" : "SALA EXPLORADA",
      clasificacion: clasificacion,
      contenidoResumen: contenido,
      detalle: detalleContenido,
      temaActivo: tieneTema ? "Aplica el tema dominante de la mazmorra" : "Ninguno (Entorno genérico)",
      roll: "Sondeo 1d12: [" + d12 + "]"
    };
  },

  // 3. GENERADOR DE TRAMPAS MODULARES (3d12)
  generateTrap: function() {
    var dTipo = this.d(12);
    var dAct = this.d(12);
    var dEf = this.d(12);

    var trampa = this.tablaTrampas.tipos[dTipo];
    var activador = this.tablaTrampas.activadores[dAct];
    var efecto = this.tablaTrampas.efectos[dEf];

    return {
      nombre: "Trampa de " + trampa,
      trampa: trampa,
      activador: activador,
      efecto: efecto,
      rolls: "3d12 Trampa: [Tipo: " + dTipo + ", Activador: " + dAct + ", Efecto: " + dEf + "]"
    };
  }
};

/* Fuente: encounters/enc_arctic.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.arctic = {
  name: "Ártico / Tierras Heladas",
  entries: [
    { min: 1, max: 1, desc: "Un kraken albino tiene espasmos congelado en el interior de una montaña de hielo cristalino.", nv: 10, esMonstruo: true },
    { min: 2, max: 3, desc: "2d20 bandidos caníbales liderados por un trol de escarcha acampan en la zona.", nv: 5, esMonstruo: true },
    { min: 4, max: 5, desc: "Un grupo de orcos y un simio de las nieves pelean a muerte por carne de ciervo.", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "Un peletero asesino que huye de la justicia intenta vender pieles robadas.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "3d6 esqueletos cubiertos de escarcha emergen repentinamente de la nieve.", nv: 1, esMonstruo: true },
    { min: 10, max: 11, desc: "1d6 fuegos fatuos de hielo flotan sobre un estanque congelado.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Un resplandor sobrenatural emana desde el fondo de una profunda grieta.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un mamut ciego y moribundo carga furioso hacia cualquier fuente de ruido.", nv: 7, esMonstruo: true },
    { min: 16, max: 17, desc: "Un draco/wyvern sobrevuela en círculos buscando focas o ciervos.", nv: 6, esMonstruo: true },
    { min: 18, max: 19, desc: "Se desata una ventisca feroz (1d4 de daño por asalto si no se busca refugio).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Una partida de 2d6 hobgoblins caza acompañada de 1d4 lobos invernales.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "Harpías de escamas blancas acechan apostadas en salientes de roca nevada.", nv: 3, esMonstruo: true },
    { min: 24, max: 25, desc: "La Tribu de la Rata de Hielo (3d6 goblins) coloca trampas; están dispuestos a comerciar.", nv: 1, esMonstruo: true },
    { min: 26, max: 27, desc: "El cráneo de un liche con ojos de zafiro fulmina con la mirada desde un pilar de hielo.", nv: 12, esMonstruo: true },
    { min: 28, max: 29, desc: "Treants que odian el fuego se hacen pasar por una arboleda silenciosa de pinos.", nv: 8, esMonstruo: true },
    { min: 30, max: 31, desc: "1d4 esmilodontes (tigres dientes de sable) acechan a un mamut herido y solitario.", nv: 4, esMonstruo: true },
    { min: 32, max: 33, desc: "Seis hechiceros hobgoblin realizan un ritual oscuro en un crómlech nevado.", nv: 3, esMonstruo: true },
    { min: 34, max: 35, desc: "Dos remorhaz se retan en duelo; quien mantenga la postura más extraña por más tiempo, gana.", nv: 7, esMonstruo: true },
    { min: 36, max: 37, desc: "La temperatura cae en picado (1d6 de daño por asalto si no se busca refugio).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "2d8 lobos invernales siguen el rastro del grupo a distancia, esperando a que caiga la noche.", nv: 3, esMonstruo: true },
    { min: 40, max: 41, desc: "Aparece el Caminante de los Yermos (LV 10 wight / tumulario, espadón gélido).", nv: 10, esMonstruo: true },
    { min: 42, max: 43, desc: "Un humano famélico yace atrapado en un foso natural de hielo.", nv: 1, esMonstruo: true },
    { min: 44, max: 45, desc: "Una capa de hielo fino debilitada por aguas termales subterráneas cede y cruje al pisar.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un oso polar arremete contra cualquiera que se acerque a sus 1d4 oseznos.", nv: 4, esMonstruo: true },
    { min: 48, max: 49, desc: "Tras una cascada congelada, un dragón de escarcha duerme en el fondo de una caverna.", nv: 11, esMonstruo: true },
    { min: 50, max: 53, desc: "Un roc con un ala rota se defiende con furia frente a 2d6 tramperos humanos.", nv: 9, esMonstruo: true },
    { min: 54, max: 55, desc: "1d6 cepos para osos oxidados yacen ocultos bajo un manto de nieve virgen.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un gigante de escarcha conduce un trineo tirado por tres osos polares.", nv: 9, esMonstruo: true },
    { min: 58, max: 59, desc: "2d6 zombis congelados y acorazados avanzan tambaleándose sobre la nieve.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "2d4 rastreadores elfos acampan en un risco con vistas a los campos de hielo.", nv: 2, esMonstruo: true },
    { min: 62, max: 63, desc: "El Leñador (ogro Neutral, gran hacha gigante) arrastra un trineo cargado de troncos.", nv: 4, esMonstruo: true },
    { min: 64, max: 65, desc: "2d8 duergar cegados por la luz del sol huyen de los rastreadores del Señor Enano.", nv: 2, esMonstruo: true },
    { min: 66, max: 67, desc: "Un zigurat de hielo a la deriva se desplaza lentamente por la línea del horizonte.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "1d6 simios de las nieves arrastran el cadáver de un alce hacia su guarida.", nv: 3, esMonstruo: true },
    { min: 70, max: 71, desc: "1d6 arañas gigantes tejen telarañas heladas a través de un barranco estrecho.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "Un remorhaz persigue a 1d6 medianos hacia su nido de crías.", nv: 7, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales sale al exterior desde una cueva nevada.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Un campo de setas blancas y brillantes emite un zumbido armónico y resonante.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "El ermitaño Leedrin (asaltante / reaver) elige a los personajes como sus próximas presas.", nv: 5, esMonstruo: true },
    { min: 80, max: 81, desc: "1d6 gules se esconden dentro del casco destrozado de un galeón mercante varado.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "2d4 enanos acompañados de dos mastines alpinos siguen un rastro en la nieve.", nv: 2, esMonstruo: true },
    { min: 84, max: 85, desc: "Un ancho túnel excavado en el hielo conduce directamente a las fauces de un gusano púrpura.", nv: 10, esMonstruo: true },
    { min: 86, max: 87, desc: "Un campo con 2d20 cadáveres enanos; son zombis que se alzan al anochecer.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 goblins Diente Rojo usan una cría de oso lechuza como cebo para una emboscada.", nv: 1, esMonstruo: true },
    { min: 90, max: 91, desc: "Un campamento de 2d20 pastores de yaks ofrece comida caliente y cobijo.", nv: 1, esMonstruo: true },
    { min: 92, max: 93, desc: "La luz solar refractada en el hielo forma un prisma que abre un portal al reino Feérico.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un diablo íncubo/súcubo desterrado avanza furioso y quejumbroso por la nieve.", nv: 6, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante aparece montado sobre un caribú que arrastra un trineo de mercancías.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "El vapor se eleva desde un oasis de manantiales sulfúricos con aguas regenerativas (cura 2d8 PG).", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_artisan.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.artisan = {
  name: "Distrito Artesanal",
  entries: [
    { min: 1, max: 1, desc: "Se va a llevar a cabo una ejecución pública; el reo es un familiar de un PJ.", nv: 1, esMonstruo: false },
    { min: 2, max: 3, desc: "Un efrit enfurecido surge del interior de una lámpara de latón desgastada.", nv: 9, esMonstruo: true },
    { min: 4, max: 5, desc: "Un asesino se descuelga desde un tejado al confundir a un PJ con su objetivo marcado.", nv: 4, esMonstruo: true },
    { min: 6, max: 7, desc: "Un soplador de vidrio acusa a grandes voces a un PJ de romper un jarrón de valor incalculable.", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "Un grupo de 2d6 matones asalta la picota pública para liberar a su cabecilla.", nv: 1, esMonstruo: true },
    { min: 10, max: 11, desc: "Estalla una refriega violenta entre los séquitos de dos casas nobles rivales.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Un herborista crea por accidente una densa nube de humo tóxico que inunda la calle.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Esbirros del Gremio de Ladrones vacían bolsillos haciéndose pasar por mendigos.", nv: 1, esMonstruo: true },
    { min: 16, max: 17, desc: "1d6 bandidos encañonan con dagas a un vendedor ambulante exigiéndole sus ganancias.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "Unos caballos que estaban siendo herrados se desbocan y causan una estampida en la calle.", nv: 2, esMonstruo: false },
    { min: 20, max: 21, desc: "Una figura encapuchada profana un santuario dedicado a Madeera y sale corriendo.", nv: 1, esMonstruo: false },
    { min: 22, max: 23, desc: "Un engreído guerrero a lomos de un caballo de guerra intenta apartar a un PJ de una patada.", nv: 3, esMonstruo: true },
    { min: 24, max: 25, desc: "Unos acróbatas con ropajes llamativos hacen piruetas; un carterista les sigue de cerca.", nv: 1, esMonstruo: true },
    { min: 26, max: 27, desc: "1d6 guardias confunden a un PJ con Plinio el Veloz, un buscado forajido.", nv: 2, esMonstruo: true },
    { min: 28, max: 29, desc: "Clérigos demacrados con túnicas ofrecen una «purificación» (conversión forzosa).", nv: 1, esMonstruo: true },
    { min: 30, max: 31, desc: "1d6 guardias sin aliento persiguen a una jauría de 2d4 mastines sarnosos.", nv: 1, esMonstruo: true },
    { min: 32, max: 33, desc: "Un mercader pone un cáliz de oro en manos de un PJ y empieza a chillar: «¡Al ladrón!».", nv: 1, esMonstruo: false },
    { min: 34, max: 35, desc: "Una mantícora desorientada se estrella en medio de una plaza abarrotada de gente.", nv: 5, esMonstruo: true },
    { min: 36, max: 37, desc: "Se abre un profundo socavón; en el fondo ruge un río subterráneo caudaloso.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "1d6 matones disfrazados de guardias exigen a los PJ el pago de un peaje de paso.", nv: 1, esMonstruo: true },
    { min: 40, max: 41, desc: "Una mujer cae al suelo entre espasmos y se levanta transformada en una rata furiosa (wererat).", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Un yunque que subían mediante poleas se desprende y cae en picado hacia un transeúnte.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "El martillo al rojo vivo de un herrero se le resbala y sale despedido directo hacia un PJ.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Tres medianos subidos a hombros bajo una gabardina venden un «tónico» (agua de alcantarilla).", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "Un cliente fuera de sí lo destroza todo a golpes dentro de una alfarería.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "2d6 Barones de Ribera (matones) asaltan a un joyero mientras echa el cierre.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Unos rebeldes derriban una gran estatua del Soberano lanzándola hacia la multitud.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un transeúnte cae muerto al recibir un dardo envenenado que iba dirigido a un PJ.", nv: 1, esMonstruo: false },
    { min: 58, max: 59, desc: "Un noble anciano y borracho desafía a un PJ a un duelo a muerte en plena calle.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Una plaza abierta acoge un certamen de bardos lanzándose insultos e improperios.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Un hombre calvo con gafas vigila a los PJ mientras toma notas detalladas en una libreta.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "Una mujer asustadiza pasa una nota a la mano de un PJ: «¡Os están vigilando!».", nv: 1, esMonstruo: false },
    { min: 66, max: 67, desc: "Algo brillante (el ojo de un cocodrilo) reluce en la oscuridad de una reja de alcantarilla.", nv: 3, esMonstruo: true },
    { min: 68, max: 69, desc: "Mirones burlones arrojan tomates maduros a un bardo visiblemente agobiado.", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "Una mujer con capa y capucha arranca carteles de «Se Busca» de los tablones.", nv: 1, esMonstruo: false },
    { min: 72, max: 73, desc: "2d4 kóbolds irrumpen desde las cloacas y asaltan los hornos de una panadería.", nv: 1, esMonstruo: true },
    { min: 74, max: 75, desc: "Los participantes del Festival de la Abundancia azotan a los viandantes con juncos atados.", nv: 1, esMonstruo: false },
    { min: 76, max: 77, desc: "Una estatua de bronce de Ord guiña un ojo y señala en dirección a una taberna.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un mimo callejero sigue a un PJ imitando con precisión todos sus movimientos.", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Un mendigo extiende su cuenco pidiendo limosna; dentro yace un dedo recién amputado.", nv: 1, esMonstruo: false },
    { min: 82, max: 83, desc: "Un zapatero sale bailando a la calle poseído por un par de botas malditas.", nv: 1, esMonstruo: false },
    { min: 84, max: 85, desc: "Un asador de pavos ofrece un muslo gratis a quien venza en un combate de lucha libre.", nv: 1, esMonstruo: false },
    { min: 86, max: 87, desc: "Un guardia municipal solitario intenta robar disimuladamente un collar de un puesto.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "Un grupo de mujeres persigue furioso a un mediano que huye con un pastel en brazos.", nv: 1, esMonstruo: false },
    { min: 90, max: 91, desc: "Una voz en susurros llama a un PJ desde el fondo de un pozo oscuro.", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "Un haz de sol ilumina el contorno de una puerta secreta al fondo de un callejón vacío.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Aventureros rivales retan al grupo a un concurso de beber jarras de cerveza.", nv: 2, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante aparece ofreciendo una potente poción en venta.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Una tasación imprevista revela que una de las armas comunes de un PJ es en realidad mágica (+1).", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_castle.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.castle = {
  name: "Distrito del Castillo",
  entries: [
    { min: 1, max: 1, desc: "2d20 guardias rodean en formación cerrada al grupo, acusando a un PJ de asesinato.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Cuernos de alarma agudos y resonantes retumban en el interior del palacio real.", nv: 1, esMonstruo: false },
    { min: 4, max: 5, desc: "Una hilera de prisioneros encadenados se subleva al unísono contra su escolta armada.", nv: 1, esMonstruo: true },
    { min: 6, max: 7, desc: "Un noble ebrio blande un hacha al aire gritando a voz en cuello: «¡Que le corten la cabeza!».", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "Bañistas en albornoz salen en estampida de la casa de baños reales chillando de pánico.", nv: 1, esMonstruo: false },
    { min: 10, max: 11, desc: "La guardia de honor de un noble forastero persigue a un gato callejero gris.", nv: 1, esMonstruo: false },
    { min: 12, max: 13, desc: "Un escuadrón de caballeros montados carga al galope por la concurrida avenida principal.", nv: 3, esMonstruo: true },
    { min: 14, max: 15, desc: "La soga de un reo en el cadalso se rompe en el último segundo; el prisionero sale huyendo.", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "Un gladiador novato se ofende agriamente por el atuendo o aspecto de uno de los PJ.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "En las alturas de una fachada, una gárgola agrietada se parte y cae en picado al suelo.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un león se zafa con violencia de sus cuidadores mientras lo conducían hacia el coliseo.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "Un dramaturgo con mirada demente increpa a un PJ llamándole «¡cretino analfabeto!».", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Recaudadores de impuestos armados detienen el paso para cobrar una tasa de guerra obligatoria.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Un veterano caballero confunde por error a un PJ con Targ el Traidor.", nv: 3, esMonstruo: true },
    { min: 28, max: 29, desc: "Dos órdenes sagradas de cruzados rivales se encaran formando filas en mitad de la calle.", nv: 3, esMonstruo: true },
    { min: 30, max: 31, desc: "Un hombre encapuchado se desliza por una reja de alcantarilla junto a la entrada del teatro.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Un elefante que arrastra gruesas cadenas rotas irrumpe enfurecido desde el coliseo.", nv: 5, esMonstruo: true },
    { min: 34, max: 35, desc: "Mercenarios a sueldo apartan a empujones a los viandantes abriendo paso a un príncipe.", nv: 3, esMonstruo: true },
    { min: 36, max: 37, desc: "El empedrado de la calle se derrumba dejando a la vista un aljibe seco repleto de túneles.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "El agua de una fuente monumental se eleva cobrando la forma de una figura humanoide.", nv: 4, esMonstruo: true },
    { min: 40, max: 41, desc: "Un caballero de reluciente armadura desfila escoltando a un cautivo enfermo hacia el presidio.", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Robal Goodwin pasa corriendo como una exhalación cargando sacos llenos de oro real robado.", nv: 4, esMonstruo: true },
    { min: 44, max: 45, desc: "Una catapulta de 10 metros de altura en pleno desfile militar arde repentinamente en llamas.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un PJ divisa un cartel de recompensa recién fijado con su propio rostro dibujado.", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "Una herradura de oro puro asoma entre la inmundicia y el lodo de la cuneta.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "Dos gladiadores rivales inician una salvaje pelea a puñetazos dentro de una taberna animada.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Un caballo asustado se estrella contra el andamio de madera de un edificio en obras.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Una monstruosidad babeante y empapada surge a la fuerza de las puertas de los baños públicos.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "El caballero Sir Galvin, completamente borracho, es arrojado una vez más fuera de la taberna.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Una potente explosión sacude el cuartel de la guardia municipal más cercano.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Un dignatario extranjero confunde a un PJ con el mozo de cuadras y le da las riendas.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "Mineros enanos de ojos cansados rompen el empedrado excavando un túnel hacia la superficie.", nv: 2, esMonstruo: true },
    { min: 66, max: 67, desc: "Prisioneros de las mazmorras sacan las manos por los barrotes del desagüe intentando agarrar tobillos.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Cuatro encapuchados se despojan de sus capas revelando siniestras máscaras demoníacas.", nv: 3, esMonstruo: true },
    { min: 70, max: 71, desc: "El actor protagonista de una obra callejera cae muerto fulminado a mitad de su monólogo.", nv: 1, esMonstruo: false },
    { min: 72, max: 73, desc: "Dos cazarrecompensas rivales se baten en duelo para capturar con vida al mismo fugitivo.", nv: 3, esMonstruo: true },
    { min: 74, max: 75, desc: "Los PJ ven a un grupo de aventureros vestidos exactamente igual que ellos.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Una reja de cloaca retumba con fuertes golpes metálicos y, de pronto, queda en silencio sepulcral.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Una figura embozada entrega con disimulo un pergamino sellado a una mujer que pasa a su lado.", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Un virote de ballesta pasa silbando disparado hacia los PJ desde las azoteas.", nv: 2, esMonstruo: false },
    { min: 82, max: 83, desc: "El célebre cantante Branzolini insiste fervientemente en que conoce a uno de los PJ.", nv: 1, esMonstruo: false },
    { min: 84, max: 85, desc: "Una fuerte racha de viento arroja una llave de hierro desde la jardinera de una ventana alta.", nv: 1, esMonstruo: false },
    { min: 86, max: 87, desc: "Un guardia arrogante cae de rodillas al descubrir que increpaba al Duque disfrazado de plebeyo.", nv: 1, esMonstruo: false },
    { min: 88, max: 89, desc: "Dos hombres con aspecto nervioso pasan corriendo cargando con un objeto envuelto en una sábana.", nv: 1, esMonstruo: false },
    { min: 90, max: 91, desc: "Columnas de humo denso empiezan a salir por las ventanas superiores del teatro.", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "Una espada mágica reluciente aparece por arte de magia en la mano de la estatua de un gladiador.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "El Soberano pasa a caballo escoltado por una guardia de honor fuertemente armada.", nv: 5, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante revende pases y asientos VIP para el coliseo a precios inflados.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Una Duquesa de visita invita formalmente al grupo de aventureros al gran baile de la corte.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_cave.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.cave = {
  name: "Cuevas / Subterráneo",
  entries: [
    { min: 1, max: 1, desc: "Una pareja de mantícoras enfurecidas protege a sus 1d4 cachorros.", nv: 5, esMonstruo: true },
    { min: 2, max: 3, desc: "1d6 hombres-hongo poseídos cargan en un frenesí homicida.", nv: 2, esMonstruo: true },
    { min: 4, max: 5, desc: "2d4 gnomos de las profundidades (svirfneblin) irritados por la intrusión.", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "Una banda de 2d6 gnolls exige un tributo en sangre o en oro.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "Una rana gigante hambrienta salta para engullir a un PJ de un bocado.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "1d6 gules acechan a los vivos justo en el límite donde termina la luz.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "El agua que gotea del techo resulta ser ácido abrasador (1d6 de daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un basilisco custodia su nido con 1d4 huevos de piedra.", nv: 5, esMonstruo: true },
    { min: 16, max: 17, desc: "2d6 hombres bestia caníbales salen de cacería en busca de su próxima comida.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Estalagmitas agrietadas expulsan chorros de vapor sobrecalentado a presión.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "2d4 osgos (bugbears) buscan criaturas más débiles para asaltarlas.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "2d6 orcos buscan comida para su obesa reina gigante de las colinas.", nv: 2, esMonstruo: true },
    { min: 24, max: 25, desc: "2d4 caballeros enanos suben hacia la superficie portando noticias de una calamidad.", nv: 3, esMonstruo: true },
    { min: 26, max: 27, desc: "Una patrulla de exploración de 2d4 drow avanza en sigilo por las cavernas.", nv: 4, esMonstruo: true },
    { min: 28, max: 29, desc: "Una vieja quimera anida sobre una enorme pila de huesos secos.", nv: 7, esMonstruo: true },
    { min: 30, max: 31, desc: "1d4 trepadores cavernícolas (cave creepers) se aferran a las paredes de una grieta profunda.", nv: 3, esMonstruo: true },
    { min: 32, max: 33, desc: "3d4 kóbolds transportan setas de regreso hacia su amo y señor trol.", nv: 1, esMonstruo: true },
    { min: 34, max: 35, desc: "1d6 duergar exploradores salen de un túnel angosto.", nv: 2, esMonstruo: true },
    { min: 36, max: 37, desc: "Esporas tóxicas brotan en nubes al pisar miles de hongos delicados (CD 12 CON o envenenado).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "1d4 mantos negros (cloakers) duermen colgados del techo.", nv: 6, esMonstruo: true },
    { min: 40, max: 41, desc: "1d6 arañas gigantes acechan desde el techo esperando el momento de emboscar.", nv: 2, esMonstruo: true },
    { min: 42, max: 43, desc: "Un kóbold atrapado por la cola en un cepo para osos suplica ayuda a gritos.", nv: 1, esMonstruo: true },
    { min: 44, max: 45, desc: "1d6 mantos oscuros (darkmantles) oscilan y revolotean alrededor de estalagmitas.", nv: 1, esMonstruo: true },
    { min: 46, max: 47, desc: "Un dríder herido y proscrito se desplaza a toda prisa por el techo.", nv: 6, esMonstruo: true },
    { min: 48, max: 49, desc: "Un elemental de agua atrapado gira en remolino dentro de un charco poco profundo.", nv: 5, esMonstruo: true },
    { min: 50, max: 53, desc: "1d6 ettercaps colocan hilos de telaraña fina cruzando un pasaje.", nv: 3, esMonstruo: true },
    { min: 54, max: 55, desc: "Estalactitas afiladas caen en picado ante la más mínima vibración en el suelo (1d8 de daño).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "2d6 drow persiguen a un exhausto grupo de 2d4 osgos fugitivos.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "Un chamán goblin del clan Colmillo Azul y 2d8 goblins causan estragos.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "2d12 huevos de grick desatendidos están pegados a las paredes de roca.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Un guerrero elfo rastrea a un otyugh herido que huyó hacia el interior.", nv: 3, esMonstruo: true },
    { min: 64, max: 65, desc: "2d6 hongos violetas marchan pesadamente en busca de humedad o agua.", nv: 2, esMonstruo: true },
    { min: 66, max: 67, desc: "Pinturas rupestres luminosas de ciervos en carrera emiten una suave luz reconfortante.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un trol arrastra por la pierna el cadáver de un aventurero rival.", nv: 5, esMonstruo: true },
    { min: 70, max: 71, desc: "Una serpiente gigante reposa dentro de una red de huecos y túneles en la roca.", nv: 4, esMonstruo: true },
    { min: 72, max: 73, desc: "1d6 kóbolds se pelean contra 1d6 goblins por una seta gigante muy codiciada.", nv: 1, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales huye despavorido de un enjambre de arañas chasqueantes.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Un relieve tallado en piedra de un enano habla mágicamente a quienes pasan delante.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un alma en pena (wraith) levita sobre su propio cuerpo recién fallecido.", nv: 8, esMonstruo: true },
    { min: 80, max: 81, desc: "Un draco/wyvern resopla y avanza por el pasillo arrastrando un ciervo cazado.", nv: 6, esMonstruo: true },
    { min: 82, max: 83, desc: "Binkin y Bobbin, dos medianos gemelos, irrumpen rodando en la caverna.", nv: 1, esMonstruo: true },
    { min: 84, max: 85, desc: "1d6 murciélagos aguijón (stingbats) salen zumbando desde una chimenea natural.", nv: 1, esMonstruo: true },
    { min: 86, max: 87, desc: "Una gelatina ocre surge elevándose de una fina fisura en el suelo.", nv: 3, esMonstruo: true },
    { min: 88, max: 89, desc: "1d8 hombres lagarto atraen a 1d6 ciempiés gigantes fuera de su nido.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Una patrulla de 2d4 enanos asa cordero alrededor de una hoguera.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Una bandada de murciélagos asustados vuela en remolino hacia la superficie.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "El suelo tiembla con violencia cuando un bulette excava túneles por debajo.", nv: 6, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante explora las cuevas recolectando trufas subterráneas.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un místico orco (Legal) ofrece 2 pociones benéficas aleatorias.", nv: 3, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_deep_tunnels.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.deep_tunnels = {
  name: "Túneles Profundos / Underdark",
  entries: [
    { min: 1, max: 1, desc: "El Oráculo de Diez Ojos flota a la vista profetizando perdición y muerte.", nv: 10, esMonstruo: true },
    { min: 2, max: 3, desc: "1d4 devoradores de cerebros caminan escoltados por 3d6 cautivos duergar.", nv: 6, esMonstruo: true },
    { min: 4, max: 5, desc: "Una hidra albina irrumpe en estampida azuzada por los látigos de 2d4 drow.", nv: 6, esMonstruo: true },
    { min: 6, max: 7, desc: "Un duergar pide socorro a gritos; 2d4 más aguardan listos para una emboscada.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "2d6 drow liderados por una sacerdotisa cazan nuevos prisioneros y esclavos.", nv: 4, esMonstruo: true },
    { min: 10, max: 11, desc: "2d6 arañas gigantes pálidas corretean veloces desde la oscuridad.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Cieno goteante apaga las llamas de inmediato y deja pegadas a las criaturas en el sitio.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "2d6 siervos hombres bestia arrastran a un trol como ofrenda para su señor aboleth.", nv: 5, esMonstruo: true },
    { min: 16, max: 17, desc: "2d4 sanguijuelas gigantes serpentean trepando por los muros como ofidios.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Esporas brillantes flotan al pisar levantando un letargo y sueño incontrolable (CD 13 CON o sueño).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "2d8 hombres-hongo siguen el rastro de 2d4 gnomos de las profundidades ladrones.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "1d6 trepadores cavernícolas pegan cadáveres drow a las paredes como recipientes para sus larvas.", nv: 3, esMonstruo: true },
    { min: 24, max: 25, desc: "1d8 caballeros enanos malheridos retroceden hacia los niveles y cuevas superiores.", nv: 3, esMonstruo: true },
    { min: 26, max: 27, desc: "1d4 enredadores (ropers) cobran vida camuflados entre estalagmitas.", nv: 7, esMonstruo: true },
    { min: 28, max: 29, desc: "Una momia quejumbrosa cubierta de hongos y moho avanza tambaleándose.", nv: 6, esMonstruo: true },
    { min: 30, max: 31, desc: "La tierra tiembla; un gusano púrpura irrumpirá aquí en 1d4 asaltos.", nv: 10, esMonstruo: true },
    { min: 32, max: 33, desc: "2d12 duergar severos (Neutrales) dirigen una caravana mercantil subterránea.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "Un estrangulador acecha en silencio al grupo para emboscar por la retaguardia.", nv: 3, esMonstruo: true },
    { min: 36, max: 37, desc: "Un terremoto hace que el túnel comience a derrumbarse sobre las cabezas del grupo (2d8 daño).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un ogro zombi deambula sin rumbo dirigiéndose hacia cualquier sonido o ruido.", nv: 4, esMonstruo: true },
    { min: 40, max: 41, desc: "1d4 sabuesos del infierno brotan de una ruptura repentina de magma ardiente.", nv: 4, esMonstruo: true },
    { min: 42, max: 43, desc: "Un guerrero humano malherido yace inconsciente en mitad del suelo de roca.", nv: 2, esMonstruo: true },
    { min: 44, max: 45, desc: "Se activa una trampa drow de dardos envenenados y redes de telaraña pegajosa.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un mediano ciego y pálido cuida de una bandada de 2d6 cocatrices.", nv: 3, esMonstruo: true },
    { min: 48, max: 49, desc: "2d6 murciélagos gigantes caen en picado desde las bóvedas atraídos por el calor corporal.", nv: 1, esMonstruo: true },
    { min: 50, max: 53, desc: "Dos tribus de hombres bestia luchan a muerte por el control de un frío altar de obsidiana.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "El suelo cede bajo los pies abriéndose un socavón de (2d6 × 3) metros de profundidad.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Dos minotauros se dan caza mutuamente destrozando a cualquiera que se cruce.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "Un nido de 2d12 mantos oscuros (darkmantles) cae en masa sobre cualquier ruido fuerte.", nv: 1, esMonstruo: true },
    { min: 60, max: 61, desc: "2d20 hombres-hongo pacíficos construyen una colonia de hogares de hongos gigantes.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "Un druida gnomo de las profundidades cuida con mimo un lecho de setas de neón brillantes.", nv: 3, esMonstruo: true },
    { min: 64, max: 65, desc: "1d4 devoradores de cerebros huyen desesperados de un voraz gusano púrpura.", nv: 10, esMonstruo: true },
    { min: 66, max: 67, desc: "Ráfagas de gas agrio y fétido provocan alucinaciones auditivas aterradoras (CD 12 SAB o confusión).", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "2d6 arañas astrales se teletransportan a través de fracturas estelares que se cierran al instante.", nv: 4, esMonstruo: true },
    { min: 70, max: 71, desc: "2d4 mantos negros (cloakers) se dan un festín sobre el cadáver de un gusano púrpura.", nv: 6, esMonstruo: true },
    { min: 72, max: 73, desc: "Un bruto cavernario forcejea en brutal combate con 1d4 trepadores hambrientos.", nv: 4, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales se han quedado sin antorchas y tropiezan en la oscuridad.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "La gravedad se invierte por completo de forma súbita durante 1d4 asaltos.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un sacerdote drow demente lidera una jauría hambrienta de 3d6 gules drow.", nv: 5, esMonstruo: true },
    { min: 80, max: 81, desc: "2d4 bocas balbucientes (gibbering mouthers) avanzan deslizándose y profiriendo lamentos.", nv: 3, esMonstruo: true },
    { min: 82, max: 83, desc: "Un clérigo humano extraviado hace 15 años ofrece curaciones milagrosas.", nv: 4, esMonstruo: true },
    { min: 84, max: 85, desc: "Esqueletos antiguos y cubiertos de moho se fusionan formando una siseante naga ósea.", nv: 5, esMonstruo: true },
    { min: 86, max: 87, desc: "Una sombra se desprende de la propia sombra de un PJ y arremete contra él.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 drow esquivan y contraatacan frente a las acometidas de 3d6 hombres lagarto albinos.", nv: 3, esMonstruo: true },
    { min: 90, max: 91, desc: "2d6 mineros enanos tiznados de carbón abren un boquete excavando a través del muro.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "2d20 motas de luz zigzagueantes curan 1 PG cada una si se atrapan al vuelo.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Una bruja nocturna cabalga a lomos de un escorpión gigante de caparazón transparente.", nv: 6, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante se abre paso saliendo a duras penas de una grieta muy angosta.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un cofre de tesoro ancestral intacto contiene un objeto mágico aleatorio.", nv: 4, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_desert.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.desert = {
  name: "Desierto / Arenas",
  entries: [
    { min: 1, max: 1, desc: "Un gusano púrpura emerge de la arena alzándose como una torre sobre el grupo.", nv: 10, esMonstruo: true },
    { min: 2, max: 3, desc: "3d6 bandidos asaltantes de la Ciudad Oculta aparecen cabalgando en el horizonte.", nv: 2, esMonstruo: true },
    { min: 4, max: 5, desc: "2d4 salamandras se arrastran hacia una serpiente gigante que toma el sol sobre una roca.", nv: 5, esMonstruo: true },
    { min: 6, max: 7, desc: "Una engreída esfinge exige la respuesta correcta a un acertijo para permitir el paso.", nv: 8, esMonstruo: true },
    { min: 8, max: 9, desc: "2d4 ankhegs excavan fuera de las dunas ejecutando una emboscada repentina.", nv: 3, esMonstruo: true },
    { min: 10, max: 11, desc: "Una tribu de 2d20 berserkers cruza las dunas a lomos de camellos veloces.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "El viento arrecia desatando una tormenta de arena cegadora durante 1d4 horas (visibilidad cercana).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un enjambre de escarabajos brota en masa desde una duna baja.", nv: 2, esMonstruo: true },
    { min: 16, max: 17, desc: "3d6 kóbolds acompañados por un hechicero kóbold recolectan escarabajos.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "Un vasto campo de cactus venenosos y espinosos brota entre las arenas (1d4 daño y CD 12 CON o envenenado).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "2d6 hombres lagarto camuflados se ocultan bajo una fina capa de arena.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "Una jauría de 2d6 mastines salvajes y sarnosos persigue al grupo manteniendo las distancias.", nv: 1, esMonstruo: true },
    { min: 24, max: 25, desc: "1d6 gladiadores sedientos y unidos por cadenas avanzan tambaleándose y exhaustos.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Una lámpara de latón desgastada y semienterrada (10% de probabilidad de tener un efrit dentro).", nv: 9, esMonstruo: false },
    { min: 28, max: 29, desc: "2d4 elfos del desierto a caballo repelen el ataque furioso de 2d8 ankhegs.", nv: 3, esMonstruo: true },
    { min: 30, max: 31, desc: "Un torreón derruido de arenisca sirve de cubil a una manada de 2d4 leones.", nv: 3, esMonstruo: true },
    { min: 32, max: 33, desc: "2d4 monstruos del óxido corretean picoteando en un vertedero de restos metálicos.", nv: 3, esMonstruo: true },
    { min: 34, max: 35, desc: "Un mojón funerario medio enterrado contiene 1d4 sarcófagos con momias en su interior.", nv: 6, esMonstruo: true },
    { min: 36, max: 37, desc: "1d4 redes con púas de hueso se disparan bruscamente desde el lecho arenoso (CD 12 DES o inmovilizado).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "1d6 sombras se ocultan al resguardo de la sombra de afilados pilares de roca.", nv: 2, esMonstruo: true },
    { min: 40, max: 41, desc: "2d4 salamandras arrastran en camillas los cadáveres de dos ankhegs cazados.", nv: 5, esMonstruo: true },
    { min: 42, max: 43, desc: "Un escorpión gigante se desliza sigiloso a espaldas de un goblin que medita.", nv: 3, esMonstruo: true },
    { min: 44, max: 45, desc: "Un espejismo ilusorio que simula un oasis fresco tiembla en la línea del horizonte.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Una naga ósea repta sobre la arena dejando un rastro ondulante tras de sí.", nv: 5, esMonstruo: true },
    { min: 48, max: 49, desc: "1d4 mantícoras vuelan en círculos sobre un anillo de hombres lagarto muertos.", nv: 5, esMonstruo: true },
    { min: 50, max: 53, desc: "Un gólem de hierro avanza con paso firme y resuelto a través de las dunas.", nv: 10, esMonstruo: true },
    { min: 54, max: 55, desc: "Una imponente duna de arena cede y colapsa en avalancha hacia los personajes (2d6 daño contundente).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Cuernos de guerra resuenan en la lejanía; 3d20 bandidos se aproximan a la zona.", nv: 2, esMonstruo: true },
    { min: 58, max: 59, desc: "Un elemental de fuego arde como una gran hoguera en lo alto de una duna alta.", nv: 5, esMonstruo: true },
    { min: 60, max: 61, desc: "2d6 campesinos y mercaderes descansan en un oasis rodeado de palmeras.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "Una manada de 2d6 centauros del desierto se acerca observando con cautela.", nv: 3, esMonstruo: true },
    { min: 64, max: 65, desc: "2d6 buitres trazan círculos sobre los personajes, atrayendo miradas no deseadas.", nv: 1, esMonstruo: false },
    { min: 66, max: 67, desc: "El cauce seco de un río tiene incrustados fósiles descomunales de nautiloideos.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "1d4 cobras anidan ocultas bajo una cesta de mimbre volcada.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "Un embudo de arena se hunde hacia adentro, revelando la guarida de arañas gigantes.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "Un lobo leonado aparece cojeando a la vista; 2d6 más se aproximan sigilosos por detrás.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "3d6 kóbolds arrojan piedras desde pequeñas oquedades en una cresta rocosa.", nv: 1, esMonstruo: true },
    { min: 76, max: 77, desc: "Comienza una lluvia torrencial que amenaza con inundar las zonas bajas de la planicie.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un dragón de fuego sobrevuela la zona; divisa a los personajes a cielo descubierto.", nv: 10, esMonstruo: true },
    { min: 80, max: 81, desc: "Un genio (djinni) y un efrit intercambian golpes brutales en un duelo estruendoso.", nv: 9, esMonstruo: true },
    { min: 82, max: 83, desc: "Algariz, el dragón del desierto (Legal), dormita plácidamente sobre una roca humeante.", nv: 11, esMonstruo: true },
    { min: 84, max: 85, desc: "1d8 hobgoblins del clan Juramentados del Acero montados en hipogrifos patrullan el aire.", nv: 4, esMonstruo: true },
    { min: 86, max: 87, desc: "Un mago irritado excava alrededor del vértice superior de una pirámide enterrada.", nv: 4, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 sectarios de túnicas rojas combaten ferozmente contra 2d4 bandidos en camellos.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Un fénix renacido en llamas se eleva hacia el firmamento: el grupo recibe +1 ficha de suerte.", nv: 8, esMonstruo: false },
    { min: 92, max: 93, desc: "El esqueleto blanqueado por el sol de un barco cubre la boca de un pozo de agua dulce.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Una pareja de bulettes excava círculos subterráneos alrededor de un pilar de piedra negra.", nv: 6, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante viaja a lomos de un camello fuertemente cargado de fardos.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "La legendaria Biblioteca de Alabastro de Gehemna se materializa en mitad del desierto.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_dungeon_1_3.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.dungeon_1_3 = {
  name: "Mazmorra (Niveles 1–3)",
  entries: [
    { min: 1, max: 1, desc: "Un cubo gelatinoso recorre en silencio el pasillo absorbiendo restos.", nv: 3, esMonstruo: true },
    { min: 2, max: 3, desc: "Un osochuza (owlbear) merodea buscando carroña o cadáveres que devorar.", nv: 4, esMonstruo: true },
    { min: 4, max: 5, desc: "Aventureros rivales se encaran con el grupo argumentando que ellos «llegaron primero».", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "1d6 monstruos del óxido (rust monsters) pululan sobre una grieta de mercurio.", nv: 3, esMonstruo: true },
    { min: 8, max: 9, desc: "Una armadura animada sin piernas se arrastra pesadamente por el suelo.", nv: 3, esMonstruo: true },
    { min: 10, max: 11, desc: "Ojos fosforescentes observan al grupo desde el límite del haz de luz.", nv: 1, esMonstruo: false },
    { min: 12, max: 13, desc: "El agua que gotea desde el techo resulta ser ácido abrasador (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un basilisco vigila celosamente su nido con 1d4 huevos de piedra.", nv: 5, esMonstruo: true },
    { min: 16, max: 17, desc: "2d6 hombres bestia caníbales acechan rastreando su próxima comida.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Estalagmitas agrietadas expulsan bufidos de vapor sobrecalentado a presión.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "2d4 osgos (bugbears) buscan presas más débiles a las que extorsionar y robar.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "2d6 murciélagos gigantes anidan en el techo; la luz los altera y desorienta.", nv: 1, esMonstruo: true },
    { min: 24, max: 29, desc: "1d6 ciempiés gigantes caen sorpresivamente desde fisuras del techo.", nv: 1, esMonstruo: true },
    { min: 30, max: 35, desc: "2d4 esqueletos marchan en fila respondiendo a una orden ancestral.", nv: 1, esMonstruo: true },
    { min: 36, max: 41, desc: "1d4 zombis deambulan torpemente atraídos por el olor a carne viva.", nv: 2, esMonstruo: true },
    { min: 42, max: 47, desc: "2d6 goblins armados discuten a gritos por el reparto de un botín mugriento.", nv: 1, esMonstruo: true },
    { min: 48, max: 53, desc: "Una trampa de pozo disimulada bajo losas sueltas amenaza con ceder al paso.", nv: 1, esMonstruo: false },
    { min: 54, max: 59, desc: "Un enjambre de ratas gigantes sale en estampida huyendo de un depredador mayor.", nv: 1, esMonstruo: true },
    { min: 60, max: 65, desc: "1d4 guls (ghouls) royendo huesos secos en una esquina en sombras.", nv: 2, esMonstruo: true },
    { min: 66, max: 69, desc: "Un ettercap teje capullos de telaraña alrededor de una presa aún viva.", nv: 3, esMonstruo: true },
    { min: 70, max: 71, desc: "Un ogro llamado Lud raya insultos y palabras soeces en la pared.", nv: 4, esMonstruo: true },
    { min: 72, max: 73, desc: "1d6 goblins pelean contra 2d4 kóbold por los restos del cadáver de un grick.", nv: 1, esMonstruo: true },
    { min: 74, max: 75, desc: "Un pozo de gas inflamable; una llama abierta causará una deflagración.", nv: 2, esMonstruo: false },
    { min: 76, max: 85, desc: "1d6 bandidos o desertores han montado un campamento provisional mal oculto.", nv: 1, esMonstruo: true },
    { min: 86, max: 90, desc: "Una puerta secreta mal encajada vibra levemente con un chirrido de viento.", nv: 1, esMonstruo: false },
    { min: 91, max: 95, desc: "Sonidos lejanos de cadenas arrastrándose o tambores rítmicos que cesan al parar.", nv: 1, esMonstruo: false },
    { min: 96, max: 97, desc: "El Mercader Errante aparece sentado tranquilamente sobre un cofre cerrado.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un pergamino de conjuro intacto yace protegido dentro de un tubo de hueso.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_forest.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.forest = {
  name: "Bosque / Floresta",
  entries: [
    { min: 1, max: 1, desc: "3d6 arañas gigantes cubren esta espesura con densas capas de telaraña.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Un oso lechuza carroñero husmea ruidosamente entre la maleza.", nv: 4, esMonstruo: true },
    { min: 4, max: 5, desc: "1d6 jabalíes huyen de una partida de caza de 2d4 centauros territoriales.", nv: 3, esMonstruo: true },
    { min: 6, max: 7, desc: "2d6 elfos siguen el rastro del grupo en sigilo y preparan una emboscada.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "Una pantera cae desde las ramas sobre el personaje situado en la retaguardia.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "2d6 avispas gigantes zumban alrededor de un pesado avispero en la copa de un árbol.", nv: 1, esMonstruo: true },
    { min: 12, max: 13, desc: "Un árbol ancestral y podrido cruje y cae desplomándose hacia los personajes (2d6 de daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un otyugh hambriento se oculta bajo un montón de vegetación en descomposición.", nv: 4, esMonstruo: true },
    { min: 16, max: 17, desc: "2d4 simios malolientes y aulladores arrojan piedras desde detrás de los troncos.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Una llovizna de polvo de duendecillo brillante provoca una intensa somnolencia (CD 12 CON o sueño).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Una serpiente gigante sisea enroscada en el lodo del cauce de un río seco.", nv: 4, esMonstruo: true },
    { min: 22, max: 23, desc: "1d4 tejones furiosos irrumpen gruñendo desde su madriguera oculta.", nv: 1, esMonstruo: true },
    { min: 24, max: 25, desc: "1d4 treants ofrecen cortesías e intercambian palabras mientras caminan con parsimonia.", nv: 8, esMonstruo: true },
    { min: 26, max: 27, desc: "1d6 goblins Colmillo de Lobo montados en huargos (worgs) cruzan la arboleda a la carrera.", nv: 3, esMonstruo: true },
    { min: 28, max: 29, desc: "Una enredadera sanguinaria (blood vine) intenta estrangular a un berserker malherido.", nv: 3, esMonstruo: true },
    { min: 30, max: 31, desc: "2d4 elfos vigilan un puesto en las copas de los árboles; los PJ están invadiendo su territorio.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Una bruja de la floresta (weald hag) recolecta setas con sus 2 jabalíes truferos.", nv: 4, esMonstruo: true },
    { min: 34, max: 35, desc: "1d6 hadas (faeries) intentan atar a los personajes de pies y manos con aguja e hilo.", nv: 1, esMonstruo: true },
    { min: 36, max: 37, desc: "2d20 hongos violetas bamboleantes se arrastran por el suelo del bosque.", nv: 2, esMonstruo: true },
    { min: 38, max: 39, desc: "2d6 lobos famélicos lanzan dentelladas a los PJ y retroceden fuera de su alcance.", nv: 1, esMonstruo: true },
    { min: 40, max: 41, desc: "1d6 arañas gigantes corretean ágiles por las ramas altas de los árboles.", nv: 2, esMonstruo: true },
    { min: 42, max: 43, desc: "2d6 kóbolds embarrados saltan desde la maleza exigiendo el pago de un peaje.", nv: 1, esMonstruo: true },
    { min: 44, max: 45, desc: "Un mago atrapado en un capullo de telaraña colgante forcejea y grita pidiendo socorro.", nv: 3, esMonstruo: true },
    { min: 46, max: 47, desc: "1d4 cepos para osos oxidados se disparan ocultos bajo el manto de hojarasca (1d6 de daño e inmovilizado).", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "2d4 orcos de la tribu Sangre de Ramlaat talan árboles a hachazos con furia.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "2d6 goblins y 2d6 kóbolds salen a tropel de una cueva en plena batalla campal.", nv: 1, esMonstruo: true },
    { min: 54, max: 55, desc: "Un hilo trampa de tripa activa una amplia red que cae desde la copa de los árboles.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Dos osos pardos cargan contra el grupo simultáneamente desde flancos opuestos.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "Un enjambre de ciempiés surge retorciéndose desde el suelo fangoso.", nv: 1, esMonstruo: true },
    { min: 60, max: 61, desc: "Una dríade contempla el fondo de un pozo rodeado de viejos muros de piedra.", nv: 3, esMonstruo: true },
    { min: 62, max: 63, desc: "Un leprechaun engreído se mofa de los aventureros subido a una rama alta.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "Un montículo tambaleante (shambling mound) asciende pesadamente por el talud de un barranco.", nv: 5, esMonstruo: true },
    { min: 66, max: 67, desc: "Una colosal cabeza tallada en piedra semienterrada asoma entre la tierra y el musgo.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "2d6 orcos acampan mientras asan al espetón a un campesino que grita de dolor.", nv: 2, esMonstruo: true },
    { min: 70, max: 71, desc: "Un lobo temible (dire wolf) rabioso y con espuma en la boca se tambalea y gruñe feroz.", nv: 3, esMonstruo: true },
    { min: 72, max: 73, desc: "1d4 ranas gigantes intentan atrapar con sus lenguas a 1d6 murciélagos aguijón.", nv: 1, esMonstruo: true },
    { min: 74, max: 75, desc: "El trol Hrugin arrastra atados a 1d4 aventureros rivales gravemente heridos.", nv: 5, esMonstruo: true },
    { min: 76, max: 77, desc: "Rosas carmesíes brotan alrededor de una desgastada estatua de Gede (otorga +1 ficha de suerte al orar).", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un ogro arranca un árbol joven de cuajo para fabricarse un nuevo garrote.", nv: 4, esMonstruo: true },
    { min: 80, max: 81, desc: "2d6 goblins bailan alrededor de un imponente roble repleto de fetiches y amuletos.", nv: 1, esMonstruo: true },
    { min: 82, max: 83, desc: "2d4 caballeros verdes exploradores (Legales) emergen con porte noble de entre los árboles.", nv: 4, esMonstruo: true },
    { min: 84, max: 85, desc: "2d4 kóbolds transportan en andas a su rey osgo (bugbear) dentro de un barril de cerveza.", nv: 3, esMonstruo: true },
    { min: 86, max: 87, desc: "1d4 trepadores cavernícolas (cave creepers) salen disparados de una cueva que apesta a azufre.", nv: 3, esMonstruo: true },
    { min: 88, max: 89, desc: "Un dragón del bosque irritable y perezoso avanza pesadamente entre la espesura.", nv: 9, esMonstruo: true },
    { min: 90, max: 91, desc: "Un campamento de 2d20 berserkers está dispuesto a comerciar y negociar suministros.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Una capilla de piedra abandonada y cubierta de enredaderas ofrece un refugio seguro.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un caudillo orco pronuncia un encendido discurso ante 2d12 orcos que rugen entusiasmados.", nv: 4, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante asoma la cabeza saliendo del interior del tocón de un árbol podrido.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un unicornio reluciente aparece majestuoso recortado bajo un haz de luz solar (cura todas las heridas al acercarse).", nv: 4, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_grassland.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.grassland = {
  name: "Praderas y Llanuras",
  entries: [
    { min: 1, max: 1, desc: "Un roc sobrevuela el cielo y se lanza en picado para cazar a los aventureros.", nv: 9, esMonstruo: true },
    { min: 2, max: 3, desc: "Un esmilodonte (tigre dientes de sable) acecha en silencio oculto entre la hierba alta.", nv: 4, esMonstruo: true },
    { min: 4, max: 5, desc: "Una cría de mamut huye despavorida de una jauría de 2d6 lobos.", nv: 3, esMonstruo: true },
    { min: 6, max: 7, desc: "Un mago pálido con túnica negra permanece inmóvil y en silencio sobre un risco alto.", nv: 4, esMonstruo: true },
    { min: 8, max: 9, desc: "1d4 escarabajos peloteros gigantes empujan estiércol hacia una montaña colosal de abono.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "Un remolino de polvo resulta ser en realidad un elemental de aire furioso.", nv: 5, esMonstruo: true },
    { min: 12, max: 13, desc: "Nubarrones negros y densos cubren el cielo; una violenta tormenta eléctrica es inminente.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "1d4 grifos salvajes y feroces devoran y destrozan el cadáver de un caballo.", nv: 4, esMonstruo: true },
    { min: 16, max: 17, desc: "3d6 kóbolds asoman por madrigueras de perritos de la pradera y arrojan piedras.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "El viento arrastra una densa humareda; un gran incendio de pastos arrasa la llanura cercana.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un elemental de tierra chapotea y se revuelca en un barrizal de géiseres humeantes.", nv: 5, esMonstruo: true },
    { min: 22, max: 23, desc: "1d4 dracos/wyverns toman el sol sobre las colinas escarpadas de unas tierras baldías.", nv: 6, esMonstruo: true },
    { min: 24, max: 25, desc: "2d6 velociraptores de color rojizo merodean por las llanuras buscando presas lentas.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Dos gigantes de las colinas avanzan pesadamente cargando un caballo bajo cada brazo.", nv: 6, esMonstruo: true },
    { min: 28, max: 29, desc: "Una manada de 3d6 gnolls rastrea a un rinoceronte acribillado a flechazos.", nv: 2, esMonstruo: true },
    { min: 30, max: 31, desc: "La estructura vacía de una torre en ruinas está cubierta de runas pintadas con los dedos.", nv: 1, esMonstruo: false },
    { min: 32, max: 33, desc: "La hierba se curva formando una gran «S»; se trata de una serpiente gigante en marcha.", nv: 4, esMonstruo: true },
    { min: 34, max: 35, desc: "Una estampida atronadora de 2d6 mamuts se precipita directamente hacia los personajes.", nv: 7, esMonstruo: true },
    { min: 36, max: 37, desc: "Un orco solitario medita sentado en el centro de un círculo sagrado de piedras gastadas.", nv: 2, esMonstruo: true },
    { min: 38, max: 39, desc: "Rocas megalíticas grabadas con runas arcanas sellan el acceso a túmulos antiguos.", nv: 1, esMonstruo: false },
    { min: 40, max: 41, desc: "3d6 berserkers montados a caballo coronan la línea del horizonte al galope.", nv: 2, esMonstruo: true },
    { min: 42, max: 43, desc: "Un wyvern se lanza en picado contra un humano acorralado al borde de un precipicio.", nv: 6, esMonstruo: true },
    { min: 44, max: 45, desc: "Un mecanismo de cuerdas y cuñas de madera sostiene enormes rocas en equilibrio precario.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Dos gnolls se baten a muerte dentro de un círculo de 2d4 gnolls que aúllan cánticos.", nv: 2, esMonstruo: true },
    { min: 48, max: 49, desc: "1d4 jabalíes salvajes beben agua en las orillas de un arroyo fino y serpenteante.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "2d6 bandidos a caballo arrean una manada de bisontes para despeñarla por un acantilado.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Flautas de viento malditas fijadas en postes hipnotizan la mente con su silbido constante (CD 12 SAB o fascinado).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un cabecilla bandido (duplica su Nivel y daño) exige un duelo singular a muerte.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "2d4 leones observan con fijeza a los personajes apostados en la ribera de un río.", nv: 3, esMonstruo: true },
    { min: 60, max: 61, desc: "2d20 campesinos temerosos observan inquietos desde un asentamiento circular de yurtas.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "Un druida ataviado con piel de lobo pinta símbolos carmesíes sobre un bisonte muerto.", nv: 3, esMonstruo: true },
    { min: 64, max: 65, desc: "2d4 pegasos planean en círculos enseñando a volar a 2 potros torpes.", nv: 3, esMonstruo: true },
    { min: 66, max: 67, desc: "Una efigie con forma de caballo tejida en hierba seca se alza solitaria en medio del campo.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un basilisco ocre reposa sobre una roca e infla la bolsa carnosa de su garganta.", nv: 5, esMonstruo: true },
    { min: 70, max: 71, desc: "Una quimera albina surge volando desde el interior de una nube blanca y esponjosa.", nv: 7, esMonstruo: true },
    { min: 72, max: 73, desc: "1d4 ankhegs sisean y escupen ácido encarándose contra un bulette fuera de sí.", nv: 6, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales viaja montado en el palanquín (howdah) sobre un elefante.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Un árbol fosilizado se balancea inestable en la cima de un pilar de lodo erosionado.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un tiranosaurio rex corre a zancadas a la zaga de una manada de antílopes aterrorizados.", nv: 8, esMonstruo: true },
    { min: 80, max: 81, desc: "2d6 gnolls avanzan agazapados bajo el nivel de la hierba alta con lanzas preparadas.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Un mamut acaricia suavemente la cabeza de un PJ con su trompa: otorga +1 ficha de suerte.", nv: 7, esMonstruo: false },
    { min: 84, max: 85, desc: "Una pareja de esmilodontes salta al ataque desde lo alto de unas crestas de hierba.", nv: 4, esMonstruo: true },
    { min: 86, max: 87, desc: "Un gólem de piedra hecho de yeso brillante custodia un campo sagrado.", nv: 8, esMonstruo: true },
    { min: 88, max: 89, desc: "Una sombra se desplaza ondulando sobre los pastos como una mancha negra viva.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "2d12 cazadores berserkers dan una cálida bienvenida a los viajeros en su campamento.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Un santuario con cabeza de toro dedicado a un dios perdido ahuyenta a las bestias salvajes.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un bruto cavernario cegado por el sol se abalanza a ciegas hacia cualquier ruido.", nv: 4, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante huye a toda velocidad perseguido de cerca por un rinoceronte furioso.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un ángel principi desciende desde una nube de tormenta para otorgar una bendición / don celestial.", nv: 10, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_high_district.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.high_district = {
  name: "Distrito Alto",
  entries: [
    { min: 1, max: 1, desc: "El Soberano impone a los PJ un «impuesto de inmundicia» de 500 po.", nv: 5, esMonstruo: false },
    { min: 2, max: 3, desc: "El hijo del Duque desafía a un PJ a un duelo a muerte en plena calle.", nv: 3, esMonstruo: true },
    { min: 4, max: 5, desc: "Los Asesinos del Soberano caen sobre los PJ exigiéndoles explicaciones de su presencia.", nv: 4, esMonstruo: true },
    { min: 6, max: 7, desc: "Aventureros adscritos al Gremio de Mercenarios encaran hostilmente a los PJ.", nv: 3, esMonstruo: true },
    { min: 8, max: 9, desc: "Un ladrón disfrazado de mayordomo guía con engaños al grupo hacia una emboscada.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "La esposa del Barón Clard guiña un ojo a un PJ; el Barón lo ve y monta en cólera.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Tres barriles de vino selecto se sueltan de un carro y ruedan a toda velocidad hacia los PJ (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "La pantera mascota de un noble se asusta, rompe la correa y arremete descontrolada.", nv: 2, esMonstruo: true },
    { min: 16, max: 17, desc: "Un escorpión gigante (un manjar exótico) se escapa de las cocinas de un restaurante de lujo.", nv: 3, esMonstruo: true },
    { min: 18, max: 19, desc: "Un orinal arrojado con furia desde una ventana alta cae en picado hacia los personajes.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un bardo drogado en taparrabos arremete dando manotazos y aspavientos hacia los PJ.", nv: 1, esMonstruo: true },
    { min: 22, max: 23, desc: "Un adivino sobornado señala a los PJ y profetiza a gritos que son «futuros criminales».", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Una patrulla recelosa de la Guardia de la Ciudad sigue de cerca cada paso del grupo.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Un niño de aspecto impoluto intenta hacer la zancadilla a un PJ cuando pasa a su lado.", nv: 1, esMonstruo: false },
    { min: 28, max: 29, desc: "Tres matones vestidos de gala extorsionan a un banquero cobrándole «protección».", nv: 2, esMonstruo: true },
    { min: 30, max: 31, desc: "Seis matones salen a la carrera de la Joyería Real cargando un pesado saco de botín.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Un alguacil y cuatro guardias detienen a los PJ para tasar e ingresar impuestos atrasados.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "Un noble altivo aparta de un empujón a un PJ murmurando: «Escoria plebeya».", nv: 1, esMonstruo: false },
    { min: 36, max: 37, desc: "Una guarda mágica averiada se activa y lanza un conjuro de telaraña (web) sobre los PJ (CD 12 DES).", nv: 2, esMonstruo: false },
    { min: 38, max: 39, desc: "Se escucha un fingido y poco convincente grito de socorro tras la fachada de una taberna.", nv: 1, esMonstruo: false },
    { min: 40, max: 41, desc: "Un mercader de sedas finas acusa a voces a un PJ de haber rasgado un fular carísimo.", nv: 1, esMonstruo: false },
    { min: 42, max: 43, desc: "La Duquesa Gorvalt sufre un desmayo y tambalea al borde de un balcón muy elevado.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Una multitud de juerguistas enmascarados llena la vía; una daga vuela dirigida a un PJ.", nv: 2, esMonstruo: true },
    { min: 46, max: 47, desc: "Lord Larvin se atraganta escupiendo su copa de vino: ha sido envenenado.", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "La guardia desaloja a los indigentes de los soportales; uno resulta ser un PNJ conocido.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "Una patrulla de la guardia detiene y cachea a los PJ buscando objetos sospechosos o robados.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Un joven petulante se burla a carcajadas de la ropa y el aspecto de los aventureros.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Una mujer con capucha hace señas discretas a los PJ para que entren en una rosaleda privada.", nv: 2, esMonstruo: true },
    { min: 58, max: 59, desc: "Un niño con poderes mágicos latentes e incontrolados invoca por accidente a un diablillo (imp).", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Una alumna de la academia de etiqueta de Miss Fralk se escabulle a toda prisa por un callejón.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Un noble ruega a un PJ que le dé un puñetazo en la cara, e indigna tanto si lo hace como si no.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "Los PJ encuentran una nota caída: «Llevad el veneno al local Cielo de Zafiro».", nv: 1, esMonstruo: false },
    { min: 66, max: 67, desc: "A través de una ventana en penumbra, los PJ divisan 6 gules balanceándose rítmicamente.", nv: 2, esMonstruo: true },
    { min: 68, max: 69, desc: "Una aristócrata borracha confiesa alegremente en plena conversación haber asesinado a su marido.", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "Aventureros rivales exhiben con chulería sus nuevas placas de alguacil y órdenes de arresto.", nv: 3, esMonstruo: true },
    { min: 72, max: 73, desc: "1d6 guardias municipales hacen el ridículo intentando atrapar a un ágil acróbata por los tejados.", nv: 1, esMonstruo: false },
    { min: 74, max: 75, desc: "Un PJ reconoce a un impostor que se hace pasar descaradamente por Sir Wyndos el Bravo.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Una estatuilla de mono de bronce transmuta 1 pc en 1 po un 1% de las veces (con un 00 en d100).", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un bardo lloroso que entona baladas fúnebres y deprimentes sigue al grupo a todos lados.", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Los PJ cometen una grave falta de protocolo y cortesía delante de un príncipe de visita oficial.", nv: 1, esMonstruo: false },
    { min: 82, max: 83, desc: "El anciano y jovial Sir Faust finge sacar una perla de la oreja de un PJ y se la regala (valor 25 po).", nv: 1, esMonstruo: false },
    { min: 84, max: 85, desc: "Una bruja nocturna disfrazada de pastelera reparte tartaletas rellenas de potentes narcóticos.", nv: 6, esMonstruo: true },
    { min: 86, max: 87, desc: "Los PJ advierten que 1d4 zombis perfectamente embalsamados y vestidos pasean entre la multitud.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "Un disidente político se refugia entre los PJ mientras suelta soflamas contra los gobernantes.", nv: 1, esMonstruo: false },
    { min: 90, max: 91, desc: "Una Reverenda Hermana (acólita) ofrece bendiciones o curaciones milagrosas a un PJ.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Un basilisco disecado cobra vida de repente y sale en estampida de una tienda de antigüedades.", nv: 5, esMonstruo: true },
    { min: 94, max: 95, desc: "Un auténtico vampiro acecha sin ser detectado entre los asistentes a un baile de máscaras.", nv: 9, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante vende discretamente dados trucados por 5 po el par.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "El Soberano cena en una terraza y, de buen humor, invita a los PJ a sentarse a su mesa.", nv: 5, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_jungle.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.jungle = {
  name: "Jungla / Selva Tropical",
  entries: [
    { min: 1, max: 1, desc: "Estatuas hiperrealistas cubiertas de musgo alertan de la cercanía del cubil de una medusa.", nv: 6, esMonstruo: true },
    { min: 2, max: 3, desc: "Un tiranosaurio rex sacude el suelo con sus pisadas en busca de presas frescas.", nv: 8, esMonstruo: true },
    { min: 4, max: 5, desc: "3d6 viperianos siseantes acorralan en círculo a 2d4 hombres lagarto de escamas rojas.", nv: 3, esMonstruo: true },
    { min: 6, max: 7, desc: "Un hechicero kóbold montado en un cocodrilo con correa exige un tributo en oro.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "Una pantera aulladora se abalanza sobre un PJ cayendo desde una rama elevada.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "Un gorila macho resopla y patrulla el territorio entre la densa maleza del suelo.", nv: 4, esMonstruo: true },
    { min: 12, max: 13, desc: "Un tramo de terreno fangoso resulta ser una traicionera fosa de arenas movedizas (CD 12 DES o hundirse).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "2d4 drow protegidos con armaduras de piel de basilisco acechan entre la bruma húmeda.", nv: 4, esMonstruo: true },
    { min: 16, max: 17, desc: "1d4 escorpiones gigantes descienden correteando por los gruesos troncos de los árboles.", nv: 3, esMonstruo: true },
    { min: 18, max: 19, desc: "Una alfombra viva de hormigas carnívoras voraces avanza cubriendo el suelo del bosque.", nv: 2, esMonstruo: true },
    { min: 20, max: 21, desc: "2d4 murciélagos aguijón (stingbats) revolotean y caen en picado a través del dosel selvático.", nv: 1, esMonstruo: true },
    { min: 22, max: 23, desc: "1d4 ranas gigantes asoman sus ojos sobre la superficie de una charca inmóvil y cenagosa.", nv: 2, esMonstruo: true },
    { min: 24, max: 25, desc: "2d6 hombres lagarto de la tribu Lanza Sangrienta revisan sus trampas de red en busca de presas.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "2d4 velociraptores con rayas amarillas trazan círculos alrededor de los aventureros.", nv: 2, esMonstruo: true },
    { min: 28, max: 29, desc: "Un gorila aullador propina puñetazos y mordiscos a un cocodrilo que se revuelve con violencia.", nv: 4, esMonstruo: true },
    { min: 30, max: 31, desc: "2d6 drow con armaduras de quitina se deslizan entre colosales columnas ciclópeas y musgosas.", nv: 4, esMonstruo: true },
    { min: 32, max: 33, desc: "Un dragón del bosque duerme plácidamente a la entrada de una gruta tapada por lianas.", nv: 9, esMonstruo: true },
    { min: 34, max: 35, desc: "Un trol viscoso y cubierto de cieno se balancea entre las lianas saltando como un simio.", nv: 5, esMonstruo: true },
    { min: 36, max: 37, desc: "Flores rosadas carnívoras se abren de golpe disparando dardos espinosos con veneno (1d6 daño + CD 12 CON o envenenado).", nv: 2, esMonstruo: false },
    { min: 38, max: 39, desc: "2d4 zombis (antiguos aventureros caídos) deambulan torpemente entre la vegetación.", nv: 2, esMonstruo: true },
    { min: 40, max: 41, desc: "Un colosal braquiosaurio avanza a zancadas lentas pastando pacíficamente de las copas.", nv: 8, esMonstruo: true },
    { min: 42, max: 43, desc: "Un brazo humano que se agita desesperado asoma hundiéndose en un pozo de arenas movedizas.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Flores de fragancia embriagadora desprenden polen que sume en un profundo sueño mágico (CD 12 CON o sueño).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un zombi gigante (triplica su Nivel y daño) escarba abriéndose paso fuera de la tierra.", nv: 6, esMonstruo: true },
    { min: 48, max: 49, desc: "1d6 pterodáctilos anidan en las ramas alrededor de un profundo socavón o cenote.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "2d4 drow cubiertos de pintura de guerra blanca cargan al ataque saliendo de una caverna.", nv: 4, esMonstruo: true },
    { min: 54, max: 55, desc: "Cañas endebles y hojas ocultan un foso de 3 metros plagado de un enjambre de víboras (2d6 daño).", nv: 2, esMonstruo: false },
    { min: 56, max: 57, desc: "Un dríder se aferra al tronco de un árbol, oteando el claro con ojos penetrantes y alertas.", nv: 6, esMonstruo: true },
    { min: 58, max: 59, desc: "Un mago viperiano y 1d4 esclavos zombis examinan con detenimiento un monolito rúnico.", nv: 4, esMonstruo: true },
    { min: 60, max: 61, desc: "1d6 hadas juguetonas retozan y hacen travesuras en un claro bañado por el sol.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "El Doctor Bartom Halsy encabeza una expedición botánica con 2d12 porteadores y campesinos.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "Una serpiente gigante reposa en una rama baja mientras agita su lengua bífida al aire.", nv: 4, esMonstruo: true },
    { min: 66, max: 67, desc: "1d4 arañas cuelgan de finos hilos de seda justo a la altura de la cabeza de los PJ.", nv: 2, esMonstruo: true },
    { min: 68, max: 69, desc: "2d4 ciempiés gigantes surgen reptando del interior hueco de un tronco en putrefacción.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "1d4 cocodrilos amagan un ataque saliendo del río con las fauces abiertas para asustar.", nv: 3, esMonstruo: true },
    { min: 72, max: 73, desc: "Dos jóvenes dragones del bosque se baten en el aire disputándose un territorio de caza.", nv: 7, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales en pánico ofrece un ídolo de oro a los PJ para que los auxilien.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "2d4 berserkers transportan una cría viva de basilisco dentro de una cesta de mimbre tejida.", nv: 2, esMonstruo: true },
    { min: 78, max: 79, desc: "Una salva de jabalinas sale disparada desde las fauces de una descomunal estatua de piedra (2d6 daño).", nv: 2, esMonstruo: false },
    { min: 80, max: 81, desc: "1d4 berserkers y un druida cazan guiados por el olfato de su basilisco domesticado.", nv: 4, esMonstruo: true },
    { min: 82, max: 83, desc: "Un místico hombre-hongo errante ofrece a los aventureros bálsamos y ungüentos curativos.", nv: 3, esMonstruo: true },
    { min: 84, max: 85, desc: "Una naga custodia una imponente ruina de piedra que alberga un oscuro altar sacrificial.", nv: 6, esMonstruo: true },
    { min: 86, max: 87, desc: "Un ofidio viperiano (viperian ophid) lidera una patrulla de reconocimiento de 2d4 viperianos.", nv: 4, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 drow danzan ágiles enredando con hilos de seda a un cíclope que brama enfurecido.", nv: 6, esMonstruo: true },
    { min: 90, max: 91, desc: "Un poblado de chozas de barro con 2d20 hombres lagarto de la tribu Ojo de Ámbar.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Un haz de luz solar ilumina con precisión la cúspide de un zigurat escalonado de 3 niveles.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Una esfinge enjoyada con jade y oro descansa con indolencia sobre un pedestal de roca.", nv: 8, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante corre despavorido huyendo de un grupo de 2d4 hombres bestia.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un radiante couatl desciende serpenteando por el aire y ofrece una bendición divina al grupo.", nv: 7, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_low_district.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.low_district = {
  name: "Distrito Bajo",
  entries: [
    { min: 1, max: 1, desc: "3d6 zombis salen tambaleándose de un osario/depósito del que emanan densas nubes de humo.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Un salteador (reaver) y 4 bandidos buscan a alguien vulnerable a quien extorsionar.", nv: 3, esMonstruo: true },
    { min: 4, max: 5, desc: "2d6 piratas y 2d4 mercaderes armados (guardias) se baten a espada en los muelles.", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "Un marinero curtido escupe al paso de los PJ y masculla con desprecio: «Marineros de agua dulce».", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "Un semiorco sale despedido por la ventana de una taberna y se estrella de lleno contra un PJ.", nv: 2, esMonstruo: true },
    { min: 10, max: 11, desc: "1d6 maleantes de aspecto sospechoso merodean apostados frente a la carnicería.", nv: 1, esMonstruo: true },
    { min: 12, max: 13, desc: "Una tintorería arroja un vertido hirviente y tóxico directo al arroyo de la calle (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Niños de la calle tiran pasteles de fango a los reos que protestan atrapados en la picota.", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "Una figura encapuchada se desliza sigilosa entre las lápidas de un cementerio ruinoso.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Una reja de alcantarilla atascada revienta expulsando un géiser de aguas fecales sobre los viandantes.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un hombre transporta en una carretilla un ataúd que se sacude con violentos golpes desde el interior.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "Una mujer susurra a un PJ «Sigue el juego» y entabla charla casual mientras pasa una patrulla.", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Marineros borrachos se apoyan en los PJ e intentan vaciarles los bolsillos torpemente.", nv: 1, esMonstruo: true },
    { min: 26, max: 27, desc: "Unos canteros desprecintan un pozo cegado, liberando un enjambre de 2d6 ciempiés gigantes.", nv: 1, esMonstruo: true },
    { min: 28, max: 29, desc: "Dos bandas rivales de 2d4 chiquillos tiznados se pelean a mordiscos y arañazos.", nv: 1, esMonstruo: false },
    { min: 30, max: 31, desc: "Cuatro matones acorralan amenazantes a una mujer que intenta abrir un almacén portuario.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Un mendigo con tos asmática ofrece augurios y profecías a cambio de unas pocas monedas.", nv: 1, esMonstruo: false },
    { min: 34, max: 35, desc: "Rateros del Gremio de Ladrones siguen los pasos de los PJ a una distancia de 20 pasos.", nv: 1, esMonstruo: true },
    { min: 36, max: 37, desc: "Los muros calcinados de un almacén incendiado colapsan y caen sobre una casa de vecindad.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "2d4 kóbolds arrojan una lluvia de piedras desde el alero del tejado de un tinglado.", nv: 1, esMonstruo: true },
    { min: 40, max: 41, desc: "Mozo de cuadra y estibadores trasladan en un carromato a un tigre enjaulado que ruge con furia.", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Un sepulturero joven e inexperto tropieza y cae de espaldas en una tumba recién cavada.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Ladrones apostados en un callejón tensan una cuerda en el suelo para hacer tropezar a su presa.", nv: 1, esMonstruo: true },
    { min: 46, max: 47, desc: "El tendero de un tugurio susurra a los PJ ofreciendo género clandestino y «mercancía exótica».", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "1d6 matones del Gremio de Ladrones con ganas de pelea se encaran con los aventureros.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "Una reyerta campal de 2d6 plebeyos borrachos sale por las puertas de una taberna hacia la calle.", nv: 1, esMonstruo: true },
    { min: 54, max: 55, desc: "Tejas de arcilla se desprenden del tejado ruinoso de un almacén cayendo en picado (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un herrero arroja una herradura al rojo vivo sobre una pila de chatarra a los pies de los PJ.", nv: 1, esMonstruo: false },
    { min: 58, max: 59, desc: "Una anciana ciega muestra con orgullo a su «lindo gatito» (una feroz y sarnosa rata gigante).", nv: 1, esMonstruo: true },
    { min: 60, max: 61, desc: "Una compañía de malabaristas bebe cerveza mientras lanzan y giran dagas con acrobacias arriesgadas.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Un mercenario a caballo arrastra atado a un hombre esquelético hacia el tribunal de deudores.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "Dos pordioseros se lían a bofetadas disputándose los restos quemados de una rata ensartada.", nv: 1, esMonstruo: false },
    { min: 66, max: 67, desc: "Un chorro de agua cristalina y pura brota a borbotones entre los adoquines resquebrajados.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un mendigo frágil resulta ser en realidad 3 kóbolds subidos a hombros bajo un saco de arpillera.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "Un alguacil y cuatro guardias arrastran por la fuerza a un detenido que forcejea a gritos.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "Dos criadores de perros clandestinos pierden el control de sus dos feroces mastines de pelea.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "Aventureros rivales acusan a los PJ de estar saqueando contratos en «su territorio asignado».", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Decenas de gatos callejeros se reúnen en asamblea silenciosa bajo los muelles o porches.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un porteador de antorchas suplicante sigue al grupo rogando que le contraten para una expedición.", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Un chillido desgarrador retumba desde el interior de una hilera de cobertizos mohosos.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Lady Unwin (de incógnito) pide a los PJ indicaciones para llegar a la taberna de mala muerte La Rata Roja.", nv: 1, esMonstruo: false },
    { min: 84, max: 85, desc: "Tres figuras encapuchadas sacan arrastrando un voluminoso y pesado saco de un edificio comunal.", nv: 2, esMonstruo: true },
    { min: 86, max: 87, desc: "Una criatura de ojos rojos brillantes vigila inmóvil desde las sombras de una ventana tapiada.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 Barones de Ribera (matones) acorralan y agreden a una patrulla de la guardia urbana.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Una factoría desecha un barril de grasa de ballena rancia (equivale a 10 viales de aceite utilizables).", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "La vieja Esmerelda reparte tazones de vino caliente especiado (cura 1d4 PG al beberlo).", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un mendigo cubierto de viruela resulta ser el Duque disfrazado para espiar a sus súbditos.", nv: 4, esMonstruo: false },
    { min: 96, max: 97, desc: "El Mercader Errante intenta vender las escrituras de propiedad de una tienda abandonada.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un objeto mágico caído brilla olvidado en el lodo del fondo de una cuneta mugrienta.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_market.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.market = {
  name: "Distrito del Mercado",
  entries: [
    { min: 1, max: 1, desc: "Seis sectarios del caos arrojan sacos de arpillera a la cabeza de los PJ para secuestrarlos.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Un lanzador de cuchillos borracho y tambaleante lanza una daga hacia un PJ (1d4 daño).", nv: 1, esMonstruo: true },
    { min: 4, max: 5, desc: "Un carro desbocado cargado de lechugas se estrella rodando por la calle.", nv: 1, esMonstruo: false },
    { min: 6, max: 7, desc: "Un noble que pasa tropieza y le echa la culpa descaradamente a un personaje.", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "Tres niños esqueléticos tiran del equipo y de los bolsillos de los aventureros.", nv: 1, esMonstruo: false },
    { min: 10, max: 11, desc: "Un halcón encapuchado lanza un zarpazo a un PJ que pasa demasiado cerca de su percha.", nv: 1, esMonstruo: false },
    { min: 12, max: 13, desc: "Una montaña sobrecargada de estiércol se desmorona cayendo hacia el grupo.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Una mirada rápida a un callejón revela varios mercaderes sombríos y clandestinos.", nv: 2, esMonstruo: true },
    { min: 16, max: 17, desc: "La Guardia de la Ciudad pide a los PJ que «distraigan» a los guardias de un vendedor.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Un tragafuegos escupe una llamarada (25% de probabilidad de sufrir un percance/fallo).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Una mujer esparce sigilosamente un polvo sospechoso dentro de un barril de especias.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "Un rebaño de cabras colapsa el tráfico; los animales mastican el equipo suelto de los PJ.", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Un frutero con la cara encarnada acusa agriamente a una mujer de robo.", nv: 1, esMonstruo: false },
    { min: 26, max: 27, desc: "Un vendedor parte una fruta exótica que despide un fétido olor a carne podrida.", nv: 1, esMonstruo: false },
    { min: 28, max: 29, desc: "Dos hechiceros en pleno duelo mental/psíquico provocan conatos de incendio alrededor.", nv: 4, esMonstruo: true },
    { min: 30, max: 31, desc: "Ruido de cerámica rota y gritos furiosos resuenan desde el interior de un carromato cubierto.", nv: 1, esMonstruo: false },
    { min: 32, max: 33, desc: "Un famoso maestro de la espada (gladiador) bebe solo y pensativo en una carpa.", nv: 4, esMonstruo: true },
    { min: 34, max: 35, desc: "2d4 guardias de caravana aburridos buscan bronca e intentan provocar a los PJ.", nv: 2, esMonstruo: true },
    { min: 36, max: 37, desc: "Un caballo asustado se encabrita, amenazando con descabalgar a su jinete.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un dardo con una nota se clava a los pies de un PJ: «Reunión en lo de Liona».", nv: 1, esMonstruo: false },
    { min: 40, max: 41, desc: "Dos mercaderes a grito pelado se amenazan mutuamente blandiendo dagas.", nv: 1, esMonstruo: true },
    { min: 42, max: 43, desc: "Un tatuador ofrece a un personaje un tatuaje a mitad de precio (5 po).", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Un mercader coaccionado sirve como cebo para la trampa de un culto siniestro.", nv: 2, esMonstruo: true },
    { min: 46, max: 47, desc: "Un tragasables intenta tomar prestada el arma de un PJ para usarla en su espectáculo.", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "Un noble de visita pasea con chulería escoltado por 6 guardias empujadores y agresivos.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "Un mono pequeño con chaleco y gorro rojo roba pertenencias a la gente del gentío.", nv: 1, esMonstruo: false },
    { min: 54, max: 55, desc: "Una compañía de malabaristas vacía con destreza los bolsillos de los espectadores.", nv: 2, esMonstruo: true },
    { min: 56, max: 57, desc: "Un descomunal berserker vuelca una mesa de un golpe e inicia una pelea a puñetazos.", nv: 3, esMonstruo: true },
    { min: 58, max: 59, desc: "Un hombre con la boca teñida de rojo ofrece raíz de sangre (bloodroot), altamente adictiva.", nv: 1, esMonstruo: false },
    { min: 60, max: 61, desc: "Un goblin pasa corriendo a toda prisa cargando cuatro gallinas que aletean por las patas.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "Cuatro monjes con túnicas insisten con fervor en que los PJ se sometan a un exorcismo.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "Aventureros rivales brindan con jarras en torno a la cabeza recién cortada de un trol.", nv: 3, esMonstruo: true },
    { min: 66, max: 67, desc: "Un oso pardo encadenado rompe sus amarras y desata el caos en estampida.", nv: 4, esMonstruo: true },
    { min: 68, max: 69, desc: "Un mendigo ofrece vender un anillo de sello nobiliario robado a cambio de oro (15 po).", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "Una anciana en una tienda llena de humo ofrece maldecir enemigos a cambio de una tarifa.", nv: 3, esMonstruo: true },
    { min: 72, max: 73, desc: "Un pillo callejero roba una hogaza de pan del puesto de un panadero y sale huyendo.", nv: 1, esMonstruo: false },
    { min: 74, max: 75, desc: "La Guardia de la Ciudad intenta arrestar a un encantador de serpientes indignado.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Una manzana roja y brillante aparece de pronto en la mano de una estatua de Gede.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "1d6 «plebeyos» (guardias de incógnito) siguen a distancia a un joven señorito noble.", nv: 2, esMonstruo: true },
    { min: 80, max: 81, desc: "Una anciana encorvada susurra un presagio profético al oído de un PJ al cruzarse.", nv: 1, esMonstruo: false },
    { min: 82, max: 83, desc: "2d4 kóbolds salen de golpe de unos barriles y arrebatan mercancía de los puestos.", nv: 1, esMonstruo: true },
    { min: 84, max: 85, desc: "Mendicantes religiosos colocan collares de cuentas benditas en el cuello de los PJ.", nv: 1, esMonstruo: false },
    { min: 86, max: 87, desc: "Un ladrón intenta colar una estatuilla de marfil robada en la mochila de un PJ.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "Un centauro cubierto de musgo entra al trote desatando murmullos; busca a un PJ.", nv: 3, esMonstruo: true },
    { min: 90, max: 91, desc: "Tres camellos irritados empiezan a escupir a todo el que se encuentre cerca.", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "Un boticario ofrece a los aventureros una muestra gratuita de infusiones o tinturas.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un espejo antiguo se hace añicos en el suelo, liberando al alma en pena (wraith) atrapada dentro.", nv: 8, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante tiene un pergamino mágico aleatorio en venta.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "El Soberano de incógnito presiona un diamante auténtico en la mano de un PJ (valor 100 po).", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_mountain.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.mountain = {
  name: "Montaña / Cumbres",
  entries: [
    { min: 1, max: 1, desc: "Una ventisca aulladora o tormenta eléctrica bloquea el paso durante 1d4 días.", nv: 1, esMonstruo: false },
    { min: 2, max: 3, desc: "2d20 goblins liderados por un gigante caprino (goat giant) bajan en masa por los riscos.", nv: 6, esMonstruo: true },
    { min: 4, max: 5, desc: "Una mantícora y un draco/wyvern combaten en el aire con salvajismo y furia.", nv: 6, esMonstruo: true },
    { min: 6, max: 7, desc: "Braaqul, un espía hobgoblin, recopila información y vigila a los personajes.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "2d6 goblins arrojan piedras y excrementos ardiendo a los PJ desde un saliente.", nv: 1, esMonstruo: true },
    { min: 10, max: 11, desc: "Una banda de 2d4 enanos bandidos extorsiona a los viajeros exigiéndoles un peaje.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Un gran peñasco se fractura, provocando una avalancha de rocas y escombros (2d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "El trol Skaldor mastica huesos de enano dentro de su húmeda caverna.", nv: 5, esMonstruo: true },
    { min: 16, max: 17, desc: "1d6 salamandras se arrastran saliendo de una poza de aguas termales humeantes.", nv: 5, esMonstruo: true },
    { min: 18, max: 19, desc: "Un terremoto sacude las cumbres provocando peligrosos corrimientos de tierra.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Una bandada de murciélagos chilla y se precipita saliendo de una angosta garganta.", nv: 1, esMonstruo: false },
    { min: 22, max: 23, desc: "3d6 hobgoblins marchan en formación cerrada y disciplinada a lo largo de un paso.", nv: 3, esMonstruo: true },
    { min: 24, max: 25, desc: "1d4 piromantes (magos) meditan en trance junto a un pozo de lava ardiente.", nv: 4, esMonstruo: true },
    { min: 26, max: 27, desc: "1d4 gigantes de fuego forjan armas colosales en el interior de una cueva humeante.", nv: 8, esMonstruo: true },
    { min: 28, max: 29, desc: "1d6 goblins avanzan agazapados por una cresta acechando a 2d4 campesinos.", nv: 1, esMonstruo: true },
    { min: 30, max: 31, desc: "3d6 orcos acampan dentro de una fortaleza de piedra vacía y derruida.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Un gigante de escarcha avanza a zancadas por una loma nevada cantando a viva voz.", nv: 9, esMonstruo: true },
    { min: 34, max: 35, desc: "2d4 harpías se aferran a los bordes afilados de unos precipicios escarpados.", nv: 3, esMonstruo: true },
    { min: 36, max: 37, desc: "Una erupción volcánica desata una lluvia de ceniza, gases calientes y ríos de lava.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un león de montaña leonado salta desde su escondite al PJ en la retaguardia.", nv: 3, esMonstruo: true },
    { min: 40, max: 41, desc: "Un salteador (reaver) y 2d6 bandidos intentan capturar vivos a los aventureros.", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Un campesino yace con una pierna atrapada bajo una roca caída y pide auxilio.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Un fuego fatuo (will-o'-wisp) flota atrayendo a las presas hacia el pozo de una mina oculta.", nv: 2, esMonstruo: true },
    { min: 46, max: 47, desc: "2d6 berserkers ataviados con capas de león de montaña cazan en la zona.", nv: 2, esMonstruo: true },
    { min: 48, max: 49, desc: "Un ettercap teje un embudo de telaraña gigante a través de un barranco estrecho.", nv: 3, esMonstruo: true },
    { min: 50, max: 53, desc: "2d4 hombres bestia cierran el cerco en torno a 1d4 soldados enanos.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Una pila de troncos apilados se suelta y rueda ladera abajo a gran velocidad (2d6 daño).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Una pesadilla (nightmare) se eleva volando desde la caldera de un volcán cercano.", nv: 6, esMonstruo: true },
    { min: 58, max: 59, desc: "2d4 simios aúllan y hacen rodar piedras contra los que pasan por el sendero inferior.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Un dragón de fuego duerme sobre un túmulo de monedas rodeado por un foso de lava.", nv: 10, esMonstruo: true },
    { min: 62, max: 63, desc: "2d6 soldados enanos montan guardia ante las puertas abovedadas de sus salones.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "Un cíclope arranca un árbol del suelo de cuajo para usarlo a modo de garrote.", nv: 6, esMonstruo: true },
    { min: 66, max: 67, desc: "El gigantesco perfil tallado de un rey enano preside la pared del acantilado.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "2d6 salamandras reposan sobre lajas de roca calentadas por el sol de montaña.", nv: 5, esMonstruo: true },
    { min: 70, max: 71, desc: "Un roc erizado vigila celosamente su nido con 1d4 huevos titánicos.", nv: 9, esMonstruo: true },
    { min: 72, max: 73, desc: "2d4 goblins despluman a una cocatriz viva para prepararla en el puchero.", nv: 3, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales contempla perplejo y desorientado un mapa de cuero.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Un hacha enana oxidada yace clavada en el cráneo blanqueado de un minotauro.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "1d4 hobgoblins montados en grifos arrojan jabalinas desde el aire contra los PJ.", nv: 4, esMonstruo: true },
    { min: 80, max: 81, desc: "1d6 sabuesos del infierno gruñen y arremeten saliendo de una gruta resplandeciente.", nv: 4, esMonstruo: true },
    { min: 82, max: 83, desc: "Hiraldo el Espadachín entrena sus estocadas en la soledad de un cañón sin salida.", nv: 4, esMonstruo: true },
    { min: 84, max: 85, desc: "Un minotauro resoplante cruza atravesando un arco de piedra finamente tallado.", nv: 4, esMonstruo: true },
    { min: 86, max: 87, desc: "Un wyvern en plena cacería cae en picado deslizándose por la ladera de la montaña.", nv: 6, esMonstruo: true },
    { min: 88, max: 89, desc: "2d6 hobgoblins forman un muro de escudos para contener a un obeso gigante de las colinas.", nv: 6, esMonstruo: true },
    { min: 90, max: 91, desc: "Un caballero en oración medita bajo el frío impacto de una estrecha cascada.", nv: 3, esMonstruo: true },
    { min: 92, max: 93, desc: "Un santuario consagrado a Madeera otorga +1 ficha de suerte a cambio de una ofrenda.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un ogro de dos cabezas discute acaloradamente consigo mismo mientras remueve un guiso.", nv: 5, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante busca tritones y salamandras raras levantando rocas sueltas.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "La esfinge Rathgamnon desciende volando majestuosa para otorgar un objeto mágico.", nv: 8, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_ocean.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.ocean = {
  name: "Océano / Alta Mar",
  entries: [
    { min: 1, max: 1, desc: "Se abre un remolino colosal (whirlpool) que amenaza con tragar a cualquier navío.", nv: 8, esMonstruo: false },
    { min: 2, max: 3, desc: "Una gigante de las tormentas furiosa exige saber por qué los PJ navegan por su reino.", nv: 10, esMonstruo: true },
    { min: 4, max: 5, desc: "Una hidra y un kraken baten el mar en una titánica y encarnizada lucha a muerte.", nv: 10, esMonstruo: true },
    { min: 6, max: 7, desc: "Lyrellos, un príncipe tritón, muestra su desagrado por las ropas de los personajes.", nv: 3, esMonstruo: true },
    { min: 8, max: 9, desc: "Una ola gigante arremete contra los PJ; se trata en realidad de un elemental de agua.", nv: 5, esMonstruo: true },
    { min: 10, max: 11, desc: "Un pulpo gigante estira sus tentáculos desde las profundidades para atrapar a los PJ.", nv: 4, esMonstruo: true },
    { min: 12, max: 13, desc: "Una tempestad de vientos huracanados azota con violencia dañando las embarcaciones.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "2d6 sahuagines abordan la cubierta intentando hacer prisioneros a los aventureros.", nv: 2, esMonstruo: true },
    { min: 16, max: 17, desc: "3d6 piratas a bordo del Cielo Carmesí intentan interceptar el barco de los PJ.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Algas pardas densas transforman la superficie del agua en un cenagal espeso e intransitable.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un enjambre de ratas gigantes huye a nado alejándose del pecio de un naufragio.", nv: 1, esMonstruo: true },
    { min: 22, max: 23, desc: "Un colosal plesiosaurio emerge quebrando el agua desde las oscuras profundidades.", nv: 6, esMonstruo: true },
    { min: 24, max: 25, desc: "Una leva de piratas reclutadores aparece a toda vela en una rápida galera negra.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "2d4 sirenas cantan melodías cautivadoras desde un atolón rocoso en mitad del mar.", nv: 3, esMonstruo: true },
    { min: 28, max: 29, desc: "Un pulpo gigante y un plesiosaurio se baten en una salvaje lucha a muerte.", nv: 6, esMonstruo: true },
    { min: 30, max: 31, desc: "Un fantasma y 3d20 esqueletos tripulan un barco abandonado y escorado a la deriva.", nv: 4, esMonstruo: true },
    { min: 32, max: 33, desc: "1d6 tiburones rodean la nave de los PJ e intentan voltear cualquier embarcación menor.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "Una naga ósea repta por la superficie del agua como una monstruosa serpiente marina.", nv: 5, esMonstruo: true },
    { min: 36, max: 37, desc: "Arrecifes de coral traicioneros y afilados entorpecen y dañan el casco de los barcos.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Una densa niebla marina oculta en su interior a 2d4 fuegos fatuos luminosos.", nv: 2, esMonstruo: true },
    { min: 40, max: 41, desc: "2d8 tritones forajidos exigen un tributo en monedas para permitir el paso seguro.", nv: 2, esMonstruo: true },
    { min: 42, max: 43, desc: "Un pirata abrasado por el sol y deshidratado pasa flotando dentro de un barril de ron.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Un fuerte oleaje lanza por los aires enjambres de medusas de color violeta (1d4 daño y veneno).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Una hidra hambrienta rompe la superficie del agua rugiendo de forma explosiva.", nv: 6, esMonstruo: true },
    { min: 48, max: 49, desc: "2d6 tumularios (wights) se acercan a bordo de un drakkar adornado con calaveras.", nv: 3, esMonstruo: true },
    { min: 50, max: 53, desc: "Bajo un volcán marino sumergido, un elemental de agua y otro de fuego libran un combate.", nv: 5, esMonstruo: true },
    { min: 54, max: 55, desc: "Una tromba de agua giratoria surca a toda velocidad la superficie del mar.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Una ola gigante errante de duración 1d4 asaltos amenaza con volcar o quebrar las naves.", nv: 1, esMonstruo: false },
    { min: 58, max: 59, desc: "Una bruja marina (sea hag) disfrazada de sirena herida pide socorro fingiendo debilidad.", nv: 4, esMonstruo: true },
    { min: 60, max: 61, desc: "Una torre blanca flotante alberga a un archimago distraído en sus estudios (Neutral).", nv: 8, esMonstruo: true },
    { min: 62, max: 63, desc: "Un gigante de las tormentas en un carro tirado por dos mantarrayas gigantes frena a charlar.", nv: 10, esMonstruo: true },
    { min: 64, max: 65, desc: "Un banco de 2d20 medusas venenosas desciende rodeando a los personajes.", nv: 1, esMonstruo: true },
    { min: 66, max: 67, desc: "2d100 aves marinas migratorias se posan cubriendo cualquier objeto que sobresalga del agua.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Una botella de cristal verde con un pergamino enrollado dentro flota sobre las olas.", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "1d4 devoradores de cerebros se aproximan en un submarino con forma de caracola.", nv: 6, esMonstruo: true },
    { min: 72, max: 73, desc: "2d6 sahuagines se deslizan en silencio para asaltar a 3d10 campesinos tritones.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales revisa un mapa a bordo de la balandra Merlass.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Un barco en la lejanía parece levitar suspendido mágicamente sobre la línea del mar.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Una nube de tormenta pasajera descarga una lluvia de pirañas voraces sobre los PJ (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "2d6 cangrejos gigantes reposan en un arrecife salpicado de maderos y restos de naufragios.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Sillenion, el dragón marino (Legal), muestra curiosidad por la «gente de tierra firme».", nv: 10, esMonstruo: true },
    { min: 84, max: 85, desc: "Una mantarraya gigante con el lomo incrustado de percebes pasa flotando a la vista.", nv: 3, esMonstruo: true },
    { min: 86, max: 87, desc: "Un g\u00f3lem de alabastro camina con paso pesado y lento por el fondo del lecho marino.", nv: 8, esMonstruo: true },
    { min: 88, max: 89, desc: "Un gigante de las tormentas lucha en clara desventaja contra un megalod\u00f3n gigante.", nv: 10, esMonstruo: true },
    { min: 90, max: 91, desc: "Un mercante, El Le\u00f3n de Jade, saluda e invita a los navegantes a subir a bordo.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Un florecimiento raro de algas centelleantes tiene la propiedad de anular una maldici\u00f3n.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "3d10 harp\u00edas revolotean en torno a la boca humeante de un volc\u00e1n en una isla.", nv: 3, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante rema con tranquilidad a bordo de un bote auxiliar bamboleante.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Una gaviota que sobrevuela el barco deja caer un objeto m\u00e1gico aleatorio sobre la cubierta.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_river_coast.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.river_coast = {
  name: "Ríos y Costas",
  entries: [
    { min: 1, max: 1, desc: "Un tsunami inunda la orilla, elevando el nivel del agua 3 metros durante 2d4 asaltos (CD 13 DES o arrastrado).", nv: 1, esMonstruo: false },
    { min: 2, max: 3, desc: "Una nidada de 1d4 basiliscos toma el sol sobre rocas planas.", nv: 5, esMonstruo: true },
    { min: 4, max: 5, desc: "3d6 campesinos inspeccionan con temor a una serpiente gigante moribunda.", nv: 1, esMonstruo: true },
    { min: 6, max: 7, desc: "Mirell, un buscador de oro y perlas, increpa a voces a los «cazadores furtivos».", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "3d8 kóbolds bucean bajo la superficie usando cañas huecas como tubos de respiración.", nv: 1, esMonstruo: true },
    { min: 10, max: 11, desc: "Un trol acecha dentro de una cueva húmeda en la misma orilla del agua.", nv: 5, esMonstruo: true },
    { min: 12, max: 13, desc: "Una fosa de arenas movedizas o fango de (1d4 × 3) metros de ancho se abre bajo los pies (CD 12 DES o hundirse).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un banco de pirañas saltadoras salta en tropel desde las aguas poco profundas (1d6 daño).", nv: 1, esMonstruo: true },
    { min: 16, max: 17, desc: "Una bruja marina (sea hag) recolecta algas grasientas en la orilla del agua.", nv: 4, esMonstruo: true },
    { min: 18, max: 19, desc: "Una proliferación tóxica de algas rojas sofoca y envenena la orilla (CD 12 CON o envenenado).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "1d4 charcos de agua negra resultan ser en realidad pudines negros (black puddings).", nv: 6, esMonstruo: true },
    { min: 22, max: 23, desc: "3d8 orcos liderados por un caudillo orco acampan cerca del agua.", nv: 3, esMonstruo: true },
    { min: 24, max: 25, desc: "3d6 bandidos de río saltan de su escondite a bordo de botes de remos destartalados.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Una manada de 2d8 leones de caza merodea por la línea costera.", nv: 3, esMonstruo: true },
    { min: 28, max: 29, desc: "Un hipogrifo forcejea a la desesperada atrapado en las fauces de un cocodrilo.", nv: 3, esMonstruo: true },
    { min: 30, max: 31, desc: "2d6 goblins buceadores de gemas operan desde una choza desvencijada.", nv: 1, esMonstruo: true },
    { min: 32, max: 33, desc: "2d4 simios tantean y rebuscan en el agua tratando de atrapar peces diminutos.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "2d4 centauros territoriales pescan con lanza en los bajíos.", nv: 3, esMonstruo: true },
    { min: 36, max: 37, desc: "Una fuerte marea arremete contra los PJ, amenazando con arrastrarlos mar adentro.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "1d4 hipopótamos avanzan acompañados por el mismo número de crías.", nv: 4, esMonstruo: true },
    { min: 40, max: 41, desc: "Un cangrejo gigante cubierto de algas emerge quebrando la superficie del agua.", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Falsted el mediano se aferra a un bote auxiliar volcado que se hunde poco a poco.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Juncos o algas tejidas camuflan un foso de 6 metros de profundidad erizado de lanzas (2d6 daño).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un elefante nada en el agua asomando únicamente la trompa por la superficie.", nv: 5, esMonstruo: true },
    { min: 48, max: 49, desc: "1d4 hadas (faeries) atrapadas dentro de botellas de cristal con corcho pasan flotando.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "2d6 hombres lagarto cercan en círculo a un cangrejo gigante que forcejea.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Una red con lastres y púas sale disparada desde el fango o la arena (CD 12 DES o inmovilizado).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un gladiador con el casco encajado del revés avanza a tientas y a ciegas.", nv: 3, esMonstruo: true },
    { min: 58, max: 59, desc: "Una manada de 2d4 grifos anida en riscos elevados o en las copas de los árboles.", nv: 4, esMonstruo: true },
    { min: 60, max: 61, desc: "3d6 campesinos habitan tiendas coloridas sobre balsas de troncos atadas entre sí.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "El treant Yggral permanece inmóvil en la orilla, contemplando fijamente el cielo.", nv: 8, esMonstruo: true },
    { min: 64, max: 65, desc: "Un círculo de 2d4 estatuas deformes resultan ser gárgolas acechantes.", nv: 4, esMonstruo: true },
    { min: 66, max: 67, desc: "1d4 viejos botes de remos permanecen amarrados a un muelle ruinoso y carcomido.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "2d6 sanguijuelas gigantes intentan morder a cualquier nadador de sangre caliente.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "Finas galerías en el lodo o la arena albergan un enjambre de serpientes.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "3d6 mastines rabiosos impiden que un exhausto elfo alcance la orilla a salvo.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales transporta por tierra una canoa sobrecargada.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Un faro apagado y solitario se alza sobre un islote arenoso y estrecho.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "2d4 murciélagos aguijón (stingbats) zumban planeando al ras de la superficie del agua.", nv: 1, esMonstruo: true },
    { min: 80, max: 81, desc: "El Mar de Plata, un descomunal galeón de guerra, ha encallado profundamente.", nv: 1, esMonstruo: false },
    { min: 82, max: 83, desc: "Marga la Sabia recolecta cristales y plantas curativas en la ribera.", nv: 3, esMonstruo: true },
    { min: 84, max: 85, desc: "Una manada de 3d6 caballos salvajes galopa con estrépito por la orilla.", nv: 2, esMonstruo: true },
    { min: 86, max: 87, desc: "El hechicero kóbold Mortimus sermonea a voz en cuello subido a un tronco flotante.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "2d4 sectarios combaten contra 2d6 hombres lagarto en torno a un obelisco tallado.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Quargot el pescador acoge hospitalariamente a los viajeros pacíficos en su choza.", nv: 1, esMonstruo: true },
    { min: 92, max: 93, desc: "2d8 moluscos opalinos se agrupan en pozas de marea; contienen perlas valiosas (20 po c/u).", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "3d8 ranas gigantes croan insultos de una sola palabra en idioma común.", nv: 2, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante camina por las aguas poco profundas montado en zancos.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un cofre de tesoro semienterrado en la orilla contiene un objeto mágico.", nv: 3, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_ruins.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.ruins = {
  name: "Ruinas / Edificaciones Antiguas",
  entries: [
    { min: 1, max: 1, desc: "Un bruto cavernario mutante rompe y atraviesa un muro agrietado con violencia.", nv: 5, esMonstruo: true },
    { min: 2, max: 3, desc: "Un cubo gelatinoso se desplaza en silencio barredor a lo largo de un pasillo.", nv: 3, esMonstruo: true },
    { min: 4, max: 5, desc: "Un oso lechuza errante rebusca cadáveres entre los escombros para alimentarse.", nv: 4, esMonstruo: true },
    { min: 6, max: 7, desc: "Aventureros rivales encaran a los PJ reclamando que ellos «llegaron aquí primero».", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "1d6 monstruos del óxido pululan en torno a una grieta que burbujea mercurio.", nv: 3, esMonstruo: true },
    { min: 10, max: 11, desc: "Una armadura animada sin piernas se arrastra pesadamente por el suelo con los brazos.", nv: 3, esMonstruo: true },
    { min: 12, max: 13, desc: "Un muro agrietado que cruje se derrumba al menor contacto físico (1d6 de daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Una nota de tiza en el muro: «Karov, estaremos en la taberna El Cerdo Leal».", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "Mort el goblin escarba en las grietas buscando larvas y escarabajos para comer.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "El suelo cede y colapsa en un foso de (1d6 × 3) metros de profundidad.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Una partida de asalto de 2d4 hobgoblins avanza en formación militar cerrada.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "2d4 esqueletos cubiertos de telarañas se ensamblan a partir de huesos dispersos.", nv: 1, esMonstruo: true },
    { min: 24, max: 25, desc: "1d4 escarabajos peloteros gigantes empujan bolas enormes de estiércol seco.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Una gelatina ocre se oculta en el fondo de una poza o socavón encharcado.", nv: 3, esMonstruo: true },
    { min: 28, max: 29, desc: "Una única rosa perfecta brota creciendo entre las losas de piedra del suelo.", nv: 1, esMonstruo: false },
    { min: 30, max: 31, desc: "2d4 bandidos apagan sus faroles y preparan una emboscada apresurada.", nv: 1, esMonstruo: true },
    { min: 32, max: 33, desc: "Tres goblins se golpean la cabeza unos a otros con sartenes para «endurecerse el cráneo».", nv: 1, esMonstruo: true },
    { min: 34, max: 35, desc: "2d6 hombres bestia muelen a pedradas a un ciempiés gigante.", nv: 2, esMonstruo: true },
    { min: 36, max: 37, desc: "Una fuga de gas inflamable hace que todas las fuentes de luz estallen y se apaguen (2d6 fuego).", nv: 2, esMonstruo: false },
    { min: 38, max: 39, desc: "Un cubo gelatinoso repleto de equipo útil y armas ha quedado atrapado en un foso.", nv: 3, esMonstruo: true },
    { min: 40, max: 41, desc: "Un enjambre de ruidosos escarabajos de oro vuela cruzando la estancia.", nv: 1, esMonstruo: true },
    { min: 42, max: 43, desc: "Un PNJ malherido se tambalea hacia los personajes suplicando auxilio.", nv: 1, esMonstruo: true },
    { min: 44, max: 45, desc: "Un rastrillo de hierro oxidado cae de golpe, dividiendo al grupo en dos.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un estrangulador acecha oculto sobre una mochila cargada de piedras (cebo).", nv: 3, esMonstruo: true },
    { min: 48, max: 49, desc: "Un fantasma lloroso pasa flotando, absorto y distraído en sus propios desvaríos.", nv: 4, esMonstruo: true },
    { min: 50, max: 53, desc: "2d4 kóbolds se acercan en sigilo a la espalda de los PJ para un ataque sorpresa.", nv: 1, esMonstruo: true },
    { min: 54, max: 55, desc: "Vasijas de barro ancestrales vibran emitiendo una resonancia hipnótica (CD 12 SAB o aturdido).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "1d6 gricks destrozan ratas gigantes muertas y usan el pelaje para acolchar su nido.", nv: 2, esMonstruo: true },
    { min: 58, max: 59, desc: "Aventureros rivales escoltan a un aristócrata frágil en una «expedición turística».", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "3d4 goblins chatarreros regatean e intercambian baratijas y cachivaches raros.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "2d4 mineros enanos (soldados) apuntalan un muro que amenaza ruina.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "2d4 avispas gigantes construyen un enorme avispero de papel en el techo.", nv: 1, esMonstruo: true },
    { min: 66, max: 67, desc: "Una densa nube de vapor sulfúrico brota de una grieta en el suelo de piedra (CD 12 CON o asfixia).", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un enjambre de arañas brota en masa de un saco de huevos de gasa rota.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "Un ogro llamado Lud raya groserías e insultos en la pared de piedra.", nv: 4, esMonstruo: true },
    { min: 72, max: 73, desc: "1d6 goblins se pelean a puñetazos con 2d4 kóbolds por el cadáver de un grick.", nv: 1, esMonstruo: true },
    { min: 74, max: 75, desc: "2d4 murciélagos gigantes anidan colgados del techo; la luz los altera de inmediato.", nv: 1, esMonstruo: true },
    { min: 76, max: 77, desc: "Un ettercap teje capullos de seda alrededor de sus presas aún vivas.", nv: 3, esMonstruo: true },
    { min: 78, max: 79, desc: "1d6 sectarios buscan huesos de humanoides para utilizarlos en un ritual impío.", nv: 2, esMonstruo: true },
    { min: 80, max: 81, desc: "Una dríade busca desesperada su árbol, que unos osgos han talado para hacer leña.", nv: 3, esMonstruo: true },
    { min: 82, max: 83, desc: "Un gnomo de las profundidades toca una música sobrecogedora en hongos resonantes.", nv: 2, esMonstruo: true },
    { min: 84, max: 85, desc: "2d6 kóbolds trabajan en un laboratorio alquímico improvisado y altamente volátil.", nv: 1, esMonstruo: true },
    { min: 86, max: 87, desc: "Un gólem de piedra apila incansablemente las mismas rocas una y otra vez en montones.", nv: 8, esMonstruo: true },
    { min: 88, max: 89, desc: "Dos mantos oscuros (darkmantles) vuelan en círculos en un duelo de intimidación.", nv: 1, esMonstruo: true },
    { min: 90, max: 91, desc: "2d6 goblins transportan a su rey osgo (bugbear) en un precario palanquín.", nv: 3, esMonstruo: true },
    { min: 92, max: 93, desc: "2d4 trepadores cavernícolas (cave creepers) avanzan en tropel por el pasillo.", nv: 3, esMonstruo: true },
    { min: 94, max: 95, desc: "Los restos de una hoguera reciente aún desprenden brasas incandescentes y calor.", nv: 1, esMonstruo: false },
    { min: 96, max: 97, desc: "Un minotauro hace de guía al Mercader Errante a lo largo de un sendero de ruinas.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "El cadáver de un aventurero caído conserva un objeto mágico aleatorio intacto.", nv: 2, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_slums.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.slums = {
  name: "Suburbios / Bajos Fondos",
  entries: [
    { min: 1, max: 1, desc: "3d8 Barones de Ribera (matones) salen a tropel de un oscuro edificio de vecindad.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Una leva de 2d4 bandidos armados intenta secuestrar a los aventureros por la fuerza.", nv: 2, esMonstruo: true },
    { min: 4, max: 5, desc: "2d6 matones acorralan en un callejón a dos novatos de la Guardia de la Ciudad.", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "Un enfermo cubierto de viruela se aferra a la ropa de los PJ rogando comida.", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "1d6 ciempiés gigantes surgen retorciéndose de un montón de basura y estiércol.", nv: 1, esMonstruo: true },
    { min: 10, max: 11, desc: "Una jauría de 2d4 mastines rabiosos comienza a seguir el rastro del grupo.", nv: 1, esMonstruo: true },
    { min: 12, max: 13, desc: "Una tienda en llamas cruje y se derrumba con estrépito sobre la calzada (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "2d4 plebeyos se pelean a empujones por los despojos y vísceras que desecha un carnicero.", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "Una silueta oscura (un gul a la caza) se desliza ágil por el borde de los tejados.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "1d4 sectarios del caos encapuchados se cuelan en el interior de un templo abandonado.", nv: 2, esMonstruo: true },
    { min: 20, max: 21, desc: "1d4 escarabajos peloteros gigantes trepan por la fachada de madera de una taberna.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "2d4 matones exigen el pago de un peaje de paso; dejan cruzar si se les paga.", nv: 2, esMonstruo: true },
    { min: 24, max: 25, desc: "3d6 guardias municipales visiblemente nerviosos marchan hacia la taberna La Olla de Sentina.", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Un hombre moribundo en la cuneta suplica revelar un peligroso secreto antes de expirar.", nv: 1, esMonstruo: false },
    { min: 28, max: 29, desc: "2d4 maleantes callejeros se baten usando garrotes y botellas rotas.", nv: 1, esMonstruo: true },
    { min: 30, max: 31, desc: "Un cadáver cae desde una azotea con una nota clavada: «Escoria de Ribera».", nv: 1, esMonstruo: false },
    { min: 32, max: 33, desc: "Vecinos asustados se agolpan frente a un caserón del que surgen gritos desgarradores.", nv: 1, esMonstruo: false },
    { min: 34, max: 35, desc: "Un hombre encadenado e histérico sale arrastrándose por el ventanuco de un sótano.", nv: 1, esMonstruo: false },
    { min: 36, max: 37, desc: "Una multitud de niños mendigos crece y acosa más al grupo cuantas más monedas reciben.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Fray Héctor corre compungido a administrar la extremaunción tras una llamada urgente.", nv: 1, esMonstruo: false },
    { min: 40, max: 41, desc: "Un descomunal matón bloquea el callejón con los brazos cruzados: «Buscad otro camino».", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "Una vieja demacrada vende «pociones de amor» (que transforman en tritón/salamandra).", nv: 2, esMonstruo: false },
    { min: 44, max: 45, desc: "Una cuerda de tender rota cae sobre un personaje, enredándolo en la colada.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un cadáver en un rincón porta una nota: «Pagad con oro o con sangre. -B.B.».", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "1d4 personas persiguen a un cerdo que corre en estampida arrollando todo a su paso.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "3d4 Barones de Ribera (matones) ordenan tajantemente a los PJ que se larguen «o ateneos a las consecuencias».", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "1d4 niños intentan meter con cebos a un escarabajo pelotero gigante en una jaula grande.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un mago adusto y 1d4 aprendices escoltan a un plebeyo visiblemente aterrorizado.", nv: 3, esMonstruo: true },
    { min: 58, max: 59, desc: "Un mediano junto al brocal del pozo mira a los lados y descorcha un vial sospechoso.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Cánticos rituales oscuros resuenan desde el interior de un templo ruinoso.", nv: 2, esMonstruo: true },
    { min: 62, max: 63, desc: "Un joven noble con impecables «harapos de plebeyo» fracasa miserablemente al intentar pasar desapercibido.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "1d4 ratas rabiosas y chillonas saltan agresivas desde un montón de inmundicia.", nv: 1, esMonstruo: true },
    { min: 66, max: 67, desc: "Una estatua de Shune en un rincón apartado sostiene sus manos manchadas de sangre seca.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un hombre demacrado se acerca de lado y susurra: «Raíz de sangre, a 3 de plata».", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "Estibadores que cargan pesadas cajas resbalan; uno queda atrapado bajo el cargamento.", nv: 1, esMonstruo: false },
    { min: 72, max: 73, desc: "Un alegre vendedor ambulante ofrece brochetas de rata crujiente a 2 pc la pieza.", nv: 1, esMonstruo: false },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales tantea con cautela una puerta tapiada con ladrillos.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Lamentos y sollozos lejanos (un fantasma) provienen de un edificio clausurado con tablas.", nv: 4, esMonstruo: true },
    { min: 78, max: 79, desc: "El Loco Davord desafía a un PJ a una partida del juego «suelta la bota».", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Un grupo implacable de 2d4 cazarrecompensas (soldados) observan con frialdad a los PJ.", nv: 3, esMonstruo: true },
    { min: 82, max: 83, desc: "Un mago goblin apostado en un tejado ofrece un conjuro a cambio de un favor.", nv: 2, esMonstruo: true },
    { min: 84, max: 85, desc: "1d6 peones silenciosos son en realidad zombis que sirven a un hechicero encubierto.", nv: 2, esMonstruo: true },
    { min: 86, max: 87, desc: "El «inofensivo» tío Istvold sigue los pasos de los PJ riéndose entre dientes sin parar.", nv: 1, esMonstruo: false },
    { min: 88, max: 89, desc: "Un berserker enajenado sale a trompicones de un fumadero de narcóticos.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Una anciana encorvada ofrece a los PJ cobijo seguro en su casa lejos de los matones.", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "Una baldosa suelta del empedrado oculta una caja de hierro con 80 po y una poción.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "1d6 matones arrojan ladrillos rompiendo las cristaleras del escaparate de una tienda.", nv: 2, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante paga 5 po por cada ejemplar de escarabajo pelotero gigante vivo.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un pergamino sucio cae revoloteando al suelo ante los PJ; es un pergamino de conjuro.", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_swamp.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.swamp = {
  name: "Pantano / Ciénaga",
  entries: [
    { min: 1, max: 1, desc: "Un otyugh con 3 mutaciones emerge del fango cenagoso.", nv: 4, esMonstruo: true },
    { min: 2, max: 3, desc: "Thorash, el dragón del pantano (Caótico), acecha semisumergido en aguas poco profundas.", nv: 9, esMonstruo: true },
    { min: 4, max: 5, desc: "2d4 ranas gigantes saltan lanzando lengüetazos contra una nube de 3d6 murciélagos aguijón.", nv: 2, esMonstruo: true },
    { min: 6, max: 7, desc: "Grizella Musgoturbio, una bruja nocturna, se impulsa con una pértiga sobre una balsa podrida.", nv: 6, esMonstruo: true },
    { min: 8, max: 9, desc: "Un tiranosaurio rex no-muerto deambula pesadamente haciendo retumbar la ciénaga.", nv: 8, esMonstruo: true },
    { min: 10, max: 11, desc: "2d8 zombis perfectamente conservados se alzan saliendo de un tremedal de turba.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "El lodo denso cede bajo los pies transformándose en un traicionero campo de arenas movedizas (CD 12 DES o hundirse).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "2d6 hombres lagarto de piel moteada se aproximan a los PJ preparando una emboscada.", nv: 2, esMonstruo: true },
    { min: 16, max: 17, desc: "Un gnoll atado al tronco de un ancho sauce llorón suplica que lo liberen.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "Una densa nube de mosquitos zumba, acribilla a picotazos y nubla por completo la visión (CD 12 CON o desventaja en percepción).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "2d4 gnolls patrullan el pantano delimitando las fronteras de su territorio.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "2d6 simios inmundos de pelo largo arrojan piedras desde las ramas de los manglares.", nv: 2, esMonstruo: true },
    { min: 24, max: 25, desc: "2d6 campesinos armados con antorchas y horcas persiguen a la carrera a un hombre lobo.", nv: 3, esMonstruo: true },
    { min: 26, max: 27, desc: "1d4 gárgolas observan inmóviles desde lo alto de pilares agrietados e inclinados.", nv: 4, esMonstruo: true },
    { min: 28, max: 29, desc: "2d6 hombres lagarto saltan cubiertos de barro para asaltar a 2d4 elfos.", nv: 2, esMonstruo: true },
    { min: 30, max: 31, desc: "Un espantapájaros decapitado se alza sobre una roca sosteniendo un farol encendido.", nv: 1, esMonstruo: false },
    { min: 32, max: 33, desc: "Un basilisco sisea desde el interior de una cueva húmeda en oscuridad absoluta.", nv: 5, esMonstruo: true },
    { min: 34, max: 35, desc: "1d8 sanguijuelas gigantes caen sobre los PJ desde las ramas empapadas de los árboles.", nv: 1, esMonstruo: true },
    { min: 36, max: 37, desc: "Crecen densas matas de ortigas urticantes y espinos cargados de toxinas (1d4 daño y CD 12 CON o envenenado).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un enjambre de serpientes rápidas repta en masa deslizándose sobre el lodo.", nv: 2, esMonstruo: true },
    { min: 40, max: 41, desc: "2d6 ratas gigantes observan con ojos brillantes desde el interior de troncos podridos.", nv: 1, esMonstruo: true },
    { min: 42, max: 43, desc: "Sir Augrim, un caballero con armadura, yace atrapado hasta el cuello en arenas movedizas.", nv: 3, esMonstruo: true },
    { min: 44, max: 45, desc: "Una neblina amarillenta de gas venenoso de pantano flota sobre la ciénaga (CD 12 CON o 1d6 daño tóxico).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "3d6 hombres-hongo cuidan árboles repletos de hongos cubiertos de rocío.", nv: 2, esMonstruo: true },
    { min: 48, max: 49, desc: "La naga Coagulus Mortus reposa enroscada sobre una pila de huesos putrefactos.", nv: 6, esMonstruo: true },
    { min: 50, max: 53, desc: "1d4 ogros avanzan pesadamente discutiendo a voces sobre a qué sabe la carne de elfo.", nv: 4, esMonstruo: true },
    { min: 54, max: 55, desc: "3d6 manchas de aceite ardiendo flotan y van a la deriva sobre la superficie del agua (1d6 fuego por contacto).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "1d6 arañas gigantes se deslizan ágiles entre las copas densas de los mangles.", nv: 2, esMonstruo: true },
    { min: 58, max: 59, desc: "2d4 cocatrices empollan sus huevos dentro de una gruta cubierta de lianas.", nv: 3, esMonstruo: true },
    { min: 60, max: 61, desc: "Un torreón derruido e inclinado alberga a un fantasma que murmura para sí.", nv: 4, esMonstruo: true },
    { min: 62, max: 63, desc: "Blugbort, un mago goblin (Neutral), busca babosas y setas venenosas.", nv: 2, esMonstruo: true },
    { min: 64, max: 65, desc: "1d4 necrófagos (ghasts) lideran a una horda de 2d6 zombis y 2d8 esqueletos.", nv: 3, esMonstruo: true },
    { min: 66, max: 67, desc: "Una bandada de cuervos revolotea en círculos sobre un pozo de piedra ancestral y derruido.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "3d10 goblins arrastran a un obeso gigante de las colinas sobre un trineo improvisado.", nv: 6, esMonstruo: true },
    { min: 70, max: 71, desc: "3d6 elfos observan ocultos a los PJ decidiendo si lanzar o no un ataque.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "Un grick arrastra a un caballo con montura que patalea hacia el fondo de una poza negra.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales examina con palos un menhir medio hundido en el fango.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Una serpiente gigante sale disparada hacia arriba desde un agujero en el barro.", nv: 4, esMonstruo: true },
    { min: 78, max: 79, desc: "Un tumulario (wight) de ojos llameantes pasa al galope sobre una pesadilla que deja llamas tras de sí.", nv: 6, esMonstruo: true },
    { min: 80, max: 81, desc: "Lo que parece un charco aceitoso resulta ser en realidad un cieno gris (gray ooze).", nv: 3, esMonstruo: true },
    { min: 82, max: 83, desc: "La vieja Tripaverde, una rana gigante inteligente, ayuda a los PJ en su siguiente tarea.", nv: 2, esMonstruo: true },
    { min: 84, max: 85, desc: "Un caudillo orco lidera a 3d12 orcos del clan Colmillo de Serpiente en una incursión salvaje.", nv: 4, esMonstruo: true },
    { min: 86, max: 87, desc: "Gorgoth, un clérigo de Shune (Caótico), susurra plegarias a un obelisco negro.", nv: 4, esMonstruo: true },
    { min: 88, max: 89, desc: "1d4 hipopótamos enfangados embisten y cornean a 1d6 cocodrilos siseantes.", nv: 4, esMonstruo: true },
    { min: 90, max: 91, desc: "Los kóbolds del Caracol Amarillo (2d20) viven pacíficamente en chozas sobre los árboles.", nv: 1, esMonstruo: true },
    { min: 92, max: 93, desc: "El alquitrán de pantano burbujeante posee propiedades curativas y neutraliza toxinas (cura 2d6 PG y venenos).", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "1d4 montículos tambaleantes (shambling mounds) chapotean abriéndose paso por el cieno.", nv: 5, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante viaja montado a lomos de un cocodrilo albino.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "El Caminante del Pantano (un gorila sabio) ofrece un objeto mágico aleatorio.", nv: 4, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_tavern.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.tavern = {
  name: "Taberna / Posada",
  entries: [
    { min: 1, max: 1, desc: "Un hombre embozado en una capa (un vampiro) en la puerta pide que le inviten a entrar.", nv: 9, esMonstruo: true },
    { min: 2, max: 3, desc: "2d6 Asesinos del Soberano irrumpen en la sala examinando a la clientela con la mirada.", nv: 4, esMonstruo: true },
    { min: 4, max: 5, desc: "3d6 clientes que observaban una tensa partida de dados estallan en una violenta pelea.", nv: 1, esMonstruo: true },
    { min: 6, max: 7, desc: "2d6 marineros groseros entran en tropel y acaparan por completo la barra.", nv: 1, esMonstruo: true },
    { min: 8, max: 9, desc: "Un cliente con cara de pocos amigos paga una ronda para todos en el local excepto para los PJ.", nv: 1, esMonstruo: false },
    { min: 10, max: 11, desc: "Por confusión, anuncian a un PJ como el próximo combatiente en el foso de peleas clandestino.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Un mediano borracho se balancea colgado de una lámpara de araña vieja que cruje peligrosamente.", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Una mujer se acerca decidida a la mesa y arroja su bebida a la cara de un PJ.", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "El plato de cobra poco hecha servido a un cliente cobra vida y se alza siseando.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "Un charco resbaladizo de cerveza espumosa se extiende cubriendo el suelo de madera (CD 12 DES o caer derribado).", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Un semiorco ruge enfurecido y levanta una pesada mesa de roble sobre su cabeza.", nv: 2, esMonstruo: true },
    { min: 22, max: 23, desc: "Un alarido largo y aterrado resuena desde el interior de la cocina.", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Un grupo de aventureros rivales advierte con chulería a los PJ que esta es «su taberna».", nv: 2, esMonstruo: true },
    { min: 26, max: 27, desc: "Un hombre esbelto susurra al oído: «¿Buscáis veneno? ¡El mejor que podáis comprar!».", nv: 1, esMonstruo: false },
    { min: 28, max: 29, desc: "Un elfo sonriente desafía a un PJ a los dados; los dados están descaradamente cargados.", nv: 1, esMonstruo: false },
    { min: 30, max: 31, desc: "Un mago adusto estudia un tomo en un rincón y fulmina con la mirada a los ruidosos.", nv: 3, esMonstruo: true },
    { min: 32, max: 33, desc: "Un semiorco y un mediano echan un pulso sobre la mesa; el mediano va ganando con holgura.", nv: 1, esMonstruo: false },
    { min: 34, max: 35, desc: "Dos bardos rivales inician un estruendoso y competitivo duelo de canciones a gritos.", nv: 1, esMonstruo: false },
    { min: 36, max: 37, desc: "Un marinero lanza a otro por los aires estrellándolo contra la mesa de los PJ, volcando las jarras.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Cinco enanos alegres cantan salomas marineras y se dan cabezazos amistosos.", nv: 1, esMonstruo: true },
    { min: 40, max: 41, desc: "1d6 clientes (sectarios del caos de incógnito) se escabullen hacia la trastienda privada.", nv: 2, esMonstruo: true },
    { min: 42, max: 43, desc: "Un cocodrilo enfurecido sale a la carrera desde las cocinas derribando sillas.", nv: 3, esMonstruo: true },
    { min: 44, max: 45, desc: "Un cliente encapuchado estrella un frasco de aceite ardiendo en el suelo y sale huyendo (1d6 fuego).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un enano con zuecos de madera desafía a un PJ a una competición de baile folclórico.", nv: 1, esMonstruo: false },
    { min: 48, max: 49, desc: "Atticus Gnarl, un mago mediano, clava una mirada fija y sin parpadear sobre un PJ.", nv: 4, esMonstruo: true },
    { min: 50, max: 53, desc: "Aventureros rivales desafían a los personajes a un concurso de beber cerveza sin caerse.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Un mediano intenta atar sigilosamente los cordones de las botas de los PJ por debajo de la mesa.", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "Un hombre agarra por la pechera a un PJ y grita: «¡Tú sabes perfectamente lo que hiciste!».", nv: 1, esMonstruo: false },
    { min: 58, max: 59, desc: "Lanzadores de dardos completamente borrachos apenas son capaces de ver dónde está la diana (1d4 daño por fallo).", nv: 1, esMonstruo: false },
    { min: 60, max: 61, desc: "Una mujer roba con pasmosa soltura la bolsa de monedas del cinto de un cliente despistado.", nv: 1, esMonstruo: true },
    { min: 62, max: 63, desc: "Aventureros rivales murmuran inclinados sobre un libro antiguo, señalando pasajes crípticos.", nv: 3, esMonstruo: true },
    { min: 64, max: 65, desc: "2d6 guardias de la ciudad entran con paso cansado buscando sofocar sus penas en alcohol.", nv: 2, esMonstruo: true },
    { min: 66, max: 67, desc: "El cuadro de un paisaje colgado en la pared cambia de detalles cuando nadie lo mira directamente.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Un semiorco se bebe una jarra entera de un trago y acto seguido noquea al camarero de un puñetazo.", nv: 2, esMonstruo: true },
    { min: 70, max: 71, desc: "Una mujer con armadura de cuero azul marino bebe té en una esquina mientras analiza la sala.", nv: 3, esMonstruo: true },
    { min: 72, max: 73, desc: "Una figura embozada salta sobre el mostrador de la barra directo a por la caja de recaudación.", nv: 2, esMonstruo: true },
    { min: 74, max: 75, desc: "Aventureros rivales intentan endosar a los PJ un mapa de cuero que nadie es capaz de descifrar (10 po).", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "Todos los clientes del local evitan pisar una trampilla de piedra fuertemente encadenada al suelo.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Cuatro plebeyos que conspiraban en susurros callan en seco y miran con hostilidad al pasar.", nv: 1, esMonstruo: false },
    { min: 80, max: 81, desc: "Una mujer agarra una silla de madera y la rompe en la cabeza de un hombre en la mesa de al lado.", nv: 1, esMonstruo: false },
    { min: 82, max: 83, desc: "Un guardia municipal comprensivo y amigable comparte un rumor confidencial de la guardia.", nv: 2, esMonstruo: true },
    { min: 84, max: 85, desc: "Violet Dorn, una barda de fama legendaria en todo el reino, entra por las puertas del local.", nv: 4, esMonstruo: true },
    { min: 86, max: 87, desc: "Un sacerdote lloroso y tambaleante se acerca y se desploma desconsolado sobre un PJ.", nv: 1, esMonstruo: false },
    { min: 88, max: 89, desc: "Al resonar el silbato de alarma de la guardia en la calle, 1d6 clientes salen huyendo por la puerta trasera.", nv: 1, esMonstruo: false },
    { min: 90, max: 91, desc: "Un cliente adinerado y bien vestido invita a los PJ a pasar a un reservado privado.", nv: 2, esMonstruo: true },
    { min: 92, max: 93, desc: "Frotar la nariz de la cabeza de lobo de latón atrae la buena fortuna (5% de ganar +1 ficha de suerte).", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "Un cliente desliza discretamente una nota a un PJ: «Estáis rodeados de espías».", nv: 1, esMonstruo: false },
    { min: 96, max: 97, desc: "El Mercader Errante tiene a la venta un frasco del legendario whisky Van Dinkle (50 po).", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un dado reposa en un rincón polvoriento; es el mítico Cubo de la Perfección de Brak (objeto mágico).", nv: 1, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_temple_district.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.temple_district = {
  name: "Distrito del Templo",
  entries: [
    { min: 1, max: 1, desc: "2d6 sectarios del caos van a realizar un sacrificio vivo; la víctima es un PNJ querido por el grupo.", nv: 2, esMonstruo: true },
    { min: 2, max: 3, desc: "Un exorcismo rutinario sale mal y expulsa a una nada rutinaria erinia (erinyes).", nv: 7, esMonstruo: true },
    { min: 4, max: 5, desc: "Un anciano vacía un puñado de gemas auténticas dentro del cepillo de limosnas de un templo.", nv: 1, esMonstruo: false },
    { min: 6, max: 7, desc: "Una estampida de devotos peregrinos corre enfervorecida avenida abajo.", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "Una multitud se agolpa intentando tocar una sagrada reliquia que desfila sobre una peana.", nv: 1, esMonstruo: false },
    { min: 10, max: 11, desc: "Un sacerdote grita desesperado «¡Todo es una mentira!» y se transforma en una naga ósea.", nv: 5, esMonstruo: true },
    { min: 12, max: 13, desc: "El aljibe de un tejado cede por el peso; una avalancha de agua y sillares de piedra cae a la calle (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Tres acólitos increpan a voces a los PJ acusándolos de haber pisoteado una tumba santa.", nv: 1, esMonstruo: true },
    { min: 16, max: 17, desc: "Tentáculos flagelantes brotan desgarrando las mangas de la túnica de un sectario del caos.", nv: 3, esMonstruo: true },
    { min: 18, max: 19, desc: "Fanáticos del Festival de la Sangría fustigan con látigos a los transeúntes que pasan cerca.", nv: 1, esMonstruo: false },
    { min: 20, max: 21, desc: "Penitentes encadenados portan en andas un lujoso palanquín que lleva al sumo sacerdote.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "Una figura encapuchada deja una cesta a las puertas de una capilla; dentro yace un bebé recién nacido.", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "2d4 peregrinos con los ojos vendados se sientan en círculo cerrando el paso en la calzada.", nv: 1, esMonstruo: false },
    { min: 26, max: 27, desc: "Dos mendigos apostados en las escalinatas ocultan dagas onduladas de sacrificio bajo sus mangas.", nv: 2, esMonstruo: true },
    { min: 28, max: 29, desc: "Un hombre cae de rodillas en éxtasis religioso y estalla transformándose en un elemental de fuego.", nv: 5, esMonstruo: true },
    { min: 30, max: 31, desc: "Sombras y movimientos sospechosos se mueven dentro de las ruinas tapiadas de una iglesia.", nv: 2, esMonstruo: true },
    { min: 32, max: 33, desc: "Una sacerdotisa sale furiosa de un templo arrojando su símbolo sagrado contra el suelo.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "Sectarios del caos susurran oraciones impías congregados ante un santuario en un callejón.", nv: 2, esMonstruo: true },
    { min: 36, max: 37, desc: "Una trampilla oculta en un callejón se abre hacia la cripta subterránea de un templo.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "1d6 acólitos siniestros acechan en las sombras buscando a un mendigo solitario al que secuestrar.", nv: 1, esMonstruo: true },
    { min: 40, max: 41, desc: "Un hombre con la boca manchada de rojo afirma que en la iglesia nueva regalan raíz de sangre.", nv: 1, esMonstruo: false },
    { min: 42, max: 43, desc: "1d4 caballeros celebran un juicio sumario e inquisición pública a una supuesta bruja.", nv: 3, esMonstruo: true },
    { min: 44, max: 45, desc: "Se desata el Encierro del Toro Sagrado provocando gritos, carreras y heridos por cornadas.", nv: 3, esMonstruo: true },
    { min: 46, max: 47, desc: "Cuatro matones enmascarados irrumpen violentamente para asaltar un opulento cortejo fúnebre.", nv: 2, esMonstruo: true },
    { min: 48, max: 49, desc: "Un hombre se pone en pie en medio de una boda solemne y grita a todo pulmón: «¡Me opongo!».", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "Un mendigo cubierto de llagas deambula por el atrio preso de un delirio febril.", nv: 1, esMonstruo: false },
    { min: 54, max: 55, desc: "Místicos en trance queman incienso con potentes propiedades alucinógenas en la calle (CD 12 CON o aturdido).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "2d4 bandidos disfrazados de monjes recolectan limosnas supuestamente destinadas a los pobres.", nv: 1, esMonstruo: true },
    { min: 58, max: 59, desc: "Un sectario oculto en las sombras dispara un dardo envenenado con cerbatana contra un PJ (CD 12 CON o 1d6 daño).", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Un predicador incendiario arenga a una multitud que entra en un fervor cada vez más violento.", nv: 1, esMonstruo: false },
    { min: 62, max: 63, desc: "Los ojos de una plebeya se tornan blancos y pronuncia con voz de ultratumba un oscuro presagio.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "Sectarios libertinos de Gede reparten interminables copas de vino dulce a todos los viandantes.", nv: 1, esMonstruo: false },
    { min: 66, max: 67, desc: "Un clérigo con una sonrisa forzada ofrece 5 po en mano a cada nuevo converso que acepte su fe.", nv: 2, esMonstruo: true },
    { min: 68, max: 69, desc: "2d6 acólitos se lían a golpes por una discrepancia teológica al interpretar un texto sagrado.", nv: 1, esMonstruo: true },
    { min: 70, max: 71, desc: "El Desfile de los Nueve atrae a miles de devotos y a decenas de carteristas oportunistas.", nv: 1, esMonstruo: false },
    { min: 72, max: 73, desc: "Un monje se prende fuego a sí mismo con devoción y camina en silencio hacia el altar mayor.", nv: 1, esMonstruo: false },
    { min: 74, max: 75, desc: "Un grupo de aventureros rivales sale por las puertas de la iglesia luciendo su óleo de recién bautizados.", nv: 2, esMonstruo: true },
    { min: 76, max: 77, desc: "La guardia municipal saca arrastrando a la fuerza del templo al Barón Hallin, que forcejea a gritos.", nv: 2, esMonstruo: true },
    { min: 78, max: 79, desc: "Místicos callejeros alzan cobras vivas para que los fieles las besen (10% de probabilidad de mordedura).", nv: 1, esMonstruo: true },
    { min: 80, max: 81, desc: "Un sacerdote asperja agua bendita con un hisopo; el agua quema y abrasa a los seres Caóticos (1d6 daño).", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Un templario disfrazado de siervo atiende en secreto a un leproso desamparado en el suelo.", nv: 3, esMonstruo: true },
    { min: 84, max: 85, desc: "Una mujer chillando «¡Todo será disuelto!» arroja un frasco de ácido concentrado a la multitud (1d6 daño).", nv: 1, esMonstruo: false },
    { min: 86, max: 87, desc: "1d6 guardias intentan reducir por la fuerza a un fanático presa de un violento éxtasis místico.", nv: 2, esMonstruo: true },
    { min: 88, max: 89, desc: "Un ángel domini se materializa en un cegador estallido de luz y señala directamente a un PJ.", nv: 12, esMonstruo: true },
    { min: 90, max: 91, desc: "Un templo consagrado a Santa Terragnis ofrece santuario sagrado a todo aquel que acuda desarmado.", nv: 1, esMonstruo: false },
    { min: 92, max: 93, desc: "Las aguas de la Fuente de Madeera tienen un 5% de probabilidad de purificar una maldición.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "El Soberano hace su entrada solemne al templo escoltado por una guardia de 3d6 caballeros.", nv: 5, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante vende réplicas idénticas de vestiduras y hábitos sacerdotales auténticos (10 po).", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un sumo sacerdote elige a uno de los PJ para otorgarle una bendición divina excepcional.", nv: 5, esMonstruo: true }
  ]
};

/* Fuente: encounters/enc_tomb.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.tomb = {
  name: "Tumbas / Criptas",
  entries: [
    { min: 1, max: 1, desc: "Un liche distraído que refunfuña entre dientes se teletransporta dentro de la sala.", nv: 12, esMonstruo: true },
    { min: 2, max: 3, desc: "2d4 almas en pena (wraiths) emergen atravesando paredes, suelos y techos.", nv: 8, esMonstruo: true },
    { min: 4, max: 5, desc: "2d6 necrófagos (ghasts) lanzan zarpazos y forcejean dentro de un enjambre de murciélagos.", nv: 3, esMonstruo: true },
    { min: 6, max: 7, desc: "Muggins Botellaverde, un mediano saqueador de tumbas, llegó aquí primero.", nv: 2, esMonstruo: true },
    { min: 8, max: 9, desc: "2d4 ratas hombre (wererats) en forma humana hurgan entre montones de escombros.", nv: 3, esMonstruo: true },
    { min: 10, max: 11, desc: "Un enjambre de escarabajos brota en ebullición de las grietas del suelo y las paredes.", nv: 2, esMonstruo: true },
    { min: 12, max: 13, desc: "Energía necrótica enfría peligrosamente una zona a distancia cercana (1d6 daño necrótico).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "1d6 flores de podredumbre malolientes brotan quebrando la roca debilitada (CD 12 CON o envenenado).", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "1d4 arañas descienden descolgándose sobre la nuca de los personajes.", nv: 2, esMonstruo: true },
    { min: 18, max: 19, desc: "La Esfera de Aniquilación planea en silencio a la deriva, moviéndose al azar.", nv: 10, esMonstruo: false },
    { min: 20, max: 21, desc: "Un tumulario (wight) lidera una patrulla tambaleante de 3d12 esqueletos.", nv: 3, esMonstruo: true },
    { min: 22, max: 23, desc: "Una pila de huesos finos y alargados se ensambla formando una naga ósea.", nv: 5, esMonstruo: true },
    { min: 24, max: 25, desc: "3d6 campesinos desorientados acaban de despertar de un éxtasis mágico ancestral.", nv: 1, esMonstruo: true },
    { min: 26, max: 27, desc: "1d4 momias caminan pesadamente gimiendo en idioma común antiguo.", nv: 6, esMonstruo: true },
    { min: 28, max: 29, desc: "Un cubo gelatinoso contiene en su interior a 2d6 esqueletos que intentan escapar.", nv: 3, esMonstruo: true },
    { min: 30, max: 31, desc: "Un fantasma enfurecido está obligado a permanecer a distancia cercana de sus propios restos.", nv: 4, esMonstruo: true },
    { min: 32, max: 33, desc: "2d4 sombras intentan acercarse en sigilo por la espalda de los PJ.", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "Una partida de 2d4 orcos supersticiosos y asustadizos busca botín con nerviosismo.", nv: 2, esMonstruo: true },
    { min: 36, max: 37, desc: "Un viento aullador de espíritus arrebata todas las fichas de suerte no utilizadas del grupo.", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un oni exige con violencia saber dónde está escondida su espada robada.", nv: 6, esMonstruo: true },
    { min: 40, max: 41, desc: "1d6 armaduras animadas oxidadas persiguen a 1d4 monstruos del óxido.", nv: 3, esMonstruo: true },
    { min: 42, max: 43, desc: "El alma del elfo Hirael está atrapada en el interior de un cuadro mohoso.", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Una zona de oscuridad tenebrosa de 6 metros de radio extingue todas las fuentes de luz.", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Un alma en pena (wraith) y 1d4 sombras levitan sobre una oscura fisura en el suelo.", nv: 8, esMonstruo: true },
    { min: 48, max: 49, desc: "2d6 ladrones saltan de improviso exigiendo que los PJ les entreguen todo su saqueo.", nv: 2, esMonstruo: true },
    { min: 50, max: 53, desc: "3d8 zombis se pelean entre sí por devorar a un bandido acorralado.", nv: 2, esMonstruo: true },
    { min: 54, max: 55, desc: "Un grabado de un chacal drena 1d6 PG por asalto a todos a distancia cercana (near).", nv: 1, esMonstruo: false },
    { min: 56, max: 57, desc: "2d4 gules rompen y desgarran las paredes donde fueron sepultados en vida.", nv: 2, esMonstruo: true },
    { min: 58, max: 59, desc: "Un trepador cavernícola (cave creeper) devora los restos de un zombi recién destruido.", nv: 3, esMonstruo: true },
    { min: 60, max: 61, desc: "2d6 zombis apilan sin descanso los mismos ladrillos formando nuevos túmulos.", nv: 2, esMonstruo: true },
    { min: 62, max: 63, desc: "Un vampiro ofrece paso seguro y protección a cambio de sorbos de sangre fresca.", nv: 9, esMonstruo: true },
    { min: 64, max: 65, desc: "2d4 gárgolas con rostro demoníaco aletean por los pasillos aullando con estruendo.", nv: 4, esMonstruo: true },
    { min: 66, max: 67, desc: "Una calavera rueda por el suelo y se detiene para hacer comentarios o críticas mordaces.", nv: 1, esMonstruo: false },
    { min: 68, max: 69, desc: "Cieno negro gotea viscoso desde finas fisuras del techo de piedra (1d6 ácido).", nv: 1, esMonstruo: false },
    { min: 70, max: 71, desc: "2d6 sectarios avanzan con sigilo buscando reliquias impías que reclamar.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "1d4 almas en pena (wraiths) dan caza al fantasma aterrorizado de un campesino.", nv: 8, esMonstruo: true },
    { min: 74, max: 75, desc: "1d6 aventureros rivales huyen despavoridos de sus propias sombras hostiles.", nv: 3, esMonstruo: true },
    { min: 76, max: 77, desc: "Una nube de sangre hierve en el aire mientras susurra oscuros secretos al oído.", nv: 1, esMonstruo: false },
    { min: 78, max: 79, desc: "Un gul babeante yace clavado a la pared por cuatro estacas de hierro macizo.", nv: 2, esMonstruo: true },
    { min: 80, max: 81, desc: "3d6 zombis bamboleantes avanzan en tropel formando una horda sin mente.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Un serafín otorga una bendición celestial sobre los restos mortales de un caballero santo.", nv: 3, esMonstruo: true },
    { min: 84, max: 85, desc: "2d4 acólitos (Caóticos) entonan cánticos escoltando a un salteador (reaver) ungido en sangre.", nv: 3, esMonstruo: true },
    { min: 86, max: 87, desc: "Una urna funeraria con la inscripción «Bimbles» contiene una cocatriz zombi azul.", nv: 3, esMonstruo: true },
    { min: 88, max: 89, desc: "Un enjambre de ciempiés cubre y devora a un trepador cavernícola que se retuerce.", nv: 2, esMonstruo: true },
    { min: 90, max: 91, desc: "Se aproxima un tumulario radiante (Legal) animado por energía sagrada divina.", nv: 4, esMonstruo: true },
    { min: 92, max: 93, desc: "Repica una campana suave; quien escuche durante 2 asaltos sana 2d6 PG.", nv: 1, esMonstruo: false },
    { min: 94, max: 95, desc: "El archimago humano Rantarim (Neutral) busca afanosamente un antiguo tomo.", nv: 8, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante asoma la cabeza jadeando desde el interior de un ataúd.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un escondite secreto guarda 1d4 objetos de la tabla de tesoro de nivel 7–9.", nv: 7, esMonstruo: false }
  ]
};

/* Fuente: encounters/enc_university_district.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTER_TABLES.university_district = {
  name: "Distrito Universitario",
  entries: [
    { min: 1, max: 1, desc: "Un aprendiz de mago borracho invoca por error a una marilith enfurecida.", nv: 11, esMonstruo: true },
    { min: 2, max: 3, desc: "Tentáculos prensiles brotan a través de una reja de alcantarilla intentando agarrar viandantes.", nv: 4, esMonstruo: true },
    { min: 4, max: 5, desc: "La enconada disputa entre dos profesores estalla en un duelo abierto a conjuros.", nv: 5, esMonstruo: true },
    { min: 6, max: 7, desc: "Una mujer ofrece dinero con disimulo por «cadáveres recién fallecidos».", nv: 1, esMonstruo: false },
    { min: 8, max: 9, desc: "Un sicario salta al estrado donde un filósofo da una conferencia para apuñalarlo.", nv: 3, esMonstruo: true },
    { min: 10, max: 11, desc: "Un adolescente que carga un grimorio sale huyendo a toda prisa de una librería.", nv: 1, esMonstruo: false },
    { min: 12, max: 13, desc: "Del cielo llueve ácido amarillento; un conjuro ritual ha salido rematadamente mal (1d6 ácido).", nv: 1, esMonstruo: false },
    { min: 14, max: 15, desc: "Un viejo chatarrero vende bengalas y bombas de confeti de un solo uso (5 pc c/u).", nv: 1, esMonstruo: false },
    { min: 16, max: 17, desc: "Una nube de 2d4 murciélagos aguijón (stingbats) púrpuras brota de una chimenea.", nv: 1, esMonstruo: true },
    { min: 18, max: 19, desc: "Guardias de la ciudad acordonan presurosos un amplio círculo de fuego azul.", nv: 2, esMonstruo: true },
    { min: 20, max: 21, desc: "Un tipo sospechoso vende «pociones baratas» (todas son mezclas de 2 pociones al azar por 10 po).", nv: 1, esMonstruo: false },
    { min: 22, max: 23, desc: "Un profesor miope insiste con firmeza en que un PJ tiene una tesis atrasada sin entregar.", nv: 1, esMonstruo: false },
    { min: 24, max: 25, desc: "Cuatro estudiantes engreídos arrojan monedas de cobre a la cabeza de la gente.", nv: 1, esMonstruo: false },
    { min: 26, max: 27, desc: "Los clientes huyen aterrorizados ante un resplandor rojo dentro de la taberna El Caracol Volador.", nv: 1, esMonstruo: false },
    { min: 28, max: 29, desc: "Aullidos inhumanos y sobrecogedores resuenan desde un bloque de apartamentos cercano.", nv: 2, esMonstruo: true },
    { min: 30, max: 31, desc: "La estatua de wyvern del campus, el Viejo Rolf, cobra vida en un frenesí violento.", nv: 6, esMonstruo: true },
    { min: 32, max: 33, desc: "Un joven noble con la cara encendida exige a un PJ que le «muestre el debido respeto».", nv: 2, esMonstruo: true },
    { min: 34, max: 35, desc: "El campeón de Magos y Ladrones de la academia desafía a un PJ a una partida pública.", nv: 1, esMonstruo: false },
    { min: 36, max: 37, desc: "Cenizas al rojo vivo caen como lluvia desde el ventanal reventado de una torre (1d4 fuego).", nv: 1, esMonstruo: false },
    { min: 38, max: 39, desc: "Un mago con gafas empieza a tomar medidas y a dar golpecitos a un PJ con una vara.", nv: 3, esMonstruo: true },
    { min: 40, max: 41, desc: "Aparece un caldero mágico que vomita sin parar 1d6 ratas gigantes.", nv: 1, esMonstruo: true },
    { min: 42, max: 43, desc: "Un hombre pálido cruza la mirada con un PJ y gesticula en silencio: «¡Ayúdame!».", nv: 1, esMonstruo: false },
    { min: 44, max: 45, desc: "Un PJ pisa una runa de broma pesada que deja sus botas pegadas al pavimento (CD 12 FUE para soltarse).", nv: 1, esMonstruo: false },
    { min: 46, max: 47, desc: "Dos armaduras animadas libran un duelo devastador destrozando la calle a golpes.", nv: 3, esMonstruo: true },
    { min: 48, max: 49, desc: "Un estudiante tímido e interrogado por un guardia señala nervioso hacia los PJ.", nv: 1, esMonstruo: false },
    { min: 50, max: 53, desc: "2d6 kóbolds salen en masa de las cloacas para arrebatar bolsos y mochilas.", nv: 1, esMonstruo: true },
    { min: 54, max: 55, desc: "Un mago practicante lanza accidentalmente un conjuro de hechizar persona sobre un PJ (CD 12 SAB).", nv: 2, esMonstruo: true },
    { min: 56, max: 57, desc: "1d4 gárgolas se descuelgan desde una fachada para atrapar a un PJ.", nv: 4, esMonstruo: true },
    { min: 58, max: 59, desc: "Cuatro matones acechan en los callejones buscando a una víctima fácil a la que asaltar.", nv: 2, esMonstruo: true },
    { min: 60, max: 61, desc: "Una bruja lee la fortuna y el futuro en un puesto improvisado por 1 po.", nv: 3, esMonstruo: true },
    { min: 62, max: 63, desc: "Un joven estudiante ruega a uno de los PJ que le acepte como aprendiz.", nv: 1, esMonstruo: false },
    { min: 64, max: 65, desc: "Un hechicero (un oni disfrazado) bebe tranquilamente en una esquina mientras vigila al grupo.", nv: 6, esMonstruo: true },
    { min: 66, max: 67, desc: "Una estatua animada de un búho sigue sigilosamente los pasos de los aventureros.", nv: 2, esMonstruo: true },
    { min: 68, max: 69, desc: "Un mago intenta arrastrar a un PJ a un callejón para extraerle una muestra de sangre.", nv: 4, esMonstruo: true },
    { min: 70, max: 71, desc: "Estallan ruidos de cristales rotos, rugidos y estrépito dentro de una biblioteca cercana.", nv: 2, esMonstruo: true },
    { min: 72, max: 73, desc: "Un grimorio parlante sale volando por una ventana intentando escapar de su dueño.", nv: 2, esMonstruo: false },
    { min: 74, max: 75, desc: "Un profesor de magia invoca a un demonio (vrock) pero pierde por completo el control.", nv: 8, esMonstruo: true },
    { min: 76, max: 77, desc: "Tres cobradores de deudas (matones) acorralan y golpean a un estudiante indefenso.", nv: 2, esMonstruo: true },
    { min: 78, max: 79, desc: "Una cocatriz doméstica se escapa y causa el caos dentro de una taberna abarrotada.", nv: 3, esMonstruo: true },
    { min: 80, max: 81, desc: "Tres aprendices arrogantes buscan problemas y provocan una pelea contra los PJ.", nv: 2, esMonstruo: true },
    { min: 82, max: 83, desc: "Un artista callejero detiene a un PJ y le suplica que pose para hacerle un retrato al carboncillo.", nv: 1, esMonstruo: false },
    { min: 84, max: 85, desc: "Un bibliotecario visiblemente aterrorizado entrega un libro extraño a un PJ y sale huyendo.", nv: 1, esMonstruo: false },
    { min: 86, max: 87, desc: "El profesor Krall enloquece y lidera una horda de 2d6 zombis directamente hacia las calles.", nv: 4, esMonstruo: true },
    { min: 88, max: 89, desc: "Estudiantes de una universidad rival vandalizan una estatua venerada del campus.", nv: 1, esMonstruo: false },
    { min: 90, max: 91, desc: "Un erudito ofrece un rubí auténtico como premio a quien resuelva su acertijo (valor 50 po).", nv: 2, esMonstruo: false },
    { min: 92, max: 93, desc: "Un mago torpe rompe un frasco de cristal que contenía a una naga en miniatura.", nv: 3, esMonstruo: true },
    { min: 94, max: 95, desc: "Los PJ tropiezan de lleno con un ritual ocultista oficiado por 5 aprendices encapuchados.", nv: 3, esMonstruo: true },
    { min: 96, max: 97, desc: "El Mercader Errante vende reactivos alquímicos cáusticos y altamente corrosivos.", nv: 15, esMonstruo: true },
    { min: 98, max: 99, isDouble: true, maxRoll: 97 },
    { min: 100, max: 100, desc: "Un respetado archimago confía la custodia de un objeto mágico aleatorio a los personajes.", nv: 9, esMonstruo: true }
  ]
};

/* Fuente: monsters.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MONSTERS = [
  {
    name: "ABOLETE (ABOLETH)",
    desc: "Enorme pez gato antediluviano cubierto de mucosidad y tentáculos. Odian a todos los seres inteligentes.",
    ca: 16, pg: 39, mv: "cercano (nadar)", nv: 8, al: "C",
    f: "+4", d: "-1", c: "+3", i: "+4", s: "+2", ca_mod: "+2",
    atq: "2 tentáculos (cercano) +5 (1d8 + maldición) o 1 cola +5 (3d6)",
    traits: [
      { name: "Maldición", text: "CD 15 CON o el objetivo sufre una maldición mágica, convirtiéndose en un profundo a lo largo de 2d10 días." },
      { name: "Esclavizar", text: "En lugar de atacar, una criatura a distancia lejana CD 15 SAB o el abolete la controla durante 1d4 asaltos." },
      { name: "Telepático", text: "Lee los pensamientos de todas las criaturas a distancia lejana." }
    ]
  },
  {
    name: "ACÓLITO (ACOLYTE)",
    desc: "Un aprendiz religioso que conoce ritos y rituales básicos.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+1", d: "-1", c: "+0", i: "-1", s: "+2", ca_mod: "+0",
    atq: "1 maza +1 (1d6) o 1 conjuro +2",
    traits: [
      { name: "Toque Sanador (Conjuro SAB)", text: "CD 11. Cura a una criatura a distancia cercana (close) 1d4 PG." }
    ]
  },
  {
    name: "ARCÁNGEL (ARCHANGEL)",
    desc: "La esfera suprema de los ángeles. Un ser radiante con una corona de fuego, alas níveas, armadura dorada y un espadón llameante.",
    ca: 18, pg: 76, mv: "doble cercano (volar)", nv: 16, al: "L",
    f: "+5", d: "+2", c: "+4", i: "+4", s: "+5", ca_mod: "+5",
    atq: "3 espadones llameantes +10 (2d12)",
    traits: [
      { name: "Armadura", text: "Placas +3." },
      { name: "Mando", text: "CD 18 CAR para resistir una orden de un arcángel." },
      { name: "Corona de Fuego", text: "Los conjuros hostiles dirigidos al arcángel son extremos (CD 18) de lanzar." }
    ]
  },
  {
    name: "ÁNGEL PRINCIPI (ANGEL, PRINCIPI)",
    desc: "Humanos serenos esculpidos en alabastro con orbes dorados por ojos. Gobiernan sobre los domini.",
    ca: 16, pg: 53, mv: "doble cercano (volar)", nv: 11, al: "L",
    f: "+4", d: "+2", c: "+4", i: "+4", s: "+4", ca_mod: "+4",
    atq: "3 espadas bastardas de plata +9 (1d10)",
    traits: [
      { name: "Armadura", text: "Placas +1." },
      { name: "Aura de Luz Lunar", text: "Los conjuros hostiles dirigidos al principi tienen CD 15 para ser lanzados." },
      { name: "Visión Verdadera", text: "Puede ver todas las criaturas y objetos invisibles." }
    ]
  },
  {
    name: "ÁNGEL DOMINI (ANGEL, DOMINI)",
    desc: "Humanos alados e impecables que brillan con la luz del sol bronceada. Señores de los serafines.",
    ca: 17, pg: 42, mv: "cercano (volar)", nv: 9, al: "L",
    f: "+4", d: "+1", c: "+2", i: "+3", s: "+4", ca_mod: "+4",
    atq: "3 espadas bastardas +7 (1d8) o 1 cuerno",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Cuerno", text: "Todos los enemigos a distancia cercana CD 15 CAR o quedan paralizados 1d4 asaltos." }
    ]
  },
  {
    name: "ÁNGEL SERAFÍN (ANGEL, SERAPH)",
    desc: "Humanoides hermosos y luminosos con alas de plumas blancas. La esfera más común que camina entre mortales.",
    ca: 14, pg: 14, mv: "cercano (volar)", nv: 3, al: "L",
    f: "+3", d: "+1", c: "+1", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 espadas largas +3 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Bendición", text: "3/día, toca a un objetivo para otorgarle una ficha de suerte." }
    ]
  },
  {
    name: "ARMADURA ANIMADA (ANIMATED ARMOR)",
    desc: "Una vieja armadura animada mágicamente por un espíritu vengativo.",
    ca: 15, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+3", d: "-1", c: "+2", i: "-1", s: "+1", ca_mod: "+0",
    atq: "1 espada larga +3 (1d8)",
    traits: [
      { name: "Estatua", text: "Al permanecer inmóvil, parece exactamente una armadura normal." }
    ]
  },
  {
    name: "ANKHEG",
    desc: "Insectos del tamaño de un caballo, de color marrón rojizo. Excavan enormes galerías subterráneas en el lecho de roca.",
    ca: 14, pg: 14, mv: "cercano (excavar)", nv: 3, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +4 (1d6) o 1 rociada de ácido (cercano) +4 (2d6)",
    traits: []
  },
  {
    name: "SIMIO (APE)",
    desc: "Simios omnívoros que chillan y habitan en las copas de los árboles.",
    ca: 12, pg: 10, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "1 puñetazo +2 (1d6) o 1 roca (lejano) +2 (1d4)",
    traits: []
  },
  {
    name: "SIMIO DE LAS NIEVES (SNOW APE)",
    desc: "Gorilas carnívoros de pelo blanco que acechan en las altas montañas y habitan en cavernas.",
    ca: 13, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+3", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 puñetazos +4 (1d6) o 1 roca (lejano) +4 (2d6)",
    traits: [
      { name: "Pelaje Grueso", text: "Inmune al frío." }
    ]
  },
  {
    name: "APRENDIZ (APPRENTICE)",
    desc: "Un mago encapuchado con un grimorio delgado recién encuadernado.",
    ca: 11, pg: 3, mv: "cercano", nv: 1, al: "N",
    f: "-1", d: "+1", c: "-1", i: "+2", s: "+0", ca_mod: "+0",
    atq: "1 daga (contacto/cercano) +1 (1d4) o 1 conjuro +2",
    traits: [
      { name: "Ofuscar (Conjuro INT)", text: "CD 11. Concentración. Un objetivo a distancia cercana de NV 2 o menor queda estupefacto durante la duración." },
      { name: "Proyectil Mágico (Conjuro INT)", text: "CD 11. 1d4 de daño a un objetivo a distancia lejana." }
    ]
  },
  {
    name: "ARCHIMAGO (ARCHMAGE)",
    desc: "Un veterano lanzador de conjuros que crepita con poder arcano.",
    ca: 12, pg: 44, mv: "cercano", nv: 10, al: "L",
    f: "-1", d: "+2", c: "-1", i: "+4", s: "+2", ca_mod: "+1",
    atq: "2 conjuros +7",
    traits: [
      { name: "Rayo Mortal (Conjuro INT)", text: "CD 15. Un objetivo de NV 9 o inferior a distancia cercana CD 15 CON o cae a 0 PG." },
      { name: "Debilitar (Conjuro INT)", text: "CD 14. Concentración. Un objetivo a distancia cercana queda estupefacto durante la duración." },
      { name: "Deflagración Ígnea (Conjuro INT)", text: "CD 14. 4d6 de daño a todos dentro de un cubo de tamaño cercano situado a distancia lejana." },
      { name: "Flotar (Conjuro INT)", text: "Personal. CD 14. Vuela a doble distancia cercana durante 5 asaltos." },
      { name: "Piel de Mitral (Conjuro INT)", text: "Personal. CD 14. Su CA pasa a ser 18 durante 5 asaltos." },
      { name: "Paso del Vacío (Conjuro INT)", text: "Personal y hasta 4 objetivos voluntarios. CD 15. Teletransporte hasta a 100 millas." }
    ]
  },
  {
    name: "ASESINO (ASSASSIN)",
    desc: "Un asesino sigiloso con capa negra que acecha desde las sombras.",
    ca: 15, pg: 38, mv: "cercano (trepar)", nv: 8, al: "C",
    f: "+2", d: "+4", c: "+2", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 dagas envenenadas (contacto/cercano) +6 (2d4)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Ejecutar", text: "Inflige x3 de daño contra objetivos sorprendidos." }
    ]
  },
  {
    name: "AZER",
    desc: "Enanos de piel bronceada y metálica con llamas en lugar de cabello. Talentosos herreros.",
    ca: 15, pg: 15, mv: "cercano", nv: 3, al: "L",
    f: "+3", d: "+0", c: "+2", i: "+0", s: "+0", ca_mod: "+0",
    atq: "2 martillos de guerra llameantes +3 (1d10, prende inflamables) o 1 ballesta (lejano) +0 (1d6)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." }
    ]
  },
  {
    name: "TEJÓN (BADGER)",
    desc: "Excavadores feroces y provistos de garras, con rayas blancas y negras en la cara.",
    ca: 11, pg: 5, mv: "cercano (excavar)", nv: 1, al: "N",
    f: "+2", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-2",
    atq: "2 garras +2 (1d4)",
    traits: [
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "BANDIDO (BANDIT)",
    desc: "Pícaro curtido vestido con cueros raídos y capa con capucha.",
    ca: 13, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+0", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 garrote +1 (1d4) o 1 arco corto (lejano) +0 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Emboscada", text: "Inflige un dado adicional de daño cuando no ha sido detectado." }
    ]
  },
  {
    name: "BASILISCO (BASILISK)",
    desc: "Lagartos enormes y musculosos con seis patas y piel gris y dura.",
    ca: 14, pg: 25, mv: "cercano", nv: 5, al: "N",
    f: "+3", d: "+1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +4 (2d6 + petrificación)",
    traits: [
      { name: "Petrificación", text: "Cualquier criatura que toque al basilisco o cruce su mirada, CD 15 CON o queda petrificada." }
    ]
  },
  {
    name: "MURCIÉLAGO GIGANTE (GIANT BAT)",
    desc: "Mamífero volador coriáceo del tamaño de un águila con apetito por la carne.",
    ca: 12, pg: 9, mv: "cercano (volar)", nv: 2, al: "N",
    f: "-1", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +2 (1d6)",
    traits: []
  },
  {
    name: "ENJAMBRE DE MURCIÉLAGOS (BAT SWARM)",
    desc: "Una nube arremolinada de chillones y sanguinarios murciélagos.",
    ca: 12, pg: 18, mv: "cercano (volar)", nv: 4, al: "N",
    f: "-3", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +2 (1d6)",
    traits: []
  },
  {
    name: "OSO PARDO (BROWN BEAR)",
    desc: "Un bruto descomunal y bamboleante con garras tan largas como un dedo.",
    ca: 13, pg: 25, mv: "cercano (trepar)", nv: 5, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 garras +4 (1d8)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambas garras." }
    ]
  },
  {
    name: "OSO POLAR (POLAR BEAR)",
    desc: "Un poderoso oso blanco adaptado a entornos árticos gélidos.",
    ca: 13, pg: 34, mv: "cercano (trepar)", nv: 7, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 garras +6 (2d6)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambas garras." },
      { name: "Pelaje Grueso", text: "Inmune al frío." }
    ]
  },
  {
    name: "HOMBRE BESTIA (BEASTMAN)",
    desc: "Un homínido cavernario con pelo desgreñado y lanza con punta de piedra.",
    ca: 12, pg: 5, mv: "cercano", nv: 1, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +2 (1d6 + 1)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Brutal", text: "+1 al daño con armas cuerpo a cuerpo (incluido)." }
    ]
  },
  {
    name: "BERSÉRKER (BERSERKER)",
    desc: "Guerreros aulladores sumidos en una cólera de combate desenfrenada.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+2", d: "+1", c: "+1", i: "+0", s: "+1", ca_mod: "+0",
    atq: "1 gran hacha +2 (1d10) o 1 lanza (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "PUDIN NEGRO (BLACK PUDDING)",
    desc: "Una masa gelatinosa negra, gélida y rezumante.",
    ca: 9, pg: 30, mv: "cercano (trepar)", nv: 6, al: "N",
    f: "+2", d: "-1", c: "+3", i: "-4", s: "-3", ca_mod: "-4",
    atq: "3 tentáculos +4 (2d6)",
    traits: [
      { name: "Inmune", text: "Solo puede recibir daño de fuego." },
      { name: "Corrosivo", text: "La madera o el metal que toque el limo se disuelven con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "JABALÍ (BOAR)",
    desc: "Cerdo salvaje y agresivo de pelo áspero y rojizo con colmillos amarillentos.",
    ca: 12, pg: 14, mv: "cercano", nv: 3, al: "N",
    f: "+3", d: "+0", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 colmillos +3 (1d6)",
    traits: [
      { name: "Cornada", text: "Inflige un dado adicional de daño si impacta al mismo objetivo con ambos colmillos." }
    ]
  },
  {
    name: "DEVORADOR DE CEREBROS (BRAIN EATER)",
    desc: "Humanoides escuálidos de piel púrpura con cabeza de calamar y cuatro tentáculos faciales. Viven en complejas sociedades subterráneas y devoran cerebros humanoides.",
    ca: 14, pg: 36, mv: "cercano", nv: 8, al: "C",
    f: "+2", d: "+3", c: "+0", i: "+4", s: "+2", ca_mod: "+4",
    atq: "4 tentáculos +5 (1d8 + enganche) o 1 descarga mental o 1 control mental",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Oír Pensamientos", text: "Puede oír los pensamientos superficiales de todas las criaturas inteligentes a distancia cercana." },
      { name: "Enganche", text: "Los tentáculos se adhieren a los objetivos impactados, acertando automáticamente en el siguiente asalto (CD 12 FUE para retirar 1d4 tentáculos). Si los cuatro permanecen enganchados al mismo objetivo durante 1 asalto completo, su cerebro es arrancado y devorado." },
      { name: "Descarga Mental", text: "Cubo de tamaño cercano que se extiende desde el devorador de cerebros. CD 15 INT o 3d6 de daño y paralizado 1d4 asaltos." },
      { name: "Control Mental", text: "Un objetivo a distancia cercana CD 15 CAR o el devorador de cerebros lo controla durante 1d4 asaltos." }
    ]
  },
  {
    name: "BUGBEAR / OSO TRASGO (BUGBEAR)",
    desc: "Goblinoides brutales con orejas de murciélago cubiertos de pelaje marrón.",
    ca: 13, pg: 14, mv: "cercano", nv: 3, al: "C",
    f: "+3", d: "+0", c: "+1", i: "-1", s: "+0", ca_mod: "-2",
    atq: "2 mazas con púas +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Sigiloso", text: "Ventaja en tiradas para moverse en sigilo y esconderse." }
    ]
  },
  {
    name: "BULETTE / TIBURÓN TERRESTRE (BULETTE)",
    desc: "Lagarto corpulento del tamaño de un tiburón con un caparazón acerado en forma de punta de flecha y unas fauces descomunales.",
    ca: 17, pg: 40, mv: "cercano (excavar)", nv: 8, al: "N",
    f: "+5", d: "+1", c: "+4", i: "-3", s: "+1", ca_mod: "-2",
    atq: "3 mordiscos +5 (2d6) o 1 salto",
    traits: [
      { name: "Salto", text: "Salta hasta una distancia cercana de altura y doble cercana de longitud, realizando después 2 ataques de mordisco." }
    ]
  },
  {
    name: "CAMELLO (CAMEL)",
    desc: "Bestias del desierto de pelaje canela y temperamento hosco.",
    ca: 10, pg: 12, mv: "doble cercano", nv: 2, al: "N",
    f: "+3", d: "+0", c: "+3", i: "-2", s: "+1", ca_mod: "-3",
    atq: "1 pezuña +3 (1d6) o 1 escupitajo (cercano) +0 (1d4)",
    traits: []
  },
  {
    name: "BRUTO CAVERNARIO (CAVE BRUTE)",
    desc: "Bestia insectoide descomunal con largas mandíbulas, cuatro ojos y brazos gruesos cubiertos de cerdas.",
    ca: 14, pg: 28, mv: "cercano (excavar)", nv: 6, al: "N",
    f: "+4", d: "+1", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 garras +5 (1d8) y 1 mandíbula +5 (1d10)",
    traits: [
      { name: "Desconcertar", text: "Las criaturas a distancia cercana que vean sus ojos deben superar CD 12 CAR al inicio de su turno o quedan aturdidas y sin acción." }
    ]
  },
  {
    name: "REPTADOR CAVERNARIO (CAVE CREEPER)",
    desc: "Ciempiés verdes y chasqueantes del tamaño de caballos. Sus tentáculos prensiles están impregnados de un veneno paralizante.",
    ca: 12, pg: 18, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "+2", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d6) y 1 tentáculos +3 (1d8 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "CENTAURO (CENTAUR)",
    desc: "Seres gregarios con el torso de un humano y el cuerpo inferior de un caballo.",
    ca: 12, pg: 14, mv: "doble cercano", nv: 3, al: "N",
    f: "+2", d: "+1", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "2 lanzas (contacto/cercano) +2 (1d6) o 1 arco largo (lejano) +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "CIEMPIÉS GIGANTE (CENTIPEDE, GIANT)",
    desc: "Ciempiés de color rojo sangre con aspecto plumoso del tamaño de un brazo humano. Su mordedura inocula un veneno abrasador que provoca calambres.",
    ca: 11, pg: 4, mv: "cercano (trepar)", nv: 1, al: "N",
    f: "-3", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 mordisco +1 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "ENJAMBRE DE CIEMPÍES (CENTIPEDE, SWARM)",
    desc: "Una masa reptante de ciempiés sinuosos y ondulantes.",
    ca: 11, pg: 18, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "-3", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "3 mordiscos +1 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "QUIMERA (CHIMERA)",
    desc: "Monstruosa bestia con cuerpo mitad cabra y mitad león, amplias alas de dragón y las cabezas de una cabra, un león y un dragón.",
    ca: 16, pg: 49, mv: "doble cercano (volar)", nv: 10, al: "C",
    f: "+5", d: "+4", c: "+4", i: "-3", s: "+2", ca_mod: "-1",
    atq: "4 desgarres +7 (2d8) y 1 aliento de fuego",
    traits: [
      { name: "Aliento de Fuego", text: "Llena un cubo de tamaño cercano adyacente a la quimera. CD 15 DES o 4d6 de daño." }
    ]
  },
  {
    name: "CHUUL",
    desc: "Crustáceos insectoides de color marrón del tamaño de un caballo, provistos de tentáculos y pinzas.",
    ca: 15, pg: 25, mv: "cercano (nadar)", nv: 5, al: "C",
    f: "+3", d: "-1", c: "+3", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 pinzas +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda atrapado en la pinza. CD 15 FUE en su turno para liberarse." }
    ]
  },
  {
    name: "MANTO / ACECHADOR (CLOAKER)",
    desc: "Una mantarraya de color azul medianoche con cola ósea y fauces en forma de media luna sobre el vientre. Vuela rápidamente por cavernas profundas y sin luz.",
    ca: 13, pg: 28, mv: "cercano (volar)", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+1", ca_mod: "+0",
    atq: "3 azotes +4 (1d8) o 1 chillido",
    traits: [
      { name: "Fantasmas", text: "1/día, en lugar de atacar. Crea 3 duplicados ilusorios que desaparecen al recibir daño. Determina al azar si un ataque impacta al manto o a las ilusiones." },
      { name: "Chillido", text: "Enemigos a doble distancia cercana CD 15 SAB o sufren desventaja en ataques y pruebas durante 1d4 asaltos." }
    ]
  },
  {
    name: "COCATRIZ (COCKATRICE)",
    desc: "Híbrido de lagarto y gallo en muda con una cresta afilada de color carmesí.",
    ca: 11, pg: 14, mv: "cercano (volar)", nv: 3, al: "N",
    f: "-2", d: "+1", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +1 (1d4 + petrificación)",
    traits: [
      { name: "Petrificar", text: "CD 12 CON o queda petrificado permanentemente." }
    ]
  },
  {
    name: "COATLICUE / COUATL",
    desc: "Serpiente del tamaño de un humano con escamas de joyas y una corona de plumas iridiscentes.",
    ca: 16, pg: 42, mv: "cercano (volar)", nv: 9, al: "L",
    f: "+2", d: "+3", c: "+2", i: "+4", s: "+4", ca_mod: "+5",
    atq: "3 mordiscos +6 (2d6 + veneno)",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier criatura de tamaño similar." },
      { name: "Veneno", text: "CD 15 CON o cae en un sueño profundo y natural durante 1d8 horas." },
      { name: "Restaurar", text: "En lugar de atacar, toca a una criatura para eliminar una maldición, aflicción o sanar 3d8 PG." }
    ]
  },
  {
    name: "CANGREJO GIGANTE (CRAB, GIANT)",
    desc: "Un cangrejo acorazado del tamaño de un carromato con dos pinzas demoledoras.",
    ca: 15, pg: 24, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+3", d: "+0", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 pinzas +4 (1d8 + aplastamiento)",
    traits: [
      { name: "Aplastamiento", text: "CD 15 FUE o el objetivo recibe 1d8 de daño adicional." }
    ]
  },
  {
    name: "COCODRILO (CROCODILE)",
    desc: "Reptiles escamosos y corpulentos con patas cortas y colas largas y azotadoras.",
    ca: 14, pg: 20, mv: "cercano (nadar)", nv: 4, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 mordiscos +3 (1d8)",
    traits: []
  },
  {
    name: "CULTISTA (CULTIST)",
    desc: "Un fanático encapuchado de mirada desorbitada que entona guturales plegarias a un dios oscuro.",
    ca: 14, pg: 9, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "-1", c: "+0", i: "-1", s: "+2", ca_mod: "+0",
    atq: "1 espada larga +1 (1d8) o 1 conjuro +2",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Sin Miedo", text: "Inmune a tiradas de moral." },
      { name: "Toque Mortal (Conjuro SAB)", text: "CD 12. 2d4 de daño a una criatura a distancia de contacto (close)." }
    ]
  },
  {
    name: "CÍCLOPE (CYCLOPS)",
    desc: "Gigantes solitarios de un solo ojo de 6 metros de altura. Llevan una vida sencilla en tierras de cultivo remotas.",
    ca: 11, pg: 38, mv: "doble cercano", nv: 8, al: "C",
    f: "+5", d: "+0", c: "+2", i: "-1", s: "-2", ca_mod: "+0",
    atq: "2 grandes garrotes +7 (2d8) o 1 roca (lejano) +5 (1d12)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "MANTO OSCURO (DARKMANTLE)",
    desc: "Pulpo negro flotante con hileras de ojos rojos y una falda palmeada de tentáculos.",
    ca: 13, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+3", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 mordisco +3 (1d4) o 1 oscuridad",
    traits: [
      { name: "Oscuridad", text: "Apaga todas las fuentes de luz a distancia cercana." }
    ]
  },
  {
    name: "PROFUNDO (DEEP ONE)",
    desc: "Hombres-pez anfibios y sectarios con ojos saltones. Acechan en aguas profundas y cavernas sin sol.",
    ca: 13, pg: 10, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 lanzas (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "DEMONIO BALOR (DEMON, BALOR)",
    desc: "Bestias aladas colosales y cornudas envueltas en las llamas del mismísimo infierno. Sus mandobles y látigos parten la roca.",
    ca: 19, pg: 77, mv: "doble cercano (volar)", nv: 16, al: "C",
    f: "+6", d: "+2", c: "+5", i: "+4", s: "+3", ca_mod: "+4",
    atq: "3 mandobles +10 (2d12 + fuego infernal) y 1 látigo de fuego (cercano) +10 (2d6 + presa)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Presa", text: "CD 18 FUE o el objetivo queda atado por el látigo sufriendo 2d6 de daño por asalto retenido (CD 18 FUE en su turno para liberarse). En lugar del ataque de látigo, puede arrojar a una criatura apresada a doble distancia cercana." },
      { name: "Fuego Infernal", text: "CD 18 DES o sufre 2d8 de daño por asalto hasta que las llamas sean extinguidas." }
    ]
  },
  {
    name: "DEMONIO DRETCH (DEMON, DRETCH)",
    desc: "Demonios verdes con cara de cerdo, garras gruesas y un hedor aceitoso.",
    ca: 12, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+0", c: "+2", i: "-2", s: "-1", ca_mod: "-3",
    atq: "1 garra +2 (1d6) o 1 gas",
    traits: [
      { name: "Gas", text: "Todos los seres a distancia cercana CD 12 CON o quedan cegados durante 1d4 asaltos." }
    ]
  },
  {
    name: "DEMONIO GLABREZU (DEMON, GLABREZU)",
    desc: "Criaturas bípedas con cabeza de caballo y colmillos que poseen cuatro brazos: dos marchitos y dos rematados en pinzas descomunales.",
    ca: 15, pg: 40, mv: "cercano", nv: 8, al: "C",
    f: "+4", d: "+1", c: "+4", i: "+3", s: "+2", ca_mod: "+2",
    atq: "2 pinzas +7 (2d8 + aplastamiento)",
    traits: [
      { name: "Aplastamiento", text: "CD 15 FUE o el objetivo recibe 2d8 de daño adicional." }
    ]
  },
  {
    name: "DEMONIO MARILITH (DEMON, MARILITH)",
    desc: "Mujeres sibilantes y acorazadas con seis brazos y cuerpo inferior de serpiente gigante, blandiendo seis espadas.",
    ca: 17, pg: 44, mv: "cercano (trepar)", nv: 9, al: "C",
    f: "+5", d: "+4", c: "+3", i: "+3", s: "+3", ca_mod: "+4",
    atq: "6 espadas largas +7 (1d8)",
    traits: [
      { name: "Armadura", text: "Placas." },
      { name: "Parada", text: "Puede renunciar a 2 ataques de espada larga en el siguiente asalto para desviar un ataque cuerpo a cuerpo que fuera a impactarle." }
    ]
  },
  {
    name: "DEMONIO VROCK (DEMON, VROCK)",
    desc: "Buitres inmundos del tamaño de carromatos con cuatro extremidades, piel azul medianoche y un sarpullido de plumas sarnosas.",
    ca: 14, pg: 24, mv: "cercano (volar)", nv: 5, al: "C",
    f: "+2", d: "+2", c: "+2", i: "-1", s: "+1", ca_mod: "+0",
    atq: "2 garras +4 (1d8) o 1 chillido",
    traits: [
      { name: "Niebla de Carroña", text: "Cada vez que recibe daño, 3 en 1d6 de liberar una nube de carroña en un cubo cercano centrado en el vrock. Todos los enemigos CD 15 CON o sufren vómitos violentos durante 1d4 asaltos." },
      { name: "Chillido", text: "Todos los enemigos a doble distancia cercana CD 12 SAB o sufren desventaja en pruebas y ataques durante 1d4 asaltos." }
    ]
  },
  {
    name: "ARCHIDIABLO (ARCHDEVIL)",
    desc: "Un humano cornudo de belleza sobrecogedora con ojos rojos ardientes y un halo de siete estrellas negras. De sus omóplatos brota sangre.",
    ca: 19, pg: 76, mv: "lejano (teletransporte)", nv: 16, al: "C",
    f: "+5", d: "+4", c: "+4", i: "+5", s: "+4", ca_mod: "+7",
    atq: "4 cetros de hierro +10 (3d10) o 1 atadura de alma",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Corona de Oscuridad", text: "Refleja contra el lanzador cualquier conjuro hostil cuya prueba de lanzamiento sea menor de 20." },
      { name: "Atadura de Alma", text: "Todos los objetivos a distancia cercana CD 20 CAR o caen bajo el control del archidiablo durante 1d4 asaltos (CD 20 CAR en cada turno para terminar el efecto)." }
    ]
  },
  {
    name: "DIABLO ESPINADO (DEVIL, BARBED)",
    desc: "Engendros desgarbados y moteados de verde repletos de espinas ganchudas.",
    ca: 13, pg: 14, mv: "cercano", nv: 3, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "2 espinas (cercano) +3 (1d6 + espina clavada) o 1 deflagración ígnea (lejano) +3 (1d8)",
    traits: [
      { name: "Espina Clavada", text: "Cada espina se clava causando 1d4 de daño por asalto (CD 12 FUE en su turno para extraerla)." }
    ]
  },
  {
    name: "DIABLO SÚCUBO / ÍNCUBO (DEVIL, CUBI)",
    desc: "Humanoides cautivadores con alas de murciélago y un encanto diabólico irresistible.",
    ca: 14, pg: 29, mv: "cercano (volar)", nv: 6, al: "C",
    f: "+2", d: "+4", c: "+2", i: "+3", s: "+2", ca_mod: "+5",
    atq: "1 beso +4 (1d6 + drenaje) o 1 hechizo",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide de tamaño similar." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana CD 15 CAR o queda embelesado por 1d6 horas." },
      { name: "Drenaje", text: "Inflige 1d6 de daño temporal a Sabiduría. Si se reduce a 0 SAB, su alma queda jurada a un archidiablo." }
    ]
  },
  {
    name: "DIABLO ERINIA (DEVIL, ERINYES)",
    desc: "Seres resplandecientes con alas de cuervo vestidos con armaduras negras pulidas y yelmos con cuernos curvos.",
    ca: 17, pg: 43, mv: "doble cercano (volar)", nv: 9, al: "C",
    f: "+4", d: "+4", c: "+3", i: "+4", s: "+4", ca_mod: "+5",
    atq: "3 mandobles +8 (1d12) o 2 arcos largos (lejano) +8 (1d8 + veneno)",
    traits: [
      { name: "Armadura", text: "Placas +1." },
      { name: "Veneno", text: "CD 15 CON o los ojos del objetivo se vuelven negros azabache y ataca a sus aliados durante 1d4 asaltos (CD 15 SAB en su turno para terminar el efecto)." }
    ]
  },
  {
    name: "DIABLO CORNUDO (DEVIL, HORNED)",
    desc: "Engendros infernales del tamaño de ogros con escamas de hierro, pesados cuernos de carnero, colas azotadoras y alas coriáceas.",
    ca: 16, pg: 35, mv: "doble cercano (volar)", nv: 7, al: "C",
    f: "+5", d: "+2", c: "+4", i: "+2", s: "+1", ca_mod: "+2",
    atq: "2 tridentes ardientes (cercano) +7 (2d6) o 1 deflagración ígnea (lejano) +4 (2d8)",
    traits: [
      { name: "Piel de Hierro", text: "Recibe la mitad de daño de armas no mágicas." }
    ]
  },
  {
    name: "DIABLILLO / IMP (DEVIL, IMP)",
    desc: "Pequeños diablos rojos del tamaño de un gato con alas y cola sobredimensionadas, cuernos diminutos y actitud cobarde.",
    ca: 13, pg: 9, mv: "cercano (volar)", nv: 2, al: "C",
    f: "-2", d: "+3", c: "+0", i: "+1", s: "+0", ca_mod: "+2",
    atq: "1 aguijón +3 (1d4 + veneno)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Contrato", text: "Puede conceder dones y patronazgo en nombre de un archidiablo a cambio de un alma. Ventaja en tiradas de Carisma relacionadas." },
      { name: "Veneno", text: "CD 12 CON o cae en un sueño agitado durante 1d4 horas." }
    ]
  },
  {
    name: "BRAQUIOSAURIO (BRACHIOSAURUS)",
    desc: "Colosales herbívoros de cuello largo. Lentos y pacíficos.",
    ca: 13, pg: 57, mv: "doble cercano", nv: 12, al: "N",
    f: "+6", d: "-1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 pisotones +7 (2d10)",
    traits: []
  },
  {
    name: "PLESIOSAURIO (PLESIOSAURUS)",
    desc: "Reptiles acuáticos del tamaño de elefantes con aletas planas y fauces alargadas repletas de dientes.",
    ca: 13, pg: 30, mv: "doble cercano (nadar)", nv: 6, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +5 (2d8)",
    traits: []
  },
  {
    name: "PTERODÁCTILO (PTERODACTYL)",
    desc: "Bestias de pico alargado con anchas alas triangulares, suficientemente grandes para cargar con un humano.",
    ca: 14, pg: 20, mv: "doble cercano (volar)", nv: 4, al: "N",
    f: "+2", d: "+4", c: "+2", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 picos +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda atrapado (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "TRICERATOPS",
    desc: "Herbívoros pesados con una ancha gola ósea craneal y tres cuernos afilados.",
    ca: 17, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 cuernos +6 (1d10) o 1 carga",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuernos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "TIRANOSAURIO (TYRANNOSAURUS)",
    desc: "Imponente reptil bípedo con cabeza, mandíbulas y cuello titánicos.",
    ca: 13, pg: 44, mv: "doble cercano", nv: 9, al: "N",
    f: "+5", d: "+1", c: "+4", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +8 (2d12)",
    traits: []
  },
  {
    name: "VELOCIRRAPTOR (VELOCIRAPTOR)",
    desc: "Raptores rápidos del tamaño de un pavo provistos de garras letales en las patas. Cazadores en manada.",
    ca: 13, pg: 10, mv: "doble cercano", nv: 2, al: "N",
    f: "-1", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "1 garra +3 (1d6)",
    traits: [
      { name: "Astuto", text: "+1d4 de daño cuando ataca con sorpresa." }
    ]
  },
  {
    name: "DJINNI / GENIO (DJINNI)",
    desc: "Humanoides joviales de color azul celeste hechos de aire y vientos turbulentos. Imbuidos de poderosa magia.",
    ca: 14, pg: 48, mv: "doble cercano (volar)", nv: 10, al: "N",
    f: "+4", d: "+4", c: "+3", i: "+4", s: "+3", ca_mod: "+3",
    atq: "3 cimitarras +7 (1d12) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Se transforma en un tornado azotador. Todos los enemigos a distancia cercana CD 18 DES o son arrojados 2d100 pies en una dirección aleatoria." },
      { name: "Deseo", text: "Puede lanzar el conjuro deseo una vez por semana para un mortal sin necesidad de prueba de lanzamiento." }
    ]
  },
  {
    name: "DOPPELGÄNGER",
    desc: "Humanoides grises y sin rasgos definidos que disfrutan sembrando la confusión y el caos.",
    ca: 12, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+1", d: "+2", c: "+2", i: "+1", s: "+0", ca_mod: "+4",
    atq: "1 daga (contacto/cercano) +2 (1d4)",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide de tamaño similar." },
      { name: "Telepatía", text: "Puede escuchar en secreto los pensamientos superficiales de todos los humanoides a distancia cercana." }
    ]
  },
  {
    name: "DRAGÓN DEL DESIERTO (DRAGON, DESERT)",
    desc: "El olor a ozono precede a este dragón. Sus deslumbrantes escamas de latón y lapislázuli brillan bajo el sol abrasador.",
    ca: 17, pg: 61, mv: "doble cercano (volar)", nv: 13, al: "L",
    f: "+5", d: "+3", c: "+3", i: "+4", s: "+5", ca_mod: "+5",
    atq: "3 desgarres +9 (2d10) o 1 aliento de relámpagos",
    traits: [
      { name: "Sangre de Tormenta", text: "Inmune a la electricidad." },
      { name: "Aliento de Relámpagos", text: "Línea recta de 5 pies de ancho que se extiende a doble distancia cercana. CD 15 DES o 4d8 de daño (desventaja si lleva armadura metálica)." },
      { name: "Espejismo", text: "1/día, en lugar de atacar. Crea 3 duplicados ilusorios que desaparecen al recibir daño. Determina al azar si un ataque impacta al dragón o a las ilusiones." }
    ]
  },
  {
    name: "DRAGÓN DE FUEGO (DRAGON, FIRE)",
    desc: "Escamas de color rojo sangre cubren la piel de este colosal sierpe volcánico. Llamas vivas arden en su garganta.",
    ca: 18, pg: 80, mv: "doble cercano (volar)", nv: 17, al: "C",
    f: "+6", d: "+5", c: "+4", i: "+4", s: "+4", ca_mod: "+5",
    atq: "4 desgarres +11 (2d12) o 1 aliento de fuego",
    traits: [
      { name: "Sangre Ígnea", text: "Inmune al fuego." },
      { name: "Aliento de Fuego", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 6d10 de daño." }
    ]
  },
  {
    name: "DRAGÓN DEL BOSQUE (DRAGON, FOREST)",
    desc: "El olor a tierra húmeda sigue a este dragón. Sus escamas de jade están cubiertas de espinas ganchudas.",
    ca: 16, pg: 58, mv: "doble cercano (volar)", nv: 12, al: "N",
    f: "+4", d: "+3", c: "+4", i: "+3", s: "+3", ca_mod: "+4",
    atq: "3 desgarres +8 (2d8) o 1 aliento venenoso",
    traits: [
      { name: "Animar Plantas", text: "1/día, en lugar de atacar. Enredaderas apresan a todos los enemigos a doble distancia cercana del dragón. CD 15 DES o quedan inmovilizados durante 1d4 asaltos." },
      { name: "Aliento Venenoso", text: "Llena un cubo de tamaño cercano adyacente al dragón. CD 15 CON o 3d8 de daño." }
    ]
  },
  {
    name: "DRAGÓN DE ESCRACHA (DRAGON, FROST)",
    desc: "Hielo prismático cubre los cuernos, espinas y alas de este dragón perlado. Nubes de vapor sisean desde sus mandíbulas cubiertas de escarcha.",
    ca: 17, pg: 68, mv: "doble cercano (volar)", nv: 14, al: "N",
    f: "+4", d: "+3", c: "+5", i: "+3", s: "+4", ca_mod: "+3",
    atq: "4 desgarres +9 (2d10) o 1 aliento de hielo",
    traits: [
      { name: "Sangre Gélida", text: "Inmune al frío." },
      { name: "Aliento de Hielo", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 4d8 de daño y queda congelado durante 1 asalto." }
    ]
  },
  {
    name: "DRAGÓN MARINO (DRAGON, SEA)",
    desc: "Una cálida brisa marina envuelve a este sierpe anfibio de escamas doradas. Una barba de zarcillos cubre su hocico y una melena azul ondea por su cuello.",
    ca: 17, pg: 76, mv: "doble cercano (volar, nadar)", nv: 16, al: "L",
    f: "+5", d: "+6", c: "+4", i: "+4", s: "+5", ca_mod: "+5",
    atq: "4 desgarres +10 (2d10) o 1 aliento de vapor o 1 tromba de agua",
    traits: [
      { name: "Aliento de Vapor", text: "Llena un cubo de doble distancia cercana que se extiende desde el dragón. CD 15 DES o 4d12 de daño." },
      { name: "Tromba de Agua", text: "Llena un cubo de tamaño cercano situado a distancia lejana. CD 15 FUE o las criaturas atrapadas son arrojadas 2d100 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "DRAGÓN DEL PANTANO (DRAGON, SWAMP)",
    desc: "Esta bestia negra y sin alas se desliza con sigilo entre ciénagas húmedas y pestilentes.",
    ca: 16, pg: 58, mv: "doble cercano (excavar, nadar)", nv: 12, al: "C",
    f: "+5", d: "+3", c: "+4", i: "+4", s: "+3", ca_mod: "+3",
    atq: "3 desgarres +8 (2d10) o 1 aliento de niebla tóxica",
    traits: [
      { name: "Aliento de Niebla Tóxica", text: "Llena un cubo de tamaño cercano adyacente al dragón. CD 15 CON o 2d10 de daño y queda cegado durante 1 asalto." }
    ]
  },
  {
    name: "DROW / ELFO OSCURO (DROW)",
    desc: "Elfo grácil y sombrío que acecha en las profundidades y se abalanza como una araña.",
    ca: 16, pg: 9, mv: "cercano", nv: 2, al: "C",
    f: "+0", d: "+3", c: "+0", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 dardo envenenado (cercano) +3 (1d4 + veneno) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o cae dormido." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "DRIDER / DROW ARAÑA (DROW, DRIDER)",
    desc: "Una monstruosidad abominable con cuerpo inferior de araña gigante y torso superior de drow.",
    ca: 16, pg: 29, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+3", d: "+3", c: "+2", i: "+2", s: "+2", ca_mod: "+0",
    atq: "3 espadas largas +3 (1d8) o 2 arcos largos (lejano) +3 (1d8 + veneno)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "SACERDOTISA DROW (DROW, PRIESTESS)",
    desc: "Una imponente hembra drow con una corona de telarañas metálicas y una mirada despótica.",
    ca: 16, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+3", s: "+4", ca_mod: "+3",
    atq: "3 látigos serpiente (cercano) +4 (1d8 + veneno) o 1 conjuro +4",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." },
      { name: "Extinguir (Conjuro SAB)", text: "CD 12. Apaga todas las fuentes de luz (incluso mágicas) a distancia cercana." },
      { name: "Convocar Arañas (Conjuro SAB)", text: "CD 14. Invoca 2d4 arañas gigantes leales que aparecen a distancia cercana y permanecen durante 5 asaltos." },
      { name: "Telaraña (Conjuro SAB)", text: "CD 13. Cubo de telarañas de tamaño cercano a distancia lejana inmoviliza a los atrapados durante 5 asaltos (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "DRUIDA (DRUID)",
    desc: "Un sabio de las tierras salvajes que sostiene un bastón nudoso y viste una capa de musgo viridiana.",
    ca: 11, pg: 31, mv: "cercano", nv: 7, al: "N",
    f: "+0", d: "+1", c: "+0", i: "+4", s: "+3", ca_mod: "+0",
    atq: "1 bastón +0 (1d4) o 2 conjuros +5",
    traits: [
      { name: "Piel de Roble (Conjuro INT)", text: "Personal. CD 13. Su CA pasa a ser 15 durante 5 asaltos." },
      { name: "Conjurar Llamas (Conjuro INT)", text: "CD 12. Un objetivo a distancia lejana recibe 2d6 de daño." },
      { name: "Imbuir (Conjuro INT)", text: "Personal. CD 13. El bastón se convierte en un arma mágica +3 durante 10 asaltos." },
      { name: "Convocar Oso (Conjuro INT)", text: "CD 14. Invoca un oso pardo leal que aparece a distancia cercana y permanece durante 5 asaltos." },
      { name: "Golpe de Trueno (Conjuro INT)", text: "CD 13. Llena un cubo de tamaño cercano adyacente al druida; las criaturas atrapadas son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "DRÍADE (DRYAD)",
    desc: "Un hada esquiva de piel esmeralda cubierta de hojas, vinculada espiritualmente a su árbol protector.",
    ca: 13, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "-1", d: "+2", c: "+1", i: "+1", s: "+3", ca_mod: "+4",
    atq: "1 bastón -1 (1d4) o 1 hechizo",
    traits: [
      { name: "Hechizar", text: "A distancia cercana, una criatura CD 14 CAR o traba una amistad inquebrantable durante 1d8 días." },
      { name: "Fundirse", text: "Puede adentrarse y fundirse con el árbol al que está vinculada." }
    ]
  },
  {
    name: "DUERGAR / ENANO GRIS (DUERGAR)",
    desc: "Enanos codiciosos de piel grisácea, calvas pulidas y barbas blancas que habitan en sombrías fortalezas subterráneas.",
    ca: 15, pg: 12, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+0", c: "+3", i: "+0", s: "-1", ca_mod: "-1",
    atq: "1 pico de guerra +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Agrandar", text: "1/día, +1d6 al daño en ataques cuerpo a cuerpo y ventaja en pruebas de Fuerza durante 3 asaltos." },
      { name: "Invisibilidad", text: "1/día, se vuelve invisible durante 3 asaltos (termina si ataca)." },
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." }
    ]
  },
  {
    name: "ESCARABAJO PELOTERO GIGANTE (DUNG BEETLE, GIANT)",
    desc: "Un escarabajo pesado del tamaño de un barril con un característico cuerno en forma de T.",
    ca: 13, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+1", d: "-1", c: "+1", i: "-3", s: "-1", ca_mod: "-3",
    atq: "1 cuerno +1 (1d4 + empujón)",
    traits: [
      { name: "Empujón", text: "CD 9 FUE o el objetivo es empujado a distancia de contacto (close) y cae derribado." }
    ]
  },
  {
    name: "EFRIT / EFREETI",
    desc: "Humanoides imponentes de color rojo sangre forjados a partir de lava y ceniza, con cuernos negros y sonrisa feroz.",
    ca: 15, pg: 43, mv: "cercano (volar)", nv: 9, al: "C",
    f: "+5", d: "+2", c: "+3", i: "+3", s: "+2", ca_mod: "+3",
    atq: "3 cimitarras +8 (2d10) o 2 rayos de fuego (lejano) +5 (2d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Muro de Fuego", text: "1/día, cortina de fuego de 6 metros de altura y doble distancia cercana de largo. Tocarlo inflige 4d8 de daño. Dura 2d4 asaltos." },
      { name: "Deseo", text: "Lanza deseo una vez por semana para un mortal sin necesidad de prueba de lanzamiento." }
    ]
  },
  {
    name: "ELEMENTAL DE AIRE MENOR (AIR ELEMENTAL, LESSER)",
    desc: "Un tornado aullante de vientos violentos.",
    ca: 16, pg: 26, mv: "doble cercano (volar)", nv: 6, al: "N",
    f: "+3", d: "+5", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (2d6) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Todas las criaturas a distancia de contacto (close) CD 15 DES o son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "ELEMENTAL DE AIRE MAYOR (AIR ELEMENTAL, GREATER)",
    desc: "Un colosal huracán de destrucción y vientos feroces.",
    ca: 16, pg: 40, mv: "doble cercano (volar)", nv: 9, al: "N",
    f: "+3", d: "+5", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (3d6) o 1 torbellino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Torbellino", text: "Todas las criaturas a distancia de contacto (close) CD 15 DES o son arrojadas 2d20 pies en una dirección aleatoria." }
    ]
  },
  {
    name: "ELEMENTAL DE TIERRA MENOR (EARTH ELEMENTAL, LESSER)",
    desc: "Un pilar atronador de roca viva y tierra compacta.",
    ca: 17, pg: 28, mv: "cercano (excavar)", nv: 6, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (2d8) o 1 avalancha",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Avalancha", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan sepultadas bajo montículos de tierra durante 1d4 asaltos." }
    ]
  },
  {
    name: "ELEMENTAL DE TIERRA MAYOR (EARTH ELEMENTAL, GREATER)",
    desc: "Un monolito titánico de peñascos que hace temblar el suelo.",
    ca: 17, pg: 42, mv: "cercano (excavar)", nv: 9, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +7 (3d8) o 1 avalancha",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Avalancha", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan sepultadas bajo montículos de tierra durante 1d4 asaltos." }
    ]
  },
  {
    name: "ELEMENTAL DE FUEGO MENOR (FIRE ELEMENTAL, LESSER)",
    desc: "Una columna rugiente de llamas incandescentes.",
    ca: 15, pg: 26, mv: "cercano (volar)", nv: 6, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (2d10) o 1 infierno",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Infierno", text: "Todas las criaturas a distancia cercana CD 15 DES o reciben 3d8 de daño." }
    ]
  },
  {
    name: "ELEMENTAL DE FUEGO MAYOR (FIRE ELEMENTAL, GREATER)",
    desc: "Un vórtice abrasador de llamas infernales que funde todo a su paso.",
    ca: 15, pg: 41, mv: "cercano (volar)", nv: 9, al: "N",
    f: "+4", d: "+3", c: "+3", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (3d10) o 1 infierno",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune al fuego." },
      { name: "Infierno", text: "Todas las criaturas a distancia cercana CD 15 DES o reciben 3d8 de daño." }
    ]
  },
  {
    name: "ELEMENTAL DE AGUA MENOR (WATER ELEMENTAL, LESSER)",
    desc: "Un impetuoso vórtice de agua torrencial.",
    ca: 15, pg: 25, mv: "doble cercano (nadar)", nv: 6, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (2d6) o 1 remolino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Remolino", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan inmovilizadas dentro del elemental (se trata como estar sumergido bajo el agua). CD 15 FUE en su turno para escapar." }
    ]
  },
  {
    name: "ELEMENTAL DE AGUA MAYOR (WATER ELEMENTAL, GREATER)",
    desc: "Una marea viva y demoledora capaz de engullir embarcaciones.",
    ca: 15, pg: 39, mv: "doble cercano (nadar)", nv: 9, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "3 embates +6 (3d6) o 1 remolino",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Remolino", text: "Todas las criaturas a distancia de contacto (close) CD 15 FUE o quedan inmovilizadas dentro del elemental (se trata como estar sumergido bajo el agua). CD 15 FUE en su turno para escapar." }
    ]
  },
  {
    name: "ELEFANTE (ELEPHANT)",
    desc: "Mamífero colosal de piel dura, grandes orejas y trompa musculosa.",
    ca: 14, pg: 34, mv: "cercano", nv: 7, al: "N",
    f: "+5", d: "+0", c: "+3", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 colmillos +6 (1d8)",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de colmillos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "ELFO (ELF)",
    desc: "Ser feérico etéreo e inmortal imbuido de magia ancestral.",
    ca: 13, pg: 9, mv: "cercano", nv: 2, al: "L",
    f: "+0", d: "+3", c: "+0", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 arco largo (lejano) +3 (1d8) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Sangre Feérica", text: "Ventaja en pruebas de Destreza mientras se encuentre en la naturaleza salvaje." }
    ]
  },
  {
    name: "ETTERCAP / HOMBRE ARAÑA (ETTERCAP)",
    desc: "Hombre-araña bípedo de ocho ojos, patas delgadas y pelaje morado.",
    ca: 12, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "+0", d: "+2", c: "+1", i: "+0", s: "+0", ca_mod: "-1",
    atq: "2 mordiscos +2 (1d6) o 1 telaraña venenosa (cercano) +2",
    traits: [
      { name: "Telaraña Venenosa", text: "Un objetivo queda atrapado e inmovilizado sufriendo 1d4 de daño por asalto (CD 12 DES en su turno para liberarse)." }
    ]
  },
  {
    name: "HADA (FAIRY)",
    desc: "Gente feérica diminuta con alas batientes de mariposa o polilla.",
    ca: 13, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+3", c: "+0", i: "+1", s: "+0", ca_mod: "+1",
    atq: "1 aguja +3 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o cae en un sueño profundo durante 1d4 horas." }
    ]
  },
  {
    name: "RANA GIGANTE (FROG, GIANT)",
    desc: "Anfibios del tamaño de un humano de piel verrugosa y lengua larga y pegajosa.",
    ca: 12, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 lengua y 1 mordisco +2 (1d6)",
    traits: [
      { name: "Lengua", text: "Una criatura a distancia cercana CD 12 DES o es arrastrada a distancia de contacto (close)." }
    ]
  },
  {
    name: "GÁRGOLA (GARGOYLE)",
    desc: "Engendros alados y burlones con aspecto de estatua de piedra que pueden permanecer completamente inmóviles durante eras.",
    ca: 16, pg: 20, mv: "cercano (volar)", nv: 4, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+0", s: "+1", ca_mod: "-1",
    atq: "2 garras +3 (1d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." }
    ]
  },
  {
    name: "CUBO GELATINOSO (GELATINOUS CUBE)",
    desc: "Un cubo translúcido de limo cáustico que barre silenciosamente los pasillos de las mazmorras.",
    ca: 11, pg: 24, mv: "cercano", nv: 5, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-4", s: "+1", ca_mod: "-4",
    atq: "1 toque +4 (1d8 + toxina + engullir)",
    traits: [
      { name: "Engullir", text: "CD 12 FUE o queda atrapado dentro del cubo. El ataque de toque acierta automáticamente a los objetivos engullidos cada asalto. CD 12 FUE en su turno para escapar (falla automáticamente si está paralizado)." },
      { name: "Gomoso", text: "Recibe la mitad de daño de armas punzantes / perforantes." },
      { name: "Toxina", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "GHAST / LÉMUR MAYOR (GHAST)",
    desc: "Necrófagos superiores que conservan la inteligencia que poseían en vida.",
    ca: 11, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+0", s: "+0", ca_mod: "+2",
    atq: "2 garras +4 (1d8 + parálisis)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Hedor a Carroña", text: "Las criaturas vivas deben superar CD 12 CON la primera vez que se encuentren a distancia cercana o sufren desventaja en ataques y lanzamientos de conjuros durante 5 asaltos." },
      { name: "Parálisis", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "FANTASMA (GHOST)",
    desc: "Un espíritu trémulo cuyo rostro se retuerce de ira, rabia o tristeza eterna.",
    ca: 13, pg: 27, mv: "cercano (volar)", nv: 6, al: "C",
    f: "-2", d: "+3", c: "+0", i: "+0", s: "+0", ca_mod: "+4",
    atq: "2 toques mortales +5 (1d8 + drenaje de vida) o 1 posesión",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de armas de plata o fuentes mágicas." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." },
      { name: "Posesión", text: "Un objetivo a distancia de contacto (close). Prueba enfrentada de Carisma; si el fantasma gana, habita el cuerpo del objetivo y controla todas sus acciones durante 2d4 asaltos." }
    ]
  },
  {
    name: "GHOUL / LÉMUR (GHOUL)",
    desc: "No-muertos babeantes de piel grisácea con lenguas azotadoras y rostros planos y reptilianos.",
    ca: 11, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "+1", c: "+2", i: "-3", s: "-1", ca_mod: "+0",
    atq: "1 garra +2 (1d6 + parálisis)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Parálisis", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "GIGANTE DE LAS NUBES (GIANT, CLOUD)",
    desc: "Gigantes esbeltos y angulosos de cabello azul grisáceo y túnicas de seda que habitan en castillos sobre las cumbres.",
    ca: 15, pg: 48, mv: "doble cercano", nv: 10, al: "N",
    f: "+5", d: "+4", c: "+3", i: "+3", s: "+3", ca_mod: "+3",
    atq: "3 luceros del alba +9 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Alerta", text: "Ventaja en pruebas para detectar criaturas que intenten esconderse o moverse en sigilo." }
    ]
  },
  {
    name: "GIGANTE DE FUEGO (GIANT, FIRE)",
    desc: "Gigantes musculosos de piel cobriza y pelo rojo envueltos en pesadas armaduras de placas tachonadas de bronce.",
    ca: 15, pg: 44, mv: "doble cercano", nv: 9, al: "C",
    f: "+6", d: "+0", c: "+4", i: "+1", s: "+2", ca_mod: "+1",
    atq: "3 mandobles +9 (2d12)",
    traits: [
      { name: "Armadura", text: "Placas." },
      { name: "Sangre Ígnea", text: "Inmune al fuego." }
    ]
  },
  {
    name: "GIGANTE DE ESCRACHA (GIANT, FROST)",
    desc: "Guerreros de piel azulada y trenzas nórdicas que hacen sonar sus cuernos de guerra durante sus asaltos a los asentamientos.",
    ca: 14, pg: 44, mv: "doble cercano", nv: 9, al: "C",
    f: "+5", d: "+1", c: "+4", i: "+2", s: "+3", ca_mod: "+2",
    atq: "3 grandes hachas +8 (2d10)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Sangre Gélida", text: "Inmune al frío." }
    ]
  },
  {
    name: "GIGANTE CABRÍO (GIANT, GOAT)",
    desc: "Gigantes salvajes de las tierras altas con patas y cuernos de cabra y pupilas horizontales.",
    ca: 12, pg: 39, mv: "doble cercano (trepar)", nv: 8, al: "C",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 grandes garrotes +7 (2d8) o 1 peñasco (lejano) +7 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "GIGANTE DE LAS COLINAS (GIANT, HILL)",
    desc: "Moles carnosas de piel coriácea y frentes anchas. Crueles, toscos y estúpidos.",
    ca: 11, pg: 34, mv: "doble cercano", nv: 7, al: "C",
    f: "+4", d: "+0", c: "+3", i: "-2", s: "-2", ca_mod: "-2",
    atq: "2 grandes garrotes +6 (2d8) o 1 peñasco (lejano) +6 (2d10)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "GIGANTE DE PIEDRA (GIANT, STONE)",
    desc: "Gigantes esbeltos y fibrosos de piel pétrea y ojos profundos, capaces de permanecer inmóviles durante días.",
    ca: 17, pg: 40, mv: "doble cercano", nv: 8, al: "N",
    f: "+4", d: "+2", c: "+4", i: "+1", s: "+1", ca_mod: "-1",
    atq: "2 grandes garrotes +7 (2d8) o 1 peñasco (lejano) +7 (2d10)",
    traits: [
      { name: "Piel Pétrea", text: "Recibe la mitad de daño de armas cortantes y perforantes." }
    ]
  },
  {
    name: "GIGANTE DE LAS TORMENTAS (GIANT, STORM)",
    desc: "Titanes regios de piel verde marina, cabellos blancos ondeantes y voces de trueno. Respiran bajo el agua.",
    ca: 15, pg: 58, mv: "doble cercano (nadar)", nv: 12, al: "L",
    f: "+6", d: "+2", c: "+4", i: "+3", s: "+4", ca_mod: "+4",
    atq: "3 mandobles +10 (2d12) o 1 rayo",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Sangre de Tormenta", text: "Inmune a la electricidad." },
      { name: "Rayo", text: "3/día, línea de 5 pies de ancho que se extiende a distancia lejana. Todas las criaturas en la línea CD 15 DES o reciben 5d10 de daño (desventaja en la prueba si están en el agua)." }
    ]
  },
  {
    name: "GLADIADOR (GLADIATOR)",
    desc: "Guerreros veteranos curtidos en sangrientos combates de arena a muerte.",
    ca: 16, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+2", d: "+1", c: "+2", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 espadas largas +3 (1d8) o 1 lanza (contacto/cercano) +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "BOCÓN BALBUCEANTE (GIBBERING MOUTHER)",
    desc: "Una masa reptante de cieno repleta de ojos acuosos y decenas de bocas sin labios que chillan sin cesar.",
    ca: 8, pg: 21, mv: "cercano (trepar, nadar)", nv: 4, al: "N",
    f: "+2", d: "-2", c: "+3", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d8 + enganche)",
    traits: [
      { name: "Balbuceo", text: "Las criaturas a distancia cercana deben superar CD 12 SAB en su turno o realizan una acción al azar (1d8): 1-3. No hace nada, 4-5. Se mueve en dirección aleatoria, 6-7. Ataca a la criatura más cercana, 8. Huye aterrorizado." },
      { name: "Enganche", text: "Se adhiere al objetivo mordido; los mordiscos aciertan automáticamente en el siguiente asalto (CD 12 FUE en su turno para arrancárselo)." }
    ]
  },
  {
    name: "GNOLL",
    desc: "Hombres-hiena bárbaros y oportunistas que merodean en grandes manadas.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+1", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +1 (1d6) o 1 arco largo (lejano) +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "GNOMO DE LAS PROFUNDIDADES / SVIRFNEBLIN (GNOME, DEEP)",
    desc: "Feéricos de piel gris y pelo blanco del tamaño de medianos que buscan gemas y extraña flora cavernaria.",
    ca: 14, pg: 14, mv: "cercano", nv: 3, al: "L",
    f: "+2", d: "+1", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "1 pico +3 (1d6) o 1 dardo (cercano) +2 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Fundirse con la Piedra", text: "2/día, solo bajo tierra. Se vuelve invisible durante 3 asaltos." }
    ]
  },
  {
    name: "GOBLIN / TRASGO (GOBLIN)",
    desc: "Pequeño humanoide implume de piel verdosa y orejas puntiagudas.",
    ca: 11, pg: 5, mv: "cercano", nv: 1, al: "C",
    f: "+0", d: "+1", c: "+1", i: "-1", s: "-1", ca_mod: "-2",
    atq: "1 garrote +0 (1d4) o 1 arco corto (lejano) +1 (1d4)",
    traits: [
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." }
    ]
  },
  {
    name: "JEFE GOBLIN (GOBLIN, BOSS)",
    desc: "Un trasgo cubierto de cicatrices, músculos nudosos y una tosca corona de hierro.",
    ca: 14, pg: 20, mv: "cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+2", i: "-1", s: "+0", ca_mod: "+1",
    atq: "1 lanza (contacto/cercano) +3 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." }
    ]
  },
  {
    name: "CHAMÁN GOBLIN (GOBLIN, SHAMAN)",
    desc: "Un trasgo oscilante que entona cánticos grotescos con collares de dientes y una túnica de pellejos de rata mohosos.",
    ca: 12, pg: 19, mv: "cercano", nv: 4, al: "C",
    f: "+0", d: "+1", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "1 bastón +0 (1d4) o 1 conjuro +3",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Sentidos Agudos", text: "No puede ser sorprendido." },
      { name: "Mente de Insecto (Conjuro SAB)", text: "CD 13. A distancia cercana, la Inteligencia del objetivo se reduce a 1 durante 1d4 asaltos." },
      { name: "Correteo (Conjuro SAB)", text: "Personal. CD 12. Trepa como una araña durante 5 asaltos." },
      { name: "Bomba Pestilente (Conjuro SAB)", text: "CD 12. Un objetivo a distancia lejana recibe 2d4 de daño y CD 12 CON o sufre desventaja en su siguiente prueba o ataque." }
    ]
  },
  {
    name: "GÓLEM DE ARCILLA (GOLEM, CLAY)",
    desc: "Un humanoide imponente y sin rostro modelado en arcilla reluciente.",
    ca: 14, pg: 40, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "+0", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +6 (1d8)",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío, electricidad y fuentes no mágicas. El ácido le sana." },
      { name: "Maldición", text: "El daño infligido por sus embates solo puede curarse mediante un clérigo de nivel 5 o superior." }
    ]
  },
  {
    name: "GÓLEM DE CARNE (GOLEM, FLESH)",
    desc: "Una espantosa monstruosidad armada a partir de cadáveres cosidos.",
    ca: 9, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-1", s: "+1", ca_mod: "-3",
    atq: "3 embates +6 (1d8)",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío y fuentes no mágicas. La electricidad le sana." },
      { name: "Bersérker", text: "Cuando se encuentra a 20 PG o menos, gana +1 ataque de embate adicional y sus embates infligen el doble de daño." }
    ]
  },
  {
    name: "GÓLEM DE HIERRO (GOLEM, IRON)",
    desc: "Una pesada mole de hierro acorazada que chirría y desprende chispas a cada paso.",
    ca: 19, pg: 49, mv: "cercano", nv: 10, al: "N",
    f: "+5", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +8 (2d8) o 1 aliento venenoso",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de frío y fuentes no mágicas. El fuego le sana." },
      { name: "Aliento Venenoso", text: "Todas las criaturas a distancia cercana CD 15 CON o reciben 8d6 de daño." }
    ]
  },
  {
    name: "GÓLEM DE PIEDRA (GOLEM, STONE)",
    desc: "Una pesada estatua de anchas extremidades cuyos pasos hacen temblar la tierra.",
    ca: 18, pg: 40, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-2",
    atq: "3 embates +6 (1d10) y 1 lentitud",
    traits: [
      { name: "Constructor / Gólem", text: "Inmune al daño de fuego, frío, electricidad y fuentes no mágicas." },
      { name: "Lentitud", text: "A distancia lejana, un objetivo CD 15 CON o su velocidad se reduce a la mitad durante 1d4 asaltos." }
    ]
  },
  {
    name: "GÓRGONA (GORGON)",
    desc: "Un toro resoplante hecho enteramente de placas de hierro. Una nube de niebla verde emana de sus fosas nasales.",
    ca: 18, pg: 33, mv: "doble cercano", nv: 7, al: "C",
    f: "+4", d: "+0", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 cornadas +6 (2d8) o 1 carga o 1 niebla petrificante",
    traits: [
      { name: "Carga", text: "Se mueve hasta doble distancia cercana en línea recta y realiza 1 ataque de cornada. Si impacta, inflige x3 de daño." },
      { name: "Aliento Petrificante", text: "Llena un cubo de tamaño cercano adyacente a la górgona. CD 15 CON o queda petrificado permanentemente (las górgonas son inmunes)." }
    ]
  },
  {
    name: "GORILA (GORILLA)",
    desc: "Simios imponentes y poderosos que habitan en la jungla.",
    ca: 12, pg: 20, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 desgarres +5 (2d6)",
    traits: []
  },
  {
    name: "LIMO GRIS (GRAY OOZE)",
    desc: "Charcos resbaladizos y densos del color de la piedra.",
    ca: 11, pg: 9, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "+1", d: "+1", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 tentáculo +2 (1d6)",
    traits: [
      { name: "Inmune", text: "Inmune al daño de ácido, frío o fuego." },
      { name: "Corrosivo", text: "El metal no mágico que toque el limo se disuelve con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "GRICK",
    desc: "Un enorme gusano con cuatro tentáculos provistos de ventosas y un pico afilado y chasqueante.",
    ca: 14, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 pico +3 (1d8) y 1 tentáculo +3 (1d6 + presa)",
    traits: [
      { name: "Camuflaje", text: "Difícil de ver en terrenos cavernosos o rocosos." },
      { name: "Presa", text: "El objetivo queda inmovilizado. Prueba de CD 15 Fuerza en su turno para liberarse." }
    ]
  },
  {
    name: "GRIFO (GRIFFON)",
    desc: "Cazadores alados con cabeza de águila y cuerpo de león. Su presa predilecta son los caballos.",
    ca: 12, pg: 19, mv: "doble cercano (volar)", nv: 4, al: "N",
    f: "+4", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-1",
    atq: "2 desgarres +4 (1d10)",
    traits: []
  },
  {
    name: "GRIMLOW",
    desc: "Un mamífero alto de cuerpo ovalado. Unas fauces gigantescas en forma de media luna se ocultan en su vientre bajo su pelaje gris.",
    ca: 12, pg: 43, mv: "cercano", nv: 9, al: "N",
    f: "+4", d: "+2", c: "+3", i: "-3", s: "+1", ca_mod: "-2",
    atq: "1 agarre y 3 mordiscos +6 (2d8)",
    traits: [
      { name: "Agarre", text: "Un objetivo a distancia cercana CD 15 FUE o queda envuelto por la lengua del grimlow y arrastrado a su boca. Los ataques de mordisco aciertan automáticamente al objetivo agarrado. Solo puede agarrar a 1 objetivo a la vez. CD 15 FUE en su turno para liberarse." }
    ]
  },
  {
    name: "GUARDIA (GUARD)",
    desc: "Un centinela equipado con armas y armadura resistentes.",
    ca: 15, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+1", d: "+0", c: "+0", i: "+0", s: "+1", ca_mod: "+0",
    atq: "1 lanza (contacto/cercano) +1 (1d6) o 1 espada larga +1 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "BRUJA NOCTURNA (HAG, NIGHT)",
    desc: "Una mujer encorvada de piel púrpura con cabello blanco fibroso y una boca repleta de dientes de hierro.",
    ca: 14, pg: 37, mv: "cercano", nv: 8, al: "C",
    f: "+4", d: "+2", c: "+1", i: "+2", s: "+3", ca_mod: "+3",
    atq: "2 mordiscos +6 (1d10) y 1 ceguera",
    traits: [
      { name: "Ceguera", text: "Un objetivo a distancia cercana CD 15 CAR o queda ciego durante 1d4 días." },
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." }
    ]
  },
  {
    name: "BRUJA MARINA (HAG, SEA)",
    desc: "Una mujer de rostro hundido y piel verdosa, con cabello de algas y carne purulenta que habita en grutas oceánicas.",
    ca: 15, pg: 28, mv: "cercano (nadar)", nv: 6, al: "C",
    f: "+2", d: "+3", c: "+1", i: "+1", s: "+2", ca_mod: "+2",
    atq: "2 garras +4 (1d8)",
    traits: [
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." },
      { name: "Aterrorizar", text: "Una criatura que vea por primera vez su forma verdadera CD 15 CAR o sufre desventaja en ataques durante 1d4 asaltos." }
    ]
  },
  {
    name: "BRUJA DE LA MARISMA (HAG, WEALD)",
    desc: "Ojos oscuros como noches sin luna, piel de madera podrida y cabello formado por enredos de raíces y enredaderas.",
    ca: 14, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+1", i: "+1", s: "+2", ca_mod: "+3",
    atq: "2 garras +4 (1d8) o 1 beber dolor",
    traits: [
      { name: "Beber Dolor", text: "A distancia cercana. CD 12 CAR para infligir 2d4 de daño a una criatura; la bruja recupera esa misma cantidad de PG." },
      { name: "Cambiar de Forma", text: "Cambia instantáneamente de aspecto para parecer cualquier otro humanoide." }
    ]
  },
  {
    name: "HARPÍA (HARPY)",
    desc: "Mujeres aladas monstruosas con cuerpo inferior de buitre que entonan un canto hipnótico.",
    ca: 13, pg: 14, mv: "cercano (volar)", nv: 3, al: "C",
    f: "+1", d: "+3", c: "+1", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 garras +3 (1d6) o 1 canto",
    traits: [
      { name: "Canto", text: "Enemigos que puedan escucharla a doble distancia cercana CD 12 CAR o quedan aturdidos y son atraídos hacia la harpía durante 1d4 asaltos (inmunes durante 1 día si superan la prueba)." }
    ]
  },
  {
    name: "SABUESO DEL INFIERNO (HELL HOUND)",
    desc: "Loberos negros con ojos rojos como brasas y mandíbulas que gotean fuego vivo.",
    ca: 13, pg: 19, mv: "doble cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +4 (1d8) o 1 aliento de fuego",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Aliento de Fuego", text: "Llena un cubo de tamaño cercano adyacente al sabueso. CD 15 DES o 3d8 de daño (no se puede volver a usar durante 1d4 asaltos)." }
    ]
  },
  {
    name: "HIPOGRIFO (HIPPOGRIFF)",
    desc: "Criaturas aladas feroces con el cuerpo inferior de un caballo y la parte superior de un águila gigante.",
    ca: 13, pg: 14, mv: "doble cercano (volar)", nv: 3, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-3", s: "+1", ca_mod: "-2",
    atq: "2 desgarres +3 (1d8)",
    traits: []
  },
  {
    name: "HIPOPÓTAMO (HIPPOPOTAMUS)",
    desc: "Bestias de río agresivas y corpulentas del tamaño de vacas, de cuerpos redondeados y morros bulbosos.",
    ca: 12, pg: 24, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+4", d: "+0", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +4 (1d10)",
    traits: [
      { name: "Robusto", text: "Ventaja en pruebas de Fuerza para apresar o arrastrar a otras criaturas." }
    ]
  },
  {
    name: "HOBGOBLIN",
    desc: "Un trasgo alto y robusto de piel rojiza. Estricto, marcial y disciplinado.",
    ca: 15, pg: 10, mv: "cercano", nv: 2, al: "C",
    f: "+3", d: "+0", c: "+1", i: "+2", s: "+1", ca_mod: "+1",
    atq: "1 espada larga +3 (1d8) o 1 arco largo (lejano) +0 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Falange", text: "+1 a los ataques y a la CA cuando se encuentra a distancia de contacto (close) de un hobgoblin aliado." }
    ]
  },
  {
    name: "CABALLO (HORSE)",
    desc: "Animales de manada veloces y poderosos que recorren las llanuras abiertas.",
    ca: 11, pg: 11, mv: "doble cercano", nv: 2, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-2",
    atq: "1 pezuñas +3 (1d6)",
    traits: []
  },
  {
    name: "HIDRA (HYDRA)",
    desc: "Un reptil anfibio titánico con un racimo de cabezas de serpiente que se retuercen sobre largos cuellos.",
    ca: 15, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco (cercano) +6 (1d8)",
    traits: [
      { name: "Cabezas Múltiples", text: "Elige cuántas cabezas tiene la hidra. Cada una es de NV 2, CA 15, y puede hacer 1 ataque de mordisco. Una cabeza decapitada brota en dos nuevas al inicio del turno de la hidra salvo que sea cauterizada previamente con fuego o ácido. Trata el NV de la hidra como la suma de todas sus cabezas." }
    ]
  },
  {
    name: "ACECHADOR INVISIBLE (INVISIBLE STALKER)",
    desc: "Criaturas inteligentes compuestas de aire en movimiento continuo, atadas a la voluntad de hechiceros por su rastreo infalible.",
    ca: 13, pg: 29, mv: "cercano (volar)", nv: 6, al: "N",
    f: "+2", d: "+3", c: "+2", i: "+2", s: "+1", ca_mod: "+0",
    atq: "3 aporreos +4 (1d6)",
    traits: [
      { name: "Atado", text: "Una contingencia mundana secreta (como el roce de una pluma) disuelve de inmediato su servidumbre mágica." },
      { name: "Invisible", text: "Naturalmente invisible de forma permanente." },
      { name: "Rastreo", text: "Siempre percibe la dirección exacta en la que se encuentra su presa designada." }
    ]
  },
  {
    name: "MEDUSA MARINA (JELLYFISH)",
    desc: "Medusas de agua salada del tamaño de una mano con tentáculos urticantes.",
    ca: 11, pg: 1, mv: "contacto (nadar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+1", ca_mod: "-4",
    atq: "1 picadura +1 (1 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 9 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "CABALLERO (KNIGHT)",
    desc: "Un noble guerrero enfundado en armadura de placas reluciente con el sobretodo de su orden de caballería.",
    ca: 17, pg: 14, mv: "cercano", nv: 3, al: "L",
    f: "+3", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+1",
    atq: "2 espadas bastardas +3 (1d8)",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Juramento", text: "3/día, ventaja en una tirada realizada en servicio directo de su orden de caballería." }
    ]
  },
  {
    name: "KOBOLD",
    desc: "Pequeños lagartos humanoides subterráneos con hocico similar al de un cánido.",
    ca: 13, pg: 1, mv: "cercano", nv: 0, al: "C",
    f: "-2", d: "+2", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 lanza (contacto/cercano) +0 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Esquiva", text: "1/día, un ataque que fuera a impactarle falla en su lugar." }
    ]
  },
  {
    name: "HECHICERO KOBOLD (KOBOLD, SORCERER)",
    desc: "Un perro-lagarto escamoso pintado con rayas multicolores que agita un fémur ensartado con cuentas y plumas.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "C",
    f: "-2", d: "+2", c: "+0", i: "-1", s: "+1", ca_mod: "+2",
    atq: "1 garrote +1 (1d4) o 1 conjuro +2",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Esquiva", text: "1/día, un ataque que fuera a impactarle falla en su lugar." },
      { name: "Aguijón de Escorpión (Conjuro CAR)", text: "CD 11. Distancia cercana, un objetivo. 1d6 de daño y el objetivo sufre desventaja en su siguiente tirada de ataque o prueba." },
      { name: "Enjambre de Arañas (Conjuro CAR)", text: "CD 12. Un enjambre de arañas aparece a distancia cercana y permanece durante 1d4 asaltos siguiendo las órdenes del hechicero." }
    ]
  },
  {
    name: "KRAKEN",
    desc: "Leviatán tentacular primordial del tamaño de un galeón de guerra que mora en las profundidades abisales y sin luz.",
    ca: 18, pg: 80, mv: "doble cercano (nadar)", nv: 17, al: "C",
    f: "+6", d: "+3", c: "+4", i: "+4", s: "+3", ca_mod: "+4",
    atq: "4 tentáculos (cercano) +9 (2d12) o 1 tormenta o 1d4 relámpagos",
    traits: [
      { name: "Inmune", text: "Inmune a la electricidad." },
      { name: "Triturar", text: "Los ataques de tentáculo infligen el doble de daño contra estructuras y objetos." },
      { name: "Relámpago", text: "Línea recta de 5 pies de ancho que se extiende a distancia lejana. CD 15 DES o 6d6 de daño." },
      { name: "Tormenta", text: "El mar se vuelve violentamente turbulento en un radio de 1 milla alrededor del kraken durante 2d4 asaltos. Los navíos tienen 1 en 6 de zozobrar cada asalto." }
    ]
  },
  {
    name: "SANGUIJUELA GIGANTE (LEECH, GIANT)",
    desc: "Una babosa negra y brillante bebedora de sangre del tamaño de un gato.",
    ca: 9, pg: 10, mv: "cercano (nadar)", nv: 2, al: "N",
    f: "+1", d: "-1", c: "+1", i: "-3", s: "-1", ca_mod: "-3",
    atq: "1 mordisco +1 (1d4 + adherirse)",
    traits: [
      { name: "Adherirse", text: "Se fija al objetivo; el mordisco acierta automáticamente en el siguiente asalto (CD 12 FUE en su turno para arrancarla)." }
    ]
  },
  {
    name: "LEPRECHAUN",
    desc: "Feéricos traviesos vestidos de verde que disfrutan engañando a los humanos con falsas promesas de oro.",
    ca: 13, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "+1", d: "+3", c: "+1", i: "+2", s: "+1", ca_mod: "+3",
    atq: "1 conjuro +4",
    traits: [
      { name: "Alerta", text: "No puede ser sorprendido." },
      { name: "Resbaladizo", text: "Los conjuros hostiles dirigidos al leprechaun son CD 15 para ser lanzados." },
      { name: "Oro de Tontos (Conjuro CAR)", text: "CD 12. Distancia de contacto (close). Un objeto pequeño o grupo de objetos se convierte en monedas de oro o plata durante 1 día." },
      { name: "Ilusión (Conjuro CAR)", text: "CD 11. Crea una convincente ilusión visual o auditiva a distancia cercana. Dura hasta ser disipada." },
      { name: "Invisibilidad (Conjuro CAR)", text: "Personal. CD 12. Se vuelve invisible durante 2d4 asaltos." }
    ]
  },
  {
    name: "LICHE (LICH)",
    desc: "Un hechicero no-muerto de inmenso poder envuelto en ropajes de seda mohosa con luces de pantano ardiendo en sus cuencas oculares.",
    ca: 16, pg: 62, mv: "cercano", nv: 13, al: "C",
    f: "+3", d: "+1", c: "+4", i: "+4", s: "+3", ca_mod: "+3",
    atq: "2 toques +6 (2d8 + parálisis) y 2 conjuros +7",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas." },
      { name: "Filacteria", text: "No puede ser destruido permanentemente mientras su receptáculo espiritual (un objeto) permanezca intacto." },
      { name: "Parálisis", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Vuelo (Conjuro INT)", text: "Personal. CD 13. Vuela a doble distancia cercana durante 5 asaltos." },
      { name: "Nulidad (Conjuro INT)", text: "Personal. CD 14. Los conjuros hostiles contra el liche requieren CD 18 para lanzarse. Dura 1d4 asaltos." },
      { name: "Salto de Sombras (Conjuro INT)", text: "Personal. CD 14. Se teletransporta hasta a 100 millas." },
      { name: "Sello del Destino (Conjuro INT)", text: "CD 15. Un objetivo de NV 9 o inferior a distancia cercana CD 15 CON o cae a 0 PG." },
      { name: "Marchitar (Conjuro INT)", text: "CD 14. 4d8 de daño a los enemigos dentro de un cubo cercano centrado en el liche." }
    ]
  },
  {
    name: "LEÓN (LION)",
    desc: "Grandes felinos leonados que cazan en llanuras abiertas.",
    ca: 12, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+4", d: "+2", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +4 (1d8)",
    traits: []
  },
  {
    name: "HOMBRE LAGARTO (LIZARDFOLK)",
    desc: "Humanoides crocodilianos de rostros escamosos, garras y colas que habitan en pantanos y ríos.",
    ca: 14, pg: 11, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+2", i: "-1", s: "+1", ca_mod: "-2",
    atq: "1 lanza (contacto/cercano) +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." }
    ]
  },
  {
    name: "MAGO (MAGE)",
    desc: "Hechicero adiestrado que suele pertenecer a una orden o cónclave arcano.",
    ca: 11, pg: 27, mv: "cercano", nv: 6, al: "L",
    f: "-1", d: "+1", c: "+0", i: "+3", s: "+1", ca_mod: "+0",
    atq: "1 conjuro +5",
    traits: [
      { name: "Armadura Arcana (Conjuro INT)", text: "Personal. CD 12. Su CA pasa a ser 16 durante 2d4 asaltos." },
      { name: "Ráfaga (Conjuro INT)", text: "CD 12. Distancia lejana, un objetivo recibe 2d6 de daño." },
      { name: "Cancelar (Conjuro INT)", text: "CD 13. Disipa un conjuro que afecte a un objetivo a distancia cercana." },
      { name: "Levitar (Conjuro INT)", text: "CD 12. Distancia de contacto. Concentración. Flota a distancia cercana durante la duración (solo movimiento vertical)." },
      { name: "Atadura (Conjuro INT)", text: "CD 13. Concentración. Un objetivo humanoide a distancia cercana queda paralizado durante la duración." }
    ]
  },
  {
    name: "MAMUT (MAMMOTH)",
    desc: "Elefantes lanudos colosales con colmillos curvados que rozan el suelo.",
    ca: 15, pg: 44, mv: "cercano", nv: 9, al: "N",
    f: "+5", d: "+0", c: "+4", i: "-2", s: "+1", ca_mod: "+0",
    atq: "2 colmillos +7 (1d12)",
    traits: [
      { name: "Pelaje Lanudo", text: "Inmune al frío." },
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de colmillos. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "MANTARRAYA GIGANTE (MANTA RAY, GIANT)",
    desc: "Mantarrayas del tamaño de una barcaza que planean majestuosamente bajo el agua. Mansas e inteligentes.",
    ca: 13, pg: 37, mv: "doble cercano (nadar)", nv: 8, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 aguijones +5 (1d12 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "MANTÍCORA (MANTICORE)",
    desc: "Leones con rostro humano, alas de murciélago y cola con púas crueles que adoran devorar carne fresca.",
    ca: 14, pg: 29, mv: "doble cercano (volar)", nv: 6, al: "C",
    f: "+4", d: "+2", c: "+2", i: "-2", s: "+1", ca_mod: "-2",
    atq: "2 desgarres +6 (2d6) o 2 púas caudales (lejano) +4 (1d8)",
    traits: [
      { name: "Púas", text: "Posee 4d6 púas caudales que se regeneran cada día." }
    ]
  },
  {
    name: "MASTÍN (MASTIFF)",
    desc: "Perros guardianes musculosos y leales a su amo o manada.",
    ca: 11, pg: 4, mv: "cercano", nv: 1, al: "N",
    f: "+1", d: "+1", c: "+0", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +1 (1d6)",
    traits: []
  },
  {
    name: "MEDUSA",
    desc: "Mujeres inmortales de piel escamosa y una corona de serpientes vivas en lugar de cabello.",
    ca: 14, pg: 38, mv: "cercano", nv: 8, al: "C",
    f: "+2", d: "+1", c: "+2", i: "+2", s: "+3", ca_mod: "+4",
    atq: "1 mordisco de serpiente +6 (1d6 + veneno)",
    traits: [
      { name: "Linaje Divino", text: "Los conjuros hostiles dirigidos a la medusa son CD 15 para ser lanzados." },
      { name: "Petrificar", text: "Cualquier criatura (incluida la medusa) que la mire directamente a los ojos, CD 15 CON o queda petrificada." },
      { name: "Veneno", text: "CD 15 CON o cae inmediatamente a 0 PG." }
    ]
  },
  {
    name: "MERFOLK / TRITÓN (MERFOLK)",
    desc: "Habitantes marinos con torso humano y cola de pez.",
    ca: 11, pg: 9, mv: "cercano (nadar)", nv: 2, al: "L",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+1", ca_mod: "+1",
    atq: "1 lanza (contacto/cercano) +2 (1d6)",
    traits: []
  },
  {
    name: "MÍMICO (MIMIC)",
    desc: "Depredadores amorfos que adoptan la forma exacta de objetos inanimados como cofres o puertas.",
    ca: 12, pg: 23, mv: "cercano", nv: 5, al: "N",
    f: "+2", d: "+0", c: "+1", i: "-2", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +5 (1d8 + adhesivo)",
    traits: [
      { name: "Adhesivo", text: "CD 15 FUE o queda adherido al mímico; los mordiscos aciertan automáticamente en asaltos sucesivos (CD 15 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "MINOTAURO (MINOTAUR)",
    desc: "Hombres-toro feroces de pesados cuernos que habitan en laberintos subterráneos.",
    ca: 14, pg: 34, mv: "cercano", nv: 7, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+1", s: "+2", ca_mod: "+1",
    atq: "2 grandes hachas +6 (1d10) y 1 cuernos +6 (1d12)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Carga", text: "En lugar de atacar, se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuernos infligiendo x2 de daño si impacta." }
    ]
  },
  {
    name: "ALCE (MOOSE)",
    desc: "Un enorme herbívoro de pelaje marrón y astas pesadas y aplanadas.",
    ca: 11, pg: 19, mv: "doble cercano", nv: 4, al: "N",
    f: "+3", d: "+0", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 astas +3 (1d6)",
    traits: []
  },
  {
    name: "MORDANTICUS EL DESPELLEJADO (MORDANTICUS THE FLAYED)",
    desc: "Un liche-momia desollado coronado por nueve gemas brillantes. Antaño líder de la orden mágica de Gehemna, ahora sirve como consejero inmortal.",
    ca: 17, pg: 89, mv: "cercano", nv: 19, al: "N",
    f: "+4", d: "+4", c: "+4", i: "+5", s: "+4", ca_mod: "+5",
    atq: "1 toque de podredumbre +8 (1d10 + necrosis) y 3 conjuros +8",
    traits: [
      { name: "No-muerto Legendario", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra él requieren CD 18 para ser lanzados." },
      { name: "Corona de Gehemna", text: "3/día, hace fallar automáticamente un conjuro lanzado a distancia lejana." },
      { name: "Necrosis", text: "CD 15 CON o cae a 0 PG. Los conjuros curativos sobre el afectado requieren CD 15 mientras dure la necrosis." },
      { name: "Filacteria", text: "No puede ser destruido permanentemente mientras su diamante contenedor permanezca intacto." },
      { name: "Absorber (Conjuro INT)", text: "CD 13. Distancia cercana. El objetivo pierde un conjuro aleatorio hasta descansar y Mordanticus recupera uno del mismo nivel o inferior." },
      { name: "Desterrar (Conjuro INT)", text: "CD 14. Todas las criaturas extradimensionales a distancia cercana CD 15 CAR o son devueltas a sus planos de origen." },
      { name: "Atadura (Conjuro INT)", text: "CD 12. Un humanoide a distancia lejana queda paralizado durante 1d4 asaltos." },
      { name: "Deflagración (Conjuro INT)", text: "CD 14. Una criatura a distancia cercana recibe 5d8 de daño." },
      { name: "Cambio de Fase (Conjuro INT)", text: "Personal. CD 13. Se teletransporta hasta a 1 milla." },
      { name: "Nombre Verdadero (Conjuro INT)", text: "CD 15. Distancia cercana. Aprende el Nombre Verdadero del objetivo." }
    ]
  },
  {
    name: "MOMIA (MUMMY)",
    desc: "Zombi desecado envuelto en lino ritual, creado mediante complejos procesos de embalsamamiento reservados a reyes y héroes.",
    ca: 13, pg: 47, mv: "cercano", nv: 10, al: "C",
    f: "+3", d: "+0", c: "+2", i: "+3", s: "+2", ca_mod: "+3",
    atq: "3 toques de podredumbre +8 (1d10 + necrosis)",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas o fuego." },
      { name: "Desecado", text: "Sufre x2 de daño por fuego." },
      { name: "Necrosis", text: "CD 15 CON o cae a 0 PG. Los conjuros curativos requieren CD 15 mientras el objetivo sufra necrosis." }
    ]
  },
  {
    name: "HOMBRE HONGO (MUSHROOMFOLK)",
    desc: "Humanoides esponjosos y alargados con sombreros de seta en la cabeza que habitan en la penumbra.",
    ca: 13, pg: 15, mv: "cercano", nv: 3, al: "N",
    f: "+2", d: "-1", c: "+2", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 embates +2 (1d6)",
    traits: [
      { name: "Ceguera Solar", text: "Queda cegado bajo luz brillante." },
      { name: "Telepático", text: "Se comunica mentalmente con seres a doble distancia cercana." }
    ]
  },
  {
    name: "NAGA",
    desc: "Cobras hechiceras de tres metros de altura. Antaño dominaron el mundo y ahora viven amargadas y recluidas.",
    ca: 16, pg: 43, mv: "cercano (trepar)", nv: 9, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+2", s: "+2", ca_mod: "+4",
    atq: "2 mordiscos +7 (2d6 + veneno) y 1 conjuro +7",
    traits: [
      { name: "Veneno", text: "CD 15 CON o queda paralizado durante 1d4 asaltos." },
      { name: "Agonía (Conjuro CAR)", text: "CD 14. Un objetivo a distancia cercana recibe 3d8 de daño." },
      { name: "Hipnotizar (Conjuro CAR)", text: "CD 13. Concentración. Un objetivo a distancia cercana que la mire queda estupefacto e indefenso durante la duración." },
      { name: "Susurros (Conjuro CAR)", text: "CD 12. Los conjuros hostiles dirigidos contra un objetivo a distancia cercana son CD 9 durante 1d4 asaltos." }
    ]
  },
  {
    name: "NAGA ÓSEA (NAGA, BONE)",
    desc: "El armazón esquelético reanimado de una naga mediante oscura nigromancia.",
    ca: 13, pg: 31, mv: "cercano (excavar, trepar)", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+4", i: "-3", s: "+0", ca_mod: "+4",
    atq: "2 mordiscos +5 (2d6)",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." }
    ]
  },
  {
    name: "PESADILLA (NIGHTMARE)",
    desc: "Caballos de guerra negros como la pez con crines, ojos y pezuñas de fuego infernal.",
    ca: 13, pg: 29, mv: "doble cercano (volar)", nv: 6, al: "C",
    f: "+3", d: "+3", c: "+2", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 pezuñas +5 (1d8)",
    traits: [
      { name: "Inmune", text: "Tanto la pesadilla como su jinete son inmunes al fuego." }
    ]
  },
  {
    name: "OBE-IXX DE AZARUMME (OBE-IXX OF AZARUMME)",
    desc: "La ur-vampira ancestral enfundada en armadura de quitina de escorpión translúcida. La sed de sangre hecha carne.",
    ca: 18, pg: 76, mv: "cercano (trepar, volar)", nv: 16, al: "C",
    f: "+5", d: "+3", c: "+4", i: "+3", s: "+4", ca_mod: "+5",
    atq: "4 mandobles (cercano) +11 (1d12 + 2 + mordisco lunar) y 1 mordisco +9 (1d8 + drenaje de sangre) y 1 hechizo",
    traits: [
      { name: "Armadura", text: "Placas +3." },
      { name: "No-muerto Legendario", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra ella requieren CD 18 para lanzarse." },
      { name: "Drenaje de Sangre", text: "Obe-Ixx se cura 2d8 PG y el objetivo pierde 1d6 CON. Al llegar a 0 CON muere y se alza como vampiro o engendro leal." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana que la vea CD 15 CAR o queda bajo su control durante 1d4 días." },
      { name: "Propiedades de Mordisco Lunar", text: "Mandoble +2 arrojadizo que regresa solo. Los conjuros para curar el daño que inflige requieren CD 15." },
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en murciélago gigante, lobo huargo o vuelve a su forma original." },
      { name: "Ur-Vampiro", text: "Debe dormir en su sarcófago al menos una vez por ciclo lunar o pierde 2d8 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si a 0 PG se le clava en el corazón una estaca tallada en madera de la jungla de Tal-Yool." }
    ]
  },
  {
    name: "GELATINA OCRE (OCHRE JELLY)",
    desc: "Un charco anaranjado de fango trémulo y devorador.",
    ca: 9, pg: 20, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "-1", c: "+2", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 tentáculos +3 (1d6)",
    traits: [
      { name: "División", text: "Si recibe daño cortante, se divide en dos limos más pequeños dividiendo sus PG restantes entre ambos (hasta cuatro divisiones)." }
    ]
  },
  {
    name: "PULPO GIGANTE (OCTOPUS, GIANT)",
    desc: "Cefalópodos del tamaño de esquifes marinos con tentáculos prensiles.",
    ca: 13, pg: 23, mv: "cercano (nadar)", nv: 5, al: "N",
    f: "+3", d: "+3", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 tentáculos (cercano) +4 (1d8 + presa)",
    traits: [
      { name: "Presa", text: "CD 15 FUE o queda inmovilizado; el tentáculo impacta automáticamente cada asalto (CD 15 FUE en su turno para liberarse)." },
      { name: "Tinta", text: "En lugar de atacar, expulsa una nube de tinta que ciega a todos a distancia cercana durante 1d4 asaltos." }
    ]
  },
  {
    name: "OGRO (OGRE)",
    desc: "Un bruto descomunal, lerdo y pesado armado con un garrote tosco que a menudo lidera a trasgos u orcos.",
    ca: 9, pg: 30, mv: "cercano", nv: 6, al: "C",
    f: "+4", d: "-1", c: "+3", i: "-2", s: "-2", ca_mod: "-2",
    atq: "2 grandes garrotes +6 (2d6)",
    traits: []
  },
  {
    name: "ONI",
    desc: "Demonios ogro hechiceros de piel azulada, cabello blanco y ojos amarillos.",
    ca: 11, pg: 33, mv: "cercano", nv: 7, al: "C",
    f: "+5", d: "+1", c: "+2", i: "+2", s: "+1", ca_mod: "+3",
    atq: "1 guja (cercano) +6 (1d10) o 1 conjuro +5",
    traits: [
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en cualquier humanoide o vuelve a su forma natural." },
      { name: "Desvanecer (Conjuro CAR)", text: "Personal. CD 13. Se vuelve invisible durante 1d4 asaltos." },
      { name: "Helada Infernal (Conjuro CAR)", text: "CD 13. Todos dentro de un cubo cercano que emana del oni reciben 3d6 de daño." },
      { name: "Niebla (Conjuro CAR)", text: "Personal. CD 13. Se convierte en niebla que vuela a doble distancia cercana durante 2d4 asaltos." }
    ]
  },
  {
    name: "ORCO (ORC)",
    desc: "Humanoides altos y provistos de colmillos, de piel grisácea y orejas puntiagudas.",
    ca: 15, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+2", d: "+0", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "1 gran hacha +2 (1d8)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "CAUDILLO ORCO (ORC, CHIEFTAIN)",
    desc: "Un orco imponente cuyo cuerpo está cubierto de cicatrices de guerra cruzadas.",
    ca: 14, pg: 19, mv: "cercano", nv: 4, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 grandes hachas +4 (1d10)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "Furia", text: "1/día, inmune a tiradas de moral y +1d4 al daño durante 3 asaltos." }
    ]
  },
  {
    name: "OTYUGH",
    desc: "Bestias achaparradas de tres patas con tentáculos espinosos y fauces enormes, atraídas por la podredumbre y la inmundicia.",
    ca: 13, pg: 35, mv: "cercano", nv: 7, al: "N",
    f: "+4", d: "-1", c: "+4", i: "-2", s: "+0", ca_mod: "-3",
    atq: "2 tentáculos +5 (1d8) y 1 mordisco +5 (1d10 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 15 CON o queda infectado. CD 15 CON cada día o pierde 1d6 PG que no se pueden curar hasta que se supere la prueba." }
    ]
  },
  {
    name: "LIMO PRIMORDIAL (PRIMORDIAL SLIME)",
    desc: "Una masa de limo transparente que emite pulsos enfermizos de luz violeta.",
    ca: 9, pg: 30, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 tentáculos +4 (1d10 + disolver)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuego." },
      { name: "Disolver", text: "Una pieza aleatoria de equipo no mágico portada por el objetivo es destruida." }
    ]
  },
  {
    name: "CAMINANTE DE ESCARCHA (RIME WALKER)",
    desc: "Seres con forma humana formados a partir de hielo espacial negro, con ojos que son dos luces blancas parpadeantes.",
    ca: 16, pg: 43, mv: "cercano (volar)", nv: 9, al: "C",
    f: "+4", d: "+4", c: "+3", i: "+2", s: "+2", ca_mod: "+2",
    atq: "4 garras +8 (1d12)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Aura Gélida", text: "Los enemigos a distancia cercana deben superar CD 12 CON al inicio de su turno o pierden su acción." }
    ]
  },
  {
    name: "ENGENDRO DEL VACÍO (VOID SPAWN)",
    desc: "Extremidades semejantes a guadañas surgen de un bulbo púrpura del tamaño de un ogro. Su mitad inferior es un nido de tentáculos.",
    ca: 13, pg: 34, mv: "cercano (volar)", nv: 7, al: "C",
    f: "+4", d: "+1", c: "+3", i: "+0", s: "+1", ca_mod: "-1",
    atq: "2 guadañas +6 (1d10) y 1 tentáculos (1d12 + toxina)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Toxina", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "ARAÑA DEL VACÍO (VOID SPIDER)",
    desc: "Arácnidos pálidos del tamaño de caballos capaces de volverse fantasmales e intangibles.",
    ca: 13, pg: 23, mv: "cercano (trepar)", nv: 5, al: "C",
    f: "+3", d: "+3", c: "+1", i: "-1", s: "+1", ca_mod: "-2",
    atq: "2 mordiscos +4 (1d8 + veneno)",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Desplazamiento de Fase", text: "Una vez por asalto, puede pasar a ser corpórea o incorpórea." },
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "OSOLECHUZA / OSOCHUZA (OWLBEAR)",
    desc: "Osos huraños y agresivos con ojos, pico y plumas de lechuza.",
    ca: 13, pg: 30, mv: "cercano (trepar)", nv: 6, al: "N",
    f: "+4", d: "+1", c: "+3", i: "-2", s: "+2", ca_mod: "-3",
    atq: "2 garras +5 (1d10)",
    traits: [
      { name: "Aplastamiento", text: "Inflige un dado de daño adicional si impacta al mismo objetivo con ambas garras." }
    ]
  },
  {
    name: "PANTERA (PANTHER)",
    desc: "Grandes felinos ágiles de pelaje negro azulado. Cazadores sigilosos.",
    ca: 14, pg: 14, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+3", d: "+4", c: "+1", i: "-2", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +3 (1d6)",
    traits: []
  },
  {
    name: "CAMPESINO (PEASANT)",
    desc: "Un plebeyo común vestido con ropas desgastadas.",
    ca: 10, pg: 4, mv: "cercano", nv: 1, al: "L",
    f: "+0", d: "+0", c: "+0", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 garrote +0 (1d4)",
    traits: []
  },
  {
    name: "PEGASO (PEGASUS)",
    desc: "Caballos alados de porte noble y pelaje blanco perlado.",
    ca: 12, pg: 15, mv: "doble cercano (volar)", nv: 3, al: "N",
    f: "+3", d: "+2", c: "+2", i: "-3", s: "+1", ca_mod: "+0",
    atq: "2 pezuñas +3 (1d6)",
    traits: []
  },
  {
    name: "FÉNIX (PHOENIX)",
    desc: "Enormes águilas compuestas de fuego abrasador. Inteligentes e imbuidas de magia inmortal.",
    ca: 16, pg: 60, mv: "doble cercano (volar)", nv: 13, al: "L",
    f: "+3", d: "+4", c: "+2", i: "+3", s: "+3", ca_mod: "+3",
    atq: "4 desgarres +8 (2d12)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. Solo recibe daño de fuentes mágicas." },
      { name: "Explosión", text: "Al morir, las criaturas a doble distancia cercana CD 18 DES o reciben 10d6 de daño." },
      { name: "Aura Ardiente", text: "Las criaturas a distancia cercana al inicio de su turno CD 15 CON o reciben 2d6 de daño." },
      { name: "Renacer", text: "Tras morir deja un huevo al rojo vivo del cual eclosiona de nuevo en 1d4 días." }
    ]
  },
  {
    name: "ENJAMBRE DE PIRAÑAS (PIRANHA, SWARM)",
    desc: "Un banco de peces plateados y aplanados armados con colmillos despiadados.",
    ca: 12, pg: 13, mv: "cercano (nadar)", nv: 3, al: "N",
    f: "-2", d: "+2", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +2 (1d6)",
    traits: [
      { name: "Salvajismo", text: "Ventaja en ataques contra criaturas que se encuentren por debajo de la mitad de sus PG máximos." }
    ]
  },
  {
    name: "PIRATA (PIRATE)",
    desc: "Rufianes de alta mar cuya vida se centra en asaltar y acumular tesoros.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 alfanje / sable +1 (1d6) o 1 daga (contacto/cercano) +1 (1d4)",
    traits: [
      { name: "Armadura", text: "Cuero." }
    ]
  },
  {
    name: "CLÉRIGO / SACERDOTE (PRIEST)",
    desc: "Un miembro respetado del clero que guía ritos y rituales sagrados.",
    ca: 15, pg: 23, mv: "cercano", nv: 5, al: "L",
    f: "+1", d: "+0", c: "+1", i: "+0", s: "+2", ca_mod: "+1",
    atq: "2 mazas +3 (1d6) o 1 conjuro +3",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." },
      { name: "Ungir (Conjuro SAB)", text: "CD 12. Contacto. Un arma o armadura se convierte en versión mágica +2 durante 10 asaltos." },
      { name: "Toque Sanador (Conjuro SAB)", text: "CD 11. Cura 2d4 PG a una criatura a distancia de contacto." },
      { name: "Llama Sagrada (Conjuro SAB)", text: "Personal. CD 13. Sus armas se encienden en llamas mágicas e infligen +1d6 de daño adicional durante 5 asaltos." },
      { name: "Reprensión (Conjuro SAB)", text: "CD 13. Concentración. Las criaturas caóticas no pueden atacar al clérigo ni acercarse a distancia cercana mientras dure el efecto." }
    ]
  },
  {
    name: "GUSANO PÚRPURA (PURPLE WORM)",
    desc: "Un descomunal gusano tan alto como la torre de un castillo, cubierto de quitina púrpura y con unas fauces circulares giratorias.",
    ca: 18, pg: 57, mv: "doble cercano (excavar)", nv: 12, al: "N",
    f: "+5", d: "+1", c: "+3", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +9 (2d12 + engullir) y 1 aguijón (1d10 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o cae a 0 PG." },
      { name: "Engullir", text: "Con un 18-20 natural en el ataque, el objetivo es engullido. Oscuridad total en el interior y 2d10 de daño por asalto. El gusano regurgita a todos los engullidos si recibe al menos 20 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "RAKSHASA",
    desc: "Ilusionistas demoníacos cuya verdadera forma es la de un gran felino humanoide con las palmas de las manos invertidas hacia atrás.",
    ca: 16, pg: 39, mv: "cercano", nv: 8, al: "C",
    f: "+1", d: "+3", c: "+3", i: "+3", s: "+3", ca_mod: "+4",
    atq: "2 garras +6 (1d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas. Inmune a conjuros hostiles de nivel 3 o inferior." },
      { name: "Mesmerismo", text: "Puede leer la mente de todas las criaturas a distancia cercana y adoptar instantáneamente la apariencia ilusoria de cualquier humanoide." },
      { name: "Debilidad", text: "Un virote de ballesta bajo los efectos del conjuro arma sagrada mata al rakshasa en el acto." }
    ]
  },
  {
    name: "RATA (RAT)",
    desc: "Roedores desgarbados y portadores de plagas que infestan las profundidades subterráneas.",
    ca: 10, pg: 1, mv: "cercano", nv: 0, al: "N",
    f: "-3", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +0 (1 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 9 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATA GIGANTE (RAT, GIANT)",
    desc: "Ratas astutas del tamaño de gatos con pelaje sarnoso y colas semejantes a gusanos.",
    ca: 11, pg: 5, mv: "cercano", nv: 1, al: "N",
    f: "-2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +1 (1d4 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 12 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATA TEMIBLE (RAT, DIRE)",
    desc: "Ratas salvajes del tamaño de niños con crestas óseas en el cráneo y el lomo.",
    ca: 12, pg: 10, mv: "cercano", nv: 2, al: "N",
    f: "+1", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +2 (1d6 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 12 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "ENJAMBRE DE RATAS (RAT, SWARM)",
    desc: "Una marea chillona y envolvente de ratas que muerden y arañan frenéticamente.",
    ca: 10, pg: 28, mv: "cercano", nv: 6, al: "N",
    f: "-3", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "4 mordiscos +0 (1 + enfermedad)",
    traits: [
      { name: "Enfermedad", text: "CD 9 CON o sufre 1d4 de daño a CON (no puede sanar mientras esté enfermo). Repite la prueba una vez al día; termina al tener éxito. Muere a 0 CON." }
    ]
  },
  {
    name: "RATHGAMNON",
    desc: "Un león blanco perlado de 6 metros de altura con alas plumosas. Es el sirviente más poderoso de Madeera del Pacto; sus ojos ciegos observan las profundidades del tiempo y el espacio.",
    ca: 17, pg: 89, mv: "doble cercano (volar)", nv: 19, al: "L",
    f: "+5", d: "+3", c: "+4", i: "+5", s: "+6", ca_mod: "+5",
    atq: "2 desgarres (cercano) +9 (2d10) y 2 conjuros +8",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles contra Rathgamnon requieren CD 18 para ser lanzados." },
      { name: "Rugido", text: "En lugar de atacar, todas las criaturas que puedan escucharlo a distancia lejana CD 18 CAR o quedan ciegas y mudas durante 1d4 días." },
      { name: "Abjurar (Conjuro SAB)", text: "Personal. CD 13. Disipa cualquier efecto mágico hostil que le afecte." },
      { name: "Abolir (Conjuro SAB)", text: "CD 13. Un objetivo a distancia lejana recibe 5d8 de daño." },
      { name: "Anclar (Conjuro SAB)", text: "CD 14. Un objetivo a distancia lejana CD 18 FUE o queda atado y anclado por cadenas de runas doradas durante 1d4 asaltos." },
      { name: "Portal (Conjuro SAB)", text: "CD 14. Abre un portal a distancia cercana hacia cualquier ubicación de cualquier plano durante 1d6 asaltos." },
      { name: "Presagio (Conjuro SAB)", text: "CD 14. Dura 2d4 asaltos. Un objetivo a distancia cercana tiene ventaja o desventaja en todas sus tiradas de ataque y pruebas." },
      { name: "Detener el Tiempo (Conjuro SAB)", text: "Personal. CD 15. El tiempo se congela para todos excepto Rathgamnon durante 1d4 asaltos. Todo lo sucedido durante la congelación se resuelve simultáneamente al terminar el conjuro." }
    ]
  },
  {
    name: "DESPOJADOR / CABALLERO NEGRO (REAVER)",
    desc: "Un caballero siniestro embutido en armadura ennegrecida repleta de crueles púas y pinchos.",
    ca: 17, pg: 28, mv: "cercano", nv: 6, al: "C",
    f: "+3", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+2",
    atq: "3 espadas bastardas +4 (1d8 + 2)",
    traits: [
      { name: "Armadura", text: "Placas + escudo." },
      { name: "Sed de Sangre", text: "+2 al daño con armas cuerpo a cuerpo (incluido)." }
    ]
  },
  {
    name: "REMORHAZ",
    desc: "Ciempiés colosales de color azul con capuchas en el cuello y espinas dorsales al rojo vivo que habitan en regiones glaciares.",
    ca: 16, pg: 47, mv: "cercano (excavar)", nv: 10, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +7 (2d6 + engullir)",
    traits: [
      { name: "Inmune", text: "Inmune al frío y al fuego." },
      { name: "Fundir", text: "Los objetos de metal no mágicos que toquen al remorhaz se funden con un resultado de 1-3 en 1d6." },
      { name: "Engullir", text: "Con un 18-20 natural en el ataque, el objetivo es engullido. Oscuridad total en el interior y 2d10 de daño por asalto. Regurgita a todos si recibe al menos 20 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "RINOCERONTE (RHINOCEROS)",
    desc: "Pesados cuadrúpedos de piel grisácea con un imponente cuerno sobre el morro. Habitan en pastizales y sabanas.",
    ca: 14, pg: 25, mv: "cercano", nv: 5, al: "N",
    f: "+4", d: "-1", c: "+3", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 cuernos +4 (1d8)",
    traits: [
      { name: "Carga", text: "Se mueve hasta el doble de distancia cercana en línea recta y realiza 1 ataque de cuerno. Si impacta, inflige x3 de daño." }
    ]
  },
  {
    name: "ROC",
    desc: "Aves rapaces gigantescas del tamaño de dragones que anidan en las cumbres montañosas más inaccesibles.",
    ca: 15, pg: 69, mv: "doble cercano (volar)", nv: 15, al: "N",
    f: "+5", d: "+3", c: "+2", i: "-2", s: "+2", ca_mod: "-2",
    atq: "4 desgarres +9 (2d10 + presa)",
    traits: [
      { name: "Presa", text: "CD 18 FUE o el objetivo queda apresado (CD 18 FUE en su turno para liberarse)." }
    ]
  },
  {
    name: "ROPER / ESTRANGULADOR DE CAVERNA (ROPER)",
    desc: "Monstruosidades voraces que semejan estalagmitas o rocas de caverna cuando mantienen su único ojo y fauces cerrados.",
    ca: 14, pg: 31, mv: "contacto (trepar)", nv: 6, al: "N",
    f: "+3", d: "-2", c: "+4", i: "-1", s: "+2", ca_mod: "+1",
    atq: "4 tentáculos (doble cercano) +4 (1d6 + presa) y 1 mordisco +4 (2d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." },
      { name: "Presa", text: "CD 15 FUE o el objetivo queda atrapado; el tentáculo impacta automáticamente en el siguiente asalto (CD 15 FUE en su turno para liberarse)." },
      { name: "Arrastrar", text: "En lugar de un ataque de tentáculo, arrastra a un objetivo apresado una distancia cercana hacia sí." },
      { name: "Tentáculos", text: "Tiene 4 tentáculos en total (CA 18 cada uno). 4+ de daño a un tentáculo lo corta." }
    ]
  },
  {
    name: "FLOR DE LA PODREDUMBRE (ROT FLOWER)",
    desc: "Flores carnívoras del tamaño de un humano que despiden un nauseabundo olor a carroña.",
    ca: 9, pg: 10, mv: "ninguno", nv: 2, al: "N",
    f: "+1", d: "-3", c: "+1", i: "-4", s: "-3", ca_mod: "-4",
    atq: "1 mordisco +1 (1d4 + toxina)",
    traits: [
      { name: "Toxina", text: "CD 12 CON o queda inconsciente durante 1d4 asaltos." }
    ]
  },
  {
    name: "MONSTRUO DEL ÓXIDO (RUST MONSTER)",
    desc: "Un insectoide de color pardo del tamaño de un lobo con dos largas antenas plumosas. Se alimenta devorando metal.",
    ca: 13, pg: 19, mv: "cercano (trepar)", nv: 4, al: "N",
    f: "+2", d: "+3", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 garras +3 (1d6)",
    traits: [
      { name: "Corrosivo", text: "El metal que toque al monstruo del óxido se destruye con un resultado de 1-3 en 1d6." }
    ]
  },
  {
    name: "SAHUAGIN",
    desc: "Humanoides de piel verde marina, extremidades palmeadas y dientes de tiburón. Cazadores submarinos implacables.",
    ca: 14, pg: 9, mv: "cercano (nadar)", nv: 2, al: "C",
    f: "+1", d: "+1", c: "+0", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 tridentes (cercano) +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." },
      { name: "Semi-Anfibio", text: "Debe sumergirse en agua al menos una vez cada 4 horas o empieza a asfixiarse." }
    ]
  },
  {
    name: "SALAMANDRA (SALAMANDER)",
    desc: "Hombres-lagarto de color ígneo con largas colas y crestas llameantes a lo largo del lomo.",
    ca: 13, pg: 24, mv: "cercano", nv: 5, al: "C",
    f: "+2", d: "+0", c: "+2", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 lanzas llameantes (contacto/cercano) +4 (1d6, prende inflamables) o 1 arco largo de hierro (lejano) +2 (1d8)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego." },
      { name: "Aura de Calor", text: "Las criaturas a distancia de contacto CD 12 CON en su turno o reciben 1d8 de daño." }
    ]
  },
  {
    name: "ENJAMBRE DE ESCARABAJOS (SCARAB, SWARM)",
    desc: "Una nube chasqueante de escarabajos ovalados de caparazón iridiscente.",
    ca: 13, pg: 14, mv: "cercano (volar)", nv: 3, al: "N",
    f: "-1", d: "+3", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d6)",
    traits: []
  },
  {
    name: "ESPANTAPÁJAROS (SCARECROW)",
    desc: "Ropajes raídos y una cabeza de arpillera rellena de paja, poseída por un espíritu malévolo.",
    ca: 12, pg: 15, mv: "cercano", nv: 3, al: "C",
    f: "+2", d: "+2", c: "+2", i: "+0", s: "+0", ca_mod: "+2",
    atq: "2 garras +2 (1d6) o 1 chillido",
    traits: [
      { name: "Chillido", text: "Las criaturas que lo escuchen a doble distancia cercana CD 12 CAR o quedan paralizadas durante 1d4 asaltos." }
    ]
  },
  {
    name: "ESCORPIÓN (SCORPION)",
    desc: "Arácnidos del desierto provistos de pinzas y un aguijón curvo en la cola.",
    ca: 11, pg: 1, mv: "cercano (trepar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 aguijón +1 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o cae a 0 PG." }
    ]
  },
  {
    name: "ESCORPIÓN GIGANTE (SCORPION, GIANT)",
    desc: "Escorpiones acorazados de quitina gruesa del tamaño de camellos.",
    ca: 14, pg: 13, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+2", d: "+2", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 pinza +2 (1d6 + presa) y 1 aguijón +2 (1d4 + veneno)",
    traits: [
      { name: "Presa", text: "CD 12 FUE o el objetivo queda apresado (CD 12 FUE en su turno para liberarse)." },
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG." }
    ]
  },
  {
    name: "SOMBRA (SHADOW)",
    desc: "Sombras conscientes y ondulantes con una vaga silueta humanoide que se deslizan en silencio.",
    ca: 12, pg: 15, mv: "cercano (volar)", nv: 3, al: "C",
    f: "-4", d: "+2", c: "+2", i: "-2", s: "+0", ca_mod: "-1",
    atq: "2 toques +2 (1d4 + drenaje)",
    traits: [
      { name: "Drenaje de Fuerza", text: "CD 12 CON o la Fuerza del objetivo se reduce en 1. A 0 FUE, el objetivo muere y se transforma en una sombra." }
    ]
  },
  {
    name: "TÚMULO RODANTE (SHAMBLING MOUND)",
    desc: "Masas fétidas de vegetación cenagosa animadas por el impacto de un relámpago.",
    ca: 14, pg: 20, mv: "cercano", nv: 4, al: "N",
    f: "+3", d: "-2", c: "+2", i: "-3", s: "+0", ca_mod: "-3",
    atq: "2 embates +3 (1d6 + engullir)",
    traits: [
      { name: "Inmune", text: "Inmune al fuego. La electricidad le sana." },
      { name: "Engullir", text: "Si un objetivo es impactado por ambos embates en el mismo asalto, queda atrapado en el interior de su cuerpo y se asfixia en 2d4 asaltos (CD 15 FUE en su turno para escapar)." }
    ]
  },
  {
    name: "TIBURÓN (SHARK)",
    desc: "Depredador alfa marino, rápido y sanguinario, de cuerpo gris hidrodinámico.",
    ca: 11, pg: 15, mv: "cercano (nadar)", nv: 3, al: "N",
    f: "+3", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d10)",
    traits: []
  },
  {
    name: "MEGALODÓN (SHARK, MEGALODON)",
    desc: "Tiburones primordiales del tamaño de ballenas gigantes.",
    ca: 13, pg: 38, mv: "doble cercano (nadar)", nv: 8, al: "N",
    f: "+5", d: "+1", c: "+2", i: "-3", s: "+1", ca_mod: "-3",
    atq: "3 mordiscos +7 (2d8)",
    traits: [
      { name: "Sin Miedo", text: "Inmune a tiradas de moral." }
    ]
  },
  {
    name: "SIRENA (SIREN)",
    desc: "Feéricos funestos con alas de paloma y escamas iridiscentes cuyo canto cautiva y hechiza a los mortales.",
    ca: 12, pg: 18, mv: "cercano (nadar, volar)", nv: 4, al: "C",
    f: "+0", d: "+2", c: "+0", i: "+2", s: "+2", ca_mod: "+4",
    atq: "2 garras +2 (1d6) o 1 canto",
    traits: [
      { name: "Canto", text: "Los enemigos que puedan escucharla a doble distancia cercana CD 15 CAR o quedan paralizados durante 1d4 asaltos (inmunes durante 1 día si superan la prueba)." }
    ]
  },
  {
    name: "ESQUELETO (SKELETON)",
    desc: "Un esqueleto humanoide de huesos blanqueados con dos puntos rojos brillantes en las cuencas oculares.",
    ca: 13, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+1", d: "+0", c: "+2", i: "-2", s: "+0", ca_mod: "-1",
    atq: "1 espada corta +1 (1d6) o 1 arco corto (lejano) +0 (1d4)",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "No-muerto", text: "Inmune a tiradas de moral." }
    ]
  },
  {
    name: "ESMILODONTE / DIENTES DE SABLE (SMILODON)",
    desc: "Tigres prehistóricos provistos de largos colmillos curvados como dagas.",
    ca: 12, pg: 14, mv: "cercano", nv: 3, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 mordiscos +3 (1d6)",
    traits: []
  },
  {
    name: "COBRA (SNAKE, COBRA)",
    desc: "Serpiente ondulante con capucha cervical ensanchada y veneno letal.",
    ca: 12, pg: 4, mv: "cercano", nv: 1, al: "N",
    f: "-3", d: "+2", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 mordisco +2 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 18 CON o cae a 0 PG con un contador de muerte fijado en 1." }
    ]
  },
  {
    name: "SERPIENTE GIGANTE (SNAKE, GIANT)",
    desc: "Un enorme ofidio moteado capaz de engullir una res entera.",
    ca: 12, pg: 23, mv: "cercano (trepar)", nv: 5, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 mordiscos +4 (1d6) y 1 constricción (cercano)",
    traits: [
      { name: "Constricción", text: "Prueba enfrentada de Fuerza para mantener al objetivo inmovilizado durante un asalto." }
    ]
  },
  {
    name: "ENJAMBRE DE SERPIENTES (SNAKE, SWARM)",
    desc: "Una marea viva de serpientes que serpentean y fluyen rápidamente por el suelo.",
    ca: 12, pg: 19, mv: "cercano", nv: 4, al: "N",
    f: "-3", d: "+2", c: "+1", i: "-3", s: "+0", ca_mod: "-3",
    atq: "3 mordiscos +2 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o cae a 0 PG en 1d4 asaltos." }
    ]
  },
  {
    name: "SOLDADO (SOLDIER)",
    desc: "Un infante armado e instruido en tácticas de combate militar en formación.",
    ca: 15, pg: 10, mv: "cercano", nv: 2, al: "L",
    f: "+1", d: "+0", c: "+1", i: "+0", s: "+0", ca_mod: "+0",
    atq: "1 espada larga +2 (1d8) o 1 ballesta (lejano) +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cota de malla + escudo." }
    ]
  },
  {
    name: "ESFINGE (SPHINX)",
    desc: "Un oráculo leonino alado que puede escrutar el tiempo y el espacio, y que suele expresarse mediante enigmas y acertijos.",
    ca: 16, pg: 42, mv: "doble cercano (volar)", nv: 9, al: "L",
    f: "+4", d: "+1", c: "+2", i: "+4", s: "+4", ca_mod: "+3",
    atq: "3 garras +7 (1d10) o 2 conjuros +5",
    traits: [
      { name: "Rugido", text: "En lugar de atacar, todas las criaturas que puedan escucharla a distancia lejana CD 18 CAR o quedan paralizadas durante 1d4 asaltos." },
      { name: "Portal (Conjuro SAB)", text: "CD 14. Abre un portal a distancia cercana hacia cualquier punto de cualquier plano durante 1d6 asaltos." },
      { name: "Presagios (Conjuro SAB)", text: "Personal. CD 12. Ventaja en todas sus acciones durante 1d4 asaltos." },
      { name: "Acertijo (Conjuro SAB)", text: "CD 12. Un objetivo a distancia lejana CD 15 INT o queda estupefacto durante 1d4 asaltos." },
      { name: "Doblar el Tiempo (Conjuro SAB)", text: "CD 14. Un objetivo a distancia cercana queda congelado en el tiempo durante 1d4 asaltos." },
      { name: "Deshacer (Conjuro SAB)", text: "CD 13. Un objetivo a distancia lejana recibe 3d8 de daño." }
    ]
  },
  {
    name: "ARAÑA (SPIDER)",
    desc: "Arácnidos silenciosos tejedores de telarañas cuyo veneno disuelve la carne.",
    ca: 11, pg: 1, mv: "cercano (trepar)", nv: 0, al: "N",
    f: "-4", d: "+1", c: "+0", i: "-4", s: "+0", ca_mod: "-4",
    atq: "1 mordisco +1 (1 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o recibe 1d4 de daño." }
    ]
  },
  {
    name: "ARAÑA GIGANTE (SPIDER, GIANT)",
    desc: "Arácnido de abdomen bulboso y ocho patas delgadas que acecha en árboles o cuevas para emboscar presas.",
    ca: 13, pg: 13, mv: "cercano (trepar)", nv: 3, al: "N",
    f: "+2", d: "+3", c: "+0", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +3 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 horas." }
    ]
  },
  {
    name: "ENJAMBRE DE ARAÑAS (SPIDER, SWARM)",
    desc: "Una alfombra viva y trepadora de arañas que se dispersa rápidamente.",
    ca: 13, pg: 9, mv: "cercano (trepar)", nv: 2, al: "N",
    f: "-1", d: "+3", c: "+0", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 mordisco +3 (1d4 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 12 CON o queda paralizado durante 1d4 asaltos." }
    ]
  },
  {
    name: "MURCIÉLAGO AGUIJÓN (STINGBAT)",
    desc: "Un híbrido veloz de insecto y murciélago de color naranja con cuatro alas y un pico similar a una aguja.",
    ca: 12, pg: 4, mv: "cercano (volar)", nv: 1, al: "N",
    f: "-2", d: "+2", c: "+0", i: "-2", s: "+0", ca_mod: "-2",
    atq: "1 pico +2 (1d4 + drenaje de sangre)",
    traits: [
      { name: "Drenaje de Sangre", text: "Se adhiere al objetivo picado acertando automáticamente en el siguiente asalto (CD 9 FUE en su turno para retirarlo)." }
    ]
  },
  {
    name: "ESTRANGULADOR (STRANGLER)",
    desc: "Criatura demacrada de piel grisácea con cuatro extremidades largas y correosas rematadas en garras con ventosas.",
    ca: 12, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "-2", d: "+2", c: "+1", i: "-2", s: "+0", ca_mod: "-2",
    atq: "2 garras +2 (1d6)",
    traits: [
      { name: "Sigiloso", text: "Ventaja en pruebas de Destreza para ocultarse y moverse en silencio." },
      { name: "Estrangular", text: "Inflige x2 de daño contra criaturas sorprendidas." }
    ]
  },
  {
    name: "EL ORÁCULO DE DIEZ OJOS (THE TEN-EYED ORACLE)",
    desc: "Una masa flotante de piel gomosa incrustada de percebes. Sus diez pedúnculos oculares se retuercen como serpientes y una cicatriz circular ciega su gran ojo central sobre unas fauces sin labios.",
    ca: 17, pg: 85, mv: "cercano (volar)", nv: 18, al: "C",
    f: "+4", d: "+5", c: "+4", i: "+5", s: "+4", ca_mod: "+4",
    atq: "2d4 rayos de pedúnculo ocular",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Rayos Oculares", text: "Cada rayo se dispara 1 vez por asalto contra una criatura u objeto de hasta 1.000 libras (máximo 4 rayos al mismo objetivo). 1. Hechizo: CD 15 CAR o se convierte en aliado 1d4 asaltos. 2. Retener: CD 15 FUE o paralizado 1d4 asaltos. 3. Sueño: CD 15 SAB o dormido 1d4 asaltos. 4. Polimorfia: CD 15 INT o transformado en alimaña 1d4 asaltos. 5. Cancelar: CD 15 DES o terminan todos los efectos mágicos en el objetivo. 6. Confusión: CD 15 SAB o ataca a un aliado al azar a distancia cercana. 7. Telequinesis: CD 15 FUE o levita al objetivo hasta doble distancia cercana. 8. Desintegrar: CD 15 DES o 5d8 daño (objeto destruido). 9. Petrificar: CD 15 CON o petrificado. 10. Muerte: CD 15 CON o cae a 0 PG con contador de muerte en 1." }
    ]
  },
  {
    name: "EL TARRASCA (THE TARRASQUE)",
    desc: "Un descomunal reptil cuadrúpedo con mandíbulas de cocodrilo, escamas de ámbar y un caparazón espinoso duro como el diamante. Se alza como una montaña capaz de tragar aldeas enteras.",
    ca: 22, pg: 140, mv: "triple cercano (excavar, nadar)", nv: 30, al: "N",
    f: "+7", d: "+2", c: "+5", i: "-3", s: "+1", ca_mod: "-3",
    atq: "4 azotes (cercano) +13 (3d10 + cercenar) y 1 mordisco (cercano) +13 (5d10 + cercenar + engullir)",
    traits: [
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Morador Profundo", text: "Inmune al fuego y al frío. Anfibio." },
      { name: "Muerte Permanente", text: "No puede morir permanentemente a menos que se le lance el conjuro deseo mientras se encuentra a 0 PG." },
      { name: "Arrasar", text: "En lugar de atacar, se mueve a distancia lejana en línea recta y realiza un ataque de mordisco (si impacta, inflige triple daño)." },
      { name: "Caparazón Reflectante", text: "Inmune a rayos, descargas o proyectiles de energía mágica (1 en 6 de probabilidad de reflejarlos hacia su lanzador)." },
      { name: "Regeneración", text: "Recupera 4d10 PG perdidos al inicio de su turno." },
      { name: "Cercenar", text: "Con un resultado natural de 18+ en la tirada de ataque, cercena un miembro aleatorio: 1d6 (1. Cabeza, 2-4. Brazo, 5-6. Pierna)." },
      { name: "Engullir", text: "CD 18 FUE o el objetivo es engullido entero. Oscuridad total en el interior y 4d10 de daño por asalto. El tarrasca regurgita a todos los engullidos si recibe al menos 30 de daño en un solo asalto en el interior de su estómago." }
    ]
  },
  {
    name: "EL MERCADER ERRANTE (THE WANDERING MERCHANT)",
    desc: "Un risueño comerciante humano de mediana edad con bigote encerado, camisa blanca y delantal de cuero, cargado con una mochila colosal repleta de maravillas.",
    ca: 16, pg: 71, mv: "cercano", nv: 15, al: "L",
    f: "+3", d: "+3", c: "+4", i: "+3", s: "+4", ca_mod: "+5",
    atq: "4 espadas bastardas vorpalinas +3 +9 (1d10 + decapitar)",
    traits: [
      { name: "Armadura", text: "Cota de malla de mitral." },
      { name: "Legendario", text: "Solo recibe daño de fuentes mágicas. Los conjuros hostiles dirigidos contra él requieren CD 18 para lanzarse." },
      { name: "Amuleto de Rahm-Hotep", text: "En lugar de atacar, se teletransporta a un lugar aleatorio del multiverso." },
      { name: "Bolsa Sin Fondo", text: "Contiene 200 espacios de inventario en bolsillos interdimensionales y pesa como una mochila normal. Puede convocarla chasqueando los dedos." },
      { name: "Dados de la Verdad", text: "Un juego de tres dados de seis caras cuyas tiradas no pueden ser alteradas mágica ni mundanamente." },
      { name: "Decapitar", text: "Con un 18-20 natural en la tirada de ataque, decapita al objetivo." },
      { name: "Ajuste de Cuentas", text: "Cualquiera que robe al mercader sufre una maldición: en 2d8 días se convierte en una cocatriz (solo se anula con deseo o devolviendo lo robado)." },
      { name: "Tierras Extrañas", text: "No sufre ningún efecto adverso del entorno natural a menos que lo desee." }
    ]
  },
  {
    name: "LADRÓN / ASALTANTE (THIEF)",
    desc: "Un ladrón sigiloso embozado en una capa negra.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "N",
    f: "+0", d: "+2", c: "+0", i: "+0", s: "+0", ca_mod: "+1",
    atq: "1 daga (contacto/cercano) +2 (1d4) o 1 espada corta +0 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Sigiloso", text: "Ventaja en pruebas de Destreza para moverse en silencio y esconderse." },
      { name: "Apuñalamiento", text: "Inflige x2 de daño contra criaturas sorprendidas." }
    ]
  },
  {
    name: "MATÓN / RUFIÁN (THUG)",
    desc: "Un pendenciero tosco y amoratado acostumbrado a la violencia callejera.",
    ca: 13, pg: 4, mv: "cercano", nv: 1, al: "C",
    f: "+1", d: "+0", c: "+0", i: "-1", s: "+1", ca_mod: "-1",
    atq: "1 espada corta +1 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero + escudo." }
    ]
  },
  {
    name: "ARBURÓN / ENT (TREANT)",
    desc: "Árboles animados pacíficos de paso lento, ojos afables y voces profundas que protegen el corazón de los bosques.",
    ca: 14, pg: 38, mv: "cercano", nv: 8, al: "N",
    f: "+4", d: "-1", c: "+2", i: "+2", s: "+3", ca_mod: "+1",
    atq: "3 embates +8 (1d10) o 1 roca (lejano) +8 (2d12)",
    traits: [
      { name: "Animar Árbol", text: "2/día. En lugar de atacar, un árbol a distancia cercana despierta como un arburón aliado (sin esta habilidad) durante 1 día." }
    ]
  },
  {
    name: "TROL (TROLL)",
    desc: "Gigantes desgarbados de piel verdosa verrugosa y furia territorial implacable. Habitan en ciénagas y espesuras.",
    ca: 12, pg: 24, mv: "cercano", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+2", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 garras +4 (1d6) y 1 mordisco +4 (1d10)",
    traits: [
      { name: "Regeneración", text: "Recupera 2d6 PG al comienzo de su turno a menos que sus heridas sean cauterizadas con fuego o ácido." }
    ]
  },
  {
    name: "TROL DE ESCARCHA (TROLL, FROST)",
    desc: "Troles cubiertos de escarcha de piel azulada y ojos oscuros como pedernal que acechan en tundras y bosques boreales.",
    ca: 13, pg: 34, mv: "cercano", nv: 7, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-1", s: "+0", ca_mod: "-1",
    atq: "2 garras +5 (1d8) y 1 mordisco +5 (1d12)",
    traits: [
      { name: "Inmune", text: "Inmune al frío y al fuego." },
      { name: "Regeneración", text: "Recupera 2d6 PG en su turno a menos que sus heridas sean cauterizadas con ácido." }
    ]
  },
  {
    name: "UNICORNIO (UNICORN)",
    desc: "Un majestuoso caballo plateado de crines ondeantes y un único cuerno en espiral.",
    ca: 12, pg: 20, mv: "doble cercano", nv: 4, al: "L",
    f: "+3", d: "+2", c: "+2", i: "+1", s: "+2", ca_mod: "+3",
    atq: "1 pezuñas +3 (1d6)",
    traits: [
      { name: "Cuerno Sanador", text: "Un toque de su cuerno cura 2d6 PG o elimina una maldición o enfermedad." }
    ]
  },
  {
    name: "VAMPIRO (VAMPIRE)",
    desc: "No-muertos pálidos bebedores de sangre de supremo poder y perversidad. Detestan la luz solar y protegen celosamente sus ataúdes.",
    ca: 15, pg: 52, mv: "cercano (trepar)", nv: 11, al: "C",
    f: "+4", d: "+3", c: "+3", i: "+1", s: "+3", ca_mod: "+4",
    atq: "3 mordiscos +7 (1d8 + drenaje de sangre) o 1 hechizo",
    traits: [
      { name: "No-muerto Supremo", text: "Inmune a tiradas de moral. Solo recibe daño de fuentes mágicas." },
      { name: "Drenaje de Sangre", text: "El vampiro recupera 2d6 PG y el objetivo pierde 1d4 CON. A 0 CON, el objetivo muere y se alza como vampiro o engendro leal." },
      { name: "Hechizar", text: "Un humanoide a distancia cercana que lo vea CD 15 CAR o queda bajo su control durante 1d4 días." },
      { name: "Cambiar de Forma", text: "En lugar de atacar, se transforma en murciélago, lobo o vuelve a su forma natural." },
      { name: "Vampiro", text: "Debe dormir en su ataúd a diario o pierde 2d6 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si se le clava una estaca de madera en el corazón mientras se encuentra a 0 PG." }
    ]
  },
  {
    name: "ENGENDRO VAMPÍRICO (VAMPIRE SPAWN)",
    desc: "Vampiros menores y salvajes nacidos de la mordedura de sus señores. Sanguinarios y crueles.",
    ca: 13, pg: 25, mv: "cercano (trepar)", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+3", i: "-1", s: "+1", ca_mod: "+2",
    atq: "2 mordiscos +4 (1d8 + drenaje de sangre)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." },
      { name: "Drenaje de Sangre", text: "El engendro recupera 2d6 PG y el objetivo pierde 1d4 CON. A 0 CON, el objetivo muere y se alza como engendro vampírico aliado." },
      { name: "Vampiro", text: "Debe dormir en un ataúd a diario o pierde 2d6 PG diarios incurables. Recibe 3d8 de daño por asalto bajo luz solar directa. Solo muere si se le clava una estaca de madera en el corazón mientras se encuentra a 0 PG." }
    ]
  },
  {
    name: "HONGO VIOLETA (VIOLET FUNGUS)",
    desc: "Hongos reptantes del tamaño de un niño con sombreros de color púrpura neón cuyas raíces azotan y descomponen la carne viva.",
    ca: 7, pg: 9, mv: "contacto (close)", nv: 2, al: "N",
    f: "-3", d: "-2", c: "+0", i: "-4", s: "-3", ca_mod: "-4",
    atq: "2 zarcillos (cercano) +0 (1d4)",
    traits: []
  },
  {
    name: "VIPERIANO (VIPERIAN)",
    desc: "Gente serpiente ágil con capuchas de cobra y escamas verde esmeralda que habitan entre las ruinas de su imperio caído.",
    ca: 13, pg: 13, mv: "cercano", nv: 3, al: "C",
    f: "+1", d: "+1", c: "+0", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 cimitarras +2 (1d6) o 1 jabalina (contacto/lejano) +2 (1d4)",
    traits: []
  },
  {
    name: "VIPERIANO OFIDIO (VIPERIAN OPHID)",
    desc: "El cuerpo de una anaconda gigante fusionado con un torso humanoide y una gran cabeza de serpiente, engalanado con torques de oro y piedras lunares.",
    ca: 14, pg: 28, mv: "cercano (trepar)", nv: 6, al: "C",
    f: "+4", d: "+2", c: "+1", i: "+1", s: "+1", ca_mod: "+1",
    atq: "3 bracamartes / alfanjes +5 (1d10) o 2 arcos largos (lejano) +3 (1d8)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de fuentes mágicas." }
    ]
  },
  {
    name: "MAGO VIPERIANO (VIPERIAN WIZARD)",
    desc: "Viperianos delgados de escamas teñidas de negro vestidos con túnicas de seda y joyas serpentinas de plata.",
    ca: 13, pg: 37, mv: "cercano", nv: 8, al: "C",
    f: "+0", d: "+1", c: "+0", i: "+3", s: "+1", ca_mod: "+1",
    atq: "1 daga (contacto/cercano) +2 (1d4) o 2 conjuros +5",
    traits: [
      { name: "Siseo (Conjuro INT)", text: "CD 12. Disipa un conjuro activo a distancia lejana." },
      { name: "Convocar Cobra (Conjuro INT)", text: "CD 13. Invoca 1d4 cobras leales que aparecen a distancia cercana durante 1d4 asaltos." },
      { name: "Veneno (Conjuro INT)", text: "CD 12. Un objetivo a distancia lejana recibe 2d8 de daño." },
      { name: "Susurros (Conjuro INT)", text: "CD 14. Concentración. Todos los enemigos a distancia cercana sufren desventaja en pruebas de lanzamiento durante la duración." }
    ]
  },
  {
    name: "BUITRE (VULTURE)",
    desc: "Aves carroñeras de plumaje negro, lomo encorvado y cabeza calva.",
    ca: 10, pg: 5, mv: "cercano (volar)", nv: 1, al: "N",
    f: "+1", d: "+0", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "1 desgarro +1 (1d4)",
    traits: [
      { name: "Rastreador de Carroña", text: "Puede rastrear carne muerta con total precisión en un radio de una milla." }
    ]
  },
  {
    name: "AVISPA GIGANTE (WASP, GIANT)",
    desc: "Avispas del tamaño de un humano con abdómenes brillantes listados en amarillo y negro.",
    ca: 13, pg: 9, mv: "cercano (volar)", nv: 2, al: "N",
    f: "+1", d: "+3", c: "+0", i: "-3", s: "+0", ca_mod: "-3",
    atq: "1 aguijón +3 (1d6 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 9 CON o cae a 0 PG." }
    ]
  },
  {
    name: "HOMBRE RATA / LICÁNTROPO RATA (WERERAT)",
    desc: "Un humanoide escurridizo con cabeza de rata y pelaje sarnoso.",
    ca: 13, pg: 14, mv: "cercano (trepar)", nv: 3, al: "C",
    f: "+1", d: "+2", c: "+1", i: "-1", s: "+1", ca_mod: "-1",
    atq: "2 mordiscos +2 (1d6)",
    traits: [
      { name: "Armadura", text: "Cuero." },
      { name: "Inmune", text: "Solo recibe daño de plata o fuentes mágicas." },
      { name: "Licantropía", text: "Si una criatura sufre 12 o más puntos de daño del mismo hombre rata, contrae la licantropía." }
    ]
  },
  {
    name: "HOMBRE LOBO / LICÁNTROPO LOBO (WEREWOLF)",
    desc: "Un humanoide bípedo con cabeza de lobo cubierto de espeso pelaje pardo.",
    ca: 12, pg: 20, mv: "doble cercano", nv: 4, al: "C",
    f: "+3", d: "+2", c: "+2", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 desgarres +3 (1d6)",
    traits: [
      { name: "Inmune", text: "Solo recibe daño de plata o fuentes mágicas." },
      { name: "Licantropía", text: "Si una criatura sufre 12 o más puntos de daño del mismo hombre lobo, contrae la licantropía." }
    ]
  },
  {
    name: "TUMBERO / TUMULARIO (WIGHT)",
    desc: "Un guerrero no-muerto acorazado de piel pálida dotado de una siniestra inteligencia táctica.",
    ca: 14, pg: 15, mv: "cercano", nv: 3, al: "C",
    f: "+3", d: "+1", c: "+2", i: "+1", s: "+0", ca_mod: "+3",
    atq: "1 espada bastarda +3 (1d10) y 1 drenaje de vida +3",
    traits: [
      { name: "Armadura", text: "Cota de malla." },
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de plata o fuentes mágicas." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "FUEGO FATUO (WILL-O'-WISP)",
    desc: "Una titilante luz de pantano animada por un espíritu malévolo que guía a los viajeros hacia trampas y pozos mortales.",
    ca: 13, pg: 10, mv: "cercano (volar)", nv: 2, al: "C",
    f: "-3", d: "+3", c: "+1", i: "-1", s: "-1", ca_mod: "-2",
    atq: "1 drenaje de vida +3",
    traits: [
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "LOBO (WOLF)",
    desc: "Cánido de gran tamaño con pelaje gris, ojos amarillentos y fauces babeantes.",
    ca: 12, pg: 10, mv: "doble cercano", nv: 2, al: "N",
    f: "+2", d: "+2", c: "+1", i: "-2", s: "+1", ca_mod: "+0",
    atq: "1 mordisco +2 (1d6)",
    traits: [
      { name: "Cazador en Manada", text: "Inflige +1 de daño mientras tenga a un aliado a distancia de contacto (close)." }
    ]
  },
  {
    name: "LOBO HUARGO / DIRE WOLF (WOLF, DIRE)",
    desc: "Un lobo colosal con espinas de hueso negro a lo largo del arco supraciliar y el lomo.",
    ca: 12, pg: 19, mv: "doble cercano", nv: 4, al: "N",
    f: "+3", d: "+2", c: "+1", i: "-1", s: "+1", ca_mod: "+0",
    atq: "2 mordiscos +4 (1d8)",
    traits: [
      { name: "Cazador en Manada", text: "Inflige +1 de daño mientras esté junto a un aliado." }
    ]
  },
  {
    name: "LOBO INVERNAL (WOLF, WINTER)",
    desc: "Lobos de pelaje blanco y penetrantes ojos azules procedentes de los reinos feéricos del invierno eterno.",
    ca: 12, pg: 23, mv: "doble cercano", nv: 5, al: "C",
    f: "+3", d: "+2", c: "+1", i: "+0", s: "+1", ca_mod: "+0",
    atq: "2 mordiscos +4 (1d6) o 1 aliento de escarcha",
    traits: [
      { name: "Inmune", text: "Inmune al frío." },
      { name: "Aliento de Escarcha", text: "Llena un cubo de tamaño cercano adyacente al lobo. CD 15 DES o 3d8 de daño (no se puede volver a usar durante 1d4 asaltos)." }
    ]
  },
  {
    name: "HUARGO (WORG)",
    desc: "Lobos con rostro de murciélago que hablan trasgo y a menudo sirven como monturas de guerra para los goblinoides.",
    ca: 11, pg: 14, mv: "doble cercano", nv: 3, al: "C",
    f: "+2", d: "+1", c: "+1", i: "-2", s: "+1", ca_mod: "-2",
    atq: "1 mordisco +3 (1d6)",
    traits: []
  },
  {
    name: "ESPECTRO / APARICIÓN (WRAITH)",
    desc: "Un espíritu sombrío que hierve de ira y malicia. Su presencia inquieta a los animales.",
    ca: 14, pg: 36, mv: "cercano (volar)", nv: 8, al: "C",
    f: "-4", d: "+4", c: "+0", i: "+0", s: "+0", ca_mod: "+3",
    atq: "3 toques mortales +6 (1d10 + drenaje de vida)",
    traits: [
      { name: "No-muerto Mayor", text: "Inmune a tiradas de moral. Solo recibe daño de armas de plata o fuentes mágicas." },
      { name: "Incorpóreo", text: "En lugar de atacar, pasa a ser corpóreo o incorpóreo." },
      { name: "Drenaje de Vida", text: "1d4 de daño a Constitución. Muerte instantánea si se reduce a 0 CON." }
    ]
  },
  {
    name: "GUIVANO / VIVERN (WYVERN)",
    desc: "Parientes de los dragones provistos de un gran aguijón caudal, piel moteada de lagarto y alas coriáceas.",
    ca: 15, pg: 37, mv: "doble cercano (volar)", nv: 8, al: "N",
    f: "+4", d: "+2", c: "+1", i: "-3", s: "+1", ca_mod: "-3",
    atq: "2 desgarres +6 (1d8) y 1 aguijón +6 (1d6 + veneno)",
    traits: [
      { name: "Veneno", text: "CD 15 CON o recibe 2d10 de daño." }
    ]
  },
  {
    name: "ZOMBI (ZOMBIE)",
    desc: "Cadáveres tambaleantes en descomposición que cazan en hordas.",
    ca: 8, pg: 11, mv: "cercano", nv: 2, al: "C",
    f: "+2", d: "-2", c: "+2", i: "-2", s: "-2", ca_mod: "-3",
    atq: "1 embate +2 (1d6)",
    traits: [
      { name: "No-muerto", text: "Inmune a tiradas de moral." },
      { name: "Implacable", text: "Si el zombi es reducido a 0 PG por una fuente no mágica, CD 15 CON para quedar a 1 PG en su lugar." }
    ]
  }
];

/* Fuente: npcs.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.NPCS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  nombres: [
    "Kaelen", "Vrena", "Gornak", "Dorothea", "Béla", "István", "Kálmán", "Zoltán",
    "Akin", "Babatunde", "Ebele", "Folami", "Kayode", "Olufemi", "Sipho",
    "Aapo", "Eetu", "Ilmari", "Kalevi", "Tapio", "Väinö", "Mirena", "Aldous", "Garrick", "Alden", "Althea", "Branoc", "Brynn", "Caelum", "Cassia", "Cedric", "Corvus",
    "Dagny", "Dain", "Eldrin", "Elspeth", "Fenrik", "Galen", "Garrick", "Gareth",
    "Gisela", "Greta", "Hadrian", "Hesta", "Ingvar", "Isolde", "Jareth", "Kaelen",
    "Kallan", "Kord", "Leona", "Lilith", "Lucan", "Marek", "Mirena", "Morrigan",
    "Nesta", "Orin", "Osric", "Rhogar", "Rorik", "Rowan", "Selena", "Sigrid",
    "Taran", "Thorgar", "Torvald", "Ulric", "Valeria", "Vesper", "Vrena", "Wulfric",
    "Yvaine", "Zoltan", "Suson", "Ray", "Sus", "Andreu", "Aram", "Mati", "Fire", "Dani", "Alex", "Chals", "Mateu", "Joan", "Pericu", "Paco"
  ],

  // ==========================================
  // TABLAS OFICIALES DE PNJs (NPCs)
  // ==========================================

  // 1. PERFIL BÁSICO
  ascendenciaPnj: function(roll) {
    if (roll <= 4) return "Humano (Human)";
    if (roll <= 6) return "Elfo (Elf)";
    if (roll <= 8) return "Enano (Dwarf)";
    if (roll <= 10) return "Mediano (Halfling)";
    if (roll === 11) return "Semiorco (Half-orc)";
    return "Goblin";
  },

  edadPnj: function(roll) {
    var table = {
      1: "Niño (Child)",
      2: "Adolescente (Adolescent)",
      3: "Adulto (Adult)",
      4: "Adulto (Adult)",
      5: "Mediana edad (Middle-Aged)",
      6: "Mediana edad (Middle-Aged)",
      7: "Anciano (Elderly)",
      8: "Ancestral / Longevo (Ancient)"
    };
    return table[roll] || "Adulto (Adult)";
  },

  alineamientoPnj: function(roll) {
    if (roll <= 3) return "Legal (Lawful)";
    if (roll === 4) return "Neutral";
    return "Caótico (Chaotic)";
  },

  riquezaPnj: function(roll) {
    if (roll === 1) return "Pobre (Poor)";
    if (roll <= 3) return "Estándar (Standard)";
    if (roll <= 5) return "Acomodado / Rico (Wealthy)";
    return "Extravagante / Opulento (Extravagant)";
  },

  // 2. CUALIDADES DEL PNJ (3d20)
  aparienciasPnj: {
    1: "Calvicie incipiente",
    2: "Complexión fornida/robusta",
    3: "Muy alto",
    4: "Lunar atractivo",
    5: "Tuerto (un solo ojo)",
    6: "Pelo trenzado",
    7: "Musculoso",
    8: "Pelo blanco",
    9: "Cicatriz en la cara",
    10: "Complexión esbelta/fina",
    11: "Sudoroso",
    12: "Hoyuelo en la barbilla",
    13: "Frágil / Enclenque",
    14: "Cejas muy pobladas",
    15: "Tatuado",
    16: "Sombrero de ala ancha y caído",
    17: "Diente de oro",
    18: "Seis dedos en una mano",
    19: "Muy bajo de estatura",
    20: "Nariz grande"
  },

  maniasPnj: {
    1: "Escupe con frecuencia",
    2: "Siempre está comiendo",
    3: "Se mueve con rapidez",
    4: "Hace trucos de cartas",
    5: "Reza en voz alta",
    6: "Escribe en un diario",
    7: "Siempre se disculpa",
    8: "Da palmadas en la espalda",
    9: "Se le caen las cosas de las manos",
    10: "Jura y profiere votos solemnes",
    11: "Hace juegos de palabras / chistes",
    12: "Acento exótico/raro",
    13: "Se asusta con extrema facilidad",
    14: "Despistado / Olvidadizo",
    15: "Habla en un susurro/muy bajo",
    16: "Tiene tics nerviosos",
    17: "Se mueve muy despacio",
    18: "Habla a voces/muy alto",
    19: "Camina con chulería/pavoneo",
    20: "Fuma en pipa"
  },

  secretosPnj: {
    1: "Oculta a un fugitivo",
    2: "Le encantan las crías de animales",
    3: "Obsesionado con el fuego",
    4: "Pertenece a una secta religiosa",
    5: "Es un semidemonio",
    6: "Fue aprendiz de mago",
    7: "Roba carteras sin necesidad",
    8: "Tiene una identidad falsa",
    9: "Tiene pánico a las tormentas",
    10: "Tiene branquias funcionales",
    11: "Tiene una enorme deuda de juego",
    12: "Trabaja como contrabandista",
    13: "Es un hombre lobo",
    14: "Puede oler las mentiras",
    15: "Desheredado de una familia rica",
    16: "Enamorado en secreto de un tabernero",
    17: "Desertó del Gremio de Ladrones",
    18: "Es el mejor amigo de un príncipe",
    19: "Aventurero/explorador retirado",
    20: "Oculta un basilisco como mascota"
  },

  // 3. OCUPACIÓN EN CUADRÍCULA (2d4)
  ocupacionesMatriz: [
    ["Sepulturero", "Carpintero", "Erudito / Académico", "Herrero"],
    ["Recaudador de impuestos", "Granjero / Agricultor", "Tabernero", "Mendigo"],
    ["Panadero", "Cocinero", "Marinero", "Carnicero"],
    ["Cerrajero", "Zapatero", "Fraile / Monja", "Mercader"]
  ],

  // ==========================================
  // TABLAS OFICIALES DE AVENTUREROS RIVALES
  // ==========================================
  renombreRivales: {
    1: "Desconocidos (Unknown)",
    2: "Conocidos localmente (Locally known)",
    3: "Conocidos localmente (Locally known)",
    4: "Ampliamente reconocidos (Widely recognized)",
    5: "Ampliamente reconocidos (Widely recognized)",
    6: "Extremadamente famosos (Extravagant/Famous)"
  },

  secretosRivales: function(roll2d6) {
    if (roll2d6 === 2) return "Traicionaron un juramento sagrado";
    if (roll2d6 <= 4) return "Identidades falsas o robadas";
    if (roll2d6 <= 6) return "En deuda con el Gremio de Ladrones";
    if (roll2d6 <= 8) return "Poseen el mapa de un gran tesoro";
    if (roll2d6 <= 11) return "Sufren los efectos de una maldición";
    return "Tienen un patrón / mecenas muy poderoso";
  },

  riquezaRivales: {
    1: "Pobres (Poor)",
    2: "Estándar (Standard)",
    3: "Estándar (Standard)",
    4: "Estándar (Standard)",
    5: "Ricos (Wealthy)",
    6: "Extravagantes / Opulentos (Extravagant)"
  },

  alineamientoRivales: {
    1: "Legal (Lawful)",
    2: "Legal (Lawful)",
    3: "Neutral",
    4: "Neutral",
    5: "Caótico (Chaotic)",
    6: "Caótico (Chaotic)"
  },

  ascendenciaMiembro: function(roll1d12) {
    if (roll1d12 <= 4) return "Humano";
    if (roll1d12 <= 6) return "Elfo";
    if (roll1d12 <= 8) return "Enano";
    if (roll1d12 <= 10) return "Mediano";
    if (roll1d12 === 11) return "Semiorco";
    return "Goblin";
  },

  claseMiembro: {
    1: "Guerrero (Fighter)",
    2: "Clérigo (Priest)",
    3: "Ladrón (Thief)",
    4: "Mago (Wizard)"
  },

  nombresGrupoRivales: {
    1: "Los Guardianes Salvajes (The Savage Wardens)",
    2: "Las Calaveras de Acero (The Steel Skulls)",
    3: "Los Guardianes Gélidos (The Icy Guardians)",
    4: "Los Martillos del Infierno (Hell's Hammers)",
    5: "Los Exploradores Funestos (The Dread Rangers)",
    6: "Los Exploradores Maravillosos (The Marvelous Explorers)",
    7: "La Luna Llameante (The Flaming Moon)",
    8: "Los Lobos Solitarios (The Lone Wolves)",
    9: "Los Saqueadores Nobles (The Noble Delvers)",
    10: "El Alba Imponente (The Mighty Dawn)",
    11: "Los Dracos de Hierro (The Iron Drakes)",
    12: "Los Canallas del Diablo (The Devil's Miscreants)",
    13: "Las Cimitarras Esmeralda (The Emerald Scimitars)",
    14: "La Tormenta Vigilante (The Vigilant Storm)",
    15: "Los Rastreadores Sin Luz (The Lightless Trackers)",
    16: "El Juramento del Bosque (The Forest Oath)",
    17: "Los Centinelas de la Muerte (Death's Sentinels)",
    18: "Los Leones Oscuros (The Dark Lions)",
    19: "Los Caballeros del Trueno (The Thundering Knights)",
    20: "Los Cazadores Divinos (The Divine Hunters)"
  },

  reputacionGrupoRivales: {
    1: "Derrotar a un dragón",
    2: "Especializarse en no-muertos",
    3: "La adoración fanática de un dios",
    4: "Abatir a un ogro de dos cabezas",
    5: "Desaparecer durante un año entero",
    6: "Coleccionar trofeos de monstruos",
    7: "Prender fuego a las tabernas",
    8: "Su vestimenta y atuendo distintivo",
    9: "Su descaro y arrogancia",
    10: "Una expedición completamente desastrosa",
    11: "Coquetear con la magia oscura/maligna",
    12: "Sus admiradores fanáticos y enloquecidos",
    13: "Haber servido en una guerra brutal",
    14: "Enormes deudas de juego",
    15: "Su león domesticado como mascota",
    16: "Sobrevivir a la caída de Korint",
    17: "Encontrar una espada legendaria",
    18: "Espiar a otros grupos de aventureros",
    19: "Derrotar a un poderoso nigromante",
    20: "Reclamar y robar tesoros ajenos"
  },

  tacticasRivales: {
    "Legal (Lawful)": {
      1: "Siempre negocian primero",
      2: "Luchan con honor",
      3: "Nunca usan el sigilo",
      4: "Tienen seguidores leales"
    },
    "Neutral": {
      1: "Exploran e infiltran en sigilo",
      2: "Siguen y rastrean a sus rivales",
      3: "Ocultan y almacenan recursos",
      4: "Compran información"
    },
    "Caótico (Chaotic)": {
      1: "Emboscan a grupos rivales",
      2: "Sacrifican PNJs sin dudar",
      3: "Matan absolutamente todo",
      4: "Atacan a los indefensos"
    }
  },

  // ==========================================
  // TABLAS DE SEGUIDORES (Páramos Aventurados)
  // ==========================================
  calidadesSeguidor: function(roll) {
    if (roll <= 3) return { nivel: "Un lastre", mod: "-1 a sus pruebas", etiquetas: "0 etiquetas (+1 debilidad)" };
    if (roll <= 9) return { nivel: "Razonablemente competente", mod: "+0 a sus pruebas", etiquetas: "1 etiqueta de especialización" };
    if (roll <= 11) return { nivel: "Muy competente", mod: "+1 a sus pruebas", etiquetas: "2 etiquetas de especialización" };
    return { nivel: "Un individuo excepcional", mod: "+2 a sus pruebas", etiquetas: "3 etiquetas de especialización" };
  },

  trasfondosSeguidor: function(roll) {
    var table = {
      1: "Ha tenido una vida de servidumbre u opresión (+1 Lealtad inicial, sumiso)",
      2: "Ha tenido una vida de servidumbre u opresión (+1 Lealtad inicial, sumiso)",
      3: "Pasaron ya sus mejores años (-1 PG máx, +1 Sabiduría/Experiencia)",
      4: "Ha tenido una vida peligrosa (+1 Dado de Daño o arma marcial)",
      5: "Ha tenido una vida peligrosa (+1 Dado de Daño o arma marcial)",
      6: "Común y corriente (Sin modificadores especiales)",
      7: "Común y corriente (Sin modificadores especiales)",
      8: "Común y corriente (Sin modificadores especiales)",
      9: "Común y corriente (Sin modificadores especiales)",
      10: "Ha tenido una vida privilegiada (Exige mejor trato y comida rica)",
      11: "Especialista (+1 etiqueta adicional de oficio o conocimiento)",
      12: "DOBLE"
    };
    return table[roll] || table[6];
  },

  instintosSeguidor: {
    1: "Robar, saquear e incendiar ante la menor oportunidad.",
    2: "Guardar rencor y buscar venganza a espaldas del grupo.",
    3: "Cuestionar el liderazgo o la autoridad abiertamente.",
    4: "Tratar a otros con prepotencia y soberbia.",
    5: "Tratar a otros con prepotencia y soberbia.",
    6: "Actuar de forma impulsiva y temeraria.",
    7: "Actuar de forma impulsiva y temeraria.",
    8: "Ceder a la tentación (bebida, oro, placeres).",
    9: "Ceder a la tentación (bebida, oro, placeres).",
    10: "Holgazanear y eludir el trabajo duro.",
    11: "Holgazanear y eludir el trabajo duro.",
    12: "Evitar el peligro, la primera línea o el castigo a toda costa."
  },

  motivacionesSeguidor: {
    1: "Libertinaje (Comida, bebida, juego, sexo y desmadre en descansos)",
    2: "Venganza (Exige ayuda contra quienes le dañaron en el pasado)",
    3: "Lucro (Pago monetario regular en oro según la prosperidad)",
    4: "Lucro (Pago monetario regular en oro según la prosperidad)",
    5: "Lucro (Pago monetario regular en oro según la prosperidad)",
    6: "Renombre (Reconocimiento público; busca que hablen de sus hazañas)",
    7: "Renombre (Reconocimiento público; busca que hablen de sus hazañas)",
    8: "Gloria (Derrotar en combate a oponentes de gran envergadura)",
    9: "Gloria (Derrotar en combate a oponentes de gran envergadura)",
    10: "Afecto (Palabras amables, tiempo, cercanía y atención sincera)",
    11: "Conocimiento (Secretos, misterios y maravillas del mundo exterior)",
    12: "Bondad (Paliar sufrimiento, ayudar al inocente y deshacer entuertos)"
  },

  combateSeguidor: function(rollPg, rollDmg) {
    var pgText = "Frágil / Blando: 3 PG";
    var pgVal = 3;
    if (rollPg >= 4 && rollPg <= 9) { pgText = "En buena forma: 6 PG"; pgVal = 6; }
    else if (rollPg >= 10) { pgText = "Duro / Resistente: 9 PG"; pgVal = 9; }

    var dmgText = "Poco peligroso: d4";
    if (rollDmg >= 5 && rollDmg <= 10) { dmgText = "Sabe defenderse: d6"; }
    else if (rollDmg >= 11) { dmgText = "Veterano de combate: d8"; }

    return { pgText: pgText, pgVal: pgVal, dmgText: dmgText };
  },

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================

  // 1. GENERAR PNJ GENERAL OFICIAL
  generateNpc: function() {
    var nombre = this.pick(this.nombres);

    // Perfil básico
    var dAsc = this.d(12);
    var dEdad = this.d(8);
    var dAlin = this.d(6);
    var dRiq = this.d(6);

    var asc = this.ascendenciaPnj(dAsc);
    var edad = this.edadPnj(dEdad);
    var alin = this.alineamientoPnj(dAlin);
    var riq = this.riquezaPnj(dRiq);

    // Ocupación en cuadrícula 2d4
    var fila = this.d(4);
    var col = this.d(4);
    var ocupacion = this.ocupacionesMatriz[fila - 1][col - 1];

    // Cualidades 3d20
    var dAp = this.d(20);
    var dMan = this.d(20);
    var dSec = this.d(20);

    var ap = this.aparienciasPnj[dAp];
    var man = this.maniasPnj[dMan];
    var sec = this.secretosPnj[dSec];

    return {
      nombre: `${nombre} (${ocupacion})`,
      perfil: `${asc}, ${edad} | Alineamiento: ${alin} | Riqueza: ${riq}`,
      ocupacion: ocupacion,
      apariencia: ap,
      habito: man,
      secreto: sec,
      rolls: `Perfil: [1d12:${dAsc}, 1d8:${dEdad}, 1d6:${dAlin}, 1d6:${dRiq}] | Ocupación 2d4:[Fila ${fila}, Col ${col}] | Cualidades 3d20:[${dAp}, ${dMan}, ${dSec}]`
    };
  },

  // 2. GENERAR SEGUIDOR (PÁRAMOS AVENTURADOS)
  generateFollower: function() {
    var nombre = this.pick(this.nombres);
    var dCalidad = this.d(12);
    var dTrasfondo = this.d(12);
    var dInstinto = this.d(12);
    var dMotivacion = this.d(12);
    var dPg = this.d(12);
    var dDmg = this.d(12);

    var calidadInfo = this.calidadesSeguidor(dCalidad);
    
    var trasfondoText = this.trasfondosSeguidor(dTrasfondo);
    if (trasfondoText === "DOBLE") {
      var t1 = this.trasfondosSeguidor(this.d(11));
      var t2 = this.trasfondosSeguidor(this.d(11));
      trasfondoText = `Doble trasfondo: 1) ${t1} | 2) ${t2}`;
    }

    var instintoText = this.instintosSeguidor[dInstinto];
    var motivacionText = this.motivacionesSeguidor[dMotivacion];
    var combateInfo = this.combateSeguidor(dPg, dDmg);

    return {
      nombre: `Seguidor: ${nombre}`,
      calidad: `${calidadInfo.nivel} (${calidadInfo.mod})`,
      etiquetas: calidadInfo.etiquetas,
      trasfondo: trasfondoText,
      instinto: instintoText,
      coste: motivacionText,
      combate: `${combateInfo.pgText} | Daño: ${combateInfo.dmgText}`,
      pgVal: combateInfo.pgVal,
      rolls: `1d12: Calidad:[${dCalidad}] Trasf:[${dTrasfondo}] Inst:[${dInstinto}] Coste:[${dMotivacion}] PG:[${dPg}] Daño:[${dDmg}]`
    };
  },

  // 3. GENERAR BANDA DE RIVALES OFICIAL (RIVAL CRAWLERS)
  generateRivals: function() {
    var dNum = this.d(4) + 1; // 1d4 + 1 miembros
    var dRen = this.d(6);
    var dSec = this.d(6) + this.d(6); // 2d6 secreto
    var dRiq = this.d(6);
    var dAlin = this.d(6);

    var renombre = this.renombreRivales[dRen];
    var secreto = this.secretosRivales(dSec);
    var riqueza = this.riquezaRivales[dRiq];
    var alineamiento = this.alineamientoRivales[dAlin];

    // Nombre y Reputación con 2d20 independientes
    var dNombre = this.d(20);
    var dFama = this.d(20);
    var nombreGrupo = this.nombresGrupoRivales[dNombre];
    var famaGrupo = this.reputacionGrupoRivales[dFama];

    // Tácticas por alineamiento (1d4)
    var dTactica = this.d(4);
    var tactica = this.tacticasRivales[alineamiento][dTactica];

    // Generar miembros individuales
    var miembros = [];
    for (var i = 0; i < dNum; i++) {
      var dAsc = this.d(12);
      var dClase = this.d(4);
      var dNivel = this.d(6);

      var asc = this.ascendenciaMiembro(dAsc);
      var clase = this.claseMiembro[dClase];
      var nombreM = this.pick(this.nombres);

      miembros.push(`• <strong>${nombreM}</strong>: ${asc} ${clase} (Nivel ${dNivel})`);
    }

    return {
      nombre: nombreGrupo,
      fama: famaGrupo,
      rasgos: `Renombre: ${renombre} | Riqueza: ${riqueza} | Alineamiento: ${alineamiento}`,
      secreto: secreto,
      tactica: tactica,
      miembros: miembros.join("<br>"),
      rolls: `Grupo: Miembros: 1d4+1:[${dNum}] | Rasgos: [Ren: ${dRen}, Sec: ${dSec}, Riq: ${dRiq}, Alin: ${dAlin}] | 2d20:[Nom: ${dNombre}, Fama: ${dFama}] | Táctica: 1d4:[${dTactica}]`
    };
  }
};

/* Fuente: settlements.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.SETTLEMENTS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 1. NOMBRES DE ASENTAMIENTO (1d8)
  nombres: {
    aldea: [
      "Fuerte de Bruga (Bruga's Hold)", "Última Guardia (Lastwatch)", "Aguaclara / Aguamala (Darkwater)",
      "Ostlin", "Caída de Árbol (Treefall)", "Vorn", "Colinarce (Hillshire)", "Refugio Nocturno (Nighthaven)"
    ],
    pueblo: [
      "Valleclaro (Fairhollow)", "Torreón de Ivan (Ivan's Keep)", "Galina", "Farolbrillante (Brightlantern)",
      "Cresta de Corvin (Corvin's Crest)", "Puentedehierro (Ironbridge)", "Skalvin", "Toresk"
    ],
    ciudad: [
      "Doraine", "Meridia", "Puerta del Rey (King's Gate)", "Myrkhos",
      "Rularn", "Ordos", "Thane", "Rahgbat"
    ],
    metropolis: [
      "Gran Myrkhos", "Metrópolis de Doraine", "Bastión de Rularn", "Ordos la Magnífica",
      "Thane de las Siete Torres", "Meridia Mayor", "Nueva Rahgbat", "Ciudad Imperial de la Puerta"
    ]
  },

  // 2. DISTRITOS Y PUNTOS DE INTERÉS
  distritosNombres: {
    1: "Suburbios / Bajos fondos (Slums)",
    2: "Distrito Bajo (Low)",
    3: "Distrito Artesanal (Artisan)",
    4: "Mercado (Market)",
    5: "Distrito Alto (High)",
    6: "Distrito del Templo",
    7: "Distrito Universitario (University)",
    8: "Distrito del Castillo"
  },

  puntosInteresPorDistrito: {
    1: { 1: "Pensión de mala muerte", 2: "Taberna pobre", 3: "Taberna pobre", 4: "Guarida criminal", 5: "Tienda pobre", 6: "Choza de brujo/bruja" },
    2: { 1: "Cementerio", 2: "Taberna pobre", 3: "Taberna pobre", 4: "Tienda pobre", 5: "Tienda estándar", 6: "Almacenes / Tinglados" },
    3: { 1: "Picota y cepos", 2: "Templo modesto", 3: "Templo modesto", 4: "Taberna estándar", 5: "Taberna estándar", 6: "Tienda rica" },
    4: { 1: "Adivino / Clarividente", 2: "Bienes raros y exóticos", 3: "Bienes raros y exóticos", 4: "Bienes raros y exóticos", 5: "Boticario", 6: "Mercado negro ilícito" },
    5: { 1: "Sede gremial (Guildhouse)", 2: "Taberna rica", 3: "Taberna rica", 4: "Mansión señorial", 5: "Tienda rica", 6: "Puesto de la guardia" },
    6: { 1: "Templo en ruinas", 2: "Capilla de deidad menor", 3: "Capilla de deidad menor", 4: "Santuario prohibido", 5: "Templo de dios mayor", 6: "Lugar santo venerado" },
    7: { 1: "Biblioteca", 2: "Sala de conferencias / Aulas", 3: "Sala de conferencias / Aulas", 4: "Taberna estándar", 5: "Taberna estándar", 6: "Torre de mago" },
    8: { 1: "Casa de baños reales", 2: "Guarnición de la guardia", 3: "Guarnición de la guardia", 4: "Teatro o coliseo", 5: "Teatro o coliseo", 6: "Castillo real" }
  },

  // 3. TABERNAS DESACOPLADAS (1d20 Nombre + 1d20 Fama)
  tabernasNombres: {
    1: "La Rata Carmesí (The Crimson Rat)",
    2: "La Moza Danzante (The Dancing Wench)",
    3: "El Perro y el Farol (The Dog & Lantern)",
    4: "La Anguila Oxidada (The Rusty Eel)",
    5: "El Cáliz del Demonio (The Demon's Goblet)",
    6: "El Tridente Cantarín (The Singing Trident)",
    7: "El Jabalí y la Vela (The Boar & Candle)",
    8: "La Daga de Plata (The Silver Dagger)",
    9: "La Rueda Mugrienta (The Filthy Wheel)",
    10: "El Cerdo del Capitán (The Captain's Pig)",
    11: "La Serpiente Alegre (The Jolly Snake)",
    12: "El Camello Sabio (The Wise Camel)",
    13: "Capa y Dragón (Cloak & Dragon)",
    14: "El Hacha Real (The Royal Axe)",
    15: "La Campana Dorada (The Gilded Bell)",
    16: "La Espada y el Jarro (The Blade & Tankard)",
    17: "El Escudo Borracho (The Drunken Shield)",
    18: "Copa y Cuchilla (Cup & Blade)",
    19: "El Yunque Enjoyado (The Jeweled Anvil)",
    20: "La Rana y el Bardo (The Frog & Bard)"
  },

  tabernasFamas: {
    1: "Juego clandestino de altas apuestas",
    2: "Venta ilícita de venenos",
    3: "Clientes y patrones magos",
    4: "Rituales de sectarios en el sótano",
    5: "Comida y bebidas exóticas y raras",
    6: "Concursos de baile",
    7: "Peleas brutales y sangrientas",
    8: "Túneles antiguos en la bodega",
    9: "Matones a sueldo disponibles",
    10: "Espías del Gremio de Ladrones",
    11: "Hostilidad hacia lanzadores de conjuros",
    12: "Clientela habitual de la guardia de la ciudad",
    13: "Fosos de combate clandestinos",
    14: "Actuaciones de bardos legendarios",
    15: "Reuniones de traición y conspiración",
    16: "Prohibición absoluta de portar armas",
    17: "Hostilidad abierta hacia los forasteros",
    18: "Colección de taxidermia exótica",
    19: "Clientela de piratas y contrabandistas",
    20: "Concursos de beber hasta caerse"
  },

  menuPobre: [
    "Repollo hervido (1d4 pc)", "Dátiles y aceitunas (1d4 pc)", "Guiso de cabra (1d4 pc)", "Huevos encurtidos (1d4 pc)",
    "Pan y queso (1d4 pc)", "Caldo sustancioso (1d4 pc)", "Empanada de carne (1d4 pc)", "Brocheta de champiñones (1d4 pc)",
    "Pichón asado (1d4 pc)", "Pan plano con ajo (1d4 pc)", "Muslo de pavo (1d4 pc)", "Rata en un palo (1d4 pc)"
  ],
  menuEstandar: [
    "Filete de caimán (1d6 pp)", "Jamón al romero (1d6 pp)", "Pez flagelador crudo (1d6 pp)", "Venado sellado al fuego (1d6 pp)",
    "Avestruz a la manteca (1d6 pp)", "Curry picante de ternera (1d6 pp)", "Ancas de rana saladas (1d6 pp)", "Caracoles a las finas hierbas (1d6 pp)",
    "Anguila tigre a la parrilla (1d6 pp)", "Jabalí asado al espetón (1d6 pp)", "Cuello de pato al azafrán (1d6 pp)", "Pudín carmesí (1d6 pp)"
  ],
  menuRico: [
    "Ojos fritos de basilisco (1d8 po)", "Filete de serpiente gigante (1d8 po)", "Huevos de grifo (1d8 po)", "Escarabajos confitados (1d8 po)",
    "Huesos horneados de trol (1d8 po)", "Alitas de cocatriz (1d8 po)", "Gusanos de seda crujientes (1d8 po)", "Murciélago aguijón asado (1d8 po)",
    "Cola de langosta gigante (1d8 po)", "Lengua de draco/wyvern (1d8 po)", "Algas aulladoras (1d8 po)", "Jarretes de dragón (1d8 po)"
  ],

  bebidas: {
    1: "Grog de percebes (1 pc) - Tirada de CON DC 9 o ceguera durante 1 hora",
    2: "Aguachirle adulterada (3 pc) - Tóxica, -1 a CON durante 1 hora",
    3: "Vino avinagrado (5 pc) - Dientes púrpura, -1 a CAR durante 1 hora",
    4: "Cerveza rancia (5 pc) - Entorpece sentidos, -1 a SAB durante 1 hora",
    5: "Aguardiente puro (1 pp) - Quema, elimina 1 efecto negativo de otra bebida",
    6: "Cerveza de la casa (2 pp) - Fresca y pura, la 1ª jarra es gratis",
    7: "Hidromiel de otoño (3 pp) - Floral, duplica el efecto de la sig. bebida",
    8: "Vino de verano mediano (5 pp) - Espumoso, +1 a CAR durante 1 hora",
    9: "Brandy élfico (5 pp) - Especiado, +1 a INT durante 1 hora",
    10: "Cerveza dorada enana (5 pp) - Helada, recupera 1d4 PG por jarra",
    11: "Vino real añejo (2 po) - Suave y selecto, +1 a SAB durante 1 hora",
    12: "Whisky Van Dinkle (20 po/sorbo) - Solo 5 botellas destiladas, +1 PX"
  },

  // 4. TIENDAS DESACOPLADAS (1d20 Nombre + 1d20 Fama)
  tiendasPorRiqueza: {
    pobre: [
      "Panadería inmunda", "Equipo de aventura usado", "Recolector de cadáveres",
      "Casa de empeños / Perista", "Prestamista / Usurero", "Recolector de estiércol",
      "Tenería / Curtiduría", "Cirujano de callejón", "Cazador de ratas",
      "Pescadero", "Garito de juego", "Fumadero de drogas / opio"
    ],
    estandar: [
      "Cervecero / Destilador", "Carnicero", "Sastre", "Herrero común",
      "Equipo de aventurero", "Trabajador del cuero", "Carpintero de barcos",
      "Cantero / Picapedrero", "Heraldo / Pregonero", "Ganado y bestias de tiro"
    ],
    rica: [
      "Sastre de alta costura", "Soplador de vidrio", "Joyero", "Boticario",
      "Artista / Pintor", "Escriba / Copista", "Salón gremial (Guildhall)",
      "Orfebre", "Maestro herrero", "Antigüedades y curiosidades"
    ]
  },

  tiendasNombres: {
    1: "Fink e Hijos (Fink & Sons)",
    2: "El Sapo Imperial (Imperial Toad)",
    3: "El Martillo Robusto (The Stout Hammer)",
    4: "Mercancías de Rose (Rose's Commodities)",
    5: "Las Hijas del Rey (The King's Daughters)",
    6: "Zorro y Enseres (Fox & Sundries)",
    7: "Castillo Noble (Noble Castle)",
    8: "Galas de Sylvia (Sylvia's Finery)",
    9: "Curiosidades del Alba (Sunrise Oddments)",
    10: "El Escarabajo de la Esquina (The Corner Beetle)",
    11: "Almacén de Grigor (Grigor's Storehouse)",
    12: "Torreón Real (Royal Keep)",
    13: "Corona y Monedas (Crown & Coins)",
    14: "El Fogón de Ralina (Ralina's Hearth)",
    15: "La Rueda de la Aldea (The Village Wheel)",
    16: "Mercancías Doradas (Golden Wares)",
    17: "Bota y Mercado (Boot & Market)",
    18: "El Farol de Marvolo (Marvolo's Lantern)",
    19: "Los Víveres Alegres (The Merry Vendibles)",
    20: "Los Cepos de Jade (The Jade Stocks)"
  },

  tiendasFamas: {
    1: "Dueño anciano y muy querido",
    2: "Comprar cualquier cosa de valor",
    3: "Cobrar un sobreprecio a los forasteros",
    4: "Tapadera del Gremio de Ladrones",
    5: "La gata de la tienda, Crumpet",
    6: "Se necesita contraseña para entrar",
    7: "Cerveza gratis con cada compra",
    8: "Guardaespaldas fuertemente armados",
    9: "Pagar oro excelente por objetos raros",
    10: "Sala secreta tras una estantería",
    11: "Perista de bienes robados e ilícitos",
    12: "Hacen sonar un gong con cada venta",
    13: "Bienes procedentes de tierras lejanas",
    14: "Artículos defectuosos y baratos",
    15: "Acusar a los clientes de ser ladrones",
    16: "Todo su género está teñido de azul",
    17: "El loro parlante del dueño",
    18: "Famosa estatua de bronce de un diablillo",
    19: "Estar encantada / embrujada",
    20: "Grave plaga de roedores agresivos"
  },

  clientesMatriz: [
    ["Mago estrafalario", "1d10 niños", "Vieja bruja con risotadas", "Enano ruidoso"],
    ["Elfo nervioso", "Matón sospechoso", "Guardia de la ciudad", "1d4 clérigos"],
    ["Goblin pirata", "Mago encapuchado", "Caballero semiorco", "Hombre borracho"],
    ["Niño con mirada fija", "Aventureros rivales", "Mediano taciturno", "Ladronzuelo / Carterista"]
  ],

  // ==========================================
  // DISPARADORES DE GENERACIÓN
  // ==========================================
  generateSettlement: function(tipoParam) {
    var sizeKey = tipoParam ? tipoParam.toLowerCase() : "pueblo";
    if (sizeKey.indexOf("aldea") !== -1) sizeKey = "aldea";
    else if (sizeKey.indexOf("metrop") !== -1) sizeKey = "metropolis";
    else if (sizeKey.indexOf("ciudad") !== -1) sizeKey = "ciudad";
    else sizeKey = "pueblo";

    var d8Name = this.d(8);
    var listaNombres = this.nombres[sizeKey] || this.nombres.pueblo;
    var nombreAsentamiento = listaNombres[d8Name - 1];

    var diceCount = 4;
    var diceSides = 4;
    var labelSize = "Pueblo (4d4)";

    if (sizeKey === "aldea") {
      diceCount = 3; diceSides = 4; labelSize = "Aldea (3d4)";
    } else if (sizeKey === "ciudad") {
      diceCount = 6; diceSides = 6; labelSize = "Gran Ciudad (6d6)";
    } else if (sizeKey === "metropolis") {
      diceCount = 8; diceSides = 8; labelSize = "Metrópolis (8d8)";
    }

    var d6Align = this.d(6);
    var alineamiento = "Legal (Lawful)";
    if (d6Align >= 4 && d6Align <= 5) alineamiento = "Neutral";
    else if (d6Align === 6) alineamiento = "⚠️ Caótico (Zona de riesgo constante)";

    var distritosGenerados = [];
    var highestDie = -1;
    var govDistrictIndex = 0;

    for (var i = 0; i < diceCount; i++) {
      var dieVal = this.d(diceSides);
      if (dieVal > highestDie) {
        highestDie = dieVal;
        govDistrictIndex = i;
      }

      var numPoi = this.d(4);
      var pois = [];
      var poiTable = this.puntosInteresPorDistrito[dieVal] || this.puntosInteresPorDistrito[1];

      for (var p = 0; p < numPoi; p++) {
        var d6Poi = this.d(6);
        pois.push(poiTable[d6Poi]);
      }

      distritosGenerados.push({
        num: i + 1,
        die: dieVal,
        nombre: this.distritosNombres[dieVal] || ("Distrito " + dieVal),
        puntos: pois
      });
    }

    return {
      nombre: nombreAsentamiento,
      tipo: labelSize,
      alineamiento: alineamiento,
      sedeGovIdx: govDistrictIndex + 1,
      distritos: distritosGenerados,
      rolls: "Nombre: 1d8:[" + d8Name + "] | Alineamiento: 1d6:[" + d6Align + "]"
    };
  },

  // GENERADOR DE TABERNAS CON 2d20 INDEPENDIENTES
  generateTavern: function(tipoRiqueza) {
    var d20Nombre = this.d(20);
    var d20Fama = this.d(20);

    var nombreTab = this.tabernasNombres[d20Nombre];
    var famaTab = this.tabernasFamas[d20Fama];

    var menu = [];
    var bebidasList = [];
    var categoria = tipoRiqueza || "Estandar";

    if (categoria === "Pobre") {
      for (var i = 0; i < 3; i++) menu.push(this.pick(this.menuPobre));
      for (var j = 0; j < 2; j++) bebidasList.push(this.bebidas[this.d(6)]);
    } else if (categoria === "Rica") {
      menu.push(this.pick(this.menuEstandar));
      menu.push(this.pick(this.menuRico));
      menu.push(this.pick(this.menuRico));
      for (var k = 0; k < 3; k++) {
        var bRoll = Math.min(12, this.d(6) + this.d(6));
        bebidasList.push(this.bebidas[bRoll]);
      }
    } else {
      menu.push(this.pick(this.menuPobre));
      menu.push(this.pick(this.menuEstandar));
      menu.push(this.pick(this.menuEstandar));
      for (var l = 0; l < 3; l++) bebidasList.push(this.bebidas[this.d(12)]);
    }

    return {
      nombre: nombreTab,
      fama: famaTab,
      categoria: categoria,
      menu: menu,
      bebidas: bebidasList,
      rolls: "2d20 Taberna: [Nombre: " + d20Nombre + ", Fama: " + d20Fama + "]"
    };
  },

  // GENERADOR DE TIENDAS CON 2d20 INDEPENDIENTES
  generateShop: function(tipoRiqueza) {
    var categoria = tipoRiqueza || "estandar";
    var d20Nombre = this.d(20);
    var d20Fama = this.d(20);

    var nombreShop = this.tiendasNombres[d20Nombre];
    var famaShop = this.tiendasFamas[d20Fama];

    var listaTipos = this.tiendasPorRiqueza[categoria.toLowerCase()] || this.tiendasPorRiqueza.estandar;
    var tipoGiro = this.pick(listaTipos);

    // Cliente interesante (2d4 Matriz)
    var fila = this.d(4);
    var col = this.d(4);
    var cliente = this.clientesMatriz[fila - 1][col - 1];

    return {
      nombre: nombreShop,
      tipo: tipoGiro,
      fama: famaShop,
      cliente: cliente,
      categoria: categoria.toUpperCase(),
      rolls: "2d20 Tienda: [Nombre: " + d20Nombre + ", Particularidad: " + d20Fama + "] | Cliente: 2d4:[Fila " + fila + ", Col " + col + "]"
    };
  }
};

/* Fuente: tables/magic_armor.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_ARMOR = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Armadura (2d6) - 12: Mitrilo + volver a tirar
  types: [
    { min: 2, max: 5, name: "Cuero (Leather)" },
    { min: 6, max: 7, name: "Cota de malla (Chainmail)" },
    { min: 8, max: 9, name: "Escudo (Shield)" },
    { min: 10, max: 11, name: "Armadura de placas (Plate mail)" }
  ],

  // Rasgo de la Armadura (d20)
  features: [
    "Rostro demoníaco con cuernos",
    "Motivo de hojas de roble",
    "Tachonada con dientes de tiburón",
    "Escamas de dragón",
    "Púas de hueso o metal",
    "Runas arcanas tenues",
    "Placas de caparazón de tortuga",
    "Hecha de quitina de escorpión",
    "Metal bañado en oro / hilo de oro",
    "Chamuscada, con olor a quemado",
    "Escamas de pez de color blanco perla",
    "Supura sangre",
    "Adornada con hongos / cubierta de setas",
    "Sonido distante del océano",
    "Engarzada con cristales",
    "Cubierta de símbolos sagrados",
    "Exuda savia de árbol",
    "Bordes borrosos e indistintos",
    "Ojo de gato grande y dorado",
    "Cubierta de escarcha"
  ],

  // Beneficio de la Armadura (d12)
  benefits: [
    "Una vez al día, desvías un ataque a distancia que fuera a impactarte.",
    "Las pruebas para estabilizarte son fáciles (CD 9).",
    "No puedes ser derribado mientras estés consciente.",
    "Las criaturas no detectadas no tienen ventaja al atacarte.",
    "Conoces el idioma diabólico (Diabolic) y eres inmune al fuego, la lava y el magma.",
    "Eres inmune a las maldiciones de un objeto a tu elección.",
    "Una vez al día, obtienes ventaja en todos los ataques durante 3 asaltos.",
    "Tienes un bonificador de +4 en tus contadores de muerte (death timers).",
    "Obtienes inmunidad a un veneno tras haber sufrido sus efectos una vez.",
    "Conoces el idioma celestial (Celestial) y puedes volar durante 3 asaltos una vez al día.",
    "Los impactos críticos contra ti se tratan como impactos normales.",
    "Ignoras cualquier daño que recibas de 3 puntos o menos."
  ],

  // Maldición de la Armadura (d12)
  curses: [
    "Sufres 2d10 de daño si te quitas esta armadura.",
    "Tu grupo no puede sumar bonificadores de CAR a las tiradas de reacción.",
    "Las monturas te temen y no te permitirán montarlas.",
    "Tirada de SAB a CD 15 en el primer asalto de combate o atacas a la criatura más cercana.",
    "Sufres el doble de daño por armas contundentes (blunt/bludgeoning).",
    "La armadura ocupa 5 espacios de equipo (gear slots) y es extremadamente ruidosa y tosca.",
    "Los ataques a distancia contra ti tienen ventaja.",
    "Trata un 1 natural en una tirada de ataque contra ti como un impacto crítico.",
    "Los conjuros beneficiosos dirigidos a ti son difíciles de lanzar (CD 15).",
    "Tienes desventaja en las pruebas de Destreza.",
    "Hay una probabilidad secreta de 1 en 6 de que cada PNJ aliado te traicione.",
    "Sufres el doble de daño por armas de plata / plateadas."
  ],

  rollBonus() {
    const total = this.d(6) + this.d(6);
    if (total <= 5) return { bonus: "+0", roll: total };
    if (total <= 8) return { bonus: "+1", roll: total };
    if (total <= 11) return { bonus: "+2", roll: total };
    return { bonus: "+3", roll: total };
  },

  rollArmorType() {
    let isMithral = false;
    let roll = this.d(6) + this.d(6);
    let rollsHistory = [`2d6:${roll}`];

    if (roll === 12) {
      isMithral = true;
      roll = Math.floor(Math.random() * 10) + 2; // Reroll 2-11
      rollsHistory.push(`Mitrilo -> Re-roll 2d6:${roll}`);
    }

    const typeObj = this.types.find(t => roll >= t.min && roll <= t.max) || this.types[0];
    const finalName = isMithral ? `${typeObj.name} de Mitrilo` : typeObj.name;

    return { name: finalName, isMithral: isMithral, rolls: rollsHistory.join(", ") };
  },

  generateArmor(forceBonus = null, forceBenefitsCount = 1, forceCursesCount = 0) {
    const armorBase = this.rollArmorType();
    const bonusData = forceBonus ? { bonus: forceBonus, roll: "-" } : this.rollBonus();
    const featureRoll = this.d(20);
    const feature = this.features[featureRoll - 1];

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      chosenBenefits.push(this.benefits[r - 1]);
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      chosenCurses.push(this.curses[r - 1]);
    }

    const nombreFinal = bonusData.bonus === "+0" 
      ? `${armorBase.name} Mágica` 
      : `${armorBase.name} ${bonusData.bonus}`;

    return {
      nombre: nombreFinal,
      tipo: armorBase.name,
      bonificador: bonusData.bonus,
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: [${armorBase.rolls}], Bono: 2d6:${bonusData.roll}, Rasgo: d20:${featureRoll}`
    };
  }
};

/* Fuente: tables/magic_personality.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_PERSONALITY = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. TIRADA DE PERSONALIDAD (2d6)
  // ==========================================
  rollPersonalityCheck() {
    const roll = this.d(6) + this.d(6);
    if (roll <= 3) {
      return { hasPersonality: true, virtues: 0, flaws: 1, roll: roll, label: "0 Virtudes / 1 Defecto" };
    }
    if (roll <= 9) {
      return { hasPersonality: false, virtues: 0, flaws: 0, roll: roll, label: "Sin Consciencia" };
    }
    if (roll <= 11) {
      return { hasPersonality: true, virtues: 1, flaws: 1, roll: roll, label: "1 Virtud / 1 Defecto" };
    }
    return { hasPersonality: true, virtues: 1, flaws: 0, roll: roll, label: "1 Virtud / 0 Defectos" };
  },

  // ==========================================
  // 2. VIRTUDES DEL OBJETO (d20 con subtiradas 1d4)
  // ==========================================
  virtueEntries: [
    { id: 1, resolve: () => "Insiste en proteger a las personas y criaturas que le agradan." },
    { id: 2, resolve: () => "Advierte a su portador si presiente un peligro inminente." },
    { id: 3, resolve: () => "Traduce con gusto el idioma primordial (Primordial) para su portador." },
    { id: 4, resolve: () => "Percibe criaturas ocultas a distancia cercana (near), pero no su ubicación exacta." },
    {
      id: 5,
      resolve: (d) => {
        const sub = d(4);
        const favors = ["unicornio (d4:1-2)", "unicornio (d4:1-2)", "dragón (d4:3)", "noble (d4:4)"];
        return `Le debe un favor un: ${favors[sub - 1]}.`;
      }
    },
    { id: 6, resolve: () => "Inspira el respeto de los seguidores de un dios." },
    { id: 7, resolve: () => "Ocasionalmente recuerda historia antigua de gran utilidad." },
    { id: 8, resolve: () => "Proporciona sueños placenteros y buen descanso a su portador." },
    { id: 9, resolve: () => "Asesora a su portador sobre qué decir exactamente en cada situación." },
    { id: 10, resolve: () => "A veces proporciona consejos estratégicos útiles." },
    { id: 11, resolve: () => "Ocasionalmente nota detalles importantes que a otros se les han pasado por alto." },
    { id: 12, resolve: () => "Intenta mediar en desacuerdos entre objetos conscientes." },
    {
      id: 13,
      resolve: (d) => {
        const sub = d(4);
        const animals = ["perros", "caballos", "gatos", "pájaros"];
        return `Presencia tranquilizadora para: ${animals[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 14, resolve: () => "Posee un sentido del olfato extremadamente agudo." },
    { id: 15, resolve: () => "Conoce la dirección del curso de agua corriente más cercano." },
    { id: 16, resolve: () => "Legal (Lawful): intimida a criaturas caóticas." },
    { id: 17, resolve: () => "Neutral (Neutral): intimida tanto a criaturas legales como caóticas." },
    { id: 18, resolve: () => "Caótico (Chaotic): intimida a criaturas legales." },
    { id: 19, resolve: () => "Posee profecías auténticas, pero no está seguro de su significado." },
    {
      id: 20,
      resolve: (d) => {
        const sub = d(4);
        const undo = ["mal", "mentira", "conjuro", "alianza"];
        return `Puede deshacer un/a gran: ${undo[sub - 1]} (d4:${sub}).`;
      }
    }
  ],

  // ==========================================
  // 3. DEFECTOS DEL OBJETO (d20 con subtiradas 1d4)
  // ==========================================
  flawEntries: [
    {
      id: 1,
      resolve: (d) => {
        const sub = d(4);
        const fears = ["la oscuridad", "las alimañas", "las alturas", "el agua"];
        return `Tiene miedo a: ${fears[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 2, resolve: () => "Prefería a un dueño anterior y siempre está haciendo comparaciones." },
    { id: 3, resolve: () => "Parlotea mientras su portador intenta concentrarse." },
    {
      id: 4,
      resolve: (d) => {
        const sub = d(4);
        const races = ["los elfos", "los enanos", "los humanos", "los trasgos/goblins"];
        return `Le desagradan: ${races[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 5, resolve: () => "Intenta meter a su portador en peleas para «tener algo que hacer»." },
    { id: 6, resolve: () => "No quiere separarse de su portador bajo ningún concepto." },
    {
      id: 7,
      resolve: (d) => {
        const sub = d(4);
        const opposes = ["el juego/apuestas", "las juergas", "el sigilo", "el robo"];
        return `Se opone a: ${opposes[sub - 1]} (d4:${sub}).`;
      }
    },
    { id: 8, resolve: () => "Acusa a todo el mundo de mentir; tiene razón de vez en cuando." },
    {
      id: 9,
      resolve: (d) => {
        const sub = d(4);
        const noHurt = ["legales (d4:1-2)", "legales (d4:1-2)", "neutrales (d4:3)", "caóticas (d4:4)"];
        return `No dañará a criaturas: ${noHurt[sub - 1]}.`;
      }
    },
    { id: 10, resolve: () => "Cree que su portador es un peón en su plan apocalíptico." },
    { id: 11, resolve: () => "Intenta escapar constantemente de su portador actual." },
    { id: 12, resolve: () => "Exige que su portador cumpla los estrictos rituales de su dios." },
    { id: 13, resolve: () => "Insiste en reunirse con su creador, vivo o muerto." },
    { id: 14, resolve: () => "No soporta a otros objetos mágicos conscientes." },
    { id: 15, resolve: () => "Se niega a ser utilizado para tareas «sin importancia» o «aburridas»." },
    { id: 16, resolve: () => "Se vuelve mágicamente inerte a propósito cuando se enfada con su portador." },
    { id: 17, resolve: () => "Insiste en ser limpiado meticulosamente todos los días." },
    { id: 18, resolve: () => "Le encanta el color morado y desprecia todos los demás colores." },
    {
      id: 19,
      resolve: (d) => {
        const sub = d(4);
        const opposesAction = ["negociar (d4:1)", "pelear (d4:2-3)", "pelear (d4:2-3)", "planificar (d4:4)"];
        return `Se opone a: ${opposesAction[sub - 1]}.`;
      }
    },
    { id: 20, resolve: () => "Finge conocer información que en realidad no sabe." }
  ],

  // ==========================================
  // 4. RASGO DE PERSONALIDAD (MATRIZ d4, d4)
  // ==========================================
  personalityTraitsMatrix: [
    ["Imperioso / Déspota (Imperious)", "Educado / Cortés (Polite)", "Puritano (Puritanical)", "Encantador (Charming)"],
    ["Ansioso (Anxious)", "Recto / Virtuoso (Righteous)", "Crítico / Juzgador (Critical)", "Teatral / Dramático (Theatrical)"],
    ["Mandón (Bossy)", "Noble (Noble)", "Codicioso / Avaro (Greedy)", "Protector (Protective)"],
    ["Impulsivo (Impulsive)", "Valiente (Brave)", "Cruel / Mordaz (Vicious)", "Leal (Loyal)"]
  ],

  // Alineamientos
  alignments: ["Legal (Lawful)", "Neutral (Neutral)", "Caótico (Chaotic)"],

  // ==========================================
  // 5. GENERADOR DE NOMBRES / IDEAS (3 x d20)
  // ==========================================
  nameGenPrefix: [
    "Carmesí (The Crimson)", "Cenizo/a (The Ashen)", "De Ortival (Ortival's)", "Del Destino / Maldito/a (The Doom)",
    "Del Crepúsculo (The Twilight)", "Astral (The Astral)", "De Krull (Krull's)", "Voraz / Cruel (The Vicious)",
    "De Memnon (Memnon's)", "Bendito/a (The Blessed)", "Infernal (The Infernal)", "De Madeera (Madeera's)",
    "Susurrante (The Whispering)", "Impío/a (The Unholy)", "De Shune (Shune's)", "Perdido/a (The Lost)",
    "De Ord (Ord's)", "Justo/a / Justiciero/a (The Righteous)", "Demoníaco/a (The Demonic)", "Primordial (The Primordial)"
  ],
  nameGenCore: [
    "Hoja / Filo (Blade)", "Emplasto / Cataplasma (Poultice)", "Rito (Rite)", "Hacha (Axe)",
    "Martillo (Hammer)", "Varita (Wand)", "Capa (Cape)", "Tomo (Tome)",
    "Letanía (Litany)", "Bastón (Staff)", "Pergamino (Scroll)", "Calavera (Skull)",
    "Arco (Bow)", "Espada (Sword)", "Escudo (Shield)", "Daga (Dagger)",
    "Armadura (Armor)", "Orbe (Orb)", "Ojo (Eye)", "Elixir (Elixir)"
  ],
  nameGenSuffix: [
    "de la Muerte Atronadora", "de las Eras", "del Archimago", "de la Destrucción",
    "de Brak", "del Poder", "del Pacto", "de las Tierras Salvajes",
    "de la Horda", "de Sangre", "del Tiempo", "de la Reina Liche",
    "de los Ancianos", "de la Locura", "de la Marchitez", "de la Aniquilación",
    "del Dragón", "de los Resucitados", "de la Furia Elemental", "de los Espíritus"
  ],

  // ==========================================
  // 6. MÉTODOS GENERADORES
  // ==========================================

  // Genera un nombre evocador completo
  generateItemNameIdea() {
    const r1 = this.d(20);
    const r2 = this.d(20);
    const r3 = this.d(20);

    const prefix = this.nameGenPrefix[r1 - 1];
    const core = this.nameGenCore[r2 - 1];
    const suffix = this.nameGenSuffix[r3 - 1];

    return {
      nombreCompleto: `${prefix} ${core} ${suffix}`,
      rolls: `d20:${r1}, d20:${r2}, d20:${r3}`
    };
  },

  // Genera la consciencia y personalidad del objeto
  generatePersonality(forceVirtues = null, forceFlaws = null) {
    let virtuesCount = forceVirtues;
    let flawsCount = forceFlaws;
    let checkInfo = "Personalidad Forzada";

    if (virtuesCount === null && flawsCount === null) {
      const check = this.rollPersonalityCheck();
      checkInfo = `Chequeo 2d6:${check.roll} (${check.label})`;
      if (!check.hasPersonality) {
        return {
          esConsciente: false,
          descripcion: "Objeto inanimado común (Sin consciencia)",
          rolls: checkInfo
        };
      }
      virtuesCount = check.virtues;
      flawsCount = check.flaws;
    }

    // Rasgo de personalidad d4, d4
    const rRow = this.d(4);
    const rCol = this.d(4);
    const trait = this.personalityTraitsMatrix[rRow - 1][rCol - 1];

    // Alineamiento y Comunicación
    const alignment = this.pick(this.alignments);

    // Virtudes
    const virtuesList = [];
    const vRolls = [];
    for (let i = 0; i < virtuesCount; i++) {
      const r = this.d(20);
      vRolls.push(r);
      virtuesList.push(this.virtueEntries[r - 1].resolve(this.d));
    }

    // Defectos
    const flawsList = [];
    const fRolls = [];
    for (let i = 0; i < flawsCount; i++) {
      const r = this.d(20);
      fRolls.push(r);
      flawsList.push(this.flawEntries[r - 1].resolve(this.d));
    }

    return {
      esConsciente: true,
      alineamiento: alignment,
      rasgoTemperamento: trait,
      comunicacion: "Telepática con el portador (Prueba enfrentada CAR +2 para resistirse)",
      virtudes: virtuesList.length > 0 ? virtuesList : ["Ninguna"],
      defectos: flawsList.length > 0 ? flawsList : ["Ninguno"],
      rolls: `${checkInfo}, Temperamento: d4:${rRow}/d4:${rCol}${vRolls.length ? `, Virtudes: d20:[${vRolls.join(",")}]` : ""}${fRolls.length ? `, Defectos: d20:[${fRolls.join(",")}]` : ""}`
    };
  }
};

/* Fuente: tables/magic_potions.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_POTIONS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. RASGOS VISUALES / SENSORIALES (3 x d8)
  // ==========================================
  featuresCol1: [
    "Picante",
    "Clara como el agua",
    "Azul profundo",
    "Olor cítrico",
    "Sulfuroso",
    "Con gas / Efervescente",
    "Gélido",
    "Rojo sangre"
  ],

  featuresCol2: [
    "Araña en vinagre en su interior",
    "Vapores verdes",
    "Estrellas y luna diminutas",
    "Copos/virutas de oro en el líquido",
    "Vórtice arremolinado",
    "Silbido tenue",
    "Tintinea y tiembla",
    "Ojo en su interior"
  ],

  featuresCol3: [
    "Burbujeante",
    "Franjas/vetas moradas",
    "Llamas en la superficie",
    "Olor floral",
    "Calavera en la botella",
    "Caliente / Cálido",
    "Molar grande en su interior",
    "Destellos rosas en estrella"
  ],

  // ==========================================
  // 2. BENEFICIOS DE LA POCIÓN (d12)
  // ==========================================
  benefitEntries: [
    {
      id: 1,
      name: "Inmunidad Elemental",
      resolve: (d) => {
        const sub = d(4);
        const types = ["Fuego", "Frío", "Electricidad", "Veneno"];
        return `Inmune durante 5 asaltos a: ${types[sub - 1]} (d4:${sub}).`;
      }
    },
    {
      id: 2,
      name: "Curación",
      resolve: (d) => {
        const sub = d(4);
        const amounts = ["1d4 PG", "2d6 PG", "3d8 PG", "4d10 PG"];
        return `Cura ${amounts[sub - 1]} (d4:${sub}).`;
      }
    },
    {
      id: 3,
      name: "Telepatía",
      resolve: () => "Lee la mente de todas las criaturas a distancia cercana (near) durante 1 hora."
    },
    {
      id: 4,
      name: "Vuelo",
      resolve: () => "Vuela a distancia cercana (near) durante 5 asaltos."
    },
    {
      id: 5,
      name: "Velocidad Asombrosa",
      resolve: () => "Durante 5 asaltos, muévete a distancia lejana (far) en tu turno y realiza una acción igualmente."
    },
    {
      id: 6,
      name: "Invisibilidad",
      resolve: () => "Te vuelves invisible durante 5 asaltos."
    },
    {
      id: 7,
      name: "Adaptación Acuática",
      resolve: () => "Respira bajo el agua y conoce el idioma merrano (Merran) durante 1 hora."
    },
    {
      id: 8,
      name: "Poderío Físico",
      resolve: () => "Una característica se convierte en 18 (+4) durante 5 asaltos."
    },
    {
      id: 9,
      name: "Forma Gaseosa",
      resolve: () => "Conviértete en un gas morado volador durante 5 asaltos."
    },
    {
      id: 10,
      name: "Panacea",
      resolve: () => "Cura cualquier enfermedad o aflicción que afecte al bebedor."
    },
    {
      id: 11,
      name: "Habla Animal",
      resolve: () => "Habla con los animales y entiéndelos durante 1 hora."
    },
    {
      id: 12,
      name: "Invulnerabilidad",
      resolve: () => "Eres inmune a todo daño durante 5 asaltos."
    }
  ],

  // ==========================================
  // 3. MALDICIONES DE LA POCIÓN (d12)
  // ==========================================
  curseEntries: [
    {
      id: 1,
      resolve: () => "Prueba de SAB CD 15 o atacas a la criatura más cercana durante 3 asaltos."
    },
    {
      id: 2,
      resolve: () => "Te conviertes en un tritón/salamandra (newt) de 1 PG durante 3 asaltos."
    },
    {
      id: 3,
      resolve: () => "Una característica se convierte en 3 (-4) durante 1 hora."
    },
    {
      id: 4,
      resolve: () => "Prueba de CON CD 15 o recibes 2d10 de daño."
    },
    {
      id: 5,
      resolve: () => "Olvidas todos los idiomas que conoces durante 1 hora."
    },
    {
      id: 6,
      resolve: () => "Reduces a la mitad de tu tamaño y tienes desventaja en los ataques durante 5 asaltos."
    },
    {
      id: 7,
      resolve: () => "Cantas a pleno pulmón durante 3 asaltos."
    },
    {
      id: 8,
      resolve: () => "Te vuelves magnético para todo el metal cercano (near) a ti durante 1 hora."
    },
    {
      id: 9,
      resolve: () => "Sientes el impulso irrefrenable de saltar a cualquier foso/hoyo que veas durante 1 hora."
    },
    {
      id: 10,
      resolve: () => "Prueba de CON CD 15 o quedas ciego durante 5 asaltos."
    },
    {
      id: 11,
      resolve: () => "Eres el origen de un conjuro de caparazón antimagia (antimagic shell) durante 1 hora."
    },
    {
      id: 12,
      resolve: (d) => {
        const sub = d(4);
        const parts = (sub <= 2) ? "brazos (d4:1-2)" : "piernas (d4:3-4)";
        return `Dos extremidades se petrifican durante 5 asaltos: ${parts}.`;
      }
    }
  ],

  // ==========================================
  // 4. MEZCLAR POCIONES (d12: Efecto 1 & Efecto 2)
  // ==========================================
  mixingTable: [
    {
      min: 1, max: 1,
      efecto1: "Quien la bebe flota 2 asaltos.",
      efecto2: "Vapores tóxicos: CON CD 12 o 1d4 de daño."
    },
    {
      min: 2, max: 2,
      efecto1: "Adquiere personalidad: 1 virtud.",
      efecto2: "Pierde todas las maldiciones."
    },
    {
      min: 3, max: 3,
      efecto1: "Se vuelve totalmente inerte.",
      efecto2: "Adquiere personalidad: 1 defecto."
    },
    {
      min: 4, max: 4,
      efecto1: "Vuelve a tirar 2 beneficios nuevos.",
      efecto2: "Quien la bebe es invisible 2 asaltos."
    },
    {
      min: 5, max: 5,
      efecto1: "Los efectos de la maldición se reducen a la mitad.",
      efecto2: "Duplica los efectos de un beneficio."
    },
    {
      min: 6, max: 6,
      efecto1: "Adquiere 1 maldición adicional.",
      efecto2: "Explota: DES CD 12 o 1d6 de daño."
    },
    {
      min: 7, max: 7,
      efecto1: "Quien la bebe olvida 1 idioma.",
      efecto2: "Adquiere personalidad: 1 virtud."
    },
    {
      min: 8, max: 8,
      efecto1: "Adquiere 1 beneficio adicional.",
      efecto2: "Los efectos de los beneficios se reducen a la mitad."
    },
    {
      min: 9, max: 9,
      efecto1: "Adquiere personalidad: 1 defecto.",
      efecto2: "Duplica los efectos de una maldición."
    },
    {
      min: 10, max: 10,
      efecto1: "Todos los efectos se invierten.",
      efecto2: "Quien la bebe: CON CD 12 o 1d8 de daño."
    },
    {
      min: 11, max: 11,
      efecto1: "Pierde todos los beneficios.",
      efecto2: "Quien la bebe: -1 a una característica aleatoria."
    },
    {
      min: 12, max: 12,
      efecto1: "Quien la bebe: +1 a una característica aleatoria.",
      efecto2: "1 efecto aleatorio se vuelve permanente."
    }
  ],

  // ==========================================
  // 5. MÉTODOS GENERADORES
  // ==========================================

  // Genera el aspecto combinando las 3 columnas
  generateAppearance() {
    const r1 = this.d(8);
    const r2 = this.d(8);
    const r3 = this.d(8);

    const f1 = this.featuresCol1[r1 - 1];
    const f2 = this.featuresCol2[r2 - 1];
    const f3 = this.featuresCol3[r3 - 1];

    return {
      text: `${f1}, ${f2}, ${f3}`,
      rolls: `d8:${r1}, d8:${r2}, d8:${r3}`
    };
  },

  // Generador de Poción Mágica Completa
  generatePotion(forceBenefitsCount = 1, forceCursesCount = 0) {
    const app = this.generateAppearance();

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      const entry = this.benefitEntries[r - 1];
      chosenBenefits.push(entry.resolve(this.d));
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      const entry = this.curseEntries[r - 1];
      chosenCurses.push(entry.resolve(this.d));
    }

    return {
      nombre: "Poción Mágica",
      tipo: "Poción (Consumible)",
      rasgo: app.text,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Rasgos: [${app.rolls}], Beneficios: d12:[${bRolls.join(",")}]${cRolls.length ? `, Maldiciones: d12:[${cRolls.join(",")}]` : ""}`
    };
  },

  // Generador de Resultado al Mezclar 2 Pociones
  mixPotions() {
    const roll = this.d(12);
    const result = this.mixingTable[roll - 1];
    const chooseSide = this.d(2); // 1 o 2

    return {
      titulo: "Mezcla Alquímica de Pociones",
      resultado: chooseSide === 1 ? result.efecto1 : result.efecto2,
      opcion1: result.efecto1,
      opcion2: result.efecto2,
      rolls: `d12:${roll}, d2:${chooseSide}`
    };
  }
};

/* Fuente: tables/magic_spells.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_SPELLS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. RASGOS DE PERGAMINOS Y VARITAS (d8)
  // ==========================================
  scrollFeatures: [
    "Marcado al fuego en cuero",
    "Grabado en lámina de cobre",
    "Papiro descolorido",
    "Rollo de pergamino manchado",
    "Tallado en hueso",
    "Cincelado en lajas de piedra",
    "Grabado en cristal / vidrio",
    "Tatuado en piel de dragón"
  ],

  wandFeatures: [
    "Tallada en hueso",
    "Ojo parpadeante en el mango",
    "Metal estelar pulido y elegante",
    "Madera pulida",
    "Obsidiana con puntas de marfil",
    "Chispas eléctricas",
    "Cristal dentado / irregular",
    "Hecha de calaveras diminutas"
  ],

  // ==========================================
  // 2. CATÁLOGO DE CONJUROS POR NIVEL (TIER 1–5)
  // ==========================================
  spellsByTier: {
    1: [
      "Alarma (Alarm)",
      "Manos ardientes (Burning hands)",
      "Hechizar persona (Charm person)",
      "Detectar magia (Detect magic)",
      "Caída de pluma (Feather fall)",
      "Disco flotante (Floating disk)",
      "Retener portal (Hold portal)",
      "Luz (Light)",
      "Armadura de mago (Mage armor)",
      "Proyectil mágico (Magic missile)",
      "Protección contra el mal (Protection from evil)",
      "Sueño (Sleep)"
    ],
    2: [
      "Flecha ácida (Acid arrow)",
      "Alterar el propio aspecto (Alter self)",
      "Detectar pensamientos (Detect thoughts)",
      "Objeto fijo (Fixed object)",
      "Retener persona (Hold person)",
      "Invisibilidad (Invisibility)",
      "Abrir (Knock)",
      "Levitar (Levitate)",
      "Imagen múltiple (Mirror image)",
      "Paso brumoso (Misty step)",
      "Silencio (Silence)",
      "Telaraña (Web)"
    ],
    3: [
      "Animar a los muertos (Animate dead)",
      "Disipar magia (Dispel magic)",
      "Fabricar (Fabricate)",
      "Bola de fuego (Fireball)",
      "Volar (Fly)",
      "Forma gaseosa (Gaseous form)",
      "Ilusión (Illusion)",
      "Rayo (Lightning bolt)",
      "Círculo mágico (Magic circle)",
      "Protección contra la energía (Protection from energy)",
      "Recado (Sending)",
      "Hablar con los muertos (Speak with dead)"
    ],
    4: [
      "Ojo arcano (Arcane eye)",
      "Nube aniquiladora (Cloudkill)",
      "Confusión (Confusion)",
      "Controlar el agua (Control water)",
      "Puerta dimensional (Dimension door)",
      "Adivinación (Divination)",
      "Pasar a través de la pared (Passwall)",
      "Polimorfar (Polymorph)",
      "Esfera elástica (Resilient sphere)",
      "Piel pétrea (Stoneskin)",
      "Telequinesis (Telekinesis)",
      "Muro de fuerza (Wall of force)"
    ],
    5: [
      "Caparazón antimagia (Antimagic shell)",
      "Crear no muerto (Create undead)",
      "Desintegrar (Disintegrate)",
      "Retener monstruo (Hold monster)",
      "Desplazamiento de plano (Plane shift)",
      "Palabra de poder mortal (Power word kill)",
      "Orbe prismático (Prismatic orb)",
      "Escudriñar (Scrying)",
      "Cambio de forma (Shapechange)",
      "Invocar extraplanar (Summon extraplanar)",
      "Teletransporte (Teleport)",
      "Deseo (Wish)"
    ]
  },

  // ==========================================
  // 3. TIRADAS DE NIVEL DE CONJURO (2d6)
  // ==========================================
  rollSpellTier() {
    const total = this.d(6) + this.d(6);
    if (total <= 5) return { tier: 1, roll: total };
    if (total <= 7) return { tier: 2, roll: total };
    if (total <= 9) return { tier: 3, roll: total };
    if (total <= 11) return { tier: 4, roll: total };
    return { tier: 5, roll: total };
  },

  // Obtiene un conjuro al azar de un Tier específico
  getRandomSpell(tier = 1) {
    const list = this.spellsByTier[tier] || this.spellsByTier[1];
    const roll = this.d(12);
    return {
      spell: list[roll - 1],
      roll: roll
    };
  },

  // Resuelve la tabla de origen para Maldiciones/Beneficios de Varita (2d6)
  rollWandModifierSource() {
    const total = this.d(6) + this.d(6);
    if (total <= 6) return { category: "armor", label: "Armadura", roll: total };
    if (total <= 8) return { category: "potion", label: "Poción", roll: total };
    if (total <= 11) return { category: "utility", label: "Utilidad", roll: total };
    return { category: "weapon", label: "Arma", roll: total };
  },

  // ==========================================
  // 4. MÉTODOS GENERADORES
  // ==========================================

  // Generador de Pergamino de Conjuro
  generateScroll(forceTier = null) {
    const tierData = forceTier ? { tier: forceTier, roll: "-" } : this.rollSpellTier();
    const spellData = this.getRandomSpell(tierData.tier);
    const featureRoll = this.d(8);
    const feature = this.scrollFeatures[featureRoll - 1];

    return {
      nombre: `Pergamino: ${spellData.spell}`,
      tipo: "Pergamino (Scroll / Consumible)",
      nivel: `Nivel ${tierData.tier} (Tier ${tierData.tier})`,
      conjuro: spellData.spell,
      rasgo: feature,
      beneficios: [`Permite lanzar el conjuro ${spellData.spell} una sola vez.`],
      maldiciones: ["Consumible de un solo uso."],
      rolls: `Nivel: 2d6:${tierData.roll}, Conjuro: d12:${spellData.roll}, Rasgo: d8:${featureRoll}`
    };
  },

  // Generador de Varita Mágica
  generateWand(forceTier = null, forceCursesCount = 0) {
    const tierData = forceTier ? { tier: forceTier, roll: "-" } : this.rollSpellTier();
    const spellData = this.getRandomSpell(tierData.tier);
    const featureRoll = this.d(8);
    const feature = this.wandFeatures[featureRoll - 1];

    const chosenCurses = [];
    const rollsExtra = [];

    // Si tiene maldiciones, las resuelve consultando las tablas de origen (2d6)
    if (forceCursesCount > 0) {
      for (let i = 0; i < forceCursesCount; i++) {
        const source = this.rollWandModifierSource();
        rollsExtra.push(`Origen Maldición: 2d6:${source.roll} (${source.label})`);

        let curseText = "";
        const r12 = this.d(12);

        if (source.category === "armor" && window.SD_DATA.MAGIC_ARMOR) {
          curseText = window.SD_DATA.MAGIC_ARMOR.curses[r12 - 1];
        } else if (source.category === "potion" && window.SD_DATA.MAGIC_POTIONS) {
          const entry = window.SD_DATA.MAGIC_POTIONS.curseEntries[r12 - 1];
          curseText = entry.resolve(this.d);
        } else if (source.category === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
          curseText = window.SD_DATA.MAGIC_WEAPONS.curses[r12 - 1];
        } else if (window.SD_DATA.MAGIC_UTILITY) {
          curseText = window.SD_DATA.MAGIC_UTILITY.curses[r12 - 1];
        } else {
          curseText = "Maldición desconocida.";
        }

        chosenCurses.push(curseText);
      }
    }

    return {
      nombre: `Varita de ${spellData.spell}`,
      tipo: "Varita (Wand)",
      nivel: `Nivel ${tierData.tier} (Tier ${tierData.tier})`,
      conjuro: spellData.spell,
      rasgo: feature,
      beneficios: [`Permite canalizar el conjuro ${spellData.spell}.`],
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Nivel: 2d6:${tierData.roll}, Conjuro: d12:${spellData.roll}, Rasgo: d8:${featureRoll}${rollsExtra.length ? `, ${rollsExtra.join(", ")}` : ""}`
    };
  }
};

/* Fuente: tables/magic_utility.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_UTILITY = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Utilidad (d20)
  types: [
    "Broche (Brooch)",
    "Anillo (Ring)",
    "Botas (Boots)",
    "Capa (Cloak)",
    "Amuleto (Amulet)",
    "Frasco / Petaca (Flask)",
    "Tomo (Tome)",
    "Diadema / Tiara (Circlet)",
    "Parche para el ojo (Eyepatch)",
    "Guanteletes (Gauntlets)",
    "Símbolo sagrado (Holy symbol)",
    "Sombrero (Hat)",
    "Copa / Cáliz (Goblet)",
    "Yelmo (Helm)",
    "Estatuilla (Statuette)",
    "Gafas protectoras (Goggles)",
    "Bolsa (Bag)",
    "Roca / Piedra (Rock)",
    "Sobretodo / Tabardo (Surcoat)",
    "Máscara (Mask)"
  ],

  // Rasgo de Utilidad (d20)
  features: [
    "Con forma de cuervo",
    "Iridiscente",
    "Púas y espinas crueles",
    "Hecho/a a partir de una rana grande",
    "Engarzado/a con gemas",
    "Hilo de oro / herrajes de oro",
    "Hecho/a de piel de basilisco",
    "Poseído/a por un espíritu",
    "Hecho/a de humo con forma sólida",
    "Cubierto/a de pequeñas espinas",
    "Hecho/a con plumas raras",
    "Tiene alas diminutas",
    "Cambia lentamente de color",
    "Con forma de murciélago",
    "Herrajes de plata deslustrada",
    "Hecho/a de seda de araña",
    "Emite un zumbido en tonos suaves y dulces",
    "Sacudida de dolor al primer contacto",
    "Palpita como un corazón",
    "Deja una estela de niebla tenue"
  ],

  // Beneficio de Utilidad (d12)
  benefits: [
    "No puedes ser escudriñado ni detectado mágicamente.",
    "Se conecta a un bolsillo interdimensional con 5 espacios de equipo (gear slots).",
    "Una característica se convierte en 18 (+4) mientras usas/vistes el objeto.",
    "Una vez al día, te teletransportas a distancia cercana (near).",
    "Los conjuros dañinos dirigidos a ti tienen dificultad CD 15 para ser lanzados.",
    "Eres inmune a, 1d4: 1. fuego, 2. frío, 3. electricidad, 4. veneno.",
    "Detectas puertas secretas cuando se encuentran a distancia corta / a tu alcance (close).",
    "Puedes ver criaturas invisibles e incorpóreas.",
    "Tu movimiento no se ve obstaculizado por ningún tipo de terreno.",
    "Puedes aguantar la respiración durante 1 hora.",
    "No necesitas comer ni beber para sobrevivir.",
    "Puedes caminar sobre superficies no sólidas durante 2 asaltos seguidos cada vez."
  ],

  // Maldición de Utilidad (d12)
  curses: [
    "Pudre lentamente todos los demás objetos no mágicos que lo toquen.",
    "Inflige 1d4 de daño y deja ampollas cada vez que se usa.",
    "El objeto atrae el mal tiempo a su ubicación.",
    "No puedes ser curado mediante magia; solo mediante descanso.",
    "Resuena estrepitosamente como un gong cada vez que el portador mata a una criatura.",
    "El objeto atrae a todos los no muertos que se encuentren a distancia lejana (far).",
    "Pierde temporalmente su magia si se sumerge o empapa en agua.",
    "Tienes desventaja en las pruebas de Constitución.",
    "Sientes el impulso irrefrenable de prender fuego a cualquier objeto de pergamino o papel.",
    "Debes beber sangre una vez al día o sufres 1d8 de daño.",
    "El objeto debe devorar 1d10 po al día o pierde su magia hasta ser alimentado.",
    "El objeto desprende un hedor espantoso que dificulta todas tus pruebas de Carisma (hard)."
  ],

  generateUtilityItem(forceBenefitsCount = 1, forceCursesCount = 0) {
    const dType = this.d(20);
    const baseType = this.types[dType - 1];
    const featureRoll = this.d(20);
    const feature = this.features[featureRoll - 1];

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      chosenBenefits.push(this.benefits[r - 1]);
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      chosenCurses.push(this.curses[r - 1]);
    }

    return {
      nombre: `${baseType} Mágico/a`,
      tipo: baseType,
      bonificador: "Especial",
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: d20:${dType}, Rasgo: d20:${featureRoll}`
    };
  }
};

/* Fuente: tables/magic_weapons.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MAGIC_WEAPONS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // Tipo de Arma (d20)
  types: [
    { min: 1, max: 1, name: "Flechas (2d6) (Arrows)" },
    { min: 2, max: 3, name: "Espada bastarda (Bastard sword)" },
    { min: 4, max: 4, name: "Garrote / Clava (Club)" },
    { min: 5, max: 5, name: "Ballesta (Crossbow)" },
    { min: 6, max: 6, name: "Virotes de ballesta (2d6) (Crossbow bolts)" },
    { min: 7, max: 8, name: "Daga (Dagger)" },
    { min: 9, max: 9, name: "Gran hacha (Greataxe)" },
    { min: 10, max: 10, name: "Mandoble / Espadón (Greatsword)" },
    { min: 11, max: 11, name: "Jabalina (Javelin)" },
    { min: 12, max: 12, name: "Arco largo (Longbow)" },
    { min: 13, max: 14, name: "Espada larga (Longsword)" },
    { min: 15, max: 15, name: "Maza (Mace)" },
    { min: 16, max: 16, name: "Arco corto (Shortbow)" },
    { min: 17, max: 18, name: "Espada corta (Shortsword)" },
    { min: 19, max: 19, name: "Bastón (Staff)" },
    { min: 20, max: 20, name: "Martillo de guerra (Warhammer)" }
  ],

  // Rasgo del Arma (d20)
  features: [
    "Deja una estela de chispas brillantes",
    "Forjada en metal estelar",
    "Oxidada y mellada",
    "Gema incrustada en el pomo / mango",
    "Gotea icor verde",
    "Con motivo lunar y bañada en plata (silvered)",
    "Galaxias arremolinadas en su superficie",
    "De madera férrea (Ironwood)",
    "Grabada con runas",
    "Aura fantasmal tenue",
    "Con incrustaciones de oro",
    "Deja una estela de incienso",
    "Engarzada con piedras preciosas",
    "Chispas que danzan por su superficie",
    "Con forma de animal",
    "Tallada en granito",
    "Guarnición / herrajes de hueso de dragón",
    "Susurra en un idioma",
    "Gotea agua de mar",
    "Transforma la sangre en pétalos de rosa"
  ],

  // Beneficio del Arma (d12)
  benefits: [
    "Corta o aplasta cualquier material.",
    "Una vez al día, se enciende en llamas durante 5 asaltos e inflige 1d4 de daño adicional.",
    "Prueba de CAR CD 15 para dar órdenes a un animal salvaje a distancia lejana (far).",
    "Decapita al enemigo con un impacto crítico.",
    "Al impactar a una criatura, averiguas su Nombre Verdadero.",
    "Dispara un rayo de energía a distancia cercana (near) con DES, infligiendo 1d6 de daño.",
    "Una vez al día, desvías un ataque cuerpo a cuerpo que fuera a impactarte.",
    "Recuperas 1d6 puntos de golpe cuando abates a una criatura.",
    "Tienes ventaja en las tiradas de iniciativa.",
    "Tiene la propiedad de arrojadiza, alcance a distancia cercana (near), y regresa a ti.",
    "Doble de daño contra, 1d4: 1-2. no muertos, 3. demonios, 4. dragones.",
    "Vuelve a tirar los 1 naturales una vez por tirada al atacar con esta arma."
  ],

  // Maldición del Arma (d12)
  curses: [
    "No puedes ver a, 1d4: 1. no muertos, 2. demonios, 3. serpientes, 4. arañas.",
    "Sientes el impulso irrefrenable de tragarte todas las gemas a primera vista.",
    "Quema un muñeco de paja a diario o el arma perderá su magia temporalmente.",
    "Cualquier fuente de luz que sostengas se apaga de inmediato.",
    "Debes alabar a un dios en voz alta cada vez que veas su símbolo.",
    "Las criaturas venenosas siempre te eligen a ti como objetivo de sus ataques.",
    "Te transformas en rata todos los días a medianoche durante una hora.",
    "Tus pruebas para nadar son siempre extremas (CD 18).",
    "El contacto con el oro te quema.",
    "Baña el arma en sangre a diario o perderá su magia temporalmente.",
    "No puedes llevar armadura mientras empuñes esta arma.",
    "El arma puede poseerte si gana una prueba enfrentada de CAR (+2)."
  ],

  rollBonus() {
    const total = this.d(6) + this.d(6);
    if (total <= 3) return { bonus: "+0", roll: total };
    if (total <= 9) return { bonus: "+1", roll: total };
    if (total <= 11) return { bonus: "+2", roll: total };
    return { bonus: "+3", roll: total };
  },

  generateWeapon(forceBonus = null, forceBenefitsCount = 1, forceCursesCount = 0) {
    const dType = this.d(20);
    const typeObj = this.types.find(t => dType >= t.min && dType <= t.max) || this.types[0];
    const bonusData = forceBonus ? { bonus: forceBonus, roll: "-" } : this.rollBonus();
    const featureRoll = this.d(20);
    const feature = this.features[featureRoll - 1];

    const chosenBenefits = [];
    const bRolls = [];
    for (let i = 0; i < forceBenefitsCount; i++) {
      const r = this.d(12);
      bRolls.push(r);
      chosenBenefits.push(this.benefits[r - 1]);
    }

    const chosenCurses = [];
    const cRolls = [];
    for (let i = 0; i < forceCursesCount; i++) {
      const r = this.d(12);
      cRolls.push(r);
      chosenCurses.push(this.curses[r - 1]);
    }

    const nombreFinal = bonusData.bonus === "+0" 
      ? `${typeObj.name} Mágica` 
      : `${typeObj.name} ${bonusData.bonus}`;

    return {
      nombre: nombreFinal,
      tipo: typeObj.name,
      bonificador: bonusData.bonus,
      rasgo: feature,
      beneficios: chosenBenefits,
      maldiciones: chosenCurses.length > 0 ? chosenCurses : ["Ninguna"],
      rolls: `Tipo: d20:${dType}, Bono: 2d6:${bonusData.roll}, Rasgo: d20:${featureRoll}`
    };
  }
};


/* Fuente: tables/mundane_tables.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.MUNDANE_TABLES = {
  // --- MÉTODOS AUXILIARES ---
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. PIEDRAS PRECIOSAS (GEMAS) & RASGO ÚNICO
  // ==========================================
  gemTypes: [
    { name: "Perla (Pearl)", value: 40 },
    { name: "Esmeralda (Emerald)", value: 120 },
    { name: "Rubí (Ruby)", value: 200 },
    { name: "Zafiro (Sapphire)", value: 280 },
    { name: "Diamante (Diamond)", value: 360 }
  ],

  // Rasgo Único (d20)
  gemFeatures: [
    "Falsificación",
    "Deforme",
    "Mal construido",
    "Con imperfecciones",
    "Desgastado por el uso",
    "Reluciente / Impecable",
    "Marcas de mordiscos",
    "Quemado",
    "Polvoriento",
    "Cubierto de barro seco",
    "Marca de artista poco común",
    "Reparado",
    "Mellado / Desconchado",
    "Manchas de sangre seca",
    "Material inusual",
    "Frágil",
    "Oxidado / Podrido",
    "Repintado / Pintado encima",
    "Grabado con iniciales",
    "Histórico / Famoso"
  ],

  // ==========================================
  // 2. OBJETOS DE LUJO (LUXURY ITEMS)
  // Característica (d20) + Objeto (d20 con subtirada 1d4)
  // ==========================================
  luxuryFeatures: [
    "Dorado/a",                                                    // 1
    "De cobre grabado",                                            // 2
    "Con escamas de dragón",                                       // 3
    "Bañado/a en oro",                                             // 4
    "Tallado/a en hueso",                                          // 5
    "Engarzado/a en ámbar",                                        // 6
    "Pintura de",                                                  // 7
    "De plata",                                                    // 8
    "De jade",                                                     // 9
    "Tapiz de",                                                    // 10
    "De mármol blanco",                                            // 11
    "De marfil",                                                   // 12
    "De cristal",                                                  // 13
    "Dorado/a",                                                    // 14
    "De hueso de dragón",                                          // 15
    "Reliquia sagrada",                                            // 16
    "De meteorito",                                                // 17
    "De obra maestra",                                             // 18
    "Envuelto/a en seda",                                          // 19
    "De vidriera"                                                  // 20
  ],

  luxuryObjects: [
    { text: "Figura humanoide a tamaño real" },                                                          // 1
    { text: "Trofeo", sub: ["Colmillo", "Cuerno", "Colmillo/Garra", "Calavera"] },                      // 2
    { text: "Altar", sub: ["Memnon", "Ord", "Madeera", "Madeera"] },                                    // 3 (1: Memnon, 2: Ord, 3-4: Madeera)
    { text: "Estatuilla", sub: ["Zorro", "Gato", "Perro", "Búho"] },                                     // 4
    { text: "Mobiliario", sub: ["Cofre", "Mesa", "Arqueta/Caja de seguridad", "Silla"] },              // 5
    { text: "Icono", sub: ["Caos", "Neutralidad", "Ley", "Ley"] },                                      // 6 (1: Caos, 2: Neutralidad, 3-4: Ley)
    { text: "Busto", sub: ["Dios", "Gobernante", "Héroe", "Bardo"] },                                   // 7
    { text: "Huevo", sub: ["Dragón", "Basilisco", "Grifo", "Grifo"] },                                  // 8 (1: Dragón, 2: Basilisco, 3-4: Grifo)
    { text: "Joya", sub: ["Amuleto de la suerte (charm)", "Amuleto", "Guardapelo", "Sello/Anillo de sello"] }, // 9
    { text: "Máscara", sub: ["Cuervo", "Bufón", "Ladrón", "Dios"] },                                   // 10
    { text: "Recipiente", sub: ["Espejo", "Jarrón", "Vasija de cerámica", "Jarra/Aguamanil"] },        // 11
    { text: "Vajilla", sub: ["Cáliz", "Plato", "Cubertería", "Jarra"] },                                // 12
    { text: "Ornamento", sub: ["Tiara/Diadema", "Anillo", "Cadena", "Torque"] },                         // 13
    { text: "Botella", sub: ["Vino", "Grog", "Hidromiel", "Cerveza"] },                                 // 14
    { text: "Artículo de escriba", sub: ["Portapergaminos", "Portapergaminos", "Tintero", "Pluma"] },   // 15 (1-2: Portapergaminos, 3: Tintero, 4: Pluma)
    { text: "Pieza de armadura", sub: ["Escudo", "Yelmo", "Brazales", "Grebas"] },                      // 16
    { text: "Instrumento musical", sub: ["Laúd", "Viola", "Arpa", "Flauta"] },                         // 17
    { text: "Contenedor funerario", sub: ["Urna", "Ataúd", "Féretro/Andas", "Sarcófago"] },             // 18
    { text: "Regalía", sub: ["Corona", "Cetro", "Orbe", "Trono"] },                                      // 19
    { text: "Figura de insecto", sub: ["Escarabajo", "Escarabajo", "Mariposa", "Araña"] }               // 20 (1-2: Escarabajo, 3: Mariposa, 4: Araña)
  ],

  // ==========================================
  // 3. DONES (BOONS)
  // ==========================================

  // Juramentos (d8)
  oaths: [
    "El duque te conseguirá una audiencia con la reina.",
    "La Guardia de la Ciudad perdonará un delito que hayas cometido.",
    "Una dríade te protegerá mientras estés en su arboleda.",
    "Un miembro del Gremio de Ladrones te dará acceso a la cámara de gemas.",
    "Un unicornio curará una herida grave o una aflicción.",
    "Un maestro forjador enano te fabricará una espada espectacular.",
    "Un barón te concederá el título de caballero o alguacil.",
    "El Círculo de Magos te teletransportará mágicamente a cualquier lugar."
  ],

  // Secretos (d12 compuesto: Detalle 1 + Detalle 2)
  secrets: {
    firstHalf: [
      "El Nombre Verdadero de",
      "Quien manipula a",
      "El asesino de",
      "El impostor de",
      "El horrible plan de",
      "La ubicación secreta de",
      "El/la amado/a de",
      "Pruebas de los crímenes de",
      "El tesoro acumulado de",
      "La debilidad de",
      "La identidad secreta de",
      "Quien chantajea a"
    ],
    secondHalf: [
      "El rey",
      "Un poderoso demonio",
      "Un maestro de la espada legendario",
      "El líder de la iglesia",
      "Un poderoso hechicero",
      "Un grupo de aventureros rival",
      "El líder del Gremio de Ladrones",
      "Un reverenciado caballero de Santa Terragnis",
      "Un famoso cazador de dragones",
      "Los líderes del asentamiento",
      "Una temible reina liche",
      "Un PNJ muy querido"
    ]
  },

  // Bendiciones (d12)
  blessings: [
    { name: "Visión espectral (Wraithsight)", desc: "Puedes ver criaturas invisibles y ocultas." },
    { name: "Nueve vidas (Nine Lives)", desc: "Las próximas nueve veces que caigas a 0 PG, recuperas 1 PG." },
    { name: "Piel demoníaca (Demonskin)", desc: "Eres inmune al daño por fuego." },
    { name: "Paso de araña (Spiderwalk)", desc: "Puedes trepar por paredes y superficies verticales." },
    { name: "Beso del pueblo del mar (Merfolk's Kiss)", desc: "Puedes respirar bajo el agua como si fuera aire." },
    { name: "Bendición de Gede (Gede's Blessing)", desc: "Puedes hablar con los animales y entenderlos." },
    { name: "Ojo arcano (Arcane Eye)", desc: "Tres veces al día, ventaja para lanzar un conjuro." },
    { name: "Marca de Shune (Shune's Mark)", desc: "Cuando matas a una criatura, te curas 1d6 puntos de golpe." },
    { name: "Paso fantasmal (Ghostwalk)", desc: "Una vez al día, te vuelves incorpóreo durante 1d4 asaltos." },
    { name: "Picadura de la muerte (Death's Sting)", desc: "Eres inmune a los efectos del veneno." },
    { name: "Rito de furia (Rite of Rage)", desc: "Una vez al día, infliges el doble de daño." },
    { name: "Halo divino (Divine Halo)", desc: "Los conjuros hostiles dirigidos a ti tienen dificultad CD 15 para ser lanzados." }
  ],

  // ==========================================
  // 4. MÉTODOS GENERADORES
  // ==========================================

  // Generador de Gema (con opción de ser Gigante y Rasgo Único)
  generateGem(forceGiant = false) {
    const baseGem = this.pick(this.gemTypes);
    const isGiant = forceGiant || (this.d(6) === 6); // 1 en 6 de ser gigante si no se fuerza
    const finalValue = isGiant ? (baseGem.value * 2) : baseGem.value;
    const featureRoll = this.d(20);
    const feature = this.gemFeatures[featureRoll - 1];

    const title = isGiant ? `Gema Gigante: ${baseGem.name}` : baseGem.name;

    return {
      nombre: title,
      valor: `${finalValue} po`,
      esGigante: isGiant ? "Sí (Valor x2)" : "No",
      rasgoUnico: feature,
      rolls: `d20:${featureRoll}`
    };
  },

  // Generador de Objeto de Lujo
  generateLuxuryItem() {
    const dFeature = this.d(20);
    const dObject = this.d(20);
    const featureText = this.luxuryFeatures[dFeature - 1];
    const objectEntry = this.luxuryObjects[dObject - 1];

    let objectDesc = objectEntry.text;
    let dSub = null;

    if (objectEntry.sub) {
      dSub = this.d(4);
      const subSelection = objectEntry.sub[dSub - 1];
      objectDesc = `${objectEntry.text} (${subSelection})`;
    }

    const itemFinal = `${featureText} ${objectDesc}`;
    const rollsText = dSub ? `d20:${dFeature}, d20:${dObject}, d4:${dSub}` : `d20:${dFeature}, d20:${dObject}`;

    return {
      nombre: itemFinal,
      caracteristica: featureText,
      objeto: objectDesc,
      rasgoUnico: this.pick(this.gemFeatures), // Los objetos de lujo también usan la tabla de rasgo único
      rolls: rollsText
    };
  },

  // Generador de Juramento
  generateOath() {
    const roll = this.d(8);
    return {
      tipo: "Juramento (Oath)",
      detalle: this.oaths[roll - 1],
      rolls: `d8:${roll}`
    };
  },

  // Generador de Secreto
  generateSecret() {
    const d1 = this.d(12);
    const d2 = this.d(12);
    const part1 = this.secrets.firstHalf[d1 - 1];
    const part2 = this.secrets.secondHalf[d2 - 1];

    return {
      tipo: "Secreto (Secret)",
      detalle: `${part1} ${part2}`,
      parte1: part1,
      parte2: part2,
      rolls: `d12:${d1}, d12:${d2}`
    };
  },

  // Generador de Bendición
  generateBlessing() {
    const roll = this.d(12);
    const blessing = this.blessings[roll - 1];

    return {
      tipo: "Bendición (Blessing)",
      nombre: blessing.name,
      efecto: blessing.desc,
      rolls: `d12:${roll}`
    };
  },

  // Generador General de Don (Boon)
  generateBoon() {
    const rollType = this.d(3);
    if (rollType === 1) return this.generateOath();
    if (rollType === 2) return this.generateSecret();
    return this.generateBlessing();
  }
};

/* Fuente: tables/oracle_tables.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.ORACLE = {
    d: function (sides) {
        return Math.floor(Math.random() * sides) + 1;
    },

    // 1. Nombres de Mazmorra (50 x 50 x 50)
    dungeonNamesCol1: [
        "Citadel",
        "Wreck",
        "Ruins",
        "Chapel",
        "Library",
        "Grave",
        "Fortress",
        "Laboratory",
        "Abbey",
        "Prison",
        "Tomb",
        "Forge",
        "Ravine",
        "Monastery",
        "Spire",
        "Hideout",
        "Castle",
        "Tunnels",
        "Halls",
        "Tower",
        "Steading",
        "Undercity",
        "Aerie",
        "Vaults",
        "Observatory",
        "Asylum",
        "Sepulcher",
        "Barrow",
        "Palace",
        "Keep",
        "Caverns",
        "Fane",
        "Garden",
        "Temple",
        "Maze",
        "Redoubt",
        "Pyramid",
        "Sanctum",
        "Mines",
        "Lair",
        "Den",
        "Pits",
        "Grotto",
        "Depths",
        "Stronghold",
        "Manse",
        "Warrens",
        "Monolith",
        "Crypts",
        "Dungeon"
    ],
    dungeonNamesCol1_ES: [
        "Ciudadela",
        "Pecio / Naufragio",
        "Ruinas",
        "Capilla",
        "Biblioteca",
        "Tumba / Fosa",
        "Fortaleza",
        "Laboratorio",
        "Abadía",
        "Prisión",
        "Sepulcro",
        "Fragua",
        "Barranco",
        "Monasterio",
        "Aguja / Espira",
        "Guarida / Escondite",
        "Castillo",
        "Túneles",
        "Salas",
        "Torre",
        "Granja / Asentamiento",
        "Ciudad Subterránea",
        "Nido / Nidal",
        "Bóvedas / Cámaras",
        "Observatorio",
        "Manicomio / Asilo",
        "Sepulcro",
        "Túmulo",
        "Palacio",
        "Torreón",
        "Cavernas",
        "Santuario / Sagrario",
        "Jardín",
        "Templo",
        "Laberinto",
        "Reducto / Bastión",
        "Pirámide",
        "Sanctasanctórum",
        "Minas",
        "Cubil",
        "Madriguera",
        "Fosas",
        "Gruta",
        "Profundidades",
        "Fortín / Baluarte",
        "Mansión",
        "Galerías",
        "Monolito",
        "Criptas",
        "Mazmorra"
    ],

    dungeonNamesCol2: [
        "Haunted",
        "Forgotten",
        "Disgraced",
        "Barbaric",
        "Monstrous",
        "Fallen",
        "Cursed",
        "Bound",
        "Poisonous",
        "Cyclopean",
        "Sky",
        "Frozen",
        "Burning",
        "Thieving",
        "Crystalline",
        "Otherworldly",
        "Blighted",
        "Celestial",
        "Draconic",
        "Ethereal",
        "Desecrated",
        "Reptilian",
        "Metallic",
        "Insectoid",
        "Elemental",
        "Arachnid",
        "Demonic",
        "Fungal",
        "Golden",
        "Fey",
        "Lightning",
        "Piscine",
        "Corrupt",
        "Righteous",
        "Mud",
        "Night",
        "Hidden",
        "Forbidden",
        "Shimmering",
        "Glass",
        "Radiant",
        "Mad",
        "Wild",
        "Lost",
        "Majestic",
        "Antediluvian",
        "Prophesied",
        "Shrouded",
        "Cosmic",
        "Legendary"
    ],
    dungeonNamesCol2_ES: [
        "Encantado/a",
        "Olvidado/a",
        "Deshonrado/a",
        "Bárbaro/a",
        "Monstruoso/a",
        "Caído/a",
        "Maldito/a",
        "Encadenado/a",
        "Venenoso/a",
        "Ciclópeo/a",
        "del Cielo",
        "Helado/a",
        "Ardiente",
        "Ladrón/ona",
        "Cristalino/a",
        "de Otro Mundo",
        "Asolado/a",
        "Celestial",
        "Dracónico/a",
        "Etéreo/a",
        "Profanado/a",
        "Reptiliano/a",
        "Metálico/a",
        "Insectoide",
        "Elemental",
        "Arácnido/a",
        "Demoníaco/a",
        "Fúngico/a",
        "Dorado/a",
        "Feérico/a",
        "del Relámpago",
        "Piscino/a",
        "Corrupto/a",
        "Virtuoso/a",
        "del Fango",
        "de la Noche",
        "Oculto/a",
        "Prohibido/a",
        "Reluciente",
        "de Cristal",
        "Radiante",
        "Demente",
        "Salvaje",
        "Perdido/a",
        "Majestuoso/a",
        "Antediluviano/a",
        "Profetizado/a",
        "Velado/a",
        "Cósmico/a",
        "Legendario/a"
    ],

    dungeonNamesCol3: [
        "Idol",
        "Betrayer",
        "King",
        "Elephant",
        "God",
        "Cult",
        "Knight",
        "Hero",
        "Pirates",
        "Spirit",
        "Sisters",
        "Sword",
        "Beast",
        "Ancients",
        "Lost",
        "Outcasts",
        "Sailor",
        "Undead",
        "Mage",
        "Hoard",
        "Mummy",
        "Usurper",
        "Saint",
        "Mechanism",
        "Brothers",
        "Lord",
        "Descendant",
        "Abomination",
        "Hermit",
        "Warlord",
        "Hunter",
        "Guild",
        "Vampire",
        "Philosopher",
        "Warriors",
        "Queen",
        "Gem",
        "Secret",
        "Emperor",
        "Weapon",
        "Sorcerer",
        "Crown",
        "Ancestor",
        "Runes",
        "Tree",
        "Assassin",
        "Relic",
        "Blessing",
        "Ritual",
        "Overlord"
    ],
    dungeonNamesCol3_ES: [
        "Ídolo",
        "Traidor",
        "Rey",
        "Elefante",
        "Dios",
        "Culto",
        "Caballero",
        "Héroe",
        "Piratas",
        "Espíritu",
        "Hermanas",
        "Espada",
        "Bestia",
        "Ancestrales",
        "Perdidos",
        "Parias",
        "Marinero",
        "No-muerto",
        "Mago",
        "Tesoro",
        "Momia",
        "Usurpador",
        "Santo/a",
        "Mecanismo",
        "Hermanos",
        "Señor",
        "Descendiente",
        "Abominación",
        "Ermitaño",
        "Señor de la Guerra",
        "Cazador",
        "Gremio",
        "Vampiro",
        "Filósofo",
        "Guerreros",
        "Reina",
        "Gema",
        "Secreto",
        "Emperador",
        "Arma",
        "Hechicero",
        "Corona",
        "Ancestro",
        "Runas",
        "Árbol",
        "Asesino",
        "Reliquia",
        "Bendición",
        "Ritual",
        "Soberano Supremo"
    ],

    // 2. Prompts / Estímulos (100 Verbos + 100 Sustantivos)
    promptsVerbs: [
        "Detener (Stop)",
        "Contar / Narrar (Tell)",
        "Confiar (Trust)",
        "Prevenir (Prevent)",
        "Entregar (Deliver)",
        "Desmantelar (Dismantle)",
        "Crear (Create)",
        "Resistir (Resist)",
        "Imbuir (Imbue)",
        "Trabar Amistad (Befriend)",
        "Infiltrarse (Sneak)",
        "Discrepar (Disagree)",
        "Iluminar (Illuminate)",
        "Reunir / Montar (Assemble)",
        "Liberar (Free)",
        "Combinar (Combine)",
        "Interrumpir (Disrupt)",
        "Exigir (Demand)",
        "Obstruir (Obstruct)",
        "Empujar (Push)",
        "Llegar (Arrive)",
        "Ralentizar (Slow)",
        "Superar (Overcome)",
        "Bloquear (Block)",
        "Consumir (Consume)",
        "Perseguir (Pursue)",
        "Recompensar (Reward)",
        "Expandir (Expand)",
        "Desperdiciar (Waste)",
        "Capturar (Capture)",
        "Debilitar (Weaken)",
        "Revelar (Reveal)",
        "Investigar (Investigate)",
        "Prohibir (Forbid)",
        "Comenzar (Start)",
        "Sorprender (Surprise)",
        "Soportar (Endure)",
        "Tirar / Arrastrar (Pull)",
        "Desatar (Unleash)",
        "Evitar (Avoid)",
        "Avanzar (Advance)",
        "Acordar (Agree)",
        "Entregar (Deliver)",
        "Vincular (Link)",
        "Entorpecer (Hinder)",
        "Retener (Withhold)",
        "Perder (Lose)",
        "Evolucionar (Evolve)",
        "Fortificar (Fortify)",
        "Castigar (Punish)",
        "Prender / Encender (Ignite)",
        "Despertar (Awaken)",
        "Desafiar (Defy)",
        "Ocultar (Conceal)",
        "Invitar (Invite)",
        "Romper (Break)",
        "Permitir (Allow)",
        "Abrir (Open)",
        "Repeler (Repel)",
        "Activar (Activate)",
        "Reunir (Gather)",
        "Dar (Give)",
        "Revertir (Reverse)",
        "Advertir (Warn)",
        "Confrontar (Confront)",
        "Traicionar (Betray)",
        "Asegurar (Secure)",
        "Oscurecer (Darken)",
        "Huir (Flee)",
        "Ganar (Win)",
        "Dispersar (Scatter)",
        "Contener (Contain)",
        "Ayudar (Assist)",
        "Tomar (Take)",
        "Cuestionar (Question)",
        "Soltar (Drop)",
        "Aceptar (Accept)",
        "Sacrificar (Sacrifice)",
        "Drenar (Drain)",
        "Insinuar (Hint)",
        "Errar / Pifiar (Fumble)",
        "Caer (Fall)",
        "Ascender (Ascend)",
        "Proteger (Protect)",
        "Escapar (Escape)",
        "Derrotar (Defeat)",
        "Reparar (Mend)",
        "Adquirir (Acquire)",
        "Guiar (Guide)",
        "Engañar (Mislead)",
        "Desterrar (Banish)",
        "Mantener (Uphold)",
        "Construir (Build)",
        "Cambiar (Change)",
        "Revocar (Revoke)",
        "Buscar (Seek)",
        "Destruir (Destroy)",
        "Descubrir (Uncover)",
        "Descansar (Rest)",
        "Liberar (Release)"
    ],

    promptsNouns: [
        "Fallo / Culpa (Fault)",
        "Vida (Life)",
        "Batalla (Battle)",
        "Mentira (Lie)",
        "Vicio (Vice)",
        "Memoria (Memory)",
        "Carga (Burden)",
        "Traición (Treachery)",
        "Juicio / Prueba (Trial)",
        "Riesgo (Risk)",
        "Prosperidad (Prosperity)",
        "Tiempo (Time)",
        "Conflicto (Conflict)",
        "Luz (Light)",
        "Lo Antinatural (Unnatural)",
        "Información (Information)",
        "Esperanza (Hope)",
        "Viaje (Journey)",
        "Lo Mundano (Mundane)",
        "Peligro (Hazard)",
        "Familia (Family)",
        "Obstáculo (Obstacle)",
        "Duda (Doubt)",
        "Libertad (Freedom)",
        "Debilidad (Weakness)",
        "Lo Desconocido (Unknown)",
        "Gloria (Glory)",
        "Amigo (Friend)",
        "Descubrimiento (Discovery)",
        "Pista / Ventaja (Lead)",
        "Tormenta (Storm)",
        "Enemigo (Enemy)",
        "Integridad (Integrity)",
        "Ciencia / Saber (Science)",
        "Recurso / Bien (Asset)",
        "Crimen (Crime)",
        "Sabiduría (Wisdom)",
        "Justicia (Justice)",
        "Lucha / Discordia (Strife)",
        "Asco / Repulsión (Disgust)",
        "Peligro (Danger)",
        "Equilibrio (Balance)",
        "Naturaleza (Nature)",
        "Caos (Chaos)",
        "Emboscada (Ambush)",
        "Riqueza (Wealth)",
        "Pensamiento (Thought)",
        "Oscuridad (Dark)",
        "Conexión (Connection)",
        "Puerta (Door)",
        "Miedo (Fear)",
        "Brujería (Sorcery)",
        "Honor (Honor)",
        "Espíritu (Spirit)",
        "Confianza (Trust)",
        "Pérdida (Loss)",
        "Fracaso (Failure)",
        "Peligro (Peril)",
        "Plan (Plan)",
        "Truco / Trampa (Trick)",
        "Mente (Mind)",
        "Dolor (Pain)",
        "Victoria (Victory)",
        "Muerte (Death)",
        "Control (Control)",
        "Conocimiento (Knowledge)",
        "Secreto (Secret)",
        "Bondad (Kindness)",
        "Exploración (Exploration)",
        "Sorpresa (Surprise)",
        "Magia (Magic)",
        "Animal (Animal)",
        "Camino (Way)",
        "Esencia (Essence)",
        "Sueño (Dream)",
        "Ira (Anger)",
        "Visión (Vision)",
        "Seguridad (Safety)",
        "Resultado (Result)",
        "Lugar (Place)",
        "Senda / Camino (Path)",
        "Sustento (Nourishment)",
        "Robo (Theft)",
        "Decadencia (Decay)",
        "Verdad (Truth)",
        "Gente (People)",
        "Ayuda (Help)",
        "Equipo (Gear)",
        "Idea (Idea)",
        "Orden (Order)",
        "Éxito (Success)",
        "Barrera (Barrier)",
        "Meta / Objetivo (Goal)",
        "Suerte (Luck)",
        "Identidad (Identity)",
        "Daño (Harm)",
        "Tierras Salvajes (Wilderness)",
        "Motivo (Motive)",
        "Refugio (Shelter)",
        "Poder (Power)"
    ]
};


/* Fuente: tables/rumors.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.RUMORS = {
  name: "Rumores (Rumors)",
  entries: [
    { min: 1, max: 1, desc: "Una bestia acorazada del tamaño de un barco está arrasando las cercanías." },
    { min: 2, max: 3, desc: "Un grupo de asesinos va de camino a matar a vuestro grupo." },
    { min: 4, max: 5, desc: "El gobernante local ha puesto una recompensa de 2.000 po por vuestras cabezas." },
    { min: 6, max: 7, desc: "El culto de Shune planea un golpe violento a medianoche." },
    { min: 8, max: 9, desc: "Se ha encontrado una antigua puerta de piedra en los sótanos del castillo." },
    { min: 10, max: 11, desc: "Los hombres lagarto han estado asaltando caravanas cerca del pantano." },
    { min: 12, max: 13, desc: "Esqueletos acorazados merodean por el cementerio cubierto de niebla." },
    { min: 14, max: 15, desc: "Un terremoto dejó al descubierto una ruina en el interior de una profunda grieta." },
    { min: 16, max: 17, desc: "Una banda de guerra de orcos se ha apoderado de una fortaleza abandonada." },
    { min: 18, max: 19, desc: "Hay una sala de estatuas de oro bajo el pozo." },
    { min: 20, max: 21, desc: "Aquellos que sobreviven a la Prueba del Loto obtienen un extraño don." },
    { min: 22, max: 23, desc: "Un capitán de la guardia ha sido tomado como rehén por unos matones." },
    { min: 24, max: 25, desc: "Las Cuevas de Cristal son el hogar de una secta de hechiceros psíquicos." },
    { min: 26, max: 27, desc: "Un cocodrilo arrastró a una mula cargada de riquezas hacia las alcantarillas." },
    { min: 28, max: 29, desc: "Una bruja adivina pronuncia verdaderos presagios y profecías." },
    { min: 30, max: 31, desc: "Cada luna llena, la despensa de El Unicornio Rampante es saqueada." },
    { min: 32, max: 33, desc: "Un famoso grupo de rastreadores/exploradores no ha regresado de una incursión." },
    { min: 34, max: 35, desc: "Un meteoro brillante se estrelló en lo profundo de las marismas." },
    { min: 36, max: 37, desc: "El fuego no prende ni arde si se encuentra a la vista de la Fuente del León." },
    { min: 38, max: 39, desc: "La Joya perdida de Barbalt está oculta en las Cuevas Aullantes." },
    { min: 40, max: 41, desc: "Un equipo de mineros enanos ha desenterrado una estatua con tentáculos." },
    { min: 42, max: 43, desc: "La taberna El Búho Rojo tiene una trampilla que conduce a la Oscuridad (Shadowdark)." },
    { min: 44, max: 45, desc: "2d12 viperianos custodian un santuario dedicado a una medusa en la jungla." },
    { min: 46, max: 47, desc: "Tres ladrones acaban de dar un gran golpe robando gemas aquí cerca." },
    { min: 48, max: 49, desc: "Las harpías vigilan desde los acantilados alrededor de la Tumba de Diridia." },
    { min: 50, max: 53, desc: "Una gorgona acecha en las ruinas de las Salas de Bajocolina (Underhill Halls)." },
    { min: 54, max: 55, desc: "Bajo la Abadía Roja se encuentra el olvidado Túmulo de Ur-Din." },
    { min: 56, max: 57, desc: "Un sabio moribundo está haciendo un llamamiento a un poderoso grupo de héroes." },
    { min: 58, max: 59, desc: "A un mago se le escapó por accidente su trío de cocatrices." },
    { min: 60, max: 61, desc: "Un señor local ha quedado inexplicablemente atrapado en lo alto de un tejado elevado." },
    { min: 62, max: 63, desc: "Bartomeu, el Príncipe Pirata, será ahorcado al mediodía." },
    { min: 64, max: 65, desc: "Unos espeleólogos goblin encontraron una catedral subterránea." },
    { min: 66, max: 67, desc: "El Mecanismo de Kythera se hundió en el mar cerca de Myrkhos." },
    { min: 68, max: 69, desc: "Crecen hongos raros y valiosos en el interior de una vieja cripta." },
    { min: 70, max: 71, desc: "La Iglesia de Santa Terragnis pagará por la recuperación de una reliquia." },
    { min: 72, max: 73, desc: "Una erupción volcánica reveló túneles en las paredes de la caldera." },
    { min: 74, max: 75, desc: "Las ruinas ciclópeas de Tal-Yool yacen en lo profundo del bosque." },
    { min: 76, max: 77, desc: "Un famoso tahúr apostará un rubí en una partida de Mago Ladrón (Wizard Thief)." },
    { min: 78, max: 79, desc: "Los Druidas de la Luna bendecirán una espada que haya servido para abatir a un hombre lobo." },
    { min: 80, max: 81, desc: "Unos sepultureros hallaron un ataúd encadenado en una fosa sin marcar." },
    { min: 82, max: 83, desc: "La torre abandonada de un mago está repleta de criaturas de relojería." },
    { min: 84, max: 85, desc: "El Gremio de Ladrones está a punto de asaltar a un señor mercantil rival." },
    { min: 86, max: 87, desc: "Tormentas de viento dejaron al descubierto un monolito de piedra en el desierto." },
    { min: 88, max: 89, desc: "Un grupo rival de aventureros encontró el mapa del Tesoro Oculto de Jiraal." },
    { min: 90, max: 91, desc: "Una monstruosidad llamada «El Tallador» acecha bajo la universidad." },
    { min: 92, max: 93, desc: "El Destrero de Ónice se encuentra en la Fortaleza de Ekmara, en el páramo." },
    { min: 94, max: 95, desc: "La princesa ha sido secuestrada por una cábala de hechiceros." },
    { min: 96, max: 97, desc: "Se ha encontrado la tumba de un Caballero del Caos bajo un templo." },
    { min: 98, max: 99, desc: "La legendaria Biblioteca de Gehemna se materializó a las afueras de la ciudad." },
    { min: 100, max: 100, desc: "La dragona Ixamir ha despertado tras un letargo de 200 años." }
  ],
  veracidad: [
    { min: 1, max: 2, estado: "Falso / Trampa", desc: "El rumor es infundado o una trampa deliberada para incautos." },
    { min: 3, max: 4, estado: "Verdad a Medias", desc: "La premisa básica es real, pero los peligros o detalles clave están alterados." },
    { min: 5, max: 6, estado: "100% Verídico", desc: "Todo lo que cuenta el rumor es rigurosamente cierto." }
  ],
  fuentes: [
    "Un cliente ebrio en la barra de la taberna.",
    "Un mendigo ciego que escuchó una conversación tras una celosía.",
    "Un mercader forastero visiblemente nervioso.",
    "Una nota arrugada encontrada en el suelo.",
    "Un acólito que susurra una advertencia en voz baja.",
    "Un carterista que lo oyó de su jefe de banda."
  ],

  generateRumor() {
    const d100 = Math.floor(Math.random() * 100) + 1;
    const d6Ver = Math.floor(Math.random() * 6) + 1;
    const fuente = this.fuentes[Math.floor(Math.random() * this.fuentes.length)];

    const entry = this.entries.find(e => d100 >= e.min && d100 <= e.max) || this.entries[0];
    const ver = this.veracidad.find(v => d6Ver >= v.min && d6Ver <= v.max) || this.veracidad[0];

    return {
      d100: d100,
      rumor: entry.desc,
      fuente: fuente,
      veracidad: ver.estado,
      detalleVeracidad: ver.desc,
      rolls: `d100: [${d100}] | d6 Veracidad: [${d6Ver}]`
    };
  }
};

/* Fuente: tables/singular_items.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.SINGULAR_ITEMS = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // CATÁLOGO COMPLETO DE OBJETOS SINGULARES
  // ==========================================
  items: [
    {
      nombre: "Destrero de Alabastro (Alabaster Destrier)",
      desc: "Una estatuilla suave y perlada de un caballo a la carrera.",
      bono: "-",
      beneficio: "1 vez al día, puedes pronunciar la palabra de mando para transformar la estatuilla en un pegaso que acepta jinetes legales o neutrales. Permanece en esta forma durante 1 hora.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Amuleto del Secreto (Amulet of Secrecy)",
      desc: "Un colgante pesado y plano con la talla de un ojo cerrado.",
      bono: "-",
      beneficio: "Mientras lo lleves puesto, no puedes ser detectado por magia de adivinación (como el conjuro escudriñamiento o una Bola de Cristal).",
      maldicion: "Tienes constantemente la sensación angustiosa de que te están observando.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Amuleto de la Vitalidad (Amulet of Vitality)",
      desc: "Un amuleto de oro con una lágrima de rubí rojo en el centro.",
      bono: "-",
      beneficio: "Tu puntuación de Constitución pasa a ser 18 (+4) mientras lleves puesto el amuleto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Armadura de Santa Terragnis (Armor of Saint Terragnis)",
      desc: "Armadura de placas dorada grabada de pies a cabeza con ángeles guerreros.",
      bono: "Placas +3 (Solo devotos Legales de Santa Terragnis)",
      beneficio: "Los conjuros hostiles dirigidos contra ti requieren una tirada de DC 18 para ser lanzados con éxito. 1 vez al mes, puedes invocar un Avatar de Santa Terragnis (trátalo como un arcángel) para que luche a tu lado durante 10 asaltos.",
      maldicion: "Ninguna",
      personalidad: "Legal (Venerable y Sagrada)"
    },
    {
      nombre: "Armadura del Oni (Armor of the Oni)",
      desc: "Armadura de placas negra hecha de paneles de madera de hierro lacada. La visera del yelmo es el rostro de un oni gruñendo.",
      bono: "Placas +1",
      beneficio: "Puedes hablar y entender el idioma Diabólico. Tus ataques cuerpo a cuerpo infligen +1 de daño.",
      maldicion: "Tienes desventaja en tiradas de ataque y pruebas de lanzamiento contra demonios.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Saco de Tejones (Bag of Badgers)",
      desc: "Un saco gris y deshilachado cubierto de pelo áspero y blanco.",
      bono: "-",
      beneficio: "1 vez al día, puedes meter la mano dentro y sacar un tejón enfurecido. Puedes arrojarlo hasta una distancia cercana (near). El tejón ataca a la criatura más próxima durante 3 asaltos antes de marcharse correteando.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bolsa de Devoración (Bag of Devouring)",
      desc: "Una faltriquera de cuero desgastada con cordones ajustados.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "Esta bolsa devora y destruye por completo cualquier objeto introducido en su interior en 1d6 asaltos.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bolsa de Contención (Bag of Holding)",
      desc: "Una faltriquera de cuero desgastada con cordones ajustados.",
      bono: "-",
      beneficio: "Contiene un espacio interdimensional en su interior con capacidad para hasta 10 espacios de equipo (gear slots).",
      maldicion: "Introducir esta bolsa dentro de otra Bolsa de Contención o en un Agujero Portátil destruye ambos objetos y todo lo que contengan de forma instantánea.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuenta de Fuerza (Bead of Force)",
      desc: "Una canica de cristal con un suave anillo de luz azul brillando en su interior.",
      bono: "-",
      beneficio: "Puedes arrojarla contra un objetivo a distancia cercana (near). Si impactas, el objetivo queda atrapado en el interior del conjuro esfera elástica.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Hoja de la Venganza (Blade of Vengeance)",
      desc: "Una hoja gris con un rubí en talla diamante en el pomo. Silba cortante al blandirse.",
      bono: "Espada bastarda +2 (No usable por no-muertos)",
      beneficio: "Tienes ventaja en los ataques contra criaturas no-muertas. Puedes usar la espada para lanzar expulsar no-muertos 1 vez al día (con bonificador de +4).",
      maldicion: "Ninguna",
      personalidad: "Legal. Severa y desconfiada. Forjada para frenar a los Reyes Brujos. Exige que sean destruidos."
    },
    {
      nombre: "Botas de Danza (Boots of Dancing)",
      desc: "Botas finas y flexibles de piel de oveja.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "En cuanto te las calzas, comienzas a bailar y hacer cabriolas sin control. Te mueves en direcciones aleatorias cada turno y debes superar una tirada de DES DC 15 para poder quitártelas.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Botas de Flotación (Boots of Hovering)",
      desc: "Botas de cuero marrón pulidas y relucientes con alas plateadas en los talones.",
      bono: "-",
      beneficio: "Puedes caminar sobre superficies insustanciales durante 1 turno cada vez. Te hundes o caes si terminas tu turno sobre dicha superficie.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Botas del Gato (Boots of the Cat)",
      desc: "Botas grises de piel de cierva tan suaves y finas como zapatillas.",
      bono: "-",
      beneficio: "Puedes saltar hasta una distancia cercana (near) partiendo desde parado. Tus pruebas para moverte en silencio son siempre Fáciles (DC 9).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Brazales de Arquería (Bracers of Archery)",
      desc: "Brazales de cuero grabados con halcones en pleno vuelo.",
      bono: "-",
      beneficio: "Infliges +1 de daño con armas a distancia.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Brazales de Defensa (Bracers of Defense)",
      desc: "Brazales de acero cincelados con runas enanas de protección.",
      bono: "-",
      beneficio: "Obtienes un bonificador de +1 a tu Clase de Armadura (CA).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Libro de Erratas Mágicas de Brak (Brak's Book of Mispells)",
      desc: "Un tomo encuadernado en piel de rata con una runa brillante y mellada.",
      bono: "-",
      beneficio: "Contiene pergaminos de flecha ácida, bola de fuego y sueño.",
      maldicion: "Si un mago intenta lanzar o aprender un conjuro de estos pergaminos y tiene éxito, el objetivo del conjuro pasa a ser el propio lanzador.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cubo de la Perfección de Brak (Brak's Cube of Perfection)",
      desc: "Un cubo diminuto con ilustraciones de goblins en cada cara que representan la trascendencia física o mental.",
      bono: "-",
      beneficio: "Tira 1d6: la característica correspondiente aumenta de forma permanente a 18 (+4) (1. FUE, 2. DES, 3. CON, 4. INT, 5. SAB, 6. CAR). Tras usarse, el cubo se teletransporta a un lugar aleatorio del multiverso.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Tiara de la Sabiduría (Circlet of Wisdom)",
      desc: "Una fina tiara de plata engastada con una resplandeciente perla azul.",
      bono: "-",
      beneficio: "Tu puntuación de Sabiduría pasa a ser 18 (+4) mientras la lleves puesta.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Capa de los Elfos (Cloak of Elvenkind)",
      desc: "Una capa amplia con capucha que cambia de tonalidad para mimetizarse con el entorno.",
      bono: "-",
      beneficio: "Tus tiradas para esconderte son siempre Fáciles (DC 9). 1 vez al día, puedes volverte invisible durante 5 asaltos (la invisibilidad termina si atacas o lanzas un conjuro).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Capa del Murciélago (Cloak of the Bat)",
      desc: "Una capa de cuero negro con dobladillo andrajoso y capucha con orejas puntiagudas.",
      bono: "-",
      beneficio: "Puedes volar a distancia cercana como tu movimiento si estás en una zona en penumbra o sombras.",
      maldicion: "Cada vez que vueles con ella, tira 1d20. Con un 1 natural, tú y tu equipo os transformáis en un murciélago durante 3 asaltos.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bola de Cristal (Crystal Ball)",
      desc: "Un orbe de cristal pulcro con visiones en remolino en su interior.",
      bono: "-",
      beneficio: "Solo los magos pueden usarla. Permite lanzar el conjuro escudriñamiento.",
      maldicion: "Si fallas la prueba de lanzamiento, deja de funcionar durante 24 horas.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Daga del Héroe Goblin (Dagger of the Goblin Hero)",
      desc: "Una daga curva con una muesca de media luna en la base de la hoja.",
      bono: "Daga +1",
      beneficio: "Puedes hablar Goblin. Todos los seres goblinoides reaccionan ante ti con una actitud amistosa.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Huevo de Cocatriz (Egg of the Cockatrice)",
      desc: "Un huevo azul y duro del tamaño de un coco y pesado como una roca.",
      bono: "-",
      beneficio: "1 vez por semana, puedes pronunciar una palabra de mando para que eclosione una cocatriz que obedecerá tus órdenes durante 5 asaltos antes de marcharse volando. El huevo se recompone solo a lo largo de una semana.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Alfombra Voladora (Flying Carpet)",
      desc: "Una alfombra roja ricamente tejida con borlas doradas.",
      bono: "-",
      beneficio: "Capacidad para dos jinetes (uno actúa de conductor). Vuela el doble de distancia cercana en el turno del conductor.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Juguetona y traviesa. Le encanta visitar nuevos lugares y se vuelve inquieta si no viaja con frecuencia."
    },
    {
      nombre: "Guanteletes del Poderío (Gauntlets of Might)",
      desc: "Pesados guanteletes de bronce con grabados de gigantes titánicos.",
      bono: "-",
      beneficio: "Tu puntuación de Fuerza pasa a ser 18 (+4) mientras los lleves puestos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Lámpara del Genio (Genie Lamp)",
      desc: "Una lámpara de aceite de latón desgastada.",
      bono: "-",
      beneficio: "Frotar la lámpara hace surgir al djinni (50%) o al efrit (50%) que mora en su interior. Un djinni concede al invocador un conjuro de deseo antes de desaparecer. Un efrit hace lo mismo, pero solo tras ser derrotado en combate.",
      maldicion: "Consumible / Invocación de prueba",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Guantes de Agilidad (Gloves of Agility)",
      desc: "Guantes de cuero fino que parecen fundirse con las manos de quien los lleva.",
      bono: "-",
      beneficio: "Tu puntuación de Destreza pasa a ser 18 (+4) mientras los lleves puestos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bomba Goblin (Goblin Bomb)",
      desc: "Una rata disecada rellena con una carga explosiva y una mecha.",
      bono: "-",
      beneficio: "Puedes prender la mecha y arrojarla a distancia cercana (near). Explota en 1d4 asaltos, infligiendo 2d8 de daño a todo lo que esté a distancia cercana.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Gran Hacha de la Horda (Greataxe of the Horde)",
      desc: "Un hacha mellada tallada a partir de un pesado hueso de dragón.",
      bono: "Gran hacha +2",
      beneficio: "1 vez al día, puedes convertir un impacto normal con esta arma en un impacto crítico.",
      maldicion: "Cada vez que tus PG caigan por debajo de la mitad, haz una tirada de CAR DC 12; si fallas, entras en furia de batalla durante 1d4 asaltos y debes atacar a la criatura más cercana.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Sombrero del Intelecto (Hat of Intellect)",
      desc: "Un sombrero puntiagudo y flexible de ala ancha.",
      bono: "-",
      beneficio: "Tu puntuación de Inteligencia pasa a ser 18 (+4) mientras lo lleves puesto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Sombrero del Sabueso (Hat of the Hound)",
      desc: "Un sombrero bombín redondeado y elegante.",
      bono: "-",
      beneficio: "Puedes transformarte en un mastín cada día durante un total de hasta 10 asaltos. Tu ropa y pertenencias se transforman contigo.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Yelmo de Telepatía (Helm of Mind Reading)",
      desc: "Un yelmo tallado con surcos cerebrales, protector de cuello espinal y tentáculos de pulpo.",
      bono: "-",
      beneficio: "Puedes lanzar el conjuro detectar pensamientos 3 veces al día (con bonificador de +4).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Yelmo Cornudo de Ramlaat (Horned Helm of Ramlaat)",
      desc: "Un yelmo manchado de sangre fabricado con el cráneo de un carnero.",
      bono: "Yelmo (+1 CA)",
      beneficio: "Otorga +1 a la Clase de Armadura. Tienes ventaja en cualquier prueba para derribar criaturas u objetos.",
      maldicion: "Sientes el impulso compulsivo de dar cabezazos a objetos frágiles y delicados.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Reloj de Arena de las Arenas Negras (Hourglass of the Black Sands)",
      desc: "Un reloj de arena ancestral por el que fluye arena de obsidiana.",
      bono: "-",
      beneficio: "1 vez al día, puedes girar el reloj al lanzar un conjuro. Los efectos del conjuro duran 1d4 asaltos adicionales.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Vara Inamovible (Immovable Rod)",
      desc: "Una barra corta de hierro con un botón en un extremo.",
      bono: "-",
      beneficio: "Al pulsar el botón, la vara queda fija en el espacio (soporta hasta 2.500 kg / 5.000 lbs). Pulsar el botón de nuevo anula el efecto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Joya de Barbalt (Jewel of Barbalt)",
      desc: "Un rubí del tamaño de un coco tallado con mil facetas.",
      bono: "-",
      beneficio: "Obtienes un éxito crítico con resultados de 18–20.",
      maldicion: "Obtienes una pifia crítica con resultados de 1–3.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Engranaje de Kythera (Kytherian Cog)",
      desc: "Una rueda dentada del tamaño de una moneda pulida con brillo plateado.",
      bono: "-",
      beneficio: "Comienzas cada sesión de juego con una ficha de suerte (luck token).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Arco Largo de los Reyes Elfos (Longbow of the Elven Kings)",
      desc: "Un arco largo de curvatura pronunciada con refuerzos de cornamenta de ciervo.",
      bono: "Arco largo +1",
      beneficio: "Tienes ventaja en los ataques realizados con este arco contra aberraciones antinaturales y seres extraplanares.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Orgulloso y atemporal. Considera que salvaguardar el orden natural es el deber supremo. Exige buscar y aniquilar a todas las aberraciones."
    },
    {
      nombre: "Tinta Mágica (Magic Ink)",
      desc: "Un tintero con tinta negra brillante que desaparece según se seca.",
      bono: "-",
      beneficio: "La escritura es invisible en frío y solo se revela al calentarse cerca de una fuente de calor intenso. Contiene cantidad para 1d4 usos.",
      maldicion: "Consumible limitado",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Jabalina Flamígera de Memnon (Memnon's Blazing Javelin)",
      desc: "Jabalina dorada que parpadea transformándose brevemente en un relámpago.",
      bono: "Jabalina +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "Siempre regresa a tu mano tras ser arrojada. 1 vez al día, al lanzarla, se transforma en un rayo como el conjuro rayo relampagueante (sin necesidad de prueba de lanzamiento).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espada Discordante de Memnon (Memnon's Discordant Blade)",
      desc: "Espadón de hoja espinada y roja que desprende chispas al blandirse.",
      bono: "Espadón +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "1 vez al día, puedes desintegrar por completo a una criatura de nivel 9 o inferior a la que dañes con la hoja (la víctima puede superar una tirada de CON DC 18 para sufrir 3d8 de daño en su lugar).",
      maldicion: "No puedes deshacerte de ella a menos que te derroten en combate. Cada día que no mates a una criatura de nivel 2 o superior, pierdes 1d6 PG (solo los recuperas al matar a un ser de nivel 2+ con la espada).",
      personalidad: "Caótica (Sanguinaria)"
    },
    {
      nombre: "Armadura Entrópica de Memnon (Memnon's Entropic Armor)",
      desc: "Armadura de placas azul oscuro con grabados de rayos dorados y gemas rojas dispuestas como llamas.",
      bono: "Armadura de placas +1 (pasa a +3 con el conjunto de Memnon). Solo para seres Caóticos.",
      beneficio: "1 vez al día, pronuncias su palabra de mando: hasta tu siguiente turno, todas las armas no mágicas que te golpeen se destruyen reducidas a polvo al instante y no sufres daño.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espejo de las Fechorías (Mirror of Mischief)",
      desc: "Espejo de cuerpo entero enmarcado por garras de demonios plateados y sonrientes.",
      bono: "-",
      beneficio: "Ninguno.",
      maldicion: "La primera vez que un humanoide se mira en él, crea un duplicado malvado idéntico (salvo por su equipo, que es mundano). La copia sale al exterior, puede vivir indefinidamente e intenta sembrar el caos en la vida del original.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cota de Malla Tejida en la Luna (Moonwrought Chainmail)",
      desc: "Cota de malla luminosa tan ligera como una camisa de seda.",
      bono: "Cota de malla de mitral +1",
      beneficio: "1 vez al día, pronuncias su palabra de mando para ganar un bonificador de +1 a tu siguiente prueba de lanzamiento o ataque a distancia.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Collar del Encanto (Necklace of Charm)",
      desc: "Cadena de oro en espina de pez que reluce con sutil belleza.",
      bono: "-",
      beneficio: "Tu puntuación de Carisma pasa a ser 18 (+4) mientras lo lleves puesto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Maza Necrótica del Marchitamiento (Necrotic Mace of Withering)",
      desc: "Maza de hierro forjado rematada con un cráneo que grita y supura icor negro.",
      bono: "Maza +1 (Solo clérigos Caóticos)",
      beneficio: "Permite convertir los conjuros de curar heridas que lances en magia dañina que inflige tanto daño como el que habría curado.",
      maldicion: "Si la usas para invertir un curar heridas, sufres pesadillas esa noche: debes superar SAB DC 12 en tu próximo descanso o no obtendrás beneficios de él.",
      personalidad: "Caótica (Maligna)"
    },
    {
      nombre: "Armadura del Manto Nocturno (Nightcloak Armor)",
      desc: "Cueros negros mate encantados para intensificar las sombras.",
      bono: "Armadura de cuero +1",
      beneficio: "1 vez al día, puedes superar automáticamente una prueba de Destreza para esconderte.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuchillo de Bruja de Obsidiana (Obsidian Witchknife)",
      desc: "Hoja reluciente de obsidiana que desprende volutas de humo negro.",
      bono: "Daga +2 (No usable por seres Legales)",
      beneficio: "Al lanzar un conjuro sosteniendo la daga, puedes herirte con ella: suma el daño recibido a tu tirada de prueba de lanzamiento.",
      maldicion: "Ninguna",
      personalidad: "Caótica"
    },
    {
      nombre: "Destrero de Ónice (Onyx Destrier)",
      desc: "Estatuilla pulida de ébano de un caballo al galope.",
      bono: "-",
      beneficio: "1 vez al día, pronuncias la palabra de mando para transformarla en una pesadilla (nightmare) que acepta jinetes neutrales o caóticos durante 1 hora.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Armadura Ofidia (Ophidian Armor)",
      desc: "Cuero suave y brillante de escamas esmeralda moteadas.",
      bono: "Armadura de cuero +1",
      beneficio: "Tienes ventaja en las tiradas para resistir los efectos del veneno.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Perla de Poder (Pearl of Power)",
      desc: "Perla opalescente de gran tamaño con un fulgor interno.",
      bono: "-",
      beneficio: "1 vez al día, recuperas la capacidad de lanzar un conjuro que hubieses perdido (no funciona si se perdió por una pifia crítica).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Pipa de las Colinas Onduladas (Pipe of the Rolling Hills)",
      desc: "Pipa larga y curvada con aroma a clavo y resina.",
      bono: "-",
      beneficio: "Hasta tres veces al día, recuperas 1d4 PG al fumar en ella.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Flauta de las Cloacas (Pipes of the Sewers)",
      desc: "Flauta de pan de latón desgastado con siete tubos.",
      bono: "-",
      beneficio: "1 vez al día, tocas la flauta para invocar 2d6 ratas gigantes que obedecen durante 1d6 asaltos antes de huir.",
      maldicion: "Si dejas de tocar mientras las ratas sigan presentes, se vuelven hostiles y te atacan.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Agujero Portátil (Portable Hole)",
      desc: "Pieza cuadrada de terciopelo negro que se despliega formando un círculo.",
      bono: "-",
      beneficio: "Se abre en una superficie plana creando un foso de 1,8 m de ancho y 1,8 m de profundidad con 20 espacios de equipo de capacidad. Se cierra al plegar la tela.",
      maldicion: "Introducirlo dentro de una Bolsa de Contención o en otro Agujero Portátil destruye ambos objetos y su contenido.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Extirpación (Potion of Extirpation)",
      desc: "Sustancia acre y alquitranada en un frasco de hierro con tapón de plomo.",
      bono: "-",
      beneficio: "Al verterla sobre un objeto o criatura (de hasta tamaño cercano), el objetivo es borrado por completo de la realidad; solo un conjuro de deseo puede revertirlo.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Caótica. Protesta ruidosamente durante su uso y nunca está de acuerdo con el objetivo elegido para ser extirpado."
    },
    {
      nombre: "Poción de Vuelo (Potion of Flying)",
      desc: "Líquido brillante con burbujas que estallan como diminutas estrellas.",
      bono: "-",
      beneficio: "Vuelas a distancia cercana durante 10 asaltos.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción del Olvido (Potion of Forgetfulness)",
      desc: "Brebaje rosado que gira en remolino en sentido antihorario.",
      bono: "-",
      beneficio: "Si un ser inteligente la bebe, olvida permanentemente un recuerdo a elección de quien se la administró.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Fuerza de Gigante (Potion of Giant Strength)",
      desc: "Tarro de barro que contiene un lodo espeso de hojas verdes.",
      bono: "-",
      beneficio: "Tu Fuerza pasa a ser 18 (+4) e infliges el doble de daño (x2) en ataques cuerpo a cuerpo durante 10 asaltos.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Curación (Potion of Healing)",
      desc: "Botella de cristal con un líquido efervescente de sabor limón-vainilla.",
      bono: "-",
      beneficio: "Quien la beba recupera puntos de golpe según su nivel (0-3: 1d6 PG, 4-6: 2d8 PG, 7-9: 3d10 PG, 10+: 4d12 PG).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Invisibilidad (Potion of Invisibility)",
      desc: "Vial transparente aparentemente vacío, pero con líquido que chapotea en su interior.",
      bono: "-",
      beneficio: "Te vuelves invisible durante 10 asaltos (o hasta que ataques o lances un conjuro).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Hazañas Legendarias (Potion of Legendary Deeds)",
      desc: "Elixir dorado que resuena con un suave acorde celestial.",
      bono: "-",
      beneficio: "Al beberla, subes inmediatamente un nivel de personaje y tu total de PX se reinicia a cero.",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Polimorfismo (Potion of Polymorph)",
      desc: "Frasco lavanda con un tritón encurtido flotando en líquido transparente.",
      bono: "-",
      beneficio: "Lanza sobre ti el conjuro polimorfismo con una duración de 1 hora (en lugar de 10 asaltos).",
      maldicion: "Consumible de un solo uso",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Poción de Vitalidad (Potion of Vitality)",
      desc: "Elixir carmesí que late rítmicamente como un corazón.",
      bono: "-",
      beneficio: "Tira el dado de PG de tu clase; ganas esa cantidad de PG máximos de forma permanente.",
      maldicion: "Si bebes más de una en toda tu vida, debes superar CON DC 18 cada vez adicional o mueres en el acto.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Caída de Pluma (Ring of Feather Falling)",
      desc: "Anillo perlado tallado con la forma de una pluma de búho.",
      bono: "-",
      beneficio: "1 vez al día, lanza caída de pluma sobre ti cuando caes.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Miedo atroz a las alturas. Ulula telepáticamente como un búho advirtiendo que te alejes del borde de riscos y pozos."
    },
    {
      nombre: "Anillo de Bolas de Fuego (Ring of Fireballs)",
      desc: "Aro de bronce con garras que sostienen una esfera roja de cristal.",
      bono: "-",
      beneficio: "Puedes arrancar la esfera y arrojarla hasta distancia lejana (far), desatando una bola de fuego en el punto de impacto. La esfera vuelve a crecer tras completar un descanso.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Invisibilidad (Ring of Invisibility)",
      desc: "Banda simple de oro pulida con un brillo cálido.",
      bono: "-",
      beneficio: "1 vez al día, lanza el conjuro invisibilidad sobre ti.",
      maldicion: "Probabilidad acumulativa del 1% en cada descanso de sufrir pesadillas apocalípticas y no obtener beneficios por descansar (se reinicia al 1% tras activarse).",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Anillo de Ramlaat (Ring of Ramlaat)",
      desc: "Anillo de hueso tallado como un cráneo de carnero con luces rojas en las cuencas.",
      bono: "-",
      beneficio: "1 vez al día, entras en furia durante 5 asaltos infligiendo el doble de daño. Durante la furia no puedes lanzar conjuros y los ataques cuerpo a cuerpo enemigos contra ti tienen ventaja.",
      maldicion: "Ninguna",
      personalidad: "Caótica. Agresivo e hiperconfiado. Incita constantemente al combate."
    },
    {
      nombre: "Túnica del Archimago (Robe of the Archmage)",
      desc: "Túnica de seda roja con manto dorado, mangas bordadas con lunas y ojos de oro.",
      bono: "Túnica de Archimago",
      beneficio: "Solo para magos con el título de Archimago. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Elige tres conjuros conocidos: su DC de lanzamiento es siempre 11. Tienes ventaja al lanzar desintegrar.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Túnica del Druida (Robe of the Druid)",
      desc: "Túnica de terciopelo verde con capucha bordada con hojas de plata y enredaderas.",
      bono: "Túnica de Druida",
      beneficio: "Solo para magos con el título de Druida. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Dos veces al día recuperas un conjuro perdido. Ventaja al lanzar cambio de forma y su duración pasa a ser de 1 hora (en lugar de concentración).",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Túnica del Hechicero (Robe of the Sorcerer)",
      desc: "Túnica de cuero negro con capucha sombría y broches de garra con cadenas de mitral.",
      bono: "Túnica de Hechicero",
      beneficio: "Solo para magos con el título de Hechicero. Tu CA sin armadura pasa a ser 15 + mod. Destreza. Al lanzar conjuros que hagan daño, suma tu modificador de Inteligencia al total. Ventaja al lanzar palabra de poder mortal.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escarabajo de Protección (Scarab of Protection)",
      desc: "Broche de un escarabajo cornudo bañado en oro puro.",
      bono: "-",
      beneficio: "Si mueres, realiza una prueba de CON DC 18: si la superas, quedas inconsciente en lugar de muerto.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cimitarra de la Luna de Ceniza (Scimitar of the Ash Moon)",
      desc: "Hoja ancha y curvada con la cabeza de un efrit en el pomo de bronce.",
      bono: "Espadón +3",
      beneficio: "En un impacto crítico, el objetivo es decapitado (muere instantáneamente si la decapitación es letal para su anatomía).",
      maldicion: "Ninguna",
      personalidad: "Caótica"
    },
    {
      nombre: "Escudo del Cruzado (Shield of the Crusader)",
      desc: "Escudo de lágrima pesado con una cruz carmesí desgastada pintada en el frente.",
      bono: "Escudo +1 (Solo devotos Legales)",
      beneficio: "1 vez al día, pronuncias una plegaria para envolver el escudo en llamas sagradas, ganando +2 a tu CA durante 3 asaltos.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escudo del León (Shield of the Lion)",
      desc: "Escudo tallado con el rostro de un león rugiente de melena ondeante.",
      bono: "Escudo +1",
      beneficio: "1 vez al día, ordenas al león que cobre vida y ruja: todos los enemigos a distancia cercana deben superar de inmediato un chequeo de moral.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Escudo del Rey Brujo (Shield of the Witch-King)",
      desc: "Triángulo dentado de acero negro con placas acorazadas espinosas.",
      bono: "Escudo +2 (Solo para seres Caóticos)",
      beneficio: "Sufres la mitad de daño de criaturas no-muertas.",
      maldicion: "Si caes a 0 PG, el espíritu de Ix-Natheer bloquea la magia de curación que recibas. Si mueres, Ix-Natheer posee tu cadáver.",
      personalidad: "Caótica. Animado por el espíritu del Rey Brujo Ix-Natheer. Busca traicionar a su portador para adueñarse de su cuerpo y regresar a la no-vida."
    },
    {
      nombre: "Espada Corta del Ladrón (Shortsword of the Thief)",
      desc: "Hoja gris y corta repleta de muescas y cicatrices de combate.",
      bono: "Espada corta +1 (+2 si la empuña un mediano o ladrón)",
      beneficio: "1 vez al día, recuperas de inmediato una ficha de suerte recién gastada.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Maza Plateada de la Cólera (Silver Mace of Wrath)",
      desc: "Maza de plata deslustrada con siete aletas en forma de media luna.",
      bono: "Maza +1",
      beneficio: "Inflige el doble de daño contra criaturas con licantropía.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Esfera de Aniquilación (Sphere of Annihilation)",
      desc: "Un vacío esférico levitante de 1 metro de diámetro de pura oscuridad.",
      bono: "-",
      beneficio: "Destruye instantáneamente toda la materia que toca. Un ser inteligente puede moverla a distancia cercana superando una tirada de INT DC 18 (o tirada enfrentada de INT con ventaja para magos si varios compiten por su control). Si entra en el espacio de una criatura, el controlador hace una tirada de ataque con +7: si impacta, la criatura es desintegrada.",
      maldicion: "Peligro extremo para el portador si pierde el control.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Catalejo de Visión Verdadera (Spyglass of True Sight)",
      desc: "Lente telescópica de latón grabada con runas arcanas.",
      bono: "-",
      beneficio: "Mirar a través de él permite ver criaturas y objetos invisibles.",
      maldicion: "Sientes la necesidad compulsiva de mirarlo todo a través del catalejo.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de Curación (Staff of Healing)",
      desc: "Vara nudosa de roble con un grueso nudo en un extremo.",
      bono: "Bastón +1",
      beneficio: "1 vez al día, puedes tocar a una criatura para curarle 1d6 PG.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de Ord (Staff of Ord)",
      desc: "Bastón estilizado de mitral que resuena con poder arcano, rematado con un ojo que mira hacia arriba.",
      bono: "Bastón +3 (Solo magos)",
      beneficio: "Funciona como varita de puerta dimensional, bola de fuego, envío de mensaje y telequinesis (no se destruye con un 1 natural). Los conjuros hostiles contra ti son DC 18 para ser lanzados.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Bastón de la Cobra (Staff of the Cobra)",
      desc: "Cetro curvado rematado por una cabeza de cobra abierta con ojos de rubí.",
      bono: "Bastón +1",
      beneficio: "Las serpientes son amistosas hacia ti. 1 vez al día, puedes lanzarlo al suelo para convertirlo durante 5 asaltos en una serpiente gigante bajo tu control mental (revierte a bastón si cae a 0 PG).",
      maldicion: "Desventaja en ataques y conjuros hostiles contra serpientes.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Espada de los Ancestros (Sword of the Ancients)",
      desc: "Hoja mellada y oxidada con empuñadura de cuero engrasado.",
      bono: "Espada larga +2",
      beneficio: "Es indestructible y puede cortar cualquier material. El dueño puede convocarla directamente a su mano si se encuentra en el mismo plano.",
      maldicion: "Ninguna",
      personalidad: "Legal (Ancestral)"
    },
    {
      nombre: "El Mecanismo de Kythera (The Kytherian Mechanism)",
      desc: "Imponente plataforma de latón repleta de engranajes con herrumbre verdiazul.",
      bono: "-",
      beneficio: "No funciona hasta que se le inserten sus siete Engranajes de Kythera perdidos. Una vez activo, permite anular/deshacer un suceso histórico a elección del operador. Tras ello, los siete engranajes se dispersan mágicamente por el mundo.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "La Maldición Infernal (The Malediction Infernal)",
      desc: "Tomo encuadernado en cuero negro con un rostro demoníaco sonriente en relieve.",
      bono: "-",
      beneficio: "Un ser Caótico que lo lea sube 1 nivel y aprende el idioma Diabólico. Un ser no caótico debe superar SAB DC 18 o pierde 1 nivel. Tras leerse, el libro se teletransporta lejos.",
      maldicion: "Letal para seres no caóticos.",
      personalidad: "Caótica (Diabólica)"
    },
    {
      nombre: "Espada Tres Veces Bendita (Thrice-Blessed Sword)",
      desc: "Espada de pomo dorado ungida con lágrimas benditas, incienso y oraciones.",
      bono: "Espada larga +3 (Solo clérigos Legales Templarios o sup.)",
      beneficio: "Inflige el doble de daño contra demonios, diablos y no-muertos.",
      maldicion: "Ninguna",
      personalidad: "Legal. Virtuosa e ingenua. Se niega a atacar a devotos de dioses legales y exige dar a cada enemigo la oportunidad de convertirse antes de matarlo."
    },
    {
      nombre: "Tomo Mordanticus (Tome Mordanticus)",
      desc: "Bestiario ilustrado a mano con los seres y personajes más insignes del multiverso.",
      bono: "-",
      beneficio: "Al leerlo, aprendes tres Nombres Verdaderos a tu elección. Tu propio Nombre Verdadero queda escrito en sus páginas.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Pedante y quisquilloso. Intenta escapar constantemente y puede comunicarse telepáticamente a distancia cercana con cualquier ser."
    },
    {
      nombre: "Tomo de Gehemna (Tome of Gehemna)",
      desc: "Volumen rojizo con cierres metálicos y un ojo dorado en la portada.",
      bono: "-",
      beneficio: "Cada día aparece en su interior un pergamino de mago al azar, sustituyendo al del día anterior.",
      maldicion: "Ninguna",
      personalidad: "Neutral. Instructivo y técnico. Monologa sobre sutilezas mágicas y opina sobre la técnica de cualquier mago."
    },
    {
      nombre: "Tomo de Hadebe (Tome of Hadebe)",
      desc: "Libro chapado en latón con páginas de láminas de cobre grabado.",
      bono: "-",
      beneficio: "Contiene un pergamino de manos ardientes, uno de bola de fuego y uno de orbe prismático.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Tridente de los Mares (Trident of the Seas)",
      desc: "Arpón de mitral de tres puntas engastado con perlas.",
      bono: "Lanza +2",
      beneficio: "Puedes respirar bajo el agua y hablar con criaturas marinas. 1 vez al día, lanzas controlar el agua con un bonificador de +4.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Nombre Verdadero (True Name)",
      desc: "El nombre secreto e irrepetible asignado a un ser en El Pacto.",
      bono: "-",
      beneficio: "Tienes ventaja en todas las tiradas de ataque y pruebas de lanzamiento contra una criatura cuyo Nombre Verdadero pronuncies.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Varita de la No-Vida (Wand of Unlife)",
      desc: "Dedo huesudo y nudoso de un trol de pantano sumergido en fluido de embalsamar.",
      bono: "Varita de No-Vida",
      beneficio: "Contiene los conjuros animar a los muertos y crear no-muerto.",
      maldicion: "Cada vez que lanzas un conjuro con ella, pierdes 1d4 de Constitución temporalmente hasta descansar. Si tu Constitución llega a 0, mueres y te conviertes en un zombi.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Varita de Protección (Wand of Warding)",
      desc: "Vara fina y pesada de hierro oscuro cincelada con runas en espiral.",
      bono: "Varita de Protección",
      beneficio: "Contiene los conjuros disipar magia y protección contra energía.",
      maldicion: "Cada vez que fallas una prueba de lanzamiento con ella, pierdes el acceso a un conjuro conocido al azar hasta completar un descanso.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Cuerno de Guerra de los Ángeles (War Horn of the Angels)",
      desc: "Cuerno de buey opalescente rematado con una boquilla de oro.",
      bono: "Solo seres Legales",
      beneficio: "1 vez al día, lo haces sonar para lanzar reprender impíos (+4 a la tirada). Demonios y diablos tienen desventaja en su tirada opuesta de Carisma.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Martillo de Guerra de los Señores Enanos (Warhammer of the Dwarf Lords)",
      desc: "Martillo macizo con mango robusto y correa de lanzamiento que emite un tono barítono al girar.",
      bono: "Martillo de guerra +1 (+2 si lo empuña un enano)",
      beneficio: "Tiene la propiedad arrojadiza a distancia cercana y regresa solo a la mano tras lanzarse. Inflige el doble de daño contra gigantes.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Pozo de los Muchos Mundos (Well of Many Worlds)",
      desc: "Círculo de tela oscura que parece abrir un túnel en la superficie donde se coloca.",
      bono: "-",
      beneficio: "Se despliega en una superficie plana formando un pozo de 1,8 m de diámetro. Las criaturas pueden saltar dentro (1 vez al día) para ser transportadas a un plano de existencia aleatorio.",
      maldicion: "Peligro de transporte planar aleatorio.",
      personalidad: "Sin consciencia"
    },
    {
      nombre: "Malla Espectral (Wraith Chain)",
      desc: "Camisa de cota de malla de eslabones de mitral negro que arrastra una capa de sombras vivas.",
      bono: "Cota de malla de mitral +1",
      beneficio: "1 vez al día, puedes hacer que un ataque que te impacte falle automáticamente.",
      maldicion: "Ninguna",
      personalidad: "Sin consciencia"
    }
  ],

  // ==========================================
  // MÉTODOS DE BÚSQUEDA Y GENERACIÓN
  // ==========================================
  getRandomSingular() {
    return this.pick(this.items);
  },

  findSingularByName(namePart) {
    if (!namePart) return this.getRandomSingular();
    const lower = namePart.toLowerCase();
    const found = this.items.find(i => i.nombre.toLowerCase().includes(lower));
    return found || this.getRandomSingular();
  }
};

/* Fuente: tables/something_happens.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.SOMETHING_HAPPENS = {
  name: "¡Algo Sucede!",
  entries: [
    { min: 1, max: 1, desc: "El suelo tiembla violentamente y se abre una fisura descomunal." },
    { min: 2, max: 3, desc: "Un enemigo invisible salta desde su escondite a distancia cercana (close)." },
    { min: 4, max: 5, desc: "Un horrible zumbido llena el aire, volviéndose cada vez más ensordecedor." },
    { min: 6, max: 7, desc: "Percibes el olor acre del humo y las llamas." },
    { min: 8, max: 9, desc: "Aparece una estrella brillante en el cielo, visible incluso en pleno mediodía." },
    { min: 10, max: 11, desc: "Divisas una bolsa medio abierta con monedas de oro reluciendo en su interior." },
    { min: 12, max: 13, desc: "Un hombre desliza una nota y una extraña poción en tu mano." },
    { min: 14, max: 15, desc: "Alguien que te observaba desde lejos se oculta fuera de la vista." },
    { min: 16, max: 17, desc: "Un enano con un sombrero rojo te entrega una rosa, hace una reverencia y se marcha." },
    { min: 18, max: 19, desc: "Un desconocido encapuchado y con capa negra se acerca hacia ti." },
    { min: 20, max: 21, desc: "Alguien intenta robarte la cartera / vaciarte los bolsillos." },
    { min: 22, max: 23, desc: "Un extraño sonido de tictac proviene del interior de tu mochila." },
    { min: 24, max: 25, desc: "Aparece un caballo espumajeante y frenético con montura pero sin jinete." },
    { min: 26, max: 27, desc: "Un montículo en la tierra excava rápidamente en línea recta hacia ti." },
    { min: 28, max: 29, desc: "Percibes que estás siendo objeto de adivinación / espionaje mágico." },
    { min: 30, max: 31, desc: "Alguien intenta colocar un objeto oculto entre tus pertenencias sin que te des cuenta." },
    { min: 32, max: 33, desc: "Te invade una profunda sensación de pavor y peligro inminente." },
    { min: 34, max: 35, desc: "Una mujer te pone en las manos un gato negro y sale huyendo a toda prisa." },
    { min: 36, max: 37, desc: "Una pequeña criatura del bosque salta del interior de una mochila." },
    { min: 38, max: 39, desc: "Hueles a lilas y escuchas una tenue y fantasmal carcajada." },
    { min: 40, max: 41, desc: "Una nota atada a una fina daga se clava en el suelo justo a tu lado." },
    { min: 42, max: 43, desc: "Un meteoro de brillo verdoso cruza a toda velocidad por el cielo." },
    { min: 44, max: 45, desc: "Alguien cercano se te queda mirando fijamente mientras gesticula palabras en silencio." },
    { min: 46, max: 47, desc: "Un par de ojos amarillos te vigilan fijamente desde la oscuridad." },
    { min: 48, max: 49, desc: "Un orco con una flecha clavada en la espalda se estrella a través de una puerta." },
    { min: 50, max: 53, desc: "Escuchas el aullido/grito de dolor de una bestia justo más adelante." },
    { min: 54, max: 55, desc: "Una enorme bandada de murciélagos se abalanza sobre ti y se dispersa en remolino." },
    { min: 56, max: 57, desc: "Un mendigo frágil susurra que tiene un secreto que revelarte." },
    { min: 58, max: 59, desc: "Un objeto cae desde arriba y pasa rozando tu cabeza por milímetros." },
    { min: 60, max: 61, desc: "Una gaviota aterriza sobre tu cabeza y regurgita una botella extraña." },
    { min: 62, max: 63, desc: "Se percibe olor a ozono y la electricidad chisporrotea en el aire." },
    { min: 64, max: 65, desc: "Divisas un rastro de diminutas monedas de plata doblando una esquina o recodo." },
    { min: 66, max: 67, desc: "Un hombre de mirada desquiciada se acerca sosteniendo un libro sagrado en alto." },
    { min: 68, max: 69, desc: "Todas las fuentes de luz se apagan repentinamente al unísono." },
    { min: 70, max: 71, desc: "Una estampida de animales salvajes irrumpe a la vista." },
    { min: 72, max: 73, desc: "Una anciana te señala y grita a todo pulmón: «¡Ahí están!»." },
    { min: 74, max: 75, desc: "Un transeúnte te presiona una moneda antigua en la palma de la mano al pasar." },
    { min: 76, max: 77, desc: "Un coro de aullidos resuena en la lejanía." },
    { min: 78, max: 79, desc: "Dos goblins peleándose a bofetadas y pellizcos caen rodando ante ti." },
    { min: 80, max: 81, desc: "Te das cuenta de que no estás solo; algo está justo a tu espalda." },
    { min: 82, max: 83, desc: "El estruendo súbito de una tromba de agua se precipita violentamente hacia ti." },
    { min: 84, max: 85, desc: "Escuchas un chillido desgarrador y ensordecedor que nadie más puede oír." },
    { min: 86, max: 87, desc: "Un hombre te abofetea con un guante y lo arroja desafiante a tus pies." },
    { min: 88, max: 89, desc: "Se desata una violenta tempestad de viento huracanado sin previo aviso." },
    { min: 90, max: 91, desc: "Un rayo cae muy cerca dejando tras de sí un objeto brillante en el suelo." },
    { min: 92, max: 93, desc: "Un orbe multicolor flota suavemente hacia ti y luego sale disparado a gran velocidad." },
    { min: 94, max: 95, desc: "Un carromato desbocado se estrella a toda velocidad en tu dirección." },
    { min: 96, max: 97, desc: "Un PNJ se despoja de su disfraz, revelándose como un enemigo encubierto." },
    { min: 98, max: 99, desc: "Un demonio se manifiesta ante ti y te presenta una oferta sumamente tentadora." },
    { min: 100, max: 100, desc: "Un ser radiante se manifiesta ante ti portando un mensaje de advertencia." }
  ]
};

/* Fuente: treasure.js */
window.SD_DATA = window.SD_DATA || {};

window.SD_DATA.TREASURE_ENGINE = {
  d(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },
  pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // ==========================================
  // 1. TABLAS DE TESORO POR ESCALÓN DE NIVEL (d100)
  // ==========================================
  tables: {
    "0-3": [
      { min: 1, max: 1, desc: "Tenedor de estaño doblado (1 pc)" },
      { min: 2, max: 3, desc: "Antorcha embarrada (2 pc)" },
      { min: 4, max: 5, desc: "Bolsa con guijarros lisos (2 pc)" },
      { min: 6, max: 7, desc: "10 pc en una faltriquera grasienta" },
      { min: 8, max: 9, desc: "Farol oxidado con los cristales rotos (1 po)" },
      { min: 10, max: 11, desc: "Diente de plata (1 po)" },
      { min: 12, max: 13, desc: "Daga mellada y sin filo (1 po)" },
      { min: 14, max: 15, desc: "Dos viales de cristal vacíos (6 po)" },
      { min: 16, max: 17, desc: "60 pp en una bota podrida" },
      { min: 18, max: 19, desc: "Espejo de mano agrietado (8 po)" },
      { min: 20, max: 21, desc: "Gran hacha desportillada (9 po)" },
      { min: 22, max: 23, desc: "10 po en una caja de madera mohosa" },
      { min: 24, max: 25, desc: "Esquirla de esmeralda (10 po)" },
      { min: 26, max: 27, desc: "Gargantilla de bronce con piedras semipreciosas (10 po)" },
      { min: 28, max: 29, desc: "Copa de plata con bordes desgastados (10 po)" },
      { min: 30, max: 31, desc: "Poción de Curación (Nivel 0–3: 1d6 PG) (10 po)" },
      { min: 32, max: 33, desc: "Frasco con aceite de rosa mosqueta perfumado (10 po)" },
      { min: 34, max: 35, desc: "Alabarda de desfile con hoja dorada (12 po)" },
      { min: 36, max: 37, desc: "Broche de marfil tallado como un halcón (15 po)" },
      { min: 38, max: 39, desc: "Daga ceremonial con pomo de cuarzo (15 po)" },
      { min: 40, max: 41, desc: "15 po en una bolsa bordada" },
      { min: 42, max: 43, desc: "Perla pequeña con ligero fulgor (20 po)" },
      { min: 44, max: 45, desc: "Escudo grabado con el emblema de una orden perdida (20 po)" },
      { min: 46, max: 47, desc: "Túnica de seda con ribetes dorados (20 po)" },
      { min: 48, max: 49, desc: "Joya de jaspe tallada como un escarabajo (20 po)" },
      { min: 50, max: 53, desc: "Espada larga con empuñadura de plata (20 po)" },
      { min: 54, max: 55, desc: "Reloj de bolsillo de latón en funcionamiento (25 po)" },
      { min: 56, max: 57, desc: "Cáliz de oro con filigrana en espiral (25 po)" },
      { min: 58, max: 59, desc: "Lingote de plata pura (25 po)" },
      { min: 60, max: 61, desc: "25 po en un cofre de cobre con candado" },
      { min: 62, max: 63, desc: "Capa ligera y cálida tejida con seda de araña (25 po)" },
      { min: 64, max: 65, desc: "Juego de piezas de mesa talladas en marfil fino (25 po)" },
      { min: 66, max: 67, desc: "Cota de malla a medio forjar/terminar (30 po)" },
      { min: 68, max: 69, desc: "Trío emparejado de martillos de guerra (10 po cada uno)" },
      { min: 70, max: 71, desc: "Fragmento de zafiro (30 po)" },
      { min: 72, max: 73, desc: "Brújula de latón que apunta a la magia cercana (30 po)" },
      { min: 74, max: 75, desc: "Estatuilla de jade verde pulido (30 po)" },
      { min: 76, max: 77, desc: "30 po en una arqueta forrada de terciopelo" },
      { min: 78, max: 79, desc: "Anillo de sello de oro con un zafiro (40 po)" },
      { min: 80, max: 81, desc: "Bolsa de polvos alquímicos luminiscentes (40 po)" },
      { min: 82, max: 83, desc: "Cota de malla de excelente factura (60 po)" },
      { min: 84, max: 85, desc: "Esmeralda agrietada (60 po)" },
      { min: 86, max: 87, desc: "Dos perlas lustrosas (40 po cada una)" },
      { min: 88, max: 89, desc: "Pergamino de conjuro de nivel 1 (Tier 1) (80 po)" },
      { min: 90, max: 91, desc: "Poción de Invisibilidad (80 po)" },
      { min: 92, max: 93, desc: "Arma Mágica Aleatoria +1 (Generar con el motor)", isMagicItem: true, itemType: "weapon", bonusForce: "+1" },
      { min: 94, max: 95, desc: "Armadura Mágica Aleatoria +1 (Generar con el motor)", isMagicItem: true, itemType: "armor", bonusForce: "+1" },
      { min: 96, max: 97, desc: "Objeto de Utilidad Mágico (Generar con el motor)", isMagicItem: true, itemType: "utility" },
      { min: 98, max: 99, desc: "Varita de Protección (Wand of Warding) (100 po)", isSingular: true, singularName: "Varita de Protección" },
      { min: 100, max: 100, desc: "Objeto Mágico Singular Legendario (Tirar objeto)", isSingularRandom: true }
    ],
    "4-6": [
      { min: 1, max: 1, desc: "3 pc sueltas por el suelo" },
      { min: 2, max: 3, desc: "Anillo de madera tallado con entrelazados (5 pc)" },
      { min: 4, max: 5, desc: "Llave pesada de hierro (1 pp)" },
      { min: 6, max: 7, desc: "Escudo de madera reforzado con bandas de acero (10 po)" },
      { min: 8, max: 9, desc: "Collar con un ancla de oro (10 po)" },
      { min: 10, max: 11, desc: "Bolsa con 20 canicas de cristal (5 pp cada una)" },
      { min: 12, max: 13, desc: "Espadón con filo de sierra (12 po)" },
      { min: 14, max: 15, desc: "Tres jabalinas con punta de plata (4 po cada una)" },
      { min: 16, max: 17, desc: "Saco de especias raras y exóticas (15 po)" },
      { min: 18, max: 19, desc: "Pipa de caoba con incrustaciones de marfil (25 po)" },
      { min: 20, max: 21, desc: "Juego de dados de hueso pulido (25 po)" },
      { min: 22, max: 23, desc: "Frasco de cobre grabado con la figura de un búho (30 po)" },
      { min: 24, max: 25, desc: "Parche para el ojo hecho de cuero de ala de murciélago (30 po)" },
      { min: 26, max: 27, desc: "Bandolera de cuero con 10 botellas azules (3 po cada una)" },
      { min: 28, max: 29, desc: "Pequeño óleo con el retrato de una elfa (35 po)" },
      { min: 30, max: 31, desc: "Perla opalescente (40 po)" },
      { min: 32, max: 33, desc: "Martillo de guerra ceremonial rematado en oro (40 po)" },
      { min: 34, max: 35, desc: "Anillo de plata con una esmeralda en miniatura (40 po)" },
      { min: 36, max: 37, desc: "Tapiz de un unicornio en un claro del bosque (45 po)" },
      { min: 38, max: 39, desc: "Muñeco articulado de dragón mecánico de forja goblin (45 po)" },
      { min: 40, max: 41, desc: "Cota de malla incompleta / a medio montar (50 po)" },
      { min: 42, max: 43, desc: "Maza con símbolos sagrados incrustados en oro (50 po)" },
      { min: 44, max: 45, desc: "Jarrón delicado y ancestral de manufactura mirkosiana (50 po)" },
      { min: 46, max: 47, desc: "Incienso raro con aroma que repele a los no-muertos (50 po)" },
      { min: 48, max: 49, desc: "Pezuña de minotauro con una herradura de oro macizo (50 po)" },
      { min: 50, max: 53, desc: "Espada larga con una perla ígnea engarzada en el pomo (50 po)" },
      { min: 54, max: 55, desc: "Estatuilla de cristal verde de Memnon (50 po)" },
      { min: 56, max: 57, desc: "Símbolo sagrado carmesí de Ramlaat con un pequeño rubí (55 po)" },
      { min: 58, max: 59, desc: "Seis velas negras grabadas con runas doradas (10 po cada una)" },
      { min: 60, max: 61, desc: "Cota de malla de excelente factura enana (60 po)" },
      { min: 62, max: 63, desc: "Ballesta de hueso de dragón tallada como un dragón rugiendo (60 po)" },
      { min: 64, max: 65, desc: "Armadura de placas incompleta / a medio montar (65 po)" },
      { min: 66, max: 67, desc: "Fragmento de meteorito magnético e iridiscente (70 po)" },
      { min: 68, max: 69, desc: "Espejo de cuerpo entero enmarcado en oro (70 po)" },
      { min: 70, max: 71, desc: "Gran escarabajo verde preservado en ámbar puro (75 po)" },
      { min: 72, max: 73, desc: "Laúd tallado en madera de hierro con herrajes de oro (75 po)" },
      { min: 74, max: 75, desc: "Colmillo de marfil tallado con ángeles combatiendo demonios (80 po)" },
      { min: 76, max: 77, desc: "Escudo de mitral con incrustaciones de pequeñas perlas azules (80 po)" },
      { min: 78, max: 79, desc: "Dos huevos de grifo intactos (40 po cada uno)" },
      { min: 80, max: 81, desc: "Armadura de placas de acero ennegrecido (130 po)" },
      { min: 82, max: 83, desc: "Pergamino de conjuro de nivel 2 (2nd-tier) (140 po)" },
      { min: 84, max: 85, desc: "Poción de Curación (cura 2d6 puntos de golpe) (150 po)" },
      { min: 86, max: 87, desc: "Pergamino de conjuro de nivel 3 (3rd-tier) (200 po)" },
      { min: 88, max: 89, desc: "Poción de Vuelo (200 po)" },
      { min: 90, max: 91, desc: "Poción de Fuerza de Gigante (200 po)" },
      { min: 92, max: 93, desc: "Varita mágica, conjuro de nivel 3 (con 1 maldición) (250 po)", isMagicItem: true, itemType: "utility", forceCurses: 1 },
      { min: 94, max: 95, desc: "Anillo de Caída de Pluma (Ring of Feather Falling) (250 po)", isSingular: true, singularName: "Anillo de Caída de Pluma" },
      { min: 96, max: 97, desc: "Armadura mágica +2 (con 1 beneficio y 1 maldición) (300 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2", forceCurses: 1 },
      { min: 98, max: 99, desc: "Engranaje de Kythera (Kytherian Cog) (300 po)", isSingular: true, singularName: "Engranaje de Kythera" },
      { min: 100, max: 100, desc: "Arma mágica +2 (con 1 beneficio y 1 maldición) (500 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+2", forceCurses: 1 }
    ],
    "7-9": [
      { min: 1, max: 1, desc: "Fragmentos de cristal roto (2 pc)" },
      { min: 2, max: 3, desc: "Par de botas enfangadas (5 pp)" },
      { min: 4, max: 5, desc: "Faltriquera de cuero podrido con 12 pp" },
      { min: 6, max: 7, desc: "Espadón de acero pavonado / azulado (15 po)" },
      { min: 8, max: 9, desc: "Espejo alto y estrecho con marco de bronce (20 po)" },
      { min: 10, max: 11, desc: "Pareja de espadas bastardas con pomos en forma de grifo (20 po)" },
      { min: 12, max: 13, desc: "Estatuilla de plata y oro de un arquero elfo (25 po)" },
      { min: 14, max: 15, desc: "Esmilodonte disecado (30 po)" },
      { min: 16, max: 17, desc: "Collar con camafeo del perfil de un humano (30 po)" },
      { min: 18, max: 19, desc: "Jarra de cuerno de marfil tallada con enanos bebiendo (35 po)" },
      { min: 20, max: 21, desc: "Arco largo de madera de hierro grabado con hojas plateadas (35 po)" },
      { min: 22, max: 23, desc: "Tablero de ajedrez de caoba con piezas de plata (40 po)" },
      { min: 24, max: 25, desc: "Escudo de mitral pulido hasta reflejar como un espejo (45 po)" },
      { min: 26, max: 27, desc: "Cuerno de unicornio en espiral e iridiscente (50 po)" },
      { min: 28, max: 29, desc: "Huevo de basilisco en una bolsa de seda (55 po)" },
      { min: 30, max: 31, desc: "Símbolo sagrado de oro de Madeera con una gran perla (60 po)" },
      { min: 32, max: 33, desc: "Máscara de dragón rojo con filigranas de oro (65 po)" },
      { min: 34, max: 35, desc: "Incensario de oro con figuras esqueléticas encapuchadas (70 po)" },
      { min: 36, max: 37, desc: "Gran estatua de mármol de un ángel acorazado (70 po)" },
      { min: 38, max: 39, desc: "Cota de malla con varias hileras de eslabones de oro (75 po)" },
      { min: 40, max: 41, desc: "Nidada de tres huevos verdes de cocatriz (25 po cada uno)" },
      { min: 42, max: 43, desc: "Cofre de roble con cerradura lleno hasta el borde con 80 po" },
      { min: 44, max: 45, desc: "Túnica de seda azul bordada con lunas plateadas (80 po)" },
      { min: 46, max: 47, desc: "Perla gigante y radiante (80 po)" },
      { min: 48, max: 49, desc: "Farol fabricado con intrincadas vidrieras de colores (80 po)" },
      { min: 50, max: 53, desc: "Pitón articulada de tamaño natural hecha de oro pulido (80 po)" },
      { min: 54, max: 55, desc: "Retrato al óleo de un bardo célebre (85 po)" },
      { min: 56, max: 57, desc: "Trozo de meteorito esculpido como un ídolo con tentáculos (85 po)" },
      { min: 58, max: 59, desc: "Sobretodo de seda negra bordado con un león de oro (90 po)" },
      { min: 60, max: 61, desc: "Dos perlas lustrosas dentro de un cofre de plata (90 po)" },
      { min: 62, max: 63, desc: "Yelmo dorado adornado con plumas de roc (95 po)" },
      { min: 64, max: 65, desc: "Bestiario ilustrado a mano con criaturas muy raras (95 po)" },
      { min: 66, max: 67, desc: "Cría de draco/wyvern preservada dentro de un bloque de ámbar (110 po)" },
      { min: 68, max: 69, desc: "Colgante con tres perlas relucientes (120 po)" },
      { min: 70, max: 71, desc: "Estatua de obsidiana de tamaño natural de un caballo al galope (120 po)" },
      { min: 72, max: 73, desc: "Esmeralda facetada y centelleante (120 po)" },
      { min: 74, max: 75, desc: "Poción de Curación (restaura 3d8 puntos de golpe) (200 po)" },
      { min: 76, max: 77, desc: "Poción de Polimorfismo (Polymorph) (200 po)" },
      { min: 78, max: 79, desc: "Varita mágica, conjuro de nivel 3 (3rd-tier) (250 po)", isMagicItem: true, itemType: "utility" },
      { min: 80, max: 81, desc: "Pergamino de conjuro de nivel 4 (4th-tier) (260 po)" },
      { min: 82, max: 83, desc: "Bola de Cristal (Crystal Ball) (260 po)", isSingular: true, singularName: "Bola de Cristal" },
      { min: 84, max: 85, desc: "Varita mágica, conjuro de nivel 4 (con 1 defecto) (300 po)", isMagicItem: true, itemType: "utility", forceCurses: 1 },
      { min: 86, max: 87, desc: "Vara Inamovible (Immovable Rod) (300 po)", isSingular: true, singularName: "Vara Inamovible" },
      { min: 88, max: 89, desc: "Armadura mágica +2 (con 1 beneficio) (300 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2" },
      { min: 90, max: 91, desc: "Armadura mágica de mitral +2 (con 1 beneficio y 1 virtud) (320 po)", isMagicItem: true, itemType: "armor", bonusForce: "+2", forceVirtue: true },
      { min: 92, max: 93, desc: "Ídolo de escorpión: otorga 1 bendición de Picadura de la Muerte (320 po)", isBoon: true, boonName: "Picadura de la muerte (Death's Sting)" },
      { min: 94, max: 95, desc: "Círculo de nigromancia: otorga 1 bendición de Paso Fantasmal (350 po)", isBoon: true, boonName: "Paso fantasmal (Ghostwalk)" },
      { min: 96, max: 97, desc: "Estatua de búho: otorga 1 bendición de Ojo Arcano (350 po)", isBoon: true, boonName: "Ojo arcano (Arcane Eye)" },
      { min: 98, max: 99, desc: "Arma mágica +2 (con 1 beneficio y 1 defecto) (500 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+2", forceCurses: 1 },
      { min: 100, max: 100, desc: "Arma mágica +3 (con 1 beneficio y 1 virtud) (900 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+3", forceVirtue: true }
    ],
    "10+": [
      { min: 1, max: 1, desc: "Tres platos de plata deslustrados (5 pp cada uno)" },
      { min: 2, max: 3, desc: "Estatuilla de esteatita de Gede con la cabeza partida (3 po)" },
      { min: 4, max: 5, desc: "Barril medio vacío de hidromiel enana (5 po)" },
      { min: 6, max: 7, desc: "Cota de malla dañada que necesita reparación urgente (50 po)" },
      { min: 8, max: 9, desc: "Cinco espadones ceremoniales emparejados (12 po cada uno)" },
      { min: 10, max: 11, desc: "Esmeralda desportillada por la mitad de su valor (60 po)" },
      { min: 12, max: 13, desc: "Anillo de oro con una gran perla negra (65 po)" },
      { min: 14, max: 15, desc: "Cota de malla carmesí con escudo a juego (70 po)" },
      { min: 16, max: 17, desc: "Perla gigante entre las fauces de un murciélago bañado en oro (100 po)" },
      { min: 18, max: 19, desc: "Vidriera que representa a Santa Terragnis contra un dragón (110 po)" },
      { min: 20, max: 21, desc: "Trono de mármol con una perla gigante en el reposacabezas (115 po)" },
      { min: 22, max: 23, desc: "Daga con una esmeralda engarzada en el pomo (120 po)" },
      { min: 24, max: 25, desc: "Trío de perlas con tonalidades azules y violetas (40 po cada una)" },
      { min: 26, max: 27, desc: "Armadura de placas moldeada con el aspecto de un minotauro (130 po)" },
      { min: 28, max: 29, desc: "Armadura de placas azul con grabados de olas rompiendo (130 po)" },
      { min: 30, max: 31, desc: "Escultura de jade de un hombre elefante meditando (140 po)" },
      { min: 32, max: 33, desc: "Laúd magistral del luthier más famoso del reino (140 po)" },
      { min: 34, max: 35, desc: "Gran hacha de hueso de dragón con un rubí en el pomo (220 po)" },
      { min: 36, max: 37, desc: "Escarabajo de oro salpicado de esmeraldas en miniatura (220 po)" },
      { min: 38, max: 39, desc: "Cofre rebosante con 230 po" },
      { min: 40, max: 41, desc: "Bastón plateado rematado por una garra que sostiene un rubí (220 po)" },
      { min: 42, max: 43, desc: "El único retrato conservado de un rey ancestral (240 po)" },
      { min: 44, max: 45, desc: "Colgante de oro con un rubí en talla lágrima (240 po)" },
      { min: 46, max: 47, desc: "Esmeralda gigante en forma de huevo (240 po)" },
      { min: 48, max: 49, desc: "Túnica de seda con cuatro perlas a modo de botones (240 po)" },
      { min: 50, max: 53, desc: "Calavera de plata con un rubí en la cuenca ocular (240 po)" },
      { min: 54, max: 55, desc: "Cota de malla élfica de mitral (240 po)" },
      { min: 56, max: 57, desc: "Caracola gigante opalizada con incrustaciones de plata (250 po)" },
      { min: 58, max: 59, desc: "Sarcófago de oro grabado con inscripciones en un idioma perdido (250 po)" },
      { min: 60, max: 61, desc: "Trozo de meteorito fundido alrededor de un rubí (250 po)" },
      { min: 62, max: 63, desc: "Pergamino de conjuro de nivel 4 (4th-tier) (260 po)" },
      { min: 64, max: 65, desc: "Bolsa de terciopelo que guarda un zafiro lustroso (280 po)" },
      { min: 66, max: 67, desc: "Dragón adulto disecado en tamaño real (360 po)" },
      { min: 68, max: 69, desc: "Torques de plata con un zafiro y dos perlas (360 po)" },
      { min: 70, max: 71, desc: "Diamante deslumbrante e impecable (360 po)" },
      { min: 72, max: 73, desc: "Poción de Curación (restaura 4d10 puntos de golpe) (360 po)" },
      { min: 74, max: 75, desc: "Pergamino de conjuro de nivel 5 (5th-tier) (360 po)" },
      { min: 76, max: 77, desc: "Poción de Extirpación (Potion of Extirpation) (360 po)", isSingular: true, singularName: "Poción de Extirpación" },
      { min: 78, max: 79, desc: "Varita mágica, conjuro de nivel 5 (con 1 virtud y 1 defecto) (360 po)", isMagicItem: true, itemType: "utility", forceCurses: 1, forceVirtue: true },
      { min: 80, max: 81, desc: "Diamante gigante: lanza deseo (wish) una sola vez con éxito garantizado (720 po)", isSingular: true, singularName: "Deseo" },
      { min: 82, max: 83, desc: "Agujero Portátil (Portable Hole) (720 po)", isSingular: true, singularName: "Agujero Portátil" },
      { min: 84, max: 85, desc: "Ídolo de oro con ojos de rubí: otorga 3 bendiciones de Piel Demoníaca (840 po)", isBoon: true, boonName: "Piel demoníaca (Demonskin)" },
      { min: 86, max: 87, desc: "Pergamino de la Alianza: otorga 3 bendiciones de Halo Divino (840 po)", isBoon: true, boonName: "Halo divino (Divine Halo)" },
      { min: 88, max: 89, desc: "Cubo de la Perfección de Brak (Brak's Cube of Perfection) (840 po)", isSingular: true, singularName: "Cubo de la Perfección de Brak" },
      { min: 90, max: 91, desc: "Alfombra Voladora ricamente tejida (Flying Carpet) (840 po)", isSingular: true, singularName: "Alfombra Voladora" },
      { min: 92, max: 93, desc: "Armadura mágica de mitral +3 (con 1 beneficio y 1 virtud) (900 po)", isMagicItem: true, itemType: "armor", bonusForce: "+3", forceVirtue: true },
      { min: 94, max: 95, desc: "Arma mágica +3 (con 2 beneficios) (900 po)", isMagicItem: true, itemType: "weapon", bonusForce: "+3", forceBenefits: 2 },
      { min: 96, max: 97, desc: "El temible Cuchillo de Bruja de Obsidiana (Obsidian Witchknife) (1.200 po)", isSingular: true, singularName: "Cuchillo de Bruja de Obsidiana" },
      { min: 98, max: 99, desc: "La sagrada Armadura de Santa Terragnis (1.200 po)", isSingular: true, singularName: "Armadura de Santa Terragnis" },
      { min: 100, max: 100, desc: "El poderoso Bastón de Ord (Staff of Ord) (1.200 po)", isSingular: true, singularName: "Bastón de Ord" }
    ]
  },

  // ==========================================
  // 2. ORQUESTADOR PRINCIPAL DE TIRADA DE TESORO
  // ==========================================
  generate(tier) {
    const list = this.tables[tier] || this.tables["0-3"];
    const d100 = this.d(100);
    const itemObj = list.find(e => d100 >= e.min && d100 <= e.max) || list[0];

    const res = {
      roll: d100,
      tierTitle: `TESORO // NIVELES ${tier}`,
      item: itemObj.desc,
      extra: {}
    };

    // Caso 1: Objeto Mágico Procedural (Arma, Armadura o Utilidad)
    if (itemObj.isMagicItem) {
      const bCount = itemObj.forceBenefits || 1;
      const cCount = itemObj.forceCurses || 0;
      let generated = null;

      if (itemObj.itemType === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
        generated = window.SD_DATA.MAGIC_WEAPONS.generateWeapon(itemObj.bonusForce, bCount, cCount);
      } else if (itemObj.itemType === "armor" && window.SD_DATA.MAGIC_ARMOR) {
        generated = window.SD_DATA.MAGIC_ARMOR.generateArmor(itemObj.bonusForce, bCount, cCount);
      } else if (window.SD_DATA.MAGIC_UTILITY) {
        generated = window.SD_DATA.MAGIC_UTILITY.generateUtilityItem(bCount, cCount);
      }

      if (generated) {
        res.item = generated.nombre;
        res.extra["Tipo & Bonificador"] = `${generated.tipo} (${generated.bonificador})`;
        res.extra["Rasgo Visual"] = generated.rasgo;
        res.extra["Beneficio(s)"] = generated.beneficios.join(" ");
        if (generated.maldiciones[0] !== "Ninguna") {
          res.extra["Maldición(es)"] = generated.maldiciones.join(" ");
        }

        // Si la tabla indicaba que poseía Virtud o Consciencia
        if (itemObj.forceVirtue && window.SD_DATA.MAGIC_PERSONALITY) {
          const pers = window.SD_DATA.MAGIC_PERSONALITY.generatePersonality(1, 0);
          res.extra["Personalidad Consciente"] = `${pers.alineamiento} - ${pers.rasgoTemperamento}. Virtud: ${pers.virtudes.join(" ")}`;
        }
      }
    }
    // Caso 2: Objeto Mágico Singular / Artefacto predefinido
    else if (itemObj.isSingular || itemObj.isSingularRandom) {
      let singular = null;
      if (window.SD_DATA.SINGULAR_ITEMS) {
        singular = itemObj.isSingular 
          ? window.SD_DATA.SINGULAR_ITEMS.findSingularByName(itemObj.singularName)
          : window.SD_DATA.SINGULAR_ITEMS.getRandomSingular();
      }

      if (singular) {
        res.item = singular.nombre;
        res.extra.Descripción = singular.desc;
        if (singular.bono && singular.bono !== "-") res.extra.Bonificador = singular.bono;
        res.extra.Beneficio = singular.beneficio;
        if (singular.maldicion && singular.maldicion !== "Ninguna") res.extra.Maldición = singular.maldicion;
        if (singular.personalidad && singular.personalidad !== "Sin consciencia") res.extra.Personalidad = singular.personalidad;
      }
    }
    // Caso 3: Don / Bendición concedida
    else if (itemObj.isBoon && window.SD_DATA.MUNDANE_TABLES) {
      const bFound = window.SD_DATA.MUNDANE_TABLES.blessings.find(b => b.name.includes(itemObj.boonName)) || window.SD_DATA.MUNDANE_TABLES.blessings[0];
      res.extra.Efecto = bFound.desc;
    }

    return res;
  },

  // ==========================================
  // 3. GENERADOR DE OBJETO MÁGICO ALEATORIO COMPLETO (Reglas Shadowdark)
  // ==========================================
  generateRandomMagicItem() {
    // 1. Tipo (d6)
    const typeRoll = this.d(6);
    const types = ["armor", "potion", "scroll", "utility", "wand", "weapon"];
    const chosenType = types[typeRoll - 1];

    // 2. Cualidades: Beneficios y Maldiciones (2d6)
    const qualRoll = this.d(6) + this.d(6);
    let benefitsCount = 1;
    let cursesCount = 0;

    if (qualRoll <= 3) {
      benefitsCount = 0; cursesCount = 1;
    } else if (qualRoll <= 7) {
      benefitsCount = 1; cursesCount = 1;
    } else if (qualRoll <= 11) {
      benefitsCount = 1; cursesCount = 0;
    } else {
      benefitsCount = 2; cursesCount = 0;
    }

    // 3. Generar según categoría
    let item = null;
    if (chosenType === "armor" && window.SD_DATA.MAGIC_ARMOR) {
      item = window.SD_DATA.MAGIC_ARMOR.generateArmor(null, Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "weapon" && window.SD_DATA.MAGIC_WEAPONS) {
      item = window.SD_DATA.MAGIC_WEAPONS.generateWeapon(null, Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "utility" && window.SD_DATA.MAGIC_UTILITY) {
      item = window.SD_DATA.MAGIC_UTILITY.generateUtilityItem(Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "potion" && window.SD_DATA.MAGIC_POTIONS) {
      item = window.SD_DATA.MAGIC_POTIONS.generatePotion(Math.max(1, benefitsCount), cursesCount);
    } else if (chosenType === "scroll" && window.SD_DATA.MAGIC_SPELLS) {
      item = window.SD_DATA.MAGIC_SPELLS.generateScroll();
    } else if (chosenType === "wand" && window.SD_DATA.MAGIC_SPELLS) {
      item = window.SD_DATA.MAGIC_SPELLS.generateWand(null, cursesCount);
    }

    // 4. Chequeo de Personalidad para objetos no consumibles
    if (item && chosenType !== "potion" && chosenType !== "scroll" && window.SD_DATA.MAGIC_PERSONALITY) {
      const pers = window.SD_DATA.MAGIC_PERSONALITY.generatePersonality();
      if (pers.esConsciente) {
        item.personalidad = `${pers.alineamiento} (${pers.rasgoTemperamento}). Virtudes: ${pers.virtudes.join(", ")}. Defectos: ${pers.defectos.join(", ")}`;
      }
    }

    return item;
  },

  // Alias para mantener compatibilidad con botones existentes
  getRandomSingular() {
    if (window.SD_DATA.SINGULAR_ITEMS) {
      return window.SD_DATA.SINGULAR_ITEMS.getRandomSingular();
    }
    return null;
  }
};

/* Fuente: encounters/encountersEngine.js */
window.SD_DATA = window.SD_DATA || {};
window.SD_DATA.ENCOUNTER_TABLES = window.SD_DATA.ENCOUNTER_TABLES || {};

window.SD_DATA.ENCOUNTERS = {
  d: function(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  pick: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  // 1. DISTANCIA (1d6)
  getDistancia: function(roll) {
    if (roll === 1) return { tipo: "Cerrada (Close)", desc: "A 5 pies / cuerpo a cuerpo." };
    if (roll <= 4) return { tipo: "Cercana (Near)", desc: "Hasta 30 pies (1 movimiento)." };
    return { tipo: "Lejana (Far)", desc: "Más de 30 pies (límite de luz)." };
  },

  // 2. ACTIVIDAD (2d6)
  getActividad: function(roll) {
    if (roll <= 4) return "Cazando / Rastreando (Hunting) - Alerta";
    if (roll <= 6) return "Comiendo / Devorando (Eating) - Distraída";
    if (roll <= 8) return "Construyendo / Anidando (Building) - Ocupada";
    if (roll <= 10) return "Socializando / Jugando (Playing) - Desprevenida";
    if (roll === 11) return "Haciendo guardia (Guarding) - Alerta máxima";
    return "Durmiendo / Descansando (Sleeping) - Vulnerable";
  },

  // 3. REACCIÓN (2d6 + CHA)
  getReaccion: function(total) {
    if (total <= 6) return { actitud: "Hostil (Hostile)", desc: "Ataca de inmediato o embosca." };
    if (total <= 8) return { actitud: "Suspicaz (Suspicious)", desc: "Cautelosa, tensa, a la defensiva." };
    if (total === 9) return { actitud: "Neutral (Neutral)", desc: "Indiferente si no la molestan." };
    if (total <= 11) return { actitud: "Curiosa (Curious)", desc: "Dispuesta a observar o negociar." };
    return { actitud: "Amistosa (Friendly)", desc: "Acogedora o dispuesta a colaborar." };
  },

  // 4. TESORO (50%)
  getTesoroChance: function(tierLevel) {
    if (this.d(2) === 1) return "Ninguno (No porta objetos de valor)";
    var tier = "0–3";
    if (tierLevel >= 10) tier = "10+";
    else if (tierLevel >= 7) tier = "7–9";
    else if (tierLevel >= 4) tier = "4–6";
    return `💰 <strong>¡Porta Tesoro!</strong> Consultar tabla: <strong>Tesoro ${tier}</strong>`;
  },

  // 5. MOTOR RESOLUTOR GENÉRICO D100
  resolveRoll: function(tableKey, roll) {
    var tableObj = window.SD_DATA.ENCOUNTER_TABLES[tableKey];
    if (!tableObj) return { desc: "Encuentro desconocido", nv: 1, esMonstruo: true };

    for (var i = 0; i < tableObj.entries.length; i++) {
      var entry = tableObj.entries[i];
      if (roll >= entry.min && roll <= entry.max) {
        if (entry.isDouble) {
          var rA = this.d(entry.maxRoll || 97);
          var rB = this.d(entry.maxRoll || 97);
          var resA = this.resolveRoll(tableKey, rA);
          var resB = this.resolveRoll(tableKey, rB);
          return {
            desc: `⚡ <strong>¡Doble Encuentro!</strong><br>1) [${rA}] ${resA.desc}<br>2) [${rB}] ${resB.desc}`,
            nv: Math.max(resA.nv, resB.nv),
            esMonstruo: true
          };
        }
        return entry;
      }
    }
    return tableObj.entries[0];
  },

  // 6. DISPARADOR PRINCIPAL
  generateEncounter: function(tableKey, chaMod) {
    var tableObj = window.SD_DATA.ENCOUNTER_TABLES[tableKey];
    var rollD100 = this.d(100);
    var res = this.resolveRoll(tableKey, rollD100);

    var dDist = this.d(6);
    var dAct = this.d(6) + this.d(6);
    var dReacBase = this.d(6) + this.d(6);
    var modCarisma = parseInt(chaMod) || 0;
    var dReacTotal = dReacBase + modCarisma;

    var distInfo = this.getDistancia(dDist);
    var actInfo = this.getActividad(dAct);
    var reacInfo = this.getReaccion(dReacTotal);
    var tesoroInfo = res.esMonstruo ? this.getTesoroChance(res.nv) : "No aplicable (Entorno / Objeto)";

    return {
      titulo: `ENCUENTRO // ${tableObj ? tableObj.name.toUpperCase() : tableKey.toUpperCase()}`,
      criatura: res.desc,
      nivel: `Nivel ${res.nv}`,
      distancia: `${distInfo.tipo} (${distInfo.desc})`,
      actividad: res.esMonstruo ? actInfo : "Peligro ambiental / Estático",
      actitud: res.esMonstruo ? `${reacInfo.actitud} — ${reacInfo.desc}` : "Inanimado / Pasivo",
      raw2d6: dReacBase,
      totalReac: dReacTotal,
      tesoro: tesoroInfo,
      rolls: `d100:[${rollD100}] | Distancia:[${dDist}] | Actividad:[${dAct}] | Reacción:[${dReacBase}] + CHA(${modCarisma}) = [${dReacTotal}]`
    };
  }
};
