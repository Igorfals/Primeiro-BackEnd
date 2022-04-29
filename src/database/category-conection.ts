import { conection as knex } from './conection/knex'

export class CategoryConection {
    getCategory() {
        return knex.select('*').from('categorys')
    }
    setCategory(category: any) {
        return knex.insert(category).from('categorys')
    }
    updateCategory(category: any, id: number) {
        return knex.update(category).from('categorys').where('id_category, id')
    }
    deleteCategory(id: number) {
        return knex.from('categorys').where('id_category', id).del()
    }
}