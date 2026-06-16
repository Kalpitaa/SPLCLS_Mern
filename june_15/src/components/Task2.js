const employees = [
  {
    name: "Vimal",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present"
  },
  {
    name: "Divya",
    checkIn: "-",
    checkOut: "-",
    status: "Absent"
  },
  {
    name: "Karthik",
    checkIn: "09:15 AM",
    checkOut: "06:10 PM",
    status: "Present"
  },
  {
    name: "Meena",
    checkIn: "-",
    checkOut: "-",
    status: "Absent"
  }
];


console.log("Employee Attendance Details");

employees.forEach(employee => {
  console.log("----------------------------");
  console.log("Name:", employee.name);
  console.log("Check In:", employee.checkIn);
  console.log("Check Out:", employee.checkOut);
  console.log("Status:", employee.status);
});


const presentEmployees = employees.filter(
  employee => employee.status === "Present"
);

console.log("\nPresent Employees:");
presentEmployees.forEach(employee => {
  console.log(employee.name);
});


const absentEmployees = employees.filter(
  employee => employee.status === "Absent"
);

console.log("\nAbsent Employees:");
absentEmployees.forEach(employee => {
  console.log(employee.name);
});


console.log("\nTotal Present Count:", presentEmployees.length);


const searchName = "Karthik";

const foundEmployee = employees.find(
  employee => employee.name === searchName
);

if (foundEmployee) {
  console.log("\nEmployee Found:");
  console.log(foundEmployee);
} else {
  console.log("\nEmployee not found");
}