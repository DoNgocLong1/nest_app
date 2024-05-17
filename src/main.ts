import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Applying global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // This will transform incoming payloads to their corresponding DTOs
      disableErrorMessages: false, // You can disable error messages if needed
    }),
  );

  try {
    await app.listen(process.env.APP_PORT);
    console.log(`Listening on port:${process.env.APP_PORT}...`);
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

bootstrap();
