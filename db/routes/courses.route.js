import express from "express";
import conn from "../config/db.setup.js";
import bcrypt from 'bcrypt';
import { check, validationResult } from "express-validator";
import sendEmail from "../utils.js";
const courseRouter = express.Router();


// ALL THESE ROUTE SHOULD HAVE AUTORIZATION AND AUTHENTICATION
courseRouter.get('/', async (req, res) => {
    const sortby = req.body.sortby || 'date';
    const order = req.body.order || 'asc';
    const validColumns = ['couser_name', 'date', 'original_price',  'discounted_price', 'online', 'onsite'];
    
    if(!validColumns.includes(sortby)){
        return res.status(400).json({error: 'Invalid sort by column'});
    } 

    const sql = `SELECT * FROM courses ORDER BY ?? ${order}`;
    const [rows] = await conn.promise().query(sql, [sortby]);
    res.status(200).json(rows);
     
})

courseRouter.post('/create', [
    check('course_name').not().isEmpty(),
    check('date').not().isEmpty(),
    check('original_price').isNumeric(),
    check('discounted_price').isNumeric(),
    check('online').not().isEmpty(),
    check('onsite').isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { course_name, date, original_price, discounted_price, online, onSite} = req.body;

    try {
        const [result] = await conn.promise().query(
            "INSERT INTO courses (course_name, date, original_price, discounted_price, online, onsite ) VALUES (?, ?, ?, ?, ?, ?)",
            [course_name, date, original_price, discounted_price, online, onSite]
        );

        res.status(201).json({ message: "Course created successfully", courseId: result.insertId });
    } catch (err) {
        console.error(`error on ${err.sqlMessage}`);
        res.status(500).json({ error: "Database error" });
    }
});
courseRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
    await conn.promise().query("SELECT * FROM course WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
})
courseRouter.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await conn.promise().query("DELETE FROM courses WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
})

courseRouter.put('/update/:id', async (req, res) => {
    const {id} = req.params;
    const  {course_name, date, original_price, discounted_price, online, onSite} = req.body

    try {

        const [existingCourse] = conn.promise().query("SELECT * FROM courses WHERE id = ?", [id])
        
        if (!existingCourse) {
            return res.status(404).json({ error: "Course not found" });
    };
    const currentCourse = existingCourse[0];
    const newCourseName = course_name || currentCourse.course_name;
    const newDate = date || currentCourse.date;
    const newOriginalPrice = original_price || currentCourse.original_price;
    const newDiscountedPrice = discounted_price || currentCourse.discounted_price;
    const newOnline = online || currentCourse.online
    const newOnSite = onSite || currentCourse.onSite

    await conn.promise().query(`UPDATE courses SET course_name=?, date=?, original_price=?, discounted_price=?, online=?, onSite=? WHERE id=?`, [
        newCourseName,
        newDate,
        newOriginalPrice,
        newDiscountedPrice,
        newOnline,
        newOnSite,
              id]);

              res.send("Course updated")
            } catch (err) {
                console.error(`error on ${err.sqlMessage}`);
                res.status(500).json({ error: "Database error" });
            }
})


export default courseRouter