import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  addUser(data) {
    return this.userRepo.save(data);
  }

  getUser(id) {
    return this.userRepo.findOneBy({ id });
  }

  async updateUser(id, data) {
    await this.userRepo.update(id, data);

    return this.userRepo.findOneBy({ id });
  }
}
