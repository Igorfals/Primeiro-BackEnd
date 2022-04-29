import { Request, Response } from 'express'
import { ProdutoConection } from '../../../database/produto-conection'
const service = new ProdutoConection()
export class GetProdutoController {
    async getProdutos(req: Request, res: Response){
        const produtos = await service.getProdutos()
        return res.send(produtos)
    }

}