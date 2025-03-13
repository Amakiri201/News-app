import { News } from "~/pages/news/news";
import type { Route } from "./+types/home";
import { getNewsSources } from "~/lib/utils";
import { getAllArticles, getHeadlines } from "~/lib/api";
import type { ApiNewsCategory } from "~/lib/news-api/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Today's News" },
    {
      name: "description",
      content:
        "Welcome to Today's News, where you can find the latest news from around the world.",
    },
  ];
}
export async function clientLoader({}: Route.ClientLoaderArgs) {
  // const articles = await getAllArticles();
  // const headlines = await getHeadlines();
  const sources = getNewsSources();
  const categories: ApiNewsCategory[] = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return {
    sources,
    articles: [],
    headlines: [],
    categories,
  };
}

export async function clientAction({ params }: Route.ClientActionArgs) {
  console.log(params);
}

export default function Home({}: Route.ComponentProps) {
  return <News />;
}
