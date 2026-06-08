"use client";

import { ArrowLeft } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useCallback } from "react";
import { usePreviousPath } from "@/components/RouteHistoryProvider";

export default function BackButton() {
  const router = useTransitionRouter();
  const previousPath = usePreviousPath();

  const handleBack = useCallback(() => {
    if (previousPath) {
      router.push(previousPath);
      return;
    }

    router.push("/work");
  }, [previousPath, router]);

  return (
    <button onClick={handleBack} className="flex items-center justify-center cursor-pointer gap-2 mt-10 mb-8 active:scale-105">
      <ArrowLeft className="w-7 h-7 p-1 text-white bg-neutral-800 gap-2 rounded-full" />
      Back
    </button>
  );
}