/**
 * Heavily inspired from tiebreaks package
 *
 * @author Marcel Juenemann
 * @package https://github.com/marceljuenemann/tiebreak
 */

export enum Tiebreak {
  /**
   * The overall score of the player, i.e. 1 point for each win and 0.5 points for each draw.
   */
  SCORE = "SCORE",

  /**
   * The sum of the scores of each of the opponents of a participant.
   */
  BUCHHOLZ = "BH",

  /**
   * Buchholz with the least significant opponent cut. Note that voluntarily
   * unplayed rounds will be cut first if FIDE_2023 regulations are applied.
   */
  BUCHHOLZ_CUT1 = "BH-C1",

  BUCHHOLZ_CUT2 = "BH-C2",
  BUCHHOLZ_MEDIAN1 = "BH-M1",
  BUCHHOLZ_MEDIAN2 = "BH-M2",

  /**
   * The number of victories that a participant won
   */
  NB_VICTORIES = "VICTORIES",
}

export enum UnplayedRoundsAdjustment {
  /**
   * Any unplayed games are counted according to the points that were scored.
   * No "virtual opponents" are created when a player was not paired against
   * a real player.
   */
  NONE = "NONE",

  /**
   * For the most part, the 2023 regulations treat unplayed rounds the same as played rounds,
   * e.g. Buchholz is usually just the sum of the opponent's score. However, opponent's who
   * withdrew from a tournament will have their score adjusted by counting all rounds after the
   * withdrawal as 0.5 points. In addition, the player's own unplayed rounds are counted as a
   * game against an opponent that scored the same number of points at the end of the tournament.
   */
  FIDE_2023 = "FIDE_2023",

  /**
   * Adjustments according to FIDE regulations from 2009. If you had opponents who had
   * unplayed games, those unplayed games are always counted as a draw. If you had
   * unplayed games yourself, your Buchholz is calculated using a 'virtual opponent'.
   * The virtual opponent is assumed to have the same points as you initially and
   * score a draw in all following rounds.
   */
  FIDE_2009 = "FIDE_2009",
}
