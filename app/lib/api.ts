import Guardian from "guardian-js";
import NewsAPI from "~/lib/news-api";

const newsAPI = new NewsAPI(import.meta.env.VITE_NEWS_API_KEY);

const guardian = new Guardian(import.meta.env.VITE_GUARDIAN_API_KEY, false);
// last api package

export const getAllArticles = async () => {
  const headlines = await newsAPI.getEverything({
    q: "stocks",
    qInTitle: "stock",
    sources: ["bbc-news", "google-news", "al-jazeera-english"],
    language: "en",
    sortBy: "relevancy",
    pageSize: 20,
    page: 1,
  });

  return headlines;

  // Make a request to the Guardian A
};

// last api package

export const searchArticles = async () => {
  // Make a request to the NewsAPI API
  // Make a request to the Guardian API
};
