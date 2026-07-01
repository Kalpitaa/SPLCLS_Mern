let tasks = [];

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") return;

    tasks.push(task);
    taskInput.value = "";

    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");
    let count = document.getElementById("count");
    let message = document.getElementById("message");

    list.innerHTML = "";

    if (tasks.length === 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";

        tasks.forEach((task, index) => {
            let li = document.createElement("li");

            li.innerHTML = `
                ${task}
                <button onclick="deleteTask(${index})">Delete</button>
            `;

            list.appendChild(li);
        });
    }

    count.innerText = tasks.length;
}