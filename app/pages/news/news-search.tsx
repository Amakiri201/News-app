"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const FormSchema = z.object({
  start_date: z.date({
    required_error: "A date of birth is required.",
  }),
  end_date: z.date({
    required_error: "A date of birth is required.",
  }),
});

const TEST_TABS = [
  "Politics",
  "Technology",
  "Education",
  "Science",
  "Sports",
  "Business",
];

const DatePicker = ({ field, label }: any) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

function NewsSearch() {
  const [tab, setTab] = useState(TEST_TABS[0]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:");
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="rounded-2xl size-10">
          <Search className="size-5 opacity-50" />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[550px] sm:w-[540px] p-1">
        <SheetHeader>
          <SheetTitle className="text-2xl">Search News</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col w-full p-4"
          >
            <input
              type="text"
              placeholder="Search your news..."
              className="border p-2 rounded-md"
            />
            <div className="flex justify-between">
              <FormField
                name="start_date"
                control={form.control}
                render={({ field }) => (
                  <DatePicker field={field} label="Start Date" />
                )}
              />

              <FormField
                name="end_date"
                control={form.control}
                render={({ field }) => (
                  <DatePicker field={field} label="End Date" />
                )}
              />
            </div>

            <div>
              <p className="mt-5 text-1xl font-semibold">Category</p>

              <ScrollArea
                aria-orientation="horizontal"
                className="w-full mt-2 "
              >
                <div className="flex w-max px-4 space-x-2">
                  {TEST_TABS.map((t) => (
                    <Button
                      key={t}
                      onClick={() => setTab(t)}
                      className={cn(
                        "px-4 py-2 rounded-full",
                        tab !== t
                          ? "bg-primary/30 text-primary-foreground/80"
                          : ""
                      )}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" hidden />
              </ScrollArea>
            </div>

            <div>
              <p className="mt-5 text-1xl font-semibold">Source</p>

              <ScrollArea
                aria-orientation="horizontal"
                className="w-full whitespace-nowrap mt-2"
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

            <Button className="mt-6 w-40 self-end" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default NewsSearch;
