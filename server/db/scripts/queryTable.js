import query from "../index.js";

const sqlString = `SELECT * FROM transactions`;

async function queryTable() {
    const res = await query(sqlString);
    console.log(res);
}

queryTable();