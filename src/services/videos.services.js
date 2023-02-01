
const Videos = require('../models/videos.models');

 class VideosServices {
    
    static async getAll() {
        try {
            const result = await Videos.findAll();
            return result;
        } catch (error) {
            throw(error);
        }
    };
    
 static async create (video){
    try {
        const result = await Videos.create(video);
        return result
    } catch (error) {
        throw(error);
    }
 };

static async delete (id){
    try {
        const result = await Videos.destroy(id)
    } catch (error) {
        throw(error);
    }
};

   static async getWithC (id){
    try {
        const result = await Videos.findOne({
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
 


 module.exports = VideosServices;