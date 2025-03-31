// TODO: Implement more robust error checking for any network errors, JSON
// parsing errors, and any potential type errors
class AtlasAcademy {
  static async getServants(): Promise<Record<string, any>[]> {
    // TODO: Cache this JSON file since it shouldn't change very often
    const url = 'https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json'
    const resp: Response = await fetch(url)
    const respJson: Record<string, any>[] = (await resp.json()) as Record<string, any>[]

    return respJson
  }

  static async searchServants(query: string): Promise<Record<string, any>[]> {
    // TODO: Cache response for pagination
    const url = `https://api.atlasacademy.io/basic/JP/servant/search?name=${query}&lang=en`
    const resp: Response = await fetch(url)
    return (await resp.json()) as Record<string, any>[]
  }

  static async getServant(id: number): Promise<Record<string, any>> {
    const url = `https://api.atlasacademy.io/nice/JP/servant/${id}?lang=en`
    const resp: Response = await fetch(url)
    return (await resp.json()) as Record<string, any>[]
  }

  static classIconURL(classId: number, rarity: number): string {
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

export { AtlasAcademy }
