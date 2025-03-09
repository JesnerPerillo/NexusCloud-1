import express from "express";
import conn from "../config/db.setup.js";
const courseRouter = express.Router();

courseRouter.get('/', (req, res) => {
    res.send('Courses')
})