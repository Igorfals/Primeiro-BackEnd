import { Router } from "express";
import { AddUserController } from '../controllers/user/add/add-user-controller'
import { GetUserController } from '../controllers/user/get/get-user-controller'
import { UpdateUserController } from '../controllers/user/update/update-user-controller'
import { DeleteUserController } from '../controllers/user/delete/delete-user-controller'
import { LoginController } from '../controllers/user/login/login-controller'
import { validacao } from "../helpers/auth";

const logincontroller = new LoginController()
const getusercontroller = new GetUserController()
const addusercontroller = new AddUserController()
const updateusercontroller = new UpdateUserController()
const deleteusercontroller = new DeleteUserController()
const route = Router()

route.get('/usuarios', getusercontroller.getUsers)
route.post('/usuarios', addusercontroller.addUser)
route.post('/login', logincontroller.login)
route.put('/usuarios/:id', validacao, updateusercontroller.updateUser)
route.delete('/usuarios/:id', validacao, deleteusercontroller.deleteUser)


export default route

