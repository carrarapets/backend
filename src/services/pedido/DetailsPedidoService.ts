import prismaClient from "../../prisma";

class DetailsPedidoService{
    async execute(pedido_id: string){
        
        const pedido = await prismaClient.pedido.findUnique({
            
            where:{
                id:pedido_id
            }, 
            select:{
                id: true,
                pay: true

            }
        })

        return{pedido}
    }
}
export { DetailsPedidoService}