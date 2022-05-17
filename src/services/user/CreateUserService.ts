import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UserRequest{
    name: string;
    email: string;
    cpf: string;
    rg: string;
    password: string;
    
    

}

class CreateUserService{
    async execute({name, email, password, cpf, rg}:UserRequest){
        
        //tratamento do email
        if (!email) {
            throw new Error("Email incorreto ")
        }
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Email cadastrado")
        }
        if(!cpf){
            
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                cpf: cpf,
                rg: rg
                
            
            },
            select:{
                id: true,
                name: true,
               
            }
        })
        return{user}
    }
}
export{CreateUserService}