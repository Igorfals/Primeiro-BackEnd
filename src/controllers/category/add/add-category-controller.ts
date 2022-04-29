import { CategoryConection } from '../../../database/category-conection'
const service = new CategoryConection()

export class AddCategoryController {

    async addCategory(req: any, res: any) {
        const { name_category, description_category, status_category } = req.body
        if (!name_category) {
            return res.status(400).send({mensagem:'Nome da categoria obrigatorio!'})
        }
        if (!description_category) {
            return res.status(400).sen({mensagem: 'Nome da descrição obrigatoria!'})
        }
        const category = {
            name_category,
            description_category,
            status_category
        }
        try {
            await service.setCategory(category)
            return res.status(200).send({mensagem: 'Categoria inserida com sucesso!'})
        } catch (error) {
            console.log(error);
            return res.status(500).send({mensagem: 'ERRO ao inserir a categoria!'})
        }
    }
}