import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentUtils } from './tasks/shared/utils/environment.util';

async function bootstrap() {
  
  EnvironmentUtils.initEnvironment();
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
