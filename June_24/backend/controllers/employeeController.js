export const getDepartments = (req, res) => {
  res.status(200).json({
    departments: [
      "HR",
      "Developer",
      "Tester",
      "Manager"
    ]
  });
};