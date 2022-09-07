import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticatedWsIoAdapter } from './WSAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new AuthenticatedWsIoAdapter(app));
  await app.listen(3000);
}
bootstrap();
