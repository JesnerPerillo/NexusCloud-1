import express from 'express';
import { check, validationResult } from 'express-validator';
import conn from '../config/db.setup.js';

import sendEmail from '../utils.js';
const enrolleeRouter = express.Router();

enrolleeRouter.post('/create', [check('email').isEmail(), ], async (req, res) => {
    const { name, email, course } = req.body;
    conn.promise().query(
        "INSERT INTO enrollee (name, email, course) VALUES (?, ?, ?)", 
        [name, email, course]
    )
    .then(([rows]) => {
        console.log(rows);
        sendEmail(email, `Succesfully Enrolled in ${course}`);
        res.send("Enrollee created");
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Error creating enrollee");
    });
});

export default enrolleeRouter