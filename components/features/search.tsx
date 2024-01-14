"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTriggerTimeout } from "@/lib/hooks/useTriggerTimeout";
import { DisplaySkeleton } from "./display/display-skeleton";

const Search = ({
  defaultValue = "",
  animateSearch = false,
}: {
  defaultValue?: string;
  animateSearch?: boolean;
}) => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);
  const [triggerShake, isShaking] = useTriggerTimeout(150);
  const [isFirstSearch, setIsFirstSearch] = useState(animateSearch);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchValue) {
      toast("Please enter a location");
      triggerShake();
      return;
    }

    if (!isFirstSearch) {
      handleSearch();
      return;
    }

    setIsFirstSearch(false);
    window.setTimeout(() => {
      handleSearch();
    }, 500);
  };

  const handleSearch = () => {
    router.push(`/${searchValue}`);
  };

  return (
    <>
      <section
        className={cn(
          "flex flex-col items-center gap-6 transition-transform duration-500",
          {
            "translate-y-[180px]": isFirstSearch,
          }
        )}
      >
        <h1 className="text-center text-6xl font-bold">Weather App</h1>
        <p className="text-center">Search for a location to view the weather</p>
        <form
          className={cn("max-w-[400px] flex gap-4", {
            "animate-shake": isShaking,
          })}
          onSubmit={handleSubmit}
        >
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="e.g. Manchester"
          />
          <Button type="submit">Search</Button>
        </form>
      </section>
      {animateSearch && (
        <div
          className={cn("pointer-events-none -z-10 transition-opacity", {
            "opacity-0": isFirstSearch,
          })}
          aria-hidden
        >
          <DisplaySkeleton />
        </div>
      )}
    </>
  );
};

export { Search };
