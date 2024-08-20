export interface NewspaperRoot {
  status: string;
  totalResults: number;
  articles: NewspaperArticle[];
}

export interface NewspaperArticle {
  source: NewspaperSource;
  author: string;
  title: string;
  description: any;
  url: string;
  urlToImage: any;
  publishedAt: string;
  content: any;
}

export interface NewspaperSource {
  id: string;
  name: string;
}
