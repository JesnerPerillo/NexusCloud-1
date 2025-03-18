import express from "express";
import conn from "../config/db.setup.js";
import bcrypt from 'bcrypt';
import { check, validationResult } from "express-validator";

const courseRouter = express.Router();


// ALL THESE ROUTE SHOULD HAVE AUTORIZATION AND AUTHENTICATION
courseRouter.get('/', async (req, res) => {
    const sortby = req.body.sortby || 'date';
    const order = req.body.order || 'asc';
    const validColumns = ['name', 'email', 'course', 'mop', 'date', 'modality'];
    
    if(!validColumns.includes(sortby)){
        return res.status(400).json({error: 'Invalid sort by column'});
    } 

    const sql = `SELECT * FROM courses ORDER BY ?? ${order}`;
    const [rows] = await conn.promise().query(sql, [sortby]);
    res.status(200).json(rows);
     
})


// 
courseRouter.post('/create', [
    check('course_name').not().isEmpty(),
    check('date').not().isEmpty(),
    check('original_price').not().isEmpty(),   
    check('discounted_price').not().isEmpty(),
    check('modality').not().isEmpty(),
    check('slots').not().isEmpty(),
    check('duration').not().isEmpty()
],(req, res) => {
    const {course_name, date, original_price, discounted_price, modality, slots, duration} = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    conn.promise().query("INSERT INTO course(?, ?, ?, ?, ?, ?, ?, ?) ", [course_name, date, original_price, discounted_price, modality, slots, duration])
    .then(([rows]) => {
        console.log(rows)
    })
})

courseRouter.get('/:id', (req, res) => {
    const {id} = req.params;
    conn.promise().query("SELECT * FROM course WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
})
courseRouter.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    conn.promise().query("DELETE FROM course WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
})
export default courseRouter