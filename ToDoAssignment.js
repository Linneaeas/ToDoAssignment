// NO TASKS MESSAGE START
const noTasksMessage = document.querySelector(".no-tasks-message");
function toggleNoTasksMessage() {
  noTasksMessage.style.display =
    taskContainer.childElementCount === 0 ? "block" : "none";
}

// NO TASKS MESSAGE END

// NEWLISTBUTTON START
const newListButton = document.querySelector(".button.newlist");
const newListForm = document.getElementById("newListForm");

newListButton.addEventListener("click", function () {
  newListForm.style.display =
    newListForm.style.display === "none" ? "block" : "none";
});
// NEWLISTBUTTON END

// CREATE NEW LIST START
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
// CREATE NEW LIST END

// NEWTASKBUTTON START
const newTaskButton = document.querySelector(".button.newtask");
const newTaskForm = document.getElementById("newTaskForm");

newTaskButton.addEventListener("click", function () {
  newTaskForm.style.display =
    newTaskForm.style.display === "none" ? "block" : "none";
});
// NEWTASKBUTTON END

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

  const status = document.createElement("div");
  status.classList.add("status");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-" + (taskContainer.childElementCount + 1);
  status.appendChild(checkbox);

  const completedDate = document.createElement("span");
  completedDate.classList.add("completed-date");
  status.appendChild(completedDate);
  taskElement.appendChild(status);

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
  deleteButton.classList.add("delete", "button", "task");
  taskElement.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    taskElement.parentNode.removeChild(taskElement);
    toggleNoTasksMessage();
  });

  taskContainer.insertBefore(taskElement, newTaskForm);

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  newTaskForm.style.display = "none";
  toggleNoTasksMessage();
});
// CREATE NEW TASK START

// CHECKBOX STATUS AND DATE START
document.addEventListener("change", function (event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const checkbox = event.target;
    const taskElement = checkbox.closest(".task");
    const completedDate = taskElement.querySelector(".completed-date");

    if (checkbox.checked) {
      completedDate.textContent = new Date().toLocaleDateString();
      completedDate.classList.add("visible");
    } else {
      completedDate.textContent = "";
      completedDate.classList.remove("visible");
    }
  }
});
// CHECKBOX STATUS AND DATE END

// ALL, REMAINING, COMPLETED BUTTONS START
const allButton = document.querySelector(".button.all");
const remainingButton = document.querySelector(".button.remaining");
const completedButton = document.querySelector(".button.completed");

allButton.addEventListener("click", function () {
  showAllTasks();
});

remainingButton.addEventListener("click", function () {
  showRemainingTasks();
});

completedButton.addEventListener("click", function () {
  showCompletedTasks();
});

function showAllTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach(function (task) {
    task.style.display = "flex";
  });
}

function showRemainingTasks() {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach(function (task) {
    const checkbox = task.querySelector('input[type="checkbox"]');

    if (checkbox && checkbox.checked) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
}

function showCompletedTasks() {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach(function (task) {
    const checkbox = task.querySelector('input[type="checkbox"]');

    if (checkbox && checkbox.checked) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
// ALL, REMAINING, COMPLETED BUTTONS END
