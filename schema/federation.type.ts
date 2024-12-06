/**
 * In case some federations use locally different codes / isoCodes
 * Then we recommend FIDE countries identification as prior
 */
export type Federation = {
  id: string | number;
  name: string;
  code: string; // 2-letters international ISO
  code3: string; // 3-letters international ISO
};
