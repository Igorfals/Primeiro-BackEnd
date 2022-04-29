import { conection as knex } from './conection/knex'

export class UserConection {

    getUsers() {
        return knex.select('*').from('users')
    }
    setUser(user: any) {
        return knex.insert(user).from('users')
    }
    updateUser(user: any, id: number) {
        return knex.update(user).from('users').where('id_user', id)
    }
    deleteUser(id: number) {
        return knex.from('users').where('id_user', id).del()
    }
}