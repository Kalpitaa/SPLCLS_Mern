const students = [
  { name: "Arun", marks: [85, 78, 92] },
  { name: "Divya", marks: [65, 70, 68] },
  { name: "Karthik", marks: [95, 88, 91] },
  { name: "Meena", marks: [40, 35, 45] }
];


function calculateTotal(marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log("Student Results:");

students.forEach(student => {
  const total = calculateTotal(student.marks);
  const average = total / student.marks.length;

  
  const isPass = student.marks.every(mark => mark >= 35);

  console.log(`Name: ${student.name}`);
  console.log(`Marks: ${student.marks.join(", ")}`);
  console.log(`Total: ${total}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Status: ${isPass ? "Pass" : "Fail"}`);
  console.log("------------------------");
});


let topper = students[0];
let highestTotal = calculateTotal(topper.marks);

students.forEach(student => {
  const total = calculateTotal(student.marks);

  if (total > highestTotal) {
    highestTotal = total;
    topper = student;
  }
});

console.log(`Topper: ${topper.name}`);
console.log(`Highest Total Marks: ${highestTotal}`);