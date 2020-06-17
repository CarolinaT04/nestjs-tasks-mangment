import { Connection } from 'mongoose';
import { TaskSchema } from '../schema/tasks.schema';

export const DATABASE_CONNECTION: string = 'DATABASE_CONNECTION';

export const TASK_MODEL_INJECTION_TOKEN = 'TASK_MODEL';
export const TASK_MODEL: string = 'Task';
/**
 * Task Providers
 *
 * @constant {Array}
 *
 * @usageNotes
 * Use it for inject the `Task` database model
 */
export const TaskModelProvider = [
  {
    provide: TASK_MODEL_INJECTION_TOKEN,
    useFactory: (connection: Connection) => connection.model(TASK_MODEL, TaskSchema),
    inject: [DATABASE_CONNECTION],
  },
];
