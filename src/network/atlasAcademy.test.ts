import { afterEach, describe, expect, mock, spyOn, test } from 'bun:test'
import { basicServants, servantResponse, silentLogger } from '../test/fixtures'
import { AtlasAcademy } from './atlasAcademy'

describe('AtlasAcademy', () => {
  const atlasAcademy = new AtlasAcademy(silentLogger)

  afterEach(() => {
    mock.restore()
  })

  describe('classIconURL', () => {
    test.each([
      [1, 5, 'class3_1'],
      [1, 4, 'class3_1'],
      [2, 3, 'class2_2'],
      [3, 2, 'class1_3'],
      [4, 1, 'class1_4'],
      [5, 0, 'class0_5'],
    ])('classId=%d rarity=%d uses %s', (classId, rarity, expected) => {
      expect(atlasAcademy.classIconURL(classId, rarity)).toBe(
        `https://static.atlasacademy.io/JP/ClassIcons/${expected}.png`,
      )
    })

    test('maps Beast class 38 to class 33', () => {
      expect(atlasAcademy.classIconURL(38, 5)).toBe(
        'https://static.atlasacademy.io/JP/ClassIcons/class3_33.png',
      )
    })
  })

  describe('network calls', () => {
    function mockFetch(body: unknown) {
      return spyOn(globalThis, 'fetch').mockResolvedValue(Response.json(body))
    }

    test('getServants fetches the basic servant export', async () => {
      const fetchSpy = mockFetch(basicServants)

      expect(await atlasAcademy.getServants()).toEqual(basicServants)
      expect(fetchSpy).toHaveBeenCalledWith(
        'https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json',
      )
    })

    test('searchServants passes the query to the search endpoint', async () => {
      const fetchSpy = mockFetch(basicServants.slice(0, 1))

      expect(await atlasAcademy.searchServants('altria')).toEqual(basicServants.slice(0, 1))
      expect(fetchSpy).toHaveBeenCalledWith(
        'https://api.atlasacademy.io/basic/JP/servant/search?name=altria&lang=en',
      )
    })

    test('getServant fetches the nice servant endpoint by id', async () => {
      const fetchSpy = mockFetch(servantResponse)

      expect(await atlasAcademy.getServant(100100)).toEqual(servantResponse)
      expect(fetchSpy).toHaveBeenCalledWith(
        'https://api.atlasacademy.io/nice/JP/servant/100100?lang=en',
      )
    })
  })
})
