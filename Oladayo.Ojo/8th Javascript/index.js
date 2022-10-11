
const loading = document.querySelector(".loader")
let userContainer = document.getElementById("userContainer")
let theHtml = ""

async function getUsers() {
    let Url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let response = await fetch(Url);
        return await response.json();
    }
    catch (error) {
        console.log(error)
    }
}

async function renderUsers() {
    loading.style.display = 'block'
    let users = await getUsers()
    // console.log(users)
    users.forEach(user => {
        let HtmlSegment = `<div class ="section">
                                <h2>Hi, My information is displayed below</h2>
                                <ul>
                                    <li>My name is ${user.name}</li>
                                    <li>You can call me ${user.username}</li>
                                    <li>Here is my Phone No: ${user.phone}</li>
                                    <li>I live at ${user.address.city}, ${user.address.street}, ${user.address.suite}</li>
                                    <li class = "link"> My email is <a  href ="${user.email}">${user.email}</a></li>
                                    <li>You can also visit my webpage at: <a href = "${user.website}"> ${user.website}</a></li>
                                
                                 </ul>
                            </div>`
        theHtml += HtmlSegment
    });
    userContainer.innerHTML = theHtml
    loading.style.display = "none"

}

renderUsers()



