import {useRef} from './react';
import useUpdate from './useUpdate';

const useGetSetState = <T extends object>(initialState: T = {} as T): [() => T, (patch: Partial<T>) => void]=> {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof initialState !== 'object') {
      throw new TypeError('useGetSetState initial state must be an object.');
    }
  }

  const update = useUpdate();
  const state = useRef<T>({...(initialState as object)} as T);
  const get = () => state.current;
  const set = (patch: Partial<T>) => {
    if (!patch) return;
    if (process.env.NODE_ENV !== 'production') {
      if (typeof patch !== 'object') {
        throw new TypeError('useGetSetState setter patch must be an object.');
      }
    }
    Object.assign(state.current, patch);
    update();
  };

  return [get, set];
};

export default useGetSetState;
