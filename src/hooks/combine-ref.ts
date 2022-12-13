import {useRef, useLayoutEffect, RefObject} from 'react';

export function useCombinedRefs<T>(...refs: RefObject<T>[]) {
  const targetRef = useRef<T>();

  useLayoutEffect(() => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === 'function') {
        // @ts-ignore
        ref(targetRef.current);
      } else {
        // @ts-ignore
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
