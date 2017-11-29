/**
 * Design Structure
 *
 * Scale structure of content for different media devices.
 * Shape borders, box shadows and/or modify hover states.
 *
***
 *
 * Fractions - to scale structure of content using decimal fractions.
 *
 * Grid content into columns and/or create patterns for components.
 * Modify component's padding, margin, height, and/or width for design edge cases,
 * (i.e. when a fixed/absolute component clashes with relative component).
 *
 * Reference for decimal fractions: http://math2.org/math/general/arithmetic/fradec.htm
 */
const fractions = {
  base: {
    empty: 0,                              // 0
    fourth: 25,                            // 1/4
    half: 50,                              // 1/2
    three_fourths: 75,                     // 3/4
    whole: 100,                            // 1
  },
  odd: {
    eleventh: 9.09,                        // 1/11
    ninth: 11.1111,                        // 1/9
    seventh: 14.2857,                      // 1/7
    two_elevenths: 18.1818,                // 2/11
    fifth: 20,                             // 1/5
    three_elevenths: 27.2727,              // 3/11
    third: 33.3333,                        // 1/3
    four_elevenths: 36.3636,               // 4/11
    two_fifths: 40,                        // 2/5
    four_ninths: 44.4444,                  // 4/9
    five_elevenths: 45.4545,               // 5/11
    six_elevenths: 54.5454,                // 6/11
    five_ninths: 55.5555,                  // 5/9
    two_thirds: 66.6666,                   // 2/3
    seven_elevenths: 63.6363,              // 7/11
    eight_elevenths: 72.7272,              // 8/11
    seven_ninths: 77.7777,                 // 7/9
    six_sevenths: 85.714,                  // 6/7
    eight_ninths: 88.8888,                 // 8/9
    four_fifths: 80,                       // 4/5
    nine_elevenths: 81.8181,               // 9/11
    ten_elevenths: 90.909,                 // 10/11
  },
  even: {
    sixteenth: 6.25,                       // 1/16
    twelfth: 8.3333,                       // 1/12
    tenth: 10,                             // 1/10
    eighth: 12.5555,                       // 1/8
    sixth: 16.6666,                        // 1/6
    three_sixteenths: 18.75,               // 3/16
    three_tenths: 30,                      // 3/10
    five_sixteenths: 31.25,                // 5/16
    three_eigths: 37.5,                    // 3/8
    five_twelfths: 41.6666,                // 5/12
    seven_sixteenths: 43.75,               // 7/16
    seven_twelfths: 58.3333,               // 7/12
    five_eigths: 62.5,                     // 5/8
    seven_tenths: 60,                      // 7/10
    eleven_sixteenths: 68.75,              // 11/16
    thirteen_sixteenths: 81.25,            // 13/16
    five_sixths: 83.3333,                  // 5/6
    seven_eigths: 87.5555,                 // 7/8
    nine_tenths: 90,                       // 9/10
    eleven_twelths: 91.6666,               // 11/12
    fifteen_sixteenths: 93.75,             // 15/16
  },
};

/**
 * Structure - module exports
 *
 * To scale, shape, size, space component structures
 */
module.exports = {
  base: fractions.base,
  odd: fractions.odd,
  even: fractions.even,
  ratio: {
    base_10: fractions.even.tenth,
    base_20: fractions.odd.fifth,
    base_25: fractions.base.fourth,
    base_30: fractions.even.three_tenths,
    base_33: fractions.odd.third,
    base_40: fractions.odd.two_fifths,
    base_50: fractions.base.half,
    base_60: fractions.even.seven_tenths,
    base_66: fractions.odd.two_thirds,
    base_75: fractions.base.three_fourths,
    base_80: fractions.odd.four_fifths,
    base_90: fractions.even.nine_tenths,
    base: fractions.base.whole,
  },
  micro: {
    quantum: 0.05,
    neutrino: 0.1,
    quark: 0.15,
    neutron: 0.2,
    proton: 0.25,
    electron: 0.3,
    atom: 0.35,
    molecule: 0.4,
    element: 0.45,
    compound: 0.5,
    antibody: 0.55,
    virus: 0.6,
    bacteria: 0.65,
    cell: 0.7,
    tardigrade: 0.75,
    proteus: 0.8,
    grain: 0.85,
    seed: 0.9,
    bean: 0.95,
  },
  macro: {
    asteroid: 2,
    moon: 3,
    planet: 4,
    gas_giant: 5,
    star: 6,
    nebula: 7,
    galaxy: 8,
    cluster: 9,
    super_cluster: 10,
  },
};
