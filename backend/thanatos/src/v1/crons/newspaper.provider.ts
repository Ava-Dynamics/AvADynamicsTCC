import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Axios } from 'axios';
import { PrismaService } from '../commons/database/prisma/prisma.service';
import { NewspaperRoot } from '../entities/newspaper.dto';

@Injectable()
export class Newspaper {
  axios: Axios;
  constructor(private readonly Prisma: PrismaService) {
    this.axios = new Axios({
      baseURL: 'https://newsapi.org/v2/',
      params: { apiKey: process.env.API_NEWSAPI_TOKEN },
    });

    // Inserindo informações apos iniciar o aplicativo
    if (process.env.START_NEWSPAPER_CRON == '1') this.getNewInfo();
  }

  @Cron('* * 1 * * *', { name: 'getNewInfo' })
  async getNewInfo() {
    Logger.log('Buscando novas noticias...', 'Newspaper getNewInfo');
    const req = await this.axios.get('top-headlines', {
      params: { category: 'business', country: 'br' },
    });

    const data: NewspaperRoot = JSON.parse(await req.data);

    data.articles.map(async (article) => {
      await this.Prisma.newspaper.upsert({
        where: { id: `${article.author}-${article.publishedAt}` },
        create: {
          id: `${article.author}-${article.publishedAt}`,
          source: JSON.stringify(article.source),
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: new Date(article.publishedAt),
          content: article.content,
        },
        update: {
          url: article.url,
          urlToImage: article.urlToImage,
          content: article.content,
        },
      });
    });
  }
}
