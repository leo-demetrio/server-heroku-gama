import { Request, Response } from "express";
import userRepository from "../repositories/userRepository";
import userResponse from "../responses/userResponses";
import UserService from "../services/userService";


class UserController {
    public async reg(req: Request, res: Response): Promise<Response> {
        try{  
            const verification = UserService.verifyFields(req.body);
            if(!verification) return  res.status(409).json(userResponse.responsePostNotCreated(req.body));
            const consultCPF = await userRepository.findOneCPF(req.body.cpf);
            if(consultCPF) return res.status(409).json(userResponse.responsePostNotCreated(req.body));
            const user =  await userRepository.createUser(req.body);
            return res.json(userResponse.responsePostUsers(user));
        }catch (e) {
            console.log("Erro na controller", e);
            return res.status(409).json(userResponse.responsePostNotCreated(req.body))
        }
    }
}

export default new UserController();