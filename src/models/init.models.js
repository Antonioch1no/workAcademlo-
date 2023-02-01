const Categories = require("./categories.models");
const Courses = require("./courses.models");
const userCourses = require("./userCourses.model");
const Users = require("./users.models");
const Videos = require("./videos.models");


const initModels = () => {
  

//M2M users y courses

userCourses.belongsTo(Users, {as:"author", foreignKey:"user_id" });
Users.hasMany(userCourses, {as:"user_courses", foreignKey:"user_id"});

userCourses.belongsTo(Courses,{as:"courses", foreignKey:"course_id"});
Courses.hasMany(userCourses,{as:"user_course", foreignKey:"course_id"});

Categories.belongsTo(Courses,{as:"curso", foreignKey:"course_id"});
Courses.hasMany(Categories,{as:"cursos", foreignKey:"course_id"});

Videos.belongsTo(Courses,{as:"video", foreignKey:"course_id"});
Courses.hasMany(Videos,{as:"videos", foreignKey:"course_id"});

Videos.belongsTo(Categories, {as:"category", foreignKey:"categories_id"});
Categories.hasMany(Videos,{as:"categorys", foreignKey:"categories_id"});

};

module.exports = initModels;