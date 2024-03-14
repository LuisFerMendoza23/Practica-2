import type {Model } from 'mongoose'
import { User } from './user.type'

export type Gender= {
    id?: string
    gender: string
    user: User
    
    //El simbolo de ? lo pone como opcional 
}

export type GenderModel = Model<Gender>