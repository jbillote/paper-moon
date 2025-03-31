import { material, type Material } from '../models/material'
import { type PaginatedServantList } from '../models/paginatedServantList'
import { type Servant } from '../models/servant'
import { type ServantDetails } from '../models/servantDetails'
import { type Skill } from '../models/skill'
import { AtlasAcademy } from '../network/atlasAcademy'

class ServantService {
  static async allServants(page = 0, pageSize = 20): Promise<PaginatedServantList> {
    const offset: number = page * pageSize
    const resp: Record<string, any>[] = await AtlasAcademy.getServants()

    const servants: Servant[] = []
    for (let ndx: number = offset; ndx < resp.length && ndx < offset + pageSize; ndx++) {
      servants.push({
        id: resp[ndx].id,
        name: resp[ndx].name,
        classIcon: AtlasAcademy.classIconURL(resp[ndx].classId, resp[ndx].rarity),
        rarity: resp[ndx].rarity,
        icon: resp[ndx].face,
      })
    }

    return {
      servants: servants,
      page: {
        totalServants: resp.length,
        currentPage: page,
        pageSize: pageSize,
        start: offset,
        end: offset + pageSize - 1,
      },
    }
  }

  static async searchServants(
    query: string,
    page = 0,
    pageSize = 20,
  ): Promise<PaginatedServantList> {
    const offset: number = page * pageSize
    const resp: Record<string, any>[] = await AtlasAcademy.searchServants(query)

    const servants: Servant[] = []
    for (let ndx: number = offset; ndx < resp.length && ndx < offset + pageSize; ndx++) {
      servants.push({
        id: resp[ndx].id,
        name: resp[ndx].name,
        classIcon: AtlasAcademy.classIconURL(resp[ndx].classId, resp[ndx].rarity),
        rarity: resp[ndx].rarity,
        icon: resp[ndx].face,
      })
    }

    return {
      servants: servants,
      page: {
        totalServants: resp.length,
        currentPage: page,
        pageSize: pageSize,
        start: offset,
        end: offset + pageSize - 1,
      },
    }
  }

  static async servantDetails(id: number): Promise<ServantDetails> {
    const resp: Record<string, any> = await AtlasAcademy.getServant(id)

    const portraits: string[] = []
    for (const k in resp.extraAssets.charaGraph.ascension) {
      portraits.splice(parseInt(k), 0, resp.extraAssets.charaGraph.ascension[k])
    }

    const skills: Skill[] = []
    resp.skills.forEach((v: Record<string, any>) => {
      skills.push({
        name: v.name,
        icon: v.icon,
      })
    })

    const appends: Skill[] = []
    resp.appendPassive.forEach((v: Record<string, any>) => {
      appends.push({
        name: v.skill.name,
        icon: v.skill.icon,
      })
    })

    return {
      id: resp.id,
      name: resp.name,
      classIcon: AtlasAcademy.classIconURL(resp.classId, resp.rarity),
      icon: resp.extraAssets.faces.ascension['1'],
      portraits: portraits,
      skills: skills,
      appends: appends,
      ascensionMaterials: this.materials(resp.ascensionMaterials),
      skillMaterials: this.materials(resp.skillMaterials),
      appendMaterials: this.materials(resp.appendSkillMaterials),
    }
  }

  static async servantMaterials(
    id: number,
    materials: Material[],
    ascensionStart: number,
    ascensionEnd: number,
    skill1Start: number,
    skill1End: number,
    skill2Start: number,
    skill2End: number,
    skill3Start: number,
    skill3End: number,
    append1Start: number,
    append1End: number,
    append2Start: number,
    append2End: number,
    append3Start: number,
    append3End: number,
    append4Start: number,
    append4End: number,
    append5Start: number,
    append5End: number,
  ): Promise<number> {
    const servant = await AtlasAcademy.getServant(id)
    const ascensionMaterials = this.materials(servant.ascensionMaterials)
    const skillMaterials = this.materials(servant.skillMaterials)
    const appendMaterials = this.materials(servant.appendSkillMaterials)

    let qp = 0

    qp += this.calculateMaterials(materials, ascensionMaterials, ascensionStart, ascensionEnd)

    qp += this.calculateMaterials(materials, skillMaterials, skill1Start, skill1End)
    qp += this.calculateMaterials(materials, skillMaterials, skill2Start, skill2End)
    qp += this.calculateMaterials(materials, skillMaterials, skill3Start, skill3End)

    qp += this.calculateMaterials(materials, appendMaterials, append1Start, append1End)
    qp += this.calculateMaterials(materials, appendMaterials, append2Start, append2End)
    qp += this.calculateMaterials(materials, appendMaterials, append3Start, append3End)
    qp += this.calculateMaterials(materials, appendMaterials, append4Start, append4End)
    qp += this.calculateMaterials(materials, appendMaterials, append5Start, append5End)

    return qp
  }

  private static materials(
    materialResp: Record<string, any>,
  ): { qp: number; materials: Material[] }[] {
    const materials: { qp: number; materials: Material[] }[] = []
    for (const o in materialResp) {
      const items: Material[] = []
      materialResp[o].items.forEach((v: Record<string, any>) => {
        items.push({
          id: v.item.id,
          name: v.item.name,
          icon: v.item.icon,
          amount: v.amount,
        })
      })

      materials.push({
        materials: items,
        qp: materialResp[o].qp,
      })
    }

    return materials
  }

  private static calculateMaterials(
    existingMaterials: Material[],
    requiredMaterials: { qp: number; materials: Material[] }[],
    start: number,
    end: number,
  ): number {
    let qp = 0

    for (let ndx = start; ndx < requiredMaterials.length && ndx < end; ndx++) {
      qp += requiredMaterials[ndx].qp

      for (
        let materialNdx = 0;
        materialNdx < requiredMaterials[ndx].materials.length;
        materialNdx++
      ) {
        const existingNdx = existingMaterials.findIndex((value) => {
          return value.id === requiredMaterials[ndx].materials[materialNdx].id
        })

        if (existingNdx < 0) {
          existingMaterials.push({ ...requiredMaterials[ndx].materials[materialNdx] })
        } else {
          existingMaterials[existingNdx].amount +=
            requiredMaterials[ndx].materials[materialNdx].amount
        }
      }
    }

    return qp
  }
}

export { ServantService }
