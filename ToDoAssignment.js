//NEWLISTBUTTON START
const newListButton = document.querySelector(".button.newlist");
const newListForm = document.getElementById("newListForm");
newListButton.addEventListener("click", function () {
  if (newListForm.style.display === "none") {
    newListForm.style.display = "block";
  } else {
    newListForm.style.display = "none";
  }
});
//NEWLISTBUTTON END

// NEWLISTBUTTONCREATE START
newListForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = newListForm.querySelector('input[type="text"]');
  const newListName = input.value;

  const newList = document.createElement("li");
  newList.classList.add("list-name");
  newList.textContent = newListName;

  const listsContainer = document.querySelector(".lists");

  listsContainer.appendChild(newList);

  input.value = "";
  newListForm.style.display = "none";
});
// NEWLISTBUTTONCREATE END

//NEWTASKBUTTON START
const newTaskButton = document.querySelector(".button.newtask");
const newTaskForm = document.getElementById("newTaskForm");
newTaskButton.addEventListener("click", function () {
  if (newTaskForm.style.display === "none") {
    newTaskForm.style.display = "block";
  } else {
    newTaskForm.style.display = "none";
  }
});
//NEWTASKBUTTON END

// CREATE NEW TASK START
const taskContainer = document.querySelector(".taskContainer");
const taskForm = document.querySelector(".newTaskForm form");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskTitleInput = document.getElementById("enterTaskTitle");
  const taskDescriptionInput = document.getElementById("enterTaskDescription");

  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionInput.value;

  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-" + (taskContainer.childElementCount + 1);
  statusDiv.appendChild(checkbox);

  const label = document.createElement("label");
  label.htmlFor = "task-" + (taskContainer.childElementCount + 1);
  statusDiv.appendChild(label);

  const completedLabel = document.createElement("span");
  completedLabel.classList.add("completed-label");
  completedLabel.textContent = "Completed ";
  label.appendChild(completedLabel);

  const completedDate = document.createElement("span");
  completedDate.classList.add("completed-date");
  label.appendChild(completedDate);

  taskElement.appendChild(statusDiv);

  const taskTitleElement = document.createElement("p");
  taskTitleElement.classList.add("taskTitle");
  taskTitleElement.textContent = taskTitle;
  taskElement.appendChild(taskTitleElement);

  const taskDescriptionElement = document.createElement("p");
  taskDescriptionElement.classList.add("description");
  taskDescriptionElement.textContent = taskDescription;
  taskElement.appendChild(taskDescriptionElement);

  const createdDateElement = document.createElement("time");
  createdDateElement.classList.add("createdDate");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  createdDateElement.textContent = formattedDate;
  taskElement.appendChild(createdDateElement);

  const editButton = document.createElement("button");
  editButton.classList.add("button", "edit");
  taskElement.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button", "delete", "task");
  taskElement.appendChild(deleteButton);

  taskContainer.insertBefore(taskElement, newTaskForm);

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  newTaskForm.style.display = "none";
});

// CHECKBOX STATUS AND DATE START
document.addEventListener("change", function (event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const checkbox = event.target;
    const taskElement = checkbox.closest(".task");
    const completedLabel = taskElement.querySelector(".completed-label");
    const completedDate = taskElement.querySelector(".completed-date");

    if (checkbox.checked) {
      completedLabel.classList.add("visible");
      completedDate.textContent = new Date().toLocaleDateString();
      completedDate.classList.add("visible");
    } else {
      completedLabel.classList.remove("visible");
      completedDate.textContent = "";
      completedDate.classList.remove("visible");
    }
  }
});
