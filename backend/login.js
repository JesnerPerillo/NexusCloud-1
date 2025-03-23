const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'nexuscloudsecretkey'; 

module.exports = (db) => {
  const router = express.Router();
  const bcrypt = require('bcrypt');
  

  router.post('/login', async (req, res) => {
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
          console.log("No admin found with username:", username);
          return res.status(401).json({ error: 'Invalid username or password' });
        }
  
        const admin = results[0];
  
        // ✅ Check password using bcrypt.compare()
  //       const isMatch = await bcrypt.compare(password, admin.password);
  //       if (!isMatch) {
  //         console.log("Password does not match");
  //         return res.status(401).json({ error: 'Invalid username or password' });
  //       }
  
        // ✅ Generate JWT token
  //       const token = jwt.sign(
  //         { id: admin.id, username: admin.username },
  //         SECRET_KEY,
  //         { expiresIn: '1h' }
  //       );
  
  //       res.status(200).json({ message: 'Login successful', token });
  //     });
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });
  
  // return router;
  // ✅ Check if account is locked
  if (admin.lockout_until && new Date(admin.lockout_until) > new Date()) {
    return res.status(403).json({ 
      error: `Account is locked. Try again after ${admin.lockout_until}` 
    });
  }

  // ✅ Compare password
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    console.log("Password does not match");

    // Increment failed_attempts
    const failedAttempts = admin.failed_attempts + 1;
    let lockoutUntil = null;

    // ✅ If failed attempts reach 5, lock account for 1 day
    if (failedAttempts >= 5) {
      lockoutUntil = new Date();
      lockoutUntil.setDate(lockoutUntil.getDate() + 1); // Lock for 1 day
      lockoutUntil = lockoutUntil.toISOString().slice(0, 19).replace('T', ' ');
    }

    const updateQuery = `UPDATE admin SET failed_attempts = ?, lockout_until = ? WHERE username = ?`;
    db.query(updateQuery, [failedAttempts, lockoutUntil, username]);

    return res.status(401).json({ 
      error: failedAttempts >= 5 
        ? 'Too many failed attempts. Account locked for 1 day.' 
        : `Invalid credentials. ${5 - failedAttempts} attempts left.` 
    });
  }

  // ✅ Successful login - Reset failed attempts
  const resetQuery = `UPDATE admin SET failed_attempts = 0, lockout_until = NULL WHERE username = ?`;
  db.query(resetQuery, [username]);

  // ✅ Generate JWT token
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
