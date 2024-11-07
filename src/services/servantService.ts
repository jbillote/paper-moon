class ServantService {
    static allServants(page: number = 0) {
        return [
            {
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
            },
            {
                id: 505500,
                name: 'Kuonji Alice',
                classIcon: 'https://static.atlasacademy.io/JP/ClassIcons/class3_5.png',
                icon: 'https://static.atlasacademy.io/JP/Faces/f_5055000.png',
                portraits: [
                    'https://static.atlasacademy.io/JP/CharaGraph/505500/505500a@1.png',
                    'https://static.atlasacademy.io/JP/CharaGraph/505500/505500a@2.png',
                    'https://static.atlasacademy.io/JP/CharaGraph/505500/505500b@1.png',
                    'https://static.atlasacademy.io/JP/CharaGraph/505500/505500b@2.png'
                ]
            }
        ]
    }

    static servant(id: number) {
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
    }
}

export { ServantService }
