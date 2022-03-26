import React from "react";
import { compose } from "../utils";

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
  const lastState = React.useRef(initState);
  const getState = React.useCallback(() => lastState.current, []);
  const enhancedReducer = React.useRef(
    (state, action) => (lastState.current = reducer(state, action))
  ).current;
  const [state, dispatch] = React.useReducer(
    enhancedReducer,
    initState,
    initializer
  );
  const middlewaresRef = React.useRef(middlewares);
  const enhancedDispatch = React.useMemo(
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
  const hook = React.useState(initialState);
  const state = hook[0];
  const setState = hook[1];
  const draftState = React.useRef(initialState);

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
