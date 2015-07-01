var pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var cirlceOfFifths = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
var intervals = {
    "Minor 2": 1,
    "Major 2": 2,
    "Minor 3": 3,
    "Major 3": 4,
    "Perfect 4": 5,
    "Augmented 4 / Diminished 5": 6,
    "Perfect 5": 7,
    "Minor 6": 8,
    "Major 6": 9,
    "Minor 7": 10,
    "Major 7": 11
};
var cycles = [
    {
        name: "cycle of 2nds",
        cyc: [0, 1, 2, 3, 4, 5, 6],
        chordPositions: [
            [0, 2, 4],
            [1, 3, 5],
            [2, 4, 6],
            [3, 5, 0],
            [4, 6, 1],
            [5, 0, 2],
            [6, 1, 3]
        ]
    }, {
        name: "cycle of 3rds",
        cyc: [0, 2, 4, 6, 1, 3, 5],
        chordPositions: [
            [0, 2, 4],
            [6, 2, 4],
            [6, 1, 4],
            [6, 1, 3],
            [5, 1, 3],
            [5, 0, 3],
            [5, 0, 2]
        ]
    }, {
        name: "cycle of 4ths",
        cyc: [0, 3, 6, 2, 5, 1, 4],
        chordPositions: [
            [0, 2, 4],
            [0, 3, 5],
            [1, 3, 6],
            [2, 4, 6],
            [2, 5, 0],
            [3, 5, 1],
            [4, 6, 1]
        ]
    }, {
        name: "cycle of 5ths",
        cyc: [0, 4, 1, 5, 2, 6, 3],
        chordPositions: [
            [0, 2, 4],
            [6, 1, 4],
            [5, 1, 3],
            [5, 0, 2],
            [4, 6, 2],
            [3, 6, 1],
            [3, 5, 0]
        ]
    }, {
        name: "cycle of 6ths",
        cyc: [0, 5, 3, 1, 6, 4, 2],
        chordPositions: [
            [0, 2, 4],
            [0, 2, 5],
            [0, 3, 5],
            [1, 3, 5],
            [1, 3, 6],
            [1, 4, 6],
            [2, 4, 6]
        ]
    }, {
        name: "cycle of 7ths",
        cyc: [0, 6, 5, 4, 3, 2, 1],
        chordPositions: [
            [0, 2, 4],
            [6, 1, 3],
            [5, 0, 2],
            [4, 6, 1],
            [3, 5, 0],
            [2, 4, 6],
            [1, 3, 5]
        ]
    }
];
var tunings = {
    guitarStandard: [4, 11, 7, 2, 9, 4],
    dropD: [4, 11, 7, 2, 9, 2],
    openD: [2, 9, 6, 2, 9, 2],
    doubleDropD: [2, 11, 7, 2, 9, 2],
    dropDandG: [4, 11, 7, 2, 7, 2],
    "standard(Eb)": [3, 10, 6, 1, 8, 3],
    "standard(D)": [2, 9, 5, 0, 7, 2],
    "standard(C#)": [1, 8, 4, 11, 6, 1],
    "standard(C)": [0, 7, 3, 10, 5, 0],
    "standard(B)": [11, 6, 2, 9, 4, 11],
    "standard(Bb)": [10, 5, 1, 8, 3, 10],
    "baritoneGuitar(A)": [9, 2, 7, 0, 4, 9],
    dropC: [2, 9, 5, 0, 7, 0],
    "dropC#": [3, 10, 6, 1, 8, 1],
    openG: [2, 11, 7, 2, 7, 2],
    openE: [4, 11, 8, 4, 11, 4],
    openC: [4, 0, 7, 0, 7, 4],
    DADGAD: [2, 9, 7, 2, 9, 2],
    frippNewStandard: [7, 4, 9, 2, 7, 0],
    sevenStringGuitar: [4, 11, 7, 2, 9, 4, 11],
    bass: [7, 2, 9, 4],
    fiveStringBass: [7, 2, 9, 4, 11],
    sixStringBass: [0, 7, 2, 9, 4, 11],
    mandolin: [4, 9, 2, 7],
    mandola: [9, 2, 7, 0],
    fiveStringMandolin: [4, 9, 2, 7, 0],
    ukeleleStandard: [9, 4, 0, 7],
    sopranoUkelele: [11, 6, 2, 9],
    baritoneUkelele: [4, 11, 7, 2],
    fiveStringBanjo: [2, 11, 7, 2, 7],
    balalaikaPrima: [9, 4, 4],
    balalaikaSecunda: [2, 9, 9],
    balalaikaBass: [2, 9, 4],
    cubanTres: [4, 0, 7],
    bouzouki: [2, 9, 5, 0],
    threeCourseBouzouki: [0, 9, 0],
    irishBouzouki: [0, 9, 0, 7],
    oud: [0, 7, 2, 9, 7, 2],
    rabab: [2, 9, 4]
};