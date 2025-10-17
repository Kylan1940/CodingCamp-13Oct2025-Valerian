let tasks = [];

function addTask() {
    const taskInput = document.getElementById("new-task");
    const dueDateInput = document.getElementById("due-date");

    if (taskInput.value === "" || dueDateInput.value === "") {
        alert("Please enter both task and due date.");
        return;
    } else {

        const newTask = {
            description: taskInput.value,
            dueDate: dueDateInput.value
        };

        tasks.push(newTask);
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.description} - Due: ${task.dueDate}`;
        taskList.appendChild(listItem);
    });
}

function clearTask() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "No tasks available";    
}

function filterTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.description} - Due: ${task.dueDate}`;
        taskList.appendChild(listItem);
    });
}