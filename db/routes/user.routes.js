import express from 'express';
import conn from '../config/db.setup.js';
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const saltRounds = 10;
const secretKey = process.env.JWT_SECRET_KEY;

export const userRouter = express.Router();

userRouter.post(
    '/create',
    [
        check('username').not().isEmpty(),
        check('password').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username,  password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            await conn.promise().query(
                "INSERT INTO admin (username,  password) VALUES ( ?, ?)",
                [username,  hashedPassword]
            );
            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error creating user: " + error.message });
        }
    }
);

const x = 'asas'

userRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await conn.promise().query(
            "SELECT * FROM admin WHERE username = ?",
            [username]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});
userRouter.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const [existingUser] = await conn.promise().query(
            "SELECT username, email, password FROM admin WHERE id = ?",
            [id]
        );

        if (existingUser.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const currentUser = existingUser[0];

        const newName = username || currentUser.username;
        const newEmail = email || currentUser.email;
        const newPassword = password
            ? await bcrypt.hash(password, saltRounds)
            : currentUser.password;

        await conn.promise().query(
            "UPDATE admin SET username = ?, email = ?, password = ? WHERE id = ?",
            [newName, newEmail, newPassword, id]
        );

        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating user" });
    }
});

userRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conn.promise().query(
            "DELETE FROM admin WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
});



