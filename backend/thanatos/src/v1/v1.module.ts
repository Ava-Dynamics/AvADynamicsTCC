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
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';

@Module({
  imports: [
    DatabaseModule,
    AuthenticationModule.forRoot({
      connectionURI: process.env.SUPER_URL,
      apiKey: process.env.SUPER_KEY,
      appInfo: {
        appName: 'score',
        apiDomain: process.env.REACT_APP_BACKEND,
        apiBasePath: '/api/auth',
        websiteBasePath: '/auth',
        websiteDomain: process.env.REACT_APP_URL,
      },
    }),
  ],
  controllers: [
    TestController,
    NewspaperController,
    UserController,
    PostsController,
    CoursesController,
  ],
  providers: [
    TestService,
    Newspaper,
    NewspaperService,
    UserService,
    PostsService,
    CoursesService,
  ],
})
export class V1Module {}
