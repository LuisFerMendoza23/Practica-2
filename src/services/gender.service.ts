import Genders from '../models/gender.model'
import { Gender, GenderModel } from '../types/gender.type'
import boom from '@hapi/boom'

class GenderService{
    async create(gender: Gender){
//Agregar categorias nuevas, detecta error y logea
        const newGender = await Genders.create(gender).catch((error) => {
            console.log('Could not save gender', error)
        })
        return newGender
    }

    async findAll() {

        //Encuentra todas las categorias, si encuentra error lo loggeamos
        const genders = await Genders.find().catch((error) => {
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
  