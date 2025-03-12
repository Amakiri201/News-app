import { useState } from "react";
import { Search, Ellipsis, ArrowRight, Menu, Calendar } from "lucide-react";

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

const RECOMMENDED_TRENDING = [
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

export function NewsDesktop() {
  const [tab, setTab] = useState(TEST_TABS[0]);
  const [visible, setVisible] = useState(false);

  return (
    <main className="flex flex-col h-screen">
      {/* START OF HEADER */}
      <header className="w-full">
        <div className="flex max-lg:hidden w-full justify-between p-10 border-b ">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-2xl size-10">
              <Menu className="size-5 opacity-50" />
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl size-10"
              // onClick={() => setSearchVisible(!searchVisible)}
            >
              <Search className="size-5 opacity-50" />
            </Button>
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

        <div className="flex max-lg:hidden w-full p-4 border-b justify-center items-center ">
          <div className="flex overflow-hidden px-10">
            <ScrollArea aria-orientation="horizontal" className="w-full ">
              <div className="flex w-max px-4 space-x-2">
                {TEST_TABS.map((t) => (
                  <Button
                    key={t}
                    variant="ghost"
                    onClick={() => setTab(t)}
                    className={cn(
                      "bg-transparent text-#000 cursor-pointer hover:bg-transparent border-none"
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
      </header>
      {/* END OF HEADER */}

      {/* START OF TRENDING NOW */}
      <section className="py-4 h-dvh">
     
        <div className="max-lg:hidden">
          <div className="p-6 md:p-10">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <Calendar className="size-4" />
              <span>Mon 8 May 2023</span>
            </div>

            <h1 className="mt-2 text-4xl md:text-6xl font-serif font-bold">
              Stay informed
            </h1>

            <p className="mt-2 text-xl md:text-2xl text-gray-700">
              Up-to-date with today’s top stories.
            </p>

            <p className="mt-4 text-gray-500 text-lg">
              You know the news but don’t know the reason behind it
            </p>
          </div>
        </div>

        <div>
          
        </div>
      </section>
      {/* END OF TRENDING NOW */}

      {/* START OF RESOURCES LIST */}
      <section className="py-4">
        <div className="lg:hidden">
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
        </div>

        <div className="max-lg:hidden">
          <p>my name is </p>
        </div>
      </section>
      {/* END OF RESOURCES LIST */}

      {/* START OF TABS */}
      <section className="py-2">
        <div className="lg:hidden">
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
        </div>

        <div className="max-lg:hidden">
          <p>my name is </p>
        </div>
      </section>
      {/* END OF TABS */}

      {/* START OF RECOMMENDED */}
      <section className="p-4">
        <div className="lg:hidden">
          <h2 className="text-l font-semibold mb-4">Recommended</h2>

          {RECOMMENDED_TRENDING.map((feed, index) => (
            <React.Fragment key={feed.title}>
              <Card className="min-w-full h-[150px] p-0 rounded-none flex-row border-0 shadow-none gap-5 border-foreground/5">
                <CardHeader className="w-[33%] h-full p-0 rounded-xs overflow-hidden">
                  <img className="flex-1 object-fill" src={feed.image} />
                </CardHeader>

                <CardContent className="flex-1 p-0 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-xs font-semibold underline text-foreground">
                      Business
                    </CardDescription>

                    <Ellipsis size={20} />
                  </div>

                  <CardTitle className="text-lg text-foreground text-wrap text-ellipsis line-clamp-3">
                    {feed.description}
                  </CardTitle>

                  <CardDescription className="text-xs font-semibold text-foreground/40">
                    Antonio Botosh • Dec, 11 2025
                  </CardDescription>
                </CardContent>
              </Card>

              {index !== RECOMMENDED_TRENDING.length - 1 && (
                <Separator className="my-4 h-[2px] bg-border/70" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="max-lg:hidden">
          <p>my name is </p>
        </div>
      </section>
      {/* END OF RECOMMENDED */}
    </main>
  );
}
