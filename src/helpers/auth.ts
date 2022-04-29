export function validacao(req: any, res: any){
    return res.status(401).send({mensagem: 'Usuario não autorizado'})
}