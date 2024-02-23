//Se crea aqui como tabla o coleccion 
import { Schema, model } from 'mongoose' 
import { Gender, GenderModel } from '../types/gender.type'

//Tabla de categorias
const Genders = new Schema <Gender, GenderModel>({
    gender: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true, //le quita los espacios al principio y al final
    },
    nameM: {
        type: String,
        required: true,
        unique: true,
        trim: true, //le quita los espacios al principio y al final
    }
})

export default model('Gender', Genders)