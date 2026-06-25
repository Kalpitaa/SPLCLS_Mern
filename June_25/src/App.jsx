import { useState } from "react";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Register
      users={users}
      setUsers={setUsers}
      goToLogin={() => alert("Navigate to Login Page")}
    />
  );
}

export default App;