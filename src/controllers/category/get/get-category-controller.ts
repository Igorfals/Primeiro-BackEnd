import { Request, Response } from 'express'
import { CategoryConection } from '../../../database/category-conection'
const service = new CategoryConection()

export class GetCategoryController {
    async getCategory(req: Request, res: Response){
        const category = await service.getCategory()
        return res.send(category)
    }
}
