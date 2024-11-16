import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async create(task: Task): Promise<Task> {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }
}