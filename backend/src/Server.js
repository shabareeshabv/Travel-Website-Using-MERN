// backend/src/server.js
import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./Database/DB.connect/DB.connect.js";

dotenv.config();

const PORT = process.env.PORT || 6001;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

connectDB();
