import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Ivo Junior',
    email: 'maciel.jr95@gmail.com',
    password_hash: '123456780',
  });

  response.json(user);
});

export default routes;
