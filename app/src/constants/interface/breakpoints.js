/**
 * Breakpoints - for media queries that scale with different devices
 *
 * Set for 'em' units with a 16px base.
 * Use to create a media utility template inside `../../utils/media`
 */
const breakpoints = {
  phone: 20, // 320px
  phablet: 30, // 480px
  tablet: 48, // 768px
  laptop: 62, // 992px
  desktop: 75, // 1200px
  wide: 90, // 1440px
  ultrawide: 100, // 1600px
};

// configure breakpoints for content frame.
export const frame = {
  phablet: 40, // 640px
  tablet: 55, // 880px
  laptop: 65, // 1040px
  desktop: 70, // 1120px
};

export default breakpoints;
