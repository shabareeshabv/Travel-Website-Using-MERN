// backend/src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 👇 Update import paths based on actual structure
import UserRouter from "./Database/route/User.route.js";
import ContactFormRoute from "./Database/route/ContactForm.route.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", UserRouter);
app.use("/api/contactform", ContactFormRoute);

export default app;
