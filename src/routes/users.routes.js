const { Router } = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    getUsersWithC,
} = require("../CONTROLLERS/users.controllers");

const router = Router();
//-----usuarios
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById)
router.post('/users', createUser);
router.put('/users/:id', updateUser);
//-----obtener a un usuario junto con los cursos
router.get('/users/:id/courses', getUsersWithC);


module.exports = router;