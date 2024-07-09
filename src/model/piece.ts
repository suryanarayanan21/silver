import { AppState } from "./state";

export interface Piece {
    selector: (state: AppState) => any;
    actions: Record<string, (state: AppState, payload: any) => AppState>
}