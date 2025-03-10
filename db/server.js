import express from "express";
import conn from "./config/db.setup.js";

import { userRouter } from "./routes/user.routes.js";
import courseRouter from "./routes/courses.route.js";

const app = express();

app.use(express.json())
app.use("/users", userRouter)
app.use("/courses", courseRouter)


app.listen(3000, 
    console.log("Server Connected at port 3000")
)

// conn.promise().query("SELECT * FROM users").then(([rows]) => console.log(rows)).catch(console.log)  