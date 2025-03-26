import express from "express";
import conn from "../config/db.setup.js";

const router = express.Router();

// Get only name and email of admins
router.get("/", (req, res) => {
  const sql = "SELECT username, email FROM admin";
  
  conn.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching admins:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(result);
  });
});

export default router;
