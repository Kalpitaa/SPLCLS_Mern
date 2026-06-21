export const registerUser = (req, res) => {
  const { name } = req.body;

  if (name === "Ravi") {
    return res.status(200).json({
      success: true,
      message: "Registration Successful"
    });
  }

  return res.status(400).json({
    success: false,
    message: "Invalid User"
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "12345") {
    return res.status(200).json({
      success: true,
      message: "Login Successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials"
  });
};