import { Location } from './location';

export const LOCATIONS: Location[] = [
  {
    id: 0,
    name: 'Undead Asylum',
    connections: [1],
    locked: false,
    unlocks: [],
    items: [],
    enemies: [{id: 0, name: 'Asylum Demon', unlocks: [1], killed: false, respawns: false}]
  },
  {id: 1, name: 'Firelink', connections: [0, 2, 3], locked: true, unlocks: [2], items: [], enemies: []},
  {id: 2, name: 'Undead Burg', connections: [1, 3], locked: true, unlocks: [3], items: [], enemies: []},
  {id: 3, name: 'Undead Parish', connections: [1, 2], locked: true, unlocks: [], items: [], enemies: [
      {id: 0, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 1, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 2, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 3, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 4, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 5, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 6, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 7, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 8, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 9, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 10, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 11, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 12, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 13, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 14, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 15, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 16, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 17, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 18, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 19, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 20, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 21, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 22, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 23, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 24, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 25, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 26, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 27, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 28, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 29, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 30, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 31, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 32, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 33, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 34, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 35, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 36, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 37, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 38, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
      {id: 39, name: 'Asylum Demon', unlocks: [], killed: false, respawns: false},
    ]},
];
