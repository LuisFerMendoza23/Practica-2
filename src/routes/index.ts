import express from 'express'
import GenderRouter from './gender.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/gender', GenderRouter)
}

export default routerApi