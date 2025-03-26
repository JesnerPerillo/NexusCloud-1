import express from 'express';
import { check, validationResult } from 'express-validator';
import conn from '../config/db.setup.js';

import sendEmail from '../utils.js';
const enrolleeRouter = express.Router();

enrolleeRouter.get('/', (req, res) => {
<<<<<<< HEAD
    const sortby = req.body.sortby || 'date';
    const limit = 12 || req.body.limit;
    const order = req.body.order || 'asc';
    const offset = parseInt(req.body.offset) || 0;
    const validColumns = ['name', 'email', 'phoneNumber', 'course', 'modality', 'date', 'payment_method', 'reference_number'];
=======
    const sortby = req.query.sortby || 'date';
    const modality = req.query.modality || 'ON-SITE';
    const limit = parseInt(req.query.limit) || 12;
    const offset = parseInt(req.query.offset) || 0;
    let order = req.query.order || 'asc';

    const validColumns = ['name', 'email', 'phoneNumber', 'course', 'date', 'payment_method', 'reference_number'];
    const validOrders = ['asc', 'desc'];
>>>>>>> baad94bc047e3e202de54d1e6f6e5175b1e903db

    if (!validColumns.includes(sortby)) {
        return res.status(400).json({ error: 'Invalid sort by column' });
    }

    if (!validOrders.includes(order.toLowerCase())) {
        return res.status(400).json({ error: 'Invalid order type' });
    }

    const query = `SELECT * FROM enrollees ORDER BY id ${order} LIMIT ? OFFSET ?`;

    conn.promise()
        .query(query, [ limit, offset])
        .then(([rows]) => {
            res.status(200).json(rows);
        })
        .catch((err) => {
            console.error("Database query error:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

enrolleeRouter.post('/create', [
    check('name').not().isEmpty(),
    check('email').isEmail(),
    check('phoneNumber').not().isEmpty(),
    check('course').not().isEmpty(),
    check('modality').not().isEmpty(),
    check('date').not().isEmpty(),
   check('paymentMethod').not().isEmpty(),
// 
    
 ], async (req, res) => {
<<<<<<< HEAD
    const { name, email, phoneNumber, course, modality, date, paymentMethod, reference_number } = req.body;  
=======
    const { name, email, phoneNumber, course, date, paymentMethod, referenceNumber } = req.body;  
>>>>>>> baad94bc047e3e202de54d1e6f6e5175b1e903db
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }

    conn.promise().query(
<<<<<<< HEAD
        "INSERT INTO enrollees (name, email, phone_number, course, modality, date, payment_method, reference_number ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)", 
        [name, email, phoneNumber, date, paymentMethod, reference_number]
=======
        "INSERT INTO enrollees (name, email, phone_number, course, date, payment_method, reference_number ) VALUES ( ?, ?,  ?, ?, ?, ?, ?)", 
        [name, email, phoneNumber,  course, date, paymentMethod, referenceNumber]
>>>>>>> baad94bc047e3e202de54d1e6f6e5175b1e903db
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

enrolleeRouter.put('/update/:id',  async (req, res) => {
    const {id} = req.params;
    const {name, email, phoneNumber, course, modality, date, paymentMethod, referenceNumber} = req.body;

    try {
        const existingEnrollee = conn.promise().query(`SELECT * FROM enrollees WHERE id=?`, [id])

        if (!existingEnrollee) {
            res.status(404),json({"error": "enrolle doesn't exist".toUpperCase()})
        }

        const newName = name || existingEnrollee.name
        const newEmail = email || existingEnrollee.email
        const newPhoneNumber = phoneNumber || existingEnrollee.phoneNumber
        const newCourse = course || existingEnrollee.course
        const newModality = modality || existingEnrollee.modality
        const newDate = date || existingEnrollee.date
        const newPaymentMethod = paymentMethod || existingEnrollee.payment_method
        const newReferenceNumber =referenceNumber || referenceNumber

<<<<<<< HEAD
        await conn.promise().query("UPDATE enrollees SET name=?, email=?, phoneNumber=?, course=?, modality=?, date=?, payment_method=?, referenceNumber=?", [
            newName, newEmail, newPhoneNumber, newCourse, newModality, newDate, newPaymentMethod, newReferenceNumber, id
=======
        await conn.promise().query("UPDATE enrollees SET name=?, email=?, phoneNumber=?, course=?, date=?, payment_method=?, reference_number=?", [
            newName, newEmail, newPhoneNumber, newCourse, newDate, newPaymentMethod, newReferenceNumber, id
>>>>>>> baad94bc047e3e202de54d1e6f6e5175b1e903db
        ])

        res.send("Update Succesfull")
    } catch(err) {
        res.send(500).json({error: 'Server error ' + err.message})
    }
    
})


enrolleeRouter.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    conn.promise().query("DELETE FROM enrollees WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
});



// batch deletion of enrollee accordint to course
enrolleeRouter.delete("/delete/:course", (req, res) => {
    const { course } = req.params;
    try {
        conn.promise().query("DELETE FROM enrollees WHERE course = ?", [course]);
        res.status(200).json({ message: "Enrollee deleted successfully" });
    }catch (error) {
        res.status(500).json({ error: "Error deleting enrollee" });
    }
    });
export default enrolleeRouter