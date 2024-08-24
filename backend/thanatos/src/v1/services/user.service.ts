import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async fromSupertokens(data: any) {
    Logger.log(JSON.stringify(data.user));
    return await this.prisma.users.create({
      data: {
        createdAt: new Date(data.user.timeJoined),
        supertokenId: data.user.id,
        email: data.user?.emails[0],
        score: 1000,
      },
    });
  }

  async getUser(where: { supertokenId: string; id: number }) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);

    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);

    return await this.prisma.users.findFirst({
      where: where,
    });
  }

  async getAllUsers() {
    return await this.prisma.users.findMany();
  }

  updateUser(
    data: any,
    where: {
      supertokenId: string;
      id: number;
    },
  ) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);

    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);
    Logger.log(data);
    return this.prisma.users.update({
      data: data,
      where: where,
    });
  }
}
