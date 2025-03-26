import express from "express";
import conn from '../config/db.setup.js';

const router = express.Router();

export default (db) => {
  router.get("/", (req, res) => {
    const limit = 12;
    const offset = parseInt(req.query.offset) || 0;

    const query = `SELECT * FROM enrollees ORDER BY id ASC`;

    db.query(query, [limit, offset], (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ error: "Failed to fetch data" });
      }

      res.status(200).json(results);
    });
  });

  return router;
};
