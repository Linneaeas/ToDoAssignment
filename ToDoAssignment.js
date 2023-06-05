// NO TASKS MESSAGE START
const noTasksMessage = document.querySelector(".no-tasks-message"); //Selects the element & assigns it to the variable noTasksMessage.

function toggleNoTasksMessage() {
  //Declares a function named toggleNoTasksMessage.
  noTasksMessage.style.display =
    taskContainer.childElementCount === 0 ? "block" : "none"; //Toggle display of no tasks message.
}
// NO TASKS MESSAGE END

// NEWLISTBUTTON START
const newListButton = document.querySelector(".button.newlist"); //Selects the element & assigns it to the variable newListButton.
const newListForm = document.getElementById("newListForm"); //Selects the element & assigns it to the variable newListForm.

newListButton.addEventListener("click", function () {
  //Adds a click event listener to newListButton.

  newListForm.style.display =
    newListForm.style.display === "none" ? "block" : "none"; //Toggles the display property of newListForm based on current value.
});

// NEWLISTBUTTONCREATE START
newListForm.addEventListener("submit", function (event) {
  //Adds a submit event listener to newListForm.
  event.preventDefault(); //Prevents the default form submission behavior.

  const input = newListForm.querySelector('input[type="text"]'); //Selects the input element within newListForm & assigns it to the variable input.
  const newListName = input.value; //Retrieves the value entered in the input field & assigns it to the variable newListName.

  const newList = document.createElement("li"); //Creates a new list item element and assigns it to the variable newList.
  newList.classList.add("list-name"); //Adds the class "list-name" to the newList element.
  newList.textContent = newListName; //Sets the text content of newList to the value of newListName.

  const listsContainer = document.querySelector(".lists"); //Selects the element with the class "lists" & assigns it to the variable listsContainer.
  listsContainer.appendChild(newList); //Appends the newList element as a child of listsContainer.

  input.value = ""; //Clears the value of the input field.

  newListForm.style.display = "none"; //Hides the newListForm.
});
// NEWLISTBUTTONCREATE END

// NEWTASKBUTTON START
const newTaskButton = document.querySelector(".button.newtask"); //Selects the element & assigns it to the variable newTaskButton.
const newTaskForm = document.getElementById("newTaskForm"); //Selects the element & assigns it to the variable newTaskForm.

newTaskButton.addEventListener("click", function () {
  //Sdds a click event listener to newTaskButton.
  newTaskForm.style.display =
    newTaskForm.style.display === "none" ? "block" : "none"; //Toggles the display based on its current value.
});
// NEWTASKBUTTON END

// CREATE NEW TASK START
const taskContainer = document.querySelector(".taskContainer"); //Selects the element & assigns it to the variable taskContainer.
const taskForm = document.querySelector(".newTaskForm form"); //Selects the form element within the element with the class "newTaskForm" & assigns it to the variable taskForm.

