import { useState, useEffect, type ImgHTMLAttributes } from 'react';

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  ...props 
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip if already loaded or no src
    if (!src || isLoaded) return;

    if (priority) {
      setImageSrc(src);
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(document.createElement('div'));

    return () => observer.disconnect();
  }, [src, priority, isLoaded]);

  return (
    <img
      src={imageSrc || undefined}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default LazyImage;

