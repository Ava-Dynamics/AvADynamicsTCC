import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import userDto from '../entities/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Post('')
  async updateUser(
    @Body() data: userDto,
    @Query() where: { supertokenId: string; id: number },
  ) {
    return this.user.updateUser(data, where);
  }

  @Get('')
  async getUsers(@Query() where: { supertokenId: string; id: number }) {
    Logger.log(where);
    return await this.user.getUser(where);
  }

  @Get('all')
  async getAllUsers() {
    return await this.user.getAllUsers();
  }
}
