import { Document } from 'mongoose';
import { TaskStatus } from '../shared/enum/task-status.enum';
/**
 * Interface that implements all the properties of the `Task`scheme
 */

export interface Task extends Document{
    id: string ;
    title: string;
    description: string;
    status: TaskStatus;
}
