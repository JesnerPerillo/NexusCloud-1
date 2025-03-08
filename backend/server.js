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
  database: "courses_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

app.get("/api/courses", (req, res) => {
  db.query("SELECT course_name, DATE_FORMAT(date, '%Y-%m-%d') AS date FROM course_dates", (err, result) => {
    if (err) throw err;

    const formattedResult = result.reduce((acc, curr) => {
      const existingCourse = acc.find(c => c.course_name === curr.course_name);
      if (existingCourse) {
        existingCourse.dates.push(curr.date);
      } else {
        acc.push({ course_name: curr.course_name, dates: [curr.date] });
      }
      return acc;
    }, []);

    res.json(formattedResult);
  });
});

app.post("/api/courses", (req, res) => {
  const { courses, date } = req.body;
  const sql = "UPDATE course_dates SET date = ? WHERE course_name = ?";
  db.query(sql, [date, courses], (err, result) => {
    if (err) throw err;
    res.json({ message: "Date updated successfully" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
