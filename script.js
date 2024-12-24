document.getElementById("add-btn").addEventListener("click", addTodo);
document.getElementById("todo-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Load todos from localStorage
document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  const timeInput = document.getElementById("completion-time");
  const completionTime = timeInput.value.trim();

  if (todoText === "") return;

  const todoItem = {
    text: todoText,
    time: completionTime,
  };

  // Get existing todos from localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  
  // Add new todo item to the list
  todos.push(todoItem);

  // Save to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear input fields
  todoInput.value = "";
  timeInput.value = "";

  // Reload the list
  loadTodos();
}

function loadTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach(todo => {
    const todoItem = document.createElement("li");

    const todoContent = document.createElement("span");
    todoContent.textContent = todo.text;

    const timeText = document.createElement("span");
    timeText.textContent = todo.time ? `By: ${todo.time}` : "";
    timeText.classList.add("time");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      deleteTodo(todo);
    };

    todoItem.appendChild(todoContent);
    todoItem.appendChild(timeText);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });
}

function deleteTodo(todoToDelete) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Remove the todo item from the array
  todos = todos.filter(todo => todo.text !== todoToDelete.text || todo.time !== todoToDelete.time);

  // Save the updated array to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Reload the list
  loadTodos();
}
