import express from 'express';
import YoutubeController from '../controllers/youtube.controller';



const router = express.Router();

router.get('/', YoutubeController.getYoutubeVideos);

export default router;