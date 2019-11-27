import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';
import DesafiosController from './app/controllers/DesafiosController';
import TrilhasController from './app/controllers/TrilhasController';
import Posts from './app/controllers/PostsController';

const routes = new Router();

routes.get('/Projetos', ProjetosController.index);
routes.get('/Desafios', DesafiosController.index);
routes.get('/Posts', Posts.index);
routes.get('/trilhas', TrilhasController.index);

export default routes;
