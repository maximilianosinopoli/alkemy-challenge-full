import db from "../index.js";

const sqlString = `CREATE TABLE transactions (id SERIAL PRIMARY KEY, concept TEXT, amount INTEGER, type TEXT, category TEXT, date DATE)`;

 async function createTable() {
    const res = await db.query(sqlString);
    console.log(res.rows);
}

createTable();