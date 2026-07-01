function calculateGrade() {

    let name = document.getElementById("name").value;
    let mark = Number(document.getElementById("mark").value);

    let grade = "";

    if (mark >= 90) {
        grade = "A";
    }
    else if (mark >= 75) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Student Name: " + name +
        "<br>Mark: " + mark +
        "<br>Grade: " + grade;
}