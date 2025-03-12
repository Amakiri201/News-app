import Guardian from "guardian-js";
import NewsAPI from "~/lib/news-api";

const newsapi = new NewsAPI(import.meta.env.NEWS_API_KEY);
const guardian = new Guardian(import.meta.env.GUARDIAN_API_KEY, false);
// last api package

export const getAllArticles = async () => {
  // Make a request to the NewsAPI API
  // Make a request to the Guardian API
};
