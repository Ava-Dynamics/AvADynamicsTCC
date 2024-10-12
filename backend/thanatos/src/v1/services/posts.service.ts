import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  async getPosts(supertokensId: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        supertokenId: supertokensId,
      },
      include: { following: true },
    });

    if (user.following.length == 0) return [];
    const posts = await this.prisma.post.findMany({
      where: { userId: { in: [...user.following.map((u) => u.id), user.id] } },
      select: {
        id: true,
        content: true,
        publishedAt: true,
        userRel: {
          select: {
            id: true,
            name: true,
            imageProfile: true,
          },
        },
      },
      skip: 0,
      take: 5,
      orderBy: { publishedAt: 'desc' },
    });
    return posts;
  }

  async createPost(supertokensId: string, content: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        supertokenId: supertokensId,
      },
      select: { id: true },
    });
    return this.prisma.post.create({
      data: {
        userId: user.id,
        content: content,
        publishedAt: new Date(),
      },
    });
  }
}
