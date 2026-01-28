"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { forwardRef, useImperativeHandle } from "react";

export interface SmoothScrollRef {
  scrollToTop: () => void;
}

const SmoothScroll = forwardRef<SmoothScrollRef, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const lenis = useLenis();

    useImperativeHandle(ref, () => ({
      scrollToTop: () => {
        lenis?.scrollTo(0);
      },
    }));

    return (
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    );
  }
);

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;
