class UserService {
    public verifyFields(body) {
       
        return Object.entries(body).every(([field, value]) => {
            const arrayFieldsOfTest = [
                'name',
                'profession',
                'birthdate',
                'cpf',
                'email',
                'celphone',
                'zipcode',
                'city',
                'neighborhood',
                'address',
                'number'
            ]
            if(arrayFieldsOfTest.includes(field)) {
                if(value === "") return false;
                if(value === null || value === undefined) return false;
                
                return true;
            }
            return true;
        })        
    }
}

export default new UserService;

