import { pino } from 'pino'
import {
  type BasicServantResponse,
  type ItemAmountResponse,
  type ServantResponse,
} from '../network/atlasAcademy'

const silentLogger = pino({ level: 'silent' })

const basicServants: BasicServantResponse[] = [
  { id: 100100, name: 'Altria Pendragon', classId: 1, rarity: 5, face: 'face/100100.png' },
  { id: 100200, name: 'Altera', classId: 1, rarity: 5, face: 'face/100200.png' },
  { id: 100300, name: 'Gilles de Rais', classId: 1, rarity: 3, face: 'face/100300.png' },
  { id: 100400, name: "Chevalier d'Eon", classId: 1, rarity: 4, face: 'face/100400.png' },
  { id: 100500, name: 'Okita Souji', classId: 1, rarity: 5, face: 'face/100500.png' },
]

function item(id: number, name: string, amount: number): ItemAmountResponse {
  return { item: { id, name, icon: `item/${id}.png` }, amount }
}

const servantResponse: ServantResponse = {
  id: 100100,
  name: 'Altria Pendragon',
  classId: 1,
  rarity: 5,
  extraAssets: {
    charaGraph: {
      ascension: {
        '1': 'portrait/1.png',
        '2': 'portrait/2.png',
        '3': 'portrait/3.png',
        '4': 'portrait/4.png',
      },
    },
    faces: {
      ascension: {
        '1': 'face/1.png',
        '2': 'face/2.png',
      },
    },
  },
  skills: [
    { name: 'Charisma', icon: 'skill/1.png' },
    { name: 'Mana Burst', icon: 'skill/2.png' },
    { name: 'Instinct', icon: 'skill/3.png' },
  ],
  appendPassive: [
    { skill: { name: 'Extra Attack Up', icon: 'append/1.png' } },
    { skill: { name: 'Mana Loading', icon: 'append/2.png' } },
  ],
  ascensionMaterials: {
    '0': { items: [item(7001, 'Saber Piece', 5)], qp: 100000 },
    '1': { items: [item(7001, 'Saber Piece', 12), item(6503, 'Proof of Hero', 22)], qp: 300000 },
    '2': { items: [item(7101, 'Saber Monument', 5)], qp: 1000000 },
  },
  skillMaterials: {
    '1': { items: [item(6001, 'Gem of Saber', 5)], qp: 200000 },
    '2': { items: [item(6001, 'Gem of Saber', 12)], qp: 400000 },
  },
  appendSkillMaterials: {
    '1': { items: [item(6503, 'Proof of Hero', 3)], qp: 50000 },
  },
}

export { basicServants, servantResponse, silentLogger }
