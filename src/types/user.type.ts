import type {Model} from 'mongoose'
import type { Request } from 'express'

export type User = {
    id?: String
    name: String
    email: String
    password: String
    phoneNumber: String
    createdAt?: Date
    lastModified?: Date
}

export type UserRequestType = Request & {
    user: User
}

export type UserModel = Model<User>