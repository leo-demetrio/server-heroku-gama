class UserResponses {
    public static responsePostUsers(user) {
        if(user.flag) {
           this.responsePostNotCreated(user);
        }
        return  [{
            message: "Usuário criado com sucesso!!",
            _id: user._id,
            name: user.name
        }];
    }
    public static responsePostNotCreated(user) {
        return  [{
            message: "Usuário não pôde ser criado com sucesso!!",
            _id: user._id,
            name: user.name
        }];
    }
}
export default UserResponses;