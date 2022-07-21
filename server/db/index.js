import pg from "pg";
import * as config from "../config.js"

const pool = new pg.Pool({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  user: config.USERNAME,
  port: config.DB_PORT,
  password: config.PASSWORD,
  connectionString: process.env.URI || 'postgres://vnkvvkkmsgvtwk:e180692975ed6ef69b95f9fe9bed418c3750fd2059904e30abbeed8479314ea6@ec2-52-49-120-150.eu-west-1.compute.amazonaws.com:5432/d3puofc2shonpo',
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
      rejectUnauthorized: false,
  }
});

export default pool;