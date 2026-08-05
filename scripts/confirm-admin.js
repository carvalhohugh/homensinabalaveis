const { Client } = require('pg');

const connectionString = 'postgresql://postgres:101010@Homens2026@db.kqoiwpducjvcnzqwhmlx.supabase.co:5432/postgres';

async function confirmAdminEmail() {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to database.');
    
    const res = await client.query(`
      UPDATE auth.users 
      SET email_confirmed_at = NOW() 
      WHERE email = 'admin@admin.com';
    `);
    
    console.log(`Updated ${res.rowCount} row(s).`);
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    await client.end();
  }
}

confirmAdminEmail();
