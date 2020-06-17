import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
/**
 * Defines the Task schema
 * 
 * @constant {TaskSchema}
 */

 export const TaskSchema = new mongoose.Schema (
     {
         title: {
             type: String,
             required: true,

         },
         description: {
             type: String,
             required:true,
         },
         status: {
             type: String,
             required: true
         },

 });

 TaskSchema.index({ title: 1 }, { unique: true, dropDups: true });

TaskSchema.plugin(mongoosePaginate);