
var families = [
	{
		name: 'Major Scale Family',
		scales: [
			{
				name:"lydian",
				set: [0,2,4,6,7,9,11]
			},
			{
				name:"ionian",
				set: [0,2,4,5,7,9,11]
			},
			{
				name:"mixolydian",
				set: [0,2,4,5,7,9,10]
			},
			{
				name:"dorian",
				set: [0,2,3,5,7,9,10]
			},
			{
				name:"aeolian",
				set: [0,2,3,5,7,8,10]
			},
			{
				name:"phrygian",
				set: [0,1,3,5,7,8,10]
			},
			{
				name:"locrian",
				set: [0,1,3,5,6,8,10]
			}
		]
	},
	{
		name: 'Melodic Minor Family',
		scales: [
		    {
				name:"melodic minor",
				set: [0,2,3,5,7,9,11]
			},
			{
				name:"dorian b2",
				set: [0,1,3,5,7,9,10]
			},
			{
				name:"lydian augmented",
				set: [0,2,4,6,8,9,11]
			},
			{
				name:"lydian b7",
				set: [0,2,4,6,7,9,10]
			},
			{
				name:"mixolydian b6",
				set: [0,2,4,5,7,8,10]
			},
			{
				name:"locrian natural 2",
				set: [0,2,3,5,6,8,10]
			},
			{
				name:"super locrian",
				set: [0,1,3,4,6,8,10]
			}
		]
	},
	{
		name: "harmonic minor family",
		scales: [
			{
				name:"harmonic minor",
				set: [0,2,3,5,7,8,11]
			},
			{
				name:"locrian natural 6",
				set: [0,1,3,5,6,9,10]
			},
			{
				name:"ionian #5",
				set: [0,2,4,5,8,9,11]
			},
			{
				name:"dorian #4",
				set: [0,2,3,6,7,9,10]
			},
			{
				name:"phrygian dominant",
				set: [0,1,4,5,7,8,10]
			},
			{
				name:"lydian #2",
				set: [0,3,4,6,7,9,11]
			},
			{
				name:"super locrian bb7",
				set: [0,1,3,4,6,8,9]
			}
		]	
	},
	{
		name: "harmonic major family",
		scales: [
			{
				name:"harmonic major",
				set: [0,2,4,5,7,8,11]
			},
			{
				name:"dorian b5",
				set: [0,2,3,5,6,9,10]
			},
			{
				name:"phrygian b4",
				set: [0,1,3,4,7,8,10]
			},
			{
				name:"lydian b3",
				set: [0,2,3,6,7,9,11]
			},
			{
				name:"mixolydian b2",
				set: [0,1,4,5,7,9,10]
			},
			{
				name:"lydian augmented #2",
				set: [0,3,4,6,8,9,11]
			},
			{
				name:"locrian bb7",
				set: [0,1,3,5,6,8,9]
			}
		]
	},
	{
		name: "Neapolitan major family",
		scales: [
			{
				name:"neapolitan major",
				set: [0,1,3,5,7,9,11]
			},
			{
				name:"neapolitan major mode II",
				set: [0,2,4,6,8,10,11]
			},
			{
				name:"neapolitan major mode III",
				set: [0,2,4,6,8,9,10]
			},
			{
				name:"neapolitan major mode IV",
				set: [0,2,4,6,7,8,10]
			},
			{
				name:"neapolitan major mode V",
				set: [0,2,4,5,6,8,10]
			},
			{
				name:"neapolitan major mode VI",
				set: [0,2,3,4,6,8,10]
			},
			{
				name:"neapolitan major mode VII",
				set: [0,1,2,4,6,8,10]
			}
		]
	}
]	
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

