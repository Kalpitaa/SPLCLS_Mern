const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
];


document.getElementById("allOrders").innerHTML =
    orders.map(order =>
        `<li>
            ID: ${order.id},
            Customer: ${order.customer},
            Amount: Rs. ${order.amount},
            Status: ${order.status}
        </li>`
    ).join("");


const completedOrders = orders.filter(order => order.status === "Completed");

document.getElementById("completedOrders").innerHTML =
    completedOrders.map(order =>
        `<li>
            ID: ${order.id},
            Customer: ${order.customer},
            Amount: Rs. ${order.amount}
        </li>`
    ).join("");


const order = orders.find(order => order.id === 3);

document.getElementById("findOrder").innerHTML =
    `ID: ${order.id}<br>
     Customer: ${order.customer}<br>
     Amount: Rs. ${order.amount}<br>
     Status: ${order.status}`;


const totalRevenue = orders.reduce((total, order) => {
    return total + order.amount;
}, 0);

document.getElementById("totalRevenue").innerHTML =
    `Rs. ${totalRevenue}`;