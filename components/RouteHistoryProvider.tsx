"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const RouteHistoryContext = createContext<string | null | undefined>(undefined);

export function RouteHistoryProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const [previousPath, setPreviousPath] = useState<string | null>(null);

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      setPreviousPath(previousPathRef.current);
      previousPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <RouteHistoryContext.Provider value={previousPath}>
      {children}
    </RouteHistoryContext.Provider>
  );
}

export function usePreviousPath() {
  const context = useContext(RouteHistoryContext);
  if (context === undefined) {
    throw new Error("usePreviousPath must be used within a RouteHistoryProvider");
  }
  return context;
}
