import type { Id } from "../basics.type";

export type Title = {
  id: Id;
  label: string;
  fide_slug: string;

  /**
   *    Local objects in systems are very liekly to extend this type
   *    with local slugs (not all countries use fide slug as reference)
   */
};
