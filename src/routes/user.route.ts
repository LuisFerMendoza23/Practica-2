import express from "express";
import { User, UserModel } from '../types/user.type'
import passport from 'passport'

import UserService from '../services/user.service'
import boom from '@hapi/boom'

const router = express.Router();
const service = new UserService();

router.post(
  '/',
  passport.authenticate('jwt', {session: false}), 
  async (req, res, next) => {
    try{
        //TODO: Validate user data coming from the request
        const user: User = req.body
        const newUser = await service.create(user)
        res.status(201).json({ user: newUser.toClient() })
    } catch(error){
        next(error)
    }
})

router.get(
  '/all', 
  passport.authenticate('jwt', {session: false}),
  async ( req, res, next) =>{
  try{
    const users = await service.findAll()
    res.status(200).json(users)
  } catch(error){
    console.log(error)
    next(error)
  }
})

  router.get(
    '/:email',
    passport.authenticate('jwt', {session: false}),
     async (req, res, next) => {
    try {
      //const { email } = req.query
      //const user = await service.findByEmail(email as string)
      const user = await service.findByEmail(req.params.email)
      console.log({ user })
  
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  })

  router.get(
    '/id/:id', 
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) => {
    try{
      //const { id } = req.query
      const user = await service.findById(req.params.id)
      res.status(200).json(user)
    } catch(error){
      next(error)
    }
  })

  router.get(
    '/name/:name', 
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) => {
    try{
      const { name } = req.query
      //const user = await service.findByName(name as String)
      const user = await service.findByName(req.params.name)
      console.log({ user })
      res.status(200).json({  user })
    } catch(error){
      next(error)
    }
  })


export default router

