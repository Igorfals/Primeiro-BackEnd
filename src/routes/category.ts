import { Router } from "express";
import { GetCategoryController } from '../controllers/category/get/get-category-controller'
import { AddCategoryController } from '../controllers/category/add/add-category-controller'
import { UpdateCategoryController } from '../controllers/category/update/update-category-controller'
import { DeleteCategoryController } from "../controllers/category/delete/delete-category-controller";
import { validacao } from "../helpers/auth";

const getcategorycontroller = new GetCategoryController()
const addcategorycontroller = new AddCategoryController()
const updatecategorycontroller = new UpdateCategoryController()
const deletecategorycotroller = new DeleteCategoryController()

const route = Router()

route.get('/category', validacao, getcategorycontroller.getCategory)
route.post('/category', validacao, addcategorycontroller.addCategory)
route.put('/category/:id', validacao, updatecategorycontroller.UpdateCategory)
route.delete('/category/:id', validacao, deletecategorycotroller.DeleteCategory)

export default route
