"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTriggerTimeout } from "@/lib/hooks/useTriggerTimeout";

const Search = ({ defaultValue = "" }: { defaultValue?: string }) => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);
  const [triggerShake, isShaking] = useTriggerTimeout(150);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchValue) {
      toast("Please enter a location");
      triggerShake();
      return;
    }

    router.push(`/${searchValue}`);
  };

  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-6xl font-bold">Weather App</h1>
      <p>Search for a location to view the weather</p>
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
  );
};

export { Search };
