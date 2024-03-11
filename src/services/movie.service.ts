import Movies from '../models/movie.model'
import { Movie, MovieModel } from '../types/movie.type'
import boom from '@hapi/boom'

class MovieService{
    async create(movie: Movie){
        const newMovie = await Movies.create(movie).catch((error)=>{
            console.log('Could not save movie', error)
        })
        return newMovie
    }
    async findAll(){
        const movies = await Movies.find().catch((error)=>{
            console.log('Error while connecting to the DB', error)
        })
        if(!movies){
            throw boom.notFound('There is not movies')
        }
        return movies
    }

    async findById(id: String){
        const movie = await Movies.findById(id).catch((error)=>{
            console.log('Error while connecting to the DB', error)
        })
        if(movie){
            throw boom.notFound('Movie not found, byId')
        }
        return movie
    }

    
    
}
