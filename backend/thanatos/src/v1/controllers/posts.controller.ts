import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { AuthGuard } from '../commons/authentication/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller('posts')
export class PostsController {
  constructor(private readonly post: PostsService) {}

  @Post('')
  @UseGuards(new AuthGuard())
  async createPost(
    @Session() session: SessionContainer,
    @Body() body: { content: string },
  ) {
    return await this.post.createPost(session.getUserId(), body.content);
  }

  @Get('')
  @UseGuards(new AuthGuard())
  async getPosts(@Session() session: SessionContainer) {
    return await this.post.getPosts(session.getUserId());
  }
}
