import { useEffect, useRef } from "react";

export const useTimeout = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const set = (callback: () => void, delay: number) => {
    clear();
    timeoutRef.current = setTimeout(callback, delay);
  };

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return clear;
  }, []);

  return { set, clear };
};
