const CoursesServices = require("../services/courses.services");


const getAllCourses = async (req, res) => {
    try {
        const result = await CoursesServices.getAll();
        res.status(200).json(result);
        } catch (error) {
          res.status(400).json(error.message);
        }
};


const createCourse = async(req, res) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.create(newCourse);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
 
};

const updateCourse = async(req, res) => {
try {
    const {id} = req.params;
    const {title} = req.body;
    const result = await CoursesServices.update({description},{
        where:{id}
    });
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message);
}

};

const getcoursesWithCV = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await CoursesServices.getWithCV(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    getcoursesWithCV,
}
