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
                ],
                skills: [
                    {
                        name: 'Magic Bullet Charging B',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00813.png'
                    },
                    {
                        name: 'Magic Circuits (Rotation) A',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00607.png'
                    },
                    {
                        name: 'Back to Those Days, Once More EX',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00317.png'
                    }
                ],
                appends: [
                    {
                        name: 'Extra Attack Boost',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00301.png'
                    },
                    {
                        name: 'Load Magical Energy',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00601.png'
                    },
                    {
                        name: 'Anti-Saber (ATK Up)',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00300.png'
                    },
                    {
                        name: 'Special Attack Finesse Improvement',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00303.png'
                    },
                    {
                        name: 'Skill Reloading',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00613.png'
                    }
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
                ],
                skills: [
                    {
                        name: 'Diddle Diddle A',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00314.png'
                    },
                    {
                        name: 'Thames Troll C',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00328.png'
                    },
                    {
                        name: 'Lost Robin Rondo E',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00814.png'
                    }
                ],
                appends: [
                    {
                        name: 'Extra Attack Boost',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00301.png'
                    },
                    {
                        name: 'Load Magical Energy',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00601.png'
                    },
                    {
                        name: 'Anti-Foreigner (ATK Up)',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00300.png'
                    },
                    {
                        name: 'Special Attack Finesse Improvement',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00303.png'
                    },
                    {
                        name: 'Skill Reloading',
                        icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00613.png'
                    }
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
            ],
            skills: [
                {
                    name: 'Magic Bullet Charging B',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00813.png'
                },
                {
                    name: 'Magic Circuits (Rotation) A',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00607.png'
                },
                {
                    name: 'Back to Those Days, Once More EX',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00317.png'
                }
            ],
            appends: [
                {
                    name: 'Extra Attack Boost',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00301.png'
                },
                {
                    name: 'Load Magical Energy',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00601.png'
                },
                {
                    name: 'Anti-Saber (ATK Up)',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00300.png'
                },
                {
                    name: 'Special Attack Finesse Improvement',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00303.png'
                },
                {
                    name: 'Skill Reloading',
                    icon: 'https://static.atlasacademy.io/JP/SkillIcons/skill_00613.png'
                }
            ]
        }
    }
}

export { ServantService }
