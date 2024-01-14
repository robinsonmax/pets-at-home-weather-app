"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTriggerTimeout } from "@/lib/hooks/useTriggerTimeout";
import { DisplaySkeleton } from "./display/display-skeleton";
import { Link } from "@/components/ui/link";

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

    submitSearch(searchValue);
  };

  const submitSearch = (route: string) => {
    if (!isFirstSearch) {
      router.push(`/${route}`);
      return;
    }

    setIsFirstSearch(false);
    window.setTimeout(() => {
      router.push(`/${route}`);
    }, 500);
  };

  const handleCurrentLocation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (e) => {
          console.log(e);
          const coords = `${e.coords.latitude},${e.coords.longitude}`;
          setSearchValue(coords);
          submitSearch(coords);
        },
        () => {
          toast("Failed to get your location");
        }
      );
    } else {
      toast("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <section
        className={cn(
          "flex flex-col items-center gap-6 transition-transform duration-500",
          {
            "md:translate-y-[180px]": isFirstSearch,
          }
        )}
      >
        <h1 className="text-center text-6xl font-bold">Weather App</h1>

        <p className="text-center">
          Search for a location to view the weather or use your{" "}
          <Link href="/" onClick={handleCurrentLocation}>
            current location
          </Link>
        </p>
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
          className={cn(
            "hidden md:block pointer-events-none -z-10 transition-opacity",
            {
              "opacity-0": isFirstSearch,
            }
          )}
          aria-hidden
        >
          <DisplaySkeleton />
        </div>
      )}
    </>
  );
};

export { Search };
