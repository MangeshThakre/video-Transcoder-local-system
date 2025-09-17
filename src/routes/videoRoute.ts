import express from 'express';
import multerConfig from "./../config/multerConfig.ts";
const videoRouter = express.Router();
const upload = multerConfig

// controller functions 
import { video } from '../controller/videoController.ts';

// routes
videoRouter.post('/videoUpload',upload.single("video") ,video);

export default videoRouter;
