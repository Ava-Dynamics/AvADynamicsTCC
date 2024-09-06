import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

export type WhereInput =
  | { supertokenId: string; id?: never } // supertokenId é obrigatório, id não deve estar presente
  | { id: number; supertokenId?: never }; // id é obrigatório, supertokenId não deve estar presente

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

    return await this.prisma.users.create({
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

    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);

    return await this.prisma.users.findFirst({
      where: where,
    });
  }

  async getAllUsers() {
    return await this.prisma.users.findMany();
  }

  async getFollowing(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);
    const user = await this.prisma.users.findUnique({
      where,
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return await this.prisma.following.findMany({
      where: { usersId: user.id },
      select: {
        id: true,
        usersRel: {
          select: { id: true, name: true, imageProfile: true, score: true },
        },
      },
    });
  }

  async getMedals(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);
    return await this.prisma.users.findUnique({
      where,
      select: { id: true, usersMedalsRef: { include: { medalsRel: true } } },
    });
  }

  async getjorneys(where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);
    return await this.prisma.users.findUnique({
      where,
      select: { id: true, jorneyRef: true },
    });
  }

  async findUsers(where: WhereInputMany) {
    if (!(where.hasOwnProperty('name') || where.hasOwnProperty('email')))
      throw new HttpException('Faltando name|email', HttpStatus.FORBIDDEN);

    return await this.prisma.users.findMany({
      where: {
        name: { contains: where.name },
        email: { contains: where.email },
      },
    });
  }

  async updateUser(data: any, where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);

    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);

    Logger.log(data);
    return await this.prisma.users.update({
      data: data,
      where: where,
    });
  }

  async followUser(id: string, where: WhereInput) {
    if (!(where.hasOwnProperty('supertokenId') || where.hasOwnProperty('id')))
      throw new HttpException('Faltando supertokenId|id', HttpStatus.FORBIDDEN);
    if (where.hasOwnProperty('id')) where['id'] = Number(where['id']);
    const user = await this.prisma.users.findFirst({
      where: {
        supertokenId: id,
      },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const follow = await this.prisma.users.findFirst({
      where,
    });
    if (!follow)
      throw new HttpException('User to follow not found', HttpStatus.NOT_FOUND);
    const result = await this.prisma.following.findFirst({
      where: { usersId: user.id, follow: follow.id },
    });
    if (user.id == follow.id)
      throw new HttpException(
        'You can not follow yourself',
        HttpStatus.BAD_REQUEST,
      );
    if (!result)
      return await this.prisma.following.create({
        data: { usersId: user.id, follow: follow.id },
      });
    return result;
  }
}
