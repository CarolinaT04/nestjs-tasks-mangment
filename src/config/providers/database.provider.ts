import { Provider } from "@nestjs/common";
import { DATABASE_CONNECTION } from "src/tasks/providers/tasks.provider";
import { MONGOOSE_OPTIONS } from "src/tasks/shared/constants/constants";
import * as mongoose from 'mongoose';


/**
 * Data base connection provider
 * 
 * Thi is for injecting database connection
 */

 export const DataBaseProvider: Provider = {

    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
       await mongoose.connect(process.env.DB_HOST, MONGOOSE_OPTIONS),
 };

