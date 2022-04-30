import { UserConection } from '../../../database/user-conection'
import { Request, Response } from 'express'
import { compararSenha } from '../../../helpers/bcrypt'
import { gerartoken } from '../../../helpers/auth'
const userconection = new UserConection()

export class LoginController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const user = await userconection.login(email)
            console.log(user);
            
            if (!user?.id_user) {
                return res.status(400).send({ mensagem: 'Email não cadastrado!' })
            }
            const verificarsenha = await compararSenha(password, user.password)
            if (!verificarsenha) {
                return res.status(400).send({ mensagem: 'Email ou senha invalidos!' })
            }
            const token = gerartoken(user)
            res.status(200).send({ token })
        } catch (error) {
            console.log(error);
            res.status(500).send({mensagem: 'ERROR no servidor!'})
        }

    }
}
