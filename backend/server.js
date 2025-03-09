const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NexusCloudDB",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// ✅ GET Route: Fetch Courses with Prices
app.get("/api/courses", (req, res) => {
  const sql = `SELECT course_name, DATE_FORMAT(date, '%Y-%m-%d') AS date, 
                      COALESCE(original_price, '') AS original_price, 
                      COALESCE(discounted_price, '') AS discounted_price 
               FROM courses`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching courses:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // ✅ Ensure all data is formatted correctly
    const formattedResult = result.reduce((acc, curr) => {
      let existingCourse = acc.find((c) => c.course_name === curr.course_name);
      if (existingCourse) {
        existingCourse.dates.push(curr.date);
      } else {
        acc.push({
          course_name: curr.course_name,
          dates: [curr.date],
          original_price: curr.original_price || "N/A", // ✅ Ensure it's always a string
          discounted_price: curr.discounted_price || "N/A", // ✅ Ensure it's always a string
        });
      }
      return acc;
    }, []);

    res.json(formattedResult);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
