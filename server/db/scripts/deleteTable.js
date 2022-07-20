import query from "../index.js";

const sqlString = `DROP TABLE IF EXISTS transactions;`;

async function deleteTable() {
    const res = await query(sqlString);
    console.log('Table delete succesfully!', res);
}

deleteTable();