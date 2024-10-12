import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../commons/database/prisma/prisma.service';
import { getScore } from '../utils/score';

@Injectable()
export class ScoreUpdater {
  constructor(private readonly Prisma: PrismaService) {}

  @Cron('* * 1 * * *', { name: 'updateUserScore' })
  async updateUserScore() {
    try {
      Logger.log('Atualizando score...', 'ScoreUpdater updateUserScore');
      const email = process.env.MEGACONSULTAS_EMAIL;
      const password = process.env.MEGACONSULTAS_PASSWORD;
      const users = await this.Prisma.user.findMany();
      for (const user of users) {
        const now = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(now.getDate() - 30);
        if (!user.lastUpdate || user.lastUpdate < thirtyDaysAgo) {
          const score = await getScore(user.cpf, email, password);
          if (score !== -1) {
            await this.Prisma.user.update({
              where: { id: user.id },
              data: { score, lastUpdate: now },
            });
          }
        }
      }
    } catch (error) {
      Logger.log('Erro ao atualizar score.', 'ScoreUpdater updateUserScore');
    }
  }
}
