"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Handle submit
    console.log("Searching", searchValue);
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
