import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EmployeeController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModuleBasedMiddleware } from 'src/middlewares/module-based.middleware';
import { ModuleBasedInterceptor } from 'src/interceptors/module-based.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [EmployeeController],
  providers: [
    TaskService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ModuleBasedInterceptor,
    },
  ],
  exports: [TaskService],
})
export class TaskModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBasedMiddleware).forRoutes('employee/*');
  }
}
