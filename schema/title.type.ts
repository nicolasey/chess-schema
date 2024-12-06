export type Title = {
  id: string | number;
  label: string;
  fide_slug: string;

  /**
   *    Local objects in systems are very liekly to extend this type
   *    with local slugs (not all countries use fide slug as reference)
   */
};
