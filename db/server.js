import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { userRouter } from "./routes/user.routes.js"; 

import addadminRouter from "./routes/addadmin.route.js";
import courseRouter from "./routes/courses.route.js";
import enrolleeRouter from "./routes/enrollee.route.js";
import getenrolleesRouter from "./routes/getenrollees.route.js";
import getadminRouter from "./routes/getadmin.route.js";
import salesRouter from "./routes/sales.route.js";

const app = express();
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 100,
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use("/api/admin", addadminRouter);
app.use("/api/courses", courseRouter);
app.use("/api/enrollees", enrolleeRouter);
app.use("/api/getenrollees", getenrolleesRouter);
app.use("/api/getadmin", getadminRouter);
app.use("/api/loginadmin", userRouter); 
app.use("/api/sales", salesRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
