
import express from 'express';
import youtubeRoute from './youtube';



const Router = express.Router();
Router.use('/youtube', youtubeRoute);





export default Router;