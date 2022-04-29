import { Request, Response } from 'express'
import { CategoryConection } from '../../../database/category-conection'
const service = new CategoryConection()


export class DeleteCategoryController{
    async DeleteCategory(req: Request, res: Response) {
        const { id } = req.params
        const idalterado = parseInt(id)

        if (isNaN(idalterado)) {
            return res.status(400).send({mensagem:'O parametro deve ser do tipo numero'})
        }
        try {
            await service.deleteCategory(idalterado)
            return res.status(200).send({mensagem: 'Categoria deletada com sucesso!'})
        } catch (error) {
            console.log(error);
            
            return res.status(500).send({mensagem: 'ERRO ao deletar a Categoria!'})
        }
    }

}
