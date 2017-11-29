/**
 * Design Content - to style components typographical content.
 *
 * font - configure main font-family of body content.
 * size - configure various font-sizes for content components.
 * weight - configure available font-weight for main font-family.
 * height - configure various line-height options for content components.
 * gutter - configure various margins and paddings for content components.
 */
module.exports = {
  font: `'Ubuntu', 'Open Sans', Helvetica, Arial, sans-serif`,
  size: {
    base: '1em',
    core: '2em',
    apex: '3em',
    hero: '2.5em',
    lead: '1.75em',
    direct: '1.5em',
    brief: '1.3em',
    point: '1.15em',
    mark: '1.05em',
    brand: '0.75em',
    note: '0.5em',
    icon: '150%',
    legal: '75%',
    sub: '50%',
  },
  weight: {
    base: 400,
    core: 500,
    apex: 700,
  },
  height: {
    base: 1,
    core: 1.25,
    apex: 1.5,
  },
  gutter: {
    base: '0 0 1em',
    core: '0 auto 1em',
    apex: '2em 0 1em',
    action: '0.75em 1em',
    fit: '0.5em 0.75em',
    note: '0.5em 0',
  },
};
