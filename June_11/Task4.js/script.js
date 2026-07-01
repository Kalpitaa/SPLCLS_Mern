function calculateBonus() {

    let name = document.getElementById("name").value;
    let salary = Number(document.getElementById("salary").value);

    let bonus;

    if (salary > 30000) {
        bonus = 5000;
    }
    else if (salary > 20000) {
        bonus = 3000;
    }
    else {
        bonus = 1000;
    }

    let finalSalary = salary + bonus;

    document.getElementById("result").innerHTML =
        "Employee Name: " + name +
        "<br>Salary: ₹" + salary +
        "<br>Bonus: ₹" + bonus +
        "<br>Final Salary: ₹" + finalSalary;
}