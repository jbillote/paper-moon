class AtlasAcademy {
    static async getServants(start: number, end: number): Promise<{[x:string]: any}[]> {
        // TODO: Cache this JSON file since it shouldn't change very often
        const url: string = "https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json"
        const resp: Response = await fetch(url)
        const respJson: object[] = await resp.json()

        return [...respJson.slice(start, end)]
    }

    static async getServant(id: number): Promise<{[x: string]: any}> {
        const url: string = `https://api.atlasacademy.io/nice/JP/servant/${id}?lang=en`
        const resp: Response = await fetch(url)
        return await resp.json()
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
