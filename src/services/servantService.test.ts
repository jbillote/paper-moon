import { afterEach, beforeEach, describe, expect, mock, spyOn, test, type Mock } from 'bun:test'
import { type Material } from '../models/material'
import { AtlasAcademy } from '../network/atlasAcademy'
import { basicServants, servantResponse, silentLogger } from '../test/fixtures'
import { ServantService } from './servantService'

describe('ServantService', () => {
  let service: ServantService
  let searchServants: Mock<AtlasAcademy['searchServants']>
  let getServant: Mock<AtlasAcademy['getServant']>

  beforeEach(() => {
    spyOn(AtlasAcademy.prototype, 'getServants').mockResolvedValue(basicServants)
    searchServants = spyOn(AtlasAcademy.prototype, 'searchServants').mockResolvedValue(
      basicServants.slice(0, 2),
    )
    getServant = spyOn(AtlasAcademy.prototype, 'getServant').mockResolvedValue(
      structuredClone(servantResponse),
    )
    service = new ServantService(silentLogger)
  })

  afterEach(() => {
    mock.restore()
  })

  describe('allServants', () => {
    test('maps the remote servant list into servants', async () => {
      const result = await service.allServants()

      expect(result.servants).toHaveLength(5)
      expect(result.servants[0]).toEqual({
        id: 100100,
        name: 'Altria Pendragon',
        classIcon: 'https://static.atlasacademy.io/JP/ClassIcons/class3_1.png',
        rarity: 5,
        icon: 'face/100100.png',
      })
      expect(result.page).toEqual({
        totalServants: 5,
        currentPage: 0,
        pageSize: 20,
        start: 0,
        end: 19,
      })
    })

    test('returns the requested page', async () => {
      const result = await service.allServants(1, 2)

      expect(result.servants.map((s) => s.id)).toEqual([100300, 100400])
      expect(result.page).toEqual({
        totalServants: 5,
        currentPage: 1,
        pageSize: 2,
        start: 2,
        end: 3,
      })
    })

    test('returns a partial last page', async () => {
      const result = await service.allServants(2, 2)

      expect(result.servants.map((s) => s.id)).toEqual([100500])
    })

    test('returns no servants past the end of the list', async () => {
      const result = await service.allServants(10, 2)

      expect(result.servants).toEqual([])
      expect(result.page.totalServants).toBe(5)
    })
  })

  describe('searchServants', () => {
    test('searches with the query and paginates the results', async () => {
      const result = await service.searchServants('alt', 0, 1)

      expect(searchServants).toHaveBeenCalledWith('alt')
      expect(result.servants.map((s) => s.id)).toEqual([100100])
      expect(result.page).toEqual({
        totalServants: 2,
        currentPage: 0,
        pageSize: 1,
        start: 0,
        end: 0,
      })
    })
  })

  describe('servantDetails', () => {
    test('maps the remote servant into servant details', async () => {
      const result = await service.servantDetails(100100)

      expect(getServant).toHaveBeenCalledWith(100100)
      expect(result.id).toBe(100100)
      expect(result.name).toBe('Altria Pendragon')
      expect(result.classIcon).toBe('https://static.atlasacademy.io/JP/ClassIcons/class3_1.png')
      expect(result.icon).toBe('face/1.png')
      expect(result.portraits).toEqual([
        'portrait/1.png',
        'portrait/2.png',
        'portrait/3.png',
        'portrait/4.png',
      ])
      expect(result.skills).toEqual([
        { name: 'Charisma', icon: 'skill/1.png' },
        { name: 'Mana Burst', icon: 'skill/2.png' },
        { name: 'Instinct', icon: 'skill/3.png' },
      ])
      expect(result.appends).toEqual([
        { name: 'Extra Attack Up', icon: 'append/1.png' },
        { name: 'Mana Loading', icon: 'append/2.png' },
      ])
    })

    test('maps material requirements in order', async () => {
      const result = await service.servantDetails(100100)

      expect(result.ascensionMaterials).toHaveLength(3)
      expect(result.ascensionMaterials[1]).toEqual({
        qp: 300000,
        materials: [
          { id: 7001, name: 'Saber Piece', icon: 'item/7001.png', amount: 12 },
          { id: 6503, name: 'Proof of Hero', icon: 'item/6503.png', amount: 22 },
        ],
      })
      expect(result.skillMaterials.map((m) => m.qp)).toEqual([200000, 400000])
      expect(result.appendMaterials).toEqual([
        {
          qp: 50000,
          materials: [{ id: 6503, name: 'Proof of Hero', icon: 'item/6503.png', amount: 3 }],
        },
      ])
    })
  })

  describe('servantMaterials', () => {
    // Ranges are [start, end) pairs in the order: ascension, skills 1-3, appends 1-5
    function ranges(overrides: Partial<Record<number, [number, number]>> = {}): number[] {
      const all: [number, number][] = Array.from({ length: 9 }, (_, i) => overrides[i] ?? [0, 0])
      return all.flat()
    }

    function servantMaterials(materials: Material[], r: number[]): Promise<number> {
      return (service.servantMaterials as (...args: unknown[]) => Promise<number>).call(
        service,
        100100,
        materials,
        ...r,
      )
    }

    test('returns zero and adds nothing when no levels are requested', async () => {
      const materials: Material[] = []

      expect(await servantMaterials(materials, ranges())).toBe(0)
      expect(materials).toEqual([])
    })

    test('totals QP and aggregates materials across ranges', async () => {
      const materials: Material[] = []

      const qp = await servantMaterials(
        materials,
        ranges({
          0: [0, 2], // ascension: 100k + 300k
          1: [0, 2], // skill 1: 200k + 400k
          2: [1, 2], // skill 2: 400k
          4: [0, 1], // append 1: 50k
        }),
      )

      expect(qp).toBe(1450000)
      expect(materials).toEqual([
        { id: 7001, name: 'Saber Piece', icon: 'item/7001.png', amount: 17 },
        { id: 6503, name: 'Proof of Hero', icon: 'item/6503.png', amount: 25 },
        { id: 6001, name: 'Gem of Saber', icon: 'item/6001.png', amount: 29 },
      ])
    })

    test('adds to materials that are already in the list', async () => {
      const materials: Material[] = [
        { id: 6001, name: 'Gem of Saber', icon: 'item/6001.png', amount: 100 },
      ]

      await servantMaterials(materials, ranges({ 1: [0, 1] }))

      expect(materials).toEqual([
        { id: 6001, name: 'Gem of Saber', icon: 'item/6001.png', amount: 105 },
      ])
    })

    test('clamps ranges that extend past the available levels', async () => {
      const materials: Material[] = []

      const qp = await servantMaterials(materials, ranges({ 0: [0, 99] }))

      expect(qp).toBe(1400000)
      expect(materials.map((m) => [m.id, m.amount])).toEqual([
        [7001, 17],
        [6503, 22],
        [7101, 5],
      ])
    })

    test('does not mutate the required materials when aggregating', async () => {
      const first: Material[] = []
      const second: Material[] = []

      await servantMaterials(first, ranges({ 1: [0, 1], 2: [0, 1] }))
      await servantMaterials(second, ranges({ 1: [0, 1], 2: [0, 1] }))

      expect(first).toEqual([{ id: 6001, name: 'Gem of Saber', icon: 'item/6001.png', amount: 10 }])
      expect(second).toEqual(first)
    })
  })
})
