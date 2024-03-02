import express from 'express'
import GenderService from '../services/gender.service';
import {Gender} from '../types/gender.type'
import passport from 'passport'
import  { UserRequestType } from '../types/user.type';

const router = express.Router()
const service = new GenderService() 

router.post(
    '/', 
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const gender: Gender = req.body;
        const newGender= await service.create(gender)
 
        res.status(201).json(newGender)
    }
)

router.get('/', 
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

router.get('/:name',
    passport.authenticate('jwt', {session: false}),
    async(req, res, next) => {
    try{
       const gender = await service.findById(req.query.name as string)
       res.status(200).json(gender)
    } catch(error) {
        next(error)
    }
})


})

export default router