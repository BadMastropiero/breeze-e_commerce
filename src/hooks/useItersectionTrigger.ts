import { useEffect, useRef, useState } from 'react';

export const useIntersectionTrigger = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const ref = useRef(null);
  console.log(isTriggered);
  // setting up the IntersectionObserver
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '1000px',
      threshold: 0,
    };

    const handleObserver = (entities: any) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setIsTriggered(true);
      } else {
        setIsTriggered(false);
      }
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return { isTriggered, ref };
};
