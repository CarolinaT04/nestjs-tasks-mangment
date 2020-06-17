import { Module } from '@nestjs/common';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { TasksRepository } from './repositories/tasks.repository';
import { ConfigModule } from '../config/config.module';
import { TaskModelProvider } from './providers/tasks.provider';


@Module({
  imports: [
    ConfigModule
  ],
  controllers: [TasksController],
  providers: [
    ...TaskModelProvider,
    TasksService , 
    TasksRepository]
})
export class TasksModule {}
