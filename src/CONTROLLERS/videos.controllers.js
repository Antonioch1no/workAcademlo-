const VideosServices = require("../services/videos.services");



const getAllVideos = async (req, res) => {
    try {
        const result = await VideosServices.getAll();
        res.status(200).json(result);
        } catch (error) {
          res.status(400).json(error.message);
        }
};

const createVideo = async(req, res) => {
    try {
        const newVideo = req.body;
        const result = await VideosServices.create(newVideo);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
 
};

const deleteVideo = async(req, res) => {
try {
    const {id} = req.params;
    const result = await VideosServices.delete({
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
    getAllVideos,
    createVideo,
    deleteVideo,
    
}
