import prismaClient from '../../prisma'

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){
        
        //tratamento do email
        if (!email) {
            throw new Error("Email incorreto")
        }
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Email cadastrado")
        }

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            },
            select:{
                id: true,
                name: true,
                password: true,
            }
        })
        return{user}
    }
}
export{CreateUserService}