const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getCourses } = require("./fetchdata"); // ✅ Import database functions
const mysql = require("mysql");

// ✅ Create database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NexusCloudDB",
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});


const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ GET Route: Fetch Courses
app.get("/api/courses", (req, res) => {
  getCourses((err, courses) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(courses);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
