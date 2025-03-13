import Guardian from "guardian-js";
import NewsAPI from "~/lib/news-api";
import { format } from "date-fns";
import { formatNewsAPI, newsSourceDetails } from "./utils";

const newsAPI = new NewsAPI(import.meta.env.VITE_NEWS_API_KEY);
const guardian = new Guardian(import.meta.env.VITE_GUARDIAN_API_KEY, false);
// last api package

export const getHeadlines = async () => {
  const response = await newsAPI.getTopHeadlines({
    country: "us",
    pageSize: 10,
    page: 1,
  });

  return formatNewsAPI(response);
};

export const getNewsAPIArticles = async (page: number) => {
  const response = await newsAPI.getEverything({
    sources: ["bbc-news", "google-news", "al-jazeera-english"],
    language: "en",
    sortBy: "relevancy",
    pageSize: 10,
    page,
  });

  return formatNewsAPI(response);
};

export const getGuardianArticles = async (page: number) => {
  const response = await guardian.content.search("", {
    page,
  });
  const formattedArticles: Article[] = response.results.map((article: any) => ({
    source: "GUARDIAN",
    url: article.webUrl,
    author: article.byline,
    title: article.webTitle,
    tag: article.sectionName,
    description: article.webTitle,
    image: article.image || newsSourceDetails["GUARDIAN"].image,
    publishedAt: format(new Date(article.webPublicationDate), "MMM, dd yyyy"),
  }));

  return formattedArticles;
};

export const getAllArticles = async (page = 1) => {
  const newsAPIArticles = await getNewsAPIArticles(page);
  const guardianArticles = await getGuardianArticles(page);
  return newsAPIArticles.concat(guardianArticles);
};

// last api package

export const searchArticles = async () => {
  // Make a request to the NewsAPI API
  // Make a request to the Guardian API
};

export const fetchNextPage = async (page = 1) => {
  getAllArticles(page);
};