var chords = {
    quadrads: {
        "Tertial": {
            "Minor 7 b5": { root: [0, 3, 6, 10], inversions: [[0, 3, 7, 9], [0, 4, 6, 9], [0, 2, 5, 8]] },
            "Minor 7": { root: [0, 3, 7, 10], inversions: [[0, 4, 7, 9], [0, 2, 5, 8], [0, 2, 5, 9]] },
            "Major 7": { root: [0, 4, 7, 11], inversions: [[0, 3, 7, 8], [0, 4, 5, 9], [0, 1, 5, 8]] },
            "Dom 7": { root: [0, 4, 7, 10], inversions: [[0, 3, 6, 8], [0, 3, 5, 9], [0, 2, 6, 9]] }
        },
        "Quartal": {
            "Perfect Quartal": { root: [0, 3, 5, 10], inversions: [[0, 2, 7, 9], [0, 5, 7, 10], [0, 2, 5, 7]] },
            "Mixolydian Quartal": { root: [0, 4, 5, 10], inversions: [[0, 1, 6, 8], [0, 5, 7, 11], [0, 2, 6, 7]] },
            "Ionian Quartal": { root: [0, 4, 5, 11], inversions: [[0, 1, 7, 8], [0, 6, 7, 11], [0, 1, 5, 6]] },
            "Lydian Quartal": { root: [0, 4, 6, 11], inversions: [[0, 2, 7, 8], [0, 5, 6, 10], [0, 1, 5, 7]] }
        },
        "Secundal": {
            "Major Tetrachord": { root: [0, 2, 4, 5], inversions: [[0, 2, 3, 10], [0, 1, 8, 10], [0, 7, 9, 11]] },
            "Phrygian Tetrachord": { root: [0, 1, 3, 5], inversions: [[0, 2, 4, 11], [0, 2, 9, 10], [0, 7, 8, 10]] },
            "Minor Tetrachord": { root: [0, 2, 3, 5], inversions: [[0, 1, 3, 10], [0, 2, 9, 11], [0, 7, 9, 10]] },
            "Lydian Tetrachord": { root: [0, 2, 4, 6], inversions: [[0, 2, 4, 10], [0, 2, 8, 10], [0, 6, 8, 10]] }
        },
        "9 no 7": {
            "Major add 9": { root: [0, 2, 4, 7], inversions: [[0, 2, 5, 10], [0, 3, 8, 10], [0, 5, 7, 9]] },
            "Diminished add b9": { root: [0, 1, 3, 6], inversions: [[0, 2, 5, 11], [0, 3, 9, 10], [0, 6, 7, 9]] },
            "Minor add b9": { root: [0, 1, 3, 7], inversions: [[0, 2, 6, 11], [0, 4, 9, 10], [0, 5, 6, 8]] },
            "Minor add 9": { root: [0, 2, 3, 7], inversions: [[0, 1, 5, 10], [0, 4, 9, 11], [0, 5, 7, 8]] }
        },
        "9 no 3": {
            "Major 9 no 3": { root: [0, 2, 7, 11], inversions: [[0, 5, 9, 10], [0, 4, 5, 7], [0, 1, 3, 8]] },
            "9 no 3": { root: [0, 2, 7, 10], inversions: [[0, 5, 8, 10], [0, 3, 5, 7], [0, 2, 4, 9]] },
            "7 (b9) no 3": { root: [0, 1, 7, 10], inversions: [[0, 6, 9, 11], [0, 3, 5, 6], [0, 2, 3, 9]] },
            "Major (#11)": { root: [0, 4, 6, 7], inversions: [[0, 2, 3, 8], [0, 1, 6, 10], [0, 5, 9, 11]] }
        },
        "Nondiatonic": {
            "Chromatic Tetrachord": { root: [0, 1, 2, 3], inversions: [[0, 1, 2, 11], [0, 1, 10, 11], [0, 9, 10, 11]] },
            "Supercluster + Major 2": { root: [0, 1, 2, 4], inversions: [[0, 1, 3, 11], [0, 2, 10, 11], [0, 8, 9, 10]] },
            "Supercluster + Minor 3": { root: [0, 1, 2, 5], inversions: [[0, 1, 4, 11], [0, 3, 10, 11], [0, 7, 8, 9]] },
            "Supercluster + Major 3": { root: [0, 1, 2, 6], inversions: [[0, 1, 5, 11], [0, 4, 10, 11], [0, 6, 7, 8, ]] },
            "Supercluster + Perfect 4": { root: [0, 1, 2, 7], inversions: [[0, 1, 6, 11], [0, 5, 10, 11], [0, 5, 6, 7]] },
            "Supercluster + Tritone": { root: [0, 1, 2, 8], inversions: [[0, 1, 7, 11], [0, 6, 10, 11], [0, 4, 5, 6]] },
            "Supercluster + Perfect 5": { root: [0, 1, 2, 9], inversions: [[0, 1, 8, 11], [0, 7, 10, 11], [0, 3, 4, 5]] },
            "Supercluster + Minor 6": { root: [0, 1, 2, 10], inversions: [[0, 1, 9, 11], [0, 8, 10, 11], [0, 2, 3, 4]] },
            "Minor Major 9 no 5": { root: [0, 2, 3, 11], inversions: [[0, 1, 9, 10], [0, 8, 9, 11], [0, 1, 3, 4]] },
            "Augmented Major 9 no 3": { root: [0, 2, 8, 11], inversions: [[0, 6, 9, 10], [0, 3, 4, 6], [0, 1, 3, 9]] },
            "Major 7 (#9) no 5": { root: [0, 3, 4, 11], inversions: [[0, 1, 8, 9], [0, 7, 8, 11], [0, 1, 4, 5]] },
            "7 #11 no 3": { root: [0, 6, 7, 10], inversions: [[0, 1, 4, 6], [0, 3, 5, 11], [0, 2, 8, 9]] },
            "Diminished Major 7": { root: [0, 3, 6, 11], inversions: [[0, 3, 8, 9], [0, 5, 6, 9], [0, 1, 4, 7]] },
            "Minor Major 7": { root: [0, 3, 7, 11], inversions: [[0, 4, 8, 9], [0, 4, 5, 8], [0, 1, 4, 8]] },
            "Major add #9": { root: [0, 3, 4, 7], inversions: [[0, 1, 4, 9], [0, 3, 8, 11], [0, 5, 8, 9]] },
            "Diminished add 9": { root: [0, 2, 3, 6], inversions: [[0, 1, 4, 10], [0, 3, 9, 11], [0, 6, 8, 9]] },
            "Augmented Major 7": { root: [0, 4, 8, 11], inversions: [[0, 4, 7, 8], [0, 3, 4, 8], [0, 1, 5, 9]] },
            "Ambiguous Symmetrical": { root: [0, 1, 6, 7], inversions: [[0, 5, 6, 11]] },
            "Minor (#11)": { root: [0, 3, 6, 7], inversions: [[0, 3, 4, 9], [0, 1, 6, 9], [0, 5, 8, 11]] },
            "7 (#9) no 5 (Jimi Hendrix)": { root: [0, 3, 4, 10], inversions: [[0, 1, 7, 9], [0, 6, 8, 11], [0, 2, 5, 6]] },
            "Augmented 7": { root: [0, 4, 8, 10], inversions: [[0, 4, 6, 8], [0, 2, 4, 8], [0, 2, 6, 10]] },
            "7 b5": { root: [0, 4, 6, 10], inversions: [[0, 2, 6, 8]] },
            "Diminished 7": { root: [0, 3, 6, 9], inversions: [] }
        }
    },
    triads: {
        //tertial//
        "tertial": {
            "Major": { root: [0, 4, 7], inversions: [[0, 3, 8], [0, 5, 9]] },
            "Minor": { root: [0, 3, 7], inversions: [[0, 4, 9], [0, 5, 8]] },
            "Diminished": { root: [0, 3, 6], inversions: [[0, 3, 9], [0, 6, 9]] },
        },
        "Secundal": {
            "Major Trichord": { root: [0, 2, 4], inversions: [[0, 2, 10], [0, 8, 10]] },
            "Minor Trichord": { root: [0, 2, 3], inversions: [[0, 1, 10], [0, 9, 11]] },
            "Phrygian Trichord": { root: [0, 1, 3], inversions: [[0, 2, 11], [0, 9, 10]] },
        },
        "Quartal": {
            "Sus 4": { root: [0, 5, 7], inversions: [[0, 2, 7], [0, 5, 10]] },
            "Diminished sus 4": { root: [0, 5, 6], inversions: [[0, 1, 7], [0, 6, 11]] },
            "Sus #4": { root: [0, 6, 7], inversions: [[0, 1, 6], [0, 5, 11]] },

        },
        "7 no 3": {
            "Major 7 no 3": { root: [0, 7, 11], inversions: [[0, 4, 5], [0, 1, 8]] },
            "7 no 3": { root: [0, 7, 10], inversions: [[0, 3, 5], [0, 2, 9]] },
            "Half Diminished no 3": { root: [0, 6, 10], inversions: [[0, 4, 6], [0, 2, 8]] },
        },
        "7 no 5": {
            "Major 7 no 5": { root: [0, 4, 11], inversions: [[0, 7, 8], [0, 1, 5]] },
            "7 no 5": { root: [0, 4, 10], inversions: [[0, 6, 8], [0, 2, 6]] },
            "Minor 7 no 5": { root: [0, 3, 10], inversions: [[0, 7, 9], [0, 2, 5]] },
        },
        "Nondiatonic": {
            "Augmented": { root: [0, 4, 8], inversions: [] },
            "Major #2 Trichord": { root: [0, 3, 4], inversions: [[0, 1, 9], [0, 8, 11]] },
            "Phrygian Major Trichord": { root: [0, 1, 4], inversions: [[0, 3, 11], [0, 8, 9]] },
            "Supercluster": { root: [0, 1, 2], inversions: [[0, 1, 11], [0, 10, 11]] }
        }
    }
};
var intervals = {
    "Minor 2": 1,
    "Major 7": 11,
    "Major 2": 2,
    "Minor 7": 10,
    "Minor 3": 3,
    "Major 6": 9,
    "Major 3": 4,
    "Minor 6": 8,
    "Perfect 4": 5,
    "Perfect 5": 7,
    "Augmented 4 / Diminished 5": 6
};
var pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G',
            'Ab', 'A', 'Bb', 'B'];
var tunings = {
    guitarStandard: [4, 11, 7, 2, 9, 4]
}
var cirlceOfFiths = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];