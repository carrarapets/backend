import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UserRequest{
    pay: BigInteger;
   
    
    

}

class CreatePedidoService{
    async execute({pay}:UserRequest){
        
       

        const pedido = await prismaClient.pedido({
            data:{
                pay: pay,
            
            },
            select:{
                id: true,
                
               
            }
        })
        return{pedido}
    }
}
export{CreatePedidoService}