const userCourses = require('../models/userCourses.model');
const Users = require('../models/users.models');

 class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw(error);
        }
    };

    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw(error)
        }
    };
 static async create (user){
    try {
        const result = await Users.create(user);
        return result
    } catch (error) {
        throw(error);
    }
 };

 static async update (id, firstName, password){
    try {
        const result = await Users.update(id, firstName, password )
        return result;
    } catch (error) {
        throw(error);
    }
 };

   static async getWithC (id){
    try {
        const result = await Users.findOne({
            where:{id},
            attributes:["firstName","lastName","email"],
            include:{ 
                model: userCourses,
                as:"user_courses",
            }
        })
        return result
    } catch (error) {
        throw(error);
    }
   }
 };


 module.exports = UserServices;