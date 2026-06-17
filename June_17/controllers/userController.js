import users from "../data/users.js";

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;


  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: newUser
  });
}

  export const getUsers = (req, res) => {
  res.status(200).json(users);
  };