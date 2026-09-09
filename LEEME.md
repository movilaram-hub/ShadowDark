# Shadowdark · Mesa del Máster

Aplicación sencilla con HTML, CSS y JavaScript, sin instalaciones ni dependencias externas.

## Abrir la aplicación

Abre `index.html` en un navegador moderno. La copia descargada funciona sin conexión.

## Herramientas

- **Antorcha:** pulsa el contador de la esquina superior derecha para abrir sus controles. Elige 30 o 60 minutos y enciéndela. La llama se anima mientras el reloj está en marcha. El contador permanece accesible en todas las pestañas. Se puede pausar, reanudar o reiniciar. Para cambiar la duración de una antorcha ya iniciada, reiníciala primero. Hay avisos visuales a los 10 y 3 minutos, y una ventana de oscuridad al agotarse. El reloj sigue avanzando si cambias de pestaña o recargas. Un navegador suspendido mostrará el aviso pendiente al recuperar la actividad; no puede mostrar avisos con la app cerrada.
- **Bestiario:** 243 criaturas del programa facilitado. Búsqueda en español o inglés, sin distinguir tildes. Al iniciar no se muestran criaturas; los resultados aparecen al escribir una búsqueda. «Cerrar resultados» limpia la búsqueda y oculta toda la lista, manteniendo las fichas ancladas. Los resultados se distribuyen en dos columnas cuando hay espacio, y en una en pantallas estrechas. Pulsa el nombre para consultar su ficha y «Anclar» para añadir una copia independiente a la mesa.
- **Combate:** varias copias de un mismo monstruo; PG grandes y botones táctiles de al menos 48 × 48 píxeles. Ajusta los PG con botones o escribiendo el valor. La CA es fija y se muestra destacada en amarillo; corresponde al valor original del bestiario. El indicador rojo y «Herido» aparecen a la mitad de los PG iniciales o menos; es solo una ayuda visual. A 0 PG aparece «Fuera de combate». Los ataques permanecen visibles y los atributos y rasgos se despliegan al tocarlos. La × de la esquina superior derecha desancla la ficha. En el recuadro restante puedes «Recuperar ficha» o pulsar «Eliminar» para retirarlo definitivamente de la mesa.
- **Oráculo SoloDark:** disponible en su propia pestaña, sin necesidad de escribir la pregunta. Pulsa «Poco Probable», «50%» o «Casi Seguro» para consultar directamente; se usa el menor de 2d20, 1d20 o el mayor de 2d20, respectivamente. El resultado final de 1 muestra un efecto de pifia, y el 20, de éxito crítico; con ventaja o desventaja se aplica al dado seleccionado. 1–9 no, 10 giro, 11–20 sí; los impares salvo el 1 añaden «pero» y el 1/20 dan la versión extrema. Ventaja y desventaja usan dos d20. El giro incluye verbo y sustantivo. Fuente: SoloDark V1 facilitado, páginas impresas 9–12. La antorcha usa las duraciones en minutos solicitadas por el usuario, independientemente de las reglas de luz por asaltos del modo solitario.
- **Dados:** d2, d4, d6, d8, d10, d12, d20 y d100, accesibles desde «Dados», junto a la antorcha. Durante la tirada cambian los números hasta fijar el resultado. Hay efectos de color para el 1 y 20 naturales del d20, sin vibración del cuadro. El historial muestra las últimas cinco tiradas de dados, con la más reciente primero; se conserva al cerrar el menú o cambiar de pestaña y se vacía al recargar. Se respeta la preferencia del sistema de reducir movimiento.
- **Generadores:** 36 tipos de generador, con 23 entornos para los encuentros. Nombres, PNJ, rivales, seguidores, armas, armaduras, pociones, pergaminos, varitas, objetos singulares, tesoros, dones, mazmorras, salas, trampas, rumores, lugares y más. Cada resultado sustituye al anterior; no se guarda, no se añade al combate y no se incluye en el buscador.

## Datos y guardado

La antorcha y las fichas de combate se guardan únicamente en el almacenamiento local de este navegador y dispositivo. No hay sincronización entre dispositivos ni entre pestañas simultáneas; usa una pestaña para cada partida. Si el navegador bloquea el almacenamiento, la app sigue funcionando durante la sesión y avisa de la limitación. No borres los datos del navegador si quieres conservar la mesa.

El formato del guardado es compatible con las versiones anteriores. La recuperación de fichas desancladas está disponible durante la sesión actual; se vacía al recargar. Los PG de las fichas activas sí se conservan.

Los resultados de tablas y preguntas del oráculo no se guardan. La app incluye `noindex, nofollow, noarchive` y `robots.txt` para solicitar que los buscadores no la indexen; estas directivas no sustituyen el control de acceso.

## Archivos

- `index.html`: estructura de las tres pestañas.
- `styles.css`: estilos, adaptación a móvil y animaciones.
- `app.js`: interacciones y presentación.
- `core.js`: reloj, dados, búsqueda, combate y reglas del oráculo.
- `generators.js`: catálogo y adaptación de generadores.
- `data.js`: tablas y motores reutilizados del archivo `ShadowdarkGM.rar` facilitado por el usuario. No incorpora la interfaz anterior.

Se corrigió el giro del oráculo del programa anterior, que no activaba su estímulo; los nombres de mazmorras usan los rangos d100 del PDF, y la repetición de tipo de armadura usa dos d6 reales. Las demás tablas se reutilizan tal como se facilitaron; no se ha realizado una auditoría completa contra el manual de Shadowdark.

Herramienta de ayuda no oficial para uso personal. Shadowdark y SoloDark pertenecen a The Arcane Library. El PDF original no se incluye en esta aplicación.

## Diseño y recursos locales

Interfaz plana en negro, gris y blanco, con amarillo para la CA y los críticos, naranja para la antorcha y rojo para los estados de peligro. Tipografía DejaVu Sans incluida para mantener la lectura sin conexión. El logo «Designed for use with ShadowDark RPG» es el archivo facilitado por el usuario y se conserva sin modificar.

`theme.css` contiene el diseño visual; `assets/` contiene el logo, las fuentes y su licencia. Mantén estos archivos junto al resto de la app al descomprimir el ZIP.
