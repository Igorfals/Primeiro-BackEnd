import { CategoryConection } from '../../../database/category-conection'
const categoryconection = new CategoryConection()

export class UpdateCategoryController {
    async UpdateCategory (req: any, res: any) {
        const { id } = req.params
        const { name_category, description_category } = req.body
        const category = {
            name_category,
            description_category
        }
        try {
            await categoryconection.updateCategory(category, id)
            return res.status(200).send({mensagem: 'Categoria alterada com sucesso!'})
        } catch (error) {
            return res.status(500).send({mensagem: 'ERRO ao alterar a Categoria!'})
        }
    }
}