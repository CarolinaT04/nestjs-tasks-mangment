import { Injectable, Inject } from "@nestjs/common";
import { Task } from "src/tasks/interface/tasks.interface";
import { PaginateModel } from "mongoose";
import { GetTasksFilterDto } from "../dto/get-task-filter.dto";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/updateTask.dto";
import { TASK_MODEL_INJECTION_TOKEN } from "../providers/tasks.provider";
import * as databaseError from 'database-error';


/**
 * Tasks repository
 * 
 * Handle the database operations
 * 
 * @class Tasksrepository
 */


 @Injectable()
 export class TasksRepository {

    /**
     * The class constructor
     * 
     */
    constructor(
        @Inject(TASK_MODEL_INJECTION_TOKEN)
        private  readonly  taskModel: PaginateModel <Task>, ) {}
        
        /**
         * Get a collection of `Task` with pagination
         * 
         * @throws {DataBaseError} Will throw the error if the database connection fails
         */

         async getTasks( filterDto: GetTasksFilterDto): Promise<Task[]> {
            let result;
            try {
              result = this.taskModel
                .find({ status: filterDto.status })
                .or( filterDto.options)
                .select({  __v: 0 })
                .sort({ createdAt: -1 });
              return await filterDto.options, result;
            } catch (err) {
              throw new Error(err);
            }

         }
         
         async getTaskByStatus(filterDto: GetTasksFilterDto): Promise<Task[]> {
            try {
              const result = this.taskModel
                .find({ status: filterDto.status })
                .select({  __v: 0 });
              return await result
            } catch (err) {
              throw new Error(err);
            }
          }
         /**
          * Get a specific `Task` by ID
          * @param taskId 
          */
         async getTaskById( taskId: string): Promise<Task> {
             try{
                 return await this.taskModel.findById(taskId);
             }catch(error){
                 throw new Error(error);
             }
         }

         /**
          * Create a new `Task`
          * 
          * @param {CreateTaskDto} dto contains the data to create `Tasks`
          */
       async createTask (dto: CreateTaskDto): Promise<Task>{
          try{

            return await this.taskModel.create(dto);
           }catch(error){
            throw new Error(error);
           }
       }

       /**
        * 
        * @param dto contains the data to update a `Task` 
        */
       async updateTask(dto: UpdateTaskDto): Promise<Task>{
           try{
               const { id , ...data} = dto;

               return await this.taskModel.findByIdAndUpdate(id , data , { new: true});
           }catch(error){
           throw new Error(error);
           }
       }

       async deleteTask( taskId: string): Promise<Task> {
           try{
               return await this.taskModel.findByIdAndDelete(taskId);
           }catch (error) {
               throw new Error(error)
           }
       }

 }