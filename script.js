

function addTodo() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.className = "createdItem";
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);

    //Clearing the input button when submitted...
    var input = document.getElementById("todoInput");
    input.value = '';
    
    //If the form is empty, don't submit...
    if(input.value == '') {
        //?Reject the submissions...
    }
};


function removeFromList() {

    
};

//Clearing the entire list of entries...
document.getElementById("clearButton").addEventListener("click", function(){
    var listItems = document.getElementById("todoList");

    listItems.innerHTML = '';
});