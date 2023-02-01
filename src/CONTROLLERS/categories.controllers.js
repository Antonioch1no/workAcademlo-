const CategoriesServices = require("../services/categories.services");



const getAllCategories = async (req, res) => {
    try {
        const result = await CategoriesServices.getAll();
        res.status(200).json(result);
        } catch (error) {
          res.status(400).json(error.message);
        }
};

const createCategory = async(req, res) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.create(newCategory);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
 
};

const deleteCategory = async(req, res) => {
try {
    const {id} = req.params;
    const result = await CategoriesServices.delete({
        where:{id}
    });
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message);
}

};

const getUsersWithC = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getWithC(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    
}