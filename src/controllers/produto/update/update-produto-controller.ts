import { ProdutoConection } from '../../../database/produto-conection'
const produtoconection = new ProdutoConection()

export class UpdateProdutoController {

    async UpdateProduto(req: any, res: any) {
        const { id } = req.params
        const { name_produto, valor_produto, status_produto, descricao } = req.body
        const produto = {
            name_produto,
            valor_produto,
            status_produto,
            descricao
        }
        try {
            await produtoconection.updateProduto(produto, id)
            return res.status(200).send({mensagem: 'Produto alterado com sucesso!'})
        } catch (error) {
            return res.status(500).send({mensagem: 'ERRO ao alterar o produto!'})
        }
    }

}