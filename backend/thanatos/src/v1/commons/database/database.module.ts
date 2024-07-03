import { Module } from '@nestjs/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    AuthenticationModule.forRoot({
      connectionURI: '127.0.0.1:3900',
      appInfo: {
        appName: 'score',
        apiDomain: '127.0.0.1:3003',
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
        websiteDomain: '127.0.0.1:3000',
      },
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
