import { IsIn, IsOptional, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../shared/enum/task-status.enum";

export class GetTasksFilterDto {
   
@IsOptional()
@IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS , TaskStatus.DONE])
status: TaskStatus;

@IsOptional()
@IsNotEmpty()
searchParam: string;

limit: number;
page: number;
options: any;
condictions: any;
}