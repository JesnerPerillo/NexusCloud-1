import express from "express";
import conn from "../config/db.setup.js";

const router = express.Router();

router.get("/", (req, res) => {
    const limit = 12;
    const offset = parseInt(req.query.offset) || 0;

    const sql = "SELECT * FROM enrollees ORDER BY id ASC LIMIT ? OFFSET ?";

    conn.query(sql, [limit, offset], (err, result) => {
        if (err) {
            console.error("Error fetching enrollees:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        res.status(200).json(result);
    });
});

export default router;