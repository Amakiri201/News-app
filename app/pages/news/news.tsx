import { useState } from "react";

import { Search, Ellipsis, ArrowRight, Calendar1 } from "lucide-react";

import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  CardHeader,
  CardDescription,
} from "~/components/ui/card";
import React from "react";
import { ModeToggle } from "~/components/ui/mode-toggle";
import NewsSearch from "./news-search";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import type { INewsApiArticle } from "~/lib/news-api/types";
import { Headlines } from "./headlines";

const TEST_TABS = [
  "Politics",
  "Technology",
  "Education",
  "Science",
  "Sports",
  "Business",
];

const TEST_TRENDING = [
  {
    title: "CNN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
    image: "https://i.ibb.co/4pSQJ06/apple-google.png",
  },
  {
    title: "BBC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
    image: "https://i.ibb.co/4pSQJ06/apple-google.png",
  },
  {
    title: "Al Jazeera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
    image: "https://i.ibb.co/4pSQJ06/apple-google.png",
  },
];

export function News({ articles, headlines, sources }: ArticleProp) {
  const [tab, setTab] = useState(TEST_TABS[0]);
  const [visible, setVisible] = useState(false);

  return (
    <main className="flex flex-col h-screen">
      {/* START OF HEADER */}
      <header className="p-4">
        <div className="flex min-lg:hidden items-center justify-between">
          <h2 className="text-xl font-bold">Today News</h2>
          <div className="flex items-center space-x-4">
            {visible ? (
              <Input
                type="text"
                inputMode="search"
                placeholder="Search"
                onSubmit={() => setVisible(!visible)}
                className="px-4 py-2 rounded-full text-xs"
              />
            ) : (
              <Button
                variant="outline"
                className="rounded-full size-10"
                onClick={() => setVisible(!visible)}
              >
                <Search className="size-5 opacity-50" />
              </Button>
            )}
          </div>
        </div>

        {/* DESKTOP HEADER */}

        <div className="hidden min-lg:flex w-full justify-between p-10 xl:px-[15rem]">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-2xl size-10">
              <ModeToggle />
            </Button>

            <NewsSearch />
          </div>

          <div className="text-center flex-1">
            <h2 className="text-xl font-bold">Today News</h2>
            <p className="text-gray-500 text-sm">
              Stay informed with today’s top stories.
            </p>
          </div>

          <div className="hidden md:flex">
            <Button
              variant="default"
              className="px-4 py-2 flex items-center space-x-2"
            >
              Subscribe <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        <Separator className="hidden min-lg:flex  my-4 h-[2px] bg-border/70" />

        <div className="flex max-lg:hidden w-full justify-center items-center ">
          <div className="flex overflow-hidden px-10">
            <ScrollArea aria-orientation="horizontal" className="w-full ">
              <div className="flex w-max px-4 space-x-2">
                {TEST_TABS.map((t) => (
                  <Button
                    key={t}
                    variant="ghost"
                    onClick={() => setTab(t)}
                    className={cn(
                      "bg-transparent text-gray-500 cursor-pointer hover:bg-transparent border-none"
                    )}
                  >
                    {t}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" hidden />
            </ScrollArea>
          </div>
        </div>
        <Separator className="hidden min-lg:flex  my-4 h-[2px] bg-border/70" />
      </header>
      {/* END OF HEADER */}

      {/* START OF RESOURCES LIST */}
      <section className="lg:hidden py-4 ">
        <ScrollArea
          aria-orientation="horizontal"
          className="w-full whitespace-nowrap"
        >
          <div className="flex w-max px-4 space-x-2">
            {[...Array(8)].map((_, index) => (
              <Avatar
                key={index}
                className="size-16 bg-slate-200 flex items-center justify-center p-2"
              >
                <AvatarImage
                  className="rounded-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <ScrollBar orientation="horizontal" hidden />
        </ScrollArea>
      </section>
      {/* END OF RESOURCES LIST */}

      {/* START OF TRENDING NOW */}
      <section className="py-4 block lg:hidden">
        <h2 className="px-4 text-l font-semibold mb-4">Trending Now</h2>

        <ScrollArea
          aria-orientation="horizontal"
          className="w-full whitespace-nowrap"
        >
          <div className="flex space-x-2 px-4">
            {TEST_TRENDING.map((feed) => (
              <Card className=" min-w-[300px] h-[300px] p-0 rounded-2xl overflow-hidden relative">
                <CardContent className="h-full p-0">
                  <img
                    src={feed.image}
                    className="w-full h-full object-cover"
                  />
                </CardContent>

                {/* Gradient overlay */}
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <CardFooter className="flex-col absolute bottom-0 p-4 space-y-5 w-full items-start">
                  <CardTitle className="text-xl text-white text-wrap text-ellipsis line-clamp-2">
                    {feed.description}
                  </CardTitle>

                  <div className="flex items-center space-x-2">
                    <Avatar className="size-8">
                      <AvatarImage
                        className="rounded-full"
                        src="https://github.com/shadcn.png"
                      />
                    </Avatar>
                    <CardDescription className="text-sm text-white">
                      {feed.title} News • Today
                    </CardDescription>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <ScrollBar orientation="horizontal" hidden />
        </ScrollArea>
      </section>

      {/* DESKTOP TRENDING*/}

      <Headlines headlines={headlines} />
      {/* END OF TRENDING NOW */}

      {/* START OF TABS */}
      <section className="py-2 lg:hidden">
        <ScrollArea aria-orientation="horizontal" className="w-full ">
          <div className="flex w-max px-4 space-x-2">
            {TEST_TABS.map((t) => (
              <Button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-4 py-2 rounded-full",
                  tab !== t ? "bg-primary/30 text-primary-foreground/80" : ""
                )}
              >
                {t}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" hidden />
        </ScrollArea>
      </section>
      {/* END OF TABS */}

      {/* START OF RESOURCES LIST */}
      <section className="hidden lg:flex w-[70%] self-center h-dvh my-10">
        <ScrollArea
          aria-orientation="horizontal"
          className="w-full whitespace-nowrap"
        >
          <div className="flex items-center w-full gap-10 flex-wrap">
            {sources.map((news, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 max-w-[350px] text-wrap p-1"
              >
                {/* Logo */}
                <Avatar
                  key={index}
                  className="size-10flex items-center justify-center"
                >
                  <AvatarImage className="rounded-full" src={news.image} />
                  <AvatarFallback className="text-[12px]">
                    {news.name.slice(0, 3).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                {/* Text Content */}
                <div>
                  <h2 className="text-lg font-semibold">{news.title}</h2>
                  <h2 className="text-sm font-light mt-5">
                    {news.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" hidden />
        </ScrollArea>
      </section>
      {/* END OF RESOURCES LIST */}

      {/* START OF RECOMMENDED */}
      <section className="p-4 lg:hidden">
        <h2 className="text-l font-semibold mb-4">Recommended</h2>

        {articles.map((feed, index) => (
          <React.Fragment key={feed.title}>
            <Card className="min-w-full h-[150px] p-0 rounded-none flex-row border-0 shadow-none gap-5 border-foreground/5">
              <CardHeader className="w-[33%] h-full p-0 rounded-xs overflow-hidden">
                <img className="flex-1 object-fill" src={feed.image} />
              </CardHeader>

              <CardContent className="flex-1 p-0 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-xs font-semibold underline text-foreground">
                    {feed.source}
                  </CardDescription>

                  <Ellipsis size={20} />
                </div>

                <CardTitle className="text-lg text-foreground text-wrap text-ellipsis line-clamp-3">
                  {feed.description}
                </CardTitle>

                <CardDescription className="text-xs font-semibold text-foreground/40">
                  {feed.author} • {feed.publishedAt}
                </CardDescription>
              </CardContent>
            </Card>

            {index !== articles.length - 1 && (
              <Separator className="my-4 h-[2px] bg-border/70" />
            )}
          </React.Fragment>
        ))}
      </section>

      {/* DESKTOP RECOMMENDED */}

      <section className="hidden lg:block w-[70%] self-center">
        <h2 className="text-l font-semibold mb-4">Recommended</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-16 flex-wrap">
          {articles?.map((article, index) => (
            <div key={article.title}>
              <Card className=" max-w-[375px] h-[150px] p-0 rounded-none flex-row border-0 shadow-none gap-5 border-foreground/5">
                <CardHeader className="w-[33%] h-full p-0 rounded-xs overflow-hidden">
                  <img
                    className="flex-1 object-cover min-w-[150px]"
                    src={article.image}
                  />
                </CardHeader>

                <CardContent className="flex-1 p-0 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-xs font-semibold underline text-foreground">
                      {article.source}
                    </CardDescription>

                    <Ellipsis size={20} />
                  </div>

                  <CardTitle className="text-lg text-foreground text-wrap text-ellipsis line-clamp-3">
                    {article.description}
                  </CardTitle>

                  <CardDescription className="text-xs font-semibold text-foreground/40">
                    {article.tag}• {article.publishedAt}
                  </CardDescription>
                </CardContent>
              </Card>

              <Separator className="my-4 h-[2px] max-w-[375px]  bg-border/70" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