taskForm.addEventListener("submit", function (event) {
  //Adds a submit event listener to taskForm.
  event.preventDefault(); //Prevents the default form submission behavior.

  const taskTitleInput = document.getElementById("enterTaskTitle"); //Selects the input element & assigns it to the variable taskTitleInput.
  const taskDescriptionInput = document.getElementById("enterTaskDescription"); //Selects the input element & assigns it to the variable taskDescriptionInput.

  const taskTitle = taskTitleInput.value; //Retrieves value entered in the task title input field & assigns it to the variable taskTitle.
  const taskDescription = taskDescriptionInput.value; //Retrieves value entered in the task description input field & assigns it to the variable taskDescription.

  const taskElement = document.createElement("div"); //Creates a new element & assigns it to the variable taskElement.
  taskElement.classList.add("task"); // Adds the css class "task" to the taskElement.

  const statusDiv = document.createElement("div"); //Creates a new element & assigns it to the variable statusDiv.
  statusDiv.classList.add("status"); //adds the css class "status" to the statusDiv.

  const checkbox = document.createElement("input"); //Creates a new element and assigns it to the variable checkbox.
  checkbox.type = "checkbox"; //sets the type of the element to "checkbox"
  checkbox.id = "task-" + (taskContainer.childElementCount + 1); //Assigns a unique ID to the checkbox by concatenating the string "task-" with the current count of child elements in taskContainer.
  statusDiv.appendChild(checkbox); //Appends the checkbox as a child of statusDiv.

  const completedDate = document.createElement("span"); //Creates a new element & assigns it to the variable completedDate.
  completedDate.classList.add("completed-date"); //Adds the css class "completed-date" to the completedDate.
  statusDiv.appendChild(completedDate); //Appends the completedDate as a child of statusDiv.

  taskElement.appendChild(statusDiv); //Appends the statusDiv element as a child of taskElement.

  const taskTitleElement = document.createElement("p"); //Creates a new element & assigns it to the variable taskTitleElement.
  taskTitleElement.classList.add("taskTitle"); //Adds the css class "taskTitle" to the taskTitleElement.
  taskTitleElement.textContent = taskTitle; //Sets the text content of taskTitleElement to the value of the taskTitle variable.
  taskElement.appendChild(taskTitleElement); //Appends the taskTitleElement as a child of taskElement.

  const taskDescriptionElement = document.createElement("p"); //Creates a new element & assigns it to the variable taskDescriptionElement.
  taskDescriptionElement.classList.add("description"); //Adds the css class "description" to the taskDescriptionElement.
  taskDescriptionElement.textContent = taskDescription; //Sets the text content of taskDescriptionElement to the value of the taskDescription variable.
  taskElement.appendChild(taskDescriptionElement); //Appends the taskDescriptionElement as a child of taskElement.

  const createdDateElement = document.createElement("time"); //Creates a new  element & assigns it to the variable createdDateElement.
  createdDateElement.classList.add("createdDate"); //Adds the css class "createdDate" to the createdDateElement.
  const currentDate = new Date(); //Retrieves the current date.
  const formattedDate = `${currentDate.getDate()}/${
    //Formats the date as a string.
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  createdDateElement.textContent = formattedDate; //The formatted date is  assigned as the text content of createdDateElement.
  taskElement.appendChild(createdDateElement); //Appends the createdDateElement as a child of taskElement.

  const editButton = document.createElement("button"); //Creates a new element & assigns it to the variable editButton.
  editButton.classList.add("button", "edit"); //Adds the css classes "button" and "edit" to the editButton.
  taskElement.appendChild(editButton); // Appends the editButton as a child of taskElement.

  const deleteButton = document.createElement("button"); //Creates a new element & assigns it to the variable deleteButton.
  deleteButton.classList.add("delete", "button", "task"); //Adds the css classes "button", "delete", and "task" to the deleteButton
  taskElement.appendChild(deleteButton); //Appends the deleteButton as a child of taskElement.

  deleteButton.addEventListener("click", function () {
    taskElement.parentNode.removeChild(taskElement);
    toggleNoTasksMessage();
  });

  taskContainer.insertBefore(taskElement, newTaskForm); //Inserts the taskElement as a new child element before the newTaskForm element within the taskContainer element.

  taskTitleInput.value = ""; //Resets the value of input field using empty string.
  taskDescriptionInput.value = ""; //Resets the value of input field using empty string.
  newTaskForm.style.display = "none"; //Hides the newTaskForm element.

  toggleNoTasksMessage(); //Calls the toggleNoTasksMessage() function.
});
// CREATE NEW TASK START

// CHECKBOX STATUS AND DATE START
document.addEventListener("change", function (event) {
  //Adds a change event listener to the doc. object.
  if (event.target.matches('input[type="checkbox"]')) {
    //Checks if the event target is an input element of type "checkbox".
    const checkbox = event.target; //Assigns the event.target to the variable checkbox.
    const taskElement = checkbox.closest(".task"); //closest() method is called on checkbox with the argument ".task". The result is assigned to the variable taskElement.
    const completedDate = taskElement.querySelector(".completed-date"); //querySelector() method is called on taskElement with the argument ".completed-date". The result is assigned to the variable completedDate.

    if (checkbox.checked) {
      //Checks if the checkbox is checked if true do this:
      completedDate.textContent = new Date().toLocaleDateString(); //TextContent property of completedDate is set to the current date converted to a localized string(date acc to users system).
      completedDate.classList.add("visible"); //The css class "visible" is added to the completedDate element.
    } else {
      //If not true do this:
      completedDate.textContent = ""; //TextContent property of completedDate is set to an empty string, clearing the completed date.
      completedDate.classList.remove("visible"); //The css class "visible" is removed from the completedDate element, hiding the completed date.
    }

    toggleNoTasksMessage(); //Calls the toggleNoTasksMessage() function.
  }
});

// ALL, REMAINING, COMPLETED BUTTONS START
const allButton = document.querySelector(".button.all"); // Selects the element with class "button.all" & assigns it to the variable allButton.
const remainingButton = document.querySelector(".button.remaining"); // Selects the element with class "button.remaining" & assigns it to the variable remainingButton.
const completedButton = document.querySelector(".button.completed"); // Selects the element with class "button.completed" & assigns it to the variable completedButton.

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
