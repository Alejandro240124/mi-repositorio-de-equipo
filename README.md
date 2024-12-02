# To-Do-List

Descripción del Software

El "To-Do List" debe permitir al usuario realizar las siguientes acciones:

- Añadir tareas: Los usuarios podrán agregar nuevas tareas a su lista.
- Marcar tareas como completadas: Los usuarios podrán marcar las tareas como finalizadas, indicando que ya no requieren acción.
- Eliminar tareas: Los usuarios podrán eliminar tareas de la lista para mantenerla actualizada y organizada.
- Persistencia básica (opcional): Las tareas se guardarán para que persistan incluso después de recargar la página.

Historias de Usuario (HU)

---

HU01: Agregar tareas

Como usuario, quiero agregar tareas a mi lista para llevar un registro de mis pendientes.

Criterios de aceptación:
- El usuario debe ingresar una tarea en un cuadro de texto.
- Al presionar un botón de "Agregar", la tarea debe añadirse a una lista visible.

---

HU02: Mostrar tareas

Como usuario, quiero ver todas las tareas que he añadido para tener claridad de lo que debo realizar.

Criterios de aceptación:
- La lista debe mostrar todas las tareas, tanto completadas como no completadas.
- Las tareas deben aparecer en el orden en que fueron añadidas.

---

HU03: Marcar tareas como completadas

Como usuario, quiero marcar una tarea como completada para saber que ya no necesito trabajar en ella.

Criterios de aceptación:
- Al hacer clic sobre una tarea, esta debe cambiar de apariencia (por ejemplo, tachada o con un color diferente).
- La tarea debe seguir visible en la lista, pero debe destacarse como completada.

---

HU04: Eliminar tareas

Como usuario, quiero eliminar tareas de mi lista para mantenerla organizada y enfocada en lo que realmente necesito hacer.

Criterios de aceptación:
- Cada tarea debe tener un botón de eliminación.
- Al hacer clic en el botón, la tarea debe desaparecer de la lista.

---

HU05: Persistencia básica (opcional)

Como usuario, quiero que mi lista de tareas persista después de recargar la página para no perder mis datos.

Criterios de aceptación:
- Las tareas deben almacenarse en el `localStorage` del navegador.
- Al recargar la página, las tareas guardadas deben mostrarse automáticamente en la lista.

---

Implementación en GitHub

Crear el repositorio

1. Crear un repositorio en GitHub con el nombre `to-do-list`.
2. Subir los archivos básicos del proyecto: `index.html`, `styles.css` y `script.js`.

Estructura del Repositorio

```
to-do-list/
├── index.html    # Contiene la estructura básica de la página HTML.
├── styles.css    # Archivos CSS para los estilos visuales de la lista.
├── script.js     # Lógica en JavaScript para gestionar las tareas.
```

Commits sugeridos:

1. Inicialización del repositorio.
2. Creación de la estructura HTML básica.
3. Aplicación de los estilos iniciales con CSS.
4. Implementación de la lógica para agregar y mostrar tareas en JavaScript.
5. Desarrollo de las funcionalidades para marcar tareas como completadas y eliminar tareas.
6. Implementación de la persistencia básica usando `localStorage`.

---

Este enfoque mejora la claridad de cada historia de usuario y asegura que la estructura de implementación sea coherente. Cada historia está detallada con criterios de aceptación específicos, lo que facilita la implementación y la validación del producto final.
