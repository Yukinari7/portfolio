'use client'

import { ThemeProvider } from "next-themes"
import { RouteHistoryProvider } from "@/components/RouteHistoryProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <RouteHistoryProvider>{children}</RouteHistoryProvider>
    </ThemeProvider>
  )
}