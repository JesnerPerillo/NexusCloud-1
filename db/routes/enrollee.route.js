import express from 'express';
import { check, validationResult } from 'express-validator';
import conn from '../config/db.setup.js';

import sendEmail from '../utils.js';
const enrolleeRouter = express.Router();

enrolleeRouter.get('/', (req, res) => {
    const sortby = req.body.sortby || 'date';
    const order = req.body.order || 'asc';
    const validColumns = ['name', 'email', 'course', 'mop', 'date', 'modality'];

    if (!validColumns.includes(sortby)) {
        return res.status(400).json({ error: 'Invalid sort by column' });
    }
    conn.promise().query(`SELECT * FROM enrollee ORDER BY ${sortby} ${order}`).then(([rows]) => {
        res.send(rows)
    })
})

enrolleeRouter.post('/create', [check('email').isEmail(),
    check('name').not().isEmpty(),
    check('course').not().isEmpty(),
    check('mop').not().isEmpty(),
    check('date').not().isEmpty(),
    check('modality').not().isEmpty()

    
 ], async (req, res) => {
    const { name, email, course, mop, date, modality } = req.body;
    conn.promise().query(
        "INSERT INTO enrollee (name, email, course, mop, date, modality) VALUES (?, ?, ?, ?, ?, ?)", 
        [name, email, course, mop, date, modality]
    )
    .then(([rows]) => {
        console.log(rows);
        sendEmail(email, name, course); // move this because this automatically send when they filled up the form, it should be when payment is succesfull
        res.send("Enrollee created");
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Error creating enrollee");
    });
});

export default enrolleeRouter