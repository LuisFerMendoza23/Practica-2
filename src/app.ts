import express from 'express';
import mongoose from 'mongoose';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler';
import routerApi from './routes'
import { config } from './config/config'
import passport from 'passport' 
import './utils/auth'
import cors from 'cors'

const {mongoUri, port} = config 



const connectDB = () => {
    mongoose.connect(mongoUri)
}

const app = express();
app.use(express.json())
app.use(cors())
//app.use(cors());
routerApi(app)
app.use(passport.initialize())

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
    connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
