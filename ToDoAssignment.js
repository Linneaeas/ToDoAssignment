//NEWLISTBUTTON START
// Select the button element
const newListButton = document.querySelector(".button.newlist");
// Select the hidden content element
const newListForm = document.getElementById("newListForm");

// Add a click event listener to the button
newListButton.addEventListener("click", function () {
  // Toggle the visibility of the hidden content
  if (newListForm.style.display === "none") {
    newListForm.style.display = "block";
  } else {
    newListForm.style.display = "none";
  }
});
//NEWLISTBUTTON END

//CHECKBOX STATUS AND DATE START
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    const completedLabel =
      checkbox.nextElementSibling.querySelector(".completed-label");
    const completedDate =
      checkbox.nextElementSibling.querySelector(".completed-date");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        completedLabel.classList.add("visible");
        completedDate.textContent = new Date().toLocaleDateString(); // Update with the current date
        completedDate.classList.add("visible");
      } else {
        completedLabel.classList.remove("visible");
        completedDate.textContent = "";
        completedDate.classList.remove("visible");
      }
    });
  });
});

//CHECKBOX STATUS AND DATE END
