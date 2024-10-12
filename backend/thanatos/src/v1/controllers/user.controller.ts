import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  Session,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  UserService,
  WhereInput,
  WhereInputMany,
} from '../services/user.service';
import { userDto, userDtoSingle, userDtoUpdate } from '../entities/user.dto';
import { AuthGuard } from '../commons/authentication/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller('users')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Post('')
  @UseGuards(new AuthGuard())
  @UseInterceptors(ClassSerializerInterceptor)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async updateUser(
    @Body() data: userDtoUpdate,
    @Session() session: SessionContainer,
  ) {
    return new userDtoSingle(
      await this.user.updateUser(data, { supertokenId: session.getUserId() }),
    );
  }

  @Get('')
  @UseGuards(new AuthGuard())
  async getUsers(@Session() session: SessionContainer) {
    return await this.user.getUser({
      supertokenId: session.getUserId(),
    });
  }

  @Post('profile')
  @UseGuards(new AuthGuard())
  async updateProfile(@Body() data: any, @Session() session: SessionContainer) {
    return await this.user.updateUser(data, {
      supertokenId: session.getUserId(),
    });
  }

  @Get('score')
  @UseGuards(new AuthGuard())
  async getScore(@Session() session: SessionContainer) {
    return await this.user.getScore({
      supertokenId: session.getUserId(),
    });
  }

  @Get('medals')
  @UseGuards(new AuthGuard())
  async getMedals(@Session() session: SessionContainer) {
    return await this.user.getMedals({
      supertokenId: session.getUserId(),
    });
  }

  @Post('medals')
  @UseGuards(new AuthGuard())
  async receiveMedal(@Session() session: SessionContainer, @Body() data: any) {
    return await this.user.receiveMedal(
      { supertokenId: session.getUserId() },
      data.name,
    );
  }

  @Get('journey')
  @UseGuards(new AuthGuard())
  async getJourney(@Session() session: SessionContainer) {
    return await this.user.getJourney({
      supertokenId: session.getUserId(),
    });
  }

  @Get('find')
  @UseGuards(new AuthGuard())
  async findUsers(@Query() where: WhereInputMany) {
    return await this.user.findUsers(where);
  }

  @Get('following')
  @UseGuards(new AuthGuard())
  async getFollowing(@Session() session: SessionContainer) {
    return await this.user.getFollowing({ supertokenId: session.getUserId() });
  }

  @Get('all')
  @UseGuards(new AuthGuard())
  @UseInterceptors(ClassSerializerInterceptor)
  async getAllUsers(): Promise<userDto[]> {
    return (await this.user.getAllUsers()).map((user) => {
      return new userDto(user);
    });
  }

  @Post('follow')
  @UseGuards(new AuthGuard())
  async followUser(
    @Session() session: SessionContainer,
    @Body() where: WhereInput,
  ) {
    return await this.user.followUser(session.getUserId(), where);
  }
}
