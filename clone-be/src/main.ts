//Entry point, configures global middleware, pipes, interceptors and swagger setup
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  //Initializes app with AppModule as root
  const app = await NestFactory.create(AppModule, { rawBody: true, abortOnError: false}); //rawBody enables raw request for webhook verification

  app.enableCors({ origin: 'http://localhost:5173', credentials: true });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe()); //Validates incoming req based on DTO rules
  //Interceptor: data transformation for excluding sensitive fields, requires Reflector for metadata handling
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

//Config and starts app, setsup global behavior, api documentation and initializing middleware

// Credit to: greyboolean nest-clerk github
