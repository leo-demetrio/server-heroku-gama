import user_models from "../models/user_models";

class UserRepository {
    private userModel;

    constructor(user_models) {
        this.userModel = user_models;
    }
    public async createUser(body) {
        try{
            body.cpf = body.cpf?.replace(/[^0-9]/g,'');        
            // console.log(body);
            // return;
            const user = await this.userModel.create(body);
            return user;
        }catch(e){
            console.log("Erro na classe UserRepositoy" + e)
            body.flag = true;
            return body;
        }
     
    }
    public async listAll() {
        try{
            const allUser = await this.userModel.find();
            return allUser;
        }catch(e){
            console.log(e)
        }
     
    }
    public async findOneCPF(dataCPF) {
        try{
            const cpf = dataCPF?.replace(/[^0-9]/g,'');
            const result = await user_models.findOne({cpf});
            if(result === null || result === undefined)  return false;
            // console.log(cpf);
            // console.log(result);
            // return;
            return result;
        }catch(e){
            console.log(e)
        }
     
    }
}

export default new UserRepository(user_models);