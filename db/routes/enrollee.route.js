import express from 'express';
import { check, validationResult } from 'express-validator';
import conn from '../config/db.setup.js';

import sendEmail from '../utils.js';
const enrolleeRouter = express.Router();

enrolleeRouter.get('/', (req, res) => {
    const sortby = req.body.sortby || 'date';
    const order = req.body.order || 'asc';
    const validColumns = ['name', 'email', 'phoneNumber', 'course', 'mop', 'date', 'modality'];

    if (!validColumns.includes(sortby)) {
        return res.status(400).json({ error: 'Invalid sort by column' });
    }
    conn.promise().query(`SELECT * FROM enrollees ORDER BY ??${order}`, [sortby]).then(([rows]) => {
        res.status(200).send(rows);
    })
})

enrolleeRouter.post('/create', [
    check('name').not().isEmpty(),
    check('email').isEmail(),
    check('phoneNumber').not().isEmpty(),
    check('course').not().isEmpty(),
    check('date').not().isEmpty(),
    check('payment_method').not().isEmpty(),
    check('reference_number').not().isEmpty()

    
 ], async (req, res) => {
    const { name, email, phoneNumber, course, date, payment_method, reference_number } = req.body;  
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    conn.promise().query(
        "INSERT INTO enrollees (name, email, phone_number, date, payment_method, reference_number ) VALUES ( ?, ?, ?, ?, ?, ?)", 
        [name, email, phoneNumber, date, payment_method, reference_number]
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