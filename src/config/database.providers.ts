import { Sequelize } from 'sequelize';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        // TODO: fix this later
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'rh-software',
        password: 'POWERpassword123',
        database: 'rh-mysql',
      });
      // sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
