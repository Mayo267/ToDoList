

function addTodo() {
    event.preventDefault();

    var item = document.getElementById("todoInput").value;
    // var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.className = "createdItem";
    // newItem.appendChild(text);
    // document.getElementById("todoList").appendChild(newItem);
    $("#todoList").append("<div class = 'newestItem' >" + "❧" + " " +  item + "<hr>" +"</div>");
    //Clearing the input button when submitted...
    $("#todoInput").val('');

    
    //TODO==================================================
    //!If the form is empty, don't submit...
    // if(input.value == '') {
    //     //?Reject the submissions...
    // }
    //TODO==================================================
    
};



$("#todoInput").keypress( function(event) {
    if(event.which == 13 ) {
        addTodo();
        return false;
    }
})

//Cross out finished tasks...
function finished() {
    
};

//Remove a single task from the list...
function removeFromList() {

};

//Clearing the entire list of entries...
document.getElementById("clearButton").addEventListener("click", function(){
    var listItems = document.getElementById("todoList");
    listItems.innerHTML = '';
});

