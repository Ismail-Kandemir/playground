


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// LocalStorage'dan görevleri al
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Sayfa açıldığında görevleri göster
tasks.forEach(task => addTaskToDOM(task));

// Butona tıklayınca görev ekle
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Boş görev eklenemez!");
    return;
  }

  // Görevi listeye ve LocalStorage'a ekle
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  addTaskToDOM(taskText);

  taskInput.value = "";
});

// Görevi ekrana yazdıran fonksiyon
function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Silme butonu
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Sil";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTaskFromStorage(taskText);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// LocalStorage’dan silme
function removeTaskFromStorage(taskText) {
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}