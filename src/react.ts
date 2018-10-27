import * as React from 'react';

export type UseState = <T>(initialState: T) => [T, (newState: T) => void];
export const useState: UseState = (React as any).useState;

export type UseEffect = (didUpdate: () => ((() => void) | void), params?: any[]) => void;
export const useEffect: UseEffect = (React as any).useEffect;

export type UseRef = <T>(initialValue: T) => {current: T};
export const useRef: UseRef = (React as any).useRef;
