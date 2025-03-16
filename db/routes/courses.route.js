import express from "express";
import conn from "../config/db.setup.js";
import bcrypt from 'bcrypt';


const courseRouter = express.Router();


// ALL THESE ROUTE SHOULD HAVE AUTORIZATION AND AUTHENTICATION
courseRouter.get('/', (req, res) => {
    const x = conn.promise().query("SELECT * FROM course").then(([rows]) => console.log(rows)).catch(console.log('sasas'))

    const sortby = req.body;
    if (sortby == 'date') { 
        conn.promise().query("SELECT * FROM course ORDER BY classDate").then(([rows]) => {
            res.send(rows)
            console.log(`Result fetch by date`)
        })
    } else if (sortby == 'price') {
        conn.promise().query("SELECT * FROM course ORDER BY price").then(([rows]) => {
            res.send(rows)
            console.log(`Result fetch by price`)
        })

    } else {
        conn.promise().query("SELECT * FROM course").then(([rows]) => {
            res.send(rows)
            console.log(`Result fetch by default`)
        })
    }
    res.send(x);
})


// 
courseRouter.post('/create', (req, res) => {
    const {name, description, price, classDate} = req.body;
    conn.promise().query("INSERT INTO course(name, description, price, classDate) VALUES(?, ?, ?, ?)", [name, description, price, classDate])
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