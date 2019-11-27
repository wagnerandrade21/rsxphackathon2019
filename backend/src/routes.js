import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';
import DesafiosController from './app/controllers/DesafiosController';
import Posts from './app/controllers/PostsController';

const routes = new Router();

routes.get('/Projetos', ProjetosController.index);
routes.get('/Desafios', DesafiosController.index);
routes.get('/Posts', Posts.index);

export default routes;
