import { Material } from "../models/material"
import { PaginatedServantList } from "../models/paginatedServantList"
import { Servant } from "../models/servant"
import { ServantDetails } from "../models/servantDetails"
import { Skill } from "../models/skill"
import { AtlasAcademy } from "../network/atlasAcademy"

class ServantService {
    static async allServants(page: number = 0, pageSize: number = 20): Promise<PaginatedServantList> {
        const offset: number = page * pageSize
        const resp: {[x: string]: any}[] = await AtlasAcademy.getServants()

        let servants: Servant[] = []
        for (let ndx: number = offset; ndx < offset + pageSize; ndx++) {
            servants.push({
                id: resp[ndx]['id'],
                name: resp[ndx]['name'],
                classIcon: AtlasAcademy.classIconURL(resp[ndx]['classId'], resp[ndx]['rarity']),
                rarity: resp[ndx]['rarity'],
                icon: resp[ndx]['face']
            })
        }

        return {
            servants: servants,
            page: {
                totalServants: resp.length,
                currentPage: page,
                pageSize: pageSize,
                start: offset,
                end: offset + pageSize - 1
            }
        }
    }

    static async searchServants(query: string, page: number = 0, pageSize: number = 20): Promise<PaginatedServantList> {
        const offset: number = page * pageSize
        const resp: {[x: string]: any}[] = await AtlasAcademy.searchServants(query)

        let servants: Servant[] = []
        for (let ndx: number = offset; ndx < offset + pageSize; ndx++) {
            servants.push({
                id: resp[ndx]['id'],
                name: resp[ndx]['name'],
                classIcon: AtlasAcademy.classIconURL(resp[ndx]['classId'], resp[ndx]['rarity']),
                rarity: resp[ndx]['rarity'],
                icon: resp[ndx]['face']
            })
        }

        return {
            servants: servants,
            page: {
                totalServants: resp.length,
                currentPage: page,
                pageSize: pageSize,
                start: offset,
                end: offset + pageSize - 1
            }
        }
    }

    static async servantDetails(id: number): Promise<ServantDetails> {
        const resp: {[x: string]: any} = await AtlasAcademy.getServant(id)

        let portraits: string[] = []
        for (const k in resp['extraAssets']['charaGraph']['ascension']) {
            portraits.splice(parseInt(k), 0, resp['extraAssets']['charaGraph']['ascension'][k])
        }

        let skills: Skill[] = []
        resp['skills'].forEach((v: {[x: string]: any}) => {
            skills.push({
                name: v['name'],
                icon: v['icon']
            })
        });

        let appends: Skill[] = []
        resp['appendPassive'].forEach((v: {[x: string]: any}) => {
            appends.push({
                name: v['skill']['name'],
                icon: v['skill']['icon']
            })
        });

        return {
            id: resp['id'],
            name: resp['name'],
            classIcon: AtlasAcademy.classIconURL(resp['classId'], resp['rarity']),
            icon: resp['extraAssets']['faces']['ascension']['1'],
            portraits: portraits,
            skills: skills,
            appends: appends,
            ascensionMaterials: this.materials(resp['ascensionMaterials']),
            skillMaterials: this.materials(resp['skillMaterials']),
            appendMaterials: this.materials(resp['appendSkillMaterials'])
        }
    }

    private static materials(materialResp: {[x: string]: any}): {qp: number, materials: Material[]}[] {
        let materials: {qp: number, materials: Material[]}[] = []
        for (const o in materialResp) {
            let items: Material[] = []
            materialResp[o]['items'].forEach((v: {[x: string]: any}) => {
                items.push({
                    id: v['item']['id'],
                    name: v['item']['name'],
                    icon: v['item']['icon'],
                    amount: v['amount']
                })
            })

            materials.push({
                materials: items,
                qp: materialResp[o]['qp']
            })
        }

        return materials
    }
}

export { ServantService }
