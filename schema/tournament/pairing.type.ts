import type { Id } from "../basics.type";
import { Result } from "./result.type";

/**
 * Represents a pairing decision made by Pairing Engine
 *
 * Caution: it exists before it is actually played IRL
 * Captures table result
 */
export type Pairing = Game | PlayedGame | Forfeit;

/**
 * Represents a paired game by a Pairing Engine
 *
 * Caution: A paired game could still be forfeited by a Player after paired.
 */
export type Game = {
  white: Id;
  black: Id;
  scoreWhite?: Result;
  scoreBlack?: Result;
  forfeitedWhite?: boolean;
  forfeitedBlack?: boolean;
  table: number;
};

export type PlayedGame = Game & {
  scoreWhite: Result;
  scoreBlack: Result;
  forfeitedWhite: boolean;
  forfeitedBlack: boolean;
};

export type Forfeit = AllocatedBye | HalfPointBye | LostForfeit;

export type AllocatedBye = {
  white: Id;
  scoreWhite: Result.WIN;
  forfeitedWhite: true;
};

export type HalfPointBye = {
  white: Id;
  scoreWhite: Result.DRAW;
  forfeitedWhite: true;
};

export type LostForfeit = {
  white: Id;
  scoreWhite: Result.LOST;
  forfeitedWhite: true;
};
