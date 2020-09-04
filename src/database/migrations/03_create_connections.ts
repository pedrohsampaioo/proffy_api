import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', (table) => {
        table.increments('id').notNullable().primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}