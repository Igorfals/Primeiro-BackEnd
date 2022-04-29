import {UserConection} from '../../../database/user-conection'
import { gerarCrypto } from '../../../helpers/bcrypt'
import validator from 'validator'

const service = new UserConection()
export class AddUserController {
    async addUser(req: any,  res: any) {
        const { name, email, password } = req.body
        if (!name) {
            return res.status(400).send({ mensagem: 'Name obrigatorio' })
        }
        if (!email) {
            return res.status(400).send({ mensagem: 'Email obrigatorio' })
        }
        if (!password) {
            return res.status(400).send({ mensagem: 'Password obrigatorio' })
        }
        const verificarsenha = validator.isEmail(email);
        if (!verificarsenha){
            return res.status(400).send({mensagem: 'Email invalido!'})
        }
        const senhacryptografada = await gerarCrypto(password)
        const user = {
            name: name,
            email: email,
            password: senhacryptografada
        }
        try {
            await service.setUser(user)
            return res.status(200).send({ mensagem: 'Usuario inserido com sucesso!' })
        } catch (error: any) {
            console.log(error);
            if (error.errno==1062) {
                return res.status(400).send({mensagem: 'Email já está em uso!'})
            }

            return res.status(500).send({ mensagem: 'ERRO ao inserir o usuario' })

        }
    }
}