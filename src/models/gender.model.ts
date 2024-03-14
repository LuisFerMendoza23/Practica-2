//Se crea aqui como tabla o coleccion 
import { Schema, model } from 'mongoose' 
import { Gender, GenderModel } from '../types/gender.type'
import { USER_REFERENCE } from './user.model'

export const GENDER_REFERENCE = 'Gender'
//Tabla de categorias
const Genders = new Schema <Gender, GenderModel>({
    gender: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true, //le quita los espacios al principio y al final
    },
    user: { //Foreign key
        type: Schema.Types.ObjectId,
        ref: USER_REFERENCE
    }
})

export default model(GENDER_REFERENCE, Genders) 