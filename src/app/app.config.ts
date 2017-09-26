export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};

export const questionsMap = {
    q1a: {
        text: `Which of the following best describes your ability to walk?`,
        options: [
            {
                text: `I can walk without any problem`,
                score: 0,
                jump: 'q3'
            }, {
                text: `I have some difficulties with walking, but can walk without aid`,
                score: 1,
                jump: 'q1b'
            }, {
                text: `I require a cane, crutch, or other aid to walk`,
                score: 2,
                jump: 'q1c'
            }, {
                text: `I require a wheelchair for almost all activities`,
                score: 3,
                jump: 'q3'
            }, {
                text: `I am confined to bed most of the time`,
                score: 4,
                jump: 'q3'
            }
        ]
    },
    q1b: {
        text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
        options: [
            {
                text: `More than 1500 feet, 500 meters or about five football fields`,
                score: 0,
                jump: 'q2'
            }, {
                text: `About 900 to 1500 feet, 300 meters or about 3 football fields`,
                score: 1,
                jump: 'q2'
            }, {
                text: `About 600 to 899 feet, 200 meters or about 2 football fields`,
                score: 2,
                jump: 'q2'
            }, {
                text: `About 300 to 599 feet, 100 meters or about 1 football field`,
                score: 3,
                jump: 'q2'
            }
        ]
    },
    q1c: {
        text: `When I use an aid (cane, crutch, walker), I can walk:`,
        options: [
            {
                text: `About 300 to 400 feet, 120 meters or about 1 football field`,
                score: 0,
                jump: 'q2'
            }, {
                text: `About 150 to 299 feet or 50 meters`,
                score: 1,
                jump: 'q2'
            }, {
                text: `About 50 to 149 feet or 20 meters`,
                score: 2,
                jump: 'q2'
            }, {
                text: `About 15 to 50 feet or 20 meters`,
                score: 3,
                jump: 'q2'
            }, {
                text: `Less than 15 feet or 5 meters`,
                score: 4,
                jump: 'q2'
            }
        ]
    },
    q2: {
        text: `When you move about, how often do you use any of the following?`,
        sub: [
            {
                a: {
                    text: `A cane, crutch, or someone to hold on to.`,
                    options: [
                        {
                            text: `Never or rarely`,
                            score: 0,
                            jump: 'q3'
                        }, {
                            text: `Sometimes`,
                            score: 1,
                            jump: 'q3'
                        }, {
                            text: `Less than half the time`,
                            score: 2,
                            jump: 'q3'
                        }, {
                            text: `More than half the time`,
                            score: 3,
                            jump: 'q3'
                        }, {
                            text: `All the time or almost all of the time`,
                            score: 4,
                            jump: 'q3'
                        }
                    ]
                },
                b: {
                    text: ` A walker or other bilateral support.`,
                    options: [
                        {
                            text: 'Never or rarely',
                            score: 0,
                            jump: 'q3'
                        }, {
                            text: 'Less than half the time',
                            score: 1,
                            jump: 'q3'
                        }, {
                            text: 'More than half the time',
                            score: 2,
                            jump: 'q3'
                        }, {
                            text: 'All the time or almost all of the time',
                            score: 3,
                            jump: 'q3'
                        }
                    ]
                },
                c: {
                    text: `A wheelchair.`,
                    options: [
                        {
                            text: 'Never or rarely',
                            score: 0,
                            jump: 'q3'
                        }, {
                            text: 'Less than half the time',
                            score: 1,
                            jump: 'q3'
                        }, {
                            text: 'More than half the time',
                            score: 2,
                            jump: 'q3'
                        }, {
                            text: 'All the time or almost all of the time',
                            score: 3,
                            jump: 'q3'
                        }
                    ]
                }
            }
        ]
    },
    q3: {
        text: `Do you have any of the problems below?`,
        sub: [
            {
                a: {
                    text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`,
                    options: [
                        {
                            text: `Yes`,
                            score: 1,
                            jump: 'q4'
                        }, {
                            text: `No`,
                            score: 0,
                            jump: 'q4'
                        }
                    ]
                },
                b: {
                    text: `Weakness in arms or legs?`,
                    options: [
                        {
                            text: `Yes`,
                            score: 1,
                            jump: 'q5'
                        }, {
                            text: `No`,
                            score: 0,
                            jump: 'q5'
                        }
                    ]
                },
                c: {
                    text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                    options: [
                        {
                            text: `Yes`,
                            score: 1,
                            jump: 'q6'
                        }, {
                            text: `No`,
                            score: 0,
                            jump: 'q6'
                        }
                    ]
                },
                d: {
                    text: `Swaying or losing balance when sitting, standing, or walking?`,
                    options: [
                        {
                            text: `Yes`,
                            score: 1,
                            jump: 'q7'
                        }, {
                            text: `No`,
                            score: 0,
                            jump: 'q7'
                        }
                    ]
                },
                e: {
                    text: `Clumsiness or tremors in arms or legs?`,
                    options: [
                        {
                            text: `Yes`,
                            score: 1,
                            jump: 'q8'
                        }, {
                            text: `No`,
                            score: 0,
                            jump: 'q8'
                        }
                    ]
                }
            }
        ]
    }
};

export const navigationMap = {
    "q1:a:0": "q3",
    "q1:a:1": "q1:b",
    "q1:a:2": "q1:c"
}