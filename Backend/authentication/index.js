import express from "express";
const app = express();
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDb from "./db/connectDb.js";
dotenv.config();

import userRoutes from "./routes/user.route.js";

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDb();
app.get("/", (req, res) => {
  res.send("Authentication Service is running");
});

app.use("/api/", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on on http://localhost:${PORT}`);
});
