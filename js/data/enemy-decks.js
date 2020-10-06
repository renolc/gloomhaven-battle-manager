export default {
  archer: [
    {
      i: 29,
      s: [{ m: 0 }, { a: -1, r: 1, immobilize: true }, { shuffle: true }]
    },
    { i: 14, s: [{ m: -1 }, { a: -1 }, { text: 'Create a 3 damage trap' }] },
    { i: 68, s: [{ a: 1, r: 1 }, { shuffle: true }] },
    { i: 31, s: [{ m: 0 }, { a: 0 }] },
    { i: 32, s: [{ m: 0 }, { a: 1, r: -1 }] },
    { i: 44, s: [{ m: -1 }, { a: 1 }] },
    { i: 56, s: [{ a: -1, target: 2 }] },
    { i: 16, s: [{ m: 1 }, { a: -1 }] }
  ],

  'ancient-artillery': [
    { i: 46, s: [{ a: -1, r: 2 }] },
    {
      i: 71,
      s: [
        { a: 0 },
        { text: 'All adjacent enemies suffer 2 dmg' },
        { shuffle: true }
      ]
    },
    {
      i: 71,
      s: [
        { a: 0 },
        { text: 'All adjacent enemies suffer 2 dmg' },
        { shuffle: true }
      ]
    },
    {
      i: 37,
      s: [
        { push: 1, allAdjacentEnemies: true },
        { a: -1, r: -1, area: 'tri' }
      ]
    },
    {
      i: 37,
      s: [
        { push: 1, allAdjacentEnemies: true },
        { a: -1, r: -1, area: 'burst' }
      ]
    },
    { i: 95, s: [{ a: 1 }] },
    {
      i: 17,
      s: [{ push: 2, allAdjacentEnemies: true }, { shield: 2 }, { a: -2 }]
    },
    { i: 46, s: [{ a: -1, immobilize: true, area: 'tri' }] }
  ],

  'rending-drake': [
    { i: 12, s: [{ m: 1 }, { a: -1 }] },
    { i: 13, s: [{ a: -1 }, { m: -1 }, { a: -1 }, { shuffle: true }] },
    { i: 25, s: [{ m: 0 }, { a: 0 }] },
    { i: 39, s: [{ m: -1 }, { a: 1 }] },
    { i: 54, s: [{ m: -2 }, { a: -1, r: 3, target: 2, poison: true }] },
    { i: 59, s: [{ m: -2 }, { a: 1, target: 2 }] },
    { i: 72, s: [{ a: -1 }, { a: -1 }, { a: -2 }, { shuffle: true }] },
    { i: 6, s: [{ shield: 2 }, { heal: 2 }, { strengthen: true }] }
  ],

  'spitting-drake': [
    { i: 32, s: [{ m: 1 }, { a: -1 }] },
    { i: 52, s: [{ m: 0 }, { a: 0 }] },
    { i: 57, s: [{ m: 0 }, { a: -1, r: -1, area: 'tri' }, { shuffle: true }] },
    { i: 27, s: [{ a: 0, target: 2, poison: true }] },
    { i: 87, s: [{ m: -1 }, { a: 1 }] },
    { i: 89, s: [{ a: -2, stun: true }] },
    { i: 6, s: [{ shield: 2 }, { heal: 2 }, { strengthen: true }] },
    {
      i: 89,
      s: [
        { m: -1 },
        { a: -2, r: -2, poison: true, area: 'burst' },
        { shuffle: true }
      ]
    }
  ],

  'giant-viper': [
    {
      i: 32,
      s: [
        { m: 0 },
        {
          a: 0,
          text:
            "Add +2 attack if target is adjacent to any of the Giant Viper's allies"
        },
        { shuffle: true }
      ]
    },
    {
      i: 32,
      s: [
        { m: 0 },
        {
          a: 0,
          text:
            "Add +2 attack if target is adjacent to any of the Giant Viper's allies"
        },
        { shuffle: true }
      ]
    },
    { i: 11, s: [{ shield: 1 }, { a: -1 }] },
    {
      i: 43,
      s: [
        { m: 1, jumping: true },
        { a: -1, allAdjacentEnemies: true }
      ]
    },
    { i: 58, s: [{ m: -1 }, { a: 1 }] },
    {
      i: 58,
      s: [
        { m: 1, jumping: true },
        { a: -1 },
        {
          text: 'All attacks targeting Giant Viper this round gain Disadvantage'
        }
      ]
    },
    {
      i: 43,
      s: [
        { m: -1, jumping: true },
        { a: 0, target: 2 }
      ]
    },
    { i: 23, s: [{ m: -1 }, { a: -1, immobilize: true }, { a: -1 }] }
  ],

  'harrower-infester': [
    { i: 38, s: [{ m: -1 }, { a: 1, target: 2 }] },
    { i: 7, s: [{ m: 0 }, { a: -1, poison: true }, { dark: true }] },
    { i: 16, s: [{ m: -1 }, { a: -1 }, { heal: 5 }] },
    { i: 16, s: [{ a: 2, immobilize: true }, { retaliate: 2 }] },
    { i: 2, s: [{ shield: 2 }, { retaliate: 2, r: 3 }, { shuffle: true }] },
    {
      i: 30,
      s: [
        { m: -1 },
        { a: 0, area: 'line3' },
        {
          consume: 'dark',
          text: 'Perform "Heal 2, Self" for each target damaged'
        }
      ]
    },
    {
      i: 38,
      s: [
        { m: 0 },
        { a: -1, target: 2 },
        { consume: 'dark', text: '+2 Attack', disarm: true }
      ]
    },
    {
      i: 7,
      s: [{ a: -1, r: 3, muddle: true }, { heal: 4 }, { shuffle: true }]
    }
  ],

  hound: [
    { i: 6, s: [{ m: -1 }, { a: 0, immobilize: true }] },
    {
      i: 7,
      s: [{ m: 0 }, { muddle: true, allAdjacentEnemies: true }]
    },
    {
      i: 19,
      s: [
        { m: 0 },
        { a: 0 },
        {
          text:
            "Add +2 Attack if target is adjacent to any of the Hound's allies"
        },
        { shuffle: true }
      ]
    },
    {
      i: 19,
      s: [
        { m: 0 },
        { a: 0 },
        {
          text:
            "Add +2 Attack if target is adjacent to any of the Hound's allies"
        },
        { shuffle: true }
      ]
    },
    { i: 26, s: [{ m: 0 }, { a: 0 }] },
    { i: 26, s: [{ m: 0 }, { a: 0 }] },
    { i: 83, s: [{ m: -2 }, { a: 1 }] },
    { i: 72, s: [{ a: -1, pierce: 2 }, { m: -2 }, { a: -1, pierce: 2 }] }
  ],

  'cave-bear': [
    { i: 13, s: [{ m: 1 }, { a: -1 }] },
    { i: 14, s: [{ m: -1 }, { a: -1, immobilize: true }] },
    { i: 34, s: [{ a: 1, wound: true }, { shuffle: true }] },
    { i: 41, s: [{ m: 0 }, { a: 0 }] },
    { i: 60, s: [{ m: -1 }, { a: 1 }] },
    {
      i: 80,
      s: [{ a: -1 }, { m: -2 }, { a: -1, wound: true }, { shuffle: true }]
    },
    { i: 3, s: [{ shield: 1 }, { retaliate: 2 }, { heal: 2 }] },
    { i: 61, s: [{ m: 0 }, { a: -1, target: 2 }] }
  ],

  cultist: [
    { i: 31, s: [{ m: -1 }, { heal: 3, r: 3 }] },
    {
      i: 63,
      s: [
        { text: 'Summon normal Living Bones' },
        { text: 'Cultist suffers 2 damage' },
        { shuffle: true }
      ]
    },
    {
      i: 63,
      s: [
        { text: 'Summon normal Living Bones' },
        { text: 'Cultist suffers 2 damage' },
        { shuffle: true }
      ]
    },
    {
      i: 10,
      s: [{ m: -1 }, { a: -1 }, { onDeath: true, a: 2, area: 'around' }]
    },
    {
      i: 10,
      s: [{ m: -1 }, { a: -1 }, { onDeath: true, a: 2, area: 'around' }]
    },
    { i: 39, s: [{ m: -1 }, { a: 0 }, { heal: 1 }] }
  ],

  scout: [
    { i: 29, s: [{ m: -1 }, { a: -1, r: 3 }] },
    { i: 40, s: [{ m: 1 }, { a: -1 }] },
    { i: 53, s: [{ m: 0 }, { a: 0 }] },
    { i: 54, s: [{ m: -2 }, { a: 0, r: 3, poison: true }] },
    { i: 69, s: [{ m: -1 }, { a: 1 }] },
    { i: 92, s: [{ a: 2, poison: true }, { shuffle: true }] },
    { i: 79, s: [{ a: -1, r: 4, target: 2 }] },
    { i: 35, s: [{ m: 1, jumping: true }, { loot: 1 }, { shuffle: true }] }
  ],

  shaman: [
    { i: 23, s: [{ m: 0 }, { heal: 3, r: 3 }, { shuffle: true }] },
    { i: 23, s: [{ m: 0 }, { heal: 3, r: 3 }, { shuffle: true }] },
    {
      i: 89,
      s: [
        { m: -1 },
        { heal: 1, text: 'Affect all adjacent allies' },
        { bless: true }
      ]
    },
    { i: 8, s: [{ m: 0 }, { a: -1, disarm: true }] },
    { i: 74, s: [{ m: -1 }, { a: 1 }] },
    { i: 9, s: [{ m: 1 }, { a: -1, curse: true, target: 2 }] },
    { i: 8, s: [{ m: -1 }, { a: 0, immobilize: true }] },
    { i: 62, s: [{ m: 0 }, { a: 0 }] }
  ],

  guard: [
    { i: 35, s: [{ m: -1 }, { a: 0, r: 2 }] },
    { i: 55, s: [{ m: -1 }, { a: 0 }, { strengthen: true }] },
    { i: 50, s: [{ m: 0 }, { a: 0 }] },
    { i: 50, s: [{ m: 0 }, { a: 0 }] },
    { i: 30, s: [{ m: 1 }, { a: -1 }] },
    { i: 70, s: [{ m: -1 }, { a: 1 }] },
    { i: 15, s: [{ shield: 1 }, { retaliate: 2 }, { shuffle: true }] },
    { i: 15, s: [{ shield: 1 }, { a: 0, poison: true }, { shuffle: true }] }
  ],

  imp: [
    { i: 5, s: [{ shield: 5 }, { heal: 1 }] },
    { i: 37, s: [{ m: 0 }, { a: 0 }] },
    { i: 37, s: [{ m: 0 }, { a: 0 }] },
    { i: 42, s: [{ m: 1 }, { heal: 2, r: 3 }] },
    {
      i: 43,
      s: [{ m: 0 }, { a: -1, target: 2, poison: true }, { shuffle: true }]
    },
    { i: 76, s: [{ m: -1 }, { a: 1 }] },
    {
      i: 43,
      s: [{ m: 0 }, { a: -1, target: 2, curse: true }, { shuffle: true }]
    },
    {
      i: 24,
      s: [
        { strengthen: true, text: 'Affect all allies within Range 2' },
        { muddle: true, text: 'Target all enemies within Range 2' }
      ]
    }
  ],

  'stone-golem': [
    { i: 11, s: [{ retaliate: 3, r: 3 }] },
    {
      i: 28,
      s: [{ m: 1 }, { a: 0 }, { text: 'Stone Golem suffers 1 damage' }]
    },
    { i: 51, s: [{ m: 1 }, { a: -1 }, { shuffle: true }] },
    { i: 65, s: [{ m: 0 }, { a: 0 }] },
    { i: 72, s: [{ a: 1, r: 3 }, { text: 'Stone Golem suffers 2 damage' }] },
    { i: 90, s: [{ m: -1 }, { a: 1 }, { shuffle: true }] },
    { i: 83, s: [{ m: 0 }, { a: -1, allAdjacentEnemies: true }] },
    { i: 28, s: [{ m: 1 }, { a: -2, r: 3, pull: 2, immobilize: true }] }
  ],

  ooze: [
    { i: 36, s: [{ m: 1 }, { a: -1 }] },
    { i: 57, s: [{ m: 0 }, { a: 0 }] },
    { i: 59, s: [{ a: 0, target: 2, poison: true }] },
    { i: 66, s: [{ m: -1 }, { a: 1, r: 1 }] },
    {
      i: 94,
      s: [
        { text: 'Ooze suffers 2 damage' },
        {
          text:
            'Summon normal Ooze with HP equal to the summoning Ooze (limit to max normal Ooze HP value)'
        },
        { shuffle: true }
      ]
    },
    {
      i: 94,
      s: [
        { text: 'Ooze suffers 2 damage' },
        {
          text:
            'Summon normal Ooze with HP equal to the summoning Ooze (limit to max normal Ooze HP value)'
        },
        { shuffle: true }
      ]
    },
    { i: 66, s: [{ m: -1 }, { loot: 1 }, { heal: 2 }] },
    {
      i: 85,
      s: [
        { push: 1, poison: true, allAdjacentEnemies: true },
        { a: 1, r: -1 }
      ]
    }
  ],

  lurker: [
    {
      i: 11,
      s: [
        { shield: 1 },
        { consume: 'frost', text: 'Shield 2 instead' },
        { wound: true, allAdjacentEnemies: true },
        { shuffle: true }
      ]
    },
    { i: 28, s: [{ m: 1 }, { a: -1 }] },
    { i: 38, s: [{ m: 0 }, { a: 0 }] },
    {
      i: 38,
      s: [{ m: 0 }, { a: 0 }, { text: 'Target one enemy with all attacks' }]
    },
    { i: 61, s: [{ m: -1 }, { a: 1 }] },
    { i: 64, s: [{ a: 1, allAdjacentEnemies: true }] },
    {
      i: 41,
      s: [
        { consume: 'frost', strengthen: true },
        { m: 0 },
        { a: -1, wound: true }
      ]
    },
    {
      i: 23,
      s: [
        { shield: 1 },
        { m: 0 },
        { a: -1 },
        { produce: 'frost' },
        { shuffle: true }
      ]
    }
  ],

  'deep-terror': [
    { i: 65, s: [{ a: 0, r: 3, target: 3, curse: true }] },
    { i: 60, s: [{ a: 0, pierce: 3, area: 'line5' }, { shuffle: true }] },
    { i: 60, s: [{ a: 0, pierce: 3, area: 'line5' }, { shuffle: true }] },
    {
      i: 84,
      s: [
        { a: -1, allAdjacentEnemies: true },
        { a: 0, r: 4, wound: true }
      ]
    },
    {
      i: 75,
      s: [
        { a: 0, poison: true },
        { a: -1, r: 5, immobilize: true }
      ]
    },
    {
      i: 75,
      s: [
        { a: -2, allAdjacentEnemies: true, disarm: true },
        { a: 0, r: 3, target: 2 }
      ]
    },
    {
      i: 96,
      s: [{ a: -2, r: 6, text: 'Summon normal Deep Terror adjacent to target' }]
    },
    {
      i: 54,
      s: [
        { wound: true, poison: true, allAdjacentEnemies: true },
        { a: 0, r: 4 }
      ]
    }
  ],

  'savvas-icestorm': [
    {
      i: 70,
      s: [
        { push: 2, allAdjacentEnemies: true },
        { consume: 'wind', text: 'Push 4 instead' },
        { a: 1, r: 1 }
      ]
    },
    { i: 98, s: [{ text: 'Summon normal Wind Demon' }, { produce: 'wind' }] },
    { i: 98, s: [{ text: 'Summon normal Frost Demon' }, { produce: 'frost' }] },
    {
      i: 19,
      s: [
        { m: 0 },
        { a: -1, r: -1 },
        { shield: 1, text: 'Affect self and all allies within Range 2' },
        { produce: 'frost' }
      ]
    },
    {
      i: 14,
      s: [
        { a: 0 },
        { consume: 'frost', text: '+2 Attack', immobilize: true },
        { retaliate: 2 },
        { produce: 'wind' }
      ]
    },
    {
      i: 14,
      s: [
        { shield: 4 },
        { heal: 2, r: 3 },
        { consume: 'frost', text: '+3 Heal' },
        { consume: 'wind', a: 0 }
      ]
    },
    {
      i: 47,
      s: [
        { disarm: true, allAdjacentEnemies: true },
        { m: 0 },
        { a: -1 },
        { produce: 'wind' },
        { shuffle: true }
      ]
    },
    {
      i: 35,
      s: [
        { m: -1 },
        { a: -1, area: '2cone-from' },
        { produce: 'frost' },
        { shuffle: true }
      ]
    }
  ],

  'savvas-lavaflow': [
    { i: 97, s: [{ text: 'Summon normal Flame Demon' }, { produce: 'fire' }] },
    { i: 97, s: [{ text: 'Summon normal Earth Demon' }, { produce: 'grass' }] },
    {
      i: 22,
      s: [
        { m: 1 },
        { a: -1, allAdjacentEnemies: true },
        { consume: 'fire', retaliate: 3 }
      ]
    },
    {
      i: 68,
      s: [
        { m: -1 },
        {
          a: 1,
          r: 3,
          text: 'All allies and enemies adjacent to target suffer 2 damage'
        },
        { produce: 'grass' },
        { shuffle: true }
      ]
    },
    {
      i: 41,
      s: [
        { m: 0 },
        { a: -1, area: 'line3' },
        { consume: 'grass', text: '+2 Attack', immobilize: true }
      ]
    },
    {
      i: 51,
      s: [
        { text: 'All enemies suffer 2 damage' },
        { consume: 'fire', text: 'Wound all enemies' },
        { consume: 'grass', text: 'Disarm all enemies' }
      ]
    },
    {
      i: 31,
      s: [
        { heal: 4, r: 3 },
        { consume: 'grass', target: 3 }
      ]
    },
    {
      i: 68,
      s: [
        { m: -1 },
        { a: -1, r: 3, target: 2 },
        { produce: 'fire' },
        { shuffle: true }
      ]
    }
  ],

  'living-spirit': [
    { i: 22, s: [{ m: -1 }, { a: -1, muddle: true }, { shuffle: true }] },
    {
      i: 33,
      s: [
        { m: 0 },
        { a: -1, text: 'Target all enemies within range' },
        { shuffle: true }
      ]
    },
    { i: 48, s: [{ m: 0 }, { a: 0 }] },
    { i: 48, s: [{ m: 0 }, { a: 0 }] },
    { i: 61, s: [{ a: 0, r: -1, target: 2 }] },
    { i: 75, s: [{ m: -1 }, { a: 1, r: -1 }, { heal: 1 }] },
    {
      i: 55,
      s: [
        { m: 0 },
        { curse: true, text: 'Target all enemies within range' },
        { produce: 'frost' }
      ]
    },
    { i: 67, s: [{ m: -1 }, { a: 1 }, { consume: 'frost', stun: true }] }
  ],

  'living-corpse': [
    { i: 91, s: [{ m: 0 }, { text: 'Living Corpse suffers 1 damage' }] },
    {
      i: 21,
      s: [
        { m: 1 },
        { muddle: true, immobilize: true, text: 'Target one adjacent enemy' }
      ]
    },
    { i: 47, s: [{ m: 1 }, { a: -1 }] },
    { i: 82, s: [{ m: -1 }, { a: 1 }] },
    {
      i: 32,
      s: [{ a: 2, push: 1 }, { text: 'Living Corpse suffers 1 damage' }]
    },
    { i: 66, s: [{ m: 0 }, { a: 0 }, { shuffle: true }] },
    { i: 66, s: [{ m: 0 }, { a: 0 }, { shuffle: true }] },
    { i: 71, s: [{ m: 0 }, { a: 1, poison: true, allAdjacentEnemies: true }] }
  ],

  'living-bones': [
    { i: 64, s: [{ m: -1 }, { a: 1 }] },
    { i: 12, s: [{ shield: 1 }, { heal: 2 }, { shuffle: true }] },
    { i: 25, s: [{ m: 1 }, { a: -1 }] },
    { i: 20, s: [{ m: -2 }, { a: 0 }, { heal: 2 }, { shuffle: true }] },
    { i: 45, s: [{ m: 0 }, { a: 0 }] },
    { i: 45, s: [{ m: 0 }, { a: 0 }] },
    {
      i: 74,
      s: [{ m: 0 }, { a: 0, text: 'Target one enemy with all attacks' }]
    },
    { i: 81, s: [{ a: 2 }] }
  ],

  'earth-demon': [
    { i: 79, s: [{ m: 1 }, { a: 0 }, { consume: 'wind', text: '-2 Attack' }] },
    {
      i: 93,
      s: [
        { m: -1 },
        { a: -1, allAdjacentEnemies: true },
        { consume: 'grass', push: 1 }
      ]
    },
    {
      i: 87,
      s: [
        { m: 0 },
        { a: -1, area: 'anchored-diamond' },
        { consume: 'any', produce: 'grass' }
      ]
    },
    { i: 42, s: [{ m: 1 }, { a: -1 }, { shuffle: true }] },
    {
      i: 40,
      s: [
        { heal: 3 },
        { consume: 'grass', text: 'Immobilize all enemies within Range 3' },
        { shuffle: true }
      ]
    },
    { i: 62, s: [{ m: 0 }, { a: 0 }, { produce: 'grass' }] },
    { i: 83, s: [{ m: -1 }, { a: 1 }, { produce: 'grass' }] },
    {
      i: 71,
      s: [
        { a: 0, r: 4 },
        { consume: 'grass', target: 2 }
      ]
    }
  ],

  'flame-demon': [
    { i: 3, s: [{ m: 1 }, { a: -1 }, { produce: 'fire' }] },
    { i: 24, s: [{ m: 0 }, { a: 0 }, { produce: 'fire' }] },
    {
      i: 46,
      s: [{ a: 0 }, { consume: 'fire', area: 'burst' }, { shuffle: true }]
    },
    {
      i: 49,
      s: [
        { a: 0, area: 'line2' },
        { consume: 'fire', text: '+1 Attack', wound: true }
      ]
    },
    { i: 67, s: [{ m: -1 }, { a: 1, r: -1 }, { produce: 'fire' }] },
    {
      i: 77,
      s: [
        { a: 0, allAdjacentEnemies: true },
        { consume: 'frost', text: 'Flame Demon suffers 1 damage' }
      ]
    },
    {
      i: 30,
      s: [
        { consume: 'fire', text: 'All adjacent enemies suffer 2 damage' },
        { m: 0 },
        { a: -2, wound: true, target: 2 },
        { shuffle: true }
      ]
    },
    {
      i: 8,
      s: [
        { m: -1 },
        { text: 'Create a 4 damage trap' },
        { consume: 'any', produce: 'fire' }
      ]
    }
  ],

  'frost-demon': [
    {
      i: 78,
      s: [
        { m: -1 },
        { a: 0, area: 'anchored-tri' },
        { produce: 'frost' },
        { shuffle: true }
      ]
    },
    {
      i: 78,
      s: [
        { m: -1 },
        { a: 0, area: 'anchored-tri' },
        { produce: 'frost' },
        { shuffle: true }
      ]
    },
    {
      i: 58,
      s: [{ m: -1 }, { a: -1, pierce: 3 }, { consume: 'any', produce: 'frost' }]
    },
    {
      i: 18,
      s: [
        { shield: 2 },
        { m: 1 },
        { consume: 'fire', text: 'Frost Demon suffers 1 damage' }
      ]
    },
    { i: 58, s: [{ m: 0 }, { a: 0 }] },
    {
      i: 58,
      s: [
        { m: -1 },
        { a: 0, r: 2 },
        { consume: 'frost', text: '+2 Attack, +1 Range' }
      ]
    },
    {
      i: 18,
      s: [
        { immobilize: true, text: 'Target all enemies within Range 2' },
        { consume: 'frost', heal: 3 }
      ]
    },
    { i: 38, s: [{ m: 1 }, { a: -1 }] }
  ],

  'night-demon': [
    { i: 4, s: [{ m: 1 }, { a: -1 }, { produce: 'dark' }] },
    { i: 7, s: [{ m: 1 }, { a: -1 }, { consume: 'dark', invisible: true }] },
    { i: 22, s: [{ m: 0 }, { a: 0 }, { produce: 'dark' }] },
    {
      i: 26,
      s: [
        { a: -2, r: 3, target: 3 },
        { consume: 'dark', muddle: true }
      ]
    },
    {
      i: 46,
      s: [
        { m: -1 },
        { a: 1 },
        { consume: 'dark', text: '+2 Attack' },
        { shuffle: true }
      ]
    },
    { i: 41, s: [{ m: -1 }, { a: 1 }, { produce: 'dark' }, { shuffle: true }] },
    {
      i: 35,
      s: [
        { a: -1 },
        { a: -1, pierce: 2 },
        { consume: 'light', text: 'Curse self' }
      ]
    },
    {
      i: 15,
      s: [
        { m: 0 },
        { a: -1 },
        { text: 'All adjacent enemies and allies suffer 1 damage' },
        { consume: 'any', produce: 'dark' }
      ]
    }
  ],

  'wind-demon': [
    {
      i: 21,
      s: [{ m: 0 }, { a: 0, pull: 1 }, { produce: 'wind' }, { shuffle: true }]
    },
    {
      i: 29,
      s: [{ m: 0 }, { a: -1, target: 2 }, { consume: 'wind', push: 2 }]
    },
    {
      i: 43,
      s: [
        { push: 1, allAdjacentEnemies: true },
        { a: 0 },
        { consume: 'grass', text: '-2 Range' }
      ]
    },
    {
      i: 2,
      s: [
        { shield: 1 },
        { m: -1 },
        { a: -1 },
        { consume: 'any', produce: 'wind' }
      ]
    },
    {
      i: 37,
      s: [
        { m: 0 },
        { a: 0, area: 'anchored-diamond' },
        { consume: 'wind', text: '+1 Attack', area: 'anchored-burst' }
      ]
    },
    { i: 43, s: [{ m: -1 }, { a: 1 }, { consume: 'wind', target: 2 }] },
    {
      i: 21,
      s: [{ m: 0 }, { a: 0, pull: 1 }, { produce: 'wind' }, { shuffle: true }]
    },
    { i: 9, s: [{ a: -1 }, { heal: 1 }, { consume: 'wind', invisible: true }] }
  ],

  'sun-demon': [
    {
      i: 17,
      s: [
        { heal: 3, r: 3 },
        { consume: 'light', text: 'Target all allies within range' },
        { shuffle: true }
      ]
    },
    {
      i: 36,
      s: [
        { m: 0 },
        { a: 0, text: 'Target all adjacent enemies' },
        { produce: 'light' }
      ]
    },
    {
      i: 36,
      s: [
        { m: 0 },
        { a: 0, text: 'Target all adjacent enemies' },
        { produce: 'light' }
      ]
    },
    { i: 68, s: [{ m: 0 }, { a: 1 }, { produce: 'light' }] },
    {
      i: 73,
      s: [{ m: 0 }, { a: 1 }, { consume: 'light', heal: 3 }, { shuffle: true }]
    },
    {
      i: 95,
      s: [
        { m: -1 },
        { a: 0, r: 4 },
        { consume: 'light', text: 'Target all enemies within range' }
      ]
    },
    {
      i: 88,
      s: [
        { m: -1 },
        { a: -1, allAdjacentEnemies: true },
        { consume: 'dark', text: 'Muddle self' }
      ]
    },
    {
      i: 50,
      s: [{ m: 0 }, { a: 0, r: 3 }, { consume: 'any', produce: 'light' }]
    }
  ],

  boss: [
    { i: 79, s: [{ text: 'Special 1' }] },
    { i: 85, s: [{ text: 'Special 1' }, { shuffle: true }] },
    { i: 17, s: [{ text: 'Special 2' }, { shuffle: true }] },
    { i: 11, s: [{ text: 'Special 2' }] },
    { i: 73, s: [{ text: 'Special 1' }] },
    { i: 14, s: [{ text: 'Special 2' }] },
    { i: 52, s: [{ m: -1 }, { a: -1, r: 3, target: 2 }] },
    { i: 36, s: [{ m: 0 }, { a: 0 }] }
  ]
}
