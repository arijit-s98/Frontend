console.log("Welcome to my todo app")

let todos = [];

let todoDataList = document.getElementById('todo-data-list');
let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-input-bar');


todoInputBar.addEventListener("keyup", function toggleSavebutton() {
    let todotext = todoInputBar.value;
    if(todotext.length == 0) {
        if(saveButton.classList.contains('disabled')) return;
        saveButton.classList.add('disabled');
    }
    else if(saveButton.classList.contains('disabled')) {
        saveButton.classList.remove('disabled');
    }
})

saveButton.addEventListener("click", function getTextAndAddTodo(){
    let todotext = todoInputBar.value;
    if(todotext.length == 0) return;
    let todo = {text: todotext, status: 'In Progress', finishButtonText:"Finished"};
    todos.push(todo);
    addTodo(todo,todos.length);
    todoInputBar.value = '';
});

function reRenderTodos () {
    todoDataList.innerHTML = '';
    todos.forEach((element, idx) => {
        addTodo(element, idx+1);
    })
}


function removeTodo(event) {
    // console.log('clicked',event.target.parentElement.parentElement.parentElement);
    // event.target.parentElement.parentElement.parentElement.remove();
    let deleteButtonPressed = event.target;
    let indexToBeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexToBeRemoved,1);
    reRenderTodos();
}

function finishTodo(event){
    let finishButtonPressed = event.target;
    let indexToBeFinished = Number(finishButtonPressed.getAttribute("todo-idx"));

    // toggle 
    if(todos[indexToBeFinished].status == "Finished"){
          todos[indexToBeFinished].status = "In Progress";
          todos[indexToBeFinished].finishButtonText = "Finished";
    }
    else{
        todos[indexToBeFinished].status = "Finished";
        todos[indexToBeFinished].finishButtonText = "Undo"; 
    }

    todos.sort((a,b) => {
        if(a.status == "Finished"){
            return 1;
        }
        return -1;
    })
    
    reRenderTodos();
}

function addTodo(todo,todoCount) {
    let rowdiv = document.createElement("div");
    let todoItems = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    // adding classes

    rowdiv.classList.add("row");
    todoItems.classList.add("todo-items", "d-flex", "flex-row", "justify-content-between", "align-items-center");    
    todoNumber.classList.add("todo-no");
    todoItem.classList.add("todo-item", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-actions", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn","btn-success", "finished-todo"); 

    finishedButton.setAttribute("todo-idx",todoCount-1);
    deleteButton.setAttribute("todo-idx", todoCount-1);
    deleteButton.onclick = removeTodo;
    finishedButton.onclick = finishTodo;

    todoNumber.textContent = `${todoCount}.`;
    todoItem.textContent = todo.text; // sets the todo text sent from the input element
    todoStatus.textContent = todo.status;
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todo.finishButtonText;

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItems.appendChild(todoNumber);
    todoItems.appendChild(todoItem);
    todoItems.appendChild(todoStatus);
    todoItems.appendChild(todoActions);

    rowdiv.appendChild(todoItems);
    rowdiv.appendChild(hr);

    todoDataList.appendChild(rowdiv);

}





























// let getTodosButton = document.getElementById('get-todos');

// registration of event listener

// getTodosButton.addEventListener("click", () => {
//     console.log("clicked");
// });

// different ways to add events

// getTodosButton.onclick = () => {
//     console.log('clicked');
// }

