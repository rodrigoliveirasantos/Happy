import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import Orphanage from './models/Orphanage';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

//MVC -> Arquitetura 

// Model
// View
// Controllers


routes.get('/orphanages/:id', OrphanagesController.show);
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;