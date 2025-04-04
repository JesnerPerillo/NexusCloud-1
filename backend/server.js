import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getCourses } from "./fetchdata.js";
import mysql from "mysql2";

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

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Import Routes
const enrollmentRoutes = require("./enrollment")(db);
app.use("/api", enrollmentRoutes); 

const getEnrolleesRoutes = require('./getenrollees')(db);
app.use('/api/enrollees', getEnrolleesRoutes);

const loginRoute = require('./login')(db);
app.use('/api', loginRoute);

// ✅ Courses API
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
