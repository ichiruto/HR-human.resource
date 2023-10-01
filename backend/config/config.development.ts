import { Dialect } from 'sequelize';

export const config = {
  database: {
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    port: 3306,
    username: 'rh-software',
    password: 'POWERpassword123',
    database: 'rh-mysql',
  },
  jwtPrivateKey: 'jwtPrivateKey',
};
