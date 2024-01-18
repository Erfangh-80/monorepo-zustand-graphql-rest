/* eslint-disable react-hooks/rules-of-hooks */
import { useLayoutEffect } from 'react';
import { StoreApi, UseBoundStore, createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import createContext from 'zustand/context';
import { Country, countryInitials } from './slice';

interface InitialState extends Country {}

export let store: UseBoundStore<StoreApi<InitialState>>;
const zustandContext = createContext<StoreApi<InitialState>>();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

const getDefaultInitialState = () => ({
  ...countryInitials,
});

export const initializeStore = (preloadedState = {}) =>
  createStore(
    devtools(() => ({
      ...getDefaultInitialState(),
      ...preloadedState,
    }))
  );

export function useCreateStore(initialState: InitialState) {
  if (typeof window === 'undefined') {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  const isReusingStore = Boolean(store);

  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useLayoutEffect(() => {
    if (initialState && isReusingStore) {
      store.setState({
        ...store.getState(),
        ...initialState,
      });
    }
  }, [initialState, isReusingStore]);

  return () => store;
}
