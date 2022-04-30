import bcrypt from 'bcrypt'
export function gerarCrypto(senha: any){
    const senhacryptografada = bcrypt.hash(senha, 10)
    return senhacryptografada

}

export function compararSenha(senha: string, senhacryptografada: string){
    return bcrypt.compare(senha, senhacryptografada)
}