import { ProdutoConection } from '../../../database/produto-conection'
const service = new ProdutoConection()

export class AddProdutocontroller {

    async addProduto(req: any, res: any) {
        const { name_produto, valor_produto, status_produto, descricao } = req.body

        if (!name_produto) {
            return res.status(400).send({ mensagem: 'Nome do produto obrigatorio!' })
        }
        if (!valor_produto) {
            return res.status(400).send({ mensagem: 'Valor do produto obrigatorio!' })
        }

        const produto = {
            name_produto,
            valor_produto,
            status_produto,
            descricao
        }
        try {
            await service.setProduto(produto)
            return res.status(200).send({ mensagem: 'Produto inserido com sucesso!' })
        } catch (error) {
            console.log(error);

            return res.status(500).send({ mensagem: 'ERRO ao inserir o produto!' })
        }


    }





}