"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = ({ defaultValue = "" }: { defaultValue?: string }) => {
  const [searchValue, setSearchValue] = useState<string>(defaultValue);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${searchValue}`);
  };

  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-6xl font-bold">Weather App</h1>
      <p>Search for a location to view the weather</p>
      <form className="max-w-[400px] flex gap-4" onSubmit={handleSubmit}>
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
