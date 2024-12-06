import type { Id } from "./basics.type";

/**
 * In case some federations use locally different codes / isoCodes
 * Then we recommend FIDE countries identification as prior
 */
export type Federation = {
  id: Id;
  name: string;
  code: string; // 2-letters international ISO
  code3: string; // 3-letters international ISO
};
