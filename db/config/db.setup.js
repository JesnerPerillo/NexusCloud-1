import mysql2 from "mysql2";

const conn = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "NexusCloudDB",
    connectionLimit: 10,
    port: 3306
})

export default conn;