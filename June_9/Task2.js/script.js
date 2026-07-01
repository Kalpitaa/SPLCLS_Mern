function calculateTotal() {

    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    let message = "";

    if (total > 5000) {
        message = "Discount Eligible 🎉";
    }

    document.getElementById("result").innerHTML =
        "Product: " + name +
        "<br>Total Amount: ₹" + total +
        "<br>" + message;
}