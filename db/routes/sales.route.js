import express from "express";
import conn from "../config/db.setup.js";

const router = express.Router();

// Get Total and Monthly Sales
router.get("/", (req, res) => {
  const query = `
    SELECT 
      (SELECT SUM(total_sales) FROM sales) AS totalSales,
      (SELECT SUM(monthly_sales) FROM sales) AS monthlySales
  `;

  conn.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching sales data:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results[0]); // Send data as JSON
  });
});

export default router;
