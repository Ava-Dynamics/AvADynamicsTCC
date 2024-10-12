import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

export type WhereInput =
  | { supertokenId: string; id?: never } // supertokenId é obrigatório, id não deve estar presente
  | { id: string; supertokenId?: never }; // id é obrigatório, supertokenId não deve estar presente

export type WhereInputMany =
  | { email: string; name?: never }
  | { name: string; email?: never };

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async fromSupertokens(data: any, formFields: any) {
    const convertArrayToObject = (arr) => {
      return arr.reduce((obj, item) => {
        obj[item.id] = item.value;
        return obj;
      }, {});
    };

    const convertedData = convertArrayToObject(formFields);

    return await this.prisma.user.create({
      data: {
        createdAt: new Date(data.user.timeJoined),
        supertokenId: data.user.id,
        email: data.user?.emails[0],
        score: 1000,
        name: convertedData.name,
        cpf: convertedData.cpf,
        job: convertedData.job,
      },
    });
  }

  async getUser(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);

    return await this.prisma.user.findFirst({
      where: where,
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getScore(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const user = await this.prisma.user.findUnique({ where });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user.score;
  }

  async getFollowing(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const user = await this.prisma.user.findUnique({
      where,
      include: { following: true },
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user.following;
  }

  async getMedals(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const user = await this.prisma.user.findUnique({
      where,
      include: { medals: true },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user.medals;
  }

  async receiveMedal(where: WhereInput, name: string) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const user = await this.prisma.user.findUnique({
      where,
      include: { medals: true },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const medal = await this.prisma.medal.findFirst({
      where: { name },
    });
    if (!medal)
      throw new HttpException('Medal not found', HttpStatus.NOT_FOUND);
    if (user.medals.includes(medal)) return medal;
    return this.prisma.user.update({
      where,
      data: {
        medals: {
          connect: { id: medal.id },
        },
      },
    });
  }

  async getJourney(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const user = await this.prisma.user.findUnique({
      where,
      include: { journey: true },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user.journey;
  }

  async findUsers(where: WhereInputMany) {
    if (!(where.hasOwnProperty('name') || where.hasOwnProperty('email')))
      throw new HttpException('Faltando name|email', HttpStatus.FORBIDDEN);

    return await this.prisma.user.findMany({
      where: {
        name: { contains: where.name },
        email: { contains: where.email },
      },
    });
  }

  async updateUser(data: any, where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);

    Logger.log(data);
    return await this.prisma.user.update({
      data: data,
      where: where,
    });
  }

  async followUser(id: string, where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    const userId = where.id || where.supertokenId;
    await this.prisma.user.update({
      where: {
        supertokenId: userId,
      },
      data: {
        following: {
          connect: { id },
        },
      },
    });
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        followers: {
          connect: { supertokenId: userId },
        },
      },
    });
  }
}
