import { useRef, useCallback, useMemo, useReducer, useState } from "react";
import { compose } from "./utilsHooks";

/**
 * Custom Hook - useEnhancedReducer
 *
 * @param {*} reducer
 * @param {*} initState
 * @param {*} initializer
 * @param {*} middlewares
 * @return [state, enhancedDispatch, getState]
 */

export const useEnhancedReducer = (
  reducer,
  initState,
  initializer,
  middlewares = []
) => {
  const lastState = useRef(initState);
  const getState = useCallback(() => lastState.current, []);
  const enhancedReducer = useRef(
    (state, action) => (lastState.current = reducer(state, action))
  ).current;
  const [state, dispatch] = useReducer(enhancedReducer, initState, initializer);
  const middlewaresRef = useRef(middlewares);
  const enhancedDispatch = useMemo(
    () =>
      middlewaresRef.current.reduceRight(
        (acc, mdw) => (action) => mdw(state)(getState)(acc)(action),
        dispatch
      ),
    [getState, state]
  );

  return [state, enhancedDispatch, getState];
};

/**
 * Custom Hook - useReducerX
 *
 * @param {*} reducer
 * @param {*} initialState
 * @param {*} middlewares
 * @return [state, enhancedDispatch]
 */

export const useReducerX = (reducer, initialState, middlewares = []) => {
  const hook = useState(initialState);
  const state = hook[0];
  const setState = hook[1];
  const draftState = useRef(initialState);

  const dispatch = (action) => {
    draftState.current = reducer(draftState.current, action);
    setState(draftState.current);
    return action;
  };
  const store = {
    getState: () => draftState.current,
    dispatch: (...args) => enhancedDispatch(...args),
  };
  const chain = middlewares.map((middleware) => middleware(store));
  const enhancedDispatch = compose.apply(undefined, chain)(dispatch);

  return [state, enhancedDispatch];
};
