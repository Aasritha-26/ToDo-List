const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();
  if (task === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");

  const circle = document.createElement("span");
  circle.className = "circle";
  li.appendChild(circle);

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = task;
  li.appendChild(taskText);

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "\u00d7";
  li.appendChild(deleteBtn);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("circle") || el.classList.contains("task-text")) {
    el.closest("li").classList.toggle("checked");
    saveData();
  } else if (el.tagName === "SPAN" && el.textContent === "×") {
    el.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

function setFooterYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Run on load
showTask();
setFooterYear();
