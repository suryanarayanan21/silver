import React, { useContext } from "react";
import { createContext, FunctionComponent, useReducer } from "react";
import { Piece } from "../model/piece";
import { InitialState } from "../store/initialState";
import { AppState } from "../model/state";
import { AppAction, AppActionInternal } from "../model/action";

export const AppContext = createContext<{
  _state: AppState;
  _dispatch: React.Dispatch<AppActionInternal>;
} | null>(null);

export const usePiece = <PieceType extends Piece>(piece: PieceType) => {
  const { _state, _dispatch } = useContext(AppContext)!;
  const state: ReturnType<PieceType["selector"]> = piece.selector(_state);
  const dispatch = <ActionName extends keyof PieceType["actions"]>(
    action: { type: ActionName } & AppAction<PieceType, ActionName>,
  ) => {
    _dispatch({ piece, payload: action.payload, type: action.type as string });
  };

  return { state, dispatch };
};

export const StateProvider: FunctionComponent<{ children: JSX.Element }> = ({
  children,
}) => {
  const reducer = (state: AppState, action: AppActionInternal) => {
    return action.piece.actions[action.type as string](state, action.payload);
  };
  const [_state, _dispatch] = useReducer(reducer, InitialState);

  return (
    <AppContext.Provider value={{ _state, _dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
