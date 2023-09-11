document.addEventListener("DOMContentLoaded", function () {
    const taskNameInput = document.getElementById("taskName");
    const assigneeInput = document.getElementById("assignee");
    const createTaskButton = document.getElementById("createTask");
    const taskList = document.getElementById("tasks");

    createTaskButton.addEventListener("click", function () {
        const taskName = taskNameInput.value;
        const assignee = assigneeInput.value;

        if (taskName.trim() === "" || assignee.trim() === "") {
            alert("Please enter both task name and assignee.");
            return;
        }

        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.textContent = `Task: ${taskName}, Assignee: ${assignee}`;
        taskList.appendChild(taskItem);

    });
});
