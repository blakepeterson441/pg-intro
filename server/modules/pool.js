const pg = require('pg');

const Pool = pg.Pool;

const config = {
    database: 'playfair_songs', // ONLY LINE YOU NEED TO CHANGE TO REUSE CODE
    host: 'localhost',
    port: 5432,
    max: 10, // max simultaneous queries
    idleTimeoutMillis: 30000 // 30 seconds
}
const pool = new Pool(config);

// Pool event listeners
pool.on('connect', () => {
    console.log('Database Connected');
})

pool.on('error', (error) => {
    console.log('Database error:', error);
})

module.exports = pool;
