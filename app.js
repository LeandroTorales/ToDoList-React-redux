const input = document.querySelector("#input--putTask");
const addTask = document.querySelector(".add--task");
const wrapperTasks = document.querySelector(".wrapper--tasks");
const textTotalTasks = document.querySelector(".total--tasks");
const btnCleanTasks = document.querySelector(".clean--tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let numbers = JSON.parse(localStorage.getItem("numbers")) || [];

const saveToLocalStorage = (key, valor) => {
  localStorage.setItem(key, JSON.stringify(valor));
};

const putTasksInLocalStorage = (objectTask) => {
  tasks = [...tasks, { ...objectTask, handlerIdTask: generateRandomNumber(1, 100, numbers) }];
  return saveToLocalStorage("tasks", tasks);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const textTask = input.value.trim();
  if (textTask === "") return;
  const objectTask = new Object({ textTask });
  putTasksInLocalStorage(objectTask);
  handlerCheckStatePage();
  input.value = "";
};

const generateRandomNumber = (min, max, numerosGenerados) => {
  let numerosPosibles = [];

  for (let i = min; i <= max; i++) {
    if (!numerosGenerados.includes(i)) {
      numerosPosibles.push(i);
    }
  }
  const indice = Math.floor(Math.random() * numerosPosibles.length);
  const numeroGenerado = numerosPosibles[indice];
  numerosGenerados.push(numeroGenerado);
  handlerCheckStatePage();
  return numeroGenerado;
};

const templateTask = (task) => {
  const { textTask, handlerIdTask } = task;

  return `
            <div class="task">
              <p class="text-task">${textTask}</p >
              <div class="button--modificateTask">
                <button class="button--deleteTask btnDelete" data-handlerIdTask=${handlerIdTask}>
                  <i class="fa-sharp fa-light fa-x fa-m btnDelete" data-handlerIdTask=${handlerIdTask}></i>
                </button>
              </div>
            </div> 
    `;
};

const generateTasks = () =>
  (wrapperTasks.innerHTML = tasks.map((task) => templateTask(task)).join(""));

const countTotalTasks = () => {
  textTotalTasks.innerHTML = `Tienes ${tasks.length} tareas en total`;
};

const cleanTasks = () => {
  tasks = [];
  console.log(tasks);
  input.value = "";
  handlerCheckStatePage();
};

const handlerButtonsTask = (e) => {
  if (e.target.classList.contains("btnDelete")) {
    /* Busca la task y la borra del localStorage "tasks" */
    const index = tasks.findIndex((task) => task.handlerIdTask === e.target.dataset.handleridtask);
    tasks.splice(index, 1);

    /* Busca el id de la task y la saca del array del localStorage "numbers" */
    const indexNumberTask = numbers.findIndex(
      (number) => number === e.target.dataset.handleridtask
    );
    numbers.splice(indexNumberTask, 1);

    handlerCheckStatePage();
  } else if (e.target.classList.contains("button--editTask")) {
    return console.log("edit");
  }
};

/* Paquete de funciones de la pagina , como un contador, llama al generador de templates, etc.  */
const handlerCheckStatePage = () => {
  saveToLocalStorage("tasks", tasks);
  saveToLocalStorage("numbers", numbers);
  generateTasks();
  countTotalTasks();
};

const init = () => {
  addTask.addEventListener("click", handleSubmit);
  btnCleanTasks.addEventListener("click", cleanTasks);
  wrapperTasks.addEventListener("click", handlerButtonsTask);
  window.addEventListener("DOMContentLoaded", handlerCheckStatePage);
};

init();
