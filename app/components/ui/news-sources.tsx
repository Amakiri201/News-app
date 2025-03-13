import { useLoaderData } from "react-router";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "~/lib/utils";
import { Button } from "./button";

type NewsSourceProps = {
  selected: string;
  onSelect: (select: string) => void;
};

export const NewsSources = ({ selected, onSelect }: NewsSourceProps) => {
  const { sources } = useLoaderData<ArticleProp>();

  return (
    <ScrollArea
      aria-orientation="horizontal"
      className="w-full whitespace-nowrap"
    >
      <div className="flex w-max px-4 space-x-4">
        {sources.map((source) => (
          <Button
            variant="ghost"
            key={source.name}
            className="flex-col h-full cursor-pointer hover:bg-transparent"
            onClick={() => onSelect(source.name)}
          >
            <Avatar
              className={cn(
                "size-16 bg-slate-200 flex items-center justify-center p-2",
                source.name === selected && "bg-red-400"
              )}
            >
              <AvatarImage className="rounded-full" src={source.image} />
              <AvatarFallback className="uppercase">
                {source.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium mt-2">{source.name}</p>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" hidden />
    </ScrollArea>
  );
};
