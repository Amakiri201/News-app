import type { Route } from "./+types/home";
import { News } from "~/pages/news/news";
import { getAllArticles } from "~/lib/api";

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
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const articles = await getAllArticles();
  return articles;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData.articles);

  return <News articles={loaderData.articles} />;
}
