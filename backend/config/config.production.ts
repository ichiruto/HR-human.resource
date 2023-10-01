import { Dialect } from 'sequelize';

export const config = {
  database: {
    dialect: 'mysql' as Dialect,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
  },
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
