// Select DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Function to add a new todo item
form.addEventListener('submit', function(event) {
    event.preventDefault; // Prevent the default form submission behavior

    const taskText= input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }           
});

//Function to add task

function addTask(text){
const li=document.createElement("li");
li.textContent=text;

//Toogle when class clicked.
li.addEventListener('click',()=>{
    li.classList.toggle('done');
});

}
