import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});