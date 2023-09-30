"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

// Update LocalStorage Function
const updateLS = function () {
  const allTodos = document.querySelectorAll("li");
  const todosArr = [];
  allTodos.forEach((todoEl) => {
    todosArr.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todosArr));
};

// Add todo function
const addToDo = function (todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
};

// Loads the todos from the local storage and puts them into the DOM
if (todos) {
  todos.forEach((todo) => {
    addToDo(todo);
  });
}

// Form Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addToDo();
});
