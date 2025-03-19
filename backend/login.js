const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'nexuscloudsecretkey'; 
module.exports = (db) => {
  const router = express.Router();

  // Admin Login Route
  router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const query = `SELECT * FROM admin WHERE username = ?`;
      db.query(query, [username], async (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: 'Database error' });
        }
  
        if (results.length === 0) {
          console.log("No admin found with username:", username); // Log when no user is found
          return res.status(401).json({ error: 'Invalid username or password' });
        }
  
        const admin = results[0];
        console.log("Admin data from DB:", admin); // Log the found admin data
  
        // Check the password hash directly from the DB (no need for manual replacement anymore)
        const isMatch = await bcrypt.compare(password, admin.password);
        console.log("Password Match Result:", isMatch); // Log the result of password comparison
  
        if (!isMatch) {
          console.log("Password does not match");
          return res.status(401).json({ error: 'Invalid username or password' });
        }
  
        // Generate JWT token
        const token = jwt.sign(
          { id: admin.id, username: admin.username },
          SECRET_KEY,
          { expiresIn: '1h' }
        );
  
        res.status(200).json({ message: 'Login successful', token });
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  return router;
};
