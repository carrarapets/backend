import { Request, Response } from "express";
import { DetailsPedidoService } from "../../services/pedido/DetailsPedidoService";



class DetailsPedidoController{

    async handle(req: Request, res: Response){

        const pedido_id = req.params.pedido_id
        console.log("rte"+pedido_id)


        const detailsPedidoService = new DetailsPedidoService();

        const user = await detailsPedidoService.execute(pedido_id);

        return res.json(user);
        


    }
}
export{DetailsPedidoController}