import { Controller, Get, Body, Post, Param, Delete, Put, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from '../service/tasks.service';
import { Task} from '../interface/tasks.interface';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from '../pipes/task-status-validation-pipe';
import { TaskStatus } from '../shared/enum/task-status.enum';
import { UpdateTaskDto } from '../dto/updateTask.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
   async getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
    return await this.tasksService.getTasks(filterDto);
       
    }
    @Get('/:id')
   async getTaskById(@Param('id') id: string): Promise<Task> {
        return await this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return await this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
  async  deleteTask(@Param('id') id: string): Promise<Task>{
        return await this.tasksService.deleteTask(id);
    }

   @Patch('/update')
    updateTask(
        @Body() updateTaskDto: UpdateTaskDto ): Promise<Task>
        {
       return this.tasksService.updateTask(updateTaskDto)

        };
        
    
}
