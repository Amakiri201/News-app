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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

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

const NEWS_DATA = [
  {
    logo: "https://github.com/shadcn.png",
    company: "Webmoney",
    headline: "WebMoney Adds Cryptocurrency Wallet for Users",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Stripe",
    headline: "Stripe Launches New Payment Solution for Online Businesses",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Microsoft",
    headline: "Microsoft Acquires AI Nuance Communications for $19.7 Billion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Dribbble",
    headline: "Dribbble Launches New Platform to Help Companies Hire Designers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Webmoney",
    headline: "WebMoney Adds Cryptocurrency Wallet for Users",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Stripe",
    headline: "Stripe Launches New Payment Solution for Online Businesses",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Microsoft",
    headline: "Microsoft Acquires AI Nuance Communications for $19.7 Billion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
  {
    logo: "https://github.com/shadcn.png",
    company: "Dribbble",
    headline: "Dribbble Launches New Platform to Help Companies Hire Designers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia voluptas, doloremque, voluptate, molestias, quisquam",
  },
];

export function NewsDesktop() {
  const [tab, setTab] = useState(TEST_TABS[0]);
  // const [visible, setVisible] = useState(false);

  return (
    <main className="flex flex-col h-screen">
      {/* START OF HEADER */}
      <header className="w-full">
        <div className="flex max-lg:hidden w-full justify-between p-10 xl:px-[15rem]">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-2xl size-10">
              <Menu className="size-5 opacity-50" />
            </Button>

            <Sheet>
              <SheetTrigger>
                <Button variant="outline" className="rounded-2xl size-10">
                  <Search className="size-5 opacity-50" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
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
        <Separator className="my-4 h-[2px] bg-border/70" />

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
        <Separator className="my-4 h-[2px] bg-border/70" />
      </header>
      {/* END OF HEADER */}

      {/* START OF TRENDING NOW */}
      <section className="h-dvh flex w-full p-4 flex-row mt-10 ">
        <div className="max-lg:hidden flex justify-end self-end flex-[0.4]">
          <div className="p-10">
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

        <div className="flex-[0.6] flex justify-center items-center">
          <Carousel className="w-full xl:max-w-2xl lg:max-w-xs">
            <CarouselContent>
              {TEST_TRENDING.map((feed, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex h-full w-full p-0 aspect-square items-center justify-center">
                        {/* <span className="text-4xl font-semibold">
                          {index + 1}
                        </span> */}
                        <img
                          src={feed.image}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* END OF TRENDING NOW */}

      {/* START OF RESOURCES LIST */}
      <section className="xl:px-[15rem] h-dvh my-10">
        <div>
          <ScrollArea
            aria-orientation="horizontal"
            className="w-full whitespace-nowrap"
          >
            <div className="flex justify-center items-center w-full gap-10 flex-wrap">
              {NEWS_DATA.map((news, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 max-w-[350px] text-wrap p-1"
                >
                  {/* Logo */}
                  <Avatar
                    key={index}
                    className="size-10flex items-center justify-center"
                  >
                    <AvatarImage className="rounded-full" src={news.logo} />
                    <AvatarFallback className="text-[12px]">
                      {news.headline.slice(0, 3).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  {/* Text Content */}
                  <div>
                    <p className="text-gray-600 font-medium">{news.company}</p>
                    <h2 className="text-lg font-semibold">{news.headline}</h2>
                    <h2 className="text-sm font-light mt-5">
                      {news.description}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" hidden />
          </ScrollArea>
        </div>
      </section>
      {/* END OF RESOURCES LIST */}

      {/* START OF RECOMMENDED */}
      <section className="px-[17rem]">
        <div>
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
      </section>
      {/* END OF RECOMMENDED */}
    </main>
  );
}
