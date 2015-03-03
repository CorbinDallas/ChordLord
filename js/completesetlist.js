var pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G','Ab', 'A', 'Bb', 'B'];
var cirlceOfFiths = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
var tunings = {
    guitarStandard: [4, 11, 7, 2, 9, 4],
    dropD: [4, 11, 7, 2, 9, 2],
    openD: [2, 9, 6, 2, 9, 2],
    doubleDropD: [2, 11, 7, 2, 9, 2],
    dropDandG: [4, 11, 7, 2, 7, 2]
    standard(Eb): [3, 10, 6, 1, 8, 3],
    standard(D): [2, 9, 5, 0, 7, 2],
    standard(C#): [1, 8, 4, 11, 6, 1],
    standard(C): [0, 7, 3, 10, 5, 0],
    standard(B): [11, 6, 2, 9, 4, 11],
    standard(Bb): [10, 5, 1, 8, 3, 10],
    baritoneGuitar(A): [9, 2, 7, 0, 4, 9],
    dropC: [2, 9, 5, 0, 7, 0],
    dropC#: [3, 10, 6, 1, 8, 1],
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
    ukeleleStandard: [ 9, 4, 0, 7],
    sopranoUkelele: [ 11, 6, 2, 9],
    baritoneUkelele: [ 4, 11, 7, 2],
    fiveStringBanjo: [ 2, 11, 7, 2, 7],
    balalaikaPrima: [ 9, 4, 4],
    balalaikaSecunda: [2, 9, 9],
    balalaikaBass: [2, 9, 4],
    cubanTres: [4, 0, 7],
    bouzouki: [ 2, 9, 5, 0],
    threeCourseBouzouki: [ 0, 9, 0],
    irishBouzouki: [0, 9, 0, 7], 
    oud: [0, 7, 2, 9, 7, 2],
    rabab: [2, 9, 4]
}
var completeSetList = {
	nullSet: { 
		"(0-1) Silence, Rest": { [] }
	},
	twelveNotes: {
		"(12-1) Chromatic Scale": { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 , 11] }
	}, 
	monad: {
		"(1-1) Monad" : { [0] }
	},
	elevenNotes: {
		"(11-1) Eleven Note Scale": { "Chromatic no7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10], "Chromatic no b7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "Chromatic no6": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11], "Chromatic no b6": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11], "Chromatic no5": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "Chromatic no#4/b5": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11], "Chromatic no4": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11], "Chromatic no3": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "Chromatic no b3": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "Chromatic no2": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11], "Chromatic no b2": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
	}, 
	dyads: {
	   "(2-1) Interval Class 1" : { "Minor 2nd" : [0, 1], "Major 7th" : [0, 11] },
	   "(2-2) Interval Class 2" : { "Major 2nd" : [0, 2], "Minor 7th" : [0, 10] },
	   "(2-3) Interval Class 3" : { "Minor 3rd" : [0, 3], "Major 6th" : [0, 9] },
	   "(2-4) Interval Class 4" : { "Major 3rd" : [0, 4], "Minor 6th" : [0, 8] },
	   "(2-5) Interval Class 5" : { "Perfect 4th" : [0, 5], "Perfect 5th" : [0, 7] },
	   "(2-6S) Interval Class 6" : { "Augmented 4th, Diminished 5th" : [0, 6] }
	},	
	decads: {
		"(10-1) Chromatic (Minor 2nd / Major 7th Shadow)": { "Chromatic no b7 no 7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "Chromatic no 6 no b7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11], "Chromatic no b6 no 6": [0, 1, 2, 3, 4, 5, 6, 7, 10, 11], "Chromatic no 5 no b6": [0, 1, 2, 3, 4, 5, 6, 9, 10, 11], "Chromatic no #4 no 5": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11], "Chromatic no 4 no b5": [0, 1, 2, 3, 4, 7, 8, 9, 10, 11], "Chromatic no 3 no 4": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11], "Chromatic no b3 no 3": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11], "Chromatic no 2 no b3": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11], "Chromatic no b2 no 2": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
		"(10-2) Decatonic (Major 2nd / Minor 7th Shadow)": { "Chromatic no 6 no 7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "Chromatic no b6 no b7": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11], "Chromatic no 5 no 6": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11], "Chromatic no b5 no b6": [0, 1, 2, 3, 4, 5, 7, 9, 10, 11], "Chromatic no 4 no 5": [0, 1, 2, 3, 4, 6, 8, 9, 10, 11], "Chromatic no 3 no #4": [0, 1, 2, 3, 5, 7, 8, 9, 10, 11], "Chromatic  no b3 no 4": [0, 1, 2, 4, 6, 7, 8, 9, 10, 11],   "Chromatic no 2 no b3": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11], "Chromatic no b2 no b3": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11], "Chromatic no b2 no 7": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
		"(10-3) Decatonic (Minor 3rd  / Major 6th Shadow)": { "Chromatic no b6 no 7": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10], "Chromatic no 5 no b7": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11], "Chromatic no #4 no 6": [0, 1, 2, 3, 4, 5, 7, 8, 10, 11], "Chromatic no 4  no b6 ": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11], "Chromatic no 3 no 5": [0, 1, 2, 3, 5, 6, 8, 9, 10, 11], "Chromatic no b3 no b5": [0, 1, 2, 4, 5, 7, 8, 9, 10, 11], "Chromatic no 2  no 4": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11]  "Chromatic no b2 no 3": [0, 2, 3, 5, 6, 7, 8, 9, 10, 11], "Chromatic no 2 no 7": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10], "Chromatic no b2 no b7": [0, 2, 3, 4, 5, 6, 7, 8, 9, 11], },
		"(10-4) Decatonic (Major 3rd / Minor 6th Shadow)": { "Chromatic no 5 no 7": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10], "Chromatic no b5 no b7": [0, 1, 2, 3, 4, 5, 7, 8, 9, 11], "Chromatic no 4 no 6": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11], "Chromatic no 3 no b6": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11], "Chromatic no b3 no 5": [0, 1, 2, 4, 5, 6, 8, 9, 10, 11], "Chromatic no 2 no b5": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11], "Chromatic no b2 no 4": [0, 2, 3, 4, 6, 7, 8, 9, 10, 11],  "Chromatic no b3 no 7": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],  "Chromatic no 2 no b7": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11], "Chromatic no b2 no 6": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11] },
		"(10-5) Decatonic (Perfect 4th / Perfect 5th Shadow)": { "Chromatic no #4 no 7": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "Chromatic no 4 no b7": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11], "Chromatic no 3 no 6": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11], "Chromatic no b3 no b6": [0, 1, 2, 4, 5, 6, 7, 9, 10, 11], "Chromatic no 2 no 5": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11], "Chromatic no b2 no b5": [0, 2, 3, 4, 5, 7, 8, 9, 10, 11], "Chromatic no 3 no 7": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10],  "Chromatic no b3 no b7": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11],  "Chromatic no 2 no 6": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11], "Chromatic no b2 no b6" [0, 2, 3, 4, 5, 6, 7, 9, 10, 11] },
		"(10-6S) Decatonic Symmetrical (Augmented 4th / Diminished 5th Shadow)": { "Chromatic no 4 no 7": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10], "Chromatic No 3 No b7": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11], "Chromatic no b3 no 6": [0, 1, 2, 4, 5, 6, 7, 8, 10, 11], "Chromatic no 2 no b6": [0, 1, 3, 4, 5, 6, 7, 9, 10, 11], "Chromatic no b2 no 5": [0, 2, 3, 4, 5, 6, 8, 9, 10, 11] },
	},
    triads: {
        "Tertial": {
            "(3-11M) Major Triad": { "Major": [0, 4, 7], "1st Inversion Major": [0, 3, 8], "2nd Inversion Major": [0, 5, 9] },
            "(3-11) Minor Triad": { "Minor": [0, 3, 7], "1st Inversion Minor": [0, 4, 9], "2nd Inversion Minor": [0, 5, 8] },
            "(3-10) Diminished Triad": { "Diminished": [0, 3, 6], "1st Inversion Diminished": [0, 3, 9], "2nd Inversion Diminished": [0, 6, 9] }
        },
        "Secundal": {
            "(3-6) Major Trichord": { "Major Trichord": [0, 2, 4], "1st Inversion Major Trichord": [0, 2, 10], "2nd Inversion Major Trichord": [0, 8, 10] },
            "(3-2M) Minor Trichord": { "Minor Trichord": [0, 2, 3], "1st Inversion Minor Trichord": [0, 1, 10], "2nd Inversion Minor Trichord":[0, 9, 11] },
            "(3-2) Phrygian Trichord": { "Phrygian Trichord": [0, 1, 3], "1st Inversion Phrygian Trichord": [0, 2, 11], "2nd Inversion Phrygian Trichord": [0, 9, 10] }
        },
        "Quartal": {
            "(3-9) Sus4": { "Sus4": [0, 5, 7], "Sus2": [[0, 2, 7], "Perfect Quartal Triad": [0, 5, 10] },
            "(3-5M) Diminished Sus4": { "Diminished Sus4": [0, 5, 6], "Susb2": [0, 1, 7], "Lydian Quartal Triad"[0, 6, 11] },
            "(3-5) Sus#4": { "Sus#4": [0, 6, 7], "Diminished Susb2": [0, 1, 6], "Ionian Quartal Triad": [0, 5, 11] }
        },
        "7 no 3": {
            "(3-4M) Major 7 no 3": { "Major 7 no 3": [0, 7, 11], "1st Inversion Major 7 no 3": [0, 4, 5], "2nd Inversion Major 7 no 3": [0, 1, 8] },
            "(3-7M) Minor 7 no 3": { "Minor 7 no 3": [0, 7, 10], "1st Inversion Minor 7 no 3": [0, 3, 5], "2nd Inversion Minor 7 no 3": [0, 2, 9] },
            "(3-8M) Half Diminished no 3": { "Half-Diminished no 3": [0, 6, 10], "1st Inversion Half-Diminished no 3": [0, 4, 6], "2nd Inversion Half-Diminished no 3": [0, 2, 8] }
        },
        "7 no 5": {
            "(3-4) Major 7 no 5": { "Major 7 no 5": [0, 4, 11], "1st Inversion Major 7 no 5": [0, 7, 8], "2nd Inversion Major 7 no 5": [0, 1, 5] },
            "(3-8) Dominant 7 no 5": { "Dominant 7 no 5": [0, 4, 10], "1st Inversion Dominant 7 no 5": [0, 6, 8], "2nd Inversion Dominant 7 no 5": [0, 2, 6] },
            "(3-7) Minor 7 no 5": { "Minor 7 no 5": [0, 3, 10], "1st Inversion Minor 7 no 5": [0, 7, 9], "2nd Inversion Minor 7 no 5": [0, 2, 5] }
        },
        "Ambiguous, Diatonic to Melodic/Harmonic Minor": {
            "(3-12S) Augmented": { "Augmented Triad": [0, 4, 8] },
            "(3-3M) Major #2 Trichord": { "#2 Trichord, 1st Inversion Augmented Major 7 no 3": [0, 3, 4], "1st Inversion #2 Trichord, 2nd Inversion Augmented Major 7 no 3": [0, 1, 9], "2nd Inversion #2 Trichord, Augmented Major 7 no 3": [0, 8, 11] },
            "(3-3) Phrygian Major Trichord": { "Phrygian Major Trichord": [0, 1, 4], "1st Inversion Phrygian Major Trichord, Minor Major 7 no 5": [0, 3, 11], "2nd Inversion Phrygian Major Trichord, 1st Inversion Minor Major 7 no 5": [0, 8, 9] }
        },
        "Chromatic Trichord": {
        	"(3-1) bb3 Trichord": { "bb3 Trichord": [0, 1, 2], "1st Inversion bb3 Trichord": [0, 1, 11], "2nd Inversion bb3 Trichord": [0, 10, 11] }
        }
    }, 
    nonads: {
		"(9-1) Complementary to Chromatic Trichord": { "Chromatic no(6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 7, 8], "Chromatic no(b6 6 b7)": [0, 1, 2, 3, 4, 5, 6, 7, 11], "Chromatic no(5 b6 6)": [0, 1, 2, 3, 4, 5, 6, 10, 11], "Chromatic no(#4 5 b6)": [0, 1, 2, 3, 4, 5, 9, 10, 11], "Chromatic no(4 b5 5)": [0, 1, 2, 3, 4, 8, 9, 10, 11], "Chromatic no(3 4 b5)": [0, 1, 2, 3, 7, 8, 9, 10, 11], "Chromatic no(b3 3 4)": [0, 1, 2, 6, 7, 8, 9, 10, 11], "Chromatic no(2 b3 3)": [0, 1, 5, 6, 7, 8, 9, 10, 11], "Chromatic no(b2 2 b3)": [0, 4, 5, 6, 7, 8, 9, 10, 11] },
		"(9-2) Complementary to Minor Trichord": { "Chromatic no(b6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 7, 9], "Chromatic no(5 6 b7)": [0, 1, 2, 3, 4, 5, 6, 8, 11], "Chromatic no(b5 b6 6)": [0, 1, 2, 3, 4, 5, 7, 10, 11], "Chromatic no(4 5 b6)": [0, 1, 2, 3, 4, 6, 9, 10, 11], "Chromatic no(3 #4 5)": [0, 1, 2, 3, 5, 8, 9, 10, 11], "Chromatic no(b3 4 b5)": [0, 1, 2, 4, 7, 8, 9, 10, 11], "Chromatic no(2 3 4)": [0, 1, 3, 6, 7, 8, 9, 10, 11],  "Chromatic no(b2 b3 3)": [0, 2, 5, 6, 7, 8, 9, 10, 11],  "Chromatic no(b2 2 7)": [0, 3, 4, 5, 6, 7, 8, 9, 10] },
		"(9-2M) Complementary to Phrygian Trichord": { "Chromatic no(b2 b7 7)": [0, 2, 3, 4, 5, 6, 7, 8, 9 ], "Chromatic no(b6 6 7)": [0, 1, 2, 3, 4, 5, 6, 7, 10], "Chromatic no(5 b6 b7)": [0, 1, 2, 3, 4, 5, 6, 9, 11], "Chromatic no(#4 5 6)": [0, 1, 2, 3, 4, 5, 8, 10, 11], "Chromatic no(4 b5 b6)": [0, 1, 2, 3, 4, 7, 9, 10, 11], "Chromatic no(3 4 5)": [0, 1, 2, 3, 6, 8, 9, 10, 11], "Chromatic no(b3 3 b5)": [0, 1, 2, 5, 7, 8, 9, 10, 11], "Chromatic no(2 b3 4)": [0, 1, 4, 6, 7, 8, 9, 10, 11], "Chromatic no(b2 2 3)": [0, 3, 5, 6, 7, 8, 9, 10, 11] },
		"(9-3) Complementary to #2 Trichord": { "Chromatic no(5 b7 7)": [0, 1, 2, 3, 4, 5, 6, 8, 9], "Chromatic no(b5 6 b7)": [0, 1, 2, 3, 4, 5, 7, 8, 11], "Chromatic no(4 b6 6)": [0, 1, 2, 3, 4, 6, 7, 10, 11], "Chromatic no(3 5 b6)": [0, 1, 2, 3, 5, 6, 9, 10, 11], "Chromatic no(b3 #4 5)": [0, 1, 2, 4, 5, 8, 9, 10, 11], "Chromatic no(2 4 b5)": [0, 1, 3, 4, 7, 8, 9, 10, 11], "Chromatic no(b2 3 4)": [0, 2, 3, 6, 7, 8, 9, 10, 11], "Chromatic no(2 b3 7)": [0, 1, 4, 5, 6, 7, 8, 9, 10], "Chromatic no(b2 2 b7)": [0, 3, 4, 5, 6, 7, 8, 9, 11] },
		"(9-3M) Complementary to Phrygian Major Trichord": { "Chromatic no(2 b7 7)": [0, 1, 3, 4, 5, 6, 7, 8, 9], "Chromatic no(b2 6 b7)": [0, 2, 3, 4, 5, 6, 7, 8, 11], "Chromatic no(5 b6 7)": [0, 1, 2, 3, 4, 5, 6, 9, 10], "Chromatic no(#4 5 b7)": [0, 1, 2, 3, 4, 5, 8, 9, 11], "Chromatic no(5 b5 6)": [0, 1, 2, 3, 4, 7, 8, 10, 11], "Chromatic no(3 4 b6)": [0, 1, 2, 3, 6, 7, 9, 10, 11], "Chromatic no(b3 3 5)": [0, 1, 2, 5, 6, 8, 9, 10, 11], "Chromatic no(2 b3 b5)": [0, 1, 4, 5, 7, 8, 9, 10, 11], "Chromatic no(b2 2 4)": [0, 3, 4, 6, 7, 8, 9, 10, 11] },
		"(9-4) Complementary to Major 7 no3": { "Chromatic no(b5 b7 7)": [0, 1, 2, 3, 4, 5, 7, 8, 9], "Chromatic no(4 6 b7)": [0, 1, 2, 3, 4, 6, 7, 8, 11], "Chromatic no(3 b6 6)": [0, 1, 2, 3, 5, 6, 7, 10, 11], "Chromatic no(b3 5 b6)": [0, 1, 2, 4, 5, 6, 9, 10, 11], "Chromatic no(2 #4 5)": [0, 1, 3, 4, 5, 8, 9, 10, 11], "Chromatic no(b2 4 b5)": [0, 2, 3, 4, 7, 8, 9, 10, 11], "Chromatic no(b3 3 7)": [0, 1, 2, 5, 6, 7, 8, 9, 10],  "Chromatic no(2 b3 b7)": [0, 1, 4, 5, 6, 7, 8, 9, 11],  "Chromatic no(b2 2 6)": [0, 3, 4, 5, 6, 7, 8, 10, 11] },
		"(9-4M) Complementary to Major 7 no 5": { "Chromatic no(b3 b7 7)": [0, 1, 2, 4, 5, 6, 7, 8, 9], "Chromatic no(2 6 b7)": [0, 1, 3, 4, 5, 6, 7, 8, 11], "Chromatic no(b2 b6 6)": [0, 2, 3, 4, 5, 6, 7, 10, 11], "Chromatic no(#4 5 7)": [0, 1, 2, 3, 4, 5, 8, 9, 10], "Chromatic no(4 b5 b7)": [0, 1, 2, 3, 4, 7, 8, 9, 11], "Chromatic no(3 4 6)": [0, 1, 2, 3, 6, 7, 8, 10, 11], "Chromatic no(b3 3 b6)": [0, 1, 2, 5, 6, 7, 9, 10, 11], "Chromatic no(2 b3 5)": [0, 1, 4, 5, 6, 8, 9, 10, 11], "Chromatic no(b2 2 b5)": [0, 3, 4, 5, 7, 8, 9, 10, 11] },
		"(9-5) Complementary to Diminished sus4": { "Chromatic no(4 b7 7)": [0, 1, 2, 3, 4, 6, 7, 8, 9], "Chromatic no(3 6 b7)": [0, 1, 2, 3, 5, 6, 7, 8, 11], "Chromatic no(b3 b6 6)": [0, 1, 2, 4, 5, 6, 7, 10, 11], "Chromatic no(2 5 b6)": [0, 1, 3, 4, 5, 6, 9, 10, 11], "Chromatic no(b2 #4 5)": [0,2, 3, 4, 5, 8, 9, 10, 11], "Chromatic no(3 4 7)": [0, 1, 2, 3, 6, 7, 8, 9, 10], "Chromatic no(b3 3 b7)": [0, 1, 2, 5, 6, 7, 8, 9, 11],  "Chromatic no(2 b3 6)": [0, 1, 4, 5, 6, 7, 8, 10, 11], "Chromatic no(b2 2 b6)": [0, 3, 4, 5, 6, 7, 9, 10, 11] },
		"(9-5M) Complementary to sus#4": { "Chromatic no(3 b7 7)": [0, 1, 2, 3, 5, 6, 7, 8, 9], "Chromatic no(b3 6 b7)": [0, 1, 2, 4, 5, 6, 7, 8, 11], "Chromatic no(2 b6 6)": [0, 1, 3, 4, 5, 6, 7, 10, 11], "Chromatic no(b2 5 b6)": [0, 2, 3, 4, 5, 6, 9, 10, 11], "Chromatic no(4 b5 7)": [0, 1, 2, 3, 4, 7, 8, 9, 10], "Chromatic no(3 4 b7)": [0, 1, 2, 3, 6, 7, 8, 9, 11], "Chromatic no(b3 3 6)": [0, 1, 2, 5, 6, 7, 8, 10, 11], "Chromatic no(2 b3 b6)": [0, 1, 4, 5, 6, 7, 9, 10, 11], "Chromatic no(b2 2 5)": [0, 3, 4, 5, 6, 8, 9, 10, 11] },
		"(9-6) Complementary to Major Trichord": { "Chromatic no(5 6 7)": [0, 1, 2, 3, 4, 5, 6, 8, 10], "Chromatic no(b5 b6 b7)": [0, 1, 2, 3, 4, 5, 7, 9, 11], "Chromatic no(4 5 6)": [0, 1, 2, 3, 4, 6, 8, 10, 11], "Chromatic no(3 b5 b6)": [0, 1, 2, 3, 5, 7, 9, 10, 11], "Chromatic no(b3 4 5)": [0, 1, 2, 4, 6, 8, 9, 10, 11], "Chromatic no(2 3 #4)": [0, 1, 3, 5, 7, 8, 9, 10, 11], "Chromatic no(b2 b3 4)": [0, 2, 4, 6, 7, 8, 9, 10, 11], "Chromatic no(b2 b3 7)": [0, 2, 4, 5, 6, 7, 8, 9, 10], "Chromatic no(b2 6 7)": [0, 2, 3, 4, 5, 6, 7, 8, 10] },
		"(9-7) Complementary to 7 no3": { "Chromatic no(b5 6 7)": [0, 1, 2, 3, 4, 5, 7, 8, 10], "Chromatic no(4 b6 b7)": [0, 1, 2, 3, 4, 6, 7, 9, 11], "Chromatic no(3 5 6)": [0, 1, 2, 3, 5, 6, 8, 10, 11], "Chromatic no(b3 b5 b6)": [0, 1, 2, 4, 5, 7, 9, 10, 11], "Chromatic no(2 4 5)": [0, 1, 3, 4, 6, 8, 9, 10, 11], "Chromatic no(b2 3 b5)": [0, 2, 3, 5, 7, 8, 9, 10, 11], "Chromatic no(2 3 7)": [0, 1, 3, 5, 6, 7, 8, 9, 10], "Chromatic no(b2 b3 b7)": [0, 2, 4, 5, 6, 7, 8, 9, 11], "Chromatic no(b2 b6 7)": [0, 2, 3, 4, 5, 6, 7, 9, 10] },
		"(9-7M) Complementary to Minor 7 no 5": { "Chromatic no(b5 b6 7)": [0, 1, 2, 3, 4, 5, 7, 9, 10], "Chromatic no(4 5 b7)": [0, 1, 2, 3, 4, 6, 8, 9, 11], "Chromatic no(3 #4 6)": [0, 1, 2, 3, 5, 7, 8, 10, 11], "Chromatic no(b3 4 b6)": [0, 1, 2, 4, 6, 7, 9, 10, 11], "Chromatic no(2 3 5)": [0, 1, 3, 5, 6, 8, 9, 10, 11], "Chromatic no(b2 b3 b5)": [0, 2, 4, 5, 7, 8, 9, 10, 11], "Chromatic no(b2 3 7)": [0, 2, 3, 5, 6, 7, 8, 9, 10],  "Chromatic no(2 6 7)": [0, 1, 3, 4, 5, 6, 7, 8, 10],  "Chromatic no(b2 b6 b7)": [0, 2, 3, 4, 5, 6, 7, 9, 11] },
		"(9-8) Complementary to Half-Diminished no3": { "Chromatic no(4 6 7)": [0, 1, 2, 3, 4, 6, 7, 8, 10], "Chromatic no(3 b6 b7)": [0, 1, 2, 3, 5, 6, 7, 9, 11], "Chromatic no(b3 5 6)": [0, 1, 2, 4, 5, 6, 8, 10, 11], "Chromatic no(2 b5 b6)": [0, 1, 3, 4, 5, 7, 9, 10, 11], "Chromatic no(b2 4 5)": [0, 2, 3, 4, 6, 8, 9, 10, 11], "Chromatic no(b3 4 7)": [0, 1, 2, 4, 6, 7, 8, 9, 10], "Chromatic no(2 3 b7)": [0, 1, 3, 5, 6, 7, 8, 9, 11], "Chromatic no(b2 b3 6)": [0, 2, 4, 5, 6, 7, 8, 10, 11], "Chromatic no(b2 5 7)": [0, 2, 3, 4, 5, 6, 8, 9, 10] },
		"(9-8M) Complementary to 7 no5": { "Chromatic no(4 5 7)": [0, 1, 2, 3, 4, 6, 8, 9, 10], "Chromatic no(3 #4 b7)": [0, 1, 2, 3, 5, 7, 8, 9, 11], "Chromatic no(b3 4 6)": [0, 1, 2, 4, 6, 7, 8, 10, 11], "Chromatic no(2 3 b6)": [0, 1, 3, 5, 6, 7, 9, 10, 11], "Chromatic no(b2 b3 5)": [0, 2, 4, 5, 6, 8, 9, 10, 11], "Chromatic no(b2 4 7)": [0, 2, 3, 4, 6, 7, 8, 9, 10], "Chromatic no(b3 6 7)": [0, 1, 2, 4, 5, 6, 7, 8, 10], "Chromatic no(2 b6 b7)": [0, 1, 3, 4, 5, 6, 7, 9, 11], "Chromatic no(b2 5 6)": [0, 2, 3, 4, 5, 6, 8, 10, 11] },
		"(9-9) Complementary to sus4": { "Chromatic no(3 6 7)": [0, 1, 2, 3, 5, 6, 7, 8, 10], "Chromatic no(b3 b6 b7)": [0, 1, 2, 4, 5, 6, 7, 9, 11], "Chromatic no(2 5 6)": [0, 1, 3, 4, 5, 6, 8, 10, 11], "Chromatic no(b2 b5 b6)": [0, 2, 3, 4, 5, 7, 9, 10, 11], "Chromatic no(3 #4 7)": [0, 1, 2, 3, 5, 7, 8, 9, 10], "Chromatic no(b3 4 b7)": [0, 1, 2, 4, 6, 7, 8, 9, 11], "Chromatic no(2 3 6)": [0, 1, 3, 5, 6, 7, 8, 10, 11], "Chromatic no(b2 b3 b6)": [0, 2, 4, 5, 6, 7, 9, 10, 11], "Chromatic no(b2 b5 7)": [0, 2, 3, 4, 5, 7, 8, 9, 10] },
		"(9-10) Complementary to Diminished": { "Chromatic no(4 b6 7)": [0, 1, 2, 3, 4, 6, 7, 9, 10], "Chromatic no(3 5 b7)": [0, 1, 2, 3, 5, 6, 8, 9, 11], "Chromatic no(b3 b5 6)": [0, 1, 2, 4, 5, 7, 8, 10, 11], "Chromatic no(2 4 b6)": [0, 1, 3, 4, 6, 7, 9, 10, 11], "Chromatic no(b2 3 5)": [0, 2, 3, 5, 6, 8, 9, 10, 11], "Chromatic no(2 4 7)": [0, 1, 3, 4, 6, 7, 8, 9, 10], "Chromatic no(b2 3 b7)": [0, 2, 3, 5, 6, 7, 8, 9, 11], "Chromatic no(2 b6 11)": [0, 1, 3, 4, 5, 6, 7, 9, 10], "Chromatic no(b2 5 b7)": [0, 2, 3, 4, 5, 6, 8, 9, 11] },
		"(9-11) Complementary to Major": { "Chromatic no(3 b6 7)": [0, 1, 2, 3, 5, 6, 7, 9, 10], "Chromatic no(b3 5 b7)": [0, 1, 2, 4, 5, 6, 8, 9, 11], "Chromatic no(2 b5 6)": [0, 1, 3, 4, 5, 7, 8, 10, 11], "Chromatic no(b2 4 b6)": [0, 2, 3, 4, 6, 7, 9, 10, 11], "Chromatic no(b3 b5 7)": [0, 1, 2, 4, 5, 7, 8, 9, 10], "Chromatic no(2 4 b7)": [0, 1, 3, 4, 6, 7, 8, 9, 11], "Chromatic no(b2 3 6)": [0, 2, 3, 5, 6, 7, 8, 10, 11], "Chromatic no(2 5 7)": [0, 1, 3, 4, 5, 6, 8, 9, 10], "Chromatic no(b2 b5 b7)": [0, 2, 3, 4, 5, 7, 8, 9, 11] },
		"(9-11M) Complementary to Minor": { "Chromatic no(3 5 7)": [0, 1, 2, 3, 5, 6, 8, 9, 10], "Chromatic no(b3 b5 b7)": [0, 1, 2, 4, 5, 7, 8, 9, 11], "Chromatic no(2 4 6)": [0, 1, 3, 4, 6, 7, 8, 10, 11], "Chromatic no(b2 3 b6)": [0, 2, 3, 5, 6, 7, 9, 10, 11], "Chromatic no(2 b5 7)": [0, 1, 3, 4, 5, 7, 8, 9, 10], "Chromatic no(b2 4 b7)": [0, 2, 3, 4, 6, 7, 8, 9, 11], "Chromatic no(b3 b6 7)": [0, 1, 2, 4, 5, 6, 7, 9, 10], "Chromatic no(2 5 b7)": [0, 1, 3, 4, 5, 6, 8, 9, 11], "Chromatic no(b2 b5 6)": [0, 2, 3, 4, 5, 7, 8, 10, 11] },
		"(9-12S) Complementary to Augmented": { "Chromatic no(b3 5 7)": [0, 1, 2, 4, 5, 6, 8, 9, 10], "Chromatic no(2 b5 b7)": [0, 1, 3, 4, 5, 7, 8, 9, 11], "Chromatic no(b2 4 6)": [0, 2, 3, 4, 6, 7, 8, 10, 11] }
	},
    quadrads: {
        "Tertial": {
            "(4-27) Minor 7 b5": { "Minor 7 b5, Half-Diminished 7": [0, 3, 6, 10], "Minor 6, 1st Inversion Minor 7 b5": [0, 3, 7, 9], "2nd Inversion Minor 7 b5": [0, 4, 6, 9], "3rd Inversion Minor 7 b5": [0, 2, 5, 8] },
            "(4-26) Minor 7": { "Minor 7": [0, 3, 7, 10], "Major 6, 1st Inversion Minor 7": [0, 4, 7, 9], "2nd Inversion Minor 7": [0, 2, 5, 8], "3rd Inversion Minor 7": [0, 2, 5, 9] },
            "(4-20) Major 7": { "Major 7": [0, 4, 7, 11], "1st Inversion Major 7": [0, 3, 7, 8], "2nd Inversion Major 7": [0, 4, 5, 9], "3rd Inversion Major 7": [0, 1, 5, 8] },
            "(4-27M) Dominant 7": { "Dominant 7": [0, 4, 7, 10], "1st Inversion Dominant 7": [0, 3, 6, 8], "2nd Inversion Dominant 7": [0, 3, 5, 9], "3rd Inversion Dominant 7": [0, 2, 6, 9] }
        },
        "Quartal": {
            "(4-23) Perfect Quartal Quadrad": { "Minor Quartal Quadrad": [0, 3, 5, 10], "Major 6 sus2": [0, 2, 7, 9], "7 sus4": [0, 5, 7, 10], "Sus 2 Sus 4": [0, 2, 5, 7] },
            "(4-16M) Mixolydian Quartal Quadrad": { "Mixolydian Quartal Quadrad": [0, 4, 5, 10], "Diminished b6 susb2" [0, 1, 6, 8], "Major 7 sus4": [0, 5, 7, 11], "Sus 2 sus #4": [0, 2, 6, 7] },
            "(4-8) Ionian Quartal Quadrad": { "Ionian Quartal Quadrad": [0, 4, 5, 11], "Minor b6 susb2": [0, 1, 7, 8], "Major 7 sus#4": [0, 6, 7, 11], "Diminished sus b2 sus 4": [0, 1, 5, 6] },
            "(4-16) Lydian Quartal Quadrad": { "Lydian Quartal Quadrad": [0, 4, 6, 11], "b6 sus2": [[0, 2, 7, 8], "Half-Diminished sus4": [0, 5, 6, 10], "Sus b2 sus 4"[0, 1, 5, 7] }
        },
        "Secundal": {
            "(4-11M) Major Tetrachord": { "Major Tetrachord": [0, 2, 4, 5], "1st Inversion Major Tetrachord, Minor 9 no 5": [0, 2, 3, 10], "2nd Inversion Major Tetrachord": [0, 1, 8, 10], "3rd Inversion Major Tetrachord": [0, 7, 9, 11] },
            "(4-11) Phrygian Tetrachord": { "Phrygian Tetrachord": [0, 1, 3, 5], "1st Inversion Phrygian Tetrachord, Major 9 no 5": [0, 2, 4, 11], "2nd Inversion Phrygian Tetrachord": [0, 2, 9, 10], "3rd Inversion Phrygian Tetrachord": [0, 7, 8, 10] },
            "(4-10) Minor Tetrachord": { "Minor Tetrachord": [0, 2, 3, 5], "1st Inversion Minor Tetrachord, Minor 7 no 5 b9": [0, 1, 3, 10], "2nd Inversion Minor Tetrachord": [0, 2, 9, 11], "3rd Inversion Minor Tetrachord": [0, 7, 9, 10] },
            "(4-21) Lydian Tetrachord": { "Lydian Tetrachord": [0, 2, 4, 6], "1st Inversion Lydian Tetrachord, Dominant 7 no 5 (9)": [[0, 2, 4, 10], "2nd Inversion Lydian Tetrachord": [0, 2, 8, 10], "3rd Inversion Lydian Tetrachord": [0, 6, 8, 10] }
        },
        "Add 9": {
            "(4-22) Major (9)": { "Major (9)": [0, 2, 4, 7], "Perfect Quartal Triad (9)": [0, 2, 5, 10], "Minor 7 no 5 (b13)": [0, 3, 8, 10], "Sus 4 (13)": [0, 5, 7, 9] },
            "(4-13) Diminished (b9)": { "Diminished (b9)": [0, 1, 3, 6], "Ionian Quartal Triad (9)": [0, 2, 5, 11], "Minor 7 no 5 (13)": [0, 3, 9, 10], "Sus #4 (13)": [0, 6, 7, 9] },
            "(4-Y15) Minor (b9)": { "Minor (b9)": [0, 1, 3, 7], "Lydian Quartal Triad (9)": [0, 2, 6, 11], "Dominant 7 no 5 (13)": [0, 4, 9, 10], "Diminished sus 4 (b13)": [0, 5, 6, 8] },
            "(4-14) Minor (9)": { "Minor (9)": [0, 2, 3, 7], "Perfect Quartal Triad (b9)": [0, 1, 5, 10], "Major 7 no 5 (13)": [0, 4, 9, 11], "sus4 (b13)": [0, 5, 7, 8] }
        },
        "Add 11": {
            "(4-14M) Major (11)": { "Major 7 sus2": [0, 2, 7, 11], "Perfect Quartal Triad (13)": [0, 5, 9, 10], "Major (11)": [0, 4, 5, 7], "Phrygian Trichord (b13)": [0, 1, 3, 8] },
            "(4-22M) Minor (11)": { "7 sus2": [0, 2, 7, 10], "Perfect Quartal Triad (b13)": [0, 5, 8, 10], "Minor (11)": [0, 3, 5, 7], "Major Trichord (13)": [0, 2, 4, 9] },
            "(4-13M) Diminished (11)": { "7 susb2": [0, 1, 7, 10], "Lydian Quartal Triad (13)": [0, 6, 9, 11], "Diminished (11)": [0, 3, 5, 6], "Minor Trichord (13)": [0, 2, 3, 9] },
            "(4-Y15M) Major (#11)": { "Major (#11)" [0, 4, 6, 7], "Minor Trichord (b13)": [0, 2, 3, 8], "Half-Diminished susb2": [0, 1, 6, 10], "Ionian Quartal Triad (13)": [0, 5, 9, 11] }
        },
        "Diatonic to Melodic Minor": {                       
            "(4-X15M) Super Locrian Quartal Quadrad": { "7 (#9) no 5, Minor 7 no 5 (b11), Super Locrian Quartal Quadrad, 'Jimi Hendrix' ": [0, 3, 4, 10], "6 susb2": [0, 1, 7, 9], "Augmented Major 7 sus#4": [0, 6, 8, 11], "Diminished sus2 sus4": [0, 2, 5, 6] },
            "(4-25S) Dominant 7 b5": { "Dominant 7 b5, Half-Diminished susb4, Dominant 7 no 5 (#11)": [0, 4, 6, 10], "1st Inversion Dominant 7 b5, Augmented sus2 sus#4, Diminished sus2 (b13)": [[0, 2, 6, 8] }
        }, 
        "Diatonic to Melodic and Harmonic Minor":{
        	"(4-3) Super Locrian Tetrachord": { "Minor Major 9 no 5, 1st Inversion Super Locrian Tetrachord": [0, 2, 3, 11], "2nd Inversion Super Locrian Tetrachord": [0, 1, 9, 10], "3rd Inversion Super Locrian Tetrachord": [0, 8, 9, 11], "Super Locrian Tetrachord": [0, 1, 3, 4] },
            "(4-12M) Diminished (b11)": { "Augmented Major 7 sus 2, 2nd Inversion Lydian #2 Tetrachord": [0, 2, 8, 11], "3rd Inversion Lydian #2 Tetrachord, Lydian b7 Quartal Triad (b13)": [0, 6, 9, 10], "Lydian #2 Tetrachord, Diminished (b11)": [0, 3, 4, 6], "Phrygian Trichord (13), 1st Inversion Lydian #2 Tetrachord"[0, 1, 3, 9] },
            "(4-X15) Melodic/Harmonic Minor Quartal Quadrad": { "7 sus#4": [0, 6, 7, 10], "Diminished susb2 sus4" : [0, 1, 4, 6], "Melodic/Harmonic Minor Quartal Quadrad": [0, 3, 5, 11], "Augmented 6 sus2"[0, 2, 8, 9] },  
            "(4-19) Minor Major 7": { "Minor Major 7": [0, 3, 7, 11], "1st Inversion Minor Major 7, Augmented (13)": [0, 4, 8, 9], "2nd Inversion Minor Major 7, Augmented (11)"[0, 4, 5, 8], "3rd Inversion Minor Major 7, Augmented (b9)": [0, 1, 4, 8] },
            "(4-12) Diminished (9)": { "Diminished (9)": [0, 2, 3, 6], "Super Locrian Quartal (b9), Dominant 7 no 5 (b9)": [0, 1, 4, 10], "Minor Major 7 no 5 (13)": [0, 3, 9, 11], "Augmented sus#4 (13)": [0, 6, 8, 9] },
            "(4-19M) Augmented Major 7": { "Augmented Major 7": [0, 4, 8, 11], "Major (b13), 1st Inversion Augmented Major 7": [0, 4, 7, 8], "Augmented (#9), 2nd Inversion Augmented Major 7": [0, 3, 4, 8], "3rd Inversion Augmented Major 7": [0, 1, 5, 9] },            
            "(4-X15M) Super Locrian Quartal Quadrad": { "7 (#9) no 5, Minor 7 no 5 (b11), Super Locrian Quartal Quadrad, 'Jimi Hendrix' ": [0, 3, 4, 10], "6 susb2": [0, 1, 7, 9], "Augmented Major 7 sus#4": [0, 6, 8, 11], "Diminished sus2 sus4": [0, 2, 5, 6] },
            "(4-24) Dominant 7 #5": { "Augmented 7, Super Locrian Quartal Triad (b13), 7 no 5 (b13)": [0, 4, 8, 10], "Augmented (#11), Diminished susb4 (b13)": [0, 4, 6, 8], "Augmented (9), Major Trichord (b13)": [0, 2, 4, 8], "Half-Diminished sus2, Lydian b7 Quartal Triad (9)": [0, 2, 6, 10] },
            "(4-25S) Dominant 7 b5": { "Dominant 7 b5, Half-Diminished susb4, Dominant 7 no 5 (#11)": [0, 4, 6, 10], "1st Inversion Dominant 7 b5, Augmented sus2 sus#4, Diminished sus2 (b13)": [0, 2, 6, 8] }
        },   
        "Diatonic to Harmonic Minor": {
        	"(4-7) Phrygian Major Tetrachord": { "1st Inversion Phrygian Major Tetrachord": [0, 3, 4, 11], "2nd Inversion Phrygian Major Tetrachord": [0, 1, 8, 9], "3rd Inversion Phrygian Major Tetrachord": [0, 7, 8, 11], "Phrygian Major Tetrachord": [0, 1, 4, 5] },
        	"(4-28S) Diminished 7": { "Diminished 7": [0, 3, 6, 9] },
        	"(4-18) Diminished Major 7": { "Diminished Major 7, Lydian Quartal Triad (#9)": [0, 3, 6, 11], "Diminished 7 no 5 (b13)": [0, 3, 8, 9], "Diminished sus4 (13), Diminished 7 sus4" [0, 5, 6, 9], "Major (b9)": [0, 1, 4, 7] },
        	"(4-17) Major (#9)": { "Major (#9), Minor (b11)": [0, 3, 4, 7], "Super Locrian bb7 Quartal Triad (b9), Phrygian Major Trichord (13)": [0, 1, 4, 9], "Minor Major 7 no 5 (b13), Augmented Major 7 sus#2": [0, 3, 8, 11], "Augmented sus4 (13)": [0, 5, 8, 9] },
        	"(4-18M) Minor (#11)": { "Minor (#11), sus#2 sus#4": [0, 3, 6, 7], "Lydian #2 Trichord (13), Super Locrian bb7 Quartal Quadrad": [0, 3, 4, 9], "Diminished 7 susb2, Diminished susb2 (13)": [0, 1, 6, 9], "Major Quartal Triad (b13), Augmented Major 7 sus4": [0, 5, 8, 11] },

        },    
        "Irregular" {
            "(4-2) Super Locrian bb3 Tetrachord": { "Phrygian bb3 b4 Tetrachord": [0, 1, 2, 4], "Minor Major 7 no5 (b9)": [0, 1, 3, 11], [0, 2, 10, 11], [0, 8, 9, 10] },
            "(4-5) Diminished bb3 (b9)": { "Diminished bb3 (b9)": [0, 1, 2, 6], "Ionian Quartal Triad (b9)": [0, 1, 5, 11], "Major 7 no 5 (13)": [0, 4, 10, 11], "sus#4 (b13)":[0, 6, 7, 8 ] },
            "(4-5M) Major b5 (11)": { "Chromatic Trichord (b13)": [0, 1, 2, 8], "Major 7 susb2": [0, 1, 7, 11], "Lydian Quartal Triad (#13)": [0, 6, 10, 11], "Major b5 (11)":[0, 4, 5, 6] },  
            "(4-2M) Minor b4 Tetrachord": { "1st Inversion Minor b4 Tetrachord": [0, 1, 2, 10], "2nd Inversion Minor b4 Tetrachord": [0, 1, 9, 11], "3rd Inversion Minor b4 Tetrachord":[0, 8, 10, 11], "Minor b4 Tetrachord":[0, 2, 3, 4] }
        	"(4-1) bb4 Tetrachord": { "bb4 Tetrachord": [0, 1, 2, 3], "1st Inversion bb4 Tetrachord": [0, 1, 2, 11], "2nd Inversion bb4 Tetrachord": [0, 1, 10, 11], "3rd Inversion bb4 Tetrachord": [0, 9, 10, 11] },
            "(4-4) Phrygian bb3 Tetrachord": { "Phrygian bb3 Tetrachord": [0, 1, 2, 5], "Major 7 no 5 (b9), 1st Inversion Phrygian bb3 Tetrachord": [[0, 1, 4, 11], "Minor Major 7 no 5 (#13), 2nd Inversion Phrygian bb3 Tetrachord": [0, 3, 10, 11], "3rd Inversion Phrygian bb3 Tetrachord": [0, 7, 8, 9] },
            "(4-6) Minor bb3 (b9)": { "Minor bb3 (b9)": [0, 1, 2, 7], "Lydian Quartal Triad (b9)": [0, 1, 6, 11], "Ionian Quartal Triad (#13)": [0, 5, 10, 11], "Major #3 (#11), Diminished sus4 (bb13)":[0, 5, 6, 7] },
            "(4-4M) bb3 Trichord (13)": { "bb3 Trichord (13)": [0, 1, 2, 9], "Augmented Major 7 susb2": [0, 1, 8, 11], "3rd Inversion Ionian #2 Tetrachord": [0, 7, 10, 11], "Ionian #2 Tetrachord":[0, 3, 4, 5] },
            "(4-9S) Diminished Major 7 sus4": { "susb2 sus#4": [0, 1, 6, 7], "Diminished Major 7 sus4": [0, 5, 6, 11] }
        } 
    },
	pentads: {
		"Diatonic Secundal": {
			"(5-Z12) Locrian Pentachord": { "Locrian Pentachord, Diminished (b9 11)": [0, 1, 3, 5, 6], "Major 7 no5 (9 11)": [0, 2, 4, 5, 11], "Minor 7 no5 (9, 13)": [0, 2, 3, 9, 10], "7 susb2 (b13)":[0, 1, 7, 8, 10],"Major 7 sus#4 (13)":[0, 6, 7, 9, 11] },
			"(5-23) Minor Pentachord": { "Minor Pentachord, Minor (9 11)": [0,2,3,5,7], "Minor 7 no5 (b9 11)": [0,1,3,5,10], "Major 7 no5 (9 13)": [0,2,4,9,11], "7 sus2 (13)": [0,2,7,9,10], "7 sus4 (b13)": [0,5,7,8,10]},
		    "(5-23M) Major Pentachord": { "Major Pentachord, Major (9 11)": [0,2,4,5,7], "Minor 7 no5 (9 11)": [0,2,3,5,10], "Minor 7 no5 (b9 b13)":[0,1,3,8,10], "Major 7 sus2 (13)":[0,2,7,9,11], "7 sus4 (13)":[0,5,7,9,10]},
		    "(5-24) Phrygian Pentachord": { "Phrygian Pentachord, Minor (b9 11)": [0,1,3,5,7], "Major 7 no5 (9 #11)": [0,2,4,6,11], "7 no 5 (9 13)": [0,2,4,9,10], "7 sus2 (b13)": [0,2,7,8,10], "Half-Diminished sus4 (b13)": [0,5,6,8,10] },
			"(5-24M) Lydian Pentachord": { "Lydian Pentachord, Major (9 #11)": [0,2,4,6,7], "7 no5 (9 11)": [0,2,4,5,10], "Minor 7 no5 (9 b13)": [0,2,3,8,10], "Half-Diminished susb2 (b13)": [0,1,6,8,10], "Major 7 sus4 (13)": [0,5,7,9,11] }
		},
		"Diatonic Tertial": {
			"(5-25) Half-Diminished (b9)": { "Minor Tetrachord (b13)": [0,2,3,5,8], "Half-Diminished (b9)": [0,1,3,6,10], "Ionian Quartal Triad ( 9 13 )": [0,2,5,9,11], "Minor 7 (b13)": [0,3,7,9,10], "Major ( #11 13 ), Major 6 (#11)": [0,4,6,7,9] },
			"(5-25M) Minor 7 (b9)": { "Diminished ( 11 b13 )": [0,3,5,6,8], "Minor Tetrachord (13)": [0,2,3,5,9], "Minor 7 (b9)": [0,1,3,7,10], "Lydian Quartal Triad ( 9 13 )": [0,2,6,9,11], "Dominant 7 (13)": [0,4,7,9,10] },
			"(5-27) Major 7 (9)": { "Phrygian Tetrachord (b13)": [0,1,3,5,8], "Major 7 (9)": [0,2,4,7,11], "Perfect Quartal Triad ( 9 13 )": [0,2,5,9,10], "Minor 7 (b13)": [0,3,7,8,10], "Major (11 13)": [0,4,5,7,9] },
			"(5-27M) Minor 7 (9)": { "Minor (11 b13)": [0,3,5,7,8], "Major Tetrachord (13)": [0,2,4,5,9], "Minor 7 (9)": [0,2,3,7,10], "Perfect Quartal Triad ( b9 b13 )": [0,1,5,8,10], "Major 7 (13)": [0,4,7,9,11] },
			"(5-34) Dominant 7 (9)": { "Lydian Tetrachord (13)": [0,2,4,6,9], "Dominant 7 (9)": [0,2,4,7,10], "Perfect Quartal Triad ( 9 b13 )": [0,2,5,8,10], "Half-Diminished (b13)": [0,3,6,8,10], "Minor (11 13)": [0,3,5,7,9] }
		}, 
		"Diatonic Quartal": {
			"(5-29) Dorian Quartal Pentad": { "Diminished ( b9 b13 )": [0,1,3,6,8], "Major 7 sus2 sus4": [0,2,5,7,11], "Dorian Quartal Pentad, Minor 7 no5 ( 11 b13 )": [0,3,5,9,10], "6 sus2 sus#4": [0,2,6,7,9], "Dominant 7 (11)": [0,4,5,7,10] },
			"(5-29M) Lydian Quartal Pentad": { "sus2 sus4 (b13)": [0,2,5,7,8], "Half-Diminished (11)": [0,3,5,6,10], "Minor ( 9 13 )": [0,2,3,7,9], "7 susb2 sus4": [0,1,5,7,10], "Lydian Quartal Pentad, Major 7 no5 ( #11 13 )": [0,4,6,9,11] },
			"(5-20) Mixolydian Quartal Pentad": { "Minor (b9 b13)": [0,1,3,7,8], "Major 7 sus2 sus#4": [0,2,6,7,11], "Mixolydian Quartal Pentad, Dominant 7 no5 ( 11 13 )": [0,4,5,9,10], "Diminished  susb2 sus4 (b13)": [0,1,5,6,8], "Major 7 (11)": [0,4,5,7,11] },
			"(5-20M) Ionian Quartal Pentad": { "susb2 sus4 (b13)": [0,1,5,7,8], "Major 7 (#11)": [0,4,6,7,11], "Minor (9 b13)": [0,2,3,7,8], "Half-Diminished susb2 sus4": [0,1,5,6,10], "Ionian Quartal Pentad, Major 7 no5 ( 11 13 )": [0,4,5,9,11] },
			"(5-35) Major/Minor Pentatonic": { "Major Pentatonic, Major ( 9 13 )": [0,2,4,7,9], "7 sus2 sus4": [0,2,5,7,10], "Minor Quartal Pentad, Minor 7 no 5 (11 b13)": [0,3,5,8,10], "6 sus2 sus4": [0,2,5,7,9], "Minor Pentatonic, Minor 7 (11)": [0,3,5,7,10] }
		},
		"Diatonic to Melodic Minor": {			
			"(5-33) Lydian Augmented Pentachord": { "Whole Tone Pentachord, Lydian Augmented Pentachord": [0,2,4,6,8], "Dominant 7 b5 (9)":[0,2,4,6,10], "Augmented 7 (9)":[0,2,4,8,10], "Augmented 7 sus2 (#11), Dominant 7 b5 sus2 (b13)":[0,2,6,8,10], "Augmented 7 (#11), Dominant7 b5 (b13) ":[0,4,6,8,10] },
			"(5-30M) Augmented Major 7 (#11)": { "Major (9 b13)": [0,2,4,7,8], "Half-Diminished sus2 sus4": [0,2,5,6,10], "Augmented 7 (#9), Super Locrian Quartal Pentad, Minor 7 no5 (b11 b13)": [0,3,4,8,10], "susb2 sus4 (b13)": [0,1,5,7,9], "Augmented Major 7 (#11)": [0,4,6,8,11] },
			"(5-28M) Dominant 7 b5 (#9)": { "Diminished sus2 sus4 (b13)": [0,2,5,6,8], "Dominant 7 b5 (#9), Half-Diminished (b11)": [0,3,4,6,10], "Minor 6 (b9)": [0,1,3,7,9], "Augmented Major 7 sus2 sus#4": [0,2,6,8,11], "Dominant 7 no5 ( #11 13 )": [0,4,6,9,10] },
			"(5-28) Dominant 7 (#11)": { "Diminished (9 b13)": [0,2,3,6,8], "Dominant 7 b5 (b9), Half-Diminished susb2 susb4": [0,1,4,6,10], "Melodic Minor Quartal Pentad, Minor Major 7 no5 ( 11 13 )": [0,3,5,9,11], "Augmented 6 sus2 sus#4": [0,2,6,8,9], "Dominant 7 (#11)": [0,4,6,7,10] },
			"(5-10M) Locrian nat2 Pentachord": { "Locrian nat2 Pentachord": [0,2,3,5,6], "Minor 7 no5 (b9 b11)": [0,1,3,4,10], "Minor Major 7 no5 (9 13)": [0,2,3,9,11], "7 susb2 (13)": [0,1,7,9,10], "Augmented Major 7 sus#4 (13)": [0,6,8,9,11] }
		},
		"Diatonic to Harmonic Minor": {
			"(5-32) Minor 7 (#11)": { "Diminished 7 susb2 susb4": [0,1,4,6,9], "Harmonic Minor Quartal Pentad, Minor Major 7 no5 ( 11 b13 )": [0,3,5,8,11], "Augmented 6 sus2 sus4": [0,2,5,8,9], "Minor 7 (#11)": [0,3,6,7,10], "Major 6 (#9)": [0,3,4,7,9] },
			"(5-31M) Dominant 7 (b9)": { "Diminished 7 (9), Minor #4 Tetrachord (13)": [0,2,3,6,9], "Dominant 7 (b9)": [0,1,4,7,10], "Diminished Major 7 (13), Lydian Quartal Trichord ( #9 13 )": [0,3,6,9,11], "Diminished 7 (b13)": [0,3,6,8,9], "Diminished (11 13), Diminished 7 (11)": [0,3,5,6,9] },
			"(5-31) Diminished 7 (b9)": { "Diminished 7 (b9)": [0,1,3,6,9], "Augmented Major 7 sus2 sus4": [0,2,5,8,11], "Half-Diminished 7 (13)": [0,3,6,9,10], "Minor 6 (#11)": [0,3,6,7,9], "Lydian #2 Tetrachord (13)": [0,3,4,6,9] },
			"(5-22) Augmented Major 7 (11)": { "Major ( b9 b13 )": [0,1,4,7,8], "Minor Major 7 (#11), Major 7 sus#2 sus#4": [0,3,6,7,11], "Augmented (#9 13), Diminished 7 no5 ( b11 b13 ), Super Locrian bb7 Quartal Pentad": [0,3,4,8,9], "Diminished 7 susb2 sus4, Diminished susb2 sus4 (13)": [0,1,5,6,9], "Augmented Major 7 (11), Harmonic Major Quartal Pentad": [0,4,5,8,11] },
			"(5-21) Major 7 (#9)": { "Augmented (b9 11), Phrygian Major Tetrachord (b13)": [0,1,4,5,8], "Major 7 (#9), Minor 7 (b11)": [0,3,4,7,11], "Super Locrian bb7 Quartal Triad (b9 b13), Augmented 6 (b9)": [0,1,4,8,9], "Minor Major 7 (b13)": [0,3,7,8,11], "Augmented 6 (11)": [0,4,5,8,9] },
			"(5-X18) Phrygian Major Pentachord": { "Phrygian Major Pentachord": [0,1,4,5,7], "Major 7 no5 (#9 #11)": [0,3,4,6,11], "Diminished 7 no5 (b9 b13)": [0,1,3,8,9], "Major 7 sus2 (b13)": [0,2,7,8,11], "Half-Diminished sus4 (13)": [0,5,6,9,10] },
			"(5-16M) Lydian #2 Pentachord": { "Lydian #2 Pentachord": [0,3,4,6,7], "Diminished 7 no5 (b9 b11)": [0,1,3,4,9], "Minor Major 7 no5 (9 b13)": [0,2,3,8,11], "Half-Diminished susb2 (13)": [0,1,6,9,10], "Augmented Major 7 sus4 (13)": [0,5,8,9,11] }
		},
		"Diatonic to Harmonic Major": {
			"(5-16) Phrygian b4 Pentachord": { "Phrygian b4 Pentachord": [0,1,3,4,7], "Diminished Major 7 (9)": [0,2,3,6,11], "Dominant 7 no 5 (b9 13)": [0,1,4,9,10], "Augmented Major 7 sus#2 (13)": [0,3,8,9,11], "Diminished 7 sus4 (b13)": [0,5,6,8,9] },
			"(5-32M) Dominant 7 (#9)": { "Major 6 (b9)": [0,1,4,7,9], "Diminished Major 7 (b13)": [0,3,6,8,11], "Super Locrian bb7 Quartal Pentad": [0,3,5,8,9], "Diminished 7 sus2 sus4, Diminished sus2 sus4 (13)": [0,2,5,6,9], "Dominant 7 (#9), Minor 7 (b11)": [0,3,4,7,10] },
			"(5-21M) Augmented Major 7 (#9)": { "Major ( #9 b13 ), Minor ( b11 b13 )": [0,3,4,7,8], "Phrygian Major Tetrachord (13)": [0,1,4,5,9], "Augmented Major 7 (#9)": [0,3,4,8,11], "Augmented 6 susb2 sus4": [0,1,5,8,9], "Major 7 (b13)": [0,4,7,8,11] },
			"(5-X18M) Minor #4 Tetrachord": { "Minor #4 Tetrachord": [0,2,3,6,7], "Mixolydian Quartal Triad (b9 11)": [0,1,4,5,10], "Major 7 no5 (#9 13)": [0,3,4,9,11], "Diminished 7 susb2 (b13)": [0,1,6,8,9], "Major 7 sus4 (b13)": [0,5,7,8,11] }
		},
		"Diatonic to Double Harmonic": {
			"(5-Y18M) Minor (#11 b13)": { "Minor (#11 b13)": [0,3,6,7,8], "Ionian #2 Tetrachord (13)": [0,3,4,5,9], "Diminished 7 bb3 (b9)": [0,1,2,6,9], "Ionian Quartal Triad (b9 b13), Augmented Major 7 susb2 sus4": [0,1,5,8,11], "Major 7 no5 (#13)": [0,4,7,10,11] },
			"(5-Y18) Major 7 (b9)": { "Phrygian bb3 Tetrachord (b13)": [0,1,2,5,8], "Major 7 (b9)": [0,1,4,7,11], "Lydian Quartal Triad (#9 #13)": [0,3,6,10,11], "Minor bb7 (b13)": [0,3,7,8,9], "Major b5 (11 13)": [0,4,5,6,9] },
			"(5-15) Dominant 7 b5 (11)": { "Diminished bb3 (b9 b13)": [0,1,2,6,8], "Major 7 susb2 sus4": [0,1,5,7,11], "Major 7 no5 (#11 #13), Lydian #6 Quartal Pentad": [0,4,6,10,11], "sus2 sus#4 (b13)": [0,2,6,7,8], "Dominant 7 b5 (11)": [0,4,5,6,10] },
			"(5-6M) Locrian nat3 Pentachord": { "Locrian nat3 Pentachord": [0,1,4,5,6], "Major 7 no5 (#9 11)": [0,3,4,5,11], "Diminished bb3 no5 (b9 b13)": [0,1,2,8,9], "Major 7 susb2 (b13)": [0,1,7,8,11], "Major 7 sus#4 (#13)": [0,6,7,10,11] },
			"(5-6) Locrian bb3 Pentachord": { "Locrian bb3 Pentachord": [0,1,2,5,6], "Major 7 no5 (b9 11)": [0,1,4,5,11], "Major 7 no5 (#9 #13)": [0,3,4,10,11], "Minor susb2 bb7 (b13)": [0,1,7,8,9], "Major 7 sus#4 (b13) ": [0,6,7,8,11] }
		},
		"Diatonic to Harmonic and Melodic Minor": { 
			"(5-30) Minor Major 7 (11)": { "Diminished susb2 susb4 (b13)": [0,1,4,6,8], "Minor Major 7 (11)": [0,3,5,7,11], "Augmented ( 9 13 )": [0,2,4,8,9], "7 sus2 sus#4": [0,2,6,7,10], "Mixolydian b6 Quartal Pentad, Dominant 7 no5 ( 11 b13 )": [0,4,5,8,10] },
			"(5-26M) Dominant 7 (b13)": { "Augmented (#9 #11), Diminished (b11 b13)": [0,3,4,6,8], "Phrygian Tetrachord (13)": [0,1,3,5,9], "Augmented Major 7 (9)": [0,2,4,8,11], "Lydian b7 Quartal triad ( 9 13 )": [0,2,6,9,10], "Dominant 7 (b13)": [0,4,7,8,10] },
			"(5-Z17) Minor Major 7 (9)": { "Super Locrian Tetrachord (b13)": [0,1,3,4,8], "Minor Major 7 (9)": [0,2,3,7,11], "Mixolydian Quartal Triad (b9 13)": [0,1,5,9,10], "Augmented Major 7 (13)": [0,4,8,9,11], "Major (11 b13)": [0,4,5,7,8] },
			"(5-26) Major (#11 b13 )": { "Major Tetrachord (b13)": [0,2,4,5,8], "Half-Diminished (9)": [0,2,3,6,10], "Augmented 7 (b9), Dominant 7 no5 (b9 b13)": [0,1,4,8,10], "Minor Major 7 (13)": [0,3,7,9,11], "Diminished 7 susb4 (b13)": [0,4,6,8,9] },
			"(5-10) Locrian b4 Pentachord": { "Locrian b4 Pentachord": [0,1,3,4,6], "Minor Major 7 (9 11)": [0,2,3,5,11], "Minor 7 (b9 13)": [0,1,3,9,10], "Augmented Major 7 sus2 (13)": [0,2,8,9,11], "7 sus#4 (13)": [0,6,7,9,10] }
		},
		"Irregular": {
			"(5-19M) Major (b9 #11)": { "Major (b9 #11)": [0,1,4,6,7], "Diminished Major 7 (11)": [0,3,5,6,11], "Diminished 7 no5 (9 b13)": [0,2,3,8,9], "7 susb2 sus#4": [0,1,6,7,10], "Diminished Major 7 sus4 (13)": [0,5,6,9,11] },
			"(5-19) Phrygian #4 Pentachord": { "Phrygian #4 Pentachord": [0,1,3,6,7], "Diminished Major 7 sus2 sus4": [0,2,5,6,11], "Dominant 7 no5 (#9 13)": [0,3,4,9,10], "6 susb2 sus#4": [0,1,6,7,9], "Diminished Major 7 sus4 (b13)": [0,5,6,8,11] },
			"(5-14M) Lydian #3 Pentachord": { "Lydian #3 Pentachord": [0,2,5,6,7], "Dominant 7 no5 (#9 11)": [0,3,4,5,10], "Minor 6 bb3 (b9) ": [0,1,2,7,9], "Augmented Major 7 susb2 sus#4, Lydian Quartal Triad (b9 b13)": [0,1,6,8,11], "Major 7 sus4 (#13)": [0,5,7,10,11] },
			"(5-14) Phrygian bb3 Pentachord": { "Phrygian bb3 Pentachord": [0,1,2,5,7], "Major 7 b5 (b9)": [0,1,4,6,11], "Minor Major 7 no5 (11 #13)": [0,3,5,10,11], "sus2 bb7 (b13)": [0,2,7,8,9], "Half-Diminished sus4 (b13)": [0,5,6,7,10] },
			"(5-13M) Major (#11 b13)": { "Minor b4 Tetrachord (b13)": [0,2,3,4,8], "Half-Diminished bb3 (b9)": [0,1,2,6,10], "Ionian Quartal Triad (b9 13)": [0,1,5,9,11], "Augmented Major 7 (#13)": [0,4,8,10,11], "Major (#11 b13)": [0,4,6,7,8] },
			"(5-13) Minor Major 7 (b9)": { "Phrygian bb3 b4 Tetrachord (b13)": [0,1,2,4,8], "Minor Major 7 (b9)": [0,1,3,7,11], "Lydian Quartal Triad (9 #13)": [0,2,6,10,11], "Augmented 7 (13)": [0,4,8,9,10], "Major b5 (11 b13)": [0,4,5,6,8] },
			"(5-17) Augmented Major 7 (b9)": { "Augmented (#9 11), Augmented #2 Pentachord, Major #2 Pentachord (b13)": [0,3,4,5,8], "Phrygian bb3 Tetrachord (13)": [0,1,2,5,9], "Augmented Major 7 (b9)": [0,1,4,8,11], "Minor Major 7 (#13)": [0,3,7,10,11], "Major bb7 (b13)": [0,4,7,8,9] },
			"(5-12M) Lydian #2 #3 Pentachord" : { "Lydian #2 #3 Pentachord": [0,3,5,6,7], "Minor b4 Tetrachord (13), Diminished 7 no5 (9 b11) ": [0,2,3,4,9], "Minor 7 bb3 (b9)": [0,1,2,7,10], "Lydian Quartal Triad (b9 13) ": [0,1,6,9,11], "Augmented Major 7 sus4 (#13)": [0,5,8,10,11] },
			"(5-12) Phrygian bb3 b4": { "Phrygian bb3 b4 Pentachord": [0,1,2,4,7], "Diminished Major 7 (b9)": [0,1,3,6,11], "Ionian Quartal Triad (9 #13)": [0,2,5,10,11], "Augmented 7 sus#2 (13)": [0,3,8,9,10], "Diminished 7 sus4 (bb13),  Major #3 (#11 13)": [0,5,6,7,9] },
			"(5-11M) Major #2 Pentachord": { "Major #2 Pentachord": [0,3,4,5,7], "Ionian": [0,1,2,4,9], "Minor Major 7 no5 (b9 b13)": [0,1,3,8,11], "Major 7 sus2 (#13)": [0,2,7,10,11], "Augmented 7 sus4 (13)": [0,5,8,9,10] },
			"(5-11) Minor b4 Pentachord": { "Minor b4 Pentachord": [0,2,3,4,7], "Minor 7 bb3 no5 (b9 11)": [0,1,2,5,10], "Major 7 no5 (b9 13)": [0,1,4,9,11], "Augmented Major 7 sus#2 (#13)": [0,3,8,10,11], "sus4 bb7 (b13)": [0,5,7,8,9] },
			"(5-9M) Major b5 Pentachord": { "Major b5 Pentachord": [0,2,4,5,6], "Minor 7 no5 (9 11)": [0,2,3,4,10], "Minor 7 bb3 no5 (b9 b13)": [0,1,2,8,10], "Major 7 susb2 (13)": [0,1,7,9,11], "Augmented Major 7 sus#4 (#13)": [0,6,8,10,11] },
			"(5-9) Locrian bb3 b4 Pentachord": { "Locrian bb3 b4 Pentachord": [0,1,2,4,6], "Minor Major 7 no5 (b9 11)": [0,1,3,5,11], "Major 7 no5 (9 #13)": [0,2,4,10,11], "Augmented 7 sus2 (13)": [0,2,8,9,10], "7 sus#4 (b13)": [0,6,7,8,10] },
			"(5-8) Locrian nat2 b4 Pentachord": { "Locrian nat2 b4 Pentachord": [0,2,3,4,6], "Minor 7 bb3 no5 (b9 b11)": [0,1,2,4,10], "Minor Major 7 no 5 (b9 13)": [0,1,3,9,11], "Augmented Major 7 sus2 (#13)": [0,2,8,10,11], "Augmented 7 sus#4 (13)": [0,6,8,9,10] },
			"(5-7M) Major 7 b5 (11)": { "Lydian b2 #3 Tetrachord": [0,1,5,6,7], "Major 7 b5 (11)": [0,4,5,6,11], "Minor bb3 (b9 b13)": [0,1,2,7,8], "Major 7 susb2 sus#4": [0,1,6,7,11], "Diminished Major 7 sus4 (#13)": [0,5,6,10,11] },
			"(5-7) bb3 #4 Pentachord": { "bb3 #4 Pentachord": [0,1,2,6,7], "Diminished Major 7 susb2 sus4": [0,1,5,6,11], "Ionian #6 Quartal Pentad, Major 7 no5 (11 #13)": [0,4,5,10,11], "susb2 sus#4 (b13)": [0,1,6,7,8], "Major 7 #3 (#11)": [0,5,6,7,11] },
			"(5-5M) Lydian ##2 #3 Pentachord": { "Lydian ##2 #3 Pentachord": [0,4,5,6,7], "bb4 Tetrachord (b13)": [0,1,2,3,8], "Minor Major 7 bb3 (b9)": [0,1,2,7,11], "Lydian Quartal Triad (b9 #13)": [0,1,6,10,11], "Major 7 ##5 sus4 (#13)": [0,5,9,10,11] },
			"(5-5) Phrygian bb3 bb4 Pentachord": { "Phrygian bb3 bb4 Pentachord": [0,1,2,3,7], "Diminished Major 7 bb3 (b9)": [0,1,2,6,11], "Ionian Quartal Triad (b9 #13)": [0,1,5,10,11], "Major 7 ##5 (#13)": [0,4,9,10,11], "Aeolian": [0,5,6,7,8] },
			"(5-4M) Major #2 b5 Pentachord": { "Major #2 b5 Pentachord": [0,3,4,5,6], "Diminished 7 bb3 no5 (b9 bb11) ": [0,1,2,3,9], "Augmented Major 7 bb3 (b9)": [0,1,2,8,11], "Major 7 susb2 (#13)": [0,1,7,10,11], "Major 7 ##5 sus#4 (#13)": [0,6,9,10,11] },
			"(5-4) Locrian bb3 bb4 Pentachord": { "Locrian bb3 bb4 Pentachord": [0,1,2,3,6], "Minor Major 7 bb3 no 5 (b9 11)": [0,1,2,5,11], "Major 7 no5 (b9 #13)": [0,1,4,10,11], "Minor Major 7 ##5 (#13)": [0,3,9,10,11], "sus#4 bb7 (b13)": [0,6,7,8,9] },
			"(5-3M) Phrygian b4 bb5 Pentachord": { "Phrygian b4 bb5 Pentachord": [0,1,3,4,5], "Minor Major 7 no 5 (9 b11)": [0,2,3,4,11], "Minor 7 bb3 no 5 (b9 13)": [0,1,2,9,10], "Augmented Major 7 susb2 (13)": [0,1,8,9,11], "Augmented Major 7 sus ##4 (#13)": [0,7,8,10,11] },
			"(5-3) Locrian bb3 b4 bb5 Pentachord": { "Locrian bb3 b4 bb5 Pentachord": [0,1,2,4,5], "Minor Major 7 no5 (b9 b11)": [0,1,3,4,11], "Minor Major 7 no5 (9 #13)": [0,2,3,10,11], "Augmented 7 susb2 (13)": [0,1,8,9,10], "Augmented Major 7 sus ##4 (13)": [0,7,8,9,11] },
			"(5-2M) Minor b4 bb5 Pentachord": { "Minor b4 bb5 Pentachord": [0,2,3,4,5], "Minor 7 bb3 no5 (b9 bb11)": [0,1,2,3,10], "Minor bb3 Major 7 (b9 13)": [0,1,2,9,11], "Augmented Major 7 susb2 (#13)": [0,1,8,10,11], "Phrygian nat3, Phrygian Dominant": [0,7,9,10,11] },
			"(5-2) Locrian bb3 bb4 bb5 Pentachord": { "Locrian bb3 bb4 bb5 Pentachord": [0,1,2,3,5], "Minor bb3 Major 7 no5 (b9 b11)": [0,1,2,4,11], "Minor Major 7 no5 (b9 #13)": [0,1,3,10,11], "Augmented Major 7 ##5 sus2": [0,2,9,10,11], "Augmented 7 sus##4 (13)": [0,7,8,9,10] },
			"(5-1) Chromatic Pentachord": { "Locrian bb3 bb4 bbb5 Pentachord": [0,1,2,3,4], "Minor Major 7 bb3 no5 (b9 bb11) ": [0,1,2,3,11], "Minor Major 7 bb3 no5 (b9 #13)": [0,1,2,10,11], "Augmented Major 7 ##5 susb2 (#13)": [0,1,9,10,11], "Augmented Major 7 ##5 sus##4 ": [0,8,9,10,11] }
	},
	septads: {
		"(7-35) Major Scale": { "Lydian": [0,2,4,6,7,9,11], "Ionian": [0,2,4,5,7,9,11], "Mixolydian": [0,2,4,5,7,9,10], "Dorian": [0,2,3,5,7,9,10], "Aeolian": [0,2,3,5,7,8,10], "Phrygian": [0,1,3,5,7,8,10], "Locrian": [0,1,3,5,6,8,10] },
		"(7-34) Melodic Minor": { "Melodic Minor, Ionian b3, Dorian nat7 ": [0,2,3,5,7,9,11], "Dorian b2, Phrygian nat6": [0,1,3,5,7,9,10], "Lydian Augmented": [0,2,4,6,8,9,11], "Lydian b7, Mixolydian #4, Overtone": [0,2,4,6,7,9,10], "Mixolydian b6, Aeolian nat3": [0,2,4,5,7,8,10], "Locrian nat2, Aeolian b5": [0,2,3,5,6,8,10], "Super Locrian, Locrian b4, Altered Dominant": [0,1,3,4,6,8,10] },
		"(7-32) Harmonic Minor": { "Harmonic Minor, Aeolian nat7": [0,2,3,5,7,8,11], "Locrian nat6": [0,1,3,5,6,9,10], "Ionian #5": [0,2,4,5,8,9,11], "Dorian #4": [0,2,3,6,7,9,10], "Phrygian nat3, Phrygian Dominant": [0,1,4,5,7,8,10], "Lydian #2": [0,3,4,6,7,9,11], "Locrian b4 bb7": [0,1,3,4,6,8,9] },
		"(7-32M) Harmonic Major": { "Harmonic Major, Ionian b6": [0,2,4,5,7,8,11], "Dorian b5": [0,2,3,5,6,9,10], "Phrygian b4": [0,1,3,4,7,8,10], "Lydian b3": [0,2,3,6,7,9,11], "Mixolydian b2": [0,1,4,5,7,9,10], "Lydian augmented #2": [0,3,4,6,8,9,11], "Locrian bb7": [0,1,3,5,6,8,9] },
		"(7-33) Neapolitan Major Family": { "Neapolitan Major, Melodic Minor b2, Phyrgian nat6 nat7, Dorian b2 nat7": [0,1,3,5,7,9,11], "Lydian #5 #6": [0,2,4,6,8,10,11], "Lydian #5 b7, Mixolydian #4 #5": [0,2,4,6,8,9,10], "Mixolydian #4 b6, Lydian b6 b7": [0,2,4,6,7,8,10], "Mixolydian b5 b6, Locrian nat2 nat3": [0,2,4,5,6,8,10], "Locrian nat2 b4": [0,2,3,4,6,8,10], "Locrian bb3 b4": [0,1,2,4,6,8,10] },
		"(7-31) Hungarian Major": { "Hungarian Major, Lydian #2 b7, Mixolydian #2 #4": [0,3,4,6,7,9,10], "Locrian b4 bb6 bb7": [0,1,3,4,6,7,9], "Locrian nat2 nat7": [0,2,3,5,6,8,11], "Locrian b4 nat6": [0,1,3,4,6,9,10], "Dorian #5 nat7, Melodic Minor #5": [0,2,3,5,8,9,11], "Dorian b2 #4, Phrygian #4 nat6": [0,1,3,6,7,9,10], "Lydian #3 #5": [0,2,5,6,8,9,11] },
		"(7-31M) Locrian nat2 bb7": { "Locrian nat2 bb7": [0,2,3,5,6,8,9], "Locrian b4 bb6": [0,1,3,4,6,7,10], "Melodic Minor b5, Ionian b3 b5, Dorian b5 nat7": [0,2,3,5,6,9,11], "Dorian b2 b4, Phrygian b4 nat6": [0,1,3,4,7,9,10], "Lydian b3 #5": [0,2,3,6,8,9,11], "Lydian b2 b7": [0,1,4,6,7,9,10], "Lydian #2 #3 #5": [0,3,5,6,8,9,11] },
		"(7-30M) Phrygian bb7": { "Phrygian bb7": [0,1,3,5,7,8,9], "Lydian b6": [0,2,4,6,7,8,11], "Mixolydian b5": [0,2,4,5,6,9,10], "Aeolian b4": [0,2,3,4,7,8,10], "Locrian bb3": [0,1,2,5,6,8,10], "Ionian b2": [0,1,4,5,7,9,11], "Lydian #2 #5 #6": [0,3,4,6,8,10,11] },
		"(7-30) Neapolitan Minor": { "Neapolitan Minor, Phrygian nat7": [0,1,3,5,7,8,11], "Lydian #6": [0,2,4,6,7,10,11], "Mixolydian #5": [0,2,4,5,8,9,10], "Aeolian #4": [0,2,3,6,7,8,10], "Locrian nat3": [0,1,4,5,6,8,10], "Ionian #2": [0,3,4,5,7,9,11], "Locrian bb3 b4 bb7": [0,1,2,4,6,8,9] },
		"(7-29M) Ionian b5": { "Ionian b5": [0,2,4,5,6,9,11], "Dorian b4": [0,2,3,4,7,9,10], "Phrygian bb3": [0,1,2,5,7,8,10], "Lydian b2": [0,1,4,6,7,9,11], "Lydian #2 #3 #5 #6": [0,3,5,6,8,10,11], "Aeolian bb7": [0,2,3,5,7,8,9], "Locrian bb6": [0,1,3,5,6,7,10] },
		"(7-29) Locrian nat7": { "Locrian nat7": [0,1,3,5,6,8,11], "Ionian #6": [0,2,4,5,7,10,11], "Dorian #5": [0,2,3,5,8,9,10], "Phrygian #4": [0,1,3,6,7,8,10], "Lydian #3": [0,2,5,6,7,9,11], "Mixolydian #2": [0,3,4,5,7,9,10], "Locrian bb3 b4 bb6 bb7": [0,1,2,4,6,7,9] },
		"(7-28M) Locrian nat2 b4 bb7": { "Locrian nat2 b4 bb7": [0,2,3,4,6,8,9], "Locrian bb3 b4 bb6": [0,1,2,4,6,7,10], "Locrian nat6 nat7": [0,1,3,5,6,9,11], "Ionian #5 #6": [0,2,4,5,8,10,11], "Dorian #4 #5": [0,2,3,6,8,9,10], "Phrygian nat3 #4": [0,1,4,6,7,8,10], "Lydian #2 #3": [0,3,5,6,7,9,11] },
		"(7-28) Locrian bb6 bb7": { "Locrian bb6 bb7": [0,1,3,5,6,7,9], "Ionian b5 b6": [0,2,4,5,6,8,11], "Dorian b4 b5": [0,2,3,4,6,9,10], "Phrygian bb3 b4": [0,1,2,4,7,8,10], "Lydian b2 b3": [0,1,3,6,7,9,11], "Lydian #3 #5 #6": [0,2,5,6,8,10,11], "Lydian #2 #5 #6": [0,3,4,6,8,9,10] },
		"(7-27M) Mixolydian b6 bb7": { "Mixolydian b6 bb7": [0,2,4,5,7,8,9], "Locrian nat2 bb6, Aeolian b5 bb6": [0,2,3,5,6,7,10], "Locrian b4 bb5": [0,1,3,4,5,8,10], "Ionian b3 b4, Melodic Minor b4": [0,2,3,4,7,9,11], "Dorian b2 bb3": [0,1,2,5,7,9,10], "Lydian b2 #5": [0,1,4,6,8,9,11], "Lydian #2 #3 ##4 #5 #6": [0,3,5,7,8,10,11] },
		"(7-27) Locrian b4 nat7": {"Locrian b4 nat7": [0,1,3,4,6,8,11], "Melodic Minor #6, Dorian #6 nat7, Ionian b3 #6": [0,2,3,5,7,10,11], "Dorian b2 #5, Phrygian #5 nat6": [0,1,3,5,8,9,10], "Lydian ##4 #5": [0,2,4,7,8,9,11], "Lydian #3 b7, Mixolydian #3 #4": [0,2,5,6,7,9,10], "Mixolydian #2 b6, Aeolian #2 nat3": [0,3,4,5,7,8,10], "Locrian bb3 b4 bb6 bb7": [0,1,2,4,5,7,9] },
		"(7-26M) Mixolydian b5 b6 bb7": { "Mixolydian b5 b6 bb7": [0,2,4,5,6,8,9], "Locrian b4 bb6": [0,2,3,4,6,7,10], "Locrian bb3 b4 bb5": [0,1,2,4,5,8,10], "Melodic Minor b2 b4, Ionian b2 b3 b4, Phrygian b4 nat6 nat7, Dorian b2 b4 nat7": [0,1,3,4,7,9,11], "Lydian b3 #5 #6": [0,2,3,6,8,10,11], "Mixolydian b2 #4 #5, Lydian b2 #5 b7": [0,1,4,6,8,9,10], "Lydian #2 #3 ##4 #5": [0,3,5,7,8,9,11] },
		"(7-26) Locrian nat2 b4 nat7": { "Locrian nat2 b4 nat7": [0,2,3,4,6,8,11], "Locrian bb3 b4 nat6": [0,1,2,4,6,9,10], "Melodic Minor b2 #5, Dorian b2 #5 nat7, Phrygian #5 nat6 nat7": [0,1,3,5,8,9,11], "Lydian ##4 #5 #6": [0,2,4,7,8,10,11], "Mixolydian #3 #4 #5, Lydian #3 #5 b7": [0,2,5,6,8,9,10], "Lydian #2 b6 b7, Mixolydian #2 #4 b6, Aeolian #2 #3 #4": [0,3,4,6,7,8,10], "Phrygian b4 bb5 bb6 bb7": [0,1,3,4,5,7,9] },
		"(7-25M) Locrian nat2 b4 nat6 nat 7": { "Locrian nat2 nat6 nat7": [0,2,3,4,6,9,11], "Phrygian bb3 b4 nat6 nat7": [0,1,2,4,7,9,10], "Lydian b2 b3 #5": [0,1,3,6,8,9,11], "Lydian #3 ##4 #5 #6": [0,2,5,7,8,10,11], "Lydian #2 #3 #5 b7": [0,3,5,6,8,9,10], "Locrian nat2 bb6 bb7, Aeolian b5 bb6 bb7": [0,2,3,5,6,7,9], "Locrian b4 bb5 bb6": [0,1,3,4,5,7,10] },
		"(7-25) Locrian b4 nat6 nat7": { "Locrian b4 nat6 nat7": [0,1,3,4,6,9,11], "Ionian b3 #5 #6, Melodic Minor #5 #6": [0,2,3,5,8,10,11], "Dorian b2 #4 #5, Phrygian #4 #5 nat6": [0,1,3,6,8,9,10], "Lydian #3 ##4 #5 #6": [0,2,5,7,8,9,11], "Lydian #2 #3 b7, Mixolydian #2 #3 #4": [0,3,5,6,7,9,10], "Locrian nat2 b4 bb6 bb7, Aeolian b4 b5 bb6 bb7": [0,2,3,4,6,7,9], "Locrian bb3 b4 bb5 bb6": [0,1,2,4,5,7,10] },
		"(7-24M) Enigmatic": { "Enigmatic, Lydian b6 bb7": [0,2,4,6,7,8,9], "Mixolydian b5 bb6 ": [0,2,4,5,6,7,10], "Aeolian b4 bb5": [0,2,3,4,5,8,10], "Locrian bb3 bb4": [0,1,2,3,6,8,10], "Ionian b2 bb3, Melodic Minor b2 bb3": [0,1,2,5,7,9,11], "Lydian b2 #5 #6": [0,1,4,6,8,10,11], "Lydian #2 #3 ##4 ##5 #6": [0,3,5,7,9,10,11] },
		"(7-24) Phrygian #6 nat7": { "Phrygian #6 nat7": [0,1,3,5,7,10,11], "Lydian ##5 #6": [0,2,4,6,9,10,11], "Lydian ##4 #5 b7": [0,2,4,7,8,9,10], "Lydian #3 b6 b7": [0,2,5,6,7,8,10], "Mixolydian #2 b5 b6": [0,3,4,5,6,8,10], "Locrian bb3 bb4 bb5 bb6 bb7": [0,1,2,3,5,7,9], "Locrian bb3 b4 nat 7": [0,1,2,4,6,8,11] },
		"(7-23M) Ionian b5 bb6 bb7": { "Ionian b5 bb6 bb7": [0,2,4,5,6,7,9], "Aeolian b4 bb5 bb6": [0,2,3,4,5,7,10], "Locrian bb3 bb4 bb5": [0,1,2,3,5,8,10], "Ionian b2 bb3 b4": [0,1,2,4,7,9,11], "Lydian b2 b3 #5 #6": [0,1,3,6,8,10,11], "Lydian #3 ##4 ##5 #6": [0,2,5,7,9,10,11], "Mixolydian #2 #3 ##4 #5": [0,3,5,7,8,9,10] },
		"(7-23) Phrygian #5 #6 nat7": { "Phrygian #5 #6 nat7": [0,1,3,5,8,10,11], "Lydian ##4 ##5 #6": [0,2,4,7,9,10,11], "Lydian #3 ##4 #5 b7": [0,2,5,7,8,9,10], "Lydian #2 #3 b6 b7": [0,3,5,6,7,8,10], "Locrian b4 bb5 bb6 bb7": [0,2,3,4,5,7,9], "Locrian bb3 bb4 bb5 bb6": [0,1,2,3,5,7,10], "Locrian bb3 b4 nat6 nat7": [0,1,2,4,6,9,11] },
		"(7-22) Double Harmonic/Hungarian Minor": { "Double Harmonic, Phrygian nat3 nat7, Ionian b2 b6": [0,1,4,5,7,8,11], "Lydian #2 #6": [0,3,4,6,7,10,11], "Phrygian b4 bb7": [0,1,3,4,7,8,9], "Hungarian Minor, Aeolian #4 nat7, Lydian b3 b6": [0,2,3,6,7,8,11], "Mixolydian b2 b5, Locrian nat3 nat6": [0,1,4,5,6,9,10], "Ionian #2 #5": [0,3,4,5,8,9,11], "Locrian bb3 bb6": [0,1,2,5,6,8,9] },
		"(7-21M) Ionian b2 #5": { "Ionian b2 #5": [0,1,4,5,8,9,11], "Lydian #2 ##4 #5 #6": [0,3,4,7,8,10,11], "Phrygian nat3 bb7, Mixolydian b2 b6 bb7": [0,1,4,5,7,8,9], "Lydian #2 b6": [0,3,4,6,7,8,11], "Locrian b4 bb5 bb7": [0,1,3,4,5,8,9], "Aeolian b4 nat7, Harmonic Minor b4": [0,2,3,4,7,8,11], "Locrian bb3 nat6": [0,1,2,5,6,9,10] },
		"(7-21) Ionian #2 b6": { "Ionian #2 b6": [0,3,4,5,7,8,11], "Locrian bb3 b4 bb5 bb7": [0,1,2,4,5,8,9], "Phrygian b4 nat7": [0,1,3,4,7,8,11], "Lydian b3 #6": [0,2,3,6,7,10,11], "Mixolydian b2 #5": [0,1,4,5,8,9,10], "Lydian #2 ##4 #5": [0,3,4,7,8,9,11], "Locrian nat3 bb7": [0,1,4,5,6,8,9] },
		"(7-20M) Composite II, Ionian #2 #5 #6": { "Composite II, Ionian #2 #5 #6": [0,3,4,5,8,10,11], "Phrygian bb3 bb7": [0,1,2,5,7,8,9], "Lydian b2 b6": [0,1,4,6,7,8,11], "Lydian #2 #3 #6": [0,3,5,6,7,10,11], "Aeolian b4 bb7": [0,2,3,4,7,8,9], "Locrian bb3 bb6": [0,1,2,5,6,7,10], "Locrian nat3 nat6 nat7, Ionian b2 b5": [0,1,4,5,6,9,11] },
		"(7-20) Persian, Ionian #2 #6": { "Persian, Ionian #2 #6": [0,3,4,5,7,10,11], "Phrygian bb2 b4 bb7": [0,1,2,4,7,8,9], "Phrygian #4 nat7, Lydian b2 b3 b6": [0,1,3,6,7,8,11], "Lydian #3 #6": [0,2,5,6,7,10,11], "Mixolydian #2 #5": [0,3,4,5,8,9,10], "Locrian bb3 bb6 bb7": [0,1,2,5,6,7,9], "Locrian nat 3 nat7, Ionian b2 b5 b6": [0,1,4,5,6,8,11] },
		"(7-19M) Ionian #2 b5": { "Ionian #2 b5": [0,3,4,5,6,9,11], "Locrian bb3 bb4 bb7": [0,1,2,3,6,8,9], "Phrygian bb3 nat7, Ionian b2 bb3 b6": [0,1,2,5,7,8,11], "Lydian b2 #6": [0,1,4,6,7,10,11], "Lydian #2 #3 #5 #6": [0,3,5,6,9,10,11], "Aeolian #4 bb7, Lydian b3 b6 bb7": [0,2,3,6,7,8,9], "Locrian nat3 bb6": [0,1,4,5,6,7,10] },
		"(7-19) Enigmatic Minor, Ionian #2 b5 b6": { "Ionian #2 b5 b6": [0,3,4,5,6,8,11], "Locrian bb3 bb4 bb5 bb7": [0,1,2,3,5,8,9], "Phrygian bb3 b4 nat7": [0,1,2,4,7,8,11], "Phrygian #4 #6 nat7": [0,1,3,6,7,10,11], "Lydian #3 ##5 #6": [0,2,5,6,9,10,11], "Mixolydian #2 ##4 #5": [0,3,4,7,8,9,10], "Locrian nat3 bb6 bb7": [0,1,4,5,6,7,9] },
		"(7-Y18M) Locrian b4 bb6 bbb7": { "Locrian b4 bb6 bbb7": [0,1,3,4,6,7,8], "Locrian nat2 bb6 nat7": [0,2,3,5,6,7,11], "Locrian b4 bb5 nat6": [0,1,3,4,5,9,10], "Dorian b4 #5 nat7": [0,2,3,4,8,9,11], "Dorian b2 bb3 #4, Phrygian bb3 #4 nat6": [0,1,2,6,7,9,10], "Lydian b2 #5": [0,1,5,6,8,9,11], "Lydian ##2 #3 ##4 #5 #6": [0,4,5,7,8,10,11] },
		"(7-Y18) Locrian b4 bb6 nat7": { "Locrian b4 bb6 nat7": [0,1,3,4,6,7,11], "Locrian nat2 #6 nat7": [0,2,3,5,6,10,11], "Phrygian b4 #5 nat6, Dorian b2 b4 #5": [0,1,3,4,8,9,10], "Dorian ##4 #5 nat7": [0,2,3,7,8,9,11], "Lydian b2 #3 b7, Mixolydian b2 #3 #4": [0,1,5,6,7,9,10], "Lydian ##2 #3 #5": [0,4,5,6,8,9,11], "Locrian bb3 b4 bb6 bbb7": [0,1,2,4,5,7,8] },
		"(7-X18M) Lydian b2 b6 bb7": { "Lydian b2 b6 bb7": [0,1,4,6,7,8,9], "Lydian #2 #3 b6": [0,3,5,6,7,8,11], "Locrian nat2 b4 bb5 bb7": [0,2,3,4,5,8,9], "Locrian bb3 bb4 b5 bb6": [0,1,2,3,6,7,10], "Locrian bb3 nat6 nat7": [0,1,2,5,6,9,11], "Ionian b2 #5 #6": [0,1,4,5,8,10,11], "Lydian #2 #3 ##4 ##5 #6": [0,3,4,7,9,10,11] },
		"(7-X18) Phrygian #4 #6 nat7": { "Phrygian #4 #6 nat7": [0,1,3,6,7,10,11], "Lydian #3 ##5 #6": [0,2,5,6,9,10,11], "Mixolydian #2 ##4 #5, Lydian #2 ##4 #5 b7": [0,3,4,7,8,9,10], "Locrian nat3 bb6 bb7": [0,1,4,5,6,7,9], "Ionian #2 b5 b6": [0,3,4,5,6,8,11], "Locrian bb3 bb4 bb5 bb7": [0,1,2,3,5,8,9], "Phrygian bb3 b4 nat7": [0,1,2,4,7,8,11] },
		"(7-Z17) Dorian b4 #6 nat7": { "Dorian b4 #6 nat7, Melodic b4 #6": [0,2,3,4,7,10,11], "Phrygian bb3 #5 nat6, Dorian b2 bb3 #5": [0,1,2,5,8,9,10], "Lydian b2 ##4 #5": [0,1,4,7,8,9,11], "Lydian #2 #3 ##4 #5 #6": [0,3,6,7,8,10,11], "Mixolydian #2 b6 bb7": [0,3,4,5,7,8,9], "Locrian bb3 b4 bb5 bb6 bb7": [0,1,2,4,5,6,9], "Locrian b4 bb5 nat7": [0,1,3,4,5,8,11] },
		"(7-17) Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6": { "Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6": [0,2,3,4,6,7,11], "Locrian bb3 b4 bb5 nat6": [0,1,2,4,5,9,10], "Dorian b2 b4 #5 nat7": [0,1,3,4,8,9,11], "Dorian ##4 #5 #6 nat7": [0,2,3,7,8,10,11], "Mixolydian b2 #3 #4 #5": [0,1,5,6,8,9,10], "Lydian ##2 #3 ##4 #5": [0,4,5,7,8,9,11], "Locrian b4 bb5 bb6 bbb7": [0,1,3,4,5,7,8] },
		"(7-16M) Lydian #2 b6 bb7": { "Lydian #2 b6 bb7": [0,3,4,6,7,8,9], "Locrian b4 bb5 bbb6 bbb7": [0,1,3,4,5,6,9], "Locrian nat2 b4 bb5 nat7": [0,2,3,4,5,8,11], "Locrian bb3 bb4 nat6": [0,1,2,3,6,9,10], "Phrygian bb3 #5 nat6, Dorian b2 bb3 #5": [0,1,2,5,8,9,11], "Lydian b2 ##4 #5 #6": [0,1,4,7,8,10,11], "Lydian #2 ##3 ##4 ##5 #6": [0,3,6,7,9,10,11] },
		"(7-16) Phrygian b4 #6 nat7": { "Phrygian b4 #6 nat7": [0,1,3,4,7,10,11], "Lydian b3 ##5 #6, Dorian #4 ##5 #6 nat7": [0,2,3,6,9,10,11], "Mixolydian b2 ##4 #5": [0,1,4,7,8,9,10], "Lydian #2 ##3 ##4 #5": [0,3,6,7,8,9,11], "Mixolydian #2 b5 b6 bb7, Locrian #2 nat3 bb7": [0,3,4,5,6,8,9], "Locrian bb3 bb4 bb5 bbb6 bb7": [0,1,2,3,5,6,9], "Locrian bb3 bb4 bb5 nat7": [0,1,2,4,5,8,11] },
		"(7-15) Ionian b5 #6": { "Ionian b5 #6": [0,2,4,5,6,10,11], "Dorian b4 #5": [0,2,3,4,8,9,10], "Phrygian bb3 #4": [0,1,2,6,7,8,10], "Lydian b2 #3": [0,1,5,6,7,9,11], "Lydian ##2 #3 #5 #6": [0,4,5,6,8,10,11], "Locrian bb3 b4 bb6 bbb7": [0,1,2,4,6,7,8], "Locrian bb3 bb6 nat7": [0,1,3,5,6,7,11] },
		"(7-14M) Locrian bb6 bbb7": { "Locrian bb6 bbb7": [0,1,3,5,6,7,8], "Ionian b5 bb6": [0,2,4,5,6,7,11], "Dorian b4 bb5": [0,2,3,4,5,9,10], "Phrygian bb3 bb4": [0,1,2,3,7,8,10], "Lydian b2 bb3": [0,1,2,6,7,9,11], "Lydian b2 #3 #5 #6": [0,1,5,6,8,10,11], "Lydian ##2 #3 ##4 ##5 #6": [0,4,5,7,9,10,11] },
		"(7-14) Locrian bb3 b4 bb6 nat7": { "Locrian bb3 b4 bb6 nat7": [0,1,2,4,6,7,11], "Locrian #6 nat7": [0,1,3,5,6,10,11], "Ionian ##5 #6": [0,2,4,5,9,10,11], "Dorian ##4 #5": [0,2,3,7,8,9,10], "Phrygian #3 #4": [0,1,5,6,7,8,10], "Lydian ##2 #3": [0,4,5,6,7,9,11], "Locrian bb3 bb4 bb5 bb6 bbb7": [0,1,2,3,5,7,8] },
		"(7-13M) Dorian b4 #5 #6 nat7": { "Dorian b4 #5 #6 nat7": [0,2,3,4,8,10,11], "Phrygian bb3 #4 #5 nat6": [0,1,2,6,8,9,10], "Lydian b2 #3 ##4 #5": [0,1,5,7,8,9,11], "Lydian ##2 ##3 ##4 #5 #6": [0,4,6,7,8,10,11], "Locrian nat2 b4 bb5 bb6 bbb7": [0,2,3,4,6,7,8], "Locrian bb3 b4 bb5 bbb6": [0,1,2,4,5,6,10], "Locrian b4 bb5 nat6 nat7": [0,1,3,4,5,9,11] },
		"(7-13) Locrian b4 bb5 bb6 nat7": { "Locrian b4 bb5 bb6 nat7": [0,1,3,4,5,7,11], "Locrian nat2 b4 #6 nat7": [0,2,3,4,6,10,11], "Dorian b2 bb3 #5, Phrygian bb3 #5 nat6": [0,1,2,4,8,9,10], "Dorian b2 ##4 #5 nat7, Phrygian ##4 #5 nat6 nat7": [0,1,3,7,8,9,11], "Lydian ##3 ##4 #5 #6": [0,2,6,7,8,10,11], "Mixolydian ##2 #3 #4 #5, Lydian ##2 #3 #5 b7": [0,4,5,6,8,9,10], "Locrian bb3 b4 bb5 bbb6 bbb7": [0,1,2,4,5,6,8] },
		"(7-Z12) Mixolydian #2 b5 bb6": { "Mixolydian #2 b5 bb6": [0,3,4,5,6,7,10], "Locrian bb3 bb4 bbb5 bb6 bb7": [0,1,2,3,4,7,9], "Locrian bb3 bb4 nat7": [0,1,2,3,6,8,11], "Phrygian bb3 #6 nat7": [0,1,2,5,7,10,11], "Lydian b2 ##5 #6": [0,1,4,6,9,10,11], "Lydian #2 #3 ###4 ##5 #6": [0,3,5,8,9,10,11], "Aeolian #3 #4 bb7": [0,2,5,6,7,8,9] },
		"(7-12M) Locrian nat2 bb6 bbb7": { "Locrian nat2 bb6 bbb7": [0,2,3,5,6,7,8], "Locrian b4 bb5 bbb6": [0,1,3,4,5,6,10], "Dorian b4 bb5 nat7": [0,2,3,4,5,9,11], "Dorian b2 bb3 bb4, Phrygian bb3 bb4 nat6": [0,1,2,3,7,9,10], "Lydian b2 bb3 #5": [0,1,2,6,8,9,11], "Lydian b2 #3 ##4 #5 #6": [0,1,5,7,8,10,11], "Lydian ##2 ##3 ##4 ##5 #6": [0,4,6,7,9,10,11] },
		"(7-12) Dorian b2 ##4 #5": { "Dorian b2 ##4 #5": [0,1,3,7,8,9,10], "Lydian ##3 ##4 #5": [0,2,6,7,8,9,11], "Lydian ##2 #3 b7, Mixolydian ##2 #3 #4": [0,4,5,6,7,9,10], "Locrian bb3 bb4 bb5 bbb6 bbb7": [0,1,2,3,5,6,8], "Locrian bb3 b4 bb5 bb6 nat7": [0,1,2,4,5,7,11], "Locrian b4 #6 nat7": [0,1,3,4,6,10,11], "Dorian ##5 #6 nat7": [0,2,3,5,9,10,11] },
		"(7-11M) Phrygian b4 #5 #6 nat7": { "Phrygian b4 #5 #6 nat7": [0,1,3,4,8,10,11], "Dorian ##4 ##5 #6 nat7": [0,2,3,7,9,10,11], "Lydian b2 ##3 ###4 ##5 #6": [0,1,6,8,9,10,11], "Lydian ###2 ###3 ###4 ##5 #6": [0,5,7,8,9,10,11], "Aeolian b4 bb5 bbb6 bbbb7": [0,2,3,4,5,6,7], "Locrian bb3 bb4 bbb5 bbbb6": [0,1,2,3,4,5,10], "Locrian bb3 bb4 bbb5 #6 nat7": [0,1,2,3,4,9,11] },
		"(7-11) Aeolian b4 bb5 bb6 nat7": { "Aeolian b4 bb5 bb6 nat7": [0,2,3,4,5,7,11], "Locrian bb3 bb4 bb5 nat6": [0,1,2,3,5,9,10], "Ionian b2 bb3 #5": [0,1,2,4,8,9,11], "Phrygian ##4 #5 #6 nat7": [0,1,3,7,8,10,11], "Lydian ##3 ##4 ##5 #6": [0,2,6,7,9,10,11], "Mixolydian ##2 #3 ##4 #5": [0,4,5,7,8,9,10], "Locrian b4 bb5 bbb6 bbb7": [0,1,3,4,5,6,8] },
		"(7-10M) Aeolian b4 bb5 bbb6 bb7": { "Aeolian b4 bb5 bbb6 bb7": [0,2,3,4,5,6,9], "Locrian bb3 bb4 bbb5 bb6": [0,1,2,3,4,7,10], "Locrian bb3 bb4 nat6 nat7": [0,1,2,3,6,9,11], "Ionian b2 bb3 #5 #6": [0,1,2,5,8,10,11], "Lydian b2 ##4 ##5 #6": [0,1,4,7,9,10,11], "Lydian #2 ##3 ###4 ##5 #6": [0,3,6,8,9,10,11], "Lydian #2 #3 b6 bb7": [0,3,5,6,7,8,9] },
		"(7-10) Mixolydian #2 b5 bb6 bb7": { "Mixolydian #2 b5 bb6 bb7": [0,3,4,5,6,7,9], "Locrian bb3 bb4 bbb5 bbb6 bb7": [0,1,2,3,4,6,9], "Locrian bb3 bb4 bb5 nat7": [0,1,2,3,5,8,11], "Ionian b2 bb3 b4 #6": [0,1,2,4,7,10,11], "Lydian b2 b3 ##5 #6": [0,1,3,6,9,10,11], "Lydian #3 ###4 ##5 #6": [0,2,5,8,9,10,11], "Mixolydian #2 ##3 ##4 #5": [0,3,6,7,8,9,10] },
		"(7-9M) Mixolydian b5 bb6 bbb7": { "Mixolydian b5 bb6 bbb7": [0,2,4,5,6,7,8], "Locrian b4 bb5 bbb6": [0,2,3,4,5,6,10], "Locrian bb3 bb4 bbb5": [0,1,2,3,4,8,10], "Dorian b2 bb3 bb4 nat7": [0,1,2,3,7,9,11], "Lydian b2 bb3 #5 #6": [0,1,2,6,8,10,11], "Lydian b2 #3 ##4 ##5 #6": [0,1,5,7,9,10,11], "Lydian ##2 ##3 ###4 ##5 #6": [0,4,6,8,9,10,11] },
		"(7-9) Phrygian ##5 #6 nat7": { "Phrygian ##5 #6 nat7": [0,1,3,5,9,10,11], "Lydian ###4 ##5 #6": [0,2,4,8,9,10,11], "Mixolydian ##3 ##4 #5": [0,2,6,7,8,9,10], "Mixolydian ##2 #3 #4 b6": [0,4,5,6,7,8,10], "Locrian bb3 bb4 bbb5 bb6 bbb7": [0,1,2,3,4,6,8], "Locrian bb3 bb4 bb5 bb6 nat7": [0,1,2,3,5,7,11], "Locrian bb3 #6 nat7": [0,1,2,4,6,10,11] },
		"(7-8) Phrygian ##4 ##5 #6 nat7": { "Phrygian ##4 ##5 #6 nat7": [0,1,3,7,9,10,11], "Lydian ##3 ###4 ##5 #6": [0,2,6,8,9,10,11], "Mixolydian ##2 ##3 ##4 #5": [0,4,6,7,8,9,10], "Aeolian b3 bb5 bbb6 bbb7": [0,2,3,4,5,6,8], "Locrian bb3 bb4 bbb5 bbb6": [0,1,2,3,4,6,10], "Locrian bb3 bb4 bb5 nat6 nat7": [0,1,2,3,5,9,11], "Dorian b2 bb3 #5 #6 nat7": [0,1,2,4,8,10,11] },
		"(7-7M) Ionian b2 b5 bb6": { "Ionian b2 b5 bb6": [0,1,4,5,6,7,11], "Ionian #2 b5 #6": [0,3,4,5,6,10,11], "Phrygian bb3 bb4 bb7": [0,1,2,3,7,8,9], "Lydian b2 bb3 b6": [0,1,2,6,7,8,11], "Lydian b2 #3 #6": [0,1,5,6,7,10,11], "Lydian ##2 #3 ##5 #6": [0,4,5,6,9,10,11], "Locrian bb3 bb6 bbb7": [0,1,2,5,6,7,8] },
		"(7-7) Ionian #2 ##5 #6": { "Ionian #2 ##5 #6": [0,3,4,5,9,10,11], "Phrygian bb3 #4 bb7": [0,1,2,6,7,8,9], "Lydian b2 #3 b6": [0,1,5,6,7,8,11], "Lydian ##2 #3 #6": [0,4,5,6,7,10,11], "Locrian bb3 bb4 bb6 bbb7": [0,1,2,3,6,7,8], "Locrian bb3 bb6 nat7": [0,1,2,5,6,7,11], "Locrian nat3 #6": [0,1,4,5,6,10,11] },
		"(7-6M) Ionian #2 b5 bb6": { "Ionian #2 b5 bb6": [0,3,4,5,6,7,11], "Locrian bb3 bb4 bbb5 bb7": [0,1,2,3,4,8,9], "Phrygian bb3 bb4 nat7": [0,1,2,3,7,8,11], "Lydian b2 bb3 #6": [0,1,2,6,7,10,11], "Lydian b2 #3 ##5 #6": [0,1,5,6,9,10,11], "Lydian ##2 #3 ###4 ##5 #6": [0,4,5,8,9,10,11], "Locrian nat3 bb6 bbb7": [0,1,4,5,6,7,8] },
		"(7-6) Ionian b2 ##5 #6": { :"Ionian b2 ##5 #6": [0,1,4,5,9,10,11], "Lydian #2 ###4 ##5 #6": [0,3,4,8,9,10,11], "Lydian b2 #3 b6 bb7": [0,1,5,6,7,8,9], "Lydian ##2 #3 b6": [0,4,5,6,7,8,11], "Locrian bb3 bb4 bbb5 bb6 bbb7": [0,1,2,3,4,7,8], "Locrian bb3 bb4 bb6 nat7": [0,1,2,3,6,7,11], "Locrian bb3 #6 nat7": [0,1,2,5,6,10,11] },
		"(7-5M) Locrian b4 bb5 bbb6 nat7": { "Locrian b4 bb5 bbb6 nat7": [0,1,3,4,5,6,11], "Dorian b4 bb5 #6 nat7": [0,2,3,4,5,10,11], "Dorian b2 bb3 bb4 #5": [0,1,2,3,8,9,10], "Lydian b2 bb3 ##4 #5": [0,1,2,7,8,9,11], "Lydian b2 ##3 ##4 #5 #6": [0,1,6,7,8,10,11], "Lydian ###2 ##3 ##4 ##5 #6": [0,5,6,7,9,10,11], "Locrian bb3 b4 bb5 bbb6 bbbb7": [0,1,2,4,5,6,7] },
		"(7-5) Locrian b4 bb5 #6 nat7": { "Locrian b4 bb5 #6 nat7": [0,1,3,4,5,10,11], "Dorian b4 ##5 #6": [0,2,3,4,9,10,11], "Dorian b2 bb3 ##4 #5": [0,1,2,7,8,9,10], "Lydian b2 ##4 #5": [0,1,6,7,8,9,11], "Lydian ###2 ##3 ##4 #5 #6": [0,5,6,7,8,10,11], "Locrian bb3 bb4 bb5 bbb6 bbbb7": [0,1,2,3,5,6,7], "Locrian bb3 bb4 bb5 bbb6 nat7": [0,1,2,4,5,6,11] },
		"(7-4M) Locrian b4 bb5 bbb6 bbbb7": { "Locrian b4 bb5 bbb6 bbbb7": [0,1,3,4,5,6,7], "Aeolian b4 bb5 bbb6 nat7": [0,2,3,4,5,6,11], "Dorian b2 bb3 bb4 bbb5": [0,1,2,3,4,9,10], "Dorian b2 bb3 bb4 #5 nat7": [0,1,2,3,8,9,11], "Lydian b2 bb3 ##4 #5 #6": [0,1,2,7,8,10,11], "Lydian b2 ##3 ##4 ##5 #6": [0,1,6,7,9,10,11], "Lydian ###2 ##3 ###4 ##5 #6": [0,5,6,8,9,10,11] },
		"(7-4) Lydian ###2 ##3 ##4 #5": { "Lydian ###2 ##3 ##4 #5": [0,5,6,7,8,9,11], "Locrian b2 bb3 bb4 bbb5 bbb6 bbbb7": [0,1,2,3,4,6,7], "Locrian b2 bb3 bb4 bb5 bbb6 nat7": [0,1,2,3,5,6,11], "Locrian b2 bb3 b4 bb5 #6 nat7": [0,1,2,4,5,10,11], "Dorian b2 b4 ##5 #6 nat7": [0,1,3,4,9,10,11], "Dorian ###4 ##5 #6 7": [0,2,3,8,9,10,11], "Mixolydian b2 ##3 ##4 #5": [0,1,6,7,8,9,10] },
		"(7-3M) Mixolydian #2 b5 bb6 bbb7": { "Mixolydian #2 b5 bb6 bbb7": [0,3,4,5,6,7,8], "Locrian bb3 bb4 bbb5 bbbb6 bbb7": [0,1,2,3,4,5,8], "Locrian bb3 bb4 bbb5 bb6 nat7": [0,1,2,3,4,7,11], "Locrian bb3 bb4 #6 nat7": [0,1,2,3,6,10,11], "Ionian b2 bb3 ##5 #6 nat7": [0,1,2,5,9,10,11], "Lydian b2 ###4 ##5 #6": [0,1,4,8,9,10,11], "Lydian #2 ###3 ###4 ##5 #6": [0,3,7,8,9,10,11] },
		"(7-3) Locrian bb3 bb4 bbb5 bbbb6 bbb7": { "Lydian": [0,1,2,3,4,5,8], "Locrian bb3 bb4 bbb5 bb6 nat7": [0,1,2,3,4,7,11], "Locrian bb3 bb4 #6 nat7": [0,1,2,3,6,10,11], "Dorian b2 bb3 ##5 #6 nat7": [0,1,2,5,9,10,11], "Lydian b2 ###4 ##5 #6": [0,1,4,8,9,10,11], "Lydian #2 ###3 ###4 ##5 #6": [0,3,7,8,9,10,11], "Lydian ##2 #3 b6 bb7": [0,4,5,6,7,8,9] },
		"(7-2M) Aeolian b4 bb5 bbb6 bbbb7": { "Aeolian b4 bb5 bbb6 bbbb7": [0,2,3,4,5,6,7], "Locrian bb3 bb4 bbb5 bbbb6": [0,1,2,3,4,5,10], "Locrian bb3 bb4 bbb5 nat6 nat7": [0,1,2,3,4,9,11], "Dorian b2 bb3 bb4 #5 #6 nat7": [0,1,2,3,8,10,11], "Lydian b2 bb3 ##4 ##5 #6": [0,1,2,7,9,10,11], "Lydian b2 ##3 ###4 ##5 #6": [0,1,6,8,9,10,11], "Lydian ###2 ###3 ###4 ##5 #6": [0,5,7,8,9,10,11] },
		"(7-2) Locrian bb3 bb4 bbb5 bbbb6 bbbb7": { "Locrian bb3 bb4 bbb5 bbbb6 bbbb7": [0,1,2,3,4,5,7], "Locrian bb3 bb4 bbb5 bbb6 nat7": [0,1,2,3,4,6,11], "Locrian bb3 bb4 bb5 #6 nat7": [0,1,2,3,5,10,11], "Dorian b2 bb3 b4 ##5 #6 nat7": [0,1,2,4,9,10,11], "Phrygian ###4 ##5 #6 nat7": [0,1,3,8,9,10,11], "Lydian ###3 ###4 ##5 #6": [0,2,7,8,9,10,11], "Mixolydian ###2 ##3 ##4 #5": [0,5,6,7,8,9,10] },
		"(7-1) Chromatic Septachord": { "Chromatic Septachord, Locrian bb3 bb4 bbb5 bbbb6 bbbbb7": [0,1,2,3,4,5,6], "Locrian bb3 bb4 bbb5 bbbb6 nat7": [0,1,2,3,4,5,11], "Locrian bb3 bb4 bbb5 #6 nat7": [0,1,2,3,4,10,11], "Dorian b2 bb3 bb4 ##5 #6 nat7": [0,1,2,3,9,10,11], "Lydian b2 bb3 ###4 ##5 #6": [0,1,2,8,9,10,11], "Lydian b2 ###3 ###4 ##5 #6": [0,1,7,8,9,10,11], "Lydian  ####2 ###3 ###4 ##5 #6": [0,6,7,8,9,10,11] }
	},
	hexads:	
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
var octadFamilies = [
	{
		name: '(8-1)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,5,6,7],
			},
			{
				name:"Ionian": [0,1,2,3,4,5,6,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,4,5,10,11],
			},
			{
				name:"Dorian": [0,1,2,3,4,9,10,11],
			},
			{
				name:"Aeolian": [0,1,2,3,8,9,10,11],
			},
			{
				name:"Phrygian": [0,1,2,7,8,9,10,11],
			},
			{
				name:"Locrian": [0,1,6,7,8,9,10,11],     [0, 5, 6, 7, 8, 9, 10, 11] },
	{
		name: '(8-2)',
		scales: [
		    {
				name:"Melodic Minor, Ionian b3, Dorian nat7 ": [0,1,2,3,4,5,6,8],
			},
			{
				name:"Dorian b2, Phrygian nat6": [0,1,2,3,4,5,7,11],
			},
			{
				name:"Lydian Augmented, Phrygian b1": [0,1,2,3,4,6,10,11],
			},
			{
				name:"Lydian b7, Mixolydian #4": [0,1,2,3,5,9,10,11],
			},
			{
				name:"Mixolydian b6, Aeolian nat3": [0,1,2,4,8,9,10,11],
			},
			{
				name:"Locrian nat2, Aeolian b5": [0,1,3,7,8,9,10,11],
			},
			{
				name:"Super Locrian, Locrian b4, Ionian #1": [0,2,6,7,8,9,10,11],   [ 0, 4, 5, 6, 7, 8, 9, 10] },
	{
		name: "(8-2M)",
		scales: [
			{
				name:"Harmonic Minor, Aeolian nat7": [0,2,3,4,5,6,7,8],
			},
			{
				name:"Locrian nat6": [0,1,2,3,4,5,6,10],
			},
			{
				name:"Ionian #5": [0,1,2,3,4,5,9,11],
			},
			{
				name:"Dorian #4": [0,1,2,3,4,8,10,11],
			},
			{
				name:"Phrygian nat3, Phrygian Dominant": [0,1,2,3,7,9,10,11],
			},
			{
				name:"Lydian #2": [0,1,2,6,8,9,10,11],
			},
			{
				name:"Locrian b4 bb7, Mixolydian #1": [0,1,4,7,8,9,10,11],   [0, 3, 6, 7, 8, 9, 10, 11] },
	{
		name: "(8-3)",
		scales: [
			{
				name:"Harmonic Major, Ionian b6": [0,1,2,3,4,5,6,9],
			},
			{
				name:"Dorian b5": [0,1,2,3,4,5,8,11],
			},
			{
				name:"Phrygian b4": [0,1,2,3,4,7,10,11],
			},
			{
				name:"Lydian b3": [0,1,2,3,6,9,10,11],
			},
			{
				name:"Mixolydian b2": [0,1,2,5,8,9,10,11],
			},
			{
				name:"Lydian augmented #2, Aeolian b1": [0,1,4,7,8,9,10,11],
			},
			{
				name:"Locrian bb7": [0,3,6,7,8,9,10,11],    [0, 3, 4, 5, 6, 7, 8, 9] },
	{
		name: "(8-4)",
		scales: [
			{
				name:"Neapolitan Major": [0,1,2,3,4,5,7,8],
			},
			{
				name:"Neapolitan Major II": [0,1,2,3,4,6,7,11],
			},
			{
				name:"Neapolitan Major III": [0,1,2,3,5,6,10,11],
			},
			{
				name:"Neapolitan Major IV": [0,1,2,4,5,9,10,11],
			},
			{
				name:"Neapolitan Major V": [0,1,3,4,8,9,10,11],
			},
			{
				name:"Neapolitan Major VI": [0,2,3,7,8,9,10,11],
			},
			{
				name:"Neapolitan Major VII": [0,1,5,6,7,8,9,10],      [ 0, 4, 5, 6, 7, 8, 9, 11] },
	{
		name: '(8-4M)',
		scales: [
			{
				name:"Lydian": [0,1,3,4,5,6,7,8],
			},
			{
				name:"Ionian": [0,2,3,4,5,6,7,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,4,5,9,10],
			},
			{
				name:"Dorian": [0,1,2,3,4,8,9,11],
			},
			{
				name:"Aeolian": [0,1,2,3,7,8,10,11],
			},
			{
				name:"Phrygian": [0,1,2,6,7,9,10,11],
			},
			{
				name:"Locrian": [0,1,5,6,8,9,10,11],  [0, 4, 5, 7, 8, 9, 10, 11] },
		{
		name: '(8-5)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,6,7,8],
			},
			{
				name:"Ionian": [0,1,2,3,5,6,7,11],
			},
			{
				name:"Mixolydian": [0,1,2,4,5,6,10,11],
			},
			{
				name:"Dorian": [0,1,3,4,5,9,10,11],
			},
			{
				name:"Aeolian": [0,2,3,4,8,9,10,11],
			},
			{
				name:"Phrygian": [0,1,2,6,7,8,9,10],
			},
			{
				name:"Locrian": [0,1,5,6,7,8,9,11],  [0, 4, 5, 6, 7, 8, 10, 11] },
		{
		name: '(8-5M)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,6,7,8],
			},
			{
				name:"Ionian": [0,1,3,4,5,6,7,11],
			},
			{
				name:"Mixolydian": [0,2,3,4,5,6,10,11],
			},
			{
				name:"Dorian": [0,1,2,3,4,8,9,10],
			},
			{
				name:"Aeolian": [0,1,2,3,7,8,9,11],
			},
			{
				name:"Phrygian": [0,1,2,6,7,8,10,11],
			},
			{
				name:"Locrian": [0,1,5,6,7,9,10,11],  [0, 4, 5, 6, 8, 9, 10, 11 ] },
		{
		name: '(8-6)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,6,7,8],
			},
			{
				name:"Ionian": [0,1,2,4,5,6,7,11],
			},
			{
				name:"Mixolydian": [0,1,3,4,5,6,10,11],
			},
			{
				name:"Dorian": [0,2,3,4,5,9,10,11],
			},
			{
				name:"Aeolian": [0,1,2,3,7,8,9,10],
			},
			{
				name:"Phrygian": [0,1,2,6,7,8,9,11],
			},
			{
				name:"Locrian": [0,1,5,6,7,8,10,11],     [0, 4, 5, 6, 7, 9, 10, 11] },
		{
		name: '(8-7)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,5,8,9],
			},
			{
				name:"Ionian": [0,1,2,3,4,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,6,7,10,11],
			},
			{
				name:"Dorian": [0,1,2,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,1,4,5,8,9,10,11],
			},
			{
				name:"Phrygian": [0,3,4,7,8,9,10,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,8,9],    [0, 3, 4, 5, 6, 7, 8, 11] },
		{
		name: '(8-8)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,7,8,9],
			},
			{
				name:"Ionian": [0,1,2,3,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,5,6,7,10,11],
			},
			{
				name:"Dorian": [0,1,4,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,3,4,5,8,9,10,11],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,8,9],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,8,11],    [0, 3, 4, 5, 6, 7, 10, 11] },
		{
		name: '(8-9S)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,6,7,8,9],
			},
			{
				name:"Ionian": [0,1,2,5,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,4,5,6,7,10,11],
			},
			{
				name:"Dorian": [0,3,4,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,1,2,3,6,7,8,9],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,8,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,10,11],     [0, 3, 4, 5, 6, 9, 10, 11] },
		{
		name: '(8-10)',
		scales: [
			{
				name:"Lydian": [0,2,3,4,5,6,7,9],
			},
			{
				name:"Ionian": [0,1,2,3,4,5,7,10],
			},
			{
				name:"Mixolydian": [0,1,2,3,4,6,9,11],
			},
			{
				name:"Dorian": [0,1,2,3,5,8,10,11],
			},
			{
				name:"Aeolian": [0,1,2,4,7,9,10,11],
			},
			{
				name:"Phrygian": [0,1,3,6,8,9,10,11],
			},
			{
				name:"Locrian": [0,2,5,7,8,9,10,11],      [0, 3, 5, 6, 7, 8, 9, 10] },
		{
		name: '(8-11)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,5,7,9],
			},
			{
				name:"Ionian": [0,1,2,3,4,6,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,5,7,10,11],
			},
			{
				name:"Dorian": [0,1,2,4,6,9,10,11],
			},
			{
				name:"Aeolian": [0,1,3,5,8,9,10,11],
			},
			{
				name:"Phrygian": [0,2,4,7,8,9,10,11],
			},
			{
				name:"Locrian": [0,2,5,6,7,8,9,10],     [0, 3, 4, 5, 6, 7, 8, 10] },
		{
		name: '(8-11M)',
		scales: [
			{
				name:"Lydian": [0,2,4,5,6,7,8,9],
			},
			{
				name:"Ionian": [0,2,3,4,5,6,7,10],
			},
			{
				name:"Mixolydian": [0,1,2,3,4,5,8,10],
			},
			{
				name:"Dorian": [0,1,2,3,4,7,9,11],
			},
			{
				name:"Aeolian": [0,1,2,3,6,8,10,11],
			},
			{
				name:"Phrygian": [0,1,2,5,7,9,10,11],
			},
			{
				name:"Locrian": [0,1,4,6,8,9,10,11],      [0, 3, 5, 7, 8, 9, 10, 11] },
		{
		name: '(8-12)',
		scales: [
			{
				name:"Lydian": [0,1,3,4,5,6,7,9],
			},
			{
				name:"Ionian": [0,2,3,4,5,6,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,4,6,9,10],
			},
			{
				name:"Dorian": [0,1,2,3,5,8,9,11],
			},
			{
				name:"Aeolian": [0,1,2,4,7,8,10,11],
			},
			{
				name:"Phrygian": [0,1,3,6,7,9,10,11],
			},
			{
				name:"Locrian": [0,2,5,6,8,9,10,11],      [0, 3, 4, 6, 7, 8, 9, 10] },
		{
		name: '(8-12M)',
		scales: [
			{
				name:"Lydian": [0,2,3,4,5,6,8,9],
			},
			{
				name:"Ionian": [0,1,2,3,4,6,7,10],
			},
			{
				name:"Mixolydian": [0,1,2,3,5,6,9,11],
			},
			{
				name:"Dorian": [0,1,2,4,5,8,10,11],
			},
			{
				name:"Aeolian": [0,1,3,4,7,9,10,11],
			},
			{
				name:"Phrygian": [0,2,3,6,8,9,10,11],
			},
			{
				name:"Locrian": [0,1,4,6,7,8,9,10],     [0, 3, 5, 6, 7, 8, 9, 11] },
		{
		name: '(8-13)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,6,7,9],
			},
			{
				name:"Ionian": [0,1,2,3,5,6,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,4,5,7,10,11],
			},
			{
				name:"Dorian": [0,1,3,4,6,9,10,11],
			},
			{
				name:"Aeolian": [0,2,3,5,8,9,10,11],
			},
			{
				name:"Phrygian": [0,1,3,6,7,8,9,10],
			},
			{
				name:"Locrian": [0,2,5,6,7,8,9,11],     [0, 3, 4, 5, 6, 7, 9, 10] },
		{
		name: '(8-13M)',
		scales: [
			{
				name:"Lydian": [0,2,3,5,6,7,8,9],
			},
			{
				name:"Ionian": [0,1,3,4,5,6,7,10],
			},
			{
				name:"Mixolydian": [0,2,3,4,5,6,9,11],
			},
			{
				name:"Dorian": [0,1,2,3,4,7,9,10],
			},
			{
				name:"Aeolian": [0,1,2,3,6,8,9,11],
			},
			{
				name:"Phrygian": [0,1,2,5,7,8,10,11],
			},
			{
				name:"Locrian": [0,1,4,6,7,9,10,11],  [0, 3, 5, 6, 8, 9, 10, 11] },
		{
		name: '(8-14)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,6,7,9],
			},
			{
				name:"Ionian": [0,1,3,4,5,6,8,11],
			},
			{
				name:"Mixolydian": [0,2,3,4,5,7,10,11],
			},
			{
				name:"Dorian": [0,1,2,3,5,8,9,10],
			},
			{
				name:"Aeolian": [0,1,2,4,7,8,9,11],
			},
			{
				name:"Phrygian": [0,1,3,6,7,8,10,11],
			},
			{
				name:"Locrian": [0,2,5,6,7,9,10,11],     [0, 3, 4, 5, 7, 8, 9, 10] },
		{
		name: '(8-14M)',
		scales: [
			{
				name:"Lydian": [0,2,3,4,5,7,8,9],
			},
			{
				name:"Ionian": [0,1,2,3,5,6,7,10],
			},
			{
				name:"Mixolydian": [0,1,2,4,5,6,9,11],
			},
			{
				name:"Dorian": [0,1,3,4,5,8,10,11],
			},
			{
				name:"Aeolian": [0,2,3,4,7,9,10,11],
			},
			{
				name:"Phrygian": [0,1,2,5,7,8,9,10],
			},
			{
				name:"Locrian": [0,1,4,6,7,8,9,11],     [0, 3, 5, 6, 7, 8, 10, 11] },
		{
		name: '(8-X15)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,6,8,9],
			},
			{
				name:"Ionian": [0,1,2,3,5,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,4,6,7,10,11],
			},
			{
				name:"Dorian": [0,1,3,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,2,4,5,8,9,10,11],
			},
			{
				name:"Phrygian": [0,2,3,6,7,8,9,10],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,8,10],   [0, 3, 4, 5, 6, 7, 9, 11]
			}
		]
	},
		{
		name: '(8-X15M)',
		scales: [
			{
				name:"Lydian": [0,1,3,5,6,7,8,9],
			},
			{
				name:"Ionian": [0,2,4,5,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,2,3,4,5,6,9,10],
			},
			{
				name:"Dorian": [0,1,2,3,4,7,8,10],
			},
			{
				name:"Aeolian": [0,1,2,3,6,7,9,11],
			},
			{
				name:"Phrygian": [0,1,2,5,6,8,10,11],
			},
			{
				name:"Locrian": [0,1,4,5,7,9,10,11],    [0, 3, 4, 6, 8, 9, 10, 11] },
		{
		name: '(8-Y15)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,6,7,9],
			},
			{
				name:"Ionian": [0,1,2,4,5,6,8,11],
			},
			{
				name:"Mixolydian": [0,1,3,4,5,7,10,11],
			},
			{
				name:"Dorian": [0,2,3,4,6,9,10,11],
			},
			{
				name:"Aeolian": [0,1,2,4,7,8,9,10],
			},
			{
				name:"Phrygian": [0,1,3,6,7,8,9,11],
			},
			{
				name:"Locrian": [0,2,5,6,7,8,10,11],     [0, 3, 4, 5, 6, 8, 9, 10] },
		{
		name: '(8-Y15M)',
		scales: [
			{
				name:"Lydian": [0,2,3,4,6,7,8,9],
			},
			{
				name:"Ionian": [0,1,2,4,5,6,7,10],
			},
			{
				name:"Mixolydian": [0,1,3,4,5,6,9,11],
			},
			{
				name:"Dorian": [0,2,3,4,5,8,10,11],
			},
			{
				name:"Aeolian": [0,1,2,3,6,8,9,10],
			},
			{
				name:"Phrygian": [0,1,2,5,7,8,9,11],
			},
			{
				name:"Locrian": [0,1,4,6,7,8,10,11],    [0, 3, 5, 6, 7, 9, 10, 11] },
		{
		name: '(8-16)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,7,8,9],
			},
			{
				name:"Ionian": [0,1,2,4,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,3,5,6,7,10,11],
			},
			{
				name:"Dorian": [0,2,4,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,2,3,4,7,8,9,10],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,8,10],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,9,11],    [0, 3, 4, 5, 6, 8, 10, 11] },
		{
		name: '(8-16M)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,6,7,8,9],
			},
			{
				name:"Ionian": [0,1,3,5,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,2,4,5,6,7,10,11],
			},
			{
				name:"Dorian": [0,2,3,4,5,8,9,10],
			},
			{
				name:"Aeolian": [0,1,2,3,6,7,8,10],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,9,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,8,10,11],    [0, 3, 4, 5, 7, 9, 10, 11] },
		{
		name: '(8-17)',
		scales: [
			{
				name:"Lydian": [0,1,3,4,5,6,8,9],
			},
			{
				name:"Ionian": [0,2,3,4,5,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,3,5,6,9,10],
			},
			{
				name:"Dorian": [0,1,2,4,5,8,9,11],
			},
			{
				name:"Aeolian": [0,1,3,4,7,8,10,11],
			},
			{
				name:"Phrygian": [0,2,3,6,7,9,10,11],
			},
			{
				name:"Locrian": [0,1,4,5,7,8,9,10],     [0, 3, 4, 6, 7, 8, 9, 11] },
		{
		name: '(8-18)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,6,8,9],
			},
			{
				name:"Ionian": [0,1,2,4,5,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,3,4,6,7,10,11],
			},
			{
				name:"Dorian": [0,2,3,5,6,9,10,11],
			},
			{
				name:"Aeolian": [0,1,3,4,7,8,9,10],
			},
			{
				name:"Phrygian": [0,2,3,6,7,8,9,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,7,9,10],    [0, 3, 4, 5, 6, 8, 9, 11] },
		{
		name: '(8-18M)',
		scales: [
			{
				name:"Lydian": [0,1,3,4,6,7,8,9],
			},
			{
				name:"Ionian": [0,2,3,5,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,3,4,5,6,9,10],
			},
			{
				name:"Dorian": [0,2,3,4,5,8,9,11],
			},
			{
				name:"Aeolian": [0,1,2,3,6,7,8,10],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,9,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,8,10,11],     [0, 3, 4, 5, 7, 9, 10, 11] },
		{
		name: '(8-19)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,6,8,9],
			},
			{
				name:"Ionian": [0,1,3,4,5,7,8,11],
			},
			{
				name:"Mixolydian": [0,2,3,4,6,7,10,11],
			},
			{
				name:"Dorian": [0,1,2,4,5,8,9,10],
			},
			{
				name:"Aeolian": [0,1,3,4,7,8,9,11],
			},
			{
				name:"Phrygian": [0,2,3,6,7,8,10,11],
			},
			{
				name:"Locrian": [0,1,4,5,6,8,9,10],    [0, 3, 4, 5, 7, 8, 9, 11] },
		{
		name: '(8-19M)',
		scales: [
			{
				name:"Lydian": [0,1,3,4,5,7,8,9],
			},
			{
				name:"Ionian": [0,2,3,4,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,1,2,4,5,6,9,10],
			},
			{
				name:"Dorian": [0,1,3,4,5,8,9,11],
			},
			{
				name:"Aeolian": [0,2,3,4,7,8,10,11],
			},
			{
				name:"Phrygian": [0,1,2,5,6,8,9,10],
			},
			{
				name:"Locrian": [0,1,4,5,7,8,9,11],    [0, 3, 4, 6, 7, 8, 10, 11] },
		{
		name: '(8-20)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,7,8,9],
			},
			{
				name:"Ionian": [0,1,3,4,6,7,8,11],
			},
			{
				name:"Mixolydian": [0,2,3,5,6,7,10,11],
			},
			{
				name:"Dorian": [0,1,3,4,5,8,9,10],
			},
			{
				name:"Aeolian": [0,2,3,4,7,8,9,11],
			},
			{
				name:"Phrygian": [0,1,2,5,6,7,9,10],
			},
			{
				name:"Locrian": [0,1,4,5,6,8,9,11],      [0, 3, 4, 5, 7, 8, 10, 11] },
		{
		name: '(8-21)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,4,6,8,10],
			},
			{
				name:"Ionian": [0,1,2,3,5,7,9,11],
			},
			{
				name:"Mixolydian": [0,1,2,4,6,8,10,11],
			},
			{
				name:"Dorian": [0,1,3,5,7,9,10,11],
			},
			{
				name:"Aeolian": [0,2,4,6,8,9,10,11],
			},
			{
				name:"Phrygian": [0,2,4,6,7,8,9,10],
			},
			{
				name:"Locrian": [0,2,4,5,6,7,8,10],      [0, 2, 3, 4, 5, 6, 8, 10] },
		{
		name: '(8-22)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,6,8,10],
			},
			{
				name:"Ionian": [0,1,2,4,5,7,9,11],
			},
			{
				name:"Mixolydian": [0,1,3,4,6,8,10,11],
			},
			{
				name:"Dorian": [0,2,3,5,7,9,10,11],
			},
			{
				name:"Aeolian": [0,1,3,5,7,8,9,10],
			},
			{
				name:"Phrygian": [0,2,4,6,7,8,9,11],
			},
			{
				name:"Locrian": [0,2,4,5,6,7,9,10],       [0, 2, 3, 4, 5, 7, 8, 10] },
		{
		name: '(8-22M)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,7,9,10],
			},
			{
				name:"Ionian": [0,1,2,4,6,8,9,11],
			},
			{
				name:"Mixolydian": [0,1,3,5,7,8,10,11],
			},
			{
				name:"Dorian": [0,2,4,6,7,9,10,11],
			},
			{
				name:"Aeolian": [0,2,4,5,7,8,9,10],
			},
			{
				name:"Phrygian": [0,2,3,5,6,7,8,10],
			},
			{
				name:"Locrian": [0,1,3,4,5,6,8,10],      [0, 2, 3, 4, 5, 7, 9, 11] },
		{
		name: '(8-23)',
		scales: [
			{
				name:"Lydian": [0,1,2,3,5,7,8,10],
			},
			{
				name:"Ionian": [0,1,2,4,6,7,9,11],
			},
			{
				name:"Mixolydian": [0,1,3,5,6,8,10,11],
			},
			{
				name:"Dorian": [0,2,4,5,7,9,10,11],
			},
			{
				name:"Aeolian": [0,2,3,5,7,8,9,10],
			},
			{
				name:"Phrygian": [0,1,3,5,6,7,8,10],
			},
			{
				name:"Locrian": [0,2,4,5,6,7,9,11],      [0, 2, 3, 4, 5, 7, 9, 10] },
		{
		name: '(8-24)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,6,8,10],
			},
			{
				name:"Ionian": [0,1,3,4,5,7,9,11],
			},
			{
				name:"Mixolydian": [0,2,3,4,6,8,10,11],
			},
			{
				name:"Dorian": [0,1,2,4,6,8,9,10],
			},
			{
				name:"Aeolian": [0,1,3,5,7,8,9,11],
			},
			{
				name:"Phrygian": [0,2,4,6,7,8,10,11],
			},
			{
				name:"Locrian": [0,2,4,5,6,8,9,10],      [0, 2, 3, 4, 6, 7, 8, 10] },
		{
		name: '(8-25S)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,6,7,8,10],
			},
			{
				name:"Ionian": [0,1,3,5,6,7,9,11],
			},
			{
				name:"Mixolydian": [0,2,4,5,6,8,10,11],
			},
			{
				name:"Dorian": [0,2,3,4,6,8,9,10] },
		{
		name: '(8-26)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,7,9,10],
			},
			{
				name:"Ionian": [0,1,3,4,6,8,9,11],
			},
			{
				name:"Mixolydian": [0,2,3,5,7,8,10,11],
			},
			{
				name:"Dorian": [0,1,3,5,6,8,9,10],
			},
			{
				name:"Aeolian": [0,2,4,5,7,8,9,11],
			},
			{
				name:"Phrygian": [0,2,3,5,6,7,9,10],
			},
			{
				name:"Locrian": [0,1,3,4,5,7,8,10],      [0, 2, 3, 4, 6, 7, 9, 11] },
		{
		name: '(8-27)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,5,7,8,10],
			},
			{
				name:"Ionian": [0,1,3,4,6,7,9,11],
			},
			{
				name:"Mixolydian": [0,2,3,5,6,8,10,11],
			},
			{
				name:"Dorian": [0,1,3,4,6,8,9,10],
			},
			{
				name:"Aeolian": [0,2,3,5,7,8,9,11],
			},
			{
				name:"Phrygian": [0,1,3,5,6,7,9,10],
			},
			{
				name:"Locrian": [0,2,4,5,6,8,9,11],    [0, 2, 3, 4, 6, 7, 9, 10] },
		{
		name: '(8-27M)',
		scales: [
			{
				name:"Lydian": [0,1,2,4,6,7,9,10],
			},
			{
				name:"Ionian": [0,1,3,5,6,8,9,11],
			},
			{
				name:"Mixolydian": [0,2,4,5,7,8,10,11],
			},
			{
				name:"Dorian": [0,2,3,5,6,8,9,10],
			},
			{
				name:"Aeolian": [0,1,3,4,6,7,8,10],
			},
			{
				name:"Phrygian": [0,2,3,5,6,7,9,11],
			},
			{
				name:"Locrian": [0,1,3,4,5,7,9,10],       [0, 2, 3, 4, 6, 8, 9, 11] },
		"(8-28S) Half-Whole Diminished Scale": { "Half-Whole Diminished Scale": [0,1,3,4,6,7,9,10], "Whole-Half Diminished Scale": [0,2,3,5,6,8,9,11] },
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