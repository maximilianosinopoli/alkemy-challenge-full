import db from "../db/index.js";

export async function getTransactions() {
    const data = await db.query(`SELECT * FROM transactions`);
    console.log(data)
    return data.rows;
}

