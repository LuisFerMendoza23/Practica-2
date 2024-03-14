import express from 'express'
import GenderService from '../services/gender.service';
import {Gender} from '../types/gender.type'
import passport from 'passport'
import  { JwtRequestType, UserRequestType  } from '../types/user.type';
import { ObjectId } from 'mongoose';

const router = express.Router()
const service = new GenderService() 

router.post(
    '/', 
    passport.authenticate('jwt', {session: false}),
    async (req: JwtRequestType, res) => {
        //const sub = req.user.sub
        const { user: {sub} } = req 
        console.log('sub', sub)
        const gender: Gender = req.body;
        //Se manda tanto genero como el usuario
        const newGender= await service.create(
            gender,
             sub as unknown as ObjectId
            )
    
        res.status(201).json(newGender)
    }
)

router.get('/all', 
    passport.authenticate('jwt', {session: false}),
    async (req: UserRequestType, res, next) => {
    try{
        const {user} = req
        console.log(user)
        const genders = await service.findAll()
        res.status(200).json(genders)
    } catch(error){
       console.log(error)
        next(error)
}

router.get('/:id',
    passport.authenticate('jwt', {session: false}),
    async(req, res, next) => {
    
    try{
       const gender = await service.findById(req.params.id)
       res.status(200).json(gender)
    } catch(error) {
        next(error)
    }
})

router.get('/gender/:gender',
    passport.authenticate('jwt', {session: false}),
    async(req, res, next) => {
    try{
        const gender = await service.findByGender(req.params.gender as string)
        res.status(200).json(gender)
    } catch(error) {
        next(error)
    }
}) 
/*
router.get('/',
    passport.authenticate('jwt', {session: false}),
    async(req, res, next) => {
    try{
        const { name } = req.query
       const gender = await service.findByName(name as string)
       res.status(200).json(gender)
    } catch(error) {
        next(error)
    }

}) */



})

export default router