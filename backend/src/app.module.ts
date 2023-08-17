import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [PrismaModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
