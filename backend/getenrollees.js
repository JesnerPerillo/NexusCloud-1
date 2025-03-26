import express from 'express';
import cors from 'cors';
const router = express.Router();

module.exports = (db) => {
  // ✅ Get Enrollees with Pagination (Limit to 10)
  router.get('/', (req, res) => {
    const limit = 12;
    const offset = parseInt(req.query.offset) || 0;

    const query = `SELECT * FROM enrollees LIMIT 12 OFFSET 0`;

    db.query(query, [limit, offset], (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).json({ error: 'Failed to fetch data' });
      }

      res.status(200).json(results);
    });
  });

  return router;
};
