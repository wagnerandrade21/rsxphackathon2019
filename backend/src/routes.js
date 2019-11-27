import { Router } from 'express';
import ProjetosController from './app/controllers/ProjetosController';

const routes = new Router();

routes.post('/', (req, res) => {
  return res.json({ mensagem: 'Cia Sistemas' });
});

routes.get('/Projetos', ProjetosController.index);

export default routes;
