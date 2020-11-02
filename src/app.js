import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // chamamos os middlewares e as routes para dentro da aplicação.
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // assim, nossa app está pronta para receber as rotas da aplicação.
    this.server.use(express.json());
  }

  routes() {
    // Importamos as rotas de outro arquivo.
    this.server.use(routes);
  }
}
export default new App().server;
