import { Piece } from "./piece";

export type AppAction<
  PieceType extends Piece,
  ActionType extends keyof PieceType["actions"],
> = {
  payload: Parameters<PieceType["actions"][ActionType]>[1];
};

export type AppActionInternal = {
  piece: Piece;
  type: string;
  payload: any;
};
