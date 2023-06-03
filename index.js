const todoContainer = document.querySelector("#todo-container");
const input = document.querySelector("#add-todo");
const addbutton = document.querySelector("#add-todo-btn");
const editButton = document.querySelector("#edit-todo-btn");
const lastUpdatedContainer = document.querySelector("#last-updated");
const listState = document.querySelector(".list-state");
let lastUpdated = new Date().toLocaleString();

lastUpdatedContainer.innerHTML = lastUpdated;

const listItemComplete = (todo_text = "") => ` <div
id="task"
class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent"
>
<div class="inline-flex items-center space-x-2">
  <div class="check-complete">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-slate-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </div>
  <div class="text-slate-500 line-through">${todo_text}</div>
</div>
<div class="flex justify-between">
  <div class="edit-btn mx-2">
    <svg
      class="w-4 h-4 fill-current text-gray-500 hover:text-blue-700 hover:cursor-pointer"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="remove-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  </div>
</div>
</div>
`;

const listItem = (todo_text = "") => `<div
id="task"
class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150"
>
<div class="inline-flex items-center space-x-2">
  <div class="check-complete">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-green-500 hover:text-indigo-600 hover:cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
  <div>${todo_text}</div>
</div>
<div class="flex justify-between">
  <div class="edit-btn mx-2">
    <svg
      class="w-4 h-4 fill-current text-gray-500 hover:text-blue-700 hover:cursor-pointer"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="remove-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  </div>
</div>
</div>
`;

const todos = [];
const key = "todos";

let idOfElementToEdit = null;
const updateLocalStorage = (todos) => {
  localStorage.setItem(key, JSON.stringify(todos));
};
const showEdit = (id) => {
  const element = todos.find((todo) => todo.id === id);
  input.value = element.text;
  addbutton.classList.toggle("hidden");
  editButton.classList.toggle("hidden");
  idOfElementToEdit = id;
};
const addRemoveEventListener = (todoElement, ele) => {
  const removeBtn = todoElement.querySelector(".remove-icon");
  removeBtn.addEventListener("click", () => {
    todoElement.remove();
    const index = todos.findIndex((todo) => todo.id === ele);
    todos.splice(index, 1);
    listState.innerHTML =
      todos.length >= 1 ? ` here are your latest` : `Empty List`;
    updateLocalStorage(todos);
  });
};

const addCompleteEventListener = (todoElement, ele) => {
  const checkElement = todoElement.querySelector(".check-complete");
  checkElement.addEventListener("click", () => {
    const updateElement = todos.find((todo) => todo.id === ele);
    updateElement.completed = !updateElement.completed;
    renderList();
    updateLocalStorage(todos);
  });
};

const addEditEventListener = (todoElement, ele) => {
  const editBtn = todoElement.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    editButton.innerHTML = "Edit";
    showEdit(ele.id);
    input.addEventListener("input", () => {
      editButton.innerHTML = "Save";
    });
  });
};
const renderList = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.id = `${todo.id}`;
    if (todo.completed) {
      todoElement.innerHTML = listItemComplete(todo.text);
    } else {
      todoElement.innerHTML = listItem(todo.text);
    }
    todoContainer.appendChild(todoElement);
    addRemoveEventListener(todoElement, todo.id);
    addCompleteEventListener(todoElement, todo.id);
    addEditEventListener(todoElement, todo);
  });
  listState.innerHTML =
    todos.length >= 1 ? `your list` : `Empty List`;
};

const handleAdd = (e) => {
  const itemToAdd = input.value;
  if (itemToAdd !== null && itemToAdd !== "") {
    todos.push({
      text: itemToAdd,
      completed: false,
      id: Date.now()
    });
    updateLocalStorage(todos);
    input.value = "";
    renderList();
    return;
  } else {
    return window.alert("please add a element");
  }
};
const handleEdit = (e) => {
  const newValue = input.value;
  const element = todos.find((todo) => todo.id === idOfElementToEdit);
  element.text = newValue;
  renderList();
  addbutton.classList.toggle("hidden");
  editButton.classList.toggle("hidden");
  updateLocalStorage(todos);
};
const initilize = () => {
  const savedTodos = localStorage.getItem(key);
  const myTodos = JSON.parse(savedTodos);
  if (myTodos) {
    myTodos.forEach((item) => todos.push(item));
    renderList();
  }
};
addbutton.addEventListener("click", handleAdd);
editButton.addEventListener("click", handleEdit);
initilize();
