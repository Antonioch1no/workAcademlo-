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

Categories.belongsTo(Courses,{as:"cursos", foreignKey:"course_id"});
Courses.hasMany(Categories,{as:"", foreignKey:"course_id"});

Videos.belongsTo(Courses,{as:"videos", foreignKey:"course_id"});
Courses.hasMany(Videos,{as:"", foreignKey:"course_id"});

};

module.exports = initModels;