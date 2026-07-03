"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        {/* @ts-expect-error - React 19 types mismatch with ReactLenis */}
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
