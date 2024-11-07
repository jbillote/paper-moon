import { Elysia, t } from 'elysia'
import { servant } from '../models/servant'

const servantController = new Elysia()
    .get('/servants', () => {
        return {
            id: 2501400,
            name: 'Aozaki Aoko',
            classIcon: 'https://static.atlasacademy.io/JP/ClassIcons/class3_25.png',
            icon: 'https://static.atlasacademy.io/JP/Faces/f_25014000.png',
            portraits: [
                'https://static.atlasacademy.io/JP/CharaGraph/2501400/2501400a@1.png',
                'https://static.atlasacademy.io/JP/CharaGraph/2501400/2501400a@2.png',
                'https://static.atlasacademy.io/JP/CharaGraph/2501400/2501400b@1.png',
                'https://static.atlasacademy.io/JP/CharaGraph/2501400/2501400b@2.png'
            ]
        }
    }, {
        response: servant
    })

export { servantController }
