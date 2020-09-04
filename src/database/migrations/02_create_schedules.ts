import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('schedules', (table) => {
        table.increments('id').notNullable().primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        table.integer('class_id')
            .unsigned()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('schedules');
}