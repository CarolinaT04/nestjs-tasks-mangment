import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-task-filter.dto';
import { TasksRepository } from '../repositories/tasks.repository';
import { UpdateTaskDto } from '../dto/updateTask.dto';
import { Task } from '../interface/tasks.interface';


/**
 *  Task service
 *
 * Handle the database operations over the `Task` model
 *
 * @class TasksService
 */
@Injectable()
export class TasksService {

    /**
     * The class constructor
     */

     constructor(
         private readonly taskRepository: TasksRepository,
     ){}
  
  /**
   * Get a collection of `Task`
   * 
   */

   async getTasks(dto: GetTasksFilterDto): Promise<Task[]> {

    //Set the options for pagination
    const options: {page: number ; limit:number} = {
        page: dto.page || 1,
        limit: dto.limit || 25,
    };
       dto.options = options;

       if(!dto.searchParam){
        return await this.taskRepository.getTaskByStatus(dto);
           
       }
       return await  this.taskRepository.getTasks(dto);
    
       
   }
    async getTaskById(taskId: string): Promise<Task> {
       const getTask = await this.taskRepository.getTaskById(taskId);

       if(!getTask){
           throw new NotFoundException(`No task found with "${taskId}"`);
       }
       return getTask;
    }


   async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
       return await this.taskRepository.createTask(createTaskDto);
    }

    async deleteTask(taskId: string): Promise <Task>{
       
        const result = await this.taskRepository.deleteTask(taskId); 
        
        if(!result){
            throw new NotFoundException(`No task found with ID "${taskId}"`);
        }
        return result;
    }

    async updateTask(dto: UpdateTaskDto): Promise<Task>{
        const taskUpdate = await this.taskRepository.updateTask(dto);

        if(!taskUpdate){
            throw new NotFoundException("No Task found with ID provided");
        }
      return taskUpdate;
    }
}
