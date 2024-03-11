import { Schema, model } from 'mongoose'
import { Movie, MovieModel } from '../types/movie.type'

//tabla de peliculas
const Movies = new Schema <Movie, MovieModel>({
    name: { 
        type: String,
        required: true,
        unnique: true,
        trim: true
    },
    gender: {
        /*type: String,
        require: true,
        trim:
         Ver como se hace la llave foranea  */ 
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    }
})

export default model('Movie', Movies)