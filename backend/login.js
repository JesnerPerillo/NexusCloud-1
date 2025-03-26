import express from 'express';
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const MAX_ATTEMPTS = 5; 
const LOCKOUT_TIME = 24 * 60 * 60 * 1000; // 1 day in milliseconds
const saltRounds = 10;
const secretKey = 'jennefer';

export const userRouter = express.Router();


module.exports = (db) => {router.get('/', async (req, res) => {
    const [rows] = await conn.promise().query("SELECT * FROM users");
    res.status(200).json(rows);
})
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
            console.log('no user that name ')
            return res.status(404).json({ error: "User not found" });
        }

        const user = rows[0];
  //     const isMatch = await bcrypt.compare(password, user.password);

  //     if (!isMatch) {
  //         console.log('password do not match')
  //         return res.status(401).json({ error: "Incorrect password" });
  //     }

  //     const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

  //     res.json({ message: "Login successful", token });
  // } catch (error) {
  //     console.log(error)
  //     res.status(500).json({ error: "Server error: " + error.message });
  // }
      // Check if the account is locked
        if (user.lockout_until && new Date(user.lockout_until) > new Date()) {
            return res.status(403).json({ error: "Account locked for 1 day. Try again later." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Password does not match');

            // Increment failed attempts
            const newAttempts = user.failed_attempts + 1;
            let lockoutUntil = user.lockout_until;

            // Lock account if max attempts reached
            if (newAttempts >= MAX_ATTEMPTS) {
                lockoutUntil = new Date(Date.now() + LOCKOUT_TIME);
            }

            await conn.promise().query(
                "UPDATE admin SET failed_attempts = ?, lockout_until = ? WHERE username = ?",
                [newAttempts, lockoutUntil, username]
            );

            return res.status(401).json({ error: "Incorrect password" });
        }

        // Reset failed attempts on successful login
        await conn.promise().query(
            "UPDATE admin SET failed_attempts = 0, lockout_until = NULL WHERE username = ?",
            [username]
        );

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
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
};


