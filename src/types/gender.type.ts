import type {Model } from 'mongoose'

export type Gender= {
    id?: string
    gender: string
    
    //El simbolo de ? lo pone como opcional 
}

export type GenderModel = Model<Gender>