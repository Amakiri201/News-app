type Article = {
  url: string;
  tag: string;
  title: string;
  image: string;
  source: NewsSource;
  publishedAt: string;
  author: string | null;
  description: string | null;
};

type NewsSource = "GUARDIAN" | "NEWS_API";

type NewsSourceDetails = {
  name: NewsSource;
  image: string;
  title: string;
  description: string;
};

type ArticleProp = {
  articles: Article[];
  headlines: Article[];
  sources: NewsSourceDetails[];
};
