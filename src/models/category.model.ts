//Se crea aqui como tabla o coleccion 
import { Schema, model } from 'mongoose' 
import { Category, CategoryModel } from '../types/category.type'

//Tabla de categorias
const Categories = new Schema <Category, CategoryModel>({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true, //le quita los espacios al principio y al final
    },
    description: {
        type: String,
        required: false,
        trim: true, //le quita los espacios al principio y al final
    }
})

export default model('Category', Categories)