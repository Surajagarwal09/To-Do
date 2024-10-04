let listitems =document.getElementById('listsitems')
const list = document.getElementById('lists');
const input = document.getElementById('input');
const addbutt = document.getElementById('add');

function addTask() {
    if (input.value === '') {
        alert('Add Your Task')
    }
    else {
        let todo = document.createElement('li')
        todo.textContent = input.value
        listitems.appendChild(todo)
    }
    input.value = ''
    saveddata()
}

function saveddata() {
    localStorage.setItem("to-do's",listitems.innerHTML)
}
function loadTasks() {
    listitems.innerHTML = localStorage.getItem("to-do's") || '';
}
window.onload = loadTasks;