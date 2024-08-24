import { DynamicModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModuleConfig, ConfigInjectionToken } from './config.interface';
import { AuthMiddleware } from './authentication.middleware';
import { SupertokensService } from './supertokens/supertokens.service';
import { UserService } from 'src/v1/services/user.service';
import { PrismaService } from '../database/prisma/prisma.service';

@Module({})
export class AuthenticationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

  static forRoot({
    connectionURI,
    apiKey,
    appInfo,
  }: AuthModuleConfig): DynamicModule {
    return {
      providers: [
        {
          useValue: {
            appInfo,
            connectionURI,
            apiKey,
          },
          provide: ConfigInjectionToken,
        },
        SupertokensService,
        UserService,
        PrismaService,
      ],
      exports: [SupertokensService],
      imports: [],
      module: AuthenticationModule,
    };
  }
}
