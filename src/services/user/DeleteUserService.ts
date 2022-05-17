import prismaClient from "../../prisma";


interface OrderRequest{
    id: string;
}


class DeleteUserService{

    async execute({id}:OrderRequest){


        const userT = await prismaClient.user.delete({
            where:{

                id: String(id)

            }
        })
        

        return userT;
    }
}

export{DeleteUserService}