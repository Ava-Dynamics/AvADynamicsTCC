import { Module } from '@nestjs/common';
import { DatabaseModule } from './commons/database/database.module';
import { AuthenticationModule } from './commons/authentication/authentication.module';
import { TestController } from './controllers/test/test.controller';
import { TestService } from './providers/test/test.service';
import { Newspaper } from './crons/newspaper.provider';
import { NewspaperController } from './controllers/newspaper.controller';
import { NewspaperService } from './services/newspaper.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';

@Module({
  imports: [
    DatabaseModule,
    AuthenticationModule.forRoot({
      connectionURI: process.env.SUPER_URL,
      apiKey: process.env.SUPER_KEY,
      appInfo: {
        appName: 'score',
        apiDomain: '127.0.0.1:' + process.env.THANATOS_PORT,
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
        websiteDomain: '127.0.0.1:' + process.env.FRONTEND_PORT,
      },
    }),
  ],
  controllers: [
    TestController,
    NewspaperController,
    UserController,
    PostsController,
  ],
  providers: [
    TestService,
    Newspaper,
    NewspaperService,
    UserService,
    PostsService,
  ],
})
export class V1Module {}
