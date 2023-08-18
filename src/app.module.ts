import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './modules/task/entities/task.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { CustomLogger } from './common/customer.logger';
import { User } from './modules/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'sql',
      database: 'postgres',
      entities: [Task, User],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'MyJWTSecret',
      signOptions: {
        expiresIn: '1h',
      },
      global: true,
    }),
    AuthModule,
    TaskModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
