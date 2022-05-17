import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UserRequest{
    id: string;
    name: string;
    email: string;
    cpf: string;
    rg: string;
    password: string;
    
    

}

class UpdateUserService{
    async execute({id,name, email, password, cpf, rg}:UserRequest){
        
        

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.update({
            where:{ id,

            },
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
export{UpdateUserService}