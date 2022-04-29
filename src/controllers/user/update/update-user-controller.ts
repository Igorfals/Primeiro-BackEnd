import { UserConection } from '../../../database/user-conection'
import { gerarCrypto } from '../../../helpers/bcrypt'
import  validator from 'validator'

const userconection = new UserConection()
export class UpdateUserController {

    async updateUser(req: any, res: any) {
        const { id } = req.params
        const { name, password, email, status } = req.body
        if (email) {
            const verificaremail = validator.isEmail(email)
            if (!verificaremail) {
                return res.status(400).send({ mensagem: 'Email invalido' })
            }
        }
        
        const user: any = {
            name,
            email,
            status
        }
        if (password) {
            user.password = await gerarCrypto(password)
        }
        try {
            await userconection.updateUser(user, id)
            return res.status(200).send({ mensagem: 'Usuario, alterado com Sucesso!' })
        } catch (error: any) {
            console.log(error);
            if (error.errno==1062) {
                return res.status(400).send({mensagem: 'Email já está em uso!'})
            }
            return res.status(500).send({ mensagem: 'ERRO ao alterar o usuario!!' })

        }
    }

}