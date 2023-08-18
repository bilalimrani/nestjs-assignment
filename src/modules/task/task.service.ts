import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class TaskService {
  private readonly logger = new CustomLogger(TaskService.name);

  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async getTasks(): Promise<any> {
    this.logger.log('Get all task');
    return { tasks: await this.taskRepo.find() };
  }

  getTaskById(taskId: number): any {
    this.logger.log('Get one task');
    return this.taskRepo.findOneBy({ taskId: taskId });
  }

  addTask(task: any): any {
    this.logger.log('Insert task');
    return this.taskRepo.save(task);
  }

  deteleTask(taskId: any): any {
    this.logger.log('detele task');
    return this.taskRepo.delete(taskId);
  }
}
