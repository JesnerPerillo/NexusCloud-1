import express from 'express';
import conn from '../config/db.setup.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash
}
export const userRouter = express.Router();


userRouter.post('/create', (req, res) => {
    const {name, email, password} = req.body;
    const hashedPassword = hashPassword(password);
    conn.promise().query("INSERT INTO users VALUES(?, ?,?)", [name, email, hashedPassword])
    .then(([rows]) => {
        console.log(rows)
    })
})

userRouter.patch("/update/:id", (req, res) =>{
    const {id} = req.params;
    const {name, email, password} = req.body;
    const hashedPassword = hashPassword(password);
    conn.promise().query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, hashedPassword, id])
    .then(([rows]) => {
        console.log(rows)
    })
}
)
