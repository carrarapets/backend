import{Request, response, Response} from 'express'
import{UpdateUserService}from'../../services/user/UpdateUserService'

class  UpdateUserController{

    async handle(req: Request, res: Response){

        const {id,name, email, password, rg, cpf} = req.body;
        const updateUserService = new UpdateUserService();

       const user =  await updateUserService.execute({
           id,
          name,
          email,
          password,
          rg,
          cpf
       });
        return res.json({user})
    }
}
export{UpdateUserController}