import { TaskStatus } from "../shared/enum/task-status.enum";

export interface UpdateTask {
    status: TaskStatus;
}