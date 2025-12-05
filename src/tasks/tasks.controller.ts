import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask() {
    return this.tasksService.create({
      name: "New Task",
      desc: "Task description",
      done: false,
    });
  }

  @Get()
  getAllTasks() {
    return this.tasksService.findAll();
  }
}
