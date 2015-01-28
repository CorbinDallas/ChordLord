var pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G',
            'Ab', 'A', 'Bb', 'B'];
var tunings = {
    guitarStandard: [4, 11, 7, 2, 9, 4]
};
var cirlceOfFiths = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
var completeSetList = {
    nullSet: {
        "(0-1) Silence, Rest": { "nullset": [] }
    },
    monad: {
        "(1-1) Monad" : { "monadset": [0] }
    },
    dyads: {
        "(2-1) Pitch Class 1" : { "Minor 2nd" : [0, 1], "Major 7th" : [0, 11] },
        "(2-2) Pitch Class 2" : { "Major 2nd" : [0, 2], "Minor 7th" : [0, 10] },
        "(2-3) Pitch Class 3" : { "Minor 3rd" : [0, 3], "Major 6th" : [0, 9] },
        "(2-4) Pitch Class 4" : { "Major 3rd" : [0, 4], "Minor 6th" : [0, 8] },
        "(2-5) Pitch Class 5" : { "Perfect 4th" : [0, 5], "Perfect 5th" : [0, 7] },
        "(2-6S) Pitch Class 6" : { "Augmented 4th / Diminished 5th" : [0, 6] }
    },
    triads: {
        //tertial//
        "Tertial": {
            "(3-11M) Major": { root: [0, 4, 7], inversions: [[0, 3, 8], [0, 5, 9]] },
            "(3-11) Minor": { root: [0, 3, 7], inversions: [[0, 4, 9], [0, 5, 8]] },
            "(3-10) Diminished": { root: [0, 3, 6], inversions: [[0, 3, 9], [0, 6, 9]] }
        },
        "Secundal": {
            "(3-6) Major Trichord": { root: [0, 2, 4], inversions: [[0, 2, 10], [0, 8, 10]] },
            "(3-2M) Minor Trichord": { root: [0, 2, 3], inversions: [[0, 1, 10], [0, 9, 11]] },
            "(3-2) Phrygian Trichord": { root: [0, 1, 3], inversions: [[0, 2, 11], [0, 9, 10]] }
        },
        "Quartal": {
            "(3-9) Sus 4": { root: [0, 5, 7], inversions: [[0, 2, 7], [0, 5, 10]] },
            "(3-5M) Diminished sus 4": { root: [0, 5, 6], inversions: [[0, 1, 7], [0, 6, 11]] },
            "(3-5) Sus #4": { root: [0, 6, 7], inversions: [[0, 1, 6], [0, 5, 11]] }
        },
        "7 no 3": {
            "(3-4M) Major 7 no 3": { root: [0, 7, 11], inversions: [[0, 4, 5], [0, 1, 8]] },
            "(3-7M) 7 no 3": { root: [0, 7, 10], inversions: [[0, 3, 5], [0, 2, 9]] },
            "(3-8M) Half Diminished no 3": { root: [0, 6, 10], inversions: [[0, 4, 6], [0, 2, 8]] }
        },
        "7 no 5": {
            "(3-4) Major 7 no 5": { root: [0, 4, 11], inversions: [[0, 7, 8], [0, 1, 5]] },
            "(3-8) 7 no 5": { root: [0, 4, 10], inversions: [[0, 6, 8], [0, 2, 6]] },
            "(3-7) Minor 7 no 5": { root: [0, 3, 10], inversions: [[0, 7, 9], [0, 2, 5]] }
        },
        "Diatonic to Melodic/Harmonic Minor": {
            "(3-12S) Augmented": { root: [0, 4, 8], inversions: [] },
            "(3-3M) Major #2 Trichord": { root: [0, 3, 4], inversions: [[0, 1, 9], [0, 8, 11]] },
            "(3-3) Phrygian Major Trichord": { root: [0, 1, 4], inversions: [[0, 3, 11], [0, 8, 9]] }
        },
        "Chromatic Trichord": {
            "(3-1) Chromatic Trichord": { root: [0, 1, 2], inversions: [[0, 1, 11], [0, 10, 11]] }
        }
    },
    quadrads: {
        "Tertial": {
            "(4-27) Minor 7 b5": { root: [0, 3, 6, 10], inversions: [[0, 3, 7, 9], [0, 4, 6, 9], [0, 2, 5, 8]] },
            "(4-26) Minor 7": { root: [0, 3, 7, 10], inversions: [[0, 4, 7, 9], [0, 2, 5, 8], [0, 2, 5, 9]] },
            "(4-20) Major 7": { root: [0, 4, 7, 11], inversions: [[0, 3, 7, 8], [0, 4, 5, 9], [0, 1, 5, 8]] },
            "(4-27M) Dom 7": { root: [0, 4, 7, 10], inversions: [[0, 3, 6, 8], [0, 3, 5, 9], [0, 2, 6, 9]] }
        },
        "Quartal": {
            "(4-23) Perfect Quartal": { root: [0, 3, 5, 10], inversions: [[0, 2, 7, 9], [0, 5, 7, 10], [0, 2, 5, 7]] },
            "(4-16M) Mixolydian Quartal": { root: [0, 4, 5, 10], inversions: [[0, 1, 6, 8], [0, 5, 7, 11], [0, 2, 6, 7]] },
            "(4-8) Ionian Quartal": { root: [0, 4, 5, 11], inversions: [[0, 1, 7, 8], [0, 6, 7, 11], [0, 1, 5, 6]] },
            "(4-16) Lydian Quartal": { root: [0, 4, 6, 11], inversions: [[0, 2, 7, 8], [0, 5, 6, 10], [0, 1, 5, 7]] }
        },
        "Secundal": {
            "(4-11M) Major Tetrachord": { root: [0, 2, 4, 5], inversions: [[0, 2, 3, 10], [0, 1, 8, 10], [0, 7, 9, 11]] },
            "(4-11) Phrygian Tetrachord": { root: [0, 1, 3, 5], inversions: [[0, 2, 4, 11], [0, 2, 9, 10], [0, 7, 8, 10]] },
            "(4-10) Minor Tetrachord": { root: [0, 2, 3, 5], inversions: [[0, 1, 3, 10], [0, 2, 9, 11], [0, 7, 9, 10]] },
            "(4-21) Lydian Tetrachord": { root: [0, 2, 4, 6], inversions: [[0, 2, 4, 10], [0, 2, 8, 10], [0, 6, 8, 10]] }
        },
        "9 no 7": {
            "(4-22) Major add 9": { root: [0, 2, 4, 7], inversions: [[0, 2, 5, 10], [0, 3, 8, 10], [0, 5, 7, 9]] },
            "(4-13) Diminished add b9": { root: [0, 1, 3, 6], inversions: [[0, 2, 5, 11], [0, 3, 9, 10], [0, 6, 7, 9]] },
            "(4-Y15) Minor add b9": { root: [0, 1, 3, 7], inversions: [[0, 2, 6, 11], [0, 4, 9, 10], [0, 5, 6, 8]] },
            "(4-14) Minor add 9": { root: [0, 2, 3, 7], inversions: [[0, 1, 5, 10], [0, 4, 9, 11], [0, 5, 7, 8]] }
        },
        "9 no 3": {
            "(4-14M) Major 9 no 3": { root: [0, 2, 7, 11], inversions: [[0, 5, 9, 10], [0, 4, 5, 7], [0, 1, 3, 8]] },
            "(4-22M) 9 no 3": { root: [0, 2, 7, 10], inversions: [[0, 5, 8, 10], [0, 3, 5, 7], [0, 2, 4, 9]] },
            "(4-13M) 7 (b9) no 3": { root: [0, 1, 7, 10], inversions: [[0, 6, 9, 11], [0, 3, 5, 6], [0, 2, 3, 9]] },
            "(4-Y15M) Major (#11)": { root: [0, 4, 6, 7], inversions: [[0, 2, 3, 8], [0, 1, 6, 10], [0, 5, 9, 11]] }
        },
        "Diatonic to Melodic/Harmonic Minor": {
            "(4-3) Minor Major 9 no 5": { root: [0, 2, 3, 11], inversions: [[0, 1, 9, 10], [0, 8, 9, 11], [0, 1, 3, 4]] },
            "(4-12M) Augmented Major 9 no 3": { root: [0, 2, 8, 11], inversions: [[0, 6, 9, 10], [0, 3, 4, 6], [0, 1, 3, 9]] },
            "(4-7) Major 7 (#9) no 5": { root: [0, 3, 4, 11], inversions: [[0, 1, 8, 9], [0, 7, 8, 11], [0, 1, 4, 5]] },
            "(4-X15) 7 #11 no 3": { root: [0, 6, 7, 10], inversions: [[0, 1, 4, 6], [0, 3, 5, 11], [0, 2, 8, 9]] },
            "(4-18) Diminished Major 7": { root: [0, 3, 6, 11], inversions: [[0, 3, 8, 9], [0, 5, 6, 9], [0, 1, 4, 7]] },
            "(4-19) Minor Major 7": { root: [0, 3, 7, 11], inversions: [[0, 4, 8, 9], [0, 4, 5, 8], [0, 1, 4, 8]] },
            "(4-17) Major add #9": { root: [0, 3, 4, 7], inversions: [[0, 1, 4, 9], [0, 3, 8, 11], [0, 5, 8, 9]] },
            "(4-12) Diminished add 9": { root: [0, 2, 3, 6], inversions: [[0, 1, 4, 10], [0, 3, 9, 11], [0, 6, 8, 9]] },
            "(4-19M) Augmented Major 7": { root: [0, 4, 8, 11], inversions: [[0, 4, 7, 8], [0, 3, 4, 8], [0, 1, 5, 9]] },
            "(4-18M) Minor (#11)": { root: [0, 3, 6, 7], inversions: [[0, 3, 4, 9], [0, 1, 6, 9], [0, 5, 8, 11]] },
            "(4-X15M) 7 (#9) no 5, Jimi Hendrix Chord": { root: [0, 3, 4, 10], inversions: [[0, 1, 7, 9], [0, 6, 8, 11], [0, 2, 5, 6]] },
            "(4-24) Augmented 7": { root: [0, 4, 8, 10], inversions: [[0, 4, 6, 8], [0, 2, 4, 8], [0, 2, 6, 10]] },
            "(4-25S) 7 b5": { root: [0, 4, 6, 10], inversions: [[0, 2, 6, 8]] },
            "(4-28S) Diminished 7": { root: [0, 3, 6, 9], inversions: [] }
        },
        "Nondiatonic": {
            "(4-1) Chromatic Tetrachord": { root: [0, 1, 2, 3], inversions: [[0, 1, 2, 11], [0, 1, 10, 11], [0, 9, 10, 11]] },
            "(4-2) Chromatic Trichord + Major 2": { root: [0, 1, 2, 4], inversions: [[0, 1, 3, 11], [0, 2, 10, 11], [0, 8, 9, 10]] },
            "(4-4) Chromatic Trichord + Minor 3": { root: [0, 1, 2, 5], inversions: [[0, 1, 4, 11], [0, 3, 10, 11], [0, 7, 8, 9]] },
            "(4-5) Chromatic Trichord + Major 3": { root: [0, 1, 2, 6], inversions: [[0, 1, 5, 11], [0, 4, 10, 11], [0, 6, 7, 8, ]] },
            "(4-6) Chromatic Trichord + Perfect 4": { root: [0, 1, 2, 7], inversions: [[0, 1, 6, 11], [0, 5, 10, 11], [0, 5, 6, 7]] },
            "(4-5M) Chromatic Trichord + Tritone": { root: [0, 1, 2, 8], inversions: [[0, 1, 7, 11], [0, 6, 10, 11], [0, 4, 5, 6]] },
            "(4-4M) Chromatic Trichord + Perfect 5": { root: [0, 1, 2, 9], inversions: [[0, 1, 8, 11], [0, 7, 10, 11], [0, 3, 4, 5]] },
            "(4-2M) Chromatic Trichord + Minor 6": { root: [0, 1, 2, 10], inversions: [[0, 1, 9, 11], [0, 8, 10, 11], [0, 2, 3, 4]] },
            "(4-9S) Ambiguous Symmetrical": { root: [0, 1, 6, 7], inversions: [[0, 5, 6, 11]] }
        }
    },
    pentadFamilies = [
    {
        name: '(5-1) Chromatic Pentachord',
        scales: [
            {
                name:"Chromatic Pentachord (A)",
                set: [0,1,2,3,4]
            },
            {
                name:"Chromatic Pentachord (B)",
                set: [0,1,2,3,11]
            },
            {
                name:"Chromatic Pentachord (C)",
                set: [0,1,2,10,11]
            },
            {
                name:"Chromatic Pentachord (D)",
                set: [0,1,9,10,11]
            },
            {
                name:"Chromatic Pentachord (E)",
                set: [0,8,9,10,11]
            }
        ]
    },
    {
        name: '(5-2) Chromatic Tetrachord + maj2',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,1,2,3,5]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,2,4,11]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,1,3,10,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,9,10,11]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,7,8,9,10]
            }
        ]
    },
    {
        name: "(5-2M) Chromatic Tetrachord + min7",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,4,5]
            },
            {
                name:"Locrian nat6",
                set: [0,1,2,3,10]
            },
            {
                name:"Ionian #5",
                set: [0,1,2,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,1,8,10,11]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,7,9,10,11]
            }
        ]   
    },
    {
        name: "(5-3) ",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,1,2,4,5]
            },
            {
                name:"Dorian b5",
                set: [0,1,3,4,11]
            },
            {
                name:"Phrygian b4",
                set: [0,2,3,10,11]
            },
            {
                name:"Lydian b3",
                set: [0,1,8,9,10]
            },
            {
                name:"Mixolydian b2",
                set: [0,7,8,9,11]
            }
        ]
    },
    {
        name: "(5-3M)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,4,5]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,3,4,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,1,2,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,1,8,9,11]
            },
            {
                name:"Neapolitan Major V",
                set: [0,7,8,10,11]
            }
        ]
    },
    {
        name: '(5-4)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,3,6]
            },
            {
                name:"Ionian",
                set: [0,1,2,5,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,4,10,11]
            },
            {
                name:"Dorian",
                set: [0,3,9,10,11]
            },
            {
                name:"Aeolian",
                set: [0,6,7,8,9]
            }
        ]
    },
        {
        name: '(5-4M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,4,5,6]
            },
            {
                name:"Ionian",
                set: [0,1,2,3,9]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,8,11]
            },
            {
                name:"Dorian",
                set: [0,1,7,10,11]
            },
            {
                name:"Aeolian",
                set: [0,6,9,10,11]
            }
        ]
    },
        {
        name: '(5-5)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,3,7]
            },
            {
                name:"Ionian",
                set: [0,1,2,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,5,10,11]
            },
            {
                name:"Dorian",
                set: [0,4,9,10,11]
            },
            {
                name:"Aeolian",
                set: [0,5,6,7,8]
            }
        ]
    },
        {
        name: '(5-5M)',
        scales: [
            {
                name:"Lydian",
                set: [0,4,5,6,7]
            },
            {
                name:"Ionian",
                set: [0,1,2,3,8]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,7,11]
            },
            {
                name:"Dorian",
                set: [0,1,6,10,11]
            },
            {
                name:"Aeolian",
                set: [0,5,9,10,11]
            }
        ]
    },
        {
        name: '(5-6)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,5,6]
            },
            {
                name:"Ionian",
                set: [0,1,4,5,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,4,10,11]
            },
            {
                name:"Dorian",
                set: [0,1,7,8,9]
            },
            {
                name:"Aeolian",
                set: [0,6,7,8,11]
            }
        ]
    },
        {
        name: '(5-6M)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,5,6]
            },
            {
                name:"Ionian",
                set: [0,3,4,5,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,8,9]
            },
            {
                name:"Dorian",
                set: [0,1,7,8,11]
            },
            {
                name:"Aeolian",
                set: [0,6,7,10,11]
            }
        ]
    },
        {
        name: '(5-7)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,6,7]
            },
            {
                name:"Ionian",
                set: [0,1,5,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,4,5,10,11]
            },
            {
                name:"Dorian",
                set: [0,1,6,7,8]
            },
            {
                name:"Aeolian",
                set: [0,5,6,7,11]
            }
        ]
    },
        {
        name: '(5-7M)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,5,6,7]
            },
            {
                name:"Ionian",
                set: [0,4,5,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,7,8]
            },
            {
                name:"Dorian",
                set: [0,1,6,7,11]
            },
            {
                name:"Aeolian",
                set: [0,5,6,10,11]
            }
        ]
    },
        {
        name: '(5-8)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,3,4,6]
            },
            {
                name:"Ionian",
                set: [0,1,2,4,10]
            },
            {
                name:"Mixolydian",
                set: [0,1,3,9,11]
            },
            {
                name:"Dorian",
                set: [0,2,8,10,11]
            },
            {
                name:"Aeolian",
                set: [0,6,8,9,10]
            }
        ]
    },
        {
        name: '(5-9)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,4,6]
            },
            {
                name:"Ionian",
                set: [0,1,3,5,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,10,11]
            },
            {
                name:"Dorian",
                set: [0,2,8,9,10]
            },
            {
                name:"Aeolian",
                set: [0,6,7,8,10]
            }
        ]
    },
        {
        name: '(5-9M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,5,6]
            },
            {
                name:"Ionian",
                set: [0,2,3,4,10]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,8,10]
            },
            {
                name:"Dorian",
                set: [0,1,7,9,11]
            },
            {
                name:"Aeolian",
                set: [0,6,8,10,11]
            }
        ]
    },
        {
        name: '(5-10)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,3,4,6]
            },
            {
                name:"Ionian",
                set: [0,2,3,5,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,3,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,8,9,11]
            },
            {
                name:"Aeolian",
                set: [0,6,7,9,10]
            }
        ]
    },
        {
        name: '(5-10M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,3,5,6]
            },
            {
                name:"Ionian",
                set: [0,1,3,4,10]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,9,11]
            },
            {
                name:"Dorian",
                set: [0,1,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,6,8,9,11]
            }
        ]
    },
        {
        name: '(5-11)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,3,4,7]
            },
            {
                name:"Ionian",
                set: [0,1,2,5,10]
            },
            {
                name:"Mixolydian",
                set: [0,1,4,9,11]
            },
            {
                name:"Dorian",
                set: [0,3,8,10,11]
            },
            {
                name:"Aeolian",
                set: [0,5,7,8,9]
            }
        ]
    },
        {
        name: '(5-11M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,4,5,7]
            },
            {
                name:"Ionian",
                set: [0,1,2,4,9]
            },
            {
                name:"Mixolydian",
                set: [0,1,3,8,11]
            },
            {
                name:"Dorian",
                set: [0,2,7,10,11]
            },
            {
                name:"Aeolian",
                set: [0,5,8,9,10]
            }
        ]
    },
        {
        name: '(5-12)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,4,7]
            },
            {
                name:"Ionian",
                set: [0,1,3,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,5,10,11]
            },
            {
                name:"Dorian",
                set: [0,3,8,9,10]
            },
            {
                name:"Aeolian",
                set: [0,5,6,7,9]
            }
        ]
    },
        {
        name: '(5-12M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,5,6,7]
            },
            {
                name:"Ionian",
                set: [0,2,3,4,9]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,7,10]
            },
            {
                name:"Dorian",
                set: [0,1,6,9,11]
            },
            {
                name:"Aeolian",
                set: [0,5,8,10,11]
            }
        ]
    },
        {
        name: '(5-Z12) Locrian Pentachord (Secundal)',
        scales: [
            {
                name:"Locrian Pentachord",
                set: [0,1,3,5,6]
            },
            {
                name:"Ionian II Pentachord",
                set: [0,2,4,5,11]
            },
            {
                name:"Dorian III Pentachord",
                set: [0,2,3,9,10]
            },
            {
                name:"Phrygian IV Pentachord",
                set: [0,1,7,8,10]
            },
            {
                name:"Lydian V Pentachord",
                set: [0,6,7,9,11]
            }
        ]
    },
        {
        name: '(5-13)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,4,8]
            },
            {
                name:"Ionian",
                set: [0,1,3,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,6,10,11]
            },
            {
                name:"Dorian",
                set: [0,4,8,9,10]
            },
            {
                name:"Aeolian",
                set: [0,4,5,6,8]
            }
        ]
    },
        {
        name: '(5-13M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,3,4,8]
            },
            {
                name:"Ionian",
                set: [0,1,2,6,10]
            },
            {
                name:"Mixolydian",
                set: [0,1,5,9,11]
            },
            {
                name:"Dorian",
                set: [0,4,8,10,11]
            },
            {
                name:"Aeolian",
                set: [0,4,6,7,8]
            }
        ]
    },
        {
        name: '(5-14)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,5,7]
            },
            {
                name:"Ionian",
                set: [0,1,4,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,5,10,11]
            },
            {
                name:"Dorian",
                set: [0,2,7,8,10]
            },
            {
                name:"Aeolian",
                set: [0,5,6,8,10]
            }
        ]
    },
        {
        name: '(5-14M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,5,6,7]
            },
            {
                name:"Ionian",
                set: [0,3,4,5,10]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,7,9]
            },
            {
                name:"Dorian",
                set: [0,1,6,8,11]
            },
            {
                name:"Aeolian",
                set: [0,5,7,10,11]
            }
        ]
    },
        {
        name: '(5-15)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,6,8]
            },
            {
                name:"Ionian",
                set: [0,1,5,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,4,6,10,11]
            },
            {
                name:"Dorian",
                set: [0,2,6,7,8]
            },
            {
                name:"Aeolian",
                set: [0,4,5,6,10]
            }
        ]
    },
        {
        name: '(5-16)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,3,4,7]
            },
            {
                name:"Ionian",
                set: [0,2,3,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,4,9,10]
            },
            {
                name:"Dorian",
                set: [0,3,8,9,11]
            },
            {
                name:"Aeolian",
                set: [0,5,6,8,9]
            }
        ]
    },
        {
        name: '(5-16M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,4,6,7]
            },
            {
                name:"Ionian",
                set: [0,1,3,4,9]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,8,11]
            },
            {
                name:"Dorian",
                set: [0,1,6,9,10]
            },
            {
                name:"Aeolian",
                set: [0,5,8,9,11]
            }
        ]
    },
        {
        name: '(5-17)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,4,5,8]
            },
            {
                name:"Ionian",
                set: [0,1,2,5,9]
            },
            {
                name:"Mixolydian",
                set: [0,1,4,8,11]
            },
            {
                name:"Dorian",
                set: [0,3,7,10,11]
            },
            {
                name:"Aeolian",
                set: [0,4,7,8,9]
            }
        ]
    },
        {
        name: '(5-Z17)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,3,4,8]
            },
            {
                name:"Ionian",
                set: [0,2,3,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,5,9,10]
            },
            {
                name:"Dorian",
                set: [0,4,8,9,11]
            },
            {
                name:"Aeolian",
                set: [0,4,5,7,8]
            }
        ]
    },
        {
        name: '(5-X18)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,5,7]
            },
            {
                name:"Ionian",
                set: [0,3,4,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,3,8,9]
            },
            {
                name:"Dorian",
                set: [0,2,7,8,11]
            },
            {
                name:"Aeolian",
                set: [0,5,6,9,10]
            }
        ]
    },
        {
        name: '(5-X18M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,3,6,7]
            },
            {
                name:"Ionian",
                set: [0,1,4,5,10]
            },
            {
                name:"Mixolydian",
                set: [0,3,4,9,11]
            },
            {
                name:"Dorian",
                set: [0,1,6,8,9]
            },
            {
                name:"Aeolian",
                set: [0,5,7,8,11]
            }
        ]
    },
        {
        name: '(5-Y18)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,5,8]
            },
            {
                name:"Ionian",
                set: [0,1,4,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,6,10,11]
            },
            {
                name:"Dorian",
                set: [0,3,7,8,9]
            },
            {
                name:"Aeolian",
                set: [0,4,5,6,9]
            }
        ]
    },
        {
        name: '(5-Y18M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,6,7,8]
            },
            {
                name:"Ionian",
                set: [0,3,4,5,9]
            },
            {
                name:"Mixolydian",
                set: [0,1,2,6,9]
            },
            {
                name:"Dorian",
                set: [0,1,5,8,11]
            },
            {
                name:"Aeolian",
                set: [0,4,7,10,11]
            }
        ]
    },
        {
        name: '(5-19)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,3,6,7]
            },
            {
                name:"Ionian",
                set: [0,2,5,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,4,9,10]
            },
            {
                name:"Dorian",
                set: [0,1,6,7,9]
            },
            {
                name:"Aeolian",
                set: [0,5,6,8,11]
            }
        ]
    },
        {
        name: '(5-19M)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,6,7]
            },
            {
                name:"Ionian",
                set: [0,3,5,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,8,9]
            },
            {
                name:"Dorian",
                set: [0,1,6,7,10]
            },
            {
                name:"Aeolian",
                set: [0,5,6,9,11]
            }
        ]
    },
        {
        name: '(5-20) Major 7 (11) (Quartal)',
        scales: [
            {
                name:"Minor (b9 b13)",
                set: [0,1,3,7,8]
            },
            {
                name:"Ionian",
                set: [0,2,6,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,4,5,9,10]
            },
            {
                name:"Dorian",
                set: [0,1,5,6,8]
            },
            {
                name:"Major 7 (11)",
                set: [0,4,5,7,11]
            }
        ]
    },
        {
        name: '(5-20M) Major 7 (#11) (Quartal)',
        scales: [
            {
                name:"??",
                set: [0,1,5,7,8]
            },
            {
                name:"Major 7 (#11)",
                set: [0,4,6,7,11]
            },
            {
                name:"Minor (9 b13)",
                set: [0,2,3,7,8]
            },
            {
                name:"Dorian",
                set: [0,1,5,6,10]
            },
            {
                name:"Aeolian",
                set: [0,4,5,9,11]
            }
        ]
    },
        {
        name: '(5-21)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,5,8]
            },
            {
                name:"Ionian",
                set: [0,3,4,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,1,4,8,9]
            },
            {
                name:"Dorian",
                set: [0,3,7,8,11]
            },
            {
                name:"Aeolian",
                set: [0,4,5,8,9]
            }
        ]
    },
        {
        name: '(5-21M)',
        scales: [
            {
                name:"Lydian",
                set: [0,3,4,7,8]
            },
            {
                name:"Ionian",
                set: [0,1,4,5,9]
            },
            {
                name:"Mixolydian",
                set: [0,3,4,8,11]
            },
            {
                name:"Dorian",
                set: [0,1,5,8,9]
            },
            {
                name:"Aeolian",
                set: [0,4,7,8,11]
            }
        ]
    },
        {
        name: '(5-22)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,7,8]
            },
            {
                name:"Ionian",
                set: [0,3,6,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,4,8,9]
            },
            {
                name:"Dorian",
                set: [0,1,5,6,9]
            },
            {
                name:"Aeolian",
                set: [0,4,5,8,11]
            }
        ]
    },
        {
        name: '(5-23) Minor Pentachord (Secundal)',
        scales: [
            {
                name:"Minor Pentachord",
                set: [0,2,3,5,7]
            },
            {
                name:"Phrygian/Locrian II Pentachord",
                set: [0,1,3,5,10]
            },
            {
                name:"Ionian/Lydian III Pentachord",
                set: [0,2,4,9,11]
            },
            {
                name:"Dorian/Mixolydian IV Pentachord",
                set: [0,2,7,9,10]
            },
            {
                name:"Aeolian/Phrygian V Pentachord",
                set: [0,5,7,8,10]
            }       
        ]
    },
        {
        name: '(5-23M) Major Pentachord (Secundal)',
        scales: [
            {
                name:"Major Pentachord",
                set: [0,2,4,5,7]
            },
            {
                name:"Aeolian/Dorian II Pentachord",
                set: [0,2,3,5,10]
            },
            {
                name:"Phrygian/Locrian III Pentachord",
                set: [0,1,3,8,10]
            },
            {
                name:"Dorian",
                set: [0,2,7,9,11]
            },
            {
                name:"Aeolian",
                set: [0,5,7,9,10]
            }
        ]
    },
        {
        name: '(5-24) Phrygian Pentachord (Secundal)',
        scales: [
            {
                name:"Phrygian Pentachord",
                set: [0,1,3,5,7]
            },
            {
                name:"Ionian",
                set: [0,2,4,6,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,7,8,10]
            },
            {
                name:"Aeolian",
                set: [0,5,6,8,10]
            }
        ]
    },
        {
        name: '(5-24M) Lydian Pentachord (Secundal)',
        scales: [
            {
                name:"Lydian Pentachord",
                set: [0,2,4,6,7]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,10]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,8,10]
            },
            {
                name:"Dorian",
                set: [0,1,6,8,10]
            },
            {
                name:"Aeolian",
                set: [0,5,7,9,11]
            }
        ]
    },
        {
        name: '(5-25) Half-Diminished (b9) (Tertial)',
        scales: [
            {
                name:"Half-Diminished (b9)",
                set: [0,2,3,5,6]
            },
            {
                name:"Ionian",
                set: [0,1,3,4,10]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,9,11]
            },
            {
                name:"Dorian",
                set: [0,1,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,6,8,9,11]
            }
        ]
    },
        {
        name: '(5-25M) Minor 7 (b9) (Tertial)',
        scales: [
            {
                name:"Minor 7 (b9)",
                set: [0,3,4,6,8]
            },
            {
                name:"Ionian",
                set: [0,1,3,5,9]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,8,11]
            },
            {
                name:"Dorian",
                set: [0,2,6,9,10]
            },
            {
                name:"Aeolian",
                set: [0,4,7,8,10]
            }
        ]
    },
        {
        name: '(5-26)',
        scales: [
            {
                name:"??",
                set: [0,2,3,4,8]
            },
            {
                name:"??",
                set: [0,1,2,6,10]
            },
            {
                name:"??",
                set: [0,1,5,9,11]
            },
            {
                name:"Augmented Major 7 (#13)",
                set: [0,4,8,10,11]
            },
            {
                name:"Major (#11 b13)",
                set: [0,4,6,7,8]
            }
        ]
    },
        {
        name: '(5-26M) Dominant 7 (b13)',
        scales: [
            {
                name:"Augmented (#9 #11), Diminished (b11 b13)",
                set: [0,3,4,6,8]
            },
            {
                name:"??",
                set: [0,1,3,5,9]
            },
            {
                name:"Augmented Major 7 (9)",
                set: [0,2,4,8,11]
            },
            {
                name:"??",
                set: [0,2,6,9,10]
            },
            {
                name:"Dominant 7 (b13)",
                set: [0,4,7,8,10]
            }
        ]
    },
        {
        name: '(5-27) Major 7 (9) (Tertial)',
        scales: [
            {
                name:"??",
                set: [0,1,3,5,8]
            },
            {
                name:"Major 7 (9)",
                set: [0,2,4,7,11]
            },
            {
                name:"??",
                set: [0,2,5,9,10]
            },
            {
                name:"Minor 7 (b13)",
                set: [0,3,7,8,10]
            },
            {
                name:"Major (11 13)",
                set: [0,4,5,7,9]
            }
        ]
    },
        {
        name: '(5-27M) Minor 7 (9) (Tertial)',
        scales: [
            {
                name:"Minor (11 b13)",
                set: [0,3,5,7,8]
            },
            {
                name:"??",
                set: [0,2,4,5,9]
            },
            {
                name:"Minor 7 (9)",
                set: [0,2,3,7,10]
            },
            {
                name:"??",
                set: [0,1,5,8,10]
            },
            {
                name:"Major 7 (13)",
                set: [0,4,7,9,11]
            }
        ]
    },
        {
        name: '(5-28)',
        scales: [
            {
                name:"Diminished (9 b13)",
                set: [0,2,3,6,8]
            },
            {
                name:"Dominant 7 b5 (b9) ",
                set: [0,1,4,6,10]
            },
            {
                name:"??",
                set: [0,3,5,9,11]
            },
            {
                name:"??",
                set: [0,2,6,8,9]
            },
            {
                name:"Dominant 7 (#11)",
                set: [0,4,6,7,10]
            }       
        ]
    },
        {
        name: '(5-28M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,5,6,8]
            },
            {
                name:"Half-Diminished (b11)",
                set: [0,3,4,6,10]
            },
            {
                name:"Minor (b9 13)",
                set: [0,1,3,7,9]
            },
            {
                name:"Dorian",
                set: [0,2,6,8,11]
            },
            {
                name:"Dominant 7 b5 (13)",
                set: [0,4,6,9,10]
            }
        ]
    },
        {
        name: '(5-29) Dominant 7 (11) (Quartal)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,3,6,8]
            },
            {
                name:"Ionian",
                set: [0,2,5,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,5,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,6,7,9]
            },
            {
                name:"Dominant 7 (11)",
                set: [0,4,5,7,10]
            }
        ]
    },
        {
        name: '(5-29M) Half-Diminished (11) (Quartal)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,5,7,8]
            },
            {
                name:"Half-Diminished (11)",
                set: [0,3,5,6,10]
            },
            {
                name:"Mixolydian",
                set: [0,2,3,7,9]
            },
            {
                name:"Dorian",
                set: [0,1,5,7,10]
            },
            {
                name:"Aeolian",
                set: [0,4,6,9,11]
            }
        ]
    },
        {
        name: '(5-30)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,6,8]
            },
            {
                name:"Minor Major 7 (11)",
                set: [0,3,5,7,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,8,9]
            },
            {
                name:"Dorian",
                set: [0,2,6,7,10]
            },
            {
                name:"Aeolian",
                set: [0,4,5,8,10]
            }
        ]
    },
        {
        name: '(5-30M) Major 7 (#11)',
        scales: [
            {
                name:"Major (9 b13)",
                set: [0,2,4,7,8]
            },
            {
                name:"Ionian",
                set: [0,2,5,6,10]
            },
            {
                name:"Dominant 7 #5 (#9)",
                set: [0,3,4,8,10]
            },
            {
                name:"Sus 4 (b9 b13)",
                set: [0,1,5,7,8]
            },
            {
                name:"Major 7 (#11)",
                set: [0,4,6,7,11]
            }
        ]
    },
        {
        name: '(5-31)',
        scales: [
            {
                name:"Diminished 7 (b9)",
                set: [0,1,3,6,9]
            },
            {
                name:"Ionian",
                set: [0,2,5,8,11]
            },
            {
                name:"Half-Diminished 7 (13)",
                set: [0,3,6,9,10]
            },
            {
                name:"Minor (#11 13)",
                set: [0,3,6,7,9]
            },
            {
                name:"Diminished 7 (b11)",
                set: [0,3,4,6,9]
            }
        ]
    },
        {
        name: '(5-31M) Dominant 7 (b9)',
        scales: [
            {
                name:"Diminished 7 (9)",
                set: [0,2,3,6,9]
            },
            {
                name:"Dominant 7 (b9)",
                set: [0,1,4,7,10]
            },
            {
                name:"Diminished Major 7 (13)",
                set: [0,3,6,9,11]
            },
            {
                name:"Diminished 7 (b13)",
                set: [0,3,6,8,9]
            },
            {
                name:"Diminished 7 (11)",
                set: [0,3,5,6,9]
            }
        ]
    },
        {
        name: '(5-32) Minor 7 (#11)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,4,6,9]
            },
            {
                name:"Ionian",
                set: [0,3,5,8,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,5,8,9]
            },
            {
                name:"Minor 7 (#11)",
                set: [0,3,6,7,10]
            },
            {
                name:"Major (#9 13)",
                set: [0,3,4,7,9]
            }
        ]
    },
        {
        name: '(5-32M) Dominant 7 (#9)',
        scales: [
            {
                name:"Major (b9 13)",
                set: [0,1,4,7,9]
            },
            {
                name:"Diminished Major 7 (b13)",
                set: [0,3,6,8,11]
            },
            {
                name:"Mixolydian",
                set: [0,3,5,8,9]
            },
            {
                name:"Dorian",
                set: [0,2,5,6,9]
            },
            {
                name:"Dominant 7 (#9)",
                set: [0,3,4,7,10]
            }
        ]
    },
        {
        name: '(5-33) Whole Tone Pentachord',
        scales: [
            {
                name:"Whole Tone Pentachord, Lydian Augmented Pentachord",
                set: [0,2,4,6,8]
            },
            {
                name:"Dominant 7 b5 (9)",
                set: [0,2,4,6,10]
            },
            {
                name:"Dominant 7 #5 (9)",
                set: [0,2,4,8,10]
            },
            {
                name:"Dominant 7 #5 sus2 (#11), Dominant 7 b5 sus2 (b13)",
                set: [0,2,6,8,10]
            },
            {
                name:"Dominant 7 #5 (#11), Dominant7 b5 (b13) ",
                set: [0,4,6,8,10]
            }
        ]
    },
        {
        name: '(5-34) Dominant 7 (9) (Tertial)',
        scales: [
            {
                name:"5NameLater",
                set: [0,2,4,6,9]
            },
            {
                name:"Dominant 7 (9)",
                set: [0,2,4,7,10]
            },
            {
                name:"5NameLater",
                set: [0,2,5,8,10]
            },
            {
                name:"Half-Diminished (b13)",
                set: [0,3,6,8,10]
            },
            {
                name:"Minor (11 13)",
                set: [0,3,5,7,9]
            }
        ]
    },
        {
        name: '(5-35) Major Pentatonic / Minor Pentatonic (Quartal)',
        scales: [
            {
                name:"Major Pentatonic",
                set: [0,2,4,7,9]
            },
            {
                name:"5NameLater",
                set: [0,2,5,7,10]
            },
            {
                name:"5NameLater",
                set: [0,3,5,8,10]
            },
            {
                name:"5NameLater",
                set: [0,2,5,7,9]
            },
            {
                name:"Minor Pentatonic",
                set: [0,3,5,7,10]
            }
        ]
    }
]   
var hexadFamilies = [
    {
        name: '(6-1)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
    {
        name: '(6-2)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            }
        ]
    },
    {
        name: "(6-2M)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            }
        ]   
    },
    {
        name: "(6-X3)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2, Aeolian b1",
                set: [0,3,4,6,8,9,11]
            }
        ]
    },
    {
        name: "(6-X3M)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Neapolitan Major V",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Neapolitan Major VI",
                set: [0,2,3,4,6,8,10]
            }
        ]
    },
    {
        name: '(6-Y3)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y3M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-4)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Z4)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-5)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-5M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-6)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Z6)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-7S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-8)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-9)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-9M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X10)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X10M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y10)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y10M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X11)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X11M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y11)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y11M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X12)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X12M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y12)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y12M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-13)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Z13)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-14)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-14M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-15)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-15M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-16)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-16M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X17)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X17M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y17)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y17M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-18)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-18M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X19)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X19M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y19)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y19M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-20S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-21)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-21M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-22)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-22M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-23)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Z23)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X24)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X24M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y24)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y24M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X25)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-X25M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y25)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Y25M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-26)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-Z26)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-27)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-27M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
        {
        name: '(6-28)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
    {
        name: '(6-Z28)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            }
        ]
    },
    {
        name: "(6-29)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            }
        ]   
    },
    {
        name: "(6-Z29)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2, Aeolian b1",
                set: [0,3,4,6,8,9,11]
            }
        ]
    },
    {
        name: "(6-30S)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Neapolitan Major V",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Neapolitan Major VI",
                set: [0,2,3,4,6,8,10]
            }
        ]
    },
    {
        name: '(6-30MS)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-31)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-31M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-32)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-33)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-33M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-34)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-34M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
        {
        name: '(6-35S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            }
        ]
    },
    }
]   
var septadFamilies = [
    {
        name: 'Major Scale (7-35)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
    {
        name: 'Melodic Minor (7-34)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4, Overtone",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            },
            {
                name:"Super Locrian, Locrian b4, Altered Dominant",
                set: [0,1,3,4,6,8,10]
            }
        ]
    },
    {
        name: "Harmonic Minor (7-32)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            },
            {
                name:"Locrian b4 bb7",
                set: [0,1,3,4,6,8,9]
            }
        ]   
    },
    {
        name: "Harmonic Major (7-32M)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2",
                set: [0,3,4,6,8,9,11]
            },
            {
                name:"Locrian bb7",
                set: [0,1,3,5,6,8,9]
            }
        ]
    },
    {
        name: "Neapolitan Major Family (7-33)",
        scales: [
            {
                name:"Neapolitan Major, Melodic Minor b2, Phyrgian nat6 nat7, Dorian b2 nat7",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Lydian #5 #6",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Lydian #5 b7, Mixolydian #4 #5",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Mixolydian #4 b6, Lydian b6 b7",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Mixolydian b5 b6, Locrian nat2 nat3",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Locrian nat2 b4",
                set: [0,2,3,4,6,8,10]
            },
            {
                name:"Locrian bb3 b4",
                set: [0,1,2,4,6,8,10]
            }
        ]
    },
    {
        name: 'Hungarian Major (7-31)',
        scales: [
            {
                name:"Hungarian Major, Lydian #2 b7, Mixolydian #2 #4",
                set: [0,3,4,6,7,9,10]
            },
            {
                name:"Locrian b4 bb6 bb7",
                set: [0,1,3,4,6,7,9]
            },
            {
                name:"Locrian nat2 nat7",
                set: [0,2,3,5,6,8,11]
            },
            {
                name:"Locrian b4 nat6",
                set: [0,1,3,4,6,9,10]
            },
            {
                name:"Dorian #5 nat7, Melodic Minor #5",
                set: [0,2,3,5,8,9,11]
            },
            {
                name:"Dorian b2 #4, Phrygian #4 nat6",
                set: [0,1,3,6,7,9,10]
            },
            {
                name:"Lydian #3 #5",
                set: [0,2,5,6,8,9,11]
            }
        ]
    },
        {
        name: 'Locrian nat2 bb7 (7-31M)',
        scales: [
            {
                name:"Locrian nat2 bb7",
                set: [0,2,3,5,6,8,9]
            },
            {
                name:"Locrian b4 bb6",
                set: [0,1,3,4,6,7,10]
            },
            {
                name:"Melodic Minor b5, Ionian b3 b5, Dorian b5 nat7",
                set: [0,2,3,5,6,9,11]
            },
            {
                name:"Dorian b2 b4, Phrygian b4 nat6",
                set: [0,1,3,4,7,9,10]
            },
            {
                name:"Lydian b3 #5",
                set: [0,2,3,6,8,9,11]
            },
            {
                name:"Lydian b2 b7",
                set: [0,1,4,6,7,9,10]
            },
            {
                name:"Lydian #2 #3 #5",
                set: [0,3,5,6,8,9,11]
            }
        ]
    },
        {
        name: 'Phrygian bb7 (7-30M)',
        scales: [
            {
                name:"Phrygian bb7",
                set: [0,1,3,5,7,8,9]
            },
            {
                name:"Lydian b6",
                set: [0,2,4,6,7,8,11]
            },
            {
                name:"Mixolydian b5",
                set: [0,2,4,5,6,9,10]
            },
            {
                name:"Aeolian b4",
                set: [0,2,3,4,7,8,10]
            },
            {
                name:"Locrian bb3",
                set: [0,1,2,5,6,8,10]
            },
            {
                name:"Ionian b2",
                set: [0,1,4,5,7,9,11]
            },
            {
                name:"Lydian #2 #5 #6",
                set: [0,3,4,6,8,10,11]
            }
        ]
    },
        {
        name: 'Neapolitan Minor (7-30)',
        scales: [
            {
                name:"Neapolitan Minor, Phrygian nat7",
                set: [0,1,3,5,7,8,11]
            },
            {
                name:"Lydian #6",
                set: [0,2,4,6,7,10,11]
            },
            {
                name:"Mixolydian #5",
                set: [0,2,4,5,8,9,10]
            },
            {
                name:"Aeolian #4",
                set: [0,2,3,6,7,8,10]
            },
            {
                name:"Locrian nat3",
                set: [0,1,4,5,6,8,10]
            },
            {
                name:"Ionian #2",
                set: [0,3,4,5,7,9,11]
            },
            {
                name:"Locrian bb3 b4 bb7",
                set: [0,1,2,4,6,8,9]
            }
        ]
    },
        {
        name: 'Ionian b5 (7-29M)',
        scales: [
            {
                name:"Ionian b5",
                set: [0,2,4,5,6,9,11]
            },
            {
                name:"Dorian b4",
                set: [0,2,3,4,7,9,10]
            },
            {
                name:"Phrygian bb3",
                set: [0,1,2,5,7,8,10]
            },
            {
                name:"Lydian b2",
                set: [0,1,4,6,7,9,11]
            },
            {
                name:"Lydian #2 #3 #5 #6",
                set: [0,3,5,6,8,10,11]
            },
            {
                name:"Aeolian bb7",
                set: [0,2,3,5,7,8,9]
            },
            {
                name:"Locrian bb6",
                set: [0,1,3,5,6,7,10]
            }
        ]
    },
        {
        name: 'Locrian nat7 (7-29)',
        scales: [
            {
                name:"Locrian nat7",
                set: [0,1,3,5,6,8,11]
            },
            {
                name:"Ionian #6",
                set: [0,2,4,5,7,10,11]
            },
            {
                name:"Dorian #5",
                set: [0,2,3,5,8,9,10]
            },
            {
                name:"Phrygian #4",
                set: [0,1,3,6,7,8,10]
            },
            {
                name:"Lydian #3",
                set: [0,2,5,6,7,9,11]
            },
            {
                name:"Mixolydian #2",
                set: [0,3,4,5,7,9,10]
            },
            {
                name:"Locrian bb3 b4 bb6 bb7",
                set: [0,1,2,4,6,7,9]
            }
        ]
    },
        {
        name: 'Locrian nat2 b4 bb7 (7-28M)',
        scales: [
            {
                name:"Locrian nat2 b4 bb7",
                set: [0,2,3,4,6,8,9]
            },
            {
                name:"Locrian bb3 b4 bb6",
                set: [0,1,2,4,6,7,10]
            },
            {
                name:"Locrian nat6 nat7",
                set: [0,1,3,5,6,9,11]
            },
            {
                name:"Ionian #5 #6",
                set: [0,2,4,5,8,10,11]
            },
            {
                name:"Dorian #4 #5",
                set: [0,2,3,6,8,9,10]
            },
            {
                name:"Phrygian nat3 #4",
                set: [0,1,4,6,7,8,10]
            },
            {
                name:"Lydian #2 #3",
                set: [0,3,5,6,7,9,11]
            }
        ]
    },
        {
        name: 'Locrian bb6 bb7 (7-28)',
        scales: [
            {
                name:"Locrian bb6 bb7",
                set: [0,1,3,5,6,7,9]
            },
            {
                name:"Ionian b5 b6",
                set: [0,2,4,5,6,8,11]
            },
            {
                name:"Dorian b4 b5",
                set: [0,2,3,4,6,9,10]
            },
            {
                name:"Phrygian bb3 b4",
                set: [0,1,2,4,7,8,10]
            },
            {
                name:"Lydian b2 b3",
                set: [0,1,3,6,7,9,11]
            },
            {
                name:"Lydian #3 #5 #6",
                set: [0,2,5,6,8,10,11]
            },
            {
                name:"Lydian #2 #5 #6",
                set: [0,3,4,6,8,9,10]
            }
        ]
    },
        {
        name: 'Mixolydian b6 bb7 (7-27M)',
        scales: [
            {
                name:"Mixolydian b6 bb7",
                set: [0,2,4,5,7,8,9]
            },
            {
                name:"Locrian nat2 bb6, Aeolian b5 bb6",
                set: [0,2,3,5,6,7,10]
            },
            {
                name:"Locrian b4 bb5",
                set: [0,1,3,4,5,8,10]
            },
            {
                name:"Ionian b3 b4, Melodic Minor b4",
                set: [0,2,3,4,7,9,11]
            },
            {
                name:"Dorian b2 bb3",
                set: [0,1,2,5,7,9,10]
            },
            {
                name:"Lydian b2 #5",
                set: [0,1,4,6,8,9,11]
            },
            {
                name:"Lydian #2 #3 ##4 #5 #6",
                set: [0,3,5,7,8,10,11]
            }
        ]
    },
        {
        name: 'Locrian b4 nat7 (7-27)',
        scales: [
            {
                name:"Locrian b4 nat7",
                set: [0,1,3,4,6,8,11]
            },
            {
                name:"Melodic Minor #6, Dorian #6 nat7, Ionian b3 #6",
                set: [0,2,3,5,7,10,11]
            },
            {
                name:"Dorian b2 #5, Phrygian #5 nat6",
                set: [0,1,3,5,8,9,10]
            },
            {
                name:"Lydian ##4 #5",
                set: [0,2,4,7,8,9,11]
            },
            {
                name:"Lydian #3 b7, Mixolydian #3 #4",
                set: [0,2,5,6,7,9,10]
            },
            {
                name:"Mixolydian #2 b6, Aeolian #2 nat3",
                set: [0,3,4,5,7,8,10]
            },
            {
                name:"Locrian bb3 b4 bb6 bb7",
                set: [0,1,2,4,5,7,9]
            }
        ]
    },
        {
        name: 'Mixolydian b5 b6 bb7 (7-26M)',
        scales: [
            {
                name:"Mixolydian b5 b6 bb7",
                set: [0,2,4,5,6,8,9]
            },
            {
                name:"Locrian b4 bb6",
                set: [0,2,3,4,6,7,10]
            },
            {
                name:"Locrian bb3 b4 bb5",
                set: [0,1,2,4,5,8,10]
            },
            {
                name:"Melodic Minor b2 b4, Ionian b2 b3 b4, Phrygian b4 nat6 nat7, Dorian b2 b4 nat7",
                set: [0,1,3,4,7,9,11]
            },
            {
                name:"Lydian b3 #5 #6",
                set: [0,2,3,6,8,10,11]
            },
            {
                name:"Mixolydian b2 #4 #5, Lydian b2 #5 b7",
                set: [0,1,4,6,8,9,10]
            },
            {
                name:"Lydian #2 #3 ##4 #5",
                set: [0,3,5,7,8,9,11]
            }
        ]
    },
        {
        name: 'Locrian nat2 b4 nat7 (7-26)',
        scales: [
            {
                name:"Locrian nat2 b4 nat7",
                set: [0,2,3,4,6,8,11]
            },
            {
                name:"Locrian bb3 b4 nat6",
                set: [0,1,2,4,6,9,10]
            },
            {
                name:"Melodic Minor b2 #5, Dorian b2 #5 nat7, Phrygian #5 nat6 nat7",
                set: [0,1,3,5,8,9,11]
            },
            {
                name:"Lydian ##4 #5 #6",
                set: [0,2,4,7,8,10,11]
            },
            {
                name:"Mixolydian #3 #4 #5, Lydian #3 #5 b7",
                set: [0,2,5,6,8,9,10]
            },
            {
                name:"Lydian #2 b6 b7, Mixolydian #2 #4 b6, Aeolian #2 #3 #4",
                set: [0,3,4,6,7,8,10]
            },
            {
                name:"Phrygian b4 bb5 bb6 bb7",
                set: [0,1,3,4,5,7,9]
            }
        ]
    },
        {
        name: 'Locrian nat2 b4 nat6 nat 7 (7-25M)',
        scales: [
            {
                name:"Locrian nat2 nat6 nat7",
                set: [0,2,3,4,6,9,11]
            },
            {
                name:"Phrygian bb3 b4 nat6 nat7",
                set: [0,1,2,4,7,9,10]
            },
            {
                name:"Lydian b2 b3 #5",
                set: [0,1,3,6,8,9,11]
            },
            {
                name:"Lydian #3 ##4 #5 #6",
                set: [0,2,5,7,8,10,11]
            },
            {
                name:"Lydian #2 #3 #5 b7",
                set: [0,3,5,6,8,9,10]
            },
            {
                name:"Locrian nat2 bb6 bb7, Aeolian b5 bb6 bb7",
                set: [0,2,3,5,6,7,9]
            },
            {
                name:"Locrian b4 bb5 bb6",
                set: [0,1,3,4,5,7,10]
            }
        ]
    },
        {
        name: 'Locrian b4 nat6 nat7 (7-25)',
        scales: [
            {
                name:"Locrian b4 nat6 nat7",
                set: [0,1,3,4,6,9,11]
            },
            {
                name:"Ionian b3 #5 #6, Melodic Minor #5 #6",
                set: [0,2,3,5,8,10,11]
            },
            {
                name:"Dorian b2 #4 #5, Phrygian #4 #5 nat6",
                set: [0,1,3,6,8,9,10]
            },
            {
                name:"Lydian #3 ##4 #5 #6",
                set: [0,2,5,7,8,9,11]
            },
            {
                name:"Lydian #2 #3 b7, Mixolydian #2 #3 #4",
                set: [0,3,5,6,7,9,10]
            },
            {
                name:"Locrian nat2 b4 bb6 bb7, Aeolian b4 b5 bb6 bb7",
                set: [0,2,3,4,6,7,9]
            },
            {
                name:"Locrian bb3 b4 bb5 bb6",
                set: [0,1,2,4,5,7,10]
            }
        ]
    },
        {
        name: 'Enigmatic (7-24M)',
        scales: [
            {
                name:"Enigmatic, Lydian b6 bb7",
                set: [0,2,4,6,7,8,9]
            },
            {
                name:"Mixolydian b5 bb6 ",
                set: [0,2,4,5,6,7,10]
            },
            {
                name:"Aeolian b4 bb5",
                set: [0,2,3,4,5,8,10]
            },
            {
                name:"Locrian bb3 bb4",
                set: [0,1,2,3,6,8,10]
            },
            {
                name:"Ionian b2 bb3, Melodic Minor b2 bb3",
                set: [0,1,2,5,7,9,11]
            },
            {
                name:"Lydian b2 #5 #6",
                set: [0,1,4,6,8,10,11]
            },
            {
                name:"Lydian #2 #3 ##4 ##5 #6",
                set: [0,3,5,7,9,10,11]
            }
        ]
    },
        {
        name: 'Phrygian #6 nat7 (7-24)',
        scales: [
            {
                name:"Phrygian #6 nat7",
                set: [0,1,3,5,7,10,11]
            },
            {
                name:"Lydian ##5 #6",
                set: [0,2,4,6,9,10,11]
            },
            {
                name:"Lydian ##4 #5 b7",
                set: [0,2,4,7,8,9,10]
            },
            {
                name:"Lydian #3 b6 b7",
                set: [0,2,5,6,7,8,10]
            },
            {
                name:"Mixolydian #2 b5 b6",
                set: [0,3,4,5,6,8,10]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb6 bb7",
                set: [0,1,2,3,5,7,9]
            },
            {
                name:"Locrian bb3 b4 nat 7",
                set: [0,1,2,4,6,8,11]
            }
        ]
    },
        {
        name: 'Ionian b5 bb6 bb7 (7-23M)',
        scales: [
            {
                name:"Ionian b5 bb6 bb7",
                set: [0,2,4,5,6,7,9]
            },
            {
                name:"Aeolian b4 bb5 bb6",
                set: [0,2,3,4,5,7,10]
            },
            {
                name:"Locrian bb3 bb4 bb5",
                set: [0,1,2,3,5,8,10]
            },
            {
                name:"Ionian b2 bb3 b4",
                set: [0,1,2,4,7,9,11]
            },
            {
                name:"Lydian b2 b3 #5 #6",
                set: [0,1,3,6,8,10,11]
            },
            {
                name:"Lydian #3 ##4 ##5 #6",
                set: [0,2,5,7,9,10,11]
            },
            {
                name:"Mixolydian #2 #3 ##4 #5",
                set: [0,3,5,7,8,9,10]
            }
        ]
    },
        {
        name: 'Phrygian #5 #6 nat7 (7-23)',
        scales: [
            {
                name:"Phrygian #5 #6 nat7",
                set: [0,1,3,5,8,10,11]
            },
            {
                name:"Lydian ##4 ##5 #6",
                set: [0,2,4,7,9,10,11]
            },
            {
                name:"Lydian #3 ##4 #5 b7",
                set: [0,2,5,7,8,9,10]
            },
            {
                name:"Lydian #2 #3 b6 b7",
                set: [0,3,5,6,7,8,10]
            },
            {
                name:"Locrian b4 bb5 bb6 bb7",
                set: [0,2,3,4,5,7,9]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb6",
                set: [0,1,2,3,5,7,10]
            },
            {
                name:"Locrian bb3 b4 nat6 nat7",
                set: [0,1,2,4,6,9,11]
            }
        ]
    },
        {
        name: 'Double Harmonic/Hungarian Minor (7-22)',
        scales: [
            {
                name:"Double Harmonic, Phrygian nat3 nat7, Ionian b2 b6",
                set: [0,1,4,5,7,8,11]
            },
            {
                name:"Lydian #2 #6",
                set: [0,3,4,6,7,10,11]
            },
            {
                name:"Phrygian b4 bb7",
                set: [0,1,3,4,7,8,9]
            },
            {
                name:"Hungarian Minor, Aeolian #4 nat7, Lydian b3 b6",
                set: [0,2,3,6,7,8,11]
            },
            {
                name:"Mixolydian b2 b5, Locrian nat3 nat6",
                set: [0,1,4,5,6,9,10]
            },
            {
                name:"Ionian #2 #5",
                set: [0,3,4,5,8,9,11]
            },
            {
                name:"Locrian bb3 bb6",
                set: [0,1,2,5,6,8,9]
            }
        ]
    },
        {
        name: 'Ionian b2 #5 (7-21M)',
        scales: [
            {
                name:"Ionian b2 #5",
                set: [0,1,4,5,8,9,11]
            },
            { 
                name:"Lydian #2 ##4 #5 #6",
                set: [0,3,4,7,8,10,11]
            },
            {
                name:"Phrygian nat3 bb7, Mixolydian b2 b6 bb7",
                set: [0,1,4,5,7,8,9]
            },
            {
                name:"Lydian #2 b6",
                set: [0,3,4,6,7,8,11]
            },
            {
                name:"Locrian b4 bb5 bb7",
                set: [0,1,3,4,5,8,9]
            },
            {
                name:"Aeolian b4 nat7, Harmonic Minor b4",
                set: [0,2,3,4,7,8,11]
            },
            {
                name:"Locrian bb3 nat6",
                set: [0,1,2,5,6,9,10]
            }
        ]
    },
        {
        name: 'Ionian #2 b6 (7-21)',
        scales: [
            {
                name:"Ionian #2 b6",
                set: [0,3,4,5,7,8,11]
            },
            {
                name:"Locrian bb3 b4 bb5 bb7",
                set: [0,1,2,4,5,8,9]
            },
            {
                name:"Phrygian b4 nat7",
                set: [0,1,3,4,7,8,11]
            },
            {
                name:"Lydian b3 #6",
                set: [0,2,3,6,7,10,11]
            },
            {
                name:"Mixolydian b2 #5",
                set: [0,1,4,5,8,9,10]
            },
            {
                name:"Lydian #2 ##4 #5",
                set: [0,3,4,7,8,9,11]
            },
            {
                name:"Locrian nat3 bb7",
                set: [0,1,4,5,6,8,9]
            }
        ]
    },
        {
        name: 'Composite II, Ionian #2 #5 #6 (7-20M)',
        scales: [
            {
                name:"Composite II, Ionian #2 #5 #6",
                set: [0,3,4,5,8,10,11]
            },
            {
                name:"Phrygian bb3 bb7",
                set: [0,1,2,5,7,8,9]
            },
            {
                name:"Lydian b2 b6",
                set: [0,1,4,6,7,8,11]
            },
            {
                name:"Lydian #2 #3 #6",
                set: [0,3,5,6,7,10,11]
            },
            {
                name:"Aeolian b4 bb7",
                set: [0,2,3,4,7,8,9]
            },
            {
                name:"Locrian bb3 bb6",
                set: [0,1,2,5,6,7,10]
            },
            {
                name:"Locrian nat3 nat6 nat7, Ionian b2 b5",
                set: [0,1,4,5,6,9,11]
            }
        ]
    },
        {
        name: 'Persian, Ionian #2 #6 (7-20)',
        scales: [
            {
                name:"Persian, Ionian #2 #6",
                set: [0,3,4,5,7,10,11]
            },
            {
                name:"Phrygian bb2 b4 bb7",
                set: [0,1,2,4,7,8,9]
            },
            {
                name:"Phrygian #4 nat7, Lydian b2 b3 b6",
                set: [0,1,3,6,7,8,11]
            },
            {
                name:"Lydian #3 #6",
                set: [0,2,5,6,7,10,11]
            },
            {
                name:"Mixolydian #2 #5",
                set: [0,3,4,5,8,9,10]
            },
            {
                name:"Locrian bb3 bb6 bb7",
                set: [0,1,2,5,6,7,9]
            },
            {
                name:"Locrian nat 3 nat7, Ionian b2 b5 b6",
                set: [0,1,4,5,6,8,11]
            }
        ]
    },
        {
        name: 'Ionian #2 b5 (7-19M)',
        scales: [
            {
                name:"Ionian #2 b5",
                set: [0,3,4,5,6,9,11]
            },
            {
                name:"Locrian bb3 bb4 bb7",
                set: [0,1,2,3,6,8,9]
            },
            {
                name:"Phrygian bb3 nat7, Ionian b2 bb3 b6",
                set: [0,1,2,5,7,8,11]
            },
            {
                name:"Lydian b2 #6",
                set: [0,1,4,6,7,10,11]
            },
            {
                name:"Lydian #2 #3 #5 #6",
                set: [0,3,5,6,9,10,11]
            },
            {
                name:"Aeolian #4 bb7, Lydian b3 b6 bb7",
                set: [0,2,3,6,7,8,9]
            },
            {
                name:"Locrian nat3 bb6",
                set: [0,1,4,5,6,7,10]
            }
        ]
    },
        {
        name: 'Enigmatic Minor, Ionian #2 b5 b6 (7-19)',
        scales: [
            {
                name:"Ionian #2 b5 b6",
                set: [0,3,4,5,6,8,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb7",
                set: [0,1,2,3,5,8,9]
            },
            {
                name:"Phrygian bb3 b4 nat7",
                set: [0,1,2,4,7,8,11]
            },
            {
                name:"Phrygian #4 #6 nat7",
                set: [0,1,3,6,7,10,11]
            },
            {
                name:"Lydian #3 ##5 #6",
                set: [0,2,5,6,9,10,11]
            },
            {
                name:"Mixolydian #2 ##4 #5",
                set: [0,3,4,7,8,9,10]
            },
            {
                name:"Locrian nat3 bb6 bb7",
                set: [0,1,4,5,6,7,9]
            }
        ]
    },
        {
        name: 'Locrian b4 bb6 bbb7 (7-Y18M)',
        scales: [
            {
                name:"Locrian b4 bb6 bbb7",
                set: [0,1,3,4,6,7,8]
            },
            {
                name:"Locrian nat2 bb6 nat7",
                set: [0,2,3,5,6,7,11]
            },
            {
                name:"Locrian b4 bb5 nat6",
                set: [0,1,3,4,5,9,10]
            },
            {
                name:"Dorian b4 #5 nat7",
                set: [0,2,3,4,8,9,11]
            },
            {
                name:"Dorian b2 bb3 #4, Phrygian bb3 #4 nat6",
                set: [0,1,2,6,7,9,10]
            },
            {
                name:"Lydian b2 #5",
                set: [0,1,5,6,8,9,11]
            },
            {
                name:"Lydian ##2 #3 ##4 #5 #6",
                set: [0,4,5,7,8,10,11]
            }
        ]
    },
        {
        name: 'Locrian b4 bb6 nat7 (7-Y18)',
        scales: [
            {
                name:"Locrian b4 bb6 nat7",
                set: [0,1,3,4,6,7,11]
            },
            {
                name:"Locrian nat2 #6 nat7",
                set: [0,2,3,5,6,10,11]
            },
            {
                name:"Phrygian b4 #5 nat6, Dorian b2 b4 #5",
                set: [0,1,3,4,8,9,10]
            },
            {
                name:"Dorian ##4 #5 nat7",
                set: [0,2,3,7,8,9,11]
            },
            {
                name:"Lydian b2 #3 b7, Mixolydian b2 #3 #4",
                set: [0,1,5,6,7,9,10]
            },
            {
                name:"Lydian ##2 #3 #5",
                set: [0,4,5,6,8,9,11]
            },
            {
                name:"Locrian bb3 b4 bb6 bbb7",
                set: [0,1,2,4,5,7,8]
            }
        ]
    },
        {
        name: 'Lydian b2 b6 bb7 (7-X18M)',
        scales: [
            {
                name:"Lydian b2 b6 bb7",
                set: [0,1,4,6,7,8,9]
            },
            {
                name:"Lydian #2 #3 b6",
                set: [0,3,5,6,7,8,11]
            },
            {
                name:"Locrian nat2 b4 bb5 bb7",
                set: [0,2,3,4,5,8,9]
            },
            {
                name:"Locrian bb3 bb4 b5 bb6",
                set: [0,1,2,3,6,7,10]
            },
            {
                name:"Locrian bb3 nat6 nat7",
                set: [0,1,2,5,6,9,11]
            },
            {
                name:"Ionian b2 #5 #6",
                set: [0,1,4,5,8,10,11]
            },
            {
                name:"Lydian #2 #3 ##4 ##5 #6",
                set: [0,3,4,7,9,10,11]
            }
        ]
    },
        {
        name: 'Phrygian #4 #6 nat7 (7-X18)',
        scales: [
            {
                name:"Phrygian #4 #6 nat7",
                set: [0,1,3,6,7,10,11]
            },
            {
                name:"Lydian #3 ##5 #6",
                set: [0,2,5,6,9,10,11]
            },
            {
                name:"Mixolydian #2 ##4 #5, Lydian #2 ##4 #5 b7",
                set: [0,3,4,7,8,9,10]
            },
            {
                name:"Locrian nat3 bb6 bb7",
                set: [0,1,4,5,6,7,9]
            },
            {
                name:"Ionian #2 b5 b6",
                set: [0,3,4,5,6,8,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb7",
                set: [0,1,2,3,5,8,9]
            },
            {
                name:"Phrygian bb3 b4 nat7",
                set: [0,1,2,4,7,8,11]
            }
        ]
    },
        {
        name: 'Dorian b4 #6 nat7 (7-Z17)',
        scales: [
            {
                name:"Dorian b4 #6 nat7, Melodic b4 #6",
                set: [0,2,3,4,7,10,11]
            },
            {
                name:"Phrygian bb3 #5 nat6, Dorian b2 bb3 #5",
                set: [0,1,2,5,8,9,10]
            },
            {
                name:"Lydian b2 ##4 #5",
                set: [0,1,4,7,8,9,11]
            },
            {
                name:"Lydian #2 #3 ##4 #5 #6",
                set: [0,3,6,7,8,10,11]
            },
            {
                name:"Mixolydian #2 b6 bb7",
                set: [0,3,4,5,7,8,9]
            },
            {
                name:"Locrian bb3 b4 bb5 bb6 bb7",
                set: [0,1,2,4,5,6,9]
            },
            {
                name:"Locrian b4 bb5 nat7",
                set: [0,1,3,4,5,8,11]
            }
        ]
    },
        {
        name: 'Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6 (7-17)',
        scales: [
            {
                name:"Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6",
                set: [0,2,3,4,6,7,11]
            },
            {
                name:"Locrian bb3 b4 bb5 nat6",
                set: [0,1,2,4,5,9,10]
            },
            {
                name:"Dorian b2 b4 #5 nat7",
                set: [0,1,3,4,8,9,11]
            },
            {
                name:"Dorian ##4 #5 #6 nat7",
                set: [0,2,3,7,8,10,11]
            },
            {
                name:"Mixolydian b2 #3 #4 #5",
                set: [0,1,5,6,8,9,10]
            },
            {
                name:"Lydian ##2 #3 ##4 #5",
                set: [0,4,5,7,8,9,11]
            },
            {
                name:"Locrian b4 bb5 bb6 bbb7",
                set: [0,1,3,4,5,7,8]
            }
        ]
    },
        {
        name: 'Lydian #2 b6 bb7 (7-16M)',
        scales: [
            {
                name:"Lydian #2 b6 bb7",
                set: [0,3,4,6,7,8,9]
            },
            {
                name:"Locrian b4 bb5 bbb6 bbb7",
                set: [0,1,3,4,5,6,9]
            },
            {
                name:"Locrian nat2 b4 bb5 nat7",
                set: [0,2,3,4,5,8,11]
            },
            {
                name:"Locrian bb3 bb4 nat6",
                set: [0,1,2,3,6,9,10]
            },
            {
                name:"Phrygian bb3 #5 nat6, Dorian b2 bb3 #5",
                set: [0,1,2,5,8,9,11]
            },
            {
                name:"Lydian b2 ##4 #5 #6",
                set: [0,1,4,7,8,10,11]
            },
            {
                name:"Lydian #2 ##3 ##4 ##5 #6",
                set: [0,3,6,7,9,10,11]
            }
        ]
    },
        {
        name: 'Phrygian b4 #6 nat7 (7-16)',
        scales: [
            {
                name:"Phrygian b4 #6 nat7",
                set: [0,1,3,4,7,10,11]
            },
            {
                name:"Lydian b3 ##5 #6, Dorian #4 ##5 #6 nat7",
                set: [0,2,3,6,9,10,11]
            },
            {
                name:"Mixolydian b2 ##4 #5",
                set: [0,1,4,7,8,9,10]
            },
            {
                name:"Lydian #2 ##3 ##4 #5",
                set: [0,3,6,7,8,9,11]
            },
            {
                name:"Mixolydian #2 b5 b6 bb7, Locrian #2 nat3 bb7",
                set: [0,3,4,5,6,8,9]
            },
            {
                name:"Locrian bb3 bb4 bb5 bbb6 bb7",
                set: [0,1,2,3,5,6,9]
            },
            {
                name:"Locrian bb3 bb4 bb5 nat7",
                set: [0,1,2,4,5,8,11]
            }
        ]
    },
        {
        name: 'Ionian b5 #6 (7-15)',
        scales: [
            {
                name:"Ionian b5 #6",
                set: [0,2,4,5,6,10,11]
            },
            {
                name:"Dorian b4 #5",
                set: [0,2,3,4,8,9,10]
            },
            {
                name:"Phrygian bb3 #4",
                set: [0,1,2,6,7,8,10]
            },
            {
                name:"Lydian b2 #3",
                set: [0,1,5,6,7,9,11]
            },
            {
                name:"Lydian ##2 #3 #5 #6",
                set: [0,4,5,6,8,10,11]
            },
            {
                name:"Locrian bb3 b4 bb6 bbb7",
                set: [0,1,2,4,6,7,8]
            },
            {
                name:"Locrian bb3 bb6 nat7",
                set: [0,1,3,5,6,7,11]
            }
        ]
    },
        {
        name: 'Locrian bb6 bbb7 (7-14M)',
        scales: [
            {
                name:"Locrian bb6 bbb7",
                set: [0,1,3,5,6,7,8]
            },
            {
                name:"Ionian b5 bb6",
                set: [0,2,4,5,6,7,11]
            },
            {
                name:"Dorian b4 bb5",
                set: [0,2,3,4,5,9,10]
            },
            {
                name:"Phrygian bb3 bb4",
                set: [0,1,2,3,7,8,10]
            },
            {
                name:"Lydian b2 bb3",
                set: [0,1,2,6,7,9,11]
            },
            {
                name:"Lydian b2 #3 #5 #6",
                set: [0,1,5,6,8,10,11]
            },
            {
                name:"Lydian ##2 #3 ##4 ##5 #6",
                set: [0,4,5,7,9,10,11]
            }
        ]
    },
        {
        name: 'Locrian bb3 b4 bb6 nat7 (7-14)',
        scales: [
            {
                name:"Locrian bb3 b4 bb6 nat7",
                set: [0,1,2,4,6,7,11]
            },
            {
                name:"Locrian #6 nat7",
                set: [0,1,3,5,6,10,11]
            },
            {
                name:"Ionian ##5 #6",
                set: [0,2,4,5,9,10,11]
            },
            {
                name:"Dorian ##4 #5",
                set: [0,2,3,7,8,9,10]
            },
            {
                name:"Phrygian #3 #4",
                set: [0,1,5,6,7,8,10]
            },
            {
                name:"Lydian ##2 #3",
                set: [0,4,5,6,7,9,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb6 bbb7",
                set: [0,1,2,3,5,7,8]
            }
        ]
    },
        {
        name: 'Dorian b4 #5 #6 nat7 (7-13M)',
        scales: [
            {
                name:"Dorian b4 #5 #6 nat7",
                set: [0,2,3,4,8,10,11]
            },
            {
                name:"Phrygian bb3 #4 #5 nat6",
                set: [0,1,2,6,8,9,10]
            },
            {
                name:"Lydian b2 #3 ##4 #5",
                set: [0,1,5,7,8,9,11]
            },
            {
                name:"Lydian ##2 ##3 ##4 #5 #6",
                set: [0,4,6,7,8,10,11]
            },
            {
                name:"Locrian nat2 b4 bb5 bb6 bbb7",
                set: [0,2,3,4,6,7,8]
            },
            {
                name:"Locrian bb3 b4 bb5 bbb6",
                set: [0,1,2,4,5,6,10]
            },
            {
                name:"Locrian b4 bb5 nat6 nat7",
                set: [0,1,3,4,5,9,11]
            }
        ]
    },
        {
        name: 'Locrian b4 bb5 bb6 nat7 (7-13)',
        scales: [
            {
                name:"Locrian b4 bb5 bb6 nat7",
                set: [0,1,3,4,5,7,11]
            },
            {
                name:"Locrian nat2 b4 #6 nat7",
                set: [0,2,3,4,6,10,11]
            },
            {
                name:"Dorian b2 bb3 #5, Phrygian bb3 #5 nat6",
                set: [0,1,2,4,8,9,10]
            },
            {
                name:"Dorian b2 ##4 #5 nat7, Phrygian ##4 #5 nat6 nat7",
                set: [0,1,3,7,8,9,11]
            },
            {
                name:"Lydian ##3 ##4 #5 #6",
                set: [0,2,6,7,8,10,11]
            },
            {
                name:"Mixolydian ##2 #3 #4 #5, Lydian ##2 #3 #5 b7",
                set: [0,4,5,6,8,9,10]
            },
            {
                name:"Locrian bb3 b4 bb5 bbb6 bbb7",
                set: [0,1,2,4,5,6,8]
            }
        ]
    },
        {
        name: 'Mixolydian #2 b5 bb6 (7-Z12)',
        scales: [
            {
                name:"Mixolydian #2 b5 bb6",
                set: [0,3,4,5,6,7,10]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6 bb7",
                set: [0,1,2,3,4,7,9]
            },
            {
                name:"Locrian bb3 bb4 nat7",
                set: [0,1,2,3,6,8,11]
            },
            {
                name:"Phrygian bb3 #6 nat7",
                set: [0,1,2,5,7,10,11]
            },
            {
                name:"Lydian b2 ##5 #6",
                set: [0,1,4,6,9,10,11]
            },
            {
                name:"Lydian #2 #3 ###4 ##5 #6",
                set: [0,3,5,8,9,10,11]
            },
            {
                name:"Aeolian #3 #4 bb7",
                set: [0,2,5,6,7,8,9]
            }
        ]
    },
        {
        name: 'Locrian nat2 bb6 bbb7 (7-12M)',
        scales: [
            {
                name:"Locrian nat2 bb6 bbb7",
                set: [0,2,3,5,6,7,8]
            },
            {
                name:"Locrian b4 bb5 bbb6",
                set: [0,1,3,4,5,6,10]
            },
            {
                name:"Dorian b4 bb5 nat7",
                set: [0,2,3,4,5,9,11]
            },
            {
                name:"Dorian b2 bb3 bb4, Phrygian bb3 bb4 nat6",
                set: [0,1,2,3,7,9,10]
            },
            {
                name:"Lydian b2 bb3 #5",
                set: [0,1,2,6,8,9,11]
            },
            {
                name:"Lydian b2 #3 ##4 #5 #6",
                set: [0,1,5,7,8,10,11]
            },
            {
                name:"Lydian ##2 ##3 ##4 ##5 #6",
                set: [0,4,6,7,9,10,11]
            }
        ]
    },
        {
        name: 'Dorian b2 ##4 #5 (7-12)',
        scales: [
            {
                name:"Dorian b2 ##4 #5",
                set: [0,1,3,7,8,9,10]
            },
            {
                name:"Lydian ##3 ##4 #5",
                set: [0,2,6,7,8,9,11]
            },
            {
                name:"Lydian ##2 #3 b7, Mixolydian ##2 #3 #4",
                set: [0,4,5,6,7,9,10]
            },
            {
                name:"Locrian bb3 bb4 bb5 bbb6 bbb7",
                set: [0,1,2,3,5,6,8]
            },
            {
                name:"Locrian bb3 b4 bb5 bb6 nat7",
                set: [0,1,2,4,5,7,11]
            },
            {
                name:"Locrian b4 #6 nat7",
                set: [0,1,3,4,6,10,11]
            },
            {
                name:"Dorian ##5 #6 nat7",
                set: [0,2,3,5,9,10,11]
            }
        ]
    },
        {
        name: 'Phrygian b4 #5 #6 nat7 (7-11M)',
        scales: [
            {
                name:"Phrygian b4 #5 #6 nat7",
                set: [0,1,3,4,8,10,11]
            },
            {
                name:"Dorian ##4 ##5 #6 nat7",
                set: [0,2,3,7,9,10,11]
            },
            {
                name:"Lydian b2 ##3 ###4 ##5 #6",
                set: [0,1,6,8,9,10,11]
            },
            {
                name:"Lydian ###2 ###3 ###4 ##5 #6",
                set: [0,5,7,8,9,10,11]
            },
            {
                name:"Aeolian b4 bb5 bbb6 bbbb7",
                set: [0,2,3,4,5,6,7]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbbb6",
                set: [0,1,2,3,4,5,10]
            },
            {
                name:"Locrian bb3 bb4 bbb5 #6 nat7",
                set: [0,1,2,3,4,9,11]
            }
        ]
    },
        {
        name: 'Aeolian b4 bb5 bb6 nat7 (7-11)',
        scales: [
            {
                name:"Aeolian b4 bb5 bb6 nat7",
                set: [0,2,3,4,5,7,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 nat6",
                set: [0,1,2,3,5,9,10]
            },
            {
                name:"Ionian b2 bb3 #5",
                set: [0,1,2,4,8,9,11]
            },
            {
                name:"Phrygian ##4 #5 #6 nat7",
                set: [0,1,3,7,8,10,11]
            },
            {
                name:"Lydian ##3 ##4 ##5 #6",
                set: [0,2,6,7,9,10,11]
            },
            {
                name:"Mixolydian ##2 #3 ##4 #5",
                set: [0,4,5,7,8,9,10]
            },
            {
                name:"Locrian b4 bb5 bbb6 bbb7",
                set: [0,1,3,4,5,6,8]
            }
        ]
    },
        {
        name: 'Aeolian b4 bb5 bbb6 bb7 (7-10M)',
        scales: [
            {
                name:"Aeolian b4 bb5 bbb6 bb7",
                set: [0,2,3,4,5,6,9]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6",
                set: [0,1,2,3,4,7,10]
            },
            {
                name:"Locrian bb3 bb4 nat6 nat7",
                set: [0,1,2,3,6,9,11]
            },
            {
                name:"Ionian b2 bb3 #5 #6",
                set: [0,1,2,5,8,10,11]
            },
            {
                name:"Lydian b2 ##4 ##5 #6",
                set: [0,1,4,7,9,10,11]
            },
            {
                name:"Lydian #2 ##3 ###4 ##5 #6",
                set: [0,3,6,8,9,10,11]
            },
            {
                name:"Lydian #2 #3 b6 bb7",
                set: [0,3,5,6,7,8,9]
            }
        ]
    },
        {
        name: 'Mixolydian #2 b5 bb6 bb7 (7-10)',
        scales: [
            {
                name:"Mixolydian #2 b5 bb6 bb7",
                set: [0,3,4,5,6,7,9]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbb6 bb7",
                set: [0,1,2,3,4,6,9]
            },
            {
                name:"Locrian bb3 bb4 bb5 nat7",
                set: [0,1,2,3,5,8,11]
            },
            {
                name:"Ionian b2 bb3 b4 #6",
                set: [0,1,2,4,7,10,11]
            },
            {
                name:"Lydian b2 b3 ##5 #6",
                set: [0,1,3,6,9,10,11]
            },
            {
                name:"Lydian #3 ###4 ##5 #6",
                set: [0,2,5,8,9,10,11]
            },
            {
                name:"Mixolydian #2 ##3 ##4 #5",
                set: [0,3,6,7,8,9,10]
            }
        ]
    },
        {
        name: 'Mixolydian b5 bb6 bbb7 (7-9M)',
        scales: [
            {
                name:"Mixolydian b5 bb6 bbb7",
                set: [0,2,4,5,6,7,8]
            },
            {
                name:"Locrian b4 bb5 bbb6",
                set: [0,2,3,4,5,6,10]
            },
            {
                name:"Locrian bb3 bb4 bbb5",
                set: [0,1,2,3,4,8,10]
            },
            {
                name:"Dorian b2 bb3 bb4 nat7",
                set: [0,1,2,3,7,9,11]
            },
            {
                name:"Lydian b2 bb3 #5 #6",
                set: [0,1,2,6,8,10,11]
            },
            {
                name:"Lydian b2 #3 ##4 ##5 #6",
                set: [0,1,5,7,9,10,11]
            },
            {
                name:"Lydian ##2 ##3 ###4 ##5 #6",
                set: [0,4,6,8,9,10,11]
            }
        ]
    },
        {
        name: 'Phrygian ##5 #6 nat7 (7-9)',
        scales: [
            {
                name:"Phrygian ##5 #6 nat7",
                set: [0,1,3,5,9,10,11]
            },
            {
                name:"Lydian ###4 ##5 #6",
                set: [0,2,4,8,9,10,11]
            },
            {
                name:"Mixolydian ##3 ##4 #5",
                set: [0,2,6,7,8,9,10]
            },
            {
                name:"Mixolydian ##2 #3 #4 b6",
                set: [0,4,5,6,7,8,10]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6 bbb7",
                set: [0,1,2,3,4,6,8]
            },
            {
                name:"Locrian bb3 bb4 bb5 bb6 nat7",
                set: [0,1,2,3,5,7,11]
            },
            {
                name:"Locrian bb3 #6 nat7",
                set: [0,1,2,4,6,10,11]
            }
        ]
    },
        {
        name: 'Phrygian ##4 ##5 #6 nat7 (7-8)',
        scales: [
            {
                name:"Phrygian ##4 ##5 #6 nat7",
                set: [0,1,3,7,9,10,11]
            },
            {
                name:"Lydian ##3 ###4 ##5 #6",
                set: [0,2,6,8,9,10,11]
            },
            {
                name:"Mixolydian ##2 ##3 ##4 #5",
                set: [0,4,6,7,8,9,10]
            },
            {
                name:"Aeolian b3 bb5 bbb6 bbb7",
                set: [0,2,3,4,5,6,8]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbb6",
                set: [0,1,2,3,4,6,10]
            },
            {
                name:"Locrian bb3 bb4 bb5 nat6 nat7",
                set: [0,1,2,3,5,9,11]
            },
            {
                name:"Dorian b2 bb3 #5 #6 nat7",
                set: [0,1,2,4,8,10,11]
            }
        ]
    },
        {
        name: 'Ionian b2 b5 bb6 (7-7M)',
        scales: [
            {
                name:"Ionian b2 b5 bb6",
                set: [0,1,4,5,6,7,11]
            },
            {
                name:"Ionian #2 b5 #6",
                set: [0,3,4,5,6,10,11]
            },
            {
                name:"Phrygian bb3 bb4 bb7",
                set: [0,1,2,3,7,8,9]
            },
            {
                name:"Lydian b2 bb3 b6",
                set: [0,1,2,6,7,8,11]
            },
            {
                name:"Lydian b2 #3 #6",
                set: [0,1,5,6,7,10,11]
            },
            {
                name:"Lydian ##2 #3 ##5 #6",
                set: [0,4,5,6,9,10,11]
            },
            {
                name:"Locrian bb3 bb6 bbb7",
                set: [0,1,2,5,6,7,8]
            }
        ]
    },
        {
        name: 'Ionian #2 ##5 #6 (7-7)',
        scales: [
            {
                name:"Ionian #2 ##5 #6",
                set: [0,3,4,5,9,10,11]
            },
            {
                name:"Phrygian bb3 #4 bb7",
                set: [0,1,2,6,7,8,9]
            },
            {
                name:"Lydian b2 #3 b6",
                set: [0,1,5,6,7,8,11]
            },
            {
                name:"Lydian ##2 #3 #6",
                set: [0,4,5,6,7,10,11]
            },
            {
                name:"Locrian bb3 bb4 bb6 bbb7",
                set: [0,1,2,3,6,7,8]
            },
            {
                name:"Locrian bb3 bb6 nat7",
                set: [0,1,2,5,6,7,11]
            },
            {
                name:"Locrian nat3 #6",
                set: [0,1,4,5,6,10,11]
            }
        ]
    },
        {
        name: 'Ionian #2 b5 bb6 (7-6M)',
        scales: [
            {
                name:"Ionian #2 b5 bb6",
                set: [0,3,4,5,6,7,11]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb7",
                set: [0,1,2,3,4,8,9]
            },
            {
                name:"Phrygian bb3 bb4 nat7",
                set: [0,1,2,3,7,8,11]
            },
            {
                name:"Lydian b2 bb3 #6",
                set: [0,1,2,6,7,10,11]
            },
            {
                name:"Lydian b2 #3 ##5 #6",
                set: [0,1,5,6,9,10,11]
            },
            {
                name:"Lydian ##2 #3 ###4 ##5 #6",
                set: [0,4,5,8,9,10,11]
            },
            {
                name:"Locrian nat3 bb6 bbb7",
                set: [0,1,4,5,6,7,8]
            }
        ]
    },
        {
        name: 'Ionian b2 ##5 #6 (7-6)',
        scales: [
            {
                name:"Ionian b2 ##5 #6",
                set: [0,1,4,5,9,10,11]
            },
            {
                name:"Lydian #2 ###4 ##5 #6",
                set: [0,3,4,8,9,10,11]
            },
            {
                name:"Lydian b2 #3 b6 bb7",
                set: [0,1,5,6,7,8,9]
            },
            {
                name:"Lydian ##2 #3 b6",
                set: [0,4,5,6,7,8,11]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6 bbb7",
                set: [0,1,2,3,4,7,8]
            },
            {
                name:"Locrian bb3 bb4 bb6 nat7",
                set: [0,1,2,3,6,7,11]
            },
            {
                name:"Locrian bb3 #6 nat7",
                set: [0,1,2,5,6,10,11]
            }
        ]
    },
        {
        name: 'Locrian b4 bb5 bbb6 nat7 (7-5M)',
        scales: [
            {
                name:"Locrian b4 bb5 bbb6 nat7",
                set: [0,1,3,4,5,6,11]
            },
            {
                name:"Dorian b4 bb5 #6 nat7",
                set: [0,2,3,4,5,10,11]
            },
            {
                name:"Dorian b2 bb3 bb4 #5",
                set: [0,1,2,3,8,9,10]
            },
            {
                name:"Lydian b2 bb3 ##4 #5",
                set: [0,1,2,7,8,9,11]
            },
            {
                name:"Lydian b2 ##3 ##4 #5 #6",
                set: [0,1,6,7,8,10,11]
            },
            {
                name:"Lydian ###2 ##3 ##4 ##5 #6",
                set: [0,5,6,7,9,10,11]
            },
            {
                name:"Locrian bb3 b4 bb5 bbb6 bbbb7",
                set: [0,1,2,4,5,6,7]
            }
        ]
    },
        {
        name: 'Locrian b4 bb5 #6 nat7 (7-5)',
        scales: [
            {
                name:"Locrian b4 bb5 #6 nat7",
                set: [0,1,3,4,5,10,11]
            },
            {
                name:"Dorian b4 ##5 #6",
                set: [0,2,3,4,9,10,11]
            },
            {
                name:"Dorian b2 bb3 ##4 #5",
                set: [0,1,2,7,8,9,10]
            },
            {
                name:"Lydian b2 ##4 #5",
                set: [0,1,6,7,8,9,11]
            },
            {
                name:"Lydian ###2 ##3 ##4 #5 #6",
                set: [0,5,6,7,8,10,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 bbb6 bbbb7",
                set: [0,1,2,3,5,6,7]
            },
            {
                name:"Locrian bb3 bb4 bb5 bbb6 nat7",
                set: [0,1,2,4,5,6,11]
            }
        ]
    },
        {
        name: 'Locrian b4 bb5 bbb6 bbbb7 (7-4M)',
        scales: [
            {
                name:"Locrian b4 bb5 bbb6 bbbb7",
                set: [0,1,3,4,5,6,7]
            },
            {
                name:"Aeolian b4 bb5 bbb6 nat7",
                set: [0,2,3,4,5,6,11]
            },
            {
                name:"Dorian b2 bb3 bb4 bbb5",
                set: [0,1,2,3,4,9,10]
            },
            {
                name:"Dorian b2 bb3 bb4 #5 nat7",
                set: [0,1,2,3,8,9,11]
            },
            {
                name:"Lydian b2 bb3 ##4 #5 #6",
                set: [0,1,2,7,8,10,11]
            },
            {
                name:"Lydian b2 ##3 ##4 ##5 #6",
                set: [0,1,6,7,9,10,11]
            },
            {
                name:"Lydian ###2 ##3 ###4 ##5 #6",
                set: [0,5,6,8,9,10,11]
            }
        ]
    },
        {
        name: 'Lydian ###2 ##3 ##4 #5 (7-4)',
        scales: [
            {
                name:"Lydian ###2 ##3 ##4 #5",
                set: [0,5,6,7,8,9,11]
            },
            {
                name:"Locrian b2 bb3 bb4 bbb5 bbb6 bbbb7",
                set: [0,1,2,3,4,6,7]
            },
            {
                name:"Locrian b2 bb3 bb4 bb5 bbb6 nat7",
                set: [0,1,2,3,5,6,11]
            },
            {
                name:"Locrian b2 bb3 b4 bb5 #6 nat7",
                set: [0,1,2,4,5,10,11]
            },
            {
                name:"Dorian b2 b4 ##5 #6 nat7",
                set: [0,1,3,4,9,10,11]
            },
            {
                name:"Dorian ###4 ##5 #6 7",
                set: [0,2,3,8,9,10,11]
            },
            {
                name:"Mixolydian b2 ##3 ##4 #5",
                set: [0,1,6,7,8,9,10]
            }
        ]
    },
        {
        name: 'Mixolydian #2 b5 bb6 bbb7 (7-3M)',
        scales: [
            {
                name:"Mixolydian #2 b5 bb6 bbb7",
                set: [0,3,4,5,6,7,8]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbbb6 bbb7",
                set: [0,1,2,3,4,5,8]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6 nat7",
                set: [0,1,2,3,4,7,11]
            },
            {
                name:"Locrian bb3 bb4 #6 nat7",
                set: [0,1,2,3,6,10,11]
            },
            {
                name:"Ionian b2 bb3 ##5 #6 nat7",
                set: [0,1,2,5,9,10,11]
            },
            {
                name:"Lydian b2 ###4 ##5 #6",
                set: [0,1,4,8,9,10,11]
            },
            {
                name:"Lydian #2 ###3 ###4 ##5 #6",
                set: [0,3,7,8,9,10,11]
            }
        ]
    },
        {
        name: 'Locrian bb3 bb4 bbb5 bbbb6 bbb7 (7-3)',
        scales: [
            {
                name:"Lydian",
                set: [0,1,2,3,4,5,8]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bb6 nat7",
                set: [0,1,2,3,4,7,11]
            },
            {
                name:"Locrian bb3 bb4 #6 nat7",
                set: [0,1,2,3,6,10,11]
            },
            {
                name:"Dorian b2 bb3 ##5 #6 nat7",
                set: [0,1,2,5,9,10,11]
            },
            {
                name:"Lydian b2 ###4 ##5 #6",
                set: [0,1,4,8,9,10,11]
            },
            {
                name:"Lydian #2 ###3 ###4 ##5 #6",
                set: [0,3,7,8,9,10,11]
            },
            {
                name:"Lydian ##2 #3 b6 bb7",
                set: [0,4,5,6,7,8,9]
            }
        ]
    },
        {
        name: 'Aeolian b4 bb5 bbb6 bbbb7 (7-2M)',
        scales: [
            {
                name:"Aeolian b4 bb5 bbb6 bbbb7",
                set: [0,2,3,4,5,6,7]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbbb6",
                set: [0,1,2,3,4,5,10]
            },
            {
                name:"Locrian bb3 bb4 bbb5 nat6 nat7",
                set: [0,1,2,3,4,9,11]
            },
            {
                name:"Dorian b2 bb3 bb4 #5 #6 nat7",
                set: [0,1,2,3,8,10,11]
            },
            {
                name:"Lydian b2 bb3 ##4 ##5 #6",
                set: [0,1,2,7,9,10,11]
            },
            {
                name:"Lydian b2 ##3 ###4 ##5 #6",
                set: [0,1,6,8,9,10,11]
            },
            {
                name:"Lydian ###2 ###3 ###4 ##5 #6",
                set: [0,5,7,8,9,10,11]
            }
        ]
    },
        {
        name: 'Locrian bb3 bb4 bbb5 bbbb6 bbbb7 (7-2)',
        scales: [
            {
                name:"Locrian bb3 bb4 bbb5 bbbb6 bbbb7",
                set: [0,1,2,3,4,5,7]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbb6 nat7",
                set: [0,1,2,3,4,6,11]
            },
            {
                name:"Locrian bb3 bb4 bb5 #6 nat7",
                set: [0,1,2,3,5,10,11]
            },
            {
                name:"Dorian b2 bb3 b4 ##5 #6 nat7",
                set: [0,1,2,4,9,10,11]
            },
            {
                name:"Phrygian ###4 ##5 #6 nat7",
                set: [0,1,3,8,9,10,11]
            },
            {
                name:"Lydian ###3 ###4 ##5 #6",
                set: [0,2,7,8,9,10,11]
            },
            {
                name:"Mixolydian ###2 ##3 ##4 #5",
                set: [0,5,6,7,8,9,10]
            }
        ]
    },
        {
        name: 'Chromatic Septachord (7-1)',
        scales: [
            {
                name:"Chromatic Septachord, Locrian bb3 bb4 bbb5 bbbb6 bbbbb7",
                set: [0,1,2,3,4,5,6]
            },
            {
                name:"Locrian bb3 bb4 bbb5 bbbb6 nat7",
                set: [0,1,2,3,4,5,11]
            },
            {
                name:"Locrian bb3 bb4 bbb5 #6 nat7 ",
                set: [0,1,2,3,4,10,11]
            },
            {
                name:"Dorian b2 bb3 bb4 ##5 #6 nat7",
                set: [0,1,2,3,9,10,11]
            },
            {
                name:"Lydian b2 bb3 ###4 ##5 #6",
                set: [0,1,2,8,9,10,11]
            },
            {
                name:"Lydian b2 ###3 ###4 ##5 #6",
                set: [0,1,7,8,9,10,11]
            },
            {
                name:"Lydian  ####2 ###3 ###4 ##5 #6",
                set: [0,6,7,8,9,10,11]
            }
        ]
    }
]   


var octadFamilies = [
    {
        name: '(8-1)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
    {
        name: '(8-2)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            },
            {
                name:"Super Locrian, Locrian b4, Ionian #1",
                set: [0,1,3,4,6,8,10]
            }
        ]
    },
    {
        name: "(8-2M)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            },
            {
                name:"Locrian b4 bb7, Mixolydian #1",
                set: [0,1,3,4,6,8,9]
            }
        ]   
    },
    {
        name: "(8-3)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2, Aeolian b1",
                set: [0,3,4,6,8,9,11]
            },
            {
                name:"Locrian bb7",
                set: [0,1,3,5,6,8,9]
            }
        ]
    },
    {
        name: "(8-4)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Neapolitan Major V",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Neapolitan Major VI",
                set: [0,2,3,4,6,8,10]
            },
            {
                name:"Neapolitan Major VII",
                set: [0,1,2,4,6,8,10]
            }
        ]
    },
    {
        name: '(8-4M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-5)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-5M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-6)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-7)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-8)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-9S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-10)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-11)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-11M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-12)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-12M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-13)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-13M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-14)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-14M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-X15)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-X15M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-Y15)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-Y15M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-16)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-16M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-17)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-18)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-18M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-19)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-19M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-20)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-21)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-22)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-22M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-23)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-24)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-25S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-26)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-27)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-27M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(8-28S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },


var nonadFamilies = [
    {
        name: '(9-1)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
    {
        name: '(9-2)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            },
            {
                name:"Super Locrian, Locrian b4, Ionian #1",
                set: [0,1,3,4,6,8,10]
            }
        ]
    },
    {
        name: "(9-2M)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            },
            {
                name:"Locrian b4 bb7, Mixolydian #1",
                set: [0,1,3,4,6,8,9]
            }
        ]   
    },
    {
        name: "(9-3)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2, Aeolian b1",
                set: [0,3,4,6,8,9,11]
            },
            {
                name:"Locrian bb7",
                set: [0,1,3,5,6,8,9]
            }
        ]
    },
    {
        name: "(9-3M)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Neapolitan Major V",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Neapolitan Major VI",
                set: [0,2,3,4,6,8,10]
            },
            {
                name:"Neapolitan Major VII",
                set: [0,1,2,4,6,8,10]
            }
        ]
    },
    {
        name: '(9-4)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-4M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-5)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-5M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-6)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-7)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-7M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-8)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-8M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-9)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-10)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-11)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-11M)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
        {
        name: '(9-12S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
var decadFamilies = [
    {
        name: '(10-1)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
    {
        name: '(10-2)',
        scales: [
            {
                name:"Melodic Minor, Ionian b3, Dorian nat7 ",
                set: [0,2,3,5,7,9,11]
            },
            {
                name:"Dorian b2, Phrygian nat6",
                set: [0,1,3,5,7,9,10]
            },
            {
                name:"Lydian Augmented, Phrygian b1",
                set: [0,2,4,6,8,9,11]
            },
            {
                name:"Lydian b7, Mixolydian #4",
                set: [0,2,4,6,7,9,10]
            },
            {
                name:"Mixolydian b6, Aeolian nat3",
                set: [0,2,4,5,7,8,10]
            },
            {
                name:"Locrian nat2, Aeolian b5",
                set: [0,2,3,5,6,8,10]
            },
            {
                name:"Super Locrian, Locrian b4, Ionian #1",
                set: [0,1,3,4,6,8,10]
            }
        ]
    },
    {
        name: "(10-3)",
        scales: [
            {
                name:"Harmonic Minor, Aeolian nat7",
                set: [0,2,3,5,7,8,11]
            },
            {
                name:"Locrian nat6",
                set: [0,1,3,5,6,9,10]
            },
            {
                name:"Ionian #5",
                set: [0,2,4,5,8,9,11]
            },
            {
                name:"Dorian #4",
                set: [0,2,3,6,7,9,10]
            },
            {
                name:"Phrygian nat3, Phrygian Dominant",
                set: [0,1,4,5,7,8,10]
            },
            {
                name:"Lydian #2",
                set: [0,3,4,6,7,9,11]
            },
            {
                name:"Locrian b4 bb7, Mixolydian #1",
                set: [0,1,3,4,6,8,9]
            }
        ]   
    },
    {
        name: "(10-4)",
        scales: [
            {
                name:"Harmonic Major, Ionian b6",
                set: [0,2,4,5,7,8,11]
            },
            {
                name:"Dorian b5",
                set: [0,2,3,5,6,9,10]
            },
            {
                name:"Phrygian b4",
                set: [0,1,3,4,7,8,10]
            },
            {
                name:"Lydian b3",
                set: [0,2,3,6,7,9,11]
            },
            {
                name:"Mixolydian b2",
                set: [0,1,4,5,7,9,10]
            },
            {
                name:"Lydian augmented #2, Aeolian b1",
                set: [0,3,4,6,8,9,11]
            },
            {
                name:"Locrian bb7",
                set: [0,1,3,5,6,8,9]
            }
        ]
    },
    {
        name: "(10-5)",
        scales: [
            {
                name:"Neapolitan Major",
                set: [0,1,3,5,7,9,11]
            },
            {
                name:"Neapolitan Major II",
                set: [0,2,4,6,8,10,11]
            },
            {
                name:"Neapolitan Major III",
                set: [0,2,4,6,8,9,10]
            },
            {
                name:"Neapolitan Major IV",
                set: [0,2,4,6,7,8,10]
            },
            {
                name:"Neapolitan Major V",
                set: [0,2,4,5,6,8,10]
            },
            {
                name:"Neapolitan Major VI",
                set: [0,2,3,4,6,8,10]
            },
            {
                name:"Neapolitan Major VII",
                set: [0,1,2,4,6,8,10]
            }
        ]
    },
    {
        name: '(10-6S)',
        scales: [
            {
                name:"Lydian",
                set: [0,2,4,6,7,9,11]
            },
            {
                name:"Ionian",
                set: [0,2,4,5,7,9,11]
            },
            {
                name:"Mixolydian",
                set: [0,2,4,5,7,9,10]
            },
            {
                name:"Dorian",
                set: [0,2,3,5,7,9,10]
            },
            {
                name:"Aeolian",
                set: [0,2,3,5,7,8,10]
            },
            {
                name:"Phrygian",
                set: [0,1,3,5,7,8,10]
            },
            {
                name:"Locrian",
                set: [0,1,3,5,6,8,10]
            }
        ]
    },
var cycles = [
    {
        name : "cycle of 2nds",
        cyc : [0,1,2,3,4,5,6],
        chordPositions:[
            [0, 2, 4],
            [1, 3, 5],
            [2, 4, 6],
            [3, 5, 0],
            [4, 6, 1],
            [5, 0, 2],
            [6, 1, 3]
        ]
    },
    {
        name : "cycle of 3rds",
        cyc : [0,2,4,6,1,3,5],
        chordPositions:[
            [0, 2, 4],
            [6, 2, 4],
            [6, 1, 4],
            [6, 1, 3],
            [5, 1, 3],
            [5, 0, 3],
            [5, 0, 2]
        ]
    },
    {
        name : "cycle of 4ths",
        cyc : [0,3,6,2,5,1,4],
        chordPositions:[
            [0, 2, 4],
            [0, 3, 5],
            [1, 3, 6],
            [2, 4, 6],
            [2, 5, 0],
            [3, 5, 1],
            [4, 6, 1]
        ]
    },
    {
        name : "cycle of 5ths",
        cyc : [0,4,1,5,2,6,3],
        chordPositions:[
            [0, 2, 4],
            [6, 1, 4],
            [5, 1, 3],
            [5, 0, 2],
            [4, 6, 2],
            [3, 6, 1],
            [3, 5, 0]
        ]
    },
    {
        name : "cycle of 6ths",
        cyc : [0,5,3,1,6,4,2],
        chordPositions:[
            [0, 2, 4],
            [0, 2, 5],
            [0, 3, 5],
            [1, 3, 5],
            [1, 3, 6],
            [1, 4, 6],
            [2, 4, 6]
        ]
    },
    {
        name : "cycle of 7ths",
        cyc : [0,6,5,4,3,2,1],
        chordPositions:[
            [0, 2, 4],
            [6, 1, 3],
            [5, 0, 2],
            [4, 6, 1],
            [3, 5, 0],
            [2, 4, 6],
            [1, 3, 5]
        ]
    },
]