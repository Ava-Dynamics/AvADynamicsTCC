import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Axios } from 'axios';
import { PrismaService } from '../commons/database/prisma/prisma.service';

interface Root {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: any;
  url: string;
  urlToImage: any;
  publishedAt: string;
  content: any;
}

interface Source {
  id: string;
  name: string;
}

@Injectable()
export class Newspaper {
  axios: Axios;
  constructor(private readonly Prisma: PrismaService) {
    this.axios = new Axios({
      baseURL: 'https://newsapi.org/v2/',
      params: { apiKey: process.env.API_NEWSAPI_TOKEN },
    });

    // Inserindo informações apos iniciar o aplicativo
    this.getNewInfo();
  }

  @Cron('* * 1 * * *')
  async getNewInfo() {
    Logger.log('Buscando novas noticias...', 'Newspaper getNewInfo');
    const req = await this.axios.get('top-headlines', {
      params: { category: 'business', country: 'br' },
    });

    const data: Root = JSON.parse(await req.data);

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
