const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const taskList = document.getElementById("tasks") as HTMLUListElement;

let tasks: string[] = [];

button.addEventListener("click", addTask);

function addTask() {
    const value = input.value.trim();
    if (value) {
        tasks.push(value);
        input.value = "";
        renderTasks();
    }
}

function renderTasks() {
    taskList.replaceChildren();
    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
}