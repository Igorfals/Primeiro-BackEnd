import { Router } from "express";
import { AddUserController } from '../controllers/user/add/add-user-controller'
import { GetUserController } from '../controllers/user/get/get-user-controller'
import { UpdateUserController } from '../controllers/user/update/update-user-controller'
import { DeleteUserController } from '../controllers/user/delete/delete-user-controller'

const getusercontroller = new GetUserController()
const addusercontroller = new AddUserController()
const updateusercontroller = new UpdateUserController()
const deleteusercontroller = new DeleteUserController()
const route = Router()

route.get('/usuarios', getusercontroller.getUsers)
route.post('/usuarios', addusercontroller.addUser)
route.put('/usuarios/:id', updateusercontroller.updateUser)
route.delete('/usuarios/:id', deleteusercontroller.deleteUser)

export default route

