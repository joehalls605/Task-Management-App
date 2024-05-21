// Variables and Data Types

const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = []; // Array to store tasks

// Functions 

function addTask(task){
    tasks.push(task);
    renderTasks();
}

function removeTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-task-btn");
        removeBtn.onclick = () => removeTask(index);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

// Event listeners

addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value;
    if(task){
        addTask(task);
        taskInput.value = "";
    }
});