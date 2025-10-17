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
        const row = document.createElement("tr");
        const descriptionCell = document.createElement("td");
        const dueDateCell = document.createElement("td");

        descriptionCell.textContent = task.description;
        dueDateCell.textContent = task.dueDate;

        row.appendChild(descriptionCell);
        row.appendChild(dueDateCell);
        taskList.appendChild(row);
    });
}

function clearTask() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "<tr><td colspan='2'>No tasks available</td></tr>";
}

function filterTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");
        const descriptionCell = document.createElement("td");
        const dueDateCell = document.createElement("td");

        descriptionCell.textContent = task.description;
        dueDateCell.textContent = task.dueDate;

        row.appendChild(descriptionCell);
        row.appendChild(dueDateCell);
        taskList.appendChild(row);
    });
}