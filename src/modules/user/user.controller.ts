import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  addUser(@Body() data: any) {
    return this.userService.addUser(data);
  }

  @Get(':id')
  getUser(@Param('id') id: any) {
    return this.userService.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: any, @Body() body: any) {
    return this.userService.updateUser(id, body);
  }
}
