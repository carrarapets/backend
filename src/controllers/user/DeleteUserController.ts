import { Request,Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";



class DeleteUserController{

    async handle( req: Request, res: Response){
        const id = req.query.id_user as string;


        const removeUser = new DeleteUserService();

        const user =  await removeUser.execute({
            id
        });

        return res.json(user);
    }

}
export{DeleteUserController}