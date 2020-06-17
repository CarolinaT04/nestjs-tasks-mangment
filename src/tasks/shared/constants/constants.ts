import * as mongoose from 'mongoose';

/**
 * Constants that containing the mongoose connection options
 *
 * @constant {Object}
 */
export const MONGOOSE_OPTIONS: mongoose.ConnectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};


 export const DATABASE_CONNECTION: string = 'DATABASE_CONNECTION';