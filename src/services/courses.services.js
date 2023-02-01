const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const Videos = require("../models/videos.models");


class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw(error);
        }
    };

 static async create (course){
    try {
        const result = await Courses.create(course);
        return result
    } catch (error) {
        throw(error);
    }
 };

 static async update (id, description){
    try {
        const result = await Courses.update(id, description )
        return result;
    } catch (error) {
        throw(error);
    }
 };

 static async getWithCV (id){
    try {
        const result = await Courses.findOne({
            where:{id},
            attributes:{
                exclude:["id"]
            },
            include:{ 
                model: Categories,
                as:"cursos",
                attributes:["name"],
                include:{
                model: Videos,
                as:"categorys",
                attributes:["title","url"]
            },
            },
            

        })
        return result
    } catch (error) {
        throw(error);
    }
   }
 };
 


 module.exports = CoursesServices;