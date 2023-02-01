const { Router } = require('express');
const {
    getAllCourses,
    createCourse,
    updateCourse,
    getcoursesWithCV,
    
} = require("../CONTROLLERS/courses.controllers");

const router = Router();
//-----courses
router.get('/courses', getAllCourses);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
//-----obtener a un curso junto con los categorias y videos
router.get('/courses/:id/category', getcoursesWithCV);


module.exports = router;