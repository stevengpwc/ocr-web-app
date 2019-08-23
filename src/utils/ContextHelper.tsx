import React from 'react';

type ReducerType<State> = (state: State, action: State) => State

export function createContextUseReducer<A>(defaultValue: A, reducer: ReducerType<A>) {
  type DispatchType = React.Dispatch<typeof defaultValue>
  const defaultDispatch: DispatchType = () => defaultValue
  const ctx = React.createContext({ state: defaultValue, dispatch: defaultDispatch })
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer(reducer, defaultValue)
    return <ctx.Provider value={{ state, dispatch }} {...props} />
  }
  return [ctx, Provider] as const
  // Usage: const { state, dispatch } = React.useContext(ctx)
}

export function createContextUseState<A>(defaultValue: A) {
  console.log('Creating createContextUseState...')
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>
  const defaultUpdate: UpdateType = () => defaultValue
  const ctx = React.createContext({ state: defaultValue, update: defaultUpdate })
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = React.useState(defaultValue)
    return <ctx.Provider value={{ state, update }} {...props} />
  }
  return [ctx, Provider] as const
  // Usage: const { state, update } = React.useContext(ctx)
}
