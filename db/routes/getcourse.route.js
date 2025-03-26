import conn from '../config/db.setup.js';

const getCourses = (callback) => {
  const sql = `
    SELECT 
      course_name, 
      DATE_FORMAT(date, '%Y-%m-%d') AS date, 
      FORMAT(CAST(original_price AS DECIMAL(10,2)), 2) AS original_price, 
      FORMAT(CAST(discounted_price AS DECIMAL(10,2)), 2) AS discounted_price
    FROM courses
  `;

  conn.query(sql, (err, result) => { 
    if (err) {
      console.error("Error fetching courses:", err);
      callback(err, null);
      return;
    }

    const formattedResult = result.reduce((acc, curr) => {
      let existingCourse = acc.find((c) => c.course_name === curr.course_name);
      if (existingCourse) {
        existingCourse.dates.push(curr.date);
      } else {
        acc.push({
          course_name: curr.course_name,
          dates: [curr.date],
          original_price: curr.original_price || "0.00",
          discounted_price: curr.discounted_price || "0.00",
        });
      }
      return acc;
    }, []);

    callback(null, formattedResult);
  });
};

export { getCourses };
