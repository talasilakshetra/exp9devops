function addTodo() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete" onclick="deleteTodo(this)" title="Delete task">
            🗑
        </button>
    `;

    document.getElementById("todoList").appendChild(li);

    input.value = "";
}

function deleteTodo(button) {
    button.parentElement.remove();
}