import express from 'express';
import mongoose from 'mongoose';
import {Gender} from './types/gender.type'
import GenderService from './services/gender.service';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler';

const MONGO_URI = 'mongodb://localhost:27017/mongo-proyecto'

const app = express();
const port = 3010;

const connectDB = () => {
    mongoose.connect(MONGO_URI)
}

const genderService = new GenderService()
app.use(express.json())
app.use(logErrors)
app.use(errorHandler)
app.use(boomErrorHandler)

app.get('/', (req, res) => {
    res.send("Bye World 222");
})

app.post('/Gender', async (req, res) => {
    const gender: Gender = req.body;
    const newGender= await genderService.create(gender)

    res.status(201).json(newGender)
})

app.get('/gender', async (req, res) => {
try{
    const genders = await genderService.findAll()
    res.status(200).json(genders)
} catch(error){
    if(error.isBoom){
        res.status(error.OUTPUT.statusCode).json(error.OUTPUT.payload)
    }
}

})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
    connectDB()
})