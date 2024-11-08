import { useState, useEffect } from 'react';

export const useIsResolution = (resolution: number): boolean => {
  const [isNotMobile, setIsNotMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(
      `(min-width: ${resolution}px)`
    );

    setIsNotMobile(mediaQuery.matches);

    const checkDesktop = (event: MediaQueryListEvent) => {
      setIsNotMobile(event.matches);
    };

    mediaQuery.addEventListener('change', checkDesktop);

    return () => {
      mediaQuery.removeEventListener('change', checkDesktop);
    };
  }, [resolution]);

  return isNotMobile;
};
