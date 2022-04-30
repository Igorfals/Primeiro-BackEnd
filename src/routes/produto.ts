import { Router } from "express";
import { GetProdutoController } from '../controllers/produto/get/get-produto-controller'
import { AddProdutocontroller } from '../controllers/produto/add/add-produto-controller'
import { UpdateProdutoController } from '../controllers/produto/update/update-produto-controller'
import { DeleteProdutoController } from '../controllers/produto/delete/delete-produto-controller'
import {validacao} from '../helpers/auth'

const getprodutocontroller = new GetProdutoController()
const addprodutocontroller = new AddProdutocontroller()
const updateprodutocontroller = new UpdateProdutoController()
const deleteprodutocontroller = new DeleteProdutoController()

const route = Router()

route.get('/produtos', validacao, getprodutocontroller.getProdutos)
route.post('/produtos', validacao, addprodutocontroller.addProduto)
route.put('/produtos/:id', validacao, updateprodutocontroller.UpdateProduto)
route.delete('/produtos/:id', validacao, deleteprodutocontroller.DeleteProduto)

export default route