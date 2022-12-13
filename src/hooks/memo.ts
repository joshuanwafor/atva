import {memo, useMemo, FunctionComponent} from 'react';

function useMemoComponent<P>(component: FunctionComponent<P>) {
  return useMemo(() => memo(component), [component]);
}

export default useMemoComponent;
