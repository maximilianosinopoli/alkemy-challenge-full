import db from "../index.js";

const sqlString = `SELECT * FROM transactions`;

export async function queryTable() {
    const res = await db.query(sqlString);
    console.log(res);
}

queryTable();