import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';
import DesafiosController from './app/controllers/DesafiosController';
import PostsController from './app/controllers/PostsController';
import SeedsController from './app/controllers/SeedsController';
import TrilhasController from './app/controllers/TrilhasController';

const routes = new Router();

routes.get('/Projetos', ProjetosController.index);
routes.get('/Desafios', DesafiosController.index);
routes.get('/Posts', PostsController.index);
routes.get('/Seeds', SeedsController.index);
routes.get('/trilhas', TrilhasController.index);

export default routes;
