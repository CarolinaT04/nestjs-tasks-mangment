import { Module } from '@nestjs/common';
import { DataBaseProvider } from './providers/database.provider';
@Module({
    providers: [DataBaseProvider],
    exports: [DataBaseProvider],
})
export class ConfigModule { }