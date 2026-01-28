import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SmoothScroll, { SmoothScrollRef } from './provider/smooth-scrolling';

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const scrollRef = useRef<SmoothScrollRef>(null);

  useEffect(() => {
    scrollRef.current?.scrollToTop();
  }, [location]);

  return <SmoothScroll ref={scrollRef}>{children}</SmoothScroll>;
};

export default ScrollToTop;
