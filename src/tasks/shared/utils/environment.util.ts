import * as dotenv from 'dotenv';

export class EnvironmentUtils {
    /**
     * Initializes the enviroment
     */
    public static initEnvironment(): void {
        const dotenvResult = dotenv.config();
        if(dotenvResult.error){
            throw new Error('You need a .env file');
        }
    }
}