"use client";

import { User } from "@/lib/entities";
import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  user: User | null;
};

type ActionType = {
  type: "SET_USER" | "DELETE_USER";
  payload: User | null;
};

const initialState: StateType = {
  user: null,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "DELETE_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

/**
 * 
export interface IAppContext {
  state: IAppState
  dispatch: React.Dispatch<IAction>
}

const AppContext = React.createContext<IAppContext>({
  state: {
    vehicles: [],
    selectedVehicles: [],
    features: []
  },
  dispatch: () => {}
})
 */

export const UserContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: {
    user: null,
  },
  dispatch: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
