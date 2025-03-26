import express from 'express';
import cors from 'cors';
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import conn from './config/db.setup.js'; // Ensure this file exports a valid MySQL connection

import { userRouter } from "./routes/user.routes.js";
import courseRouter from "./routes/courses.route.js";
import enrolleeRouter from "./routes/enrollee.route.js";
import getenrolleesRouter from "./routes/getenrollees.route.js";
import getadminRouter from "./routes/getadmin.route.js";


const app = express();
const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 100 // Limit each IP to 100 requests per window
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

// Attach database connection to requests
app.use((req, res, next) => {
    req.db = conn;
    next();
});

// ✅ Attach Routes
app.use("/api/admin", userRouter);
app.use("/api/courses", courseRouter);
app.use("/api/enrollees", enrolleeRouter);
app.use('/api/getenrollees', getenrolleesRouter);
app.use("/api/getadmin", getadminRouter);
app.listen(5000, () => console.log("Server Connected at port 5000"));
