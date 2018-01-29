export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};
export const pagesStack: string[] = [];
export const urlMaps = {
    questionaires1: 'https://private-anon-898cfb6cb7-neuroshareapis.apiary-mock.com/neuroshare/api/all-questionnaire-responses/',
    questionaires: 'http://localhost:3000/all-questionnaire-responses'
};
export const transitArray = [
    'q3.1',
    'q3.2',
    'q3.3',
    'q3.4',
    'q4',
    'q5',
    'q6',
    'q7',
    'q8',
    'q9',
    'q10',
    'q11',
    'q12',
    'q13',
    'q14',
    'q15',
    'q16',
    'q17',
    'q18',
    'q19',
    'q20'
];
// saby
export const screen = {};
export const navMap = {
    q1a: {
        descr1: `The first set of questions will ask about symptoms you might be experiencing. The experience of everyone with MS is different, and you may not experience all of the symptoms that we ask about.`,
        descr2: `Please try your best to answer according to the choices available in each question. You may skip any questions you don’t wish to answer. However, we may not be able to calculate your EDSS score if there is missing information.`,
        text: `Which of the following best describes your ability to walk?`,
        jumpTo: 'q3.1',
        qx_code: "Q001.1",
        section: "Mobility",
        edss: "Yes",
        options: [
            {
                text: `I can walk without any problem`,
                score: 0,
                jumpTo: 'q3.1',
                checked: false,
            }, {
                text: `I have some difficulties with walking, but can walk without aid`,
                score: 1,
                jumpTo: 'q1b',
                checked: false,
            }, {
                text: `I require a cane, crutch, or other aid to walk`,
                score: 2,
                jumpTo: 'q1c',
                checked: false
            }, {
                text: `I require a wheelchair for almost all activities`,
                score: 3,
                jumpTo: 'q3.1',
                checked: false
            }, {
                text: `I am confined to bed most of the time`,
                score: 4,
                jumpTo: 'q3.1',
                checked: false
            }
        ]
    },
    q1b: {
        text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
        jumpTo: 'q2',
        qx_code: "Q001.2",
        section: "Mobility",
        edss: "Yes",
        options: [
            {
                text: `More than 1500 feet, 500 meters or about five football fields`,
                score: 0,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 900 to 1500 feet, 300 meters or about 3 football fields`,
                score: 1,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 600 to 899 feet, 200 meters or about 2 football fields`,
                score: 2,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 300 to 599 feet, 100 meters or about 1 football field`,
                score: 3,
                jumpTo: 'q2',
                checked: false
            }
        ]
    },
    q1c: {
        text: `When I use an aid (cane, crutch, walker), I can walk:`,
        jumpTo: 'q2',
        qx_code: "Q001.3",
        section: "Mobility",
        edss: "Yes",
        options: [
            {
                text: `About 300 to 400 feet, 120 meters or about 1 football field`,
                score: 0,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 150 to 299 feet or 50 meters`,
                score: 1,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 50 to 149 feet or 20 meters`,
                score: 2,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `About 15 to 50 feet or 20 meters`,
                score: 3,
                jumpTo: 'q2',
                checked: false
            }, {
                text: `Less than 15 feet or 5 meters`,
                score: 4,
                jumpTo: 'q2',
                checked: false
            }
        ]
    },
    q2: {
        text: `When you move about, how often do you use any of the following?`,
        jumpTo: 'q3.1',
        section: "Mobility Aid",
        edss: "Yes",
        commonOptions: [
            {
                text: `Never or rarely`,
                score: 0,
                jumpTo: 'q3.1',
                checked: false
            }, {
                text: `Sometimes`,
                score: 1,
                jumpTo: 'q3.1',
                checked: false
            }, {
                text: `Less than half the time`,
                score: 2,
                jumpTo: 'q3.1',
                checked: false
            }, {
                text: `More than half the time`,
                score: 3,
                jumpTo: 'q3.1',
                checked: false
            }, {
                text: `All the time or almost all of the time`,
                score: 4,
                jumpTo: 'q3.1',
                checked: false
            }
        ],
        sub: [
            {
                text: `A cane, crutch, or someone to hold on to.`,
                qx_code: "Q002.1",
            }, {
                text: ` A walker or other bilateral support.`,
                qx_code: "Q002.2",
            }, {
                text: `A wheelchair.`,
                qx_code: "Q002.3",
            }
        ]

    },
    'q3.1': {
        text: `Do you have any of the problems below?`,
        isMultiOptions: true,
        screenPage: 0,
        type: 'table',
        jumpTo: 'q3.2',
        section: "Screening Questions",
        edss: "No",
        sub: [
            {
                text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`,
                qx_code: "Q003.1",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q4',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Weakness in arms or legs?`,
                qx_code: "Q003.2",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q5',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                qx_code: "Q003.3",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q6',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Swaying or losing balance when sitting, standing, or walking?`,
                qx_code: "Q003.4",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q7',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Clumsiness or tremors in arms or legs?`,
                qx_code: "Q003.5",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q8',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }
        ]
    },
    'q3.2': {
        text: `Do you have any of the problems below?`,
        isMultiOptions: true,
        screenPage: 1,
        type: 'table',
        jumpTo: 'q3.3',
        section: "Screening Questions",
        edss: "No",
        sub: [
            {
                text: `Weakness of muscles in your face?`,
                qx_code: "Q003.6",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q9',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Numbness in your face?`,
                qx_code: "Q003.7",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q10',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Blurry vision or blind spots?`,
                qx_code: "Q003.8",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q11',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Double vision?`,
                qx_code: "Q003.9",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q12',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }
        ]
    },
    'q3.3': {
        text: `Do you have any of the problems below?`,
        isMultiOptions: true,
        screenPage: 2,
        type: 'table',
        jumpTo: 'q3.4',
        section: "Screening Questions",
        edss: "No",
        sub: [
            {
                text: `Problems with hearing?`,
                qx_code: "Q003.10",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q13',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Problems with voice?`,
                qx_code: "Q003.11",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q14',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: ` Problems with swallowing?`,
                qx_code: "Q003.12",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q15',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }
        ]
    },
    'q3.4': {
        text: `Do you have any of the problems below?`,
        isMultiOptions: true,
        screenPage: 3,
        type: 'table',
        section: "Screening Questions",
        edss: "No",
        sub: [
            {
                text: `Constipation or loss of bowel control?`,
                qx_code: "Q003.13",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q16',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Loss of bladder control or leakage?`,
                qx_code: "Q003.14",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q17',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Difficulty starting to urinate?`,
                qx_code: "Q003.15",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q19',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }, {
                text: `Concentration, memory, or thinking problems?`,
                qx_code: "Q003.16",
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q20',
                        checked: false
                    }, {
                        text: `No`,
                        score: 0,
                        checked: false
                    }
                ]
            }
        ]
    },
    q4: {
        text: `On an average day, check the answer that best describes your sensation (feeling, numbness, ability to sense touch or hot or cold) in your:`,
        section: "Sensory",
        edss: "Yes",
        commonOptions: [
            {
                text: `Feeling is very good - No problems`,
                score: 0,
                checked: false
            }, {
                text: `Feeling is good`,
                score: 1,
                checked: false
            }, {
                text: `Feeling is fair`,
                score: 2,
                checked: false
            }, {
                text: `Feeling is poor`,
                score: 3,
                checked: false
            }, {
                text: `Feeling is very poor or completely gone`,
                score: 4,
                checked: false
            }
        ],
        sub: [
            {
                text: `Right hand or arm`,
                qx_code: "Q004.1",
            }, {
                text: `Left hand or arm`,
                qx_code: "Q004.2",
            }, {
                text: `Right foot or leg`,
                qx_code: "Q004.3",
            }, {
                text: `Left foot or leg`,
                qx_code: "Q004.4",
            }
        ]
    },
    q5: {
        text: `In general, how much strength do you have to raise each arm and leg in the air?`,
        section: "Limb Strength",
        edss: "Yes",
        commonOptions: [
            {
                text: `Feeling is very good - No problems`,
                score: 0,
                checked: false
            }, {
                text: `Feeling is good`,
                score: 1,
                checked: false
            }, {
                text: `Feeling is fair`,
                score: 2,
                checked: false
            }, {
                text: `Feeling is poor`,
                score: 3,
                checked: false
            }, {
                text: `Feeling is very poor or completely gone`,
                score: 4,
                checked: false
            }
        ],
        sub: [
            {
                text: `Right Arm`,
                qx_code: "Q005.1",
            }, {
                text: `Left Arm`,
                qx_code: "Q005.2",
            }, {
                text: `Right Leg`,
                qx_code: "Q005.3",
            }, {
                text: `Left Leg`,
                qx_code: "Q005.4",
            }
        ]
    },
    q6: {
        text: `In general, do muscle spasms or stiffness ("spasticity") make it hard for you to use (bend or straighten) your arms and legs?`,
        header: `Stiffness and spasms…`,
        section: "Spasms and Stiffness",
        edss: "Yes",
        commonOptions: [
            {
                text: `I do not have stiffness or spasms`,
                score: 0,
                checked: false
            }, {
                text: `Mild, do not make it hard for me to use`,
                score: 1,
                checked: false
            }, {
                text: `Moderate stiffness, but with effort I can use`,
                score: 2,
                checked: false
            }, {
                text: `Sometimes I cannot overcome the stiffness to use my arm or leg`,
                score: 3,
                checked: false
            }, {
                text: `My arm or leg is so contracted that I cannot use it at all`,
                score: 4,
                checked: false
            }
        ],
        sub: [
            {
                text: `Right Arm`,
                qx_code: "Q006.1",
            }, {
                text: `Left Arm`,
                qx_code: "Q006.2",
            }, {
                text: `Right Leg`,
                qx_code: "Q006.3",
            }, {
                text: `Left Leg`,
                qx_code: "Q006.4",
            }
        ]
    },
    q7: {
        division: true,
        section: "Balance",
        edss: "Yes",
        sub: [
            {
                text: `In general, how is your balance when standing?`,
                qx_code: "Q007.1",
                options: [
                    {
                        text: `Very good. I never or rarely lose my balance.`,
                        score: 0,
                        checked: false
                    }, {
                        text: `Good. I sometimes lose my balance or sway when my eyes are closed.`,
                        score: 1,
                        checked: false
                    }, {
                        text: `Poor. I often lose my balance or sway, even when my eyes are open.`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Very poor. I always or almost always lose my balance`,
                        score: 3,
                        checked: false
                    }
                ]
            }, {
                text: `In general, how is your balance when walking a straight line?`,
                qx_code: "Q007.2",
                options: [
                    {
                        text: `I can easily walk a straight line`,
                        score: 0,
                        checked: false
                    }, {
                        text: `I occasionally lose my balance`,
                        score: 1,
                        checked: false
                    }, {
                        text: `I usually have to concentrate to keep my balance`,
                        score: 2,
                        checked: false
                    }, {
                        text: `I lose my balance after a few steps`,
                        score: 3,
                        checked: false
                    }, {
                        text: `I need help to hold my balance`,
                        score: 3,
                        checked: false
                    }
                ]
            }, {
                text: `In general, how is your Balance when sitting?`,
                qx_code: "Q007.3",
                options: [
                    {
                        text: `I am very steady when I sit`,
                        score: 0,
                        checked: false
                    }, {
                        text: `I sway once in a while when I sit`,
                        score: 1,
                        checked: false
                    }, {
                        text: `I sway constantly when I sit but I never need support`,
                        score: 2,
                        checked: false
                    }, {
                        text: `I sometimes need support when I sit to keep from swaying`,
                        score: 3,
                        checked: false
                    }, {
                        text: `I usually need support when I sit to keep from swaying`,
                        score: 4,
                        checked: false
                    }
                ]
            }
        ]
    },
    q8: {
        text: `In general, do tremors or coordination problems make it hard for you to use your arms and legs?`,
        section: "Limb Coordination",
        edss: "Yes",
        commonOptions: [
            {
                text: `I do not have tremors or coordination problems`,
                score: 0,
                checked: false
            }, {
                text: `Rarely make it hard for me to use`,
                score: 'N/A',
                checked: false
            }, {
                text: `Sometimes make it hard for me to use`,
                score: 1,
                checked: false
            }, {
                text: `Often make it hard for me to use`,
                score: 2,
                checked: false
            }, {
                text: `Always make it hard for me to use`,
                score: 3,
                checked: false
            }
        ],
        sub: [
            {
                text: `Your arm(s)?`,
                qx_code: "Q008.1",
            }, {
                text: `Your leg(s)?`,
                qx_code: "Q008.2",
            }
        ]
    },
    q9: {
        text: `In general, how much muscle weakness do you have in your face?`,
        section: "Muscle weakness in face",
        edss: "Yes",
        commonOptions: [
            {
                text: `I do not have muscle weakness in my face`,
                score: 0,
                checked: false
            }, {
                text: `A little, such as when I furrow my eyebrows or laugh`,
                score: 1,
                checked: false
            }, {
                text: `A lot, such as trouble with drooling or when closing my eye(s)`,
                score: 2,
                checked: false
            }, {
                text: `Total weakness or palsy, such as Bell's palsy`,
                score: 3,
                checked: false
            }
        ],
        sub: [
            {
                text: `Right side of your face`,
                qx_code: "Q009.1",
            }, {
                text: `Left side of your face`,
                qx_code: "Q009.2",
            }
        ]
    },
    q10: {
        text: `In general, how much feeling do you have in your face?`,
        section: "Loss of sensation in the face",
        edss: "Yes",
        commonOptions: [
            {
                text: `Feeling is very good. No numbness or pain.`,
                score: 0,
                checked: false
            }, {
                text: `Feeling is good. Some numbness.`,
                score: 1,
                checked: false
            }, {
                text: `Feeling is fair. Hard to tell sharp touch from dull touch.`,
                score: 2,
                checked: false
            }, {
                text: `Feeling is poor. Mild pain.`,
                score: 3,
                checked: false
            }, {
                text: `Feeling is very poor or gone. Moderate to severe pain.`,
                score: 4,
                checked: false
            }
        ],
        sub: [
            {
                text: `Right side of your face`,
                qx_code: "Q010.1",
            }, {
                text: `Left side of your face`,
                qx_code: "Q010.2",
            }
        ]
    },
    q11: {
        text: `Check the answer that best describes your ability to see. If you wear glasses or contact lenses, describe your corrected vision.`,
        section: "Vision",
        edss: "Yes",
        commonOptions: [
            {
                text: `I have no problems with my ability to see.`,
                score: 0,
                checked: false
            }, {
                text: `My vision is slightly blurry`,
                score: 1,
                checked: false
            }, {
                text: `My vision is very blurry`,
                score: 2,
                checked: false
            }, {
                text: `I am blind, or almost blind, in that eye`,
                score: 3,
                checked: false
            }
        ],
        sub: [
            {
                text: `Problems with vision in your right eye`,
                qx_code: "Q011.1",
            }, {
                text: `Problems with vision in your left eye`,
                qx_code: "Q011.2",
            }
        ]
    },
    q12: {
        text: `Do you have double vision?`,
        qx_code: "Q012",
        section: "Double Vision",
        edss: "Yes",
        options: [
            {
                text: `I do NOT have any double vision`,
                score: 0,
                checked: false
            }, {
                text: `I have double vision that comes and goes`,
                score: 1,
                checked: false
            }, {
                text: `I almost always have double vision that goes away when one eye is closed`,
                score: 2,
                checked: false
            }, {
                text: `I have complete loss of eye movement when I look in one or more directions (one or both eyes)`,
                score: 3,
                checked: false
            }
        ]
    },
    q13: {
        text: `Do you have any problems with your hearing?`,
        qx_code: "Q013",
        section: "Hearing",
        edss: "Yes",
        options: [
            {
                text: `I do not have problems hearing`,
                score: 0,
                checked: false
            }, {
                text: `I have mild hearing loss on one side`,
                score: 1,
                checked: false
            }, {
                text: `I have moderate or severe hearing loss on one side`,
                score: 2,
                checked: false
            }, {
                text: `I have total hearing loss on both sides. I am effectively deaf.`,
                score: 3,
                checked: false
            }
        ]
    },
    q14: {
        text: `In general, how is your ability to speak?`,
        qx_code: "Q014",
        section: "Speech",
        edss: "Yes",
        options: [
            {
                text: `I do not have problems speaking`,
                score: 0,
                checked: false
            }, {
                text: `I sometimes slur words but others don't seem to notice`,
                score: 1,
                checked: false
            }, {
                text: `I often slur words and others notice`,
                score: 2,
                checked: false
            }, {
                text: `I slur words so much that it interferes with my ability to have conversations`,
                score: 3,
                checked: false
            }, {
                text: `I slur my words so much that others cannot understand me`,
                score: 4,
                checked: false
            }, {
                text: `I cannot speak`,
                score: 5,
                checked: false
            }
        ]
    },
    q15: {
        text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
        qx_code: "Q015",
        section: "Swallowing",
        edss: "Yes",
        options: [
            {
                text: `I do NOT have any problems swallowing liquids or foods`,
                score: 0,
                checked: false
            }, {
                text: `I have problems swallowing liquids or solid foods`,
                score: 1,
                checked: false
            }, {
                text: `I have frequent problems with swallowing and need a pureed diet`,
                score: 2,
                checked: false
            }, {
                text: `I cannot swallow food or liquids`,
                score: 3,
                checked: false
            }
        ]
    },
    q16: {
        text: `On an average day, which of the following best describes your…`,
        division: true,
        section: "Bowel Functioning",
        edss: "Yes",
        sub: [
            {
                text: `Constipation`,
                qx_code: "Q016.1",
                options: [
                    {
                        text: `No constipation`,
                        score: 0,
                        checked: false
                    }, {
                        text: `Some constipation`,
                        score: 1,
                        checked: false
                    }, {
                        text: `Constipation so severe that I cannot move my bowels without an enema or manual measure`,
                        score: 2,
                        checked: false
                    }
                ]
            }, {
                text: `Bowel frequency`,
                qx_code: "Q016.2",
                options: [
                    {
                        text: `I do not have bowel frequency`,
                        score: 0,
                        checked: false
                    }, {
                        text: `Mild frequency`,
                        score: 1,
                        checked: false
                    }, {
                        text: `I need to be close to the bathroom at all times and/or wear pads`,
                        score: 2,
                        checked: false
                    }, {
                        text: `I am not able to control my bowels`,
                        score: 3,
                        checked: false
                    }
                ]
            }
        ]
    },
    q17: {
        text: `In the last 4 weeks`,
        division: true,
        section: "Urinary Incontinence",
        edss: "Yes",
        sub: [
            {
                text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                qx_code: "Q017.1",
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        checked: false
                    }, {
                        text: `About once a week`,
                        score: 1,
                        checked: false
                    }, {
                        text: `A few times a week`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Every day`,
                        score: 2,
                        checked: false
                    }, {
                        text: `Several times a day`,
                        score: 2,
                        checked: false
                    }
                ]
            }, {
                text: `How often did you leak urine without meaning to, even a small amount?`,
                qx_code: "Q017.2",
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        checked: false
                    }, {
                        text: `A few times`,
                        score: 1,
                        checked: false
                    }, {
                        text: `About once a week`,
                        score: 2,
                        checked: false
                    }, {
                        text: `A few times a week to every day`,
                        score: 3,
                        checked: false
                    }, {
                        text: `Several times a day`,
                        score: 4,
                        checked: false
                    }
                ]
            }
        ],
        Sub2: [
            {
                text: `Do you wear a pad or use a urinal?`,
                qx_code: "Q018",
                options: [
                    {
                        text: `No`,
                        score: 0,
                        checked: false
                    }, {
                        text: `Yes`,
                        score: 1,
                        checked: false
                    }
                ]
            }
        ]
    },
    q19: {
        text: `On an average day,How easy it is for you to start urinating?`,
        qx_code: "Q019",
        section: "Urinary Incontinence",
        edss: "Yes",
        options: [
            {
                text: `I do NOT have trouble with starting to urinate`,
                score: 0,
                checked: false
            }, {
                text: `I sometimes have trouble starting to urinate`,
                score: 1,
                checked: false
            }, {
                text: `I often have trouble starting to urinate, and/or experience frequent urinary tract infections`,
                score: 2,
                checked: false
            }, {
                text: `My difficulty urinating is so severe that I require intermittent catheterization`,
                score: 4,
                checked: false
            }, {
                text: `My difficulty urinating is so severe that I require an indwelling catheter`,
                score: 5,
                checked: false
            }, {
                text: `My retention is so severe that my bladder lets out unexpectedly,
                even when I don't feel the urge to urinate ("overflow incontinence")`,
                score: 6,
                checked: false
            }
        ]
    },
    q20: {
        text: `On an average day, which of the following best describes your cognitive (thinking) ability?`,
        qx_code: "Q020",
        section: "Cognition",
        edss: "Yes",
        options: [
            {
                text: `I have no problems with concentration or memory`,
                score: 0,
                checked: false
            }, {
                text: `I have some concentration and memory problems, or problems
                with coping with stress, but I am able to handle my daily routines including completing this survey `,
                score: 1,
                checked: false
            }, {
                text: `I have problems with concentration and memory that my
                 friends and family notice; this is beginning to affect my daily routine. It makes completing  this survey difficult `,
                score: 2,
                checked: false
            }, {
                text: `I have severe impairment in my cognitive (thinking)
                 abilities; for example, I sometimes forget where I am and who I am talking to. I need help completing this survey`,
                score: 3,
                checked: false
            }, {
                text: `I have no meaningful conversation and am
                 unable to handle my affairs because of my severe cognitive problems; I need someone else to complete this survey`,
                score: 4,
                checked: false
            }
        ]
    },
    q21: {
        text: `On an average day, which of the following describes your fatigue?`,
        qx_code: "Q021",
        jumpTo: 'q22',
        section: "Fatigue",
        edss: "Yes",
        options: [
            {
                text: `I experience no fatigue`,
                score: 0,
                jumpTo: 'q22',
                checked: false
            }, {
                text: `I experience mild fatigue. I do feel the need to rest more often, but I can still complete all my daily tasks`,
                score: 1,
                jumpTo: 'q22',
                checked: false
            }, {
                text: `Due to my fatigue I have to rest unusually often;
                 this affects less than half of my daily activities.
                  I often cannot complete my daily routine without naps or significant rest.`,
                score: 2,
                jumpTo: 'q22',
                checked: false
            }, {
                text: `I experience severe fatigue levels that have overtaken my life;
                 I am unable to complete more than half of my daily tasks.`,
                score: 3,
                jumpTo: 'q22',
                checked: false
            }
        ]
    },
    q22: {
        text: `Did you feel rested on waking in the morning?`,
        qx_code: "Q022",
        jumpTo: 'q24a',
        section: "Sleep (MSQOL-54)",
        edss: "No",
        options: [
            {
                text: `All of the Time`,
                score: 0,
                checked: false,
                jumpTo: 'q24a'
            }, {
                text: `Most Of the Time`,
                score: 1,
                checked: false,
                jumpTo: 'q24a'
            }, {
                text: `A Good Bit of the Time`,
                score: 2,
                checked: false,
                jumpTo: 'q24a'
            }, {
                text: `Some of the Time`,
                score: 3,
                checked: false,
                jumpTo: 'q24a'
            }, {
                text: `A Little of the Time`,
                score: 3,
                checked: false,
                jumpTo: 'q24a'
            }, {
                text: `None of the Time`,
                score: 3,
                checked: false,
                jumpTo: 'q24a'
            }
        ]
    },
    q24a: {
        text: `Overall, how satisfied were you with your sexual function during the past 4 weeks?`,
        qx_code: "Q024a",
        section: "Sexual Function",
        edss: "No",
        jumpTo: (sex) => sex == 'male'
            ? 'q24b1'
            : 'q24b2',
        options: [
            {
                text: `Very dissatisfied`,
                score: 1,
                checked: false,
                jumpTo: (sex) => sex == 'male'
                    ? 'q24b1'
                    : 'q24b2',
            }, {
                text: `Somewhat dissatisfied`,
                score: 2,
                checked: false,
                jumpTo: (sex) => sex == 'male'
                    ? 'q24b1'
                    : 'q24b2',
            }, {
                text: `Neither dissatisfied nor satisfied`,
                score: 3,
                checked: false,
                jumpTo: (sex) => sex == 'male'
                    ? 'q24b1'
                    : 'q24b2',
            }, {
                text: `Somewhat satisfied`,
                score: 4,
                checked: false,
                jumpTo: (sex) => sex == 'male'
                    ? 'q24b1'
                    : 'q24b2',
            }, {
                text: `Very satisfied`,
                score: 5,
                checked: false,
                jumpTo: (sex) => sex == 'male'
                    ? 'q24b1'
                    : 'q24b2',
            }
        ]
    },
    q24b1: {
        text: `How much of a problem was each of the following for you during the past 4 weeks?`,
        jumpTo: `q25`,
        section: "Sexual Function",
        edss: "No",
        commonOptions: [
            {
                text: `Not a problem`,
                score: 1,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `A little of a problem`,
                score: 2,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `Somewhat of a problem`,
                score: 3,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `Very much a problem`,
                score: 4,
                checked: false,
                jumpTo: 'q25'
            }
        ],
        sub: [
            {
                text: `Lack of sexual interest`,
                qx_code: "Q024b.1",
            }, {
                text: `Difficulty getting or keeping an erection`,
                qx_code: "Q024b.2",
            }, {
                text: `Difficulty having orgasm`,
                qx_code: "Q024b.3",
            }, {
                text: `Ability to satisfy sexual partner`,
                qx_code: "Q024b.4",
            }
        ]
    },
    q24b2: {
        text: `How much of a problem was each of the following for you during the past 4 weeks?`,
        jumpTo: `q25`,
        section: "Sexual Function",
        edss: "No",
        commonOptions: [
            {
                text: `Not a problem`,
                score: 1,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `A little of a problem`,
                score: 2,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `Somewhat of a problem`,
                score: 3,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `Very much a problem`,
                score: 4,
                checked: false,
                jumpTo: 'q25'
            }
        ],
        sub: [
            {
                text: `Lack of sexual interest`,
            }, {
                text: `Inadequate lubrication`,
            }, {
                text: `Difficulty having orgasm`,
            }, {
                text: `Ability to satisfy sexual partner`,
            }
        ]
    },
    q25: {
        text: `On a typical day, how much pain do you experience?`,
        qx_code: "Q025",
        jumpTo: `q26`,
        scale: true,
        max: 10,
        min: 0,
        showTicks: true,
        step: 1,
        thumbLabel: true,
        value: 0,
        section: "Pain",
        edss: "No"
    },
    q26: {
        text: `Overall, how would you rate your own quality-of-life? Circle one number on the scale below: `,
        qx_code: "Q026",
        scale: true,
        max: 10,
        min: 0,
        showTicks: true,
        step: 1,
        thumbLabel: true,
        value: 0,
        jumpTo: `q27`,
        section: "Quality of Life",
        edss: "No"
    },
    q27: {
        descr1: `The next two questions ask about relapses.  A relapse is when MS symptoms flare up. The symptom might be new or significantly worse than before. Relapses generally: `,
      //  descr2: `<ul><li>Last for more than 24 hours</li><li>Begin 30 days or more after your last relapse began</li><li>Are not related to an infection, fever, or other stresses</li></ul>`,
        text: `How many relapses have you had since your last visit (drop-down with 0-6): `,
        qx_code: "Q027",
        jumpTo: `q29`,
        relapses: true,
        section: "Relapse",
        edss: "No",
        selectOption: [0, 1, 2, 3, 4, 5, 6],
        value: 0,
        relapsesYear: {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: ''
        },
        relapsesMonth: {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: ''
        }
    },
    q29: {
        text: `Select all that apply `,
        qx_code: "Q029",
        descr1: `Use this section to note any topics you’d like to discuss at your next appointment.`,
        patientConcerns: true,
        //jumpTo: 'ReviewPage',
        section: "Patient Concerns",
        edss: "No",
        options: [
            {
                text: `Medication concerns`,
                score: 1,
                checked: false,
                jumpTo: 'q25'
            }, {
                text: `Medication refills`,
                score: 1,
                checked: false,
                // jumpTo: 'q25'
            }, {
                text: `New work related needs`,
                score: 1,
                checked: false,
                //jumpTo: 'q25'
            }, {
                text: `Family planning`,
                score: 1,
                checked: false,
                // jumpTo: 'q25'
            }, {
                text: `Other topics?`,
                score: 1,
                checked: false,
                TextBox: 'hidden'
                // jumpTo: 'q25'
            }
        ],
        othertext: ''
    },
    ReviewPage: {

    }
};
