import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/database/prisma/prisma.service';

@Injectable()
export class NewspaperService {
  constructor(private readonly prisma: PrismaService) {}

  getNewspapers(page: number = 1, quantity: number = 10, where: any = {}) {
    return this.prisma.newspaper.findMany({
      skip: (Number(page) - 1) * Number(quantity),
      take: Number(quantity),
      where: { ...where },
    });
  }
}
