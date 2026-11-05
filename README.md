# Mi Primer Peso

Página web de educación financiera para personas en México que no saben nada de inversión, desde jóvenes hasta adultos. Funciona como una ruta de aprendizaje en 3 etapas, con lenguaje sencillo y ejemplos de la vida diaria.

*Sitio publicado:* [PEGA AQUÍ EL LINK DE BOLT]
*Repositorio:* [PEGA AQUÍ EL LINK DE GITHUB]

## Qué incluye
- *Etapa 1:* 6 lecciones cortas (inflación, ahorrar vs. invertir, riesgo y rendimiento, interés compuesto, antes de invertir y dónde invertir en México). Cada lección tiene una pregunta con estado propio y el botón "Siguiente" se activa solo al contestar.
- *Etapa 2:* calculadora de interés compuesto con gráfica de crecimiento.
- *Etapa 3:* simulador de metas (viaje, celular, boda, carro, casa), con y sin inversión.
- Enlaces a sitios oficiales (CETES, Condusef, Banxico) y avance guardado en el navegador.

## Herramientas utilizadas
- *Bolt:* generación y corrección del sitio con vibe coding.
- *GitHub:* repositorio del código.
- *Canva:* guía de estilo (colores, tipografías, botones).
- *Claude:* apoyo para estructurar prompts y revisar errores.
- *Diseño:* gris #A6A6A6, amarillo #FFDE59 y azul #5170FF; fuentes Mochiy Pop One e Inter; figuras geométricas decorativas y botones rectangulares.

## Prompt clave (Rol, Tarea, Contexto y Restricciones)
- *Rol:* desarrollador web front-end experto en diseño accesible.
- *Tarea:* construir "Mi Primer Peso" con lecciones, calculadora de interés compuesto y simulador de metas.
- *Contexto:* público en México, de jóvenes a adultos, sin conocimientos financieros; tono sencillo y confiable.
- *Restricciones:* preguntas independientes por lección, campos vacíos al inicio, botones rectangulares, figuras geométricas, enlaces oficiales en pestaña nueva, contraste accesible, diseño responsivo y aviso de que no es asesoría financiera.

Después refiné el diseño y las funciones con prompts cortos de corrección.

## Errores detectados y corregidos con la IA
| Error | Causa probable | Corrección |
|---|---|---|
| Las preguntas aparecían ya contestadas y no se podían responder | La respuesta se guardaba en un estado compartido entre lecciones | Un estado de respuesta independiente por lección |
| La calculadora traía números escritos | Valores por defecto en los campos | Campos vacíos con ejemplo solo como texto de ayuda |
| El simulador no hacía rendir el dinero ya ahorrado | Fórmula incompleta | Fórmula que incluye el rendimiento del ahorro previo |
| No se podía pasar de una herramienta a otra | Faltaban botones de navegación conectados | Pestañas y botón para volver a las herramientas |
| Los botones "Ver sitio oficial" fallaban a veces | Se abrían con JavaScript y los bloqueaba el navegador | Enlaces normales con la dirección visible |

## Manejo de tokens
Compacté el prompt inicial en una sola versión corta y corregí por partes, en lugar de repetir instrucciones largas. [Agrega aquí cómo lo hiciste.]

## Aviso
Contenido educativo, no constituye asesoría financiera. Los rendimientos mostrados son ejemplos y no están garantizados.

*Autora:* María Guadalupe Orozco Aldama. Proyecto final del curso Introducción a la IA y Vibecoding.
