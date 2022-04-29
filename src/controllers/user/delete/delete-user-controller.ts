import { Request, Response } from 'express'
import {UserConection} from '../../../database/user-conection'
const service = new UserConection()

export class DeleteUserController {
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params
        const idalterado = parseInt(id)
        
        if (isNaN (idalterado)) {
            return res.status(400).send({mensage: 'O parametro deve ser do tipo numero'})
        }
        try {
            await service.deleteUser(idalterado)
            return res.status(200).send({mensagem: 'Usuario deletado com sucesso!'})
        } catch (error) {
            console.log(error);
            return res.status(500).send({mensagem: 'ERRO ao deletar o usuario!'})
        }
    }

}
