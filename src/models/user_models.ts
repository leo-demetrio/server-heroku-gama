import { Schema, model, Document  } from "mongoose";
import { UserInterface } from "../interfaces/userInterface";


interface UserModel extends UserInterface, Document {}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: false
    },
    profession: {
        type: String,
        required: false
    },
    birthdate: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    fixedline1: {
        type: String,
        required: false
    },
    fixedline2: {
        type: String,
        required: false
    },
    celphone: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    },
    neighborhood: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    sex: {
        type: String,
        required: false
    }    
});


export default model<UserModel>('User', UserSchema);