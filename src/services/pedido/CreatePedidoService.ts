import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface PedidoRequest{
    pay: number;
   
    
    

}

class CreatePedidoService{
    async execute({pay}:PedidoRequest){
        
       
const teste = await prismaClient.pedido
        const pedido = await prismaClient.pedido.create({
            data:{
               pay:pay,
            
            },
            select:{
                id: true,
                
               
            }
        })
        return{pedido}
    }
}
export{CreatePedidoService}