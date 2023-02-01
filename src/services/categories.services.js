const Categories = require('../models/categories.models');

 class CategoriesServices {
    
    static async getAll() {
        try {
            const result = await Categories.findAll();
            return result;
        } catch (error) {
            throw(error);
        }
    };
    
 static async create (category){
    try {
        const result = await Categories.create(category);
        return result
    } catch (error) {
        throw(error);
    }
 };

static async delete (id){
    try {
        const result = await Categories.destroy(id)
    } catch (error) {
        throw(error);
    }
};

   static async getWithC (id){
    try {
        const result = await Categories.findOne({
            where:{id},
            attributes:["firstName","lastName","email"],
            include:{ 
                model: userCourses,
                as:"user_courses",
                attributes:["id"],
                include:{
                    model:Courses,
                    as:"courses"

                },
            },
        })
        return result
    } catch (error) {
        throw(error);
    }
   }
 };
 


 module.exports = CategoriesServices;