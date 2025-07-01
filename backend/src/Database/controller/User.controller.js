import jwt from "jsonwebtoken";
import User from "../model/User.model.js";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(201).json({ message: "User registered", user: newUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", token, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch user", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Fetch failed", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, ...updateData } = req.body;
    const updated = await User.findOneAndUpdate({ email }, updateData, { new: true }).select("-password");

    if (!updated) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User updated", user: updated });
  } catch (error) {
    return res.status(500).json({ message: "Update failed", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const deleted = await User.findOneAndDelete({ email });
    if (!deleted) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Delete failed", error: error.message });
  }
};

export {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
