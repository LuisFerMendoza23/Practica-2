import  express  from "express";
import MovieService from '../services/movie.service'
import { Movie } from "../types/movie.type";
import passport from 'passport'
import { JwtRequestType } from "../types/user.type";
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new MovieService()



    router.post(
        '/',
        passport.authenticate('jwt', {session: false}),
        async (req, res, next) => {
            try{
                const movie: Movie = req.body
                const newMovie = await service.create(movie)
                res.status(201).json(newMovie)
            } catch (error) {
                next(error)
            }
        }
    )

    router.get(
        '/all',
        passport.authenticate('jwt', {session: false}),
        async ( req, res, next) =>{
        try{
            const movies = await service.findAll()
            res.status(200).json(movies)
        } catch(error){
            console.log(error)
            next(error)
        }
    })


    router.get(
        '/:id',
        passport.authenticate('jwt', {session: false}),
        async (req, res, next) => {
        try{
            //const { id } = req.body
            const movie = await service.findById(req.params.id)
            res.status(200).json({movie})
        } catch(error){
            next(error)
        }
        }
    )
    
    router.get(
        "/name/:name",
        passport.authenticate('jwt', {session: false}),
        async (req, res, next) => {
        try{
            const { name } = req.query
            const movie = await service.findByName(req.params.name)
            res.status(200).json({movie})
        } catch(error){
            next(error)
        }
        }
    )

    router.get(
        "/director/:director",
        passport.authenticate('jwt', {session: false}),
        async (req, res, next) => {
        try{
            const { director} = req.query
            const movie = await service.findByDirector(req.params.director)
            res.status(200).json({movie})
        } catch (error) {
            next(error)
        }
        }
    )

    router.get("/findSecondMovie", async (req, res, next) =>  {
        try{
            const findMovie = await service.findSecondMovie()
            res.status(200).json(findMovie)
        } catch (error) {
            next(error)
        }
    })
    
    

    export default router