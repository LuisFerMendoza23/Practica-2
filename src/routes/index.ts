import express from 'express'
import GenderRouter from './gender.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/gender', GenderRouter)
  router.use('/users', UserRouter)
  router.use('/auth', AuthRouter)
}

export default routerApi