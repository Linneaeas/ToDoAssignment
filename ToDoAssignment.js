// NO TASKS MESSAGE START
const noTasksMessage = document.querySelector(".no-tasks-message");
function toggleNoTasksMessage() {
  noTasksMessage.style.display =
    taskContainer.childElementCount === 0 ? "block" : "none";
}

// NO TASKS MESSAGE END

// FILTER BY CATEGORY START
const categoryFilter = document.getElementById("enterTaskCategory");
categoryFilter.addEventListener("change", filterTasksByCategory);

function filterTasksByCategory() {
  const selectedCategory = categoryFilter.value;
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    if (
      selectedCategory === "" ||
      task.querySelector(".category").textContent === selectedCategory
    ) {
      task.style.display = "flex"; // Show the task
    } else {
      task.style.display = "none"; // Hide the task
    }
  });
}

const taskCategoryInput = document.getElementById("taskCategory");
const categoryList = document.getElementById("category");

taskCategoryInput.addEventListener("input", updateCategoryList);

function updateCategoryList() {
  const enteredCategory = taskCategoryInput.value;

  // Create and append new options based on user input
  const options = document.querySelectorAll(".category");
  options.forEach((option) => {
    if (option.textContent.startsWith(enteredCategory)) {
      const newOption = document.createElement("option");
      newOption.value = option.textContent;
      newOption.textContent = option.textContent;
      categoryList.appendChild(newOption);
    }
  });
}
// FILTER BY CATEGORY END

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
  const taskCategory = document.getElementById("taskCategory").value;
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

  const taskCategoryElement = document.createElement("span");
  taskCategoryElement.classList.add("category");
  taskCategoryElement.textContent = taskCategory;
  taskElement.appendChild(taskCategoryElement);

  const createdDateElement = document.createElement("time");
  createdDateElement.classList.add("createdDate");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  createdDateElement.textContent = formattedDate;
  taskElement.appendChild(createdDateElement);
  //EDIT BUTTON START
  const editButton = document.createElement("button");
  editButton.classList.add("button", "edit");
  taskElement.appendChild(editButton);
  //EDIT BUTTON  END

  //DELETE BUTTON START
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete", "button", "task");
  taskElement.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    taskElement.parentNode.removeChild(taskElement);
    toggleNoTasksMessage();
  });
  //DELETE BUTTON START

  taskContainer.insertBefore(taskElement, newTaskForm);

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  newTaskForm.style.display = "none";
  toggleNoTasksMessage();
});
// CREATE NEW TASK END

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

// SHOW: ALL, REMAINING, COMPLETED BUTTONS START
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
// SHOW: ALL, REMAINING, COMPLETED BUTTONS END
