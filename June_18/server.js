import express from "express";

import processRoutes from "./routes/processRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/process", processRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});