import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  direction = 'up',
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-10 blur-[4px]';
        case 'down':
          return 'opacity-0 -translate-y-10 blur-[4px]';
        case 'left':
          return 'opacity-0 translate-x-10 blur-[4px]';
        case 'right':
          return 'opacity-0 -translate-x-10 blur-[4px]';
        case 'none':
          return 'opacity-0 scale-95 blur-[4px]';
        default:
          return 'opacity-0 translate-y-10 blur-[4px]';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0';
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
