import { useCallback, useEffect, useRef } from 'react';

export default function useDebounce(callback, delay = 400) {
  const timer = useRef(null);

  const cancel = useCallback(() => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
  }, []);

  const schedule = useCallback((...args) => {
    cancel();
    timer.current = window.setTimeout(() => {
      timer.current = null;
      callback(...args);
    }, delay);
  }, [callback, cancel, delay]);

  useEffect(() => cancel, [cancel]);

  return { schedule, cancel };
}
