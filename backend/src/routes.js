import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';
import DesafiosController from './app/controllers/DesafiosController';
import PostsController from './app/controllers/PostsController';
import SeedsController from './app/controllers/SeedsController';

const routes = new Router();

routes.get('/Projetos', ProjetosController.index);
routes.get('/Desafios', DesafiosController.index);
routes.get('/Posts', PostsController.index);
routes.get('/Seeds', SeedsController.index);

export default routes;
