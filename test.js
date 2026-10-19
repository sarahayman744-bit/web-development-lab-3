"use strict";

const input = document.getElementById("input");
const button = document.getElementById("button");
const taskList = document.getElementById("tasks");
const tasks = [];

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
        const item = document.createElement("li");
        item.textContent = task;
        taskList.appendChild(item);
    }
}