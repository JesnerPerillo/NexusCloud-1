import mysql2 from "mysql2";


const conn = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nexus",
    connectionLimit: 10

})

export default conn;