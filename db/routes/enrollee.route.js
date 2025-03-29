import express from 'express';
import { check, validationResult } from 'express-validator';
import conn from '../config/db.setup.js';
import sendEmail from '../utils.js';

const enrolleeRouter = express.Router();

enrolleeRouter.get('/', (req, res) => {
    const validColumns = ['name', 'email', 'phone_number', 'course', 'modality', 'date', 'payment_method', 'reference_number'];
    const validOrders = ['asc', 'desc'];
    
    const sortby = req.query.sortby || 'date';
    const limit = parseInt(req.query.limit) || 12;
    const offset = parseInt(req.query.offset) || 0;
    let order = req.query.order || 'asc';
    
    if (!validColumns.includes(sortby)) {
        return res.status(400).json({ error: 'Invalid sort by column' });
    }
    
    if (!validOrders.includes(order.toLowerCase())) {
        return res.status(400).json({ error: 'Invalid order type' });
    }
    
    const query = `SELECT * FROM enrollees ORDER BY ${sortby} ${order} LIMIT ? OFFSET ?`;
    
    conn.promise()
        .query(query, [limit, offset])
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
    check('paymentMethod').not().isEmpty()
], async (req, res) => {
    const { name, email, phoneNumber, course, modality, date, paymentMethod, referenceNumber } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await conn.promise().query(
            "INSERT INTO enrollees (name, email, phone_number, course, modality, date, payment_method, reference_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [name, email, phoneNumber, course, modality, date, paymentMethod, referenceNumber]
        );
        
        // Only send email if payment is successful (you might want to add a payment status check here)
        // sendEmail(email, name, course);
        
        res.status(201).json({ message: "Enrollee created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating enrollee" });
    }
});

enrolleeRouter.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phoneNumber, course, modality, date, paymentMethod, referenceNumber } = req.body;
    
    try {
        const [existingEnrollee] = await conn.promise().query("SELECT * FROM enrollees WHERE id=?", [id]);
        if (!existingEnrollee.length) {
            return res.status(404).json({ error: "Enrollee doesn't exist" });
        }

        const newName = name || existingEnrollee[0].name;
        const newEmail = email || existingEnrollee[0].email;
        const newPhoneNumber = phoneNumber || existingEnrollee[0].phone_number;
        const newCourse = course || existingEnrollee[0].course;
        const newModality = modality || existingEnrollee[0].modality;
        const newDate = date || existingEnrollee[0].date;
        const newPaymentMethod = paymentMethod || existingEnrollee[0].payment_method;
        const newReferenceNumber = referenceNumber || existingEnrollee[0].reference_number;

        await conn.promise().query(
            "UPDATE enrollees SET name=?, email=?, phone_number=?, course=?, modality=?, date=?, payment_method=?, reference_number=? WHERE id=?",
            [newName, newEmail, newPhoneNumber, newCourse, newModality, newDate, newPaymentMethod, newReferenceNumber, id]
        );
        
        res.status(200).json({ message: "Update Successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error: " + err.message });
    }
});

enrolleeRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await conn.promise().query("DELETE FROM enrollees WHERE id = ?", [id]);
        res.status(200).json({ message: "Enrollee deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting enrollee" });
    }
});

enrolleeRouter.delete('/delete/course/:course', async (req, res) => {
    const { course } = req.params;
    try {
        await conn.promise().query("DELETE FROM enrollees WHERE course = ?", [course]);
        res.status(200).json({ message: "Enrollees deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting enrollees" });
    }
});

export default enrolleeRouter;