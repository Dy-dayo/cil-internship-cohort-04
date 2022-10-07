//FRONTEND ASSIGNMENT
//Assignment on JS Todo list
// 077

let myTodoList = document.getElementsByTagName("li")



// To add button and checkbox to the li on the page


for (let listBotton of myTodoList) { 
    let button = document.createElement("button")
    let checkBox = document.createElement("input")
    //<input class="checked" type="checkbox"/>
    checkBox.type = 'checkbox'
    checkBox.className= "check"
    
    let text = document.createTextNode("x")

    button.className = "delete"
    button.appendChild(text)

    listBotton.appendChild(checkBox)
    listBotton.appendChild(button)
}

let closed = document.getElementsByClassName("delete") // Gave the delete button to a variable for easier used. Closed is the variable name for the delete button 

for (i = 0; i < closed.length; i++) {
    // console.log(closed[i])
    closed[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    } //Once delete is pressed the item is removed from the page. For all delete or closed variable

}


// To add new todos from the input field on top

let addTodos= document.getElementById("addbtn")                 

addTodos.addEventListener("click",newElement) 


let list = document.getElementById("myUl")                  // Our ul that houses our todos

function newElement() {
    const li = document.createElement("li");                // create a li to be in the ul above
    
    const inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);        // The text added to the input field is given "t"
    li.appendChild(t)                                 
    if (inputValue === '') {
        alert("Write something")
    } else {
        list.appendChild(li)                        // if "li" hold something it is added to the ul on the page
    }
    document.getElementById("myInput").value = ""; 

    //To add buttons and checkbox to the items as they are being added to the field same asthe one done earlier
    let button = document.createElement("button") 
    let text = document.createTextNode("x")
    let checkBox = document.createElement("input")

    checkBox.type = 'checkbox'
    checkBox.className= "check"

    button.className = "delete"
    button.appendChild(text)
    li.appendChild(button)
    li.appendChild(checkBox)


    for (i = 0; i < closed.length; i++) {           //looks for the varible of Closed which is a delete button with a class "delete"
        // console.log(closed[i])
        closed[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none"; 
        }

    }
}


// let list = document.getElementById("myUl"). Commented it here for me to know where I wanted to add my API Todos

// To add API todos

let apiTodos = document.getElementById("apiTodos") 

apiTodos.addEventListener("click", addApiTodos)


function addApiTodos() {
    console.log("clicked")
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then(data => {
            let apiOutPut =""
                data.forEach((users) => {
                    apiOutPut +=`<li id= "${users.id}">
                                        ${users.title}
                                        <input type="checkbox" name="" class="check">
                                        <button class="delete">x</button>
                                </li>`
                })//Also added a button and checkbox with thesame name and attribute has the ones created before

            list.innerHTML+= apiOutPut 

            for (i = 0; i < closed.length; i++) {
                
                closed[i].onclick = function () {
                    let div = this.parentElement;
                    div.style.display = "none";
                }
            } 
        })

        
}




