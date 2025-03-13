import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import type { INewsApiResponse } from "./news-api/types";

export const newsSourceDetails: Record<NewsSource, NewsSourceDetails> = {
  GUARDIAN: {
    name: "Guardian",
    image:
      "https://assets-legacy.floridarrc.com/2023/01/guardian-logo-square.jpg",
    title:
      "The Guardian - Independent News, In-Depth Journalism & Global Coverage",
    description:
      "Latest breaking news, analysis, and opinion on global events, politics, business, culture, and more from The Guardian.",
  },
  NEWS_API: {
    name: "News API",
    title: "NewsAPI - Global News Aggregator for Breaking Stories & Headlines",
    description:
      "NewsAPI delivers the latest breaking news, headlines, and articles from top news sources worldwide, covering politics, business, technology, sports, and more.",
    image:
      "https://i0.wp.com/newsdata.io/blog/wp-content/uploads/2024/01/Snipaste_2021-11-28_13-55-49.jpg?fit=701%2C351&ssl=1",
  },
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNewsDate = (date: string) => {
  return format(new Date(date), "MMM, dd yyyy");
};

export const getNewsSources = () => Object.values(newsSourceDetails);

export const formatNewsAPI = (response: INewsApiResponse) => {
  const formattedArticles: Article[] = response?.articles.map((article) => ({
    url: article.url,
    title: article.title,
    author: article.author,
    tag: article.source.name,
    source: "NEWS_API",
    description: article.description,
    publishedAt: formatNewsDate(article.publishedAt),
    image: article.urlToImage || newsSourceDetails["NEWS_API"].image,
  }));

  return formattedArticles;
};
