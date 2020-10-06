export default {
  'ancient-artillery': {
    name: 'Ancient Artillery',
    normal: [
      { h: 4, a: 2, r: 4 },
      { h: 6, a: 2, r: 4 },
      { h: 7, a: 2, r: 5 },
      { h: 8, a: 3, r: 5 },
      { h: 9, a: 4, r: 5 },
      { h: 11, a: 4, r: 6 },
      { h: 14, a: 4, r: 6 },
      { h: 16, a: 4, r: 7 }
    ],
    elite: [
      { h: 7, a: 3, r: 5 },
      { h: 9, a: 3, r: 5 },
      { h: 11, a: 3, r: 6 },
      { h: 13, a: 4, r: 6 },
      { h: 13, a: 4, r: 6, target: 2 },
      { h: 15, a: 4, r: 7, target: 2 },
      { h: 16, a: 5, r: 7, target: 2 },
      { h: 20, a: 5, r: 7, target: 2 }
    ]
  },
  'bandit-archer': {
    name: 'Bandit Archer',
    normal: [
      { h: 4, m: 2, a: 2, r: 3 },
      { h: 5, m: 2, a: 2, r: 4 },
      { h: 6, m: 3, a: 2, r: 4 },
      { h: 6, m: 3, a: 3, r: 4 },
      { h: 8, m: 3, a: 3, r: 4 },
      { h: 10, m: 3, a: 3, r: 5 },
      { h: 10, m: 3, a: 4, r: 5 },
      { h: 13, m: 3, a: 4, r: 5 }
    ],
    elite: [
      { h: 6, m: 2, a: 3, r: 3 },
      { h: 7, m: 2, a: 3, r: 5 },
      { h: 9, m: 3, a: 3, r: 5 },
      { h: 10, m: 3, a: 4, r: 5 },
      { h: 10, m: 3, a: 4, r: 6, poison: true },
      { h: 12, m: 4, a: 4, r: 6, poison: true },
      { h: 13, m: 4, a: 5, r: 6, poison: true },
      { h: 17, m: 4, a: 5, r: 6, poison: true }
    ]
  },
  'bandit-guard': {
    name: 'Bandit Guard',
    normal: [
      { h: 5, m: 2, a: 2 },
      { h: 6, m: 3, a: 2 },
      { h: 6, m: 3, a: 3 },
      { h: 9, m: 3, a: 3 },
      { h: 10, m: 4, a: 3 },
      { h: 11, m: 4, a: 4 },
      { h: 14, m: 4, a: 4 },
      { h: 16, m: 5, a: 4 }
    ],
    elite: [
      { h: 9, m: 2, a: 3 },
      { h: 9, m: 2, a: 3, shield: 1 },
      { h: 10, m: 2, a: 4, shield: 1 },
      { h: 10, m: 3, a: 4, shield: 2 },
      { h: 11, m: 3, a: 4, shield: 2, muddle: true },
      { h: 12, m: 3, a: 5, shield: 2, muddle: true },
      { h: 14, m: 3, a: 5, shield: 2, muddle: true },
      { h: 14, m: 3, a: 5, shield: 3, muddle: true }
    ]
  },
  'cave-bear': {
    name: 'Cave Bear',
    normal: [
      { h: 7, m: 3, a: 3 },
      { h: 9, m: 3, a: 3 },
      { h: 11, m: 4, a: 3 },
      { h: 13, m: 4, a: 4 },
      { h: 16, m: 4, a: 4 },
      { h: 17, m: 5, a: 4, wound: true },
      { h: 19, m: 5, a: 5, wound: true },
      { h: 22, m: 5, a: 5, wound: true }
    ],
    elite: [
      { h: 11, m: 3, a: 4 },
      { h: 14, m: 3, a: 4 },
      { h: 17, m: 4, a: 4 },
      { h: 20, m: 4, a: 5 },
      { h: 21, m: 5, a: 5, wound: true },
      { h: 24, m: 5, a: 6, wound: true },
      { h: 28, m: 5, a: 7, wound: true },
      { h: 33, m: 5, a: 7, wound: true }
    ]
  },
  'city-archer': {
    name: 'City Archer',
    normal: [
      { h: 4, m: 1, a: 2, r: 3 },
      { h: 5, m: 1, a: 2, r: 4 },
      { h: 6, m: 1, a: 3, r: 4 },
      { h: 6, m: 2, a: 3, r: 4, shield: 1 },
      { h: 8, m: 2, a: 3, r: 5, shield: 1 },
      { h: 9, m: 2, a: 4, r: 5, shield: 1 },
      { h: 9, m: 3, a: 4, r: 5, shield: 2 },
      { h: 10, m: 3, a: 4, r: 6, shield: 2 }
    ],
    elite: [
      { h: 6, m: 1, a: 3, r: 4 },
      { h: 6, m: 1, a: 3, r: 5, shield: 1, pierce: 1 },
      { h: 7, m: 1, a: 4, r: 5, shield: 1, pierce: 2 },
      { h: 8, m: 2, a: 4, r: 5, shield: 2, pierce: 2 },
      { h: 10, m: 2, a: 4, r: 6, shield: 2, pierce: 2 },
      { h: 11, m: 2, a: 5, r: 6, shield: 2, pierce: 3 },
      { h: 12, m: 3, a: 6, r: 6, shield: 2, pierce: 3 },
      { h: 13, m: 3, a: 6, r: 7, shield: 3, pierce: 3 }
    ]
  },
  'city-guard': {
    name: 'City Guard',
    normal: [
      { h: 5, m: 2, a: 2 },
      { h: 5, m: 2, a: 2, shield: 1 },
      { h: 7, m: 2, a: 2, shield: 1 },
      { h: 8, m: 2, a: 3, shield: 1 },
      { h: 9, m: 3, a: 3, shield: 1 },
      { h: 10, m: 3, a: 3, shield: 2 },
      { h: 11, m: 3, a: 4, shield: 2 },
      { h: 13, m: 3, a: 4, shield: 2 }
    ],
    elite: [
      { h: 6, m: 2, a: 3, shield: 1 },
      { h: 6, m: 2, a: 3, shield: 2 },
      { h: 9, m: 2, a: 3, shield: 2 },
      { h: 9, m: 2, a: 4, shield: 2, retaliate: 1 },
      { h: 10, m: 3, a: 4, shield: 2, retaliate: 2 },
      { h: 12, m: 3, a: 4, shield: 3, retaliate: 2 },
      { h: 13, m: 3, a: 5, shield: 3, retaliate: 3 },
      { h: 14, m: 3, a: 6, shield: 3, retaliate: 3 }
    ]
  },
  cultist: {
    name: 'Cultist',
    normal: [
      { h: 4, m: 2, a: 1 },
      { h: 5, m: 2, a: 1 },
      { h: 7, m: 2, a: 1 },
      { h: 9, m: 3, a: 1 },
      { h: 10, m: 3, a: 2 },
      { h: 11, m: 3, a: 2, curse: true },
      { h: 14, m: 3, a: 2, curse: true },
      { h: 15, m: 3, a: 3, curse: true }
    ],
    elite: [
      { h: 7, m: 2, a: 2 },
      { h: 9, m: 2, a: 2 },
      { h: 12, m: 2, a: 2 },
      { h: 13, m: 3, a: 2, curse: true },
      { h: 15, m: 3, a: 3, curse: true },
      { h: 18, m: 3, a: 3, curse: true },
      { h: 22, m: 3, a: 3, curse: true },
      { h: 25, m: 3, a: 4, curse: true }
    ]
  },
  'deep-terror': {
    name: 'Deep Terror',
    normal: [
      { h: 3, a: 2 },
      { h: 4, a: 2, retaliate: 1 },
      { h: 4, a: 3, retaliate: 1 },
      { h: 5, a: 3, retaliate: 2 },
      { h: 6, a: 4, retaliate: 2 },
      { h: 7, a: 4, retaliate: 3 },
      { h: 8, a: 5, retaliate: 3 },
      { h: 9, a: 5, retaliate: 4 }
    ],
    elite: [
      { h: 5, a: 3 },
      { h: 6, a: 3, retaliate: 1 },
      { h: 7, a: 4, retaliate: 1 },
      { h: 8, a: 4, retaliate: 2 },
      { h: 9, a: 5, retaliate: 2 },
      { h: 11, a: 5, retaliate: 3 },
      { h: 13, a: 6, retaliate: 3 },
      { h: 15, a: 6, retaliate: 4 }
    ]
  },
  'earth-demon': {
    name: 'Earth Demon',
    normal: [
      { h: 7, m: 1, a: 3 },
      { h: 9, m: 1, a: 3 },
      { h: 12, m: 1, a: 3 },
      { h: 13, m: 2, a: 3 },
      { h: 15, m: 2, a: 4 },
      { h: 17, m: 2, a: 4, immobilize: true },
      { h: 20, m: 2, a: 4, immobilize: true },
      { h: 22, m: 3, a: 4, immobilize: true }
    ],
    elite: [
      { h: 10, m: 2, a: 4 },
      { h: 13, m: 2, a: 4 },
      { h: 18, m: 2, a: 4 },
      { h: 20, m: 2, a: 4, immobilize: true },
      { h: 21, m: 3, a: 5, immobilize: true },
      { h: 25, m: 3, a: 5, immobilize: true },
      { h: 27, m: 3, a: 6, immobilize: true },
      { h: 32, m: 3, a: 6, immobilize: true }
    ]
  },
  'flame-demon': {
    name: 'Flame Demon',
    flying: true,
    normal: [
      { h: 2, m: 3, a: 2, r: 3, shield: 2 },
      { h: 2, m: 3, a: 2, r: 3, shield: 3 },
      { h: 3, m: 3, a: 3, r: 3, shield: 3 },
      { h: 3, m: 3, a: 3, r: 4, shield: 3, retaliate: 2, retaliateRange: 2 },
      { h: 3, m: 4, a: 3, r: 4, shield: 3, retaliate: 3, retaliateRange: 2 },
      { h: 4, m: 4, a: 3, r: 4, shield: 4, retaliate: 3, retaliateRange: 2 },
      { h: 4, m: 4, a: 4, r: 4, shield: 4, retaliate: 4, retaliateRange: 2 },
      { h: 5, m: 4, a: 4, r: 5, shield: 4, retaliate: 4, retaliateRange: 3 }
    ],
    elite: [
      { h: 3, m: 3, a: 2, r: 3, shield: 3 },
      { h: 3, m: 3, a: 2, r: 4, retaliate: 2, retaliateRange: 2, shield: 4 },
      { h: 4, m: 3, a: 3, r: 4, retaliate: 3, retaliateRange: 2, shield: 4 },
      { h: 5, m: 3, a: 3, r: 5, retaliate: 3, retaliateRange: 3, shield: 4 },
      { h: 5, m: 4, a: 4, r: 5, retaliate: 4, retaliateRange: 3, shield: 4 },
      { h: 6, m: 4, a: 4, r: 5, retaliate: 4, retaliateRange: 3, shield: 5 },
      { h: 7, m: 4, a: 5, r: 5, retaliate: 5, retaliateRange: 3, shield: 5 },
      { h: 8, m: 4, a: 5, r: 6, retaliate: 5, retaliateRange: 4, shield: 5 }
    ]
  },
  'frost-demon': {
    name: 'Frost Demon',
    normal: [
      { h: 5, m: 2, a: 3 },
      { h: 6, m: 2, a: 3, retaliate: 1 },
      { h: 7, m: 3, a: 3, retaliate: 2 },
      { h: 8, m: 3, a: 4, retaliate: 2 },
      { h: 10, m: 3, a: 4, retaliate: 2 },
      { h: 11, m: 3, a: 4, retaliate: 3 },
      { h: 12, m: 3, a: 5, retaliate: 3 },
      { h: 14, m: 3, a: 5, retaliate: 3 }
    ],
    elite: [
      { h: 10, m: 3, a: 3 },
      { h: 10, m: 3, a: 3, retaliate: 2 },
      { h: 12, m: 4, a: 4, retaliate: 2 },
      { h: 14, m: 4, a: 4, retaliate: 3 },
      { h: 18, m: 4, a: 4, retaliate: 3 },
      { h: 20, m: 4, a: 5, retaliate: 3 },
      { h: 22, m: 4, a: 5, retaliate: 4 },
      { h: 25, m: 4, a: 5, retaliate: 4 }
    ]
  },
  'night-demon': {
    name: 'Night Demon',
    normal: [
      { h: 3, m: 3, a: 3, disadvantage: true },
      { h: 5, m: 3, a: 3, disadvantage: true },
      { h: 6, m: 3, a: 4, disadvantage: true },
      { h: 7, m: 4, a: 4, disadvantage: true },
      { h: 8, m: 4, a: 5, disadvantage: true },
      { h: 11, m: 4, a: 5, disadvantage: true },
      { h: 14, m: 4, a: 5, disadvantage: true },
      { h: 15, m: 4, a: 6, disadvantage: true }
    ],
    elite: [
      { h: 5, m: 4, a: 4, disadvantage: true },
      { h: 8, m: 4, a: 4, disadvantage: true },
      { h: 11, m: 4, a: 4, disadvantage: true },
      { h: 13, m: 4, a: 5, disadvantage: true },
      { h: 15, m: 5, a: 5, disadvantage: true },
      { h: 17, m: 5, a: 6, disadvantage: true },
      { h: 21, m: 5, a: 6, disadvantage: true },
      { h: 21, m: 5, a: 8, disadvantage: true }
    ]
  },
  'sun-demon': {
    name: 'Sun Demon',
    flying: true,
    normal: [
      { h: 5, m: 2, a: 2, advantage: true, shield: 1 },
      { h: 7, m: 2, a: 2, advantage: true, shield: 1 },
      { h: 9, m: 2, a: 2, advantage: true, shield: 1 },
      { h: 10, m: 2, a: 3, advantage: true, shield: 1 },
      { h: 11, m: 3, a: 3, advantage: true, shield: 1 },
      { h: 11, m: 3, a: 3, advantage: true, shield: 2 },
      { h: 12, m: 3, a: 4, advantage: true, shield: 2 },
      { h: 15, m: 3, a: 4, advantage: true, shield: 2 }
    ],
    elite: [
      { h: 9, m: 2, a: 3, advantage: true, shield: 1 },
      { h: 12, m: 2, a: 3, advantage: true, shield: 1 },
      { h: 13, m: 2, a: 4, advantage: true, shield: 1 },
      { h: 15, m: 3, a: 4, advantage: true, shield: 1 },
      { h: 16, m: 3, a: 5, advantage: true, shield: 1 },
      { h: 16, m: 3, a: 5, advantage: true, shield: 2 },
      { h: 18, m: 4, a: 5, advantage: true, shield: 2 },
      { h: 22, m: 4, a: 5, advantage: true, shield: 2 }
    ]
  },
  'wind-demon': {
    name: 'Wind Demon',
    flying: true,
    normal: [
      { h: 3, m: 3, a: 2, r: 3, shield: 1 },
      { h: 3, m: 3, a: 2, r: 3, shield: 2 },
      { h: 4, m: 4, a: 2, r: 3, shield: 2 },
      { h: 5, m: 4, a: 3, r: 3, shield: 2 },
      { h: 7, m: 4, a: 3, r: 3, shield: 2 },
      { h: 9, m: 4, a: 3, r: 4, shield: 2 },
      { h: 10, m: 4, a: 3, r: 4, shield: 3 },
      { h: 11, m: 4, a: 4, r: 4, shield: 3 }
    ],
    elite: [
      { h: 5, m: 4, a: 3, r: 4, shield: 1 },
      { h: 5, m: 4, a: 3, r: 4, shield: 2 },
      { h: 7, m: 5, a: 3, r: 4, shield: 2 },
      { h: 8, m: 5, a: 4, r: 4, shield: 2 },
      { h: 8, m: 5, a: 4, r: 4, disarm: true, shield: 2 },
      { h: 11, m: 5, a: 4, r: 4, disarm: true, shield: 2 },
      { h: 12, m: 5, a: 4, r: 4, disarm: true, shield: 3 },
      { h: 13, m: 5, a: 5, r: 4, disarm: true, shield: 3 }
    ]
  },
  'rending-drake': {
    name: 'Rending Drake',
    normal: [
      { h: 5, m: 3, a: 3 },
      { h: 6, m: 3, a: 3, wound: true },
      { h: 7, m: 4, a: 3, wound: true },
      { h: 7, m: 4, a: 4, wound: true },
      { h: 9, m: 4, a: 4, wound: true },
      { h: 10, m: 4, a: 5, wound: true },
      { h: 11, m: 5, a: 5, wound: true },
      { h: 14, m: 5, a: 5, wound: true }
    ],
    elite: [
      { h: 7, m: 4, a: 4 },
      { h: 7, m: 4, a: 5, wound: true },
      { h: 9, m: 5, a: 5, wound: true },
      { h: 10, m: 5, a: 6, wound: true },
      { h: 11, m: 6, a: 6, wound: true },
      { h: 14, m: 6, a: 6, wound: true },
      { h: 15, m: 6, a: 7, wound: true },
      { h: 18, m: 6, a: 7, wound: true }
    ]
  },
  'spitting-drake': {
    name: 'Spitting Drake',
    flying: true,
    normal: [
      { h: 5, m: 3, a: 3, r: 3 },
      { h: 6, m: 3, a: 3, r: 3 },
      { h: 8, m: 3, a: 3, r: 3, muddle: true },
      { h: 8, m: 3, a: 4, r: 4, muddle: true },
      { h: 9, m: 4, a: 4, r: 4, muddle: true },
      { h: 12, m: 4, a: 4, r: 4, muddle: true },
      { h: 13, m: 4, a: 5, r: 4, muddle: true },
      { h: 16, m: 4, a: 5, r: 4, muddle: true }
    ],
    elite: [
      { h: 8, m: 3, a: 4, r: 4 },
      { h: 9, m: 3, a: 4, r: 4, muddle: true },
      { h: 10, m: 3, a: 5, r: 4, muddle: true },
      { h: 12, m: 3, a: 5, r: 5, muddle: true },
      { h: 14, m: 4, a: 5, r: 5, muddle: true },
      { h: 16, m: 4, a: 6, r: 5, muddle: true },
      { h: 19, m: 4, a: 6, r: 5, muddle: true },
      { h: 21, m: 4, a: 7, r: 5, muddle: true }
    ]
  },
  'giant-viper': {
    name: 'Giant Viper',
    normal: [
      { h: 2, m: 2, a: 1, poison: true },
      { h: 3, m: 2, a: 1, poison: true },
      { h: 4, m: 3, a: 1, poison: true },
      { h: 4, m: 3, a: 2, poison: true },
      { h: 6, m: 3, a: 2, poison: true },
      { h: 7, m: 3, a: 3, poison: true },
      { h: 8, m: 4, a: 3, poison: true },
      { h: 10, m: 4, a: 3, poison: true }
    ],
    elite: [
      { h: 3, m: 2, a: 2, poison: true },
      { h: 5, m: 2, a: 2, poison: true },
      { h: 7, m: 3, a: 2, poison: true },
      { h: 8, m: 3, a: 3, poison: true },
      { h: 11, m: 3, a: 3, poison: true },
      { h: 13, m: 4, a: 3, poison: true },
      { h: 14, m: 4, a: 4, poison: true },
      { h: 17, m: 4, a: 4, poison: true }
    ]
  },
  'harrower-infester': {
    name: 'Harrower Infester',
    normal: [
      { h: 6, m: 2, a: 2 },
      { h: 7, m: 2, a: 2, retaliate: 1 },
      { h: 8, m: 2, a: 2, retaliate: 2 },
      { h: 10, m: 2, a: 3, retaliate: 2 },
      { h: 12, m: 3, a: 3, retaliate: 2 },
      { h: 12, m: 3, a: 4, retaliate: 3 },
      { h: 15, m: 3, a: 4, retaliate: 3 },
      { h: 17, m: 3, a: 4, retaliate: 4 }
    ],
    elite: [
      { h: 12, m: 2, a: 2 },
      { h: 12, m: 3, a: 2, retaliate: 2 },
      { h: 14, m: 3, a: 3, retaliate: 2 },
      { h: 17, m: 3, a: 3, retaliate: 3 },
      { h: 19, m: 3, a: 4, retaliate: 3 },
      { h: 21, m: 3, a: 5, retaliate: 3 },
      { h: 22, m: 4, a: 5, retaliate: 4 },
      { h: 26, m: 4, a: 5, retaliate: 4 }
    ]
  },
  hound: {
    name: 'Hound',
    normal: [
      { h: 4, m: 3, a: 2 },
      { h: 4, m: 4, a: 3, retaliate: 1 },
      { h: 6, m: 4, a: 2, retaliate: 1 },
      { h: 8, m: 4, a: 2, retaliate: 1 },
      { h: 8, m: 4, a: 3, retaliate: 1 },
      { h: 9, m: 4, a: 3, retaliate: 2 },
      { h: 11, m: 5, a: 3, retaliate: 2 },
      { h: 15, m: 5, a: 3, retaliate: 2 }
    ],
    elite: [
      { h: 6, m: 5, a: 2 },
      { h: 6, m: 5, a: 2, retaliate: 2 },
      { h: 7, m: 5, a: 3, retaliate: 2 },
      { h: 8, m: 5, a: 4, retaliate: 2 },
      { h: 11, m: 5, a: 4, retaliate: 2 },
      { h: 12, m: 5, a: 4, retaliate: 3 },
      { h: 15, m: 6, a: 4, retaliate: 3 },
      { h: 15, m: 6, a: 5, retaliate: 4 }
    ]
  },
  'black-imp': {
    name: 'Black Imp',
    normal: [
      { h: 3, m: 1, a: 1, r: 3 },
      { h: 4, m: 1, a: 1, r: 3, poison: true },
      { h: 5, m: 1, a: 1, r: 4, poison: true },
      { h: 5, m: 1, a: 2, r: 4, poison: true },
      { h: 7, m: 1, a: 2, r: 4, poison: true },
      { h: 9, m: 1, a: 2, r: 4, poison: true },
      { h: 10, m: 1, a: 3, r: 4, poison: true },
      { h: 12, m: 1, a: 3, r: 4, poison: true }
    ],
    elite: [
      { h: 4, m: 1, a: 2, r: 3, poison: true },
      { h: 6, m: 1, a: 2, r: 3, poison: true },
      { h: 8, m: 1, a: 2, r: 4, poison: true },
      { h: 8, m: 1, a: 3, r: 4, disadvantage: true, poison: true },
      { h: 11, m: 1, a: 3, r: 4, disadvantage: true, poison: true },
      { h: 12, m: 1, a: 3, r: 5, disadvantage: true, poison: true },
      { h: 14, m: 1, a: 4, r: 5, disadvantage: true, poison: true },
      { h: 17, m: 1, a: 4, r: 5, disadvantage: true, poison: true }
    ]
  },
  'forest-imp': {
    name: 'Forest Imp',
    flying: true,
    normal: [
      { h: 1, m: 3, a: 1, r: 3, shield: 1 },
      { h: 2, m: 3, a: 1, r: 3, shield: 1 },
      { h: 2, m: 3, a: 2, r: 3, shield: 1 },
      { h: 3, m: 4, a: 2, r: 4, shield: 1 },
      { h: 3, m: 4, a: 2, r: 4, shield: 2 },
      { h: 4, m: 4, a: 2, r: 4, curse: true, shield: 2 },
      { h: 4, m: 4, a: 3, r: 4, curse: true, shield: 2 },
      { h: 6, m: 4, a: 3, r: 4, curse: true, shield: 2 }
    ],
    elite: [
      { h: 4, m: 3, a: 1, r: 3, shield: 1 },
      { h: 5, m: 3, a: 2, r: 3, shield: 1 },
      { h: 6, m: 3, a: 2, r: 3, curse: true, shield: 1 },
      { h: 7, m: 4, a: 2, r: 4, curse: true, shield: 1 },
      { h: 7, m: 4, a: 2, r: 4, curse: true, shield: 2 },
      { h: 8, m: 4, a: 3, r: 4, curse: true, shield: 2 },
      { h: 9, m: 4, a: 4, r: 4, curse: true, shield: 2 },
      { h: 11, m: 4, a: 4, r: 4, curse: true, shield: 2 }
    ]
  },
  'inox-archer': {
    name: 'Inox Archer',
    normal: [
      { h: 5, m: 2, a: 2, r: 2 },
      { h: 6, m: 2, a: 2, r: 3 },
      { h: 8, m: 2, a: 2, r: 3 },
      { h: 9, m: 2, a: 3, r: 3 },
      { h: 10, m: 3, a: 3, r: 3 },
      { h: 12, m: 3, a: 3, r: 4 },
      { h: 12, m: 3, a: 4, r: 4, wound: true },
      { h: 15, m: 3, a: 4, r: 4, wound: true }
    ],
    elite: [
      { h: 7, m: 2, a: 3, r: 3 },
      { h: 8, m: 2, a: 3, r: 4 },
      { h: 11, m: 2, a: 3, r: 4 },
      { h: 13, m: 2, a: 4, r: 4 },
      { h: 14, m: 3, a: 4, r: 4, wound: true },
      { h: 17, m: 3, a: 4, r: 5, wound: true },
      { h: 19, m: 3, a: 5, r: 5, wound: true },
      { h: 23, m: 3, a: 5, r: 5, wound: true }
    ]
  },
  'inox-guard': {
    name: 'Inox Guard',
    normal: [
      { h: 5, m: 2, a: 2 },
      { h: 8, m: 2, a: 2 },
      { h: 9, m: 2, a: 3 },
      { h: 11, m: 3, a: 3 },
      { h: 12, m: 3, a: 3, retaliate: 1 },
      { h: 13, m: 3, a: 4, retaliate: 1 },
      { h: 16, m: 3, a: 4, retaliate: 1 },
      { h: 19, m: 3, a: 4, retaliate: 2 }
    ],
    elite: [
      { h: 9, m: 1, a: 3, retaliate: 1 },
      { h: 10, m: 2, a: 3, retaliate: 2 },
      { h: 12, m: 2, a: 4, retaliate: 2 },
      { h: 15, m: 2, a: 4, retaliate: 3 },
      { h: 17, m: 2, a: 5, retaliate: 3 },
      { h: 19, m: 2, a: 5, retaliate: 4 },
      { h: 21, m: 3, a: 5, retaliate: 4 },
      { h: 23, m: 3, a: 6, retaliate: 4 }
    ]
  },
  'inox-shaman': {
    name: 'Inox Shaman',
    normal: [
      { h: 4, m: 1, a: 2, r: 3 },
      { h: 6, m: 1, a: 2, r: 3 },
      { h: 7, m: 2, a: 2, r: 3 },
      { h: 9, m: 2, a: 2, r: 4 },
      { h: 10, m: 2, a: 3, r: 4 },
      { h: 13, m: 2, a: 3, r: 4 },
      { h: 15, m: 3, a: 3, r: 4 },
      { h: 16, m: 3, a: 4, r: 4 }
    ],
    elite: [
      { h: 6, m: 2, a: 3, r: 3 },
      { h: 9, m: 2, a: 3, r: 3 },
      { h: 11, m: 3, a: 3, r: 3 },
      { h: 14, m: 3, a: 3, r: 4 },
      { h: 16, m: 3, a: 4, r: 4 },
      { h: 20, m: 3, a: 4, r: 4 },
      { h: 24, m: 4, a: 4, r: 4 },
      { h: 27, m: 4, a: 5, r: 4 }
    ]
  },
  'living-bones': {
    name: 'Living Bones',
    normal: [
      { h: 5, m: 2, a: 1, target: 2 },
      { h: 5, m: 3, a: 1, target: 2, shield: 1 },
      { h: 5, m: 3, a: 2, target: 2, shield: 1 },
      { h: 7, m: 3, a: 2, target: 2, shield: 1 },
      { h: 7, m: 3, a: 3, target: 2, shield: 1 },
      { h: 9, m: 3, a: 3, target: 2, shield: 1 },
      { h: 10, m: 4, a: 3, target: 2, shield: 1 },
      { h: 13, m: 4, a: 3, target: 2, shield: 1 }
    ],
    elite: [
      { h: 6, m: 4, a: 2, target: 2 },
      { h: 6, m: 4, a: 2, target: 3, shield: 1 },
      { h: 7, m: 4, a: 3, target: 3, shield: 1 },
      { h: 10, m: 4, a: 3, target: 3, shield: 1 },
      { h: 11, m: 4, a: 4, target: 3, shield: 1 },
      { h: 11, m: 4, a: 4, target: 3, shield: 2 },
      { h: 11, m: 6, a: 4, target: 3, shield: 2 },
      { h: 14, m: 6, a: 4, target: 3, shield: 2 }
    ]
  },
  'living-corpse': {
    name: 'Living Corpse',
    normal: [
      { h: 5, m: 1, a: 3 },
      { h: 7, m: 1, a: 3 },
      { h: 9, m: 1, a: 3 },
      { h: 10, m: 1, a: 4 },
      { h: 11, m: 2, a: 4 },
      { h: 13, m: 2, a: 4 },
      { h: 14, m: 2, a: 4, poison: true },
      { h: 15, m: 2, a: 5, poison: true }
    ],
    elite: [
      { h: 10, m: 1, a: 3 },
      { h: 10, m: 1, a: 4 },
      { h: 13, m: 1, a: 4 },
      { h: 13, m: 2, a: 5 },
      { h: 15, m: 2, a: 5, poison: true },
      { h: 17, m: 2, a: 6, poison: true },
      { h: 21, m: 2, a: 6, poison: true },
      { h: 25, m: 2, a: 6, poison: true }
    ]
  },
  'living-spirit': {
    name: 'Living Spirit',
    flying: true,
    normal: [
      { h: 2, m: 2, a: 2, r: 2, shield: 1 },
      { h: 2, m: 2, a: 2, r: 2, shield: 2 },
      { h: 2, m: 3, a: 2, r: 3, shield: 2 },
      { h: 3, m: 3, a: 3, r: 3, shield: 2 },
      { h: 3, m: 3, a: 3, r: 3, shield: 3 },
      { h: 4, m: 3, a: 3, r: 4, shield: 3 },
      { h: 4, m: 3, a: 4, r: 4, shield: 3 },
      { h: 6, m: 3, a: 4, r: 4, shield: 3 }
    ],
    elite: [
      { h: 3, m: 3, a: 3, r: 3, shield: 2 },
      { h: 3, m: 3, a: 3, r: 3, shield: 3 },
      { h: 3, m: 4, a: 3, r: 4, shield: 3 },
      { h: 4, m: 4, a: 4, r: 4, shield: 3 },
      { h: 4, m: 4, a: 4, r: 4, shield: 4 },
      { h: 6, m: 4, a: 4, r: 4, shield: 4 },
      { h: 7, m: 4, a: 5, r: 5, shield: 4 },
      { h: 9, m: 4, a: 5, r: 5, shield: 4 }
    ]
  },
  lurker: {
    name: 'Lurker',
    normal: [
      { h: 5, m: 2, a: 2, target: 2 },
      { h: 7, m: 2, a: 2, target: 2, pierce: 1 },
      { h: 9, m: 3, a: 2, target: 2, pierce: 1 },
      { h: 10, m: 3, a: 3, target: 2, pierce: 2 },
      { h: 10, m: 3, a: 3, target: 2, pierce: 2, shield: 1 },
      { h: 11, m: 3, a: 4, target: 2, pierce: 2, shield: 1 },
      { h: 12, m: 4, a: 4, target: 2, pierce: 3, shield: 1 },
      { h: 14, m: 4, a: 4, target: 2, pierce: 3, shield: 1 }
    ],
    elite: [
      { h: 7, m: 2, a: 3, target: 2, shield: 1 },
      { h: 9, m: 2, a: 3, target: 2, pierce: 1, shield: 1 },
      { h: 12, m: 3, a: 3, target: 2, pierce: 2, shield: 1 },
      { h: 14, m: 3, a: 4, target: 2, pierce: 2, shield: 1 },
      { h: 14, m: 3, a: 4, target: 2, pierce: 3, shield: 2 },
      { h: 15, m: 3, a: 5, target: 2, pierce: 3, shield: 2 },
      { h: 16, m: 4, a: 5, target: 2, pierce: 4, shield: 2 },
      { h: 18, m: 4, a: 5, target: 2, pierce: 4, shield: 2 }
    ]
  },
  ooze: {
    name: 'Ooze',
    normal: [
      { h: 4, m: 1, a: 2, r: 2 },
      { h: 5, m: 1, a: 2, r: 2, shield: 1 },
      { h: 7, m: 1, a: 2, r: 3, shield: 1 },
      { h: 8, m: 1, a: 3, r: 3, shield: 1 },
      { h: 9, m: 2, a: 3, r: 3, shield: 1 },
      { h: 10, m: 2, a: 3, r: 3, poison: true, shield: 1 },
      { h: 12, m: 2, a: 4, r: 3, poison: true, shield: 1 },
      { h: 14, m: 2, a: 4, r: 3, poison: true, shield: 1 }
    ],
    elite: [
      { h: 8, m: 1, a: 2, r: 3 },
      { h: 9, m: 1, a: 2, r: 3, shield: 1 },
      { h: 11, m: 1, a: 3, r: 3, shield: 1 },
      { h: 11, m: 2, a: 3, r: 4, poison: true, shield: 1 },
      { h: 13, m: 2, a: 4, r: 4, poison: true, shield: 1 },
      { h: 15, m: 3, a: 4, r: 4, poison: true, shield: 1 },
      { h: 16, m: 3, a: 4, r: 4, poison: true, shield: 2 },
      { h: 18, m: 3, a: 5, r: 4, poison: true, shield: 2 }
    ]
  },
  'savvas-icestorm': {
    name: 'Savvas Icestorm',
    normal: [
      { h: 7, m: 2, a: 2, r: 3, pierce: 3 },
      { h: 10, m: 2, a: 2, r: 4, pierce: 3 },
      { h: 12, m: 3, a: 2, r: 4, pierce: 3 },
      { h: 12, m: 3, a: 3, r: 4, pierce: 3, shield: 1 },
      { h: 14, m: 3, a: 3, r: 5, pierce: 3, shield: 1 },
      { h: 16, m: 3, a: 4, r: 5, pierce: 3, shield: 1 },
      { h: 16, m: 3, a: 4, r: 5, pierce: 3, shield: 2 },
      { h: 17, m: 4, a: 4, r: 6, pierce: 3, shield: 2 }
    ],
    elite: [
      { h: 12, m: 2, a: 3, r: 4, pierce: 3 },
      { h: 12, m: 2, a: 3, r: 5, pierce: 3, shield: 1 },
      { h: 15, m: 3, a: 3, r: 5, pierce: 3, shield: 1 },
      { h: 18, m: 3, a: 4, r: 6, pierce: 3, shield: 1 },
      { h: 19, m: 4, a: 4, r: 6, pierce: 3, shield: 2 },
      { h: 21, m: 4, a: 5, r: 6, pierce: 3, shield: 2 },
      { h: 23, m: 4, a: 6, r: 6, pierce: 3, shield: 2 },
      { h: 24, m: 4, a: 6, r: 6, pierce: 3, shield: 3 }
    ]
  },
  'savvas-lavaflow': {
    name: 'Savvas Lavaflow',
    normal: [
      { h: 8, m: 3, a: 2 },
      { h: 9, m: 3, a: 2, poison: true },
      { h: 11, m: 3, a: 3, poison: true },
      { h: 14, m: 3, a: 3, poison: true },
      { h: 16, m: 3, a: 4, poison: true },
      { h: 18, m: 3, a: 4, poison: true, wound: true },
      { h: 20, m: 4, a: 4, poison: true, wound: true },
      { h: 24, m: 4, a: 4, poison: true, wound: true }
    ],
    elite: [
      { h: 13, m: 3, a: 3 },
      { h: 15, m: 3, a: 3, wound: true },
      { h: 18, m: 3, a: 3, poison: true, wound: true },
      { h: 21, m: 3, a: 4, poison: true, wound: true },
      { h: 24, m: 4, a: 4, poison: true, wound: true },
      { h: 27, m: 4, a: 5, poison: true, wound: true },
      { h: 30, m: 4, a: 6, poison: true, wound: true },
      { h: 35, m: 4, a: 6, poison: true, wound: true }
    ]
  },
  'stone-golem': {
    name: 'Stone Golem',
    normal: [
      { h: 10, m: 1, a: 3 },
      { h: 10, a: 3, shield: 1 },
      { h: 11, m: 1, a: 4, shield: 1 },
      { h: 11, m: 1, a: 4, shield: 2 },
      { h: 12, m: 2, a: 4, shield: 2 },
      { h: 13, m: 2, a: 5, shield: 2 },
      { h: 16, m: 2, a: 5, shield: 2 },
      { h: 16, m: 2, a: 5, shield: 3 }
    ],
    elite: [
      { h: 10, m: 2, a: 4, shield: 1 },
      { h: 11, m: 2, a: 4, shield: 2 },
      { h: 14, m: 2, a: 5, shield: 2 },
      { h: 15, m: 2, a: 5, shield: 3 },
      { h: 17, m: 2, a: 6, shield: 3 },
      { h: 19, m: 3, a: 6, shield: 3 },
      { h: 20, m: 3, a: 7, shield: 3 },
      { h: 21, m: 3, a: 7, shield: 4 }
    ]
  },
  'vermling-shaman': {
    name: 'Vermling Shaman',
    normal: [
      { h: 2, m: 2, a: 1, r: 3, shield: 2 },
      { h: 2, m: 2, a: 1, r: 3, shield: 3 },
      { h: 3, m: 2, a: 1, r: 4, shield: 3 },
      { h: 3, m: 2, a: 2, r: 4, shield: 3 },
      { h: 3, m: 3, a: 2, r: 4, muddle: true, shield: 3 },
      { h: 4, m: 3, a: 3, r: 4, muddle: true, shield: 3 },
      { h: 5, m: 3, a: 4, r: 4, muddle: true, shield: 3 },
      { h: 7, m: 3, a: 4, r: 4, muddle: true, shield: 3 }
    ],
    elite: [
      { h: 3, m: 3, a: 2, r: 3, shield: 2 },
      { h: 3, m: 3, a: 2, r: 3, shield: 3 },
      { h: 4, m: 3, a: 2, r: 4, shield: 3 },
      { h: 5, m: 3, a: 3, r: 4, shield: 3 },
      { h: 5, m: 3, a: 3, r: 4, muddle: true, shield: 4 },
      { h: 6, m: 3, a: 4, r: 4, muddle: true, shield: 4 },
      { h: 6, m: 3, a: 4, r: 4, muddle: true, shield: 5 },
      { h: 8, m: 3, a: 4, r: 4, muddle: true, shield: 5 }
    ]
  },
  'vermling-scout': {
    name: 'Vermling Scout',
    normal: [
      { h: 2, m: 3, a: 1 },
      { h: 3, m: 3, a: 1 },
      { h: 3, m: 3, a: 2 },
      { h: 5, m: 3, a: 2 },
      { h: 6, m: 3, a: 3 },
      { h: 8, m: 3, a: 3 },
      { h: 9, m: 4, a: 3 },
      { h: 11, m: 4, a: 3 }
    ],
    elite: [
      { h: 4, m: 3, a: 2 },
      { h: 5, m: 3, a: 2 },
      { h: 5, m: 4, a: 3 },
      { h: 7, m: 4, a: 3 },
      { h: 8, m: 4, a: 4 },
      { h: 11, m: 4, a: 4 },
      { h: 12, m: 5, a: 4 },
      { h: 15, m: 5, a: 4 }
    ]
  }
}
