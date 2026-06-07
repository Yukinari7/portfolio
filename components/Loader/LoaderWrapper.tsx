"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({
  children,
  onComplete,
}: {
  children: React.ReactNode;
  onComplete?: () => void;
}) {
  // Initialize as null to prevent a server/client hydration mismatch flash
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    // Always show the loader on each page load/refresh
    setLoading(true);
  }, []);

  const handleFinish = () => {
    setLoading(false);
    onComplete?.();
  };

  // Wait until useEffect runs on the client to render anything
  if (loading === null) return null;

  // If it's a fresh visit/refresh, show the loader
  if (loading) {
    return <Loader onFinish={handleFinish} />;
  }

  // Once finished (or skipped on internal nav), render the navbar, view transitions, and page children
  return <>{children}</>;
}