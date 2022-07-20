import pg from 'pg';
import * as config from "../config.js";

const pool = new pg.Pool({
    host: config.databaseHost,
    database: config.databaseName,
    user: config.username,
    port: config.dbPort,
    password: config.password,
    connectionString: process.env.DATABASE_URL || 'postgres://ldvonfnksakmwu:fb1eb7f0970fee9a8b4c40c41b9d4af87070b1e2056fd2e904aacdda270e53ae@ec2-63-32-248-14.eu-west-1.compute.amazonaws.com:5432/d4878n5ij03ic4',
    ssl: process.env.DATABASE_URL ? true : false,
    ssl: {
        rejectUnauthorized: false,
    }
});

export default async function query(text, params) {
    return pool.query(text, params);
}