import {useState, useEffect} from 'react';
import useMount from './useMount';

const useKeyboardJs = (combination: string) => {
  const [state, set] = useState<[boolean, null | KeyboardEvent]>([false, null]);
  const [keyboardJs, setKeyboardJs] = useState<any>(null);

  useMount(() => {
    import('keyboardjs').then(setKeyboardJs);
  });

  useEffect(() => {
    if (!keyboardJs) return;

    const down = event => set([true, event]);
    const up = event => set([false, event]);
    keyboardJs.bind(combination, down, up);

    return () => {
      keyboardJs.unbind(combination, down, up);
    };
  }, [combination, keyboardJs]);

  return state;
};

export default useKeyboardJs;
