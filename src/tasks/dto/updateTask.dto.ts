import { TaskStatus } from "../shared/enum/task-status.enum";

export declare class UpdateTaskDto {
    id: string;
    titile: string;
    description: string;
    status: TaskStatus;
}