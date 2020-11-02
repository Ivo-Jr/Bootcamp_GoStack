// Este arquivo fará a conexão com o bando de dados e carregará os nossos MODELS:
import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // O método "init()" fará a conexão com a base de dados e carregará os MODELS:
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
