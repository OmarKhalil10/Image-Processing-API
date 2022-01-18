import express from 'express';
import images from './api/images';
import listAllImages from './api/listAllImages';

const routes = express.Router();

routes.use('/listAllImages', listAllImages);
routes.use('/images', images);

export default routes;
