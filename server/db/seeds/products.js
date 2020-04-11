exports.seed = (knex, Promise) => {
  return knex('products').del()
    .then(_ => {
      return knex('products').insert([
        { name: 'pencil', price: '1.99' },
        { name: 'pen', price: '2.99' }
      ])
    })
}
