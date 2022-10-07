//FRONTEND ASSIGNMENT
//Assignment on JS Todo list
var myTodoList = document.getElementsByTagName("li");

// To add button and checkbox to the li on the page
// let listBotton = ""
for (var _i = 0, myTodoList_1 = myTodoList; _i < myTodoList_1.length; _i++) {
    var listBotton = myTodoList_1[_i];
    var button = document.createElement("button");
    var checkBox = document.createElement("input");
    //<input class="checked" type="checkbox"/>
    checkBox.type = 'checkbox';
    checkBox.className = "check";
    var text = document.createTextNode("x");
    button.className = "delete";
    button.appendChild(text);
    listBotton.appendChild(checkBox);
    listBotton.appendChild(button);
}
var closedd = document.getElementsByClassName("delete"); // Gave the delete button to a variable for easier used. Closed is the variable name for the delete button 
for (i = 0; i < closedd.length; i++) {
    // console.log(closed[i])
    closedd[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }; //Once delete is pressed the item is removed from the page. For all delete or closed variable
}
// To add new todos from the input field on top
var addTodos = document.getElementById("addbtn");
addTodos.addEventListener("click", newElement);
var list = document.getElementById("myUl"); // Our ul that houses our todos
function newElement() {
    var li = document.createElement("li"); // create a li to be in the ul above
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue); // The text added to the input field is given "t"
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write something");
    }
    else {
        list.appendChild(li); // if "li" hold something it is added to the ul on the page
    }
    document.getElementById("myInput").value = "";
    //To add buttons and checkbox to the items as they are being added to the field same asthe one done earlier
    var button = document.createElement("button");
    var text = document.createTextNode("x");
    var checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    checkBox.className = "check";
    button.className = "delete";
    button.appendChild(text);
    li.appendChild(button);
    li.appendChild(checkBox);
    for (i = 0; i < closedd.length; i++) { //looks for the varible of Closed which is a delete button with a class "delete"
        // console.log(closed[i])
        closedd[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
// let list = document.getElementById("myUl"). Commented it here for me to know where I wanted to add my API Todos
// To add API todos
var apiTodos = document.getElementById("apiTodos");
apiTodos.addEventListener("click", addApiTodos);
function addApiTodos() {
    console.log("clicked");
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var apiOutPut = "";
        data.forEach(function (users) {
            apiOutPut += "<li id= \"".concat(users.id, "\">\n                                        ").concat(users.title, "\n                                        <input type=\"checkbox\" name=\"\" class=\"check\">\n                                        <button class=\"delete\">x</button>\n                                </li>");
        }); //Also added a button and checkbox with thesame name and attribute has the ones created before
        list.innerHTML += apiOutPut;
        for (i = 0; i < closedd.length; i++) {
            closedd[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            };
        }
    });
}
