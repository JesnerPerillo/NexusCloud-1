import express from 'express';
import conn from '../config/db.setup.js';
import bcrypt from 'bcrypt';
import sendEmail from '../utils.js';
const saltRounds = 10;
export const userRouter = express.Router();


userRouter.post('/create', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    conn.promise().query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
        [name, email, hashedPassword]
    )
    .then(([rows]) => {
        console.log(rows);
        res.send("User created");
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Error creating user");
    });
});
userRouter.post('/login',  async (req, res) => {
    const {username, password} = req.body;
    const rows = await conn.promise().query("SELECT * FROM users WHERE username = ?", [username]);
    if (rows[0].length)  { 
        const {dbusername,dbemail, dbpassword} = rows[0];
        const isMatch = await bcrypt.compare(password, dbpassword);
        if (isMatch) {
            res.send("Login successful")
        }else {
            res.send({error: "Invalid fields"})
        }
    }else {
        res.send("User not found")
    }
})

userRouter.patch("/update/:id", (req, res) =>{
    const {id} = req.params;
    const {name, email, password} = req.body;
    const hashedPassword = bcrypt.hash(password);
    conn.promise().query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, hashedPassword, id])
    .then(([rows]) => {
        console.log(rows)
    })
}
)

userRouter.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    conn.promise().query("DELETE FROM users WHERE id = ?", [id])
    .then(([rows]) => {
        res.send(rows)
    })
})
