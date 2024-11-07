class AtlasAcademy {
    static async getServant(id: number) {
        const url: string = `https://api.atlasacademy.io/nice/JP/servant/${id}?lang=en`
        const resp: Response = await fetch(url)
        return await resp.json()
    }
}

export { AtlasAcademy }
