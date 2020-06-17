import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TasksModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
