const students = [
  { id: 1, name: "Arun", mark: 85 },
  { id: 2, name: "Karthik", mark: 45 },
  { id: 3, name: "Vijay", mark: 92 },
  { id: 4, name: "Ajay", mark: 35 }
];

document.getElementById("allStudents").innerHTML =
  students.map(student =>
    `<li>${student.name} - ${student.mark}</li>`
  ).join("");

const passedStudents = students.filter(student => student.mark >= 50);

document.getElementById("passedStudents").innerHTML =
  passedStudents.map(student =>
    `<li>${student.name} - ${student.mark}</li>`
  ).join("");

const student = students.find(s => s.id === 3);

document.getElementById("foundStudent").innerHTML =
  `${student.name} - ${student.mark}`;  


const totalMarks = students.reduce((sum, student) => {
  return sum + student.mark;
}, 0);

document.getElementById("totalMarks").innerText =
  totalMarks;  

const averageMarks =
  students.reduce((sum, student) => sum + student.mark, 0)
  / students.length;

document.getElementById("averageMarks").innerText =
  averageMarks;  