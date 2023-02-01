const { Router } = require('express');
const {
    getAllCategories,
    createCategory,
    deleteCategory,
    
} = require("../CONTROLLERS/categories.controllers");

const router = Router();

router.get('/category', getAllCategories);
router.post('/category', createCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;