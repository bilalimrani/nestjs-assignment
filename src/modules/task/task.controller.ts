import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnauthorizedException,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { ExectionFilters } from 'src/filters/exception.filter';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CustomLogger } from 'src/common/customer.logger';

@Controller('task')
export class EmployeeController {
  readonly logger = new CustomLogger(Controller.name);
  constructor(readonly taskService: TaskService) {}

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks(): any {
    this.logger.log(`${this.getTasks.name} invoked`);

    try {
      return this.taskService.getTasks();
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get(':taskId')
  getTaskById(@Param('taskId', ParseIntPipe) taskId: number): any {
    this.logger.log(`${this.getTaskById.name} invoked`);

    try {
      return this.taskService.getTaskById(taskId);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  addTask(@Body() task: any): any {
    this.logger.log(`${this.addTask.name} invoked`);
    try {
      return this.taskService.addTask(task);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string) {
    this.logger.log(`${this.deleteTask.name} invoked`);
    this.logger.log(`params ${taskId}`);

    try {
      return this.taskService.deteleTask(+taskId);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }
}
