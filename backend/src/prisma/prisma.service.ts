import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // async onModuleInit() {
  //   await this.$connect();
  // }
  constructor() {
    super({
      datasources: {
        db: {
          // TODO: fix this later
          url: 'postgresql://devadmin:safe-password@localhost:5434/nest?schema=public',
        },
      },
    });
  }
}
