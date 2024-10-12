import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses(page: number = 1, quantity: number = 10, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { supertokenId: userId },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return await this.prisma.course.findMany({
      skip: (Number(page) - 1) * Number(quantity),
      take: Number(quantity),
      where: {
        score: {
          lt: user.score,
        },
      },
      include: { videos: true },
    });
  }

  async getCourse(id: string) {
    return await this.prisma.course.findUnique({
      where: { id },
      include: { videos: true },
    });
  }

  async getProgress(courseId, userId: string) {
    return await this.prisma.userProgress.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
    });
  }

  async saveProgress(courseId, userId: string, progress: number) {
    const userProgress = await this.prisma.userProgress.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
    });
    if (progress <= userProgress.progress) return progress;
    return await this.prisma.userProgress.update({
      where: { userId_courseId: { userId, courseId } },
      data: {
        progress,
      },
    });
  }
}
