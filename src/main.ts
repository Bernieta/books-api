import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const configBuilder = new DocumentBuilder()
    .setTitle('Books API')
    .setDescription('API with information about books, also has user authentication.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configBuilder);
  SwaggerModule.setup('docs', app, document);

  const port = parseInt(process.env.PORT, 10) || 3001;
  await app.listen(port);
}

bootstrap();
