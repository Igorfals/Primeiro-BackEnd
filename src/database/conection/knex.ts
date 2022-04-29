import knex from 'knex'

export const conection = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto'
  }
});