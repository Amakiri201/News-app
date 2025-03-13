import { News } from "~/pages/news/news";
import type { Route } from "./+types/home";
import { getNewsSources } from "~/lib/utils";
import { getAllArticles, getHeadlines } from "~/lib/api";

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
export async function loader({}: Route.ClientLoaderArgs) {
  const articles = await getAllArticles();
  const headlines = await getHeadlines();
  const sources = getNewsSources();
  return {
    sources,
    articles,
    headlines,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <News {...loaderData} />;
}
