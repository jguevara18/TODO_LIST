const dateNumber = document.querySelector("#dateNumber");
const dateText = document.querySelector("#dateText");
const  dateMonth = document.querySelector("#dateMonth");
const dateYear = document.querySelector("#dateYear");
const tasksContainer = document.querySelector("#tasksContainer");



const setDate = ()=> {
    const date = new Date();
    dateNumber.innerText = date.toLocaleString('es', {day:'numeric'});
    dateText.innerText = date.toLocaleString('es', {weekday:'long'});
    dateMonth.innerText = date.toLocaleString('es', {month:'short'});
    dateYear.innerText = date.toLocaleString('es', {year:'numeric'});
    
};


const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.innerText = value;
    tasksContainer.prepend(task);
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
};


const order = () =>{
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el =>{
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    }) 
    return [...toDo, ...done];

}

const renderOrderedTasks = () =>{
    order().forEach(el=> tasksContainer.appendChild(el))
}

setDate();