import { Request, Response } from 'express'
import { ProdutoConection } from '../../../database/produto-conection'
const service = new ProdutoConection()


export class DeleteProdutoController{
    async DeleteProduto(req: Request, res: Response) {
        const { id } = req.params
        const idalterado = parseInt(id)

        if (isNaN(idalterado)) {
            return res.status(400).send({mensagem:'O parametro deve ser do tipo numero'})
        }
        try {
            await service.deleteProduto(idalterado)
            return res.status(200).send({mensagem: 'Produto deletado com sucesso!'})
        } catch (error) {
            return res.status(500).send({mensagem: 'ERRO ao deletar o produto!'})
        }
    }

}
