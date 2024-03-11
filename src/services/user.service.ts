import Users from '../models/user.model'
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'

class UserService{
    async create(user: User) { 
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await Users.create({
            ...user,
            password: hashedPassword 
        }).catch((error) => {
            console.log('Could not save user', error)
        })

        if(!newUser){
            throw boom.badRequest('Could not create User')
        }
        
        // delete (newUser as unknown as User).password
        // return newUser
        const new_User = newUser.toJSON();
        delete new_User.password;
        return new_User
    
    }    

    //Encontrar a todos
    async findAll(){
        const user = await Users.find().catch((error) => {
            console.log('Error while connecting to the DB, findAll', error)
        })

        if(!user){
            throw boom.notFound('User not found')
        }
        return user
    }

    async findById(id: string){
        const user = await Users.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        } )

        if(!user){
            throw boom.notFound('Gender not found');
        }

        return user
    }

    async findByName(name: String){
        const user = await Users.findOne({name}).catch((error)=>{
            console.log('Error while connecting to the DB, findName', error)
        })

        if(!user){
            throw boom.notFound('User not found: name')
        }
        return user
    }
        
    async findByEmail(email: String) {
        const user = await Users.findOne({email}).catch((error) =>{
            console.log('Could not retrieve user info', error)

        })
        if(!user){
            throw boom.notFound('User not found')
        }
        const new_User = user.toJSON();
        delete new_User.password;
        return new_User;
    }

    async findByPhone(phone: String){
        const user = await Users.findOne({phone}).catch((error)=>{
            console.log('Error while connecting to the DB, phone', error)
        })
        if(!user){
            throw boom.notFound('User phone not found')
        }
        return user
    }

    
    
    
}

export default UserService
