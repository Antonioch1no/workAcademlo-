const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.model");

const users = [
    {firstName:"antono", lastName:"chinbo", email:"jesis.chino0gg7@gmail.com", password:"nbgbgccocnec"},
    {firstName:"antonod", lastName:"chiscgfno", email:"jesis.chbino07@gmail.com", password:"nccnresocnec"},
    {firstName:"antonddo", lastName:"chiscscno", email:"jesis.chino07@gmail.com", password:"nccoaacnec"},
];
const courses = [
    {title:"dfd2", description:"videos1", instructor:"adam", },
    {title:"dfds", description:"videos2", instructor:"adam", },
    {title:"dfd", description:"videos3", instructor:"adam"},
];
const userCourses = [
    {userId:1, courseId:1},
    {userId:2, courseId:1},
    {userId:2, courseId:2},
    {userId:3, courseId:2},
    {userId:3, courseId:2},
];
const categories = [{}];
const videos = [{}]; 

db.sync({force:true})
.then(() => {
    console.log("iniciando el sembradio");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
    }, 2000)
    setTimeout(() => {
        userCourses.forEach((us) => UserCourses.create(us));
        }, 3000)
}) .catch((error) => console.log(error))