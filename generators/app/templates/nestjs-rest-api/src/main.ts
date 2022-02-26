import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);

  app.setGlobalPrefix('api');
  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
