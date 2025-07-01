import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controller/User.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/getuser", getUser);
router.get("/all", getAllUsers);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

export default router;
