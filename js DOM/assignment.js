// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  // create list item
  const li = document.createElement("li");

  // task text
  const span = document.createElement("span");
  span.textContent = task;

  // mark completed
  span.addEventListener("click", () => {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});