import { ObjectId } from 'mongoose'
import Genders from '../models/gender.model'
import { Gender, GenderModel } from '../types/gender.type'
import boom from '@hapi/boom'
import { USER_REFERENCE } from '../models/user.model'

class GenderService{
    async create(gender: Gender, userId: ObjectId){
//Agregar categorias nuevas, detecta error y logea
        const newGender = await Genders.create({
            ...gender, 
            user: userId
        }).catch((error) => {
            console.log('Could not save gender', error)
        })

        const existingGender = await this.findById((newGender as any)._id);

        return existingGender.populate([{path: 'user', strictPopulate: false}])
    }

    async findAll() {

        //Encuentra todas las categorias, si encuentra error lo loggeamos
        const genders = await Genders.find()
            .populate([{ path: 'user', strictPopulate: false}])
            .catch((error) => {
                console.log('Error while connecting to the DB', error)
        })

        if(!genders){
            throw boom.notFound('There are not categories')
        }

        return genders
    }

    async findById(id: string){
        const gender = await Genders.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        } )

        if(!gender){
            throw boom.notFound('Gender not found, byId');
        }

        return gender
    }

    async findByGender(gender: String){
        const result = await Genders.findOne({gender}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        } )

        if(!result){
            throw boom.notFound('Gender not found, byName');
        }
        return result
    }
}

export default GenderService
  