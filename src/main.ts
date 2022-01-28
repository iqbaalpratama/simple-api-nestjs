import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Campaign Project')
    .setDescription('Rest api for campaign project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationSorter: 'alpha',
      docExpansion: 'none',
      filter: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
