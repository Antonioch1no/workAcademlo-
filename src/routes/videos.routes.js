const { Router } = require('express');
const {
    getAllVideos,
    createVideo,
    deleteVideo,
    
} = require("../CONTROLLERS/videos.controllers");

const router = Router();
//-----usuarios
router.get('/videos', getAllVideos);
router.post('/videos', createVideo);
router.delete('/videos/:id', deleteVideo);




module.exports = router;