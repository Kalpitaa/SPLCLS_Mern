const cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }
];


const totalAmount = cart.reduce((sum, item) => {
    return sum + item.price;
}, 0);


document.getElementById("result").innerText =
    "Total Cart Value: ₹" + totalAmount;