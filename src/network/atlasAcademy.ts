class AtlasAcademy {
    static async getServant(id: number) {
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
