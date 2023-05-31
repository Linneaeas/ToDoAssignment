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

//CHECKBOX STATUS AND DATE START
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  const completionDates = [];

  checkboxes.forEach(function (checkbox, index) {
    const completedLabel =
      checkbox.nextElementSibling.querySelector(".completed-label");
    const completedDate =
      checkbox.nextElementSibling.querySelector(".completed-date");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        completionDates[index] = new Date().toLocaleDateString();
        completedLabel.classList.add("visible");
        completedDate.textContent = completionDates[index];
        completedDate.classList.add("visible");
      } else {
        completionDates[index] = null;
        completedLabel.classList.remove("visible");
        completedDate.textContent = "";
        completedDate.classList.remove("visible");
      }
    });
  });
});

//CHECKBOX STATUS AND DATE END
