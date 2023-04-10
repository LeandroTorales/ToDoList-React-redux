const inputValue = document.querySelector("#input--putTask");
const addTask = document.querySelector(".add--task");
const wrapperTasks = document.querySelector(".wrapper--tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const saveToLocalStorage = (key, valor) => {
  localStorage.setItem(key, JSON.stringify(valor));
};

const handleInput = () => {
  const value = inputValue.value.trim();
  return value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  saveToLocalStorage("tasks", [...tasks, { nameTask: handleInput() }]);
  generateTasks();
};

const templateTask = (task) => {
  const { nameTask } = task;
  return `
            <div class="task" data-nametask=${nameTask}>
              <p class="text-task">${nameTask}</p >
              <div class="buttons--modificateTask">
                <button class="button--editTask">Editar</button>
                <button class="button--deleteTask">
                  <i class="fa-sharp fa-light fa-x fa-m"></i>
                </button>
              </div>
            </div> 
    `;
};

const generateTasks = () =>
  (wrapperTasks.innerHTML += tasks.map((task) => templateTask(task)).join(""));

const init = () => {
  inputValue.addEventListener("keypress", handleInput);
  addTask.addEventListener("click", handleSubmit);
  window.addEventListener("DOMContentLoaded", generateTasks);
};

init();
