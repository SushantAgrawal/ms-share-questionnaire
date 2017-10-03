export const welcomeMap = {
    none: 'welcomea',
    one: 'welcomeb',
    all: 'welcomec'
};

export const navMap = {
    q1a: {
        descr1: `The first set of questions will ask about symptoms you might be experiencing. The experience of everyone with MS is different, and you may not experience all of the symptoms that we ask about.`,
        descr2: `Please try your best to answer according to the choices available in each question. You may skip any questions you don’t wish to answer. However, we may not be able to calculate your EDSS score if there is missing information.`,
        text: `Which of the following best describes your ability to walk?`,
        options: [
            {
                text: `I can walk without any problem`,
                score: 0,
                jumpTo: 'q3'
            }, {
                text: `I have some difficulties with walking, but can walk without aid`,
                score: 1,
                jumpTo: 'q1b'
            }, {
                text: `I require a cane, crutch, or other aid to walk`,
                score: 2,
                jumpTo: 'q1c'
            }, {
                text: `I require a wheelchair for almost all activities`,
                score: 3,
                jumpTo: 'q3'
            }, {
                text: `I am confined to bed most of the time`,
                score: 4,
                jumpTo: 'q3'
            }
        ]
    },
    q1b: {
        text: `How far can you walk without needing to use an aid (cane, crutch, walker)?`,
        options: [
            {
                text: `More than 1500 feet, 500 meters or about five football fields`,
                score: 0,
                jumpTo: 'q2'
            }, {
                text: `About 900 to 1500 feet, 300 meters or about 3 football fields`,
                score: 1,
                jumpTo: 'q2'
            }, {
                text: `About 600 to 899 feet, 200 meters or about 2 football fields`,
                score: 2,
                jumpTo: 'q2'
            }, {
                text: `About 300 to 599 feet, 100 meters or about 1 football field`,
                score: 3,
                jumpTo: 'q2'
            }
        ]
    },
    q1c: {
        text: `When I use an aid (cane, crutch, walker), I can walk:`,
        options: [
            {
                text: `About 300 to 400 feet, 120 meters or about 1 football field`,
                score: 0,
                jumpTo: 'q2'
            }, {
                text: `About 150 to 299 feet or 50 meters`,
                score: 1,
                jumpTo: 'q2'
            }, {
                text: `About 50 to 149 feet or 20 meters`,
                score: 2,
                jumpTo: 'q2'
            }, {
                text: `About 15 to 50 feet or 20 meters`,
                score: 3,
                jumpTo: 'q2'
            }, {
                text: `Less than 15 feet or 5 meters`,
                score: 4,
                jumpTo: 'q2'
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
                        jumpTo: 'q3'
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3'
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3'
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3'
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3'
                    }
                ]
            }, {
                text: ` A walker or other bilateral support.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3'
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3'
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3'
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3'
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3'
                    }
                ]
            }, {
                text: `A wheelchair.`,
                options: [
                    {
                        text: `Never or rarely`,
                        score: 0,
                        jumpTo: 'q3'
                    }, {
                        text: `Sometimes`,
                        score: 1,
                        jumpTo: 'q3'
                    }, {
                        text: `Less than half the time`,
                        score: 2,
                        jumpTo: 'q3'
                    }, {
                        text: `More than half the time`,
                        score: 3,
                        jumpTo: 'q3'
                    }, {
                        text: `All the time or almost all of the time`,
                        score: 4,
                        jumpTo: 'q3'
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
                        jumpTo: 'q4'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q4'
                    }
                ]
            }, {
                text: `Weakness in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q5'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q5'
                    }
                ]
            }, {
                text: `Spasms (brief muscle contractions) or stiffness (spasticity) in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q6'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q6'
                    }
                ]
            }, {
                text: `Swaying or losing balance when sitting, standing, or walking?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q7'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q7'
                    }
                ]
            }, {
                text: `Clumsiness or tremors in arms or legs?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q8'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q8'
                    }
                ]
            }, {
                text: `Weakness of muscles in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q9'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q9'
                    }
                ]
            }, {
                text: `Numbness in your face?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q10'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q10'
                    }
                ]
            }, {
                text: `Blurry vision or blind spots?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q11'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q11'
                    }
                ]
            }, {
                text: `Double vision?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q12'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q12'
                    }
                ]
            }, {
                text: `Problems with hearing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q13'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q13'
                    }
                ]
            }, {
                text: `Problems with voice?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q14'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q14'
                    }
                ]
            }, {
                text: `Problems with swallowing?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q15'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q15'
                    }
                ]
            }, {
                text: `Constipation or loss of bowel control?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q16'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q16'
                    }
                ]
            }, {
                text: `Loss of bladder control or leakage?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q17'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q17'
                    }
                ]
            }, {
                text: `Difficulty starting to urinate?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q19'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q19'
                    }
                ]
            }, {
                text: `Concentration, memory, or thinking problems?`,
                options: [
                    {
                        text: `Yes`,
                        score: 1,
                        jumpTo: 'q20'
                    }, {
                        text: `No`,
                        score: 0,
                        jumpTo: 'q20'
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
    }
};

export const navigationMap = {
    "q1:a:0": "q3",
    "q1:a:1": "q1:b",
    "q1:a:2": "q1:c"
}