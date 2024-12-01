// Elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const toastContainer = document.getElementById("toastContainer");

// Función para mostrar un toast
function showToast(message, type) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type, "show");
  toast.textContent = message;
  
  // Añadir el toast al contenedor
  toastContainer.appendChild(toast);
  
  // Desaparecer el toast después de 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300); // 300ms es el tiempo para que el toast se elimine
  }, 3000); // 3000ms = 3 segundos
}

// Función para agregar una tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showToast("La tarea no puede estar vacía", "error");
    return;
  }

  // Crear el elemento de la tarea
  const li = document.createElement("li");
  li.textContent = taskText;

  // Añadir la tarea a la lista
  taskList.appendChild(li);

  // Limpiar el campo de entrada
  taskInput.value = "";

  // Mostrar toast de tarea agregada
  showToast("Tarea agregada exitosamente", "success");

  // Guardar las tareas en localStorage después de agregar una
  saveTasks();
}

// Evento para agregar tarea al hacer clic en el botón
addTaskBtn.addEventListener("click", addTask);

// Evento para agregar tarea al presionar Enter
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Función para cargar las tareas desde el almacenamiento local
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.classList.toggle("completed", task.completed);
    taskList.appendChild(li);
  });
}

// Función para guardar las tareas en localStorage
function saveTasks() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll("li");
  taskItems.forEach((item) => {
    tasks.push({
      text: item.textContent,
      completed: item.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cargar tareas al cargar la página
window.onload = loadTasks;

// Marcar tarea como completada
taskList.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("completed");
    saveTasks(); // Guardar cambios en el localStorage cuando una tarea se marca como completada
  }
});
