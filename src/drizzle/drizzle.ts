import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
const migrateDB = async () => {
  const migrationClient = postgres(
    'postgres://postgres:adminadmin@0.0.0.0:5432/db',
    { max: 1 },
  );

  const migrationDb = drizzle(migrationClient);
  await migrate(migrationDb, { migrationsFolder: 'drizzle' }); // que folder va aca?
  await migrationClient.end();
};

// for query purposes
const queryClient = postgres('postgres://postgres:adminadmin@0.0.0.0:5432/db');
const db = drizzle(queryClient);
// await db.select().from(...)...
