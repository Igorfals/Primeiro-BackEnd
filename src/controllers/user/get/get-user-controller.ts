import { UserConection } from '../../../database/user-conection'
const service = new UserConection()

export class GetUserController {

    async getUsers(req: any, res: any) {
        const usuarios = await service.getUsers()
        res.send(usuarios)
    }
}