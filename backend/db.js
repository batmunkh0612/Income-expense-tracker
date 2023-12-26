import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

export const pool = new Pool({
    ssl: true,
    connectionString: process.env.DB_URL
})




