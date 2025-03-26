import express from "express";
import bcrypt from "bcrypt";
import conn from "../config/db.setup.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 11);

    const sql = "INSERT INTO admin (username, email, password) VALUES (?, ?, ?)";
    conn.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting admin:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(201).json({ id: result.insertId, username, email });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
