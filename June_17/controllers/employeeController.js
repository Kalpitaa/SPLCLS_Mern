import employees from "../data/employees.js";

export const getEmployees = (req, res) => {
  res.status(200).json(employees);
};