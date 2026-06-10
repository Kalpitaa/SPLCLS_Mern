import { useState } from "react";

function Task1() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      department,
      salary,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold mb-4">
          Employee Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Employee
          </button>
        </form>

        <h2 className="text-xl font-semibold mt-6">
          Total Employees: {employees.length}
        </h2>

        <div className="mt-4">
          {employees.map((emp, index) => (
            <div
              key={index}
              className="border p-3 rounded mb-2 bg-gray-50"
            >
              <p><strong>Name:</strong> {emp.name}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <p><strong>Salary:</strong> ₹{emp.salary}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Task1;