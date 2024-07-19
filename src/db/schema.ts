import { index, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const expenses = pgTable(
  'expenses',
  {
    id: serial('id').primaryKey().unique().notNull(),
    title: varchar('title', { length: 256 }).notNull(),
    amount: integer('amount').notNull(),
  },
  (table) => {
    return {
      titleIdx: index('title_idx').on(table.title),
    };
  },
);

export type Expense = typeof expenses.$inferSelect;
export type NewExpense = typeof expenses.$inferInsert;
