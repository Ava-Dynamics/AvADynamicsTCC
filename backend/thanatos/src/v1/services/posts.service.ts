import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  async getPosts(supertokensId: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        supertokenId: supertokensId,
      },
      select: { id: true },
    });
    const following = await this.prisma.following.findMany({
      where: { usersId: user.id },
    });

    if (following.length == 0) return [];
    const posts = await this.prisma.posts.findMany({
      where: { usersId: { in: [...following.map((f) => f.follow), user.id] } },
      select: {
        id: true,
        content: true,
        publishedAt: true,
        usersRel: {
          select: {
            id: true,
            name: true,
            imageProfile: true,
          },
        },
      },
    });
    return posts;
  }

  async createPost(supertokensId: string, content: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        supertokenId: supertokensId,
      },
      select: { id: true },
    });
    return this.prisma.posts.create({
      data: {
        usersId: user.id,
        content: content,
        publishedAt: new Date(),
      },
    });
  }
}
