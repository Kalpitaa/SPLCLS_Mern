import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeForm() {
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/departments"
      );

      setDepartments(response.data.departments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Employee Form
        </h1>

        <select
          className="w-full border p-3 rounded-md"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="">
            Select Department
          </option>

          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <div className="mt-6 space-y-4">

          {selectedDept === "Developer" && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="number"
                placeholder="Salary"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="text"
                placeholder="Experience"
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

          {selectedDept === "HR" && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="number"
                placeholder="Employees Managed"
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

          {selectedDept === "Tester" && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="text"
                placeholder="Testing Tool"
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

          {selectedDept === "Manager" && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="number"
                placeholder="Team Size"
                className="w-full border p-3 rounded-md"
              />
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;