import type {Model } from 'mongoose'

export type Category = {
    id?: string
    name: string
    description?: string
    //El simbolo de ? lo pone como opcional 
}

export type CategoryModel = Model<Category>