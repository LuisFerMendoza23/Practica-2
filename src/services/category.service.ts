import Categories from "../models/category.model";
import { Category, CategoryModel } from "../types/category.type";
import boom from '@hapi/boom'

class CategoryService {
    async create(category: Category){
        //Agregar categorias nuevas, detecta error y logea
        const newCategory = await Categories.create(category).catch((error) => {
            console.log('Could not save category', error)
        })
        return newCategory
    }

    async findAll() {
        //Encuentra todas las categorias, si encuentra error lo loggeamos
        const categories = await Categories.find().catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!categories){
            throw boom.notFound('There are not categories')
        }

        return categories
    }
}

export default CategoryService