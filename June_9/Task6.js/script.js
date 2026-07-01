let users = [];


async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await response.json();

        displayUsers(users);
    } catch (error) {
        console.log("Error fetching users:", error);
    }
}


function displayUsers(data) {
    let list = document.getElementById("userList");
    list.innerHTML = "";

    if (data.length === 0) {
        list.innerHTML = "<li>No users found</li>";
        return;
    }

    data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
    });
}


function filterUsers() {
    let searchValue = document.getElementById("searchBox").value.toLowerCase();

    let filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchValue)
    );

    displayUsers(filteredUsers);
}


fetchUsers();