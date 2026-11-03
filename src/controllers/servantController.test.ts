import { afterEach, beforeEach, describe, expect, mock, spyOn, test, type Mock } from 'bun:test'
import { type PaginatedServantList } from '../models/paginatedServantList'
import { type ServantDetails } from '../models/servantDetails'
import { ServantService } from '../services/servantService'
import { servantController } from './servantController'

const servantList: PaginatedServantList = {
  servants: [
    {
      id: 100100,
      name: 'Altria Pendragon',
      classIcon: 'class.png',
      rarity: 5,
      icon: 'face.png',
    },
  ],
  page: { totalServants: 1, currentPage: 0, pageSize: 20, start: 0, end: 19 },
}

const details: ServantDetails = {
  id: 100100,
  name: 'Altria Pendragon',
  classIcon: 'class.png',
  icon: 'face.png',
  portraits: ['portrait.png'],
  skills: [{ name: 'Charisma', icon: 'skill.png' }],
  appends: [],
  ascensionMaterials: [],
  skillMaterials: [],
  appendMaterials: [],
}

function get(path: string): Promise<Response> {
  return servantController.handle(new Request(`http://localhost/api/v1${path}`))
}

describe('servantController', () => {
  let allServants: Mock<ServantService['allServants']>
  let searchServants: Mock<ServantService['searchServants']>
  let servantDetails: Mock<ServantService['servantDetails']>

  beforeEach(() => {
    allServants = spyOn(ServantService.prototype, 'allServants').mockResolvedValue(servantList)
    searchServants = spyOn(ServantService.prototype, 'searchServants').mockResolvedValue(
      servantList,
    )
    servantDetails = spyOn(ServantService.prototype, 'servantDetails').mockResolvedValue(details)
  })

  afterEach(() => {
    mock.restore()
  })

  describe('GET /servants', () => {
    test('uses default pagination', async () => {
      const resp = await get('/servants')

      expect(resp.status).toBe(200)
      expect(await resp.json()).toEqual(servantList)
      expect(allServants).toHaveBeenCalledWith(0, 20)
    })

    test('passes page and limit through', async () => {
      await get('/servants?page=2&limit=5')

      expect(allServants).toHaveBeenCalledWith(2, 5)
    })

    test('rejects a non-numeric page', async () => {
      const resp = await get('/servants?page=abc')

      expect(resp.status).toBe(422)
      expect(allServants).not.toHaveBeenCalled()
    })

    test('sets a request id header', async () => {
      const resp = await get('/servants')

      expect(resp.headers.get('X-Request-ID')).toBeTruthy()
    })
  })

  describe('GET /servants/search', () => {
    test('passes the query and pagination through', async () => {
      const resp = await get('/servants/search?query=altria&page=1&limit=10')

      expect(resp.status).toBe(200)
      expect(await resp.json()).toEqual(servantList)
      expect(searchServants).toHaveBeenCalledWith('altria', 1, 10)
    })

    test('requires a query', async () => {
      const resp = await get('/servants/search')

      expect(resp.status).toBe(422)
      expect(searchServants).not.toHaveBeenCalled()
    })
  })

  describe('GET /servant/:id', () => {
    test('returns servant details for a numeric id', async () => {
      const resp = await get('/servant/100100')

      expect(resp.status).toBe(200)
      expect(await resp.json()).toEqual(details)
      expect(servantDetails).toHaveBeenCalledWith(100100)
    })

    test('rejects a non-numeric id', async () => {
      const resp = await get('/servant/abc')

      expect(resp.status).toBe(422)
      expect(servantDetails).not.toHaveBeenCalled()
    })
  })
})
