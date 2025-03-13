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

export const getNewsAPIArticles = async () => {
  const response = await newsAPI.getEverything({
    sources: ["bbc-news", "google-news", "al-jazeera-english"],
    language: "en",
    sortBy: "relevancy",
    pageSize: 10,
    page: 1,
  });

  return formatNewsAPI(response);
};

export const getGuardianArticles = async () => {
  const response = await guardian.content.search("", {});
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

export const getAllArticles = async () => {
  const newsAPIArticles = await getNewsAPIArticles();
  const guardianArticles = await getGuardianArticles();
  return newsAPIArticles.concat(guardianArticles);
};

// last api package

export const searchArticles = async () => {
  // Make a request to the NewsAPI API
  // Make a request to the Guardian API
};
