import{Request, Response} from 'express'
import{CreatePedidoService}from'../../services/pedido/CreatePedidoService'

class  CreatePedidoController{

    async handle(req: Request, res: Response){

        const {pay} = req.body;
        const createPedidoService = new CreatePedidoService();

       const pedidos =  await createPedidoService.execute({
          pay
       });
        return res.json({pedidos})
    }
}
export{CreatePedidoController}