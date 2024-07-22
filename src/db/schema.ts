import { index, integer, pgTable, serial, varchar, uuid, timestamp } from 'drizzle-orm/pg-core';

export const expenses = pgTable(
  'expenses',
  {
    id: serial('id').primaryKey().unique().notNull(),
    title: varchar('title', { length: 256 }).notNull(),
    amount: integer('amount').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (table) => {
    return {
      titleIdx: index('title_idx').on(table.title),
    };
  },
);

export type Expense = typeof expenses.$inferSelect;
export type NewExpense = typeof expenses.$inferInsert;
