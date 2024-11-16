import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }

    @Post()
    async create(@Body() task: Task) {
        return this.tasksService.create(task);
    }
}