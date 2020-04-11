exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('price').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
