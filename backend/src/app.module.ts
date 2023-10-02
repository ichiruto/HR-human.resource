import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { RegistryModule } from './modules/registry/registry.module';
// import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './config/database.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../.docker.env'],
    }),
    AuthModule,
    // UserModule,
    RegistryModule,
    CoreModule,
    DatabaseModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
