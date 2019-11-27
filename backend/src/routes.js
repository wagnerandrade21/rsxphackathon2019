import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';
import DesafiosController from './app/controllers/DesafiosController';

const routes = new Router();

routes.post('/', (req, res) => {
  return res.json({ mensagem: 'Cia Sistemas' });
});

routes.get('/Projetos', ProjetosController.index);
routes.get('/Desafios', DesafiosController.index);

export default routes;
