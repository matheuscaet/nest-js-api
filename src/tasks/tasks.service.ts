import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { ITask } from './tasks.interface';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task)
        private taskModel: typeof Task,
      ) {}
    
      async findAll(): Promise<ITask[]> {
        return this.taskModel.findAll();
      }
    
      async create(task: any): Promise<ITask> {
        return this.taskModel.create(task);
      }
}
