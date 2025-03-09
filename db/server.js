import express from "express";
import conn from "./config/db.setup.js";
const app = express();

app.listen(3000, 
    console.log("Server Connected")
)

conn.promise().query("SELECT * FROM users").then(([rows]) => console.log(rows)).catch(console.log)  