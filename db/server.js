import express from "express";
import conn from "./config/db.setup.js";
import cors from "cors"
import helmet from "helmet"
import {rateLimit} from "express-rate-limit"

import { userRouter } from "./routes/user.routes.js";
import courseRouter from "./routes/courses.route.js";
import enrolleeRouter from "./routes/enrollee.route.js";



const app = express();
const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30
    max: 100 // 100 limit per window 
})

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(limiter)

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })
app.use("/api/users", userRouter)
app.use("/api/courses",  courseRouter)
app.use("/api/enrollee", enrolleeRouter)

app.listen(4000, 
    console.log("Server Connected at port 4000")
)

// conn.promise().query("SELECT * FROM users").then(([rows]) => console.log(rows)).catch(console.log)  