export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};
// saby
export const navMap = {
    q1a: {
        descr1: `The first set of questions will ask about symptoms you might be experiencing. The experience of everyone with MS is different, and you may not experience all of the symptoms that we ask about.`,
        descr2: `Please try your best to answer according to the choices available in each question. You may skip any questions you don’t wish to answer. However, we may not be able to calculate your EDSS score if there is missing information.`,
        text: `Which of the following best describes your ability to walk?`,
        options: [
            {
                text: `I can walk without any problem`,
                score: 0,
                jumpTo: 'q3',
                qx_text: `Which of the following best describes your ability to walk?`,
                qx_code: 'q1a',
                checked: ''
            }, {
                text: `I have some difficulties with walking, but can walk without aid`,
                score: 1,
                jumpTo: 'q1b',
                qx_text: `Which of the following best describes your ability to walk?`,
                qx_code: 'q1a',
                checked: ''
            }, {
                text: `I require a cane, crutch, or other aid to walk`,
                score: 2,
                jumpTo: 'q1c',
                qx_text: `Which of the following best describes your ability to walk?`,
                qx_code: 'q1a',
                checked: ''
            }, {
                text: `I require a wheelchair for almost all activities`,
                score: 3,
                jumpTo: 'q3',
                qx_text: `Which of the following best describes your ability to walk?`,
                qx_code: 'q1a',
                checked: ''
            }, {
                text: `I am confined to bed most of the time`,
                score: 4,
                jumpTo: 'q3',
                qx_text: `Which of the following best describes your ability to walk?`,
                qx_code: 'q1a',
                checked: ''
            }
        ]
    },
    q1b: {
        text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
        options: [
            {
                text: `More than 1500 feet, 500 meters or about five football fields`,
                score: 0,
                jumpTo: 'q2',
                qx_text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
                qx_code: 'q1b',
                checked: ''
            }, {
                text: `About 900 to 1500 feet, 300 meters or about 3 football fields`,
                score: 1,
                jumpTo: 'q2',
                qx_text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
                qx_code: 'q1b',
                checked: ''
            }, {
                text: `About 600 to 899 feet, 200 meters or about 2 football fields`,
                score: 2,
                jumpTo: 'q2',
                qx_text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
                qx_code: 'q1b',
                checked: ''
            }, {
                text: `About 300 to 599 feet, 100 meters or about 1 football field`,
                score: 3,
                jumpTo: 'q2',
                qx_text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
                qx_code: 'q1b',
                checked: ''
            }
        ]
    },
    q1c: {
        text: `When I use an aid (cane, crutch, walker), I can walk:`,
        options: [
            {
                text: `About 300 to 400 feet, 120 meters or about 1 football field`,
                score: 0,
                jumpTo: 'q2',
                qx_text: `When I use an aid (cane, crutch, walker), I can walk:`,
                qx_code: 'q1c',
                checked: ''
            }, {
                text: `About 150 to 299 feet or 50 meters`,
                score: 1,
                jumpTo: 'q2',
                qx_text: `When I use an aid (cane, crutch, walker), I can walk:`,
                qx_code: 'q1c',
                checked: ''
            }, {
                text: `About 50 to 149 feet or 20 meters`,
                score: 2,
                jumpTo: 'q2',
                qx_text: `When I use an aid (cane, crutch, walker), I can walk:`,
                qx_code: 'q1c',
                checked: ''
            }, {
                text: `About 15 to 50 feet or 20 meters`,
                score: 3,
                jumpTo: 'q2',
                qx_text: `When I use an aid (cane, crutch, walker), I can walk:`,
                qx_code: 'q1c',
                checked: ''
            }, {
                text: `Less than 15 feet or 5 meters`,
                score: 4,
                jumpTo: 'q2',
                qx_text: `When I use an aid (cane, crutch, walker), I can walk:`,
                qx_code: 'q1c',
                checked: ''
            }
        ]
    },
    q2: {
        text: `When you move about, how often do you use any of the following?`,
        sub: [
            // {
            {
                text: `A cane, crutch, or someone to hold on to.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3',
                        qx_text: `A cane, crutch, or someone to hold on to.`,
                        qx_code: 'q2a',
                        checked: ''
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text: `A cane, crutch, or someone to hold on to.`,
                        qx_code: 'q2a',
                        checked: ''
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text: `A cane, crutch, or someone to hold on to.`,
                        qx_code: 'q2a',
                        checked: ''
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text: `A cane, crutch, or someone to hold on to.`,
                        qx_code: 'q2a',
                        checked: ''
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text: `A cane, crutch, or someone to hold on to.`,
                        qx_code: 'q2a',
                        checked: ''
                    }
                ]
            }, {
                text: ` A walker or other bilateral support.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3',
                        qx_text: `A walker or other bilateral support.`,
                        qx_code: 'q2b',
                        checked: ''
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text: `A walker or other bilateral support.`,
                        qx_code: 'q2b',
                        checked: ''
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text: `A walker or other bilateral support.`,
                        qx_code: 'q2b',
                        checked: ''
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text: `A walker or other bilateral support.`,
                        qx_code: 'q2b',
                        checked: ''
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text: `A walker or other bilateral support.`,
                        qx_code: 'q2b',
                        checked: ''
                    }
                ]
            }, {
                text: `A wheelchair.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3',
                        qx_text: `A wheelchair.`,
                        qx_code: 'q2c',
                        checked: ''
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text: `A wheelchair.`,
                        qx_code: 'q2c',
                        checked: ''
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text: `A wheelchair.`,
                        qx_code: 'q2c',
                        checked: ''
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text: `A wheelchair.`,
                        qx_code: 'q2c',
                        checked: ''
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text: `A wheelchair.`,
                        qx_code: 'q2c',
                        checked: ''
                    }
                ]
            }
            // }
        ]
    },
    q3: {
        text: `Do you have any of the problems below?`,
        sub: [
            // {
            {
                text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q4',
                        qx_text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`,
                        qx_code: 'q3a',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`,
                        qx_code: 'q3a',
                        checked: ''
                    }
                ]
            },
            {
                text: `Weakness in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q5',
                        qx_text: `Weakness in arms or legs?`,
                        qx_code: 'q3b',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Weakness in arms or legs?`,
                        qx_code: 'q3b',
                        checked: ''
                    }
                ]
            }, {
                text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q6',
                        qx_text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                        qx_code: 'q3c',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                        qx_code: 'q3c',
                        checked: ''
                    }
                ]
            }, {
                text: `Swaying or losing balance when sitting, standing, or walking?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q7',
                        qx_text: `Swaying or losing balance when sitting, standing, or walking?`,
                        qx_code: 'q3d',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Swaying or losing balance when sitting, standing, or walking?`,
                        qx_code: 'q3d',
                        checked: ''
                    }
                ]
            }, {
                text: `Clumsiness or tremors in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q8',
                        qx_text: `Clumsiness or tremors in arms or legs?`,
                        qx_code: 'q3e',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Clumsiness or tremors in arms or legs?`,
                        qx_code: 'q3e',
                        checked: ''
                    }
                ]
            }, {
                text: `Weakness of muscles in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q9',
                        qx_text: `Weakness of muscles in your face?`,
                        qx_code: 'q3f',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Weakness of muscles in your face?`,
                        qx_code: 'q3f',
                        checked: ''
                    }
                ]
            }, {
                text: `Numbness in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q10',
                        qx_text: `Numbness in your face?`,
                        qx_code: 'q3g',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Numbness in your face?`,
                        qx_code: 'q3g',
                        checked: ''
                    }
                ]
            }, {
                text: `Blurry vision or blind spots?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q11',
                        qx_text: `Blurry vision or blind spots?`,
                        qx_code: 'q3h',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Blurry vision or blind spots?`,
                        qx_code: 'q3h',
                        checked: ''
                    }
                ]
            }, {
                text: `Double vision?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q12',
                        qx_text: `Double vision?`,
                        qx_code: 'q3i',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Double vision?`,
                        qx_code: 'q3i',
                        checked: ''
                    }
                ]
            }, {
                text: `Problems with hearing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q13',
                        qx_text: `Problems with hearing?`,
                        qx_code: 'q3j',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Problems with hearing?`,
                        qx_code: 'q3j',
                        checked: ''
                    }
                ]
            }, {
                text: `Problems with voice?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q14',
                        qx_text: `Problems with voice?`,
                        qx_code: 'q3k',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Problems with voice?`,
                        qx_code: 'q3k',
                        checked: ''
                    }
                ]
            }, {
                text: `Problems with swallowing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q15',
                        qx_text: `Problems with swallowing?`,
                        qx_code: 'q3l',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: `Problems with swallowing?`,
                        qx_code: 'q3l',
                        checked: ''
                    }
                ]
            }, {
                text: `Constipation or loss of bowel control?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q16',
                        qx_text: 'Constipation or loss of bowel control?',
                        qx_code: 'q3m',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: 'Constipation or loss of bowel control?',
                        qx_code: 'q3m',
                        checked: ''
                    }
                ]
            }, {
                text: `Loss of bladder control or leakage?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q17',
                        qx_text: 'Loss of bladder control or leakage?',
                        qx_code: 'q3n',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: 'Loss of bladder control or leakage?',
                        qx_code: 'q3n',
                        checked: ''
                    }
                ]
            }, {
                text: `Difficulty starting to urinate?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q19',
                        qx_text: 'Difficulty starting to urinate?',
                        qx_code: 'q3o',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: 'Difficulty starting to urinate?',
                        qx_code: 'q3o',
                        checked: ''
                    }
                ]
            }, {
                text: `Concentration, memory, or thinking problems?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q20',
                        qx_text: 'Concentration, memory, or thinking problems?',
                        qx_code: 'q3p',
                        checked: ''
                    }, {
                        text: `No`,
                        score: 0,
                        qx_text: 'Concentration, memory, or thinking problems?',
                        qx_code: 'q3p',
                        checked: ''
                    }
                ]
            }
            // }
        ]
    },
    q4: {
        text: `On an average day, check the answer that best describes your sensation (feeling, numbness, ability to sense touch or hot or cold) in your:`,
        sub: [
            {
                text: `Right hand or arm`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score: 0,
                        qx_code: 'q4a',
                        checked: ''
                    },
                    {
                        text: `Feeling is good`,
                        score: 1,
                        qx_code: 'q4a',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair`,
                        score: 2,
                        qx_code: 'q4a',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor`,
                        score: 3,
                        qx_code: 'q4a',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score: 4,
                        qx_code: 'q4a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left hand or arm`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score: 0,
                        qx_code: 'q4b',
                        checked: ''
                    },
                    {
                        text: `Feeling is good`,
                        score: 1,
                        qx_code: 'q4b',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair`,
                        score: 2,
                        qx_code: 'q4b',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor`,
                        score: 3,
                        qx_code: 'q4b',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score: 4,
                        qx_code: 'q4b',
                        checked: ''
                    },
                ]
            },
            {
                text: `Right foot or leg`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score: 0,
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is good`,
                        score: 1,
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair`,
                        score: 2,
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor`,
                        score: 3,
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score: 4,
                        qx_code: 'q4c',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left foot or leg`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score: 0,
                        qx_text: 'Left foot or leg',
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is good`,
                        score: 1,
                        qx_text: 'Left foot or leg',
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair`,
                        score: 2,
                        qx_text: 'Left foot or leg',
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor`,
                        score: 3,
                        qx_text: 'Left foot or leg',
                        qx_code: 'q4c',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score: 4,
                        qx_text: 'Left foot or leg',
                        qx_code: 'q4c',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q5: {
        text: `In general, how much strength do you have to raise each arm and leg in the air?`,
        sub: [
            {
                text: `Right Arm`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score: 0,
                        qx_text: 'Right Arm',
                        qx_code: 'q5a',
                        checked: ''
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score: 1,
                        qx_text: 'Right Arm',
                        qx_code: 'q5a',
                        checked: ''
                    },
                    {
                        text: `I can barely raise it`,
                        score: 2,
                        qx_text: 'Right Arm',
                        qx_code: 'q5a',
                        checked: ''
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score: 3,
                        qx_text: 'Right Arm',
                        qx_code: 'q5a',
                        checked: ''
                    },
                    {
                        text: `I cannot move it at all`,
                        score: 4,
                        qx_text: 'Right Arm',
                        qx_code: 'q5a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left Arm`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score: 0,
                        qx_text: 'Right Arm',
                        qx_code: 'q5b',
                        checked: ''
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score: 1,
                        qx_text: 'Right Arm',
                        qx_code: 'q5b',
                        checked: ''
                    },
                    {
                        text: `I can barely raise it`,
                        score: 2,
                        qx_text: 'Right Arm',
                        qx_code: 'q5b',
                        checked: ''
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score: 3,
                        qx_text: 'Right Arm',
                        qx_code: 'q5b',
                        checked: ''
                    },
                    {
                        text: `I cannot move it at all`,
                        score: 4,
                        qx_text: 'Right Arm',
                        qx_code: 'q5b',
                        checked: ''
                    },
                ]
            },
            {
                text: `Right Leg`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score: 0,
                        qx_text: 'Right Leg',
                        qx_code: 'q5c',
                        checked: ''
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score: 1,
                        qx_text: 'Right Leg',
                        qx_code: 'q5c',
                        checked: ''
                    },
                    {
                        text: `I can barely raise it`,
                        score: 2,
                        qx_text: 'Right Leg',
                        qx_code: 'q5c',
                        checked: ''
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score: 3,
                        qx_text: 'Right Leg',
                        qx_code: 'q5c',
                        checked: ''
                    },
                    {
                        text: `I cannot move it at all`,
                        score: 4,
                        qx_text: 'Right Leg',
                        qx_code: 'q5c',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left Leg`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score: 0,
                        qx_text: 'Left Leg',
                        qx_code: 'q5d',
                        checked: ''
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score: 1,
                        qx_text: 'Left Leg',
                        qx_code: 'q5d',
                        checked: ''
                    },
                    {
                        text: `I can barely raise it`,
                        score: 2,
                        qx_text: 'Left Leg',
                        qx_code: 'q5d',
                        checked: ''
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score: 3,
                        qx_text: 'Left Leg',
                        qx_code: 'q5d',
                        checked: ''
                    },
                    {
                        text: `I cannot move it at all`,
                        score: 4,
                        qx_text: 'Left Leg',
                        qx_code: 'q5d',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q6: {
        text: `In general, do muscle spasms or stiffness ("spasticity") make it hard for you to use (bend or straighten) your arms and legs?`,
        sub: [
            {
                text: `Right Arm`,
                options: [
                    {
                        text: `I do not have stiffness or spasms`,
                        score: 0,
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                    {
                        text: `Stiffness and spasms...`,
                        score: 'N/A',
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                    {
                        text: `Mild, do not make it hard for me to use`,
                        score: 1,
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                    {
                        text: `Moderate stiffness, but with effort I can use`,
                        score: 2,
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                    {
                        text: `Sometimes I cannot overcome the stiffness to use my arm or leg`,
                        score: 3,
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                    {
                        text: `My arm or leg is so contracted that I cannot use it at all`,
                        score: 4,
                        qx_text: 'Right Arm',
                        qx_code: 'q6a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left Arm`,
                options: [
                    {
                        text: `I do not have stiffness or spasms`,
                        score: 0,
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                    {
                        text: `Stiffness and spasms...`,
                        score: 'N/A',
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                    {
                        text: `Mild, do not make it hard for me to use`,
                        score: 1,
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                    {
                        text: `Moderate stiffness, but with effort I can use`,
                        score: 2,
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                    {
                        text: `Sometimes I cannot overcome the stiffness to use my arm or leg`,
                        score: 3,
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                    {
                        text: `My arm or leg is so contracted that I cannot use it at all`,
                        score: 4,
                        qx_text: 'Left Arm',
                        qx_code: 'q6b',
                        checked: ''
                    },
                ]
            },
            {
                text: `Right Leg`,
                options: [
                    {
                        text: `I do not have stiffness or spasms`,
                        score: 0,
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                    {
                        text: `Stiffness and spasms...`,
                        score: 'N/A',
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                    {
                        text: `Mild, do not make it hard for me to use`,
                        score: 1,
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                    {
                        text: `Moderate stiffness, but with effort I can use`,
                        score: 2,
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                    {
                        text: `Sometimes I cannot overcome the stiffness to use my arm or leg`,
                        score: 3,
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                    {
                        text: `My arm or leg is so contracted that I cannot use it at all`,
                        score: 4,
                        qx_text: 'Right Leg',
                        qx_code: 'q6c',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left Leg`,
                options: [
                    {
                        text: `I do not have stiffness or spasms`,
                        score: 0,
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                    {
                        text: `Stiffness and spasms...`,
                        score: 'N/A',
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                    {
                        text: `Mild, do not make it hard for me to use`,
                        score: 1,
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                    {
                        text: `Moderate stiffness, but with effort I can use`,
                        score: 2,
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                    {
                        text: `Sometimes I cannot overcome the stiffness to use my arm or leg`,
                        score: 3,
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                    {
                        text: `My arm or leg is so contracted that I cannot use it at all`,
                        score: 4,
                        qx_text: 'Left Leg',
                        qx_code: 'q6d',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q7: {
        // text: `In general, how is your:`,
        sub1: [
            {
                text: `In general, how is your balance when standing?`,
                options: [
                    {
                        text: `Very good. I never or rarely lose my balance.`,
                        score: 0,
                        qx_text: `In general, how is your balance when standing?`,
                        qx_code: 'q7a',
                        checked: ''
                    },
                    {
                        text: `Good. I sometimes lose my balance or sway when my eyes are closed.`,
                        score: 1,
                        qx_text: `In general, how is your balance when standing?`,
                        qx_code: 'q7a',
                        checked: ''
                    },
                    {
                        text: `Poor. I often lose my balance or sway, even when my eyes are open.`,
                        score: 2,
                        qx_text: `In general, how is your balance when standing?`,
                        qx_code: 'q7a',
                        checked: ''
                    },
                    {
                        text: `Very poor. I always or almost always lose my balance`,
                        score: 3,
                        qx_text: `In general, how is your balance when standing?`,
                        qx_code: 'q7a',
                        checked: ''
                    },
                ]
            },
            {
                text: `In general, how is your balance when walking a straight line?`,
                options: [
                    {
                        text: `I can easily walk a straight line`,
                        score: 0,
                        qx_text: `In general, how is your balance when walking a straight line?`,
                        qx_code: 'q7b',
                        checked: ''
                    },
                    {
                        text: `I occasionally lose my balance`,
                        score: 1,
                        qx_text: `In general, how is your balance when walking a straight line?`,
                        qx_code: 'q7b',
                        checked: ''
                    },
                    {
                        text: `I usually have to concentrate to keep my balance`,
                        score: 2,
                        qx_text: `In general, how is your balance when walking a straight line?`,
                        qx_code: 'q7b',
                        checked: ''
                    },
                    {
                        text: `I lose my balance after a few steps`,
                        score: 3,
                        qx_text: `In general, how is your balance when walking a straight line?`,
                        qx_code: 'q7b',
                        checked: ''
                    },
                    {
                        text: `I need help to hold my balance`,
                        score: 3,
                        qx_text: `In general, how is your balance when walking a straight line?`,
                        qx_code: 'q7b',
                        checked: ''
                    },
                ]
            },
            {
                text: `In general, how is your Balance when sitting?`,
                options: [
                    {
                        text: `I am very steady when I sit`,
                        score: 0,
                        qx_text: `In general, how is your Balance when sitting?`,
                        qx_code: 'q7c',
                        checked: ''
                    },
                    {
                        text: `I sway once in a while when I sit`,
                        score: 1,
                        qx_text: `In general, how is your Balance when sitting?`,
                        qx_code: 'q7c',
                        checked: ''
                    },
                    {
                        text: `I sway constantly when I sit but I never need support`,
                        score: 2,
                        qx_text: `In general, how is your Balance when sitting?`,
                        qx_code: 'q7c',
                        checked: ''
                    },
                    {
                        text: `I sometimes need support when I sit to keep from swaying`,
                        score: 3,
                        qx_text: `In general, how is your Balance when sitting?`,
                        qx_code: 'q7c',
                        checked: ''
                    },
                    {
                        text: `I usually need support when I sit to keep from swaying`,
                        score: 4,
                        qx_text: `In general, how is your Balance when sitting?`,
                        qx_code: 'q7c',
                        checked: ''
                    },
                ]
            },
        ]
    },
    q8: {
        text: `In general, do tremors or coordination problems make it hard for you to use your arms and legs?`,
        sub: [
            {
                text: `Your arm(s)?`,
                options: [
                    {
                        text: `I do not have tremors or coordination problems`,
                        score: 0,
                        qx_text: `Your arm(s)?`,
                        qx_code: 'q8a',
                        checked: ''
                    },
                    {
                        text: `Rarely make it hard for me to use`,
                        score: 'N/A',
                        qx_text: `Your arm(s)?`,
                        qx_code: 'q8a',
                        checked: ''
                    },
                    {
                        text: `Sometimes make it hard for me to use`,
                        score: 1,
                        qx_text: `Your arm(s)?`,
                        qx_code: 'q8a',
                        checked: ''
                    },
                    {
                        text: `Often make it hard for me to use`,
                        score: 2,
                        qx_text: `Your arm(s)?`,
                        qx_code: 'q8a',
                        checked: ''
                    },
                    {
                        text: `Always make it hard for me to use`,
                        score: 3,
                        qx_text: `Your arm(s)?`,
                        qx_code: 'q8a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Your leg(s)?`,
                options: [
                    {
                        text: `I do not have tremors or coordination problems`,
                        score: 0,
                        qx_text: `Your leg(s)?`,
                        qx_code: 'q8b',
                        checked: ''
                    },
                    {
                        text: `Rarely make it hard for me to use`,
                        score: 'N/A',
                        qx_text: `Your leg(s)?`,
                        qx_code: 'q8b',
                        checked: ''
                    },
                    {
                        text: `Sometimes make it hard for me to use`,
                        score: 1,
                        qx_text: `Your leg(s)?`,
                        qx_code: 'q8b',
                        checked: ''
                    },
                    {
                        text: `Often make it hard for me to use`,
                        score: 2,
                        qx_text: `Your leg(s)?`,
                        qx_code: 'q8b',
                        checked: ''
                    },
                    {
                        text: `Always make it hard for me to use`,
                        score: 3,
                        qx_text: `Your leg(s)?`,
                        qx_code: 'q8b',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q9: {
        text: `In general, how much muscle weakness do you have in your face?`,
        sub: [
            {
                text: `Right side of your face`,
                options: [
                    {
                        text: `I do not have muscle weakness in my face`,
                        score: 0,
                        qx_text: `Right side of your face`,
                        qx_code: 'q9a',
                        checked: ''
                    },
                    {
                        text: `A little, such as when I furrow my eyebrows or laugh`,
                        score: 1,
                        qx_text: `Right side of your face`,
                        qx_code: 'q9a',
                        checked: ''
                    },
                    {
                        text: `A lot, such as trouble with drooling or when closing my eye(s)`,
                        score: 2,
                        qx_text: `Right side of your face`,
                        qx_code: 'q9a',
                        checked: ''
                    },
                    {
                        text: `Total weakness or palsy, such as Bell's palsy`,
                        score: 3,
                        qx_text: `Right side of your face`,
                        qx_code: 'q9a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left side of your face`,
                options: [
                    {
                        text: `I do not have muscle weakness in my face`,
                        score: 0,
                        qx_text: `Left side of your face`,
                        qx_code: 'q9b',
                        checked: ''
                    },
                    {
                        text: `A little, such as when I furrow my eyebrows or laugh`,
                        score: 1,
                        qx_text: `Left side of your face`,
                        qx_code: 'q9b',
                        checked: ''
                    },
                    {
                        text: `A lot, such as trouble with drooling or when closing my eye(s)`,
                        score: 2,
                        qx_text: `Left side of your face`,
                        qx_code: 'q9b',
                        checked: ''
                    },
                    {
                        text: `Total weakness or palsy, such as Bell's palsy`,
                        score: 3,
                        qx_text: `Left side of your face`,
                        qx_code: 'q9b',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q10: {
        text: `In general, how much feeling do you have in your face?`,
        sub: [
            {
                text: `Right side of your face`,
                options: [
                    {
                        text: `Feeling is very good. No numbness or pain.`,
                        score: 0,
                        qx_text: `Right side of your face`,
                        qx_code: 'q10a',
                        checked: ''
                    },
                    {
                        text: `Feeling is good. Some numbness.`,
                        score: 1,
                        qx_text: `Right side of your face`,
                        qx_code: 'q10a',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair. Hard to tell sharp touch from dull touch.`,
                        score: 2,
                        qx_text: `Right side of your face`,
                        qx_code: 'q10a',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor. Mild pain.`,
                        score: 3,
                        qx_text: `Right side of your face`,
                        qx_code: 'q10a',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or gone. Moderate to severe pain.`,
                        score: 4,
                        qx_text: `Right side of your face`,
                        qx_code: 'q10a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Left side of your face`,
                options: [
                    {
                        text: `Feeling is very good. No numbness or pain.`,
                        score: 0,
                        qx_text: `Left side of your face`,
                        qx_code: 'q10b',
                        checked: ''
                    },
                    {
                        text: `Feeling is good. Some numbness.`,
                        score: 1,
                        qx_text: `Left side of your face`,
                        qx_code: 'q10b',
                        checked: ''
                    },
                    {
                        text: `Feeling is fair. Hard to tell sharp touch from dull touch.`,
                        score: 2,
                        qx_text: `Left side of your face`,
                        qx_code: 'q10b',
                        checked: ''
                    },
                    {
                        text: `Feeling is poor. Mild pain.`,
                        score: 3,
                        qx_text: `Left side of your face`,
                        qx_code: 'q10b',
                        checked: ''
                    },
                    {
                        text: `Feeling is very poor or gone. Moderate to severe pain.`,
                        score: 4,
                        qx_text: `Left side of your face`,
                        qx_code: 'q10b',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q11: {
        text: `Check the answer that best describes your ability to see. If you wear glasses or contact lenses, describe your corrected vision.`,
        sub: [
            {
                text: `Problems with vision in your right eye`,
                options: [
                    {
                        text: `I have no problems with my ability to see.`,
                        score: 0,
                        qx_text: `Problems with vision in your right eye`,
                        qx_code: 'q11a',
                        checked: ''
                    },
                    {
                        text: `My vision is slightly blurry`,
                        score: 1,
                        qx_text: `Problems with vision in your right eye`,
                        qx_code: 'q11a',
                        checked: ''
                    },
                    {
                        text: `My vision is very blurry`,
                        score: 2,
                        qx_text: `Problems with vision in your right eye`,
                        qx_code: 'q11a',
                        checked: ''
                    },
                    {
                        text: `I am blind, or almost blind, in that eye`,
                        score: 3,
                        qx_text: `Problems with vision in your right eye`,
                        qx_code: 'q11a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Problems with vision in your left eye`,
                options: [
                    {
                        text: `I have no problems with my ability to see.`,
                        score: 0,
                        qx_text: `Problems with vision in your left eye`,
                        qx_code: 'q11b',
                        checked: ''
                    },
                    {
                        text: `My vision is slightly blurry`,
                        score: 1,
                        qx_text: `Problems with vision in your left eye`,
                        qx_code: 'q11b',
                        checked: ''
                    },
                    {
                        text: `My vision is very blurry`,
                        score: 2,
                        qx_text: `Problems with vision in your left eye`,
                        qx_code: 'q11b',
                        checked: ''
                    },
                    {
                        text: `I am blind, or almost blind, in that eye`,
                        score: 3,
                        qx_text: `Problems with vision in your left eye`,
                        qx_code: 'q11b',
                        checked: ''
                    },
                ]
            }
        ]
    },
    q12: {
        text: `Do you have double vision?`,
        options: [
            {
                text: `I do NOT have any double vision`,
                score: 0,
                qx_text: `Do you have double vision?`,
                qx_code: 'q12',
                checked: ''
            }, {
                text: `I have double vision that comes and goes`,
                score: 1,
                qx_text: `Do you have double vision?`,
                qx_code: 'q12',
                checked: ''
            },
            {
                text: `I almost always have double vision that goes away when one eye is closed`,
                score: 2,
                qx_text: `Do you have double vision?`,
                qx_code: 'q12',
                checked: ''
            },
            {
                text: `I have complete loss of eye movement when I look in one or more directions (one or both eyes)`,
                score: 3,
                qx_text: `Do you have double vision?`,
                qx_code: 'q12',
                checked: ''
            },
        ]
    },
    q13: {
        text: `Do you have any problems with your hearing?`,
        options: [
            {
                text: `I do not have problems hearing`,
                score: 0,
                qx_text: `Do you have any problems with your hearing?`,
                qx_code: 'q13',
                checked: ''
            }, {
                text: `I have mild hearing loss on one side`,
                score: 1,
                qx_text: `Do you have any problems with your hearing?`,
                qx_code: 'q13',
                checked: ''
            },
            {
                text: `I have moderate or severe hearing loss on one side`,
                score: 2,
                qx_text: `Do you have any problems with your hearing?`,
                qx_code: 'q13',
                checked: ''
            },
            {
                text: `I have total hearing loss on both sides. I am effectively deaf.`,
                score: 3,
                qx_text: `Do you have any problems with your hearing?`,
                qx_code: 'q13',
                checked: ''
            },
        ]
    },
    q14: {
        text: `In general, how is your ability to speak?`,
        options: [
            {
                text: `I do not have problems speaking`,
                score: 0,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            }, {
                text: `I sometimes slur words but others don't seem to notice`,
                score: 1,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            },
            {
                text: `I often slur words and others notice`,
                score: 2,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            },
            {
                text: `I slur words so much that it interferes with my ability to have conversations`,
                score: 3,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            },
            {
                text: `I slur my words so much that others cannot understand me`,
                score: 4,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            },
            {
                text: `I cannot speak`,
                score: 5,
                qx_text: `In general, how is your ability to speak?`,
                qx_code: 'q14',
                checked: ''
            },
        ]
    },
    q15: {
        text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
        options: [
            {
                text: `I do NOT have any problems swallowing liquids or foods`,
                score: 0,
                qx_text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
                qx_code: 'q15',
                checked: ''
            }, {
                text: `I have problems swallowing liquids or solid foods`,
                score: 1,
                qx_text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
                qx_code: 'q15',
                checked: ''
            },
            {
                text: `I have frequent problems with swallowing and need a pureed diet`,
                score: 2,
                qx_text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
                qx_code: 'q15',
                checked: ''
            },
            {
                text: `I cannot swallow food or liquids`,
                score: 3,
                qx_text: `For an average day, check the one answer that best describes your ability to swallow liquids and solids.`,
                qx_code: 'q15',
                checked: ''
            },
        ]
    },
    q16: {
        text: `On an average day, which of the following best describes your…`,
        sub1: [
            {
                text: `Constipation`,
                options: [
                    {
                        text: `No constipation`,
                        score: 0,
                        qx_text: `Constipation`,
                        qx_code: 'q16a',
                        checked: ''
                    },
                    {
                        text: `Some constipation`,
                        score: 1,
                        qx_text: `Constipation`,
                        qx_code: 'q16a',
                        checked: ''
                    },
                    {
                        text: `Constipation so severe that I cannot move my bowels without an enema or manual measure`,
                        score: 2,
                        qx_text: `Constipation`,
                        qx_code: 'q16a',
                        checked: ''
                    },
                ]
            },
            {
                text: `Bowel frequency`,
                options: [
                    {
                        text: `I do not have bowel frequency`,
                        score: 0,
                        qx_text: `Bowel frequency`,
                        qx_code: 'q16b',
                        checked: ''
                    },
                    {
                        text: `Mild frequency`,
                        score: 1,
                        qx_text: `Bowel frequency`,
                        qx_code: 'q16b',
                        checked: ''
                    },
                    {
                        text: `I need to be close to the bathroom at all times and/or wear pads`,
                        score: 2,
                        qx_text: `Bowel frequency`,
                        qx_code: 'q16b',
                        checked: ''
                    },
                    {
                        text: `I am not able to control my bowels`,
                        score: 3,
                        qx_text: `Bowel frequency`,
                        qx_code: 'q16b',
                        checked: ''
                    },
                ]
            },
        ]
    },
    q17: {
        text: `In the last 4 weeks`,        
        sub1: [
            {
                text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        qx_text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                        qx_code: 'q17a',
                        checked: ''
                    },
                    {
                        text: `About once a week`,
                        score: 1,
                        qx_text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                        qx_code: 'q17a',
                        checked: ''
                    },
                    {
                        text: `A few times a week`,
                        score: 2,
                        qx_text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                        qx_code: 'q17a',
                        checked: ''
                    },
                    {
                        text: `Every day`,
                        score: 2,
                        qx_text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                        qx_code: 'q17a',
                        checked: ''
                    },
                    {
                        text: `Several times a day`,
                        score: 2,
                        qx_text: `How often did you have a sudden and uncomfortable feeling that you had to urinate soon ("urgency")?`,
                        qx_code: 'q17a',
                        checked: ''
                    },
                ]
            },
            {
                text: `How often did you leak urine without meaning to, even a small amount?`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        qx_text: `How often did you leak urine without meaning to, even a small amount?`,
                        qx_code: 'q17b',
                        checked: ''
                    },
                    {
                        text: `A few times`,
                        score: 1,
                        qx_text: `How often did you leak urine without meaning to, even a small amount?`,
                        qx_code: 'q17b',
                        checked: ''
                    },
                    {
                        text: `About once a week`,
                        score: 2,
                        qx_text: `How often did you leak urine without meaning to, even a small amount?`,
                        qx_code: 'q17b',
                        checked: ''
                    },
                    {
                        text: `A few times a week to every day`,
                        score: 3,
                        qx_text: `How often did you leak urine without meaning to, even a small amount?`,
                        qx_code: 'q17b',
                        checked: ''
                    },
                    {
                        text: `Several times a day`,
                        score: 4,
                        qx_text: `How often did you leak urine without meaning to, even a small amount?`,
                        qx_code: 'q17b',
                        checked: ''
                    },
                ]
            },
        ],
        Sub2:[
            {
                text: `Do you wear a pad or use a urinal?`,
                options: [
                    {
                        text: `No`,
                        score: 0,
                        qx_text:`Do you wear a pad or use a urinal?`,
                        qx_code: 'q17c',
                        checked: ''
                    },
                    {
                        text: `Yes`,
                        score: 1,
                        qx_text: `Do you wear a pad or use a urinal?`,
                        qx_code: 'q17c',
                        checked: ''
                    },
                ]
            },
        ]
    },
    q19: {
        text: `On an average day,How easy it is for you to start urinating?`,
        options: [
            {
                text: `I do NOT have trouble with starting to urinate`,
                score: 0,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            }, {
                text: `I sometimes have trouble starting to urinate`,
                score: 1,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            },
            {
                text: `I often have trouble starting to urinate, and/or experience frequent urinary tract infections`,
                score: 2,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            },
            {
                text: `My difficulty urinating is so severe that I require intermittent catheterization`,
                score: 4,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            },
            {
                text: `My difficulty urinating is so severe that I require an indwelling catheter`,
                score: 5,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            },
            {
                text: `My retention is so severe that my bladder lets out unexpectedly, even when I don't feel the urge to urinate ("overflow incontinence")`,
                score: 6,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q19',
                checked: ''
            },
        ]
    },
    q20: {
        text: `On an average day, which of the following best describes your cognitive (thinking) ability?`,
        options: [
            {
                text: `I have no problems with concentration or memory`,
                score: 0,
                qx_text: `On an average day, which of the following best describes your cognitive (thinking) ability?`,
                qx_code: 'q20',
                checked: ''
            }, {
                text: `I have some concentration and memory problems, or problems with coping with stress, but I am able to handle my daily routines including completing this survey `,
                score: 1,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q20',
                checked: ''
            },
            {
                text: `I have problems with concentration and memory that my friends and family notice; this is beginning to affect my daily routine. It makes completing  this survey difficult `,
                score: 2,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q20',
                checked: ''
            },
            {
                text: `I have severe impairment in my cognitive (thinking) abilities; for example, I sometimes forget where I am and who I am talking to. I need help completing this survey`,
                score: 3,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q20',
                checked: ''
            },
            {
                text: `I have no meaningful conversation and am unable to handle my affairs because of my severe cognitive problems; I need someone else to complete this survey`,
                score: 4,
                qx_text: `On an average day,How easy it is for you to start urinating?`,
                qx_code: 'q20',
                checked: ''
            }
        ]
    }
};

export const navigationMap = {
    "q1:a:0": "q3",
    "q1:a:1": "q1:b",
    "q1:a:2": "q1:c"
}