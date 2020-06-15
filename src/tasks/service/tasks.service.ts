import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { Task, TaskStatus } from '../interface/tasks.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-task-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status , searchParam}= filterDto;

        let tasks = this.getAllTasks();
        if(status) {
            tasks = tasks.filter(task => task.status === status);
        }

        if(searchParam){
            tasks = tasks.filter(tasks => 
                tasks.title.includes(searchParam) ||
                tasks.description.includes(searchParam),);
        }
        return tasks;
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id == id);

    }
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title , description } = createTaskDto;

        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN

        };

        this.tasks.push(task);
        console.log(task);
        return task;
       

    }

    deleteTask(id: string): void{
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string , status:TaskStatus): Task {
       const task = this.getTaskById(id);
       task.status = status
       return task;
    }
}
