import { type Logger } from 'pino'

interface BasicServantResponse {
  id: number
  name: string
  classId: number
  rarity: number
  face: string
}

interface ItemAmountResponse {
  item: { id: number; name: string; icon: string }
  amount: number
}

interface MaterialsResponse {
  items: ItemAmountResponse[]
  qp: number
}

type MaterialsByLevelResponse = Record<string, MaterialsResponse>

interface SkillResponse {
  name: string
  icon: string
}

interface ServantResponse {
  id: number
  name: string
  classId: number
  rarity: number
  extraAssets: {
    charaGraph: { ascension: Record<string, string> }
    faces: { ascension: Record<string, string> }
  }
  skills: SkillResponse[]
  appendPassive: { skill: SkillResponse }[]
  ascensionMaterials: MaterialsByLevelResponse
  skillMaterials: MaterialsByLevelResponse
  appendSkillMaterials: MaterialsByLevelResponse
}

// TODO: Implement more robust error checking for any network errors, JSON
// parsing errors, and any potential type errors
class AtlasAcademy {
  private logger: Logger

  constructor(logger: Logger) {
    this.logger = logger.child({ component: 'atlasAcademy' })
  }

  async getServants(): Promise<BasicServantResponse[]> {
    // TODO: Cache this JSON file since it shouldn't change very often
    const url = 'https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json'
    this.logger.info('Fetching servant list from remote')
    const resp: Response = await fetch(url)
    return (await resp.json()) as BasicServantResponse[]
  }

  async searchServants(query: string): Promise<BasicServantResponse[]> {
    // TODO: Cache response for pagination
    const url = `https://api.atlasacademy.io/basic/JP/servant/search?name=${encodeURIComponent(query)}&lang=en`
    this.logger.info(`Searching for servant with query=${encodeURIComponent(query)}`)
    const resp: Response = await fetch(url)
    return (await resp.json()) as BasicServantResponse[]
  }

  async getServant(id: number): Promise<ServantResponse> {
    // TODO: Cache servant information since it shouldn't change very often
    const url = `https://api.atlasacademy.io/nice/JP/servant/${id}?lang=en`
    this.logger.info(`Fetching details for servant with id ${id} from remote`)
    const resp: Response = await fetch(url)
    return (await resp.json()) as ServantResponse
  }

  classIconURL(classId: number, rarity: number): string {
    // Check for space Ereshkigal; this will probably have to updated
    // manually if more Beast class servants come out
    if (classId === 38) {
      classId = 33
    }

    if (rarity === 3 || rarity === 2) {
      rarity--
    } else {
      rarity = Math.min(3, rarity)
    }

    return `https://static.atlasacademy.io/JP/ClassIcons/class${rarity}_${classId}.png`
  }
}

export {
  AtlasAcademy,
  type BasicServantResponse,
  type ItemAmountResponse,
  type MaterialsByLevelResponse,
  type ServantResponse,
}
