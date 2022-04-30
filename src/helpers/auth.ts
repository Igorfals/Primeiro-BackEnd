import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export function validacao(req: Request,  res: Response, next: NextFunction) {
    const token: any = req.headers['x-access-token']
    if (!token) {
        return res.status(401).send({ mensagem: 'Usuario não autorizado' })
    }
    else {
        jwt.verify(token,'ahasdhçasdgsvosdSADVASD', function(error: any, decode: any){
            if (error) {
                return res.status(401).send({ mensagem: 'Usuario não autorizado' })
            }
            next()
        })
    }
    //return res.status(401).send({ mensagem: 'Usuario não autorizado' })
}
export function gerartoken(usertoken: any) {
    return jwt.sign({usertoken},'ahasdhçasdgsvosdSADVASD')
}