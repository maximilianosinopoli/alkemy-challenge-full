import db from "../index.js";

const sqlString = `DROP TABLE IF EXISTS transactions;`;

export async function deleteTable() {
    const res = await db.query(sqlString);
    console.log('Table delete succesfully!', res);
}

deleteTable();