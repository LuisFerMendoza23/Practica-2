import type { Model } from 'mongoose'

export type Movie = {
    id?: String
    name: String
    gender: String 
    director: String
    duration: String

}

export type MovieModel = Model<Movie> 