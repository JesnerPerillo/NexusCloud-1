import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const limit = 12;
    const offset = parseInt(req.query.offset) || 0;

    const query = `SELECT * FROM enrollees ORDER BY id ASC LIMIT ? OFFSET ?`;

    req.db.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Failed to fetch data" });
        }

        console.log("Fetched Data:", results); // Debugging
        res.status(200).json(results);
    });
});

export default router;
