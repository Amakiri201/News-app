import { useEffect, useState } from "react";

import { Calendar1 } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "~/components/ui/carousel";
import { Link } from "react-router";

export function Headlines({ headlines }: Pick<ArticleProp, "headlines">) {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      if (headlines.length - 1 !== current) {
        setCurrent(api.selectedScrollSnap());
      }
    });
  }, [api]);

  const article = headlines[current];

  if (!article) {
    return null;
  }

  return (
    <section className="hidden lg:flex h-dvh  w-full p-4 flex-row mt-10 justify-center">
      <div className="flex self-end flex-[0.7]">
        <div className="p-10 max-w-2xl">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Calendar1 className="size-4" />
            <span> {article.publishedAt} </span>
          </div>

          <h1 className="mt-2 text-4xl md:text-6xl font-serif font-bold">
            {article.tag}
          </h1>

          <p className="mt-2 text-xl md:text-2xl text-gray-700 line-clamp-2">
            {article.title}
          </p>

          <p className="mt-4 text-gray-500 text-lg line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>

      <Carousel setApi={setApi} className="w-full xl:max-w-2xl lg:max-w-xs">
        <CarouselContent>
          {headlines.map((feed, index) => (
            <CarouselItem key={index}>
              <Link
                className="p-4"
                to={feed.url}
                target="_blank"
                key={feed.title}
              >
                <Card className="p-0 rounded-2xl overflow-hidden">
                  <CardContent className="flex h-full w-full p-0 aspect-square items-center justify-center">
                    <img
                      src={feed.image}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-15" />
        <CarouselNext className="size-15" />
      </Carousel>
    </section>
  );
}
