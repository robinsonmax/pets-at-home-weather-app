"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const DisplayToastOnLoad = ({ message }: { message: string }) => {
  useEffect(() => {
    toast(message);
  }, []);
  return null;
};

export { DisplayToastOnLoad };
