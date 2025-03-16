const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/enrollees', (req, res) => {
    console.log("Received data:", req.body);
  
    const { name, email, phoneNumber, course, date, paymentMethod, referenceNumber } = req.body;
  
    if (!name || !email || !phoneNumber || !course || !date || !paymentMethod) {
      console.log("Validation failed");
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    const query = `
      INSERT INTO enrollees (name, email, phone_number, course, date, payment_method, reference_number)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    db.query(
      query,
      [
        name,
        email,
        phoneNumber,
        course,
        date, 
        paymentMethod,
        referenceNumber || null, // Allow NULL for reference number
      ],
      (err, result) => {
        if (err) {
          console.error('Error inserting enrollees:', err.sqlMessage);
          return res.status(500).json({ error: 'Database error', details: err.sqlMessage });
        }
  
        console.log('Enrollee added successfully!');
        res.status(201).json({ message: 'Enrollment successful' });
      }
    );
  });  
  

  return router;
};
