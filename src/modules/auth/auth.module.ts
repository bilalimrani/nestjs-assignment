import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
