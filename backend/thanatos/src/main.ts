import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import supertokens from 'supertokens-node';
import { errorHandler, middleware } from 'supertokens-node/framework/express';
import { SupertokensExceptionFilter } from './v1/commons/authentication/authentication.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  app.use(middleware());
  app.use(errorHandler());

  app.useGlobalFilters(new SupertokensExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.THANATOS_PORT);
}
bootstrap();
