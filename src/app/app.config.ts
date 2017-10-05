export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};
// Qx_text added by saby
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
                qx_text:`Which of the following best describes your ability to walk?`
            }, {
                text: `I have some difficulties with walking, but can walk without aid`,
                score: 1,
                jumpTo: 'q1b',
                qx_text:`Which of the following best describes your ability to walk?`
            }, {
                text: `I require a cane, crutch, or other aid to walk`,
                score: 2,
                jumpTo: 'q1c',
                qx_text:`Which of the following best describes your ability to walk?`
            }, {
                text: `I require a wheelchair for almost all activities`,
                score: 3,
                jumpTo: 'q3',
                qx_text:`Which of the following best describes your ability to walk?`
            }, {
                text: `I am confined to bed most of the time`,
                score: 4,
                jumpTo: 'q3',
                qx_text:`Which of the following best describes your ability to walk?`
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
                qx_text:`How far can you walk without needing to use an aid (cane, crutch, walker)?`
            }, {
                text: `About 900 to 1500 feet, 300 meters or about 3 football fields`,
                score: 1,
                jumpTo: 'q2',
               qx_text:`How far can you walk without needing to use an aid (cane, crutch, walker)?`
            }, {
                text: `About 600 to 899 feet, 200 meters or about 2 football fields`,
                score: 2,
                jumpTo: 'q2',
                qx_text:`How far can you walk without needing to use an aid (cane, crutch, walker)?`
            }, {
                text: `About 300 to 599 feet, 100 meters or about 1 football field`,
                score: 3,
                jumpTo: 'q2',
                qx_text:`How far can you walk without needing to use an aid (cane, crutch, walker)?`
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
                 qx_text:`When I use an aid (cane, crutch, walker), I can walk:`
            }, {
                text: `About 150 to 299 feet or 50 meters`,
                score: 1,
                jumpTo: 'q2',
                qx_text:`When I use an aid (cane, crutch, walker), I can walk:`
            }, {
                text: `About 50 to 149 feet or 20 meters`,
                score: 2,
                jumpTo: 'q2',
                qx_text:`When I use an aid (cane, crutch, walker), I can walk:`
            }, {
                text: `About 15 to 50 feet or 20 meters`,
                score: 3,
                jumpTo: 'q2',
                qx_text:`When I use an aid (cane, crutch, walker), I can walk:`
            }, {
                text: `Less than 15 feet or 5 meters`,
                score: 4,
                jumpTo: 'q2',
                qx_text:`When I use an aid (cane, crutch, walker), I can walk:`
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
                        qx_text:`A cane, crutch, or someone to hold on to.`
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text:`A cane, crutch, or someone to hold on to.`
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text:`A cane, crutch, or someone to hold on to.`
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text:`A cane, crutch, or someone to hold on to.`
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text:`A cane, crutch, or someone to hold on to.`
                    }
                ]
            }, {
                text: ` A walker or other bilateral support.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3',
                        qx_text:`A walker or other bilateral support.`
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text:`A walker or other bilateral support.`
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text:`A walker or other bilateral support.`
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text:`A walker or other bilateral support.`
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text:`A walker or other bilateral support.`
                    }
                ]
            }, {
                text: `A wheelchair.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3',
                        qx_text:`A wheelchair.`
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3',
                        qx_text:`A wheelchair.`
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3',
                        qx_text:`A wheelchair.`
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3',
                        qx_text:`A wheelchair.`
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3',
                        qx_text:`A wheelchair.`
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
                        qx_text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q5',
                        qx_text: `Change in feeling (e.g. tingling, numbness) in hands, feet, arms or legs?`
                    }
                ]
            }, {
                text: `Weakness in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q5',
                        qx_text: `Weakness in arms or legs?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q5',
                        qx_text: `Weakness in arms or legs?`
                    }
                ]
            }, {
                text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q6',
                        qx_text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q6',
                        qx_text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`
                    }
                ]
            }, {
                text: `Swaying or losing balance when sitting, standing, or walking?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q7',
                        qx_text: `Swaying or losing balance when sitting, standing, or walking?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q7',
                        qx_text: `Swaying or losing balance when sitting, standing, or walking?`
                    }
                ]
            }, {
                text: `Clumsiness or tremors in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q8',
                        qx_text: `Clumsiness or tremors in arms or legs?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q8',
                        qx_text: `Clumsiness or tremors in arms or legs?`
                    }
                ]
            }, {
                text: `Weakness of muscles in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q9',
                        qx_text: `Weakness of muscles in your face?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q9',
                        qx_text: `Weakness of muscles in your face?`
                    }
                ]
            }, {
                text: `Numbness in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q10',
                        qx_text: `Numbness in your face?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q10',
                        qx_text: `Numbness in your face?`
                    }
                ]
            }, {
                text: `Blurry vision or blind spots?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q11',
                        qx_text: `Blurry vision or blind spots?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q11',
                        qx_text: `Blurry vision or blind spots?`
                    }
                ]
            }, {
                text: `Double vision?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q12',
                        qx_text: `Double vision?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q12',
                        qx_text: `Double vision?`
                    }
                ]
            }, {
                text: `Problems with hearing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q13',
                        qx_text: `Problems with hearing?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q13',
                        qx_text: `Problems with hearing?`
                    }
                ]
            }, {
                text: `Problems with voice?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q14',
                        qx_text: `Problems with voice?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q14',
                        qx_text: `Problems with voice?`
                    }
                ]
            }, {
                text: `Problems with swallowing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q15',
                        qx_text: `Problems with swallowing?`
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q15',
                        qx_text: `Problems with swallowing?`
                    }
                ]
            }, {
                text: `Constipation or loss of bowel control?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q16',
                        qx_text:''
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q16',
                        qx_text:''
                    }
                ]
            }, {
                text: `Loss of bladder control or leakage?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q17',
                        qx_text:''
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q17',
                        qx_text:''
                    }
                ]
            }, {
                text: `Difficulty starting to urinate?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q19',
                        qx_text:''
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q19',
                        qx_text:''
                    }
                ]
            }, {
                text: `Concentration, memory, or thinking problems?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q20',
                        qx_text:''
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q20',
                        qx_text:''
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
                        score:0
                    },
                    {
                        text: `Feeling is good`,
                        score:1
                    },
                    {
                        text: `Feeling is fair`,
                        score:2
                    },
                    {
                        text: `Feeling is poor`,
                        score:3
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score:4
                    },
                ]
            },
            {
                text: `Left hand or arm`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score:0
                    },
                    {
                        text: `Feeling is good`,
                        score:1
                    },
                    {
                        text: `Feeling is fair`,
                        score:2
                    },
                    {
                        text: `Feeling is poor`,
                        score:3
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score:4
                    },
                ]
            },
            {
                text: `Right foot or leg`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score:0
                    },
                    {
                        text: `Feeling is good`,
                        score:1
                    },
                    {
                        text: `Feeling is fair`,
                        score:2
                    },
                    {
                        text: `Feeling is poor`,
                        score:3
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score:4
                    },
                ]
            },
            {
                text: `Left foot or leg`,
                options: [
                    {
                        text: `Feeling is very good - No problems`,
                        score:0
                    },
                    {
                        text: `Feeling is good`,
                        score:1
                    },
                    {
                        text: `Feeling is fair`,
                        score:2
                    },
                    {
                        text: `Feeling is poor`,
                        score:3
                    },
                    {
                        text: `Feeling is very poor or completely gone`,
                        score:4
                    },
                ]
            }
        ]
    },
    q5: {
        text: `In general, how much strength do you have to raise each arm and leg in the air?`,
        sub: [
            {
                text: `a. Right Arm`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score:0
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score:1
                    },
                    {
                        text: `I can barely raise it`,
                        score:2
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score:3
                    },
                    {
                        text: `I cannot move it at all`,
                        score:4
                    },
                ]
            },
            {
                text: `b. Left Arm`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score:0
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score:1
                    },
                    {
                        text: `I can barely raise it`,
                        score:2
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score:3
                    },
                    {
                        text: `I cannot move it at all`,
                        score:4
                    },
                ]
            },
            {
                text: `c. Right Leg`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score:0
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score:1
                    },
                    {
                        text: `I can barely raise it`,
                        score:2
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score:3
                    },
                    {
                        text: `I cannot move it at all`,
                        score:4
                    },
                ]
            },
            {
                text: `d. Left Leg`,
                options: [
                    {
                        text: `I can easily raise it and keep it raised`,
                        score:0
                    },
                    {
                        text: `I have to make  some effort to raise limb it`,
                        score:1
                    },
                    {
                        text: `I can barely raise it`,
                        score:2
                    },
                    {
                        text: `I can move my limb, but I cannot raise it`,
                        score:3
                    },
                    {
                        text: `I cannot move it at all`,
                        score:4
                    },
                ]
            }
        ]
    }
};

export const navigationMap = {
    "q1:a:0": "q3",
    "q1:a:1": "q1:b",
    "q1:a:2": "q1:c"
}