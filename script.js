document.getElementById("add-btn").addEventListener("click", addTodo);
document.getElementById("todo-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText === "") return;

  const todoItem = document.createElement("li");

  const todoContent = document.createElement("span");
  todoContent.textContent = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    todoItem.remove();
  };

  todoItem.appendChild(todoContent);
  todoItem.appendChild(deleteBtn);

  document.getElementById("todo-list").appendChild(todoItem);

  todoInput.value = ""; // Clear input field
}
