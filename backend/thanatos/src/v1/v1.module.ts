import { Module } from '@nestjs/common';
import { DatabaseModule } from './commons/database/database.module';
import { AuthenticationModule } from './commons/authentication/authentication.module';
import { TestController } from './controllers/test/test.controller';
import { TestService } from './providers/test/test.service';
import { Newspaper } from './providers/newspaper.provider';

@Module({
  imports: [DatabaseModule, AuthenticationModule],
  controllers: [TestController],
  providers: [TestService, Newspaper],
})
export class V1Module {}
