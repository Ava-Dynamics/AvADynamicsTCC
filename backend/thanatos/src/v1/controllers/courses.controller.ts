import {
  Controller,
  Get,
  Body,
  Post,
  Query,
  Param,
  UseGuards,
  Session,
} from '@nestjs/common';
import { CoursesService } from '../services/courses.service';
import { AuthGuard } from '../commons/authentication/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('')
  @UseGuards(new AuthGuard())
  async getCourses(
    @Session() session: SessionContainer,
    @Query() query: { page: number; quantity: number },
  ) {
    return await this.coursesService.getCourses(
      query?.page,
      query?.quantity,
      session.getUserId(),
    );
  }

  @Get(':id')
  @UseGuards(new AuthGuard())
  async getCourse(@Param('id') id: string) {
    return await this.coursesService.getCourse(id);
  }

  @Get('progress/:id')
  @UseGuards(new AuthGuard())
  async getProgress(
    @Session() session: SessionContainer,
    @Param('id')
    id: string,
  ) {
    return await this.coursesService.getProgress(id, session.getUserId());
  }

  @Post('progress/:id')
  @UseGuards(new AuthGuard())
  async saveProgress(
    @Session() session: SessionContainer,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return await this.coursesService.saveProgress(
      id,
      session.getUserId(),
      data.progress,
    );
  }
}
