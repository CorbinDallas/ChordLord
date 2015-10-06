var setList = {
    nullSet: {
        "(0) (0-1) Silence, Rest": {
            "Silence |  | { } < a >": []
        }
    },
    monad: {
        "(1) (1-1) Monad": {
            "Unison, Octave, Monad |  | { 1 } < a >": [0]
        }
    },
    dyads: {
        "(2) (2-1) Minor Second": {
            "Minor 2nd, Half Step, Semitone |  | { 1 b2 } < a >": [0, 1],
            "Major 7th |  | { 1 7 } < b >": [0, 11]
        },
        "(3) (2-2) Major Second": {
            "Major 2nd, Whole Step, Whole Tone, Diminished 3rd |  | { 1 2 } < a >": [0, 2],
            "Minor 7th, Augmented 6th |  | { 1 b7 } < b >": [0, 10]
        },
        "(4) (2-3) Minor Third": {
            "Minor 3rd, Augmented 2nd |  | { 1 b3 } < a >": [0, 3],
            "Major 6th, Diminished 7th |  | { 1 6 } < b >": [0, 9]
        },
        "(5) (2-4) Major Third": {
            "Major 3rd, Diminished 4th |  | { 1 3 } < a >": [0, 4],
            "Minor 6th, Augmented 5th  |  | { 1 b6 } < b >": [0, 8]
        },
        "(6) (2-5) Perfect Fifth": {
            "Perfect 5th, Power Chord | 5 | { 1 5 } < b >": [0, 7],
            "Perfect 4th |  | { 1 4 } < a >": [0, 5]
        },
        "(7) (2-6S) Tritone": {
            "Augmented 4th, Diminished 5th, Tritone, Diabolus en Musica |  | { 1 b5 } { 1 #4 } < a >": [0, 6]
        }
    },
    triads: {
        "(8) (3-1) Chromatic Trichord": {
            "Chromatic Trichord |  | { 1 b2 2 } < a >": [0, 1, 2],
            "Chromatic Trichord II  |  | { 1 b2 7 } < b >": [0, 1, 11],
            " Chromatic Trichord III |  | { 1 b7 7 } < c >": [0, 10, 11]
        },
        "(9) (3-2) Phrygian Trichord": {
            "Phrygian Trichord |  | { 1 b2 b3 } < a >": [0, 1, 3],
            "Phrygian Trichord II  |  | { 1 2 7 } < b >": [0, 2, 11],
            "Phrygian Trichord III  |  | { 1 6 b7 } < c >": [0, 9, 10]
        },
        "(10) (3-2M) Minor Trichord": {
            "Minor Trichord |  |  { 1 2 b3 } < a >": [0, 2, 3],
            "Minor Trichord II  |  | { 1 b2 b7 } < b >": [0, 1, 10],
            "Minor Trichord III  |  | { 1 6 7 } < c >": [0, 9, 11]
        },
        "(11) (3-3) Phrygian Major Trichord": {
            "Phrygian Major Trichord |  | { 1 b2 3 } < a >": [0, 1, 4],
            "Phrygian Major Trichord II  | Minor Major 7 no5 | { 1 b3 7 } < b >": [0, 3, 11],
            "Phrygian Major Trichord III  |  | { 1 b6 6 } < c >": [0, 8, 9]
        },
        "(12) (3-3M) Major #2 Trichord": {
            "Major #2 Trichord |  | { 1 b3 3 } < a >": [0, 3, 4],
            "Major #2 Trichord II  |  | { 1 b2 6 } < b >": [0, 1, 9],
            "Major #2 Trichord III  | Augmented Major 7 no3 | { 1 b6 7 } < c >": [0, 8, 11]
        },
        "(13) (3-4) Major 7 no5": {
            "  | Major 7 no5 | { 1 3 7 } < b >": [0, 4, 11],
            "  |  | { 1 5 b6 } < c >": [0, 7, 8],
            "  |  |  { 1 b2 4 } < a >": [0, 1, 5]
        },
        "(14) (3-4M) Major 7 no3": {
            "  | Major 7 no3 | { 1 5 7 } < c >": [0, 7, 11],
            "  |  | { 1 3 4 }  < a >": [0, 4, 5],
            "  |  | { 1 b2 b6 } < b >": [0, 1, 8]
        },
        "(15) (3-5) sus#4": {
            "  | sus#4 | { 1 #4 5 } < c >": [0, 6, 7],
            "Viennese Trichord, Rite Chord 2 | Diminished susb2 | { 1 b2 b5 } < a >": [0, 1, 6],
            "  |  | { 1 4 7 } < b >": [0, 5, 11]
        },
        "(16) (3-5M) Diminished sus4": {
            "Rite Chord 1 | Diminished sus4  | { 1 4 b5 } < a >": [0, 5, 6],
            "  | susb2 | { 1 b2 5 } < b >": [0, 1, 7],
            "  | Diminished Major 7 no3 |  { 1 #4 7 } < c >": [0, 6, 11]
        }, 
        "(17) (3-6) Major Trichord": {
            "Major Trichord |  | { 1 2 3 } < a >": [0, 2, 4],
            "Major Trichord II  |  | { 1 2 b7 } < b >": [0, 2, 10],
            "Major Trichord III  | Augmented 7 no3  | { 1 b6 b7 } < c >": [0, 8, 10]
        },
        "(18) (3-7) Minor 7 no5": {
            "  | Minor 7 no5 | { 1 b3 b7 } < b >": [0, 3, 10],
            "  |  | { 1 5 6 } < c >": [0, 7, 9],
            "  |  | { 1 2 4 } < a >": [0, 2, 5]
        },
        "(19)  (3-7M) Dominant 7 no3": {
            " | Dominant 7 no3 | { 1 5 b7 } < c >": [0, 7, 10],
            " |  | { 1 b3 4 } < a >": [0, 3, 5],
            " |  | { 1 2 6 } < b >": [0, 2, 9]
        },
        "(20) (3-8) Dominant 7 no5": {
            "Italian Augmented Sixth | Dominant 7 no5 | { 1 3 b7 } < b >": [0, 4, 10],
            " | Augmented sus#4 | { 1 b5 b6 } < c >": [0, 6, 8],
            " | Diminished sus2 | { 1 2 b5 } < a >": [0, 2, 6]
        },
        "(21) (3-8M) Half-Diminished 7 no3": {
            " | Half-Diminished 7 no3 | { 1 b5 b7 } < c >": [0, 6, 10],
            " | Major b5 | { 1 3 #4 } < a >": [0, 4, 6],
            " | Augmented sus2 | { 1 2 b6 } < b >": [0, 2, 8]
        },
        "(22) (3-9) sus4": {
            " | sus4 | { 1 4 5 } < c >": [0, 5, 7],
            " | sus2 | { 1 2 5 } < a >": [0, 2, 7],
            " |  | { 1 4 b7 } < b >": [0, 5, 10]
        },
        "(23) (3-10) Diminished Triad": {
            " | Diminished | { 1 b3 b5 } < a >": [0, 3, 6],
            " | Diminished 7 no5 | { 1 b3 6 } < b >": [0, 3, 9],
            " | Diminished 7 no3 | { 1 #4 6} < c >": [0, 6, 9]
        },
        "(24) (3-11) Minor Triad": {
            " | Minor Triad | { 1 b3 5 } < a >": [0, 3, 7],
            " | Major 6 no5 | { 1 3 6 } < b >": [0, 4, 9],
            " | Augmented sus4 | { 1 4 b6 } < c >": [0, 5, 8]
        },
        "(25) (3-11M) Major Triad": {
            " | Major Triad | { 1 3 5 } < a >": [0, 4, 7],
            " | Minor #5 | { 1 b3 b6 } < b >": [0, 3, 8],
            " |  | { 1 4 6 } < c >": [0, 5, 9]
        },      
        "(26) (3-12S) Augmented Triad": {
            " | Augmented Triad | { 1 3 #5 } { 1 3 b6 } { 1 b4 b6 } < a >": [0, 4, 8]
        }
    },
    quadrads: {
        "(27) (4-1) Chromatic Tetrachord": {
            "Chromatic Tetrachord, Minor Trichord add b2 |  | { 1 b2 2 b3 } < a >": [0, 1, 2, 3],
            " |  | { 1 b2 2 7 } < b >": [0, 1, 2, 11],
            " |  | { 1 b2 b7 7 } < c >": [0, 1, 10, 11],
            " |  | { 1 6 b7 7 } < d >": [0, 9, 10, 11]
        },
        "(28) (4-2) Major Trichord add b2": {
            "Major Trichord add b2 |  | { 1 b2 2 3 } < a >": [0, 1, 2, 4],
            " | Minor Major 7 no5 (b9)  | { 1 b2 2 7 } < b >": [0, 1, 3, 11],
            " |  | { 1 2 b7 7 } < c >": [0, 2, 10, 11],
            " | Augmented 7 no3 ( 13 ) | { 1 b6 6 b7 } { 1 #5 6 b7 } < d >": [0, 8, 9, 10]
        },
        "(29) (4-2M) Major Trichord add #2": {
            "Major Trichord add #2, Minor b4 Tetrachord |  | { 1 2 b3 3 } < a >": [0, 2, 3, 4],
            " |  | { 1 b2 2 b7 } < b >": [0, 1, 2, 10],
            " |  | { 1 b2 6 7 } < c >": [0, 1, 9, 11],
            " | Augmented 7 no 3 (nat7) | { 1 b6 b7 7 } < d >": [0, 8, 10, 11]
        },
        "(30) (4-3) Phrygian b4 Tetrachord": {
            "Phrygian b4 Tetrachord |  | { 1 b2 b3 3 } < a >": [0, 1, 3, 4],
            " | Minor Major 9 no5 | { 1 2 b3 7 } < b >": [0, 2, 3, 11],
            " |  | { 1 b2 6 b7 } < c >": [0, 1, 9, 10],
            " | Augmented Major 7 no3 (13) | { 1 #5 6 7 } < d >": [0, 8, 9, 11]
        },
        "(31) (4-4) Phrygian bb3 Tetrachord": {
            "Phrygian bb3 Tetrachord |  | { 1 b2 2 4 } { 1 b2 bb3 4 } < a >": [0, 1, 2, 5],
            " | Major 7 no 5 (b9) | { 1 b2 3 7 } < b >": [0, 1, 4, 11],
            " | Minor 7 Major 7 no5 (#13) | { 1 b3 b7 7 } < c >": [0, 3, 10, 11],
            " |  | { 1 5 b6 6 } < d >": [0, 7, 8, 9]
        },
        "(32) (4-4M) Ionian #2 Tetrachord": {
            "Ionian #2 Tetrachord |  | { 1 b3 3 4 } < a >": [0, 3, 4, 5],
            " |  | { 1 b2 2 6 } < b >": [0, 1, 2, 9],
            " | Augmented Major 7 susb2 | { 1 b2 b6 7 } < c >": [0, 1, 8, 11],
            " | Major 7 no3 (#13) | { 1 5 b7 7 } < d >": [0, 7, 10, 11]
        },
        "(33) (4-5) Major 7 no5 (#13)": {
            " | Major 7 no5 (#13) | { 1 3 b7 7 } < c >": [0, 4, 10, 11],
            " | sus#4 (b13) | { 1 #4 5 b6 } < d >": [0, 6, 7, 8],
            " | Diminished sus2 (b9) | { 1 b2 2 b5 } < a >": [0, 1, 2, 6],
            " |  | { 1 b2 4 7 } < b >": [0, 1, 5, 11]
        },
        "(34) (4-5M) Major b5 (11)": {
            " | Major b5 (11) | { 1 3 4 b5 } < a >": [0, 4, 5, 6],
            " | Augmented sus2 (b9) | { 1 b2 2 b6 } < b >": [0, 1, 2, 8],
            " | Major 7 susb2 | { 1 b2 5 7 } < c >": [0, 1, 7, 11],
            " | Diminished Major 7 no3 (#13) | { 1 b5 b7 7 } < d >": [0, 6, 10, 11]
        },
        "(35) (4-6) sus4 (#11)": {
            "Dream Chord | sus4 (#11) | { 1 4 #4 5 }  < d >": [0, 5, 6, 7],
            " | sus2 (b9) | { 1 b2 bb3 5 } { 1 b2 2 5 } < a >": [0, 1, 2, 7],
            " | Diminished Major 7 susb2 | { 1 b2 b5 7 } < b >": [0, 1, 6, 11],
            " |  | { 1 4 b7 7 } < c >": [0, 5, 10, 11]
        },
        "(36) (4-7) Phrygian Major Tetrachord": {
            "Phrygian Major Tetrachord |  | { 1 b2 3 4 } < a >": [0, 1, 4, 5],
            " | Major 7 no5 (#9) | { 1 #2 3 7 } < b >": [0, 3, 4, 11],
            " | Augmented sus b2 (13) | { 1 b2 #5 6 } < c >": [0, 1, 8, 9],
            " |  | { 1 5 b6 7 } < d >": [0, 7, 8, 11]
        },
        "(37) (4-8) Major 7 no5 (11)": {
            " | Major 7 no5 (11) | { 1 3 4 7 } < b >": [0, 4, 5, 11],
            " | susb2 (b13) | { 1 b2 5 b6 } < c >": [0, 1, 7, 8],
            " | Major 7 sus#4 | { 1 #4 5 7 } < d >": [0, 6, 7, 11],
            " | Diminished sus4 (b9) | { 1 b2 4 b5 } < a >": [0, 1, 5, 6]
        },
        "(38) (4-9S) Diminished Major 7 sus4": {
            " | Diminished Major 7 sus4 | { 1 4 b5 7 } < b >": [0, 5, 6, 11],
            " | sus#4 (b9) | { 1 b2 #4 5 } < a >": [0, 1, 6, 7]
        },
        "(39) (4-10) Minor Tetrachord": {
            "Minor Tetrachord |  | { 1 2 b3 4 } < a >": [0, 2, 3, 5],
            " | Minor 7 no5 (b9) | { 1 b2 b3 b7 } < b >": [0, 1, 3, 10],
            " |  | { 1 2 6 7 } < c >": [0, 2, 9, 11],
            " | 7 no3 (13) | { 1 5 6 b7 } < d >": [0, 7, 9, 10]
        },
        "(40) (4-11) Phrygian Tetrachord": {
            "Phrygian Tetrachord |  | { 1 b2 b3 4 } < a >": [0, 1, 3, 5],
            " | Major 7 no5 (9) | { 1 2 3 7 } < b >": [0, 2, 4, 11],
            " |  | { 1 2 6 b7 } < c >": [0, 2, 9, 10],
            " | 7 no3 (b13) | { 1 5 b6 b7 } < d >": [0, 7, 8, 10]
        },
        "(41) (4-11M) Major Tetrachord": {
            "Major Tetrachord |  | { 1 2 3 4 } < a >": [0, 2, 4, 5],
            " | Minor 7 no5 (9) | { 1 2 b3 b7 } < b >": [0, 2, 3, 10],
            " | Augmented 7 susb2 | { 1 b2 b6 b7 } < c >": [0, 1, 8, 10],
            " | Major 7 no3 (13) | { 1 5 6 7 } < d >": [0, 7, 9, 11]
        },
        "(42) (4-12) Minor #4 Tetrachord": {
            "Minor #4 Tetrachord | Diminished (9) | { 1 2 b3 b5 } { 1 2 b3 #4 } < a >": [0, 2, 3, 6],
            " | Dominant 7 no5 (b9) | { 1 b2 3 b7 } < b >": [0, 1, 4, 10],
            " | Minor Major 7 no5 (13) | { 1 b3 6 7 } < c >": [0, 3, 9, 11],
            " | Diminished 7 no3 (b13), Augmented sus#4 (13) | { 1 b5 b6 bb7 } { 1 #4 #5 6 } < d >": [0, 6, 8, 9]
        },
        "(43) (4-12M) Lydian #2 Tetrachord": {
            "Lydian #2 Tetrachord | Major b5 (#9) | { 1 #2 3 #4 } { 1 b3 3 b5 } < a >": [0, 3, 4, 6],
            " |  | { 1 b2 b3 6 } < b >": [0, 1, 3, 9],
            " | Augmented Major 7 sus2 | { 1 2 b6 7 } < c >": [0, 2, 8, 11],
            " | Half-Diminished 7 no3 (13) | { 1 b5 6 b7 } < d >": [0, 6, 9, 10]
        },
        "(44) (4-13) Diminished Add b9": {
            "Phrygian #4 Tetrachord | Diminished Add b9 | { 1 b2 b3 b5 } < a >": [0, 1, 3, 6],
            " |  | { 1 2 4 7 } < b >": [0, 2, 5, 11],
            " | Minor 7 no5 (13) | { 1 b3 6 b7 } < c >": [0, 3, 9, 10],
            " | sus#4 (13) | { 1 #4 5 6 } < d >": [0, 6, 7, 9]
        },
        "(45) (4-13M) Diminished (11)": {
            " | Diminished (11) | { 1 b3 4 b5 } < a >": [0, 3, 5, 6],
            " | Diminished 7 no5 (9) | { 1 2 b3 6 } < b >": [0, 2, 3, 9],
            " | 7 susb2 | { 1 b2 5 b7 } < c >": [0, 1, 7, 10],
            " | Diminished Major 7 no3 (13) | { 1 #4 6 7 } < d >": [0, 6, 9, 11]
        },
        "(46) (4-14) Minor Add 9": {
            " | Minor add 9 | { 1 2 b3 5 } < a >": [0, 2, 3, 7],
            " | 7 sus4 no5 (b9) | { 1 b2 4 b7 } < b >": [0, 1, 5, 10],
            " | Major 7 no5 (13) | { 1 3 6 7 } < c >": [0, 4, 9, 11],
            " | sus4 (b13) | { 1 4 5 b6 } < d >": [0, 5, 7, 8]
        },
        "(47) (4-14M) Major add 11": {
            " | Major add 11 | { 1 3 4 5 } < a >": [0, 4, 5, 7],
            " | Minor #5 add b9 | { 1 b2 b3 b6 } < b >": [0, 1, 3, 8],
            " | Major 7 sus2 | { 1 2 5 7 } < c >": [0, 2, 7, 11],
            " |  | { 1 4 6 b7 } < d >": [0, 5, 9, 10]
        },
        "(48) (4-X15) Lydian b2 Tetrachord, All Interval Tetrachord 1": {
            "Lydian b2 Tetrachord | Major b5 (b9) | { 1 b2 3 b5 } < a >": [0, 1, 4, 6],
            " | Minor Major 7 no5 (11) | { 1 b3 4 7 } < b >": [0, 3, 5, 11],
            " | Augmented sus2 (13) | { 1 2 #5 6 } < c >": [0, 2, 8, 9],
            " | 7 sus#4 | { 1 #4 5 b7 } < d >": [0, 6, 7, 10]
        },
        "(49) (4-X15M) Dominant 7 (#9) no5": {
            " Jimi Hendrix Chord | Dominant 7 (#9) no5 | { 1 #2 3 b7 } < b >": [0, 3, 4, 10],
            " | 6 susb2 | { 1 b2 5 6 } < c >": [0, 1, 7, 9],
            " | Augmented Major 7 sus#4 | { 1 #4 #5 7 } < d >": [0, 6, 8, 11],
            " | Diminished sus4 (9) | { 1 2 4 b5 } < a >": [0, 2, 5, 6]
        },
        "(50) (4-16) Major 7 b5": {
            " | Major 7 b5 | { 1 3 #4 7 } < b >": [0, 4, 6, 11],
            " | sus2 (b13) | { 1 2 5 b6 } < c >": [0, 2, 7, 8],
            " | Half-Diminished sus4 | { 1 4 b5 b7 } < d >": [0, 5, 6, 10],
            " | sus4 (b9) | { 1 b2 4 5 } < a >": [0, 1, 5, 7]
        },
        "(51) (4-16M) Major 7 sus4": {
            " | Major 7 sus4 | { 1 4 5 7 } < d >": [0, 5, 7, 11],
            " | sus2 (#11) | { 1 2 #4 5 } < a >": [0, 2, 6, 7],
            " | Dominant 7 no5 (11) | { 1 3 4 b7 } < b >": [0, 4, 5, 10],
            " | Augmented sus#4 (b9) | { 1 b2 b5 b6 } < c >": [0, 1, 6, 8]
        },
        "(52) (4-17) Major add #9": {
            " | Major add #9 | { 1 b3 3 5 } < a >": [0, 3, 4, 7],
            " |  | { 1 b2 3 6 } < b >": [0, 1, 4, 9],
            " | Minor Major 7 #5 | { 1 b3 b6 7 } < c >": [0, 3, 8, 11],
            " | Augmented sus4 (13) | { 1 4 #5 6 } < d >": [0, 5, 8, 9]
        },
        "(53) (4-18) Diminished Major 7": {
            " | Diminished Major 7 | { 1 b3 b5 7 } < b >": [0, 3, 6, 11],
            " | Diminished 7 no 5 (b13) | { 1 b3 b6 6 } < c >": [0, 3, 8, 9],
            " | Diminished 7 sus4 | { 1 4 b5 6 } < d >": [0, 5, 6, 9],
            " | Major add b9 | { 1 b2 3 5 } < a >": [0, 1, 4, 7]
        },
        "(54) (4-18M) Minor add #11": {
            " | Minor add #11 | { 1 b3 #4 5 } < a >": [0, 3, 6, 7],
            " |  | { 1 b3 3 6 } < b >": [0, 3, 4, 9],
            "Diminished 7 susb2 | { 1 b2 b5 6 } < c >": [0, 1, 6, 9],
            " | Augmented Major 7 sus4 | { 1 4 b6 7 } < d >": [0, 5, 8, 11]
        },
        "(55) (4-19) Minor Major 7": {
            " | Minor Major 7 | { 1 b3 5 7 } < b >": [0, 3, 7, 11],
            " | Augmented (13), Diminished 7 susb4 no5 (b13) | { 1 3 #5 6 } < c >": [0, 4, 8, 9],
            " | Augmented (11) | { 1 3 4 b6 } < d >": [0, 4, 5, 8],
            " | Augmented (b9) | { 1 b2 3 b6 } < a >": [0, 1, 4, 8]
        },
        "(56) (4-19M) Augmented Major 7": {
            " | Augmented Major 7 | { 1 3 #5 7 } < c >": [0, 4, 8, 11],
            " | Major (b13) | { 1 3 5 b6 } < d >": [0, 4, 7, 8],
            " | Augmented (#9) | { 1 #2 3 #5 } { 1 b3 b4 b6 } < a >": [0, 3, 4, 8],
            " |  | { 1 b2 4 6 } < b >": [0, 1, 5, 9]
        },
        "(57) (4-20) Major 7": {
            " | Major 7 | { 1 3 5 7 } < b >": [0, 4, 7, 11],
            " | Minor (b13) | { 1 b3 5 b6 } < c >": [0, 3, 7, 8],
            " | Major 6 no5 (11) | { 1 3 4 6 } < d >": [0, 4, 5, 9],
            " | Augmented sus4 (b9) | { 1 b2 4 b6 } < a >": [0, 1, 5, 8]
        },
        "(58) (4-21) Lydian Tetrachord": {
            "Lydian Tetrachord | Major b5 (9) | { 1 2 3 #4 } < a >": [0, 2, 4, 6],
            " | Dominant 7 no5 (9) | { 1 2 3 b7 } < b >": [0, 2, 4, 10],
            " | Augmented 7 sus2 | { 1 2 b6 b7 } < c >": [0, 2, 8, 10],
            " | Half-Diminished 7 no3 (b13) | { 1 b5 b6 b7 } < d >": [0, 6, 8, 10]
        },
        "(59) (4-22) Add 9": {
            "Mu Chord, Steely Dan Chord | Add 9, Major (9) | { 1 2 3 5 } < a >": [0, 2, 4, 7],
            " | 7 sus4 no5 (9) | { 1 2 4 b7 } < b >": [0, 2, 5, 10],
            " | Minor 7 #5 | { 1 b3 b6 b7} < c >": [0, 3, 8, 10],
            " | sus4 (13) | { 1 4 5 6 } < d >": [0, 5, 7, 9]
        },
        "(60) (4-22M) Minor (11)": {
            " | Minor (11) | { 1 b3 4 5 } < a >": [0, 3, 5, 7],
            " | Major 6 no5 (9) | { 1 2 3 6 } < b >": [0, 2, 4, 9],
            " | 7 sus2 | { 1 2 5 b7 } < c >": [0, 2, 7, 10],
            " | Augmented 7 sus4  | { 1 4 b6 b7 } < d >": [0, 5, 8, 10]
        },
        "(61) (4-23) 7 sus4": {
            " | 7 sus4 | { 1 4 5 b7 } < d >": [0, 5, 7, 10],
            " | sus4 (9) | { 1 2 4 5 } < a >": [0, 2, 5, 7],
            " | Minor 7 no5 (11) | { 1 b3 4 b7 } < b >": [0, 3, 5, 10],
            " | Major 6 sus2 | { 1 2 5 6 } < c >": [0, 2, 7, 9]
        },
        "(62) (4-24) Augmented 7": {
            " | Augmented 7 | { 1 3 #5 b7 } < c >": [0, 4, 8, 10],
            " | Augmented (#11) | { 1 3 #4 #5 } < d >": [0, 4, 6, 8],
            " | Augmented (9) | { 1 2 3 #5 } < a >": [0, 2, 4, 8],
            " | Half-Diminished sus2 | { 1 2 b5 b7 } < b >": [0, 2, 6, 10]
        },
        "(63) (4-25S) Dominant 7 b5": {
            "French Augmented Sixth | Dominant 7 b5 | { 1 3 b5 b7 } < b >": [0, 4, 6, 10],
            " | Augmented sus2 (#11), Diminished sus2 (b13) | { 1 2 #4 #5 } { 1 2 b5 b6 } < a >": [0, 2, 6, 8]
        },
        "(64) (4-26) Minor 7": {
            " | Minor 7 | { 1 b3 5 b7 } < c >": [0, 3, 7, 10],
            " | Major 6 | { 1 3 5 6 } < d >": [0, 4, 7, 9],
            " | Minor #5 (11) | { 1 b3 4 b6 } < a >": [0, 3, 5, 8],
            " |  | { 1 2 4 6 } < b >": [0, 2, 5, 9]
        },
        "(65) (4-27) Minor 7 b5": {
            " | Minor 7 b5, Half-Diminished 7 | { 1 b3 b5 b7 } < b >": [0, 3, 6, 10],
            " | Minor 6 | { 1 b3 5 6 } < c >": [0, 3, 7, 9],
            " | Major 6 b5 | { 1 3 #4 6 } < d >": [0, 4, 6, 9],
            " | Augmented sus4 (9) | { 1 2 4 b6 } < a >": [0, 2, 5, 8]
        },
        "(66) (4-27M) Dominant 7": {
            " | Dominant 7 | { 1 3 5 b7 } < d >": [0, 4, 7, 10],
            " | Diminished (b13) | { 1 b3 b5 b6 } < a >": [0, 3, 6, 8],
            " | Minor 6 no5 (11) | { 1 b3 4 6 } < b >": [0, 3, 5, 9],
            " | Diminished 7 sus2 | { 1 2 #4 6 } < c >": [0, 2, 6, 9]
        },
        "(67) (4-28S) Diminished 7": {
            " | Diminished 7 | { 1 b3 b5 bb7 } { 1 b3 #4 6 } { 1 #2 #4 6 } { 1 b3 b5 6 } < a >": [0, 3, 6, 9]
        },
        "(68) (4-Y15) Minor Add b9, All Interval Tetrachord 3": {
            " | Minor (b9) | { 1 b2 b3 5 } < a >": [0, 1, 3, 7],
            " | Major 7 sus2 (#11) | { 1 2 #4 7 } < b >": [0, 2, 6, 11],
            " | Dominant 7 no5 (13) | { 1 3 6 b7 } < c >": [0, 4, 9, 10],
            " | Diminished sus4 (b13) | { 1 4 b5 b6 } < d >": [0, 5, 6, 8]
        },
        "(69) (4-Y15M) Major (#11), All Interval Tetrachord 4": {
            " | Major (#11) | { 1 3 #4 5 } < a >": [0, 4, 6, 7],
            " | Minor #5 (9) | { 1 2 b3 b6 } < b >": [0, 2, 3, 8],
            " | Half-Diminished susb2 | { 1 b2 b5 b7 } < c >": [0, 1, 6, 10],
            " |  | { 1 4 6 7 } < d >": [0, 5, 9, 11]
        }
    },
    pentads: {         
        "(70) (5-1) Chromatic Pentachord": {
            "Chromatic Pentachord, Major Trichord add(b2 b3) |  | { 1 b2 2 b3 3 } < a >": [0, 1, 2, 3, 4],
            " | Minor Major 7 no5 (b9 9) | { 1 b2 2 b3 7 } < b >": [0, 1, 2, 3, 11],
            " | Dominant 7 sus2 no5 (b9 nat7) | { 1 b2 2 b7 7 } < c >": [0, 1, 2, 10, 11],
            " | Major 7 susb2 (13 #13) | { 1 b2 6 b7 7 } < d >": [0, 1, 9, 10, 11],
            " | Augmented Major 7 no3 (13 #13) | { 1 b6 6 b7 7 } < e >": [0, 8, 9, 10, 11]
        },
        "(71) (5-2) Minor Tetrachord add b2": {
            "Minor Tetrachord add b2 | | { 1 b2 2 b3 4 } < a >": [0, 1, 2, 3, 5],
            " | Major 7 no5 (b9 9) | { 1 b2 2 3 7 } < b >": [0, 1, 2, 4, 11],
            " | Minor Major 7 no5 (b9 #13) | { 1 b2 b3 b7 7 } < c >": [0, 1, 3, 10, 11],
            " | Major 7 sus2 no5 (13 #13) | { 1 2 6 b7 7 } < d >": [0, 2, 9, 10, 11],
            " | 7 no3 (b13 13) | { 1 5 b6 6 b7 } < e >": [0, 7, 8, 9, 10]
        },
        "(72) (5-2M) Major Tetrachord add b3": {
            "Major Tetrachord add b3 |  | { 1 2 b3 3 4 } < a >": [0, 2, 3, 4, 5],
            " | Minor 7 no5 (b9 9) | { 1 b2 2 b3 b7 } < b >": [0, 1, 2, 3, 10],
            " | Major 7 sus2 no5 (b9 13) < c >": [0, 1, 2, 9, 11],
            " | Augmented Major 7 susb2 (#13) | { 1 b2 b6 b7 7 } < d >": [0, 1, 8, 10, 11],
            " | Major 7 no3 (13 #13) | { 1 5 6 b7 7 } < e >": [0, 7, 9, 10, 11]
        },
        "(73) (5-3) Major Tetrachord add b2": {
            "Major Tetrachord add b2 |  | { 1 b2 2 3 4 } < a >": [0, 1, 2, 4, 5],
            " | Major 7 no5 (b9 #9) | { 1 b2 b3 4 7 } < b >": [0, 1, 3, 4, 11],
            " | Minor Major 7 no5 (9 #13) | { 1 2 b3 b7 7 } < c >": [0, 2, 3, 10, 11],
            " | Augmented 7 susb2 (13) | { 1 b2 b6 6 b7 } < d >": [0, 1, 8, 9, 10],
            " | Major 7 no3 (b13 13) | { 1 5 b6 6 7 } < e >": [0, 7, 8, 9, 11]
        },
        "(74) (5-3M) Phrygian Tetrachord add nat3": {
            "Phrygian Tetrachord add nat3 |  | { 1 b2 b3 3 4 } < a >": [0, 1, 3, 4, 5],
            " | Major 7 no 5 (9 #9) | { 1 2 b3 3 7 } < b >": [0, 2, 3, 4, 11],
            " | Minor 7 sus2 (b9 13) | { 1 b2 2 6 b7 } < c >": [0, 1, 2, 9, 10],
            " | Augmented Major 7 susb2 (13) | { 1 b2 b6 6 7 } < d >": [0, 1, 8, 9, 11],
            " | Major 7 no3 (b13 #13) | { 1 5 b6 b7 7 } < e >": [0, 7, 8, 10, 11]
        },
        "(75) (5-4) Locrian bb3 bb4 Pentachord": {
            "Locrian bb3 bb4 Pentachord | Diminished (b9 9) | { 1 b2 2 b3 b5 } < a >": [0, 1, 2, 3, 6],
            " | Major 7 sus2 no5 (b9 11) | { 1 b2 2 4 7 } < b >": [0, 1, 2, 5, 11],
            " | Major 7 susb2 (#13) | { 1 b2 3 b7 7 } < c >": [0, 1, 4, 10, 11],
            " | Minor Major 7 no5 (13 #13) | { 1 b3 6 b7 7 } < d >": [0, 3, 9, 10, 11],
            " | sus#4 (b13 13) | { 1 #4 5 b6 6 } < e >": [0, 6, 7, 8, 9]
        },
        "(76) (5-4M) Major #2 b5 Pentachord": {
            "Major #2 b5 Pentachord | Major b5 (#9 11) | { 1 b3 3 4 b5 } < a >": [0, 3, 4, 5, 6],
            " | Diminished 7 no5 (b9 9) | { 1 b2 2 b3 6 } < b >": [0, 1, 2, 3, 9],
            " | Augmented Major 7 sus2 (b9) | { 1 b2 2 b6 7 } < c >": [0, 1, 2, 8, 11],
            " | Major 7 susb2 (#13) | { 1 b2 5 b7 7 } < d >": [0, 1, 7, 10, 11],
            " | Diminished Major 7 no3 (13 #13) | { 1 #4 6 b7 7 } < e >": [0, 6, 9, 10, 11]
        },
        "(77) (5-5) Phrygian bb3 bb4 Pentachord": {
            "Phrygian bb3 bb4 Pentachord | Minor (b9 9) | { 1 b2 2 b3 5 } < a >": [0, 1, 2, 3, 7],
            " | Diminished Major 7 sus2 (b9) | { 1 b2 2 b5 7 } < b >": [0, 1, 2, 6, 11],
            " | Major 7 sus4 no5 (b9 #13) | { 1 b2 4 b7 7 } < c >": [0, 1, 5, 10, 11],
            " | Major 7 no5 (13 #13) | { 1 3 6 b7 7 } < d >": [0, 4, 9, 10, 11],
            " | sus4 (#11 b13) | { 1 4 b5 5 b6 } < e >": [0, 5, 6, 7, 8]
        },
        "(78) (5-5M) Lydian ##2 #3 Pentachord": {
            "Lydian ##2 #3 Pentachord | Major (11 #11) | { 1 3 4 #4 5 } < a >": [0, 4, 5, 6, 7],
            " | Minor #5 (b9 9) | { 1 b2 2 b3 b6 } < b >": [0, 1, 2, 3, 8],
            " | Major 7 sus2 (b9) | { 1 b2 2 5 7 } < c >": [0, 1, 2, 7, 11],
            " | Diminished Major 7 susb2 (#13) | { 1 b2 b5 b7 7 } < d >": [0, 1, 6, 10, 11],
            " | Major 7 sus4 no5 (13 #13) | { 1 4 6 b7 7 } < e >": [0, 5, 9, 10, 11]
        },
        "(79) (5-6) Locrian bb3 Pentachord": {
            "Locrian bb3 Pentachord | Diminished sus2 (b9 11) | { 1 b2 2 4 b5 } < a >": [0, 1, 2, 5, 6],
            " | Major 7 no5 (b9 11) | { 1 b2 3 4 7 } < b >": [0, 1, 4, 5, 11],
            " | Major 7 no5 (#9 #13) | { 1 b3 3 b7 7 } < c >": [0, 3, 4, 10, 11],
            " | susb2 (b13 13) | { 1 b2 5 b6 6 } < d >": [0, 1, 7, 8, 9],
            " | Major 7 sus#4 (b13) | { 1 #4 5 b6 7 } < e >": [0, 6, 7, 8, 11]
        },
        "(80) (5-6M) Locrian nat3 Pentachord": {
            "Locrian nat3 Pentachord | Major b5 (b9 11) | { 1 b2 3 4 b5 } < a >": [0, 1, 4, 5, 6],
            " | Major 7 no5 (#9 11) | { 1 b3 3 4 7 } < b >": [0, 3, 4, 5, 11],
            " | Augmented sus2 (b9 13) (b9 b13) | { 1 b2 2 b6 6 } < c >": [0, 1, 2, 8, 9],
            " | Major 7 susb2 (b13) | { 1 b2 5 b6 7 } < d >": [0, 1, 7, 8, 11],
            " | Major 7 sus#4 (#13) | { 1 #4 5 b7 7 } < e >": [0, 6, 7, 10, 11]
        },
        "(81) (5-7) Lydian b2 bb3 Pentachord": {
            "Lydian b2 bb3 Pentachord | sus2 (b9 #11) | { 1 b2 2 #4 5 } < a >": [0, 1, 2, 6, 7],
            " | Diminished Major 7 susb2 (11) | { 1 b2 4 b5 7 } < b >": [0, 1, 5, 6, 11],
            " | Major 7 no5 (11 #13) | { 1 3 4 b7 7 } < c >": [0, 4, 5, 10, 11],
            " | sus#4 (b9 b13) | { 1 b2 #4 5 b6 } < d >": [0, 1, 6, 7, 8],
            " | Major 7 sus4 (#11) | { 1 4 #4 5 7 } < e >": [0, 5, 6, 7, 11]
        },
        "(82) (5-7M) Major 7 b5 (11)": {
            "Lydian b2 #3 Tetrachord | sus4 (b9 #11) | { 1 b2 4 b5 5 } < a >": [0, 1, 5, 6, 7],
            " | Major 7 b5 (11) | { 1 3 4 b5 7 } < b >": [0, 4, 5, 6, 11],
            " | sus2 (b9 b13) | { 1 b2 2 5 b6 } < c >": [0, 1, 2, 7, 8],
            " | Major 7 sus#4 (b9) | { 1 b2 #4 5 7 } < d >": [0, 1, 6, 7, 11],
            " | Diminished Major 7 sus4 (#13) | { 1 4 b5 b7 7 } < e >": [0, 5, 6, 10, 11]
        },
        "(83) (5-8) Lydian Tetrachord add b3": {
            "Lydian Tetrachord add b3, Locrian nat2 b4 Pentachord | Major b5 (9 #9) | { 1 2 b3 3 #4 } < a >": [0, 2, 3, 4, 6],
            " | Dominant 7 no 5 (b9 9) | { 1 b2 2 3 b7 } < b >": [0, 1, 2, 4, 10],
            " | Minor Major 7 no 5 (b9 13) | { 1 b2 b3 6 7 } < c >": [0, 1, 3, 9, 11],
            " | Augmented Major 7 sus2 (#13) | { 1 2 b6 6 7 } < d >": [0, 2, 8, 10, 11],
            " | Augmented 7 sus#4 (13) | { 1 b5 b6 6 b7 } < e >": [0, 6, 8, 9, 10]
        },
        "(84) (5-9) Lydian Tetrachord add b2": {
            "Lydian Tetrachord add b2, Locrian bb3 b4 Pentachord | Major b5 (b9 9) | { 1 b2 2 3 #4 } < a >": [0, 1, 2, 4, 6],
            " | Minor Major 7 no5 (b9 11) | { 1 b2 b3 4 7 } < b >": [0, 1, 3, 5, 11],
            " | Major 9 no5 (#13) | { 1 2 3 b7 7 } < c >": [0, 2, 4, 10, 11],
            " | Augmented 7 sus2 (13) | { 1 2 b6 6 b7 } < d >": [0, 2, 8, 9, 10],
            " | 7 sus#4 (b13) | { 1 #4 5 b6 b7 } < e >": [0, 6, 7, 8, 10]
        },
        "(85) (5-9M) Major b5 Pentachord": {
            "Major b5 Pentachord | Major b5 (9 11) | { 1 2 3 4 b5 } < a >": [0, 2, 4, 5, 6],
            " | Dominant 7 no5 (9 #9) | { 1 2 b3 3 b7 } < b >": [0, 2, 3, 4, 10],
            " | Augmented 7 sus2 (b9) | { 1 b2 2 b6 b7 } < c >": [0, 1, 2, 8, 10],
            " | Major 7 susb2 (13) | { 1 b2 5 6 7 } < d >": [0, 1, 7, 9, 11],
            " | Augmented Major 7 sus#4 (#13) | { 1 #4 #5 6 7 } < e >": [0, 6, 8, 10, 11]
        },
        "(86) (5-10) Locrian b4 Pentachord": {
            "Locrian b4 Pentachord | Major b5 (b9 #9) | { 1 b2 b3 3 #4 } < a >": [0, 1, 3, 4, 6],
            " | Minor Major 7 no5 (9 11) | { 1 2 b3 4 7 } < b >": [0, 2, 3, 5, 11],
            " | Minor 7 (b9 13) | { 1 b2 b3 6 b7 } < c >": [0, 1, 3, 9, 10],
            " | Augmented Major 7 sus2 (13) | { 1 2 #5 6 7 } < d >": [0, 2, 8, 9, 11],
            " | 7 sus#4 (13) | { 1 #4 5 6 b7 } < e >": [0, 6, 7, 9, 10]
        },
        "(87) (5-10M) Locrian nat2 Pentachord": {
            "Locrian nat2 Pentachord | Diminished (9 11) | { 1 2 b3 4 b5 } < a >": [0, 2, 3, 5, 6],
            " | Dominant 7 no 5 (b9 #9) | { 1 b2 b3 3 b7 } < b >": [0, 1, 3, 4, 10],
            " | Minor Major 7 no5 (9 13) | { 1 2 b3 6 7 } < c >": [0, 2, 3, 9, 11],
            " | 7 susb2 (13) | { 1 b2 5 6 b7 } < d >": [0, 1, 7, 9, 10],
            " | Augmented Major 7 sus#4 (13) | { 1 #4 #5 6 7 } < e >": [0, 6, 8, 9, 11]
        },
        "(88) (5-11) Minor b4 Pentachord": {
            "Minor b4 Pentachord | Major (9 #9) | { 1 2 b3 3 5 } < a >": [0, 2, 3, 4, 7],
            " | 7 sus4 (b9 9) | { 1 b2 2 4 b7 } < b >": [0, 1, 2, 5, 10],
            " | Major 7 no5 (b9 13) | { 1 b2 3 6 7 } < c >": [0, 1, 4, 9, 11],
            " | Minor Major 7 #5 (#13) | { 1 b3 b6 b7 7 } < d >": [0, 3, 8, 10, 11],
            " | sus4 (b13 13) | { 1 4 5 b6 6 } < e >": [0, 5, 7, 8, 9]
        },
        "(89) (5-11M) Major #2 Pentachord": {
            "Major #2 Pentachord | Major (#9 11) | { 1 #2 3 4 5 } < a >": [0, 3, 4, 5, 7],
            " | Major 6 no5 (b9 9) | { 1 b2 2 3 6 } < b >": [0, 1, 2, 4, 9],
            " | Minor Major 7 #5 (b9) | { 1 b2 b3 b6 7 } < c >": [0, 1, 3, 8, 11],
            " | Major 7 sus2 (#13) | { 1 2 5 b7 7 } < d >": [0, 2, 7, 10, 11],
            " | Augmented 7 sus4 (13) | { 1 4 #5 6 b7 } < e >": [0, 5, 8, 9, 10]
        },        
        "(90) (5-Z12) Locrian Pentachord": {
            "Locrian Pentachord | Diminished (b9 11) | { 1 b2 b3 4 b5 } < a >": [0, 1, 3, 5, 6],
            " | Major 7 no5 (9 11) | { 1 2 3 4 7 } < b >": [0, 2, 4, 5, 11],
            " | Minor 7 no5 (9 13) | { 1 2 b3 6 b7 } < c >": [0, 2, 3, 9, 10],
            " | 7 susb2 (b13) | { 1 b2 5 b6 b7 } < d >": [0, 1, 7, 8, 10],
            " | Major 7 sus#4 (13) | { 1 #4 5 6 7 } < e >": [0, 6, 7, 9, 11]
        },
        "(91) (5-13) Minor Major 7 (b9)": {
            " | Minor Major 7 (b9) | { 1 b2 b3 5 7 } < b >": [0, 1, 3, 7, 11],
            " | Diminished Major 7 sus2 (#13) | { 1 2 b5 b7 7 } < c >": [0, 2, 6, 10, 11],
            " | Augmented 7 (13) | { 1 3 #5 6 b7 } < d >": [0, 4, 8, 9, 10],
            " | Augmented (11 #11) | { 1 3 4 b5 b6 } < e >": [0, 4, 5, 6, 8],
            " | Augmented (b9 9) | { 1 b2 2 3 b6 } < a >": [0, 1, 2, 4, 8]
        },
        "(92) (5-13M) Major (#11 b13)": {
            " | Major (#11 b13) | { 1 3 #4 5 b6 } < e >": [0, 4, 6, 7, 8],
            " | Augmented (9 #9) | { 1 2 b3 3 #5 } < a >": [0, 2, 3, 4, 8],
            " | Half-Diminished sus2 (b9) | { 1 b2 2 b5 b7 } < b >": [0, 1, 2, 6, 10],
            " | Major 7 sus4 (b9 13) | { 1 b2 4 6 7 } < c >": [0, 1, 5, 9, 11],
            " | Augmented Major 7 (#13) | { 1 3 #5 b7 7 } < d >": [0, 4, 8, 10, 11]
        },
        "(93) (5-14) Phrygian bb3 Pentachord": {
            "Phrygian bb3 Pentachord | sus4 (b9 9) | { 1 b2 2 4 5 } < a >": [0, 1, 2, 5, 7],
            " | Major 7 b5 (b9) | { 1 b2 3 b5 7} < b >": [0, 1, 4, 6, 11],
            " | Minor Major 7 no5 (11 #13) | { 1 b3 4 b7 7 } < c >": [0, 3, 5, 10, 11],
            " | sus2  (b13 13) | { 1 2 5 b6 6 } < d >": [0, 2, 7, 8, 9],
            " | 7 sus4 (#11) | { 1 4 b5 5 b7 } < e >": [0, 5, 6, 7, 10]
        },
        "(94) (5-14M) Lydian #3 Pentachord": {
            "Lydian #3 Pentachord | sus4 (9 #11) | { 1 2 4 b5 5 } < a >": [0, 2, 5, 6, 7],
            " | Dominant 7 no5 (#9 11) | { 1 #2 3 4 b7 } < b >": [0, 3, 4, 5, 10],
            " | sus2 (b9 13) | { 1 b2 2 5 6 } < c >": [0, 1, 2, 7, 9],
            " | Augmented Major 7 susb2 (#11) | { 1 b2 #4 #5 7 } < d >": [0, 1, 6, 8, 11],
            " | Major 7 sus4 (#13) | { 1 4 5 b7 7 } < e >": [0, 5, 7, 10, 11]
        },
        "(95) (5-15) Dominant 7 b5 (11)": {
            " | Dominant 7 b5 (11) | { 1 3 4 b5 b7 } < e >": [0, 4, 5, 6, 10],
            " | Diminished sus2 (b9 b13) | { 1 b2 2 b5 b6 } < a >": [0, 1, 2, 6, 8],
            " | Major 7 sus4 (b9) | { 1 b2 4 5 7 } < b >": [0, 1, 5, 7, 11],
            " | Major 7 b5 (#13) | { 1 3 b5 b7 7 } < c >": [0, 4, 6, 10, 11],
            " | sus2 (#11 b13) | { 1 2 #4 5 b6 } < d >": [0, 2, 6, 7, 8]
        },
        "(96) (5-16) Phrygian b4 Pentachord": {
            "Phrygian b4 Pentachord | Major (b9 #9) | { 1 b2 b3 3 5 } < a >": [0, 1, 3, 4, 7],
            " | Diminished Major 7 (9) | { 1 2 b3 b5 7 } < b >": [0, 2, 3, 6, 11],
            " | Dominant 7 no 5 (b9 13) | { 1 b2 3 6 b7 } < c >": [0, 1, 4, 9, 10],
            " | Minor Major 7 #5 (13) | { 1 b3 #5 6 7 } < d >": [0, 3, 8, 9, 11],
            " | Diminished 7 sus4 (b13) | { 1 4 b5 b6 bb7 } < e >": [0, 5, 6, 8, 9]
        },
        "(97) (5-16M) Lydian #2 Pentachord": {
            "Lydian #2 Pentachord | Major (#9 #11) | { 1 #2 3 #4 5 } < a >": [0, 3, 4, 6, 7],
            " | Major 6 no5 (b9 #9) | { 1 b2 b3 3 6 } < b >": [0, 1, 3, 4, 9],
            " | Minor Major 9 #5 | { 1 2 b3 #5 7 } < c >": [0, 2, 3, 8, 11],
            " | Half-Diminished susb2 (13) | { 1 b2 b5 6 b7 } < d >": [0, 1, 6, 9, 10],
            " | Augmented Major 7 sus4 (13) | { 1 4 #5 6 7 } < e >": [0, 5, 8, 9, 11]
        },
        "(98) (5-Z17) Minor Major 9": {
            " | Minor Major 9 | { 1 2 b3 5 7 } < b >": [0, 2, 3, 7, 11],
            " | 7 sus4 no5 (b9 13) | { 1 b2 4 6 b7 } < c >": [0, 1, 5, 9, 10],
            "Farben Chord | Augmented Major 7 (13) | { 1 3 #5 6 7 } < d >": [0, 4, 8, 9, 11],
            " | Major (11 b13) | { 1 3 4 5 b6  } < e >": [0, 4, 5, 7, 8],
            " | Augmented (b9 #9) | { 1 b2 b3 3 b6 } < a >": [0, 1, 3, 4, 8]
        },
        "(99) (5-X18) Phrygian Major Pentachord": {
            "Phrygian Major Pentachord | Major (b9 11) | { 1 b2 3 4 5 } < a >": [0, 1, 4, 5, 7],
            " | Major 7 no5 (#9 #11) | { 1 #2 3 #4 7 } < b >": [0, 3, 4, 6, 11],
            " | Diminished 7 no5 (b9 b13) | { 1 b2 b3 b6 bb7 } < c >": [0, 1, 3, 8, 9],
            " | Major 7 sus2 (b13) | { 1 2 5 b6 7 } < d >": [0, 2, 7, 8, 11],
            " | Half-Diminished sus4 (13) | { 1 4 b5 6 b7 } < e >": [0, 5, 6, 9, 10]
        },
        "(100) (5-X18M) Minor #4 Pentachord": {
            "Minor #4 Pentachord | Minor ( 9 #11) | { 1 2 b3 #4 5 } < a >": [0, 2, 3, 6, 7],
            " | Dominant 7 no5 (b9 11) | { 1 b2 3 4 b7 } < b >": [0, 1, 4, 5, 10],
            " | Major 7 no5 (#9 13) | { 1 #2 3 6 7 } < c >": [0, 3, 4, 9, 11],
            " | Diminished 7 susb2 (b13) | { 1 b2 b5 b6 bb7 } < d >": [0, 1, 6, 8, 9],
            " | Major 7 sus4 (b13) | { 1 4 5 b6 7 } < e >": [0, 5, 7, 8, 11]
        },
        "(101) (5-19) Phrygian #4 Pentachord": {
            "Phrygian #4 Pentachord | Minor (b9 #11) | { 1 b2 b3 #4 5 } < a >": [0, 1, 3, 6, 7],
            " | Diminished Major 7 sus4 (9) | { 1 2 4 b5 7 } < b >": [0, 2, 5, 6, 11],
            " | Dominant 7 no5 (#9 13) | { 1 #2 3 6 b7 } < c >": [0, 3, 4, 9, 10],
            " | sus#4 (b9 13) | { 1 b2 #4 5 6 } < d >": [0, 1, 6, 7, 9],
            " | Diminished Major 7 sus4 (b13) | { 1 4 b5 b6 7 } < e >": [0, 5, 6, 8, 11]
        },
        "(102) (5-19M) Lydian b2 Pentachord": {
            "Lydian b2 Pentachord | Major (b9 #11) | { 1 b2 3 #4 5 } < a >": [0, 1, 4, 6, 7],
            " | Diminished Major 7 (11) | { 1 b3 4 b5 7 } < b >": [0, 3, 5, 6, 11],
            " | Diminished 7 no5 (9 b13) | { 1 2 b3 b6 bb7 } < c >": [0, 2, 3, 8, 9],
            " | 7 sus#4 (b9) | { 1 b2 #4 5 b7 } < d >": [0, 1, 6, 7, 10],
            " | Diminished Major 7 sus4 (13) | { 1 4 b5 6 7 } < e >": [0, 5, 6, 9, 11]
        },
        "(103) (5-20) Major 7 (11)": {
            " | Major 7 (11) | { 1 3 4 5 7 } < b >": [0, 4, 5, 7, 11],
            " | Minor (b9 b13) | { 1 b2 b3 5 b6 } < c >": [0, 1, 3, 7, 8],
            " | Major 7 sus2 (#11) | { 1 2 #4 5 7 } < d >": [0, 2, 6, 7, 11],
            " | Dominant 7 no5 (11 13) | { 1 3 4 6 b7 } < e >": [0, 4, 5, 9, 10],
            " | Diminished sus4 (b9 b13) | { 1 b2 4 b5 b6 } < a >": [0, 1, 5, 6, 8]
        },
        "(104) (5-20M) Major 7 (#11)": {
            " | Major 7 (#11) | { 1 3 #4 5 7 } < b >": [0, 4, 6, 7, 11],
            "Hirajoshi | Minor (9 b13) | { 1 2 b3 5 b6 } < c >": [0, 2, 3, 7, 8],
            "Iwato | Half-Diminished 7 sus4 (b9) | { 1 b2 4 b5 b7 } < d >": [0, 1, 5, 6, 10],
            " | Major 7 no5 (11 13) | { 1 3 4 6 7 } < e >": [0, 4, 5, 9, 11],
            " | sus4 (b9 b13) | { 1 b2 4 5 b6 } < a >": [0, 1, 5, 7, 8]
        },
        "(105) (5-21) Major 7 (#9)": {
            " | Major 7 (#9) | { 1 #2 3 5 7 } < b >": [0, 3, 4, 7, 11],
            " | Augmented (b9 13) | { 1 b2 3 #5 6 } < c >": [0, 1, 4, 8, 9],
            " | Minor Major 7 (b13) | { 1 b3 5 b6 7 } < d >": [0, 3, 7, 8, 11],
            " | Augmented (11 13) < e >": [0, 4, 5, 8, 9],
            " | Augmented (b9 11) | { 1 b2 3 4 b6 } < a >": [0, 1, 4, 5, 8]
        },
        "(106) (5-21M) Major 7 (b13)": {
            " | Major 7 (b13) | { 1 3 5 b6 7 } < e >": [0, 4, 7, 8, 11],
            " | Major (#9 b13) | { 1 #2 3 5 b6 } < a >": [0, 3, 4, 7, 8],
            " | Major 6 no5 (b9 11) | { 1 b2 3 4 6 } < b >": [0, 1, 4, 5, 9],
            " | Augmented Major 7 (#9) | { 1 #2 3 #5 7 } < c >": [0, 3, 4, 8, 11],
            " | Augmented sus4 (b9 13) | < d >": [0, 1, 5, 8, 9]
        },
        "(107) (5-22) Minor Major 7 (#11)": {
            " | Minor Major 7 (#11) | { 1 b3 #4 5 7 } < b >": [0, 3, 6, 7, 11],
            " | Augmented (#9 13) | { 1 #2 3 #5 6 } < c >": [0, 3, 4, 8, 9],
            " | Diminished 7 sus4 (b9) | { 1 b2 4 b5 bb7 } < d >": [0, 1, 5, 6, 9],
            " | Augmented Major 7 (11) | { 1 3 4 #5 7 } < e >": [0, 4, 5, 8, 11],
            " | Major (b9 b13) | { 1 b2 3 5 b6 } < a >": [0, 1, 4, 7, 8]
        },
        "(108) (5-23) Minor Pentachord": {
            "Minor Pentachord | Minor (9 11) | { 1 2 b3 4 5 } < a >": [0, 2, 3, 5, 7],
            " | Minor 7 no5 (b9 11) | { 1 b2 b3 4 b7 } < b >": [0, 1, 3, 5, 10],
            " | Major 7 no5 (9 13) | { 1 2 3 6 7 } < c >": [0, 2, 4, 9, 11],
            " | 7 sus2 (13) | { 1 2 5 6 b7 } < d >": [0, 2, 7, 9, 10],
            " | 7 sus4 (b13) | { 1 4 5 b6 b7 } < e >": [0, 5, 7, 8, 10]
        },
        "(109) (5-23M) Major Pentachord": {
            "Major Pentachord | Major (9 11) | { 1 2 3 4 5 } < a >": [0, 2, 4, 5, 7],
            " | Minor 7 no5 (9 11) | { 1 2 b3 4 b7 } < b >": [0, 2, 3, 5, 10],
            " | Minor 7 #5 (b9) | { 1 b2 b3 b6 b7 } < c >": [0, 1, 3, 8, 10],
            " | Major 7 sus2 (13) | { 1 2 5 6 7 } < d >": [0, 2, 7, 9, 11],
            " | 7 sus4 (13) | { 1 4 5 6 b7 } < e >": [0, 5, 7, 9, 10]
        },
        "(110) (5-24) Phrygian Pentachord": {
            "Phrygian Pentachord | Minor (b9 11) | { 1 b2 b3 4 5 } < a >": [0, 1, 3, 5, 7],
            " | Major 9 b5 | { 1 2 3 #4 7 } < b >": [0, 2, 4, 6, 11],
            " | 7 no5 (9 13) | { 1 2 3 6 b7 } < c >": [0, 2, 4, 9, 10],
            " | 7 sus2 (b13) | { 1 2 5 b6 b7 } < d >": [0, 2, 7, 8, 10],
            " | Half-Diminished sus4 (b13) | { 1 4 b5 b6 b7 } < e >": [0, 5, 6, 8, 10]
        },
        "(111) (5-24M) Lydian Pentachord": {
            "Lydian Pentachord | Major (9 #11) | { 1 2 3 #4 5 } < a >": [0, 2, 4, 6, 7],
            " | Dominant 7 no5 (9 11) | { 1 2 3 4 b7 } < b >": [0, 2, 4, 5, 10],
            " | Minor 9 #5 | { 1 2 b3 b6 b7 } < c >": [0, 2, 3, 8, 10],
            " | Half-Diminished susb2 (b13) | { 1 b2 b5 b6 b7 } < d >": [0, 1, 6, 8, 10],
            " | Major 7 sus4 (13) | { 1 4 5 6 7 } < e >": [0, 5, 7, 9, 11]
        },
        "(112) (5-25) Half-Diminished 7 (b9)": {
            " | Half-Diminished 7 (b9) | { 1 b2 b3 b5 b7 } < b >": [0, 1, 3, 6, 10],
            " | Major 7 sus4 no5 (9 13) | { 1 2 4 6 7 } < c >": [0, 2, 5, 9, 11],
            " | Minor 7 (13) | { 1 b3 5 6 b7 } < d >": [0, 3, 7, 9, 10],
            " | Major 6 (#11) | { 1 3 #4 5 6 } < e >": [0, 4, 6, 7, 9],
            "Minor #5 Pentachord | Minor #5 (9 11) | { 1 2 b3 4 b6 } < a >": [0, 2, 3, 5, 8]
        },
        "(113) (5-25M) Minor 7 (b9)": {
            " | Minor 7 (b9) | { 1 b2 b3 5 b7 } < c >": [0, 1, 3, 7, 10],
            " | Diminished Major 7 sus2 (13) | { 1 2 #4 6 7 }  < d >": [0, 2, 6, 9, 11],
            " | Dominant 7 (13) | { 1 3 5 6 b7 }  < e >": [0, 4, 7, 9, 10],
            " | Diminished (11 b13) | { 1 b3 4 b5 b6 } < a >": [0, 3, 5, 6, 8],
            " | Minor 6 no5 (9 11) | { 1 2 b3 4 6 } < b >": [0, 2, 3, 5, 9]
        },
        "(114) (5-26) Ionian #5 Pentachord": {
            "Ionian #5 Pentachord | Augmented (9 11) | { 1 2 3 4 #5 } < a >": [0, 2, 4, 5, 8],
            " | Half-Diminished 7 (9) | { 1 2 b3 b5 b7 } < b >": [0, 2, 3, 6, 10],
            " | Augmented 7 (b9) | { 1 b2 3 b6 b7 } < c >": [0, 1, 4, 8, 10],
            " | Minor Major 7 (13) | { 1 b3 5 6 7 } < d >": [0, 3, 7, 9, 11],
            " | Augmented (#11 13) | { 1 3 #4 #5 6 } < e >": [0, 4, 6, 8, 9]
        },
        "(115) (5-26M) Dominant 7 (b13)": {
            " | Dominant 7 (b13) | { 1 3 5 b6 b7 } < e >": [0, 4, 7, 8, 10],
            "Lydian #2 #5 Pentachord | Augmented (#9 #11) | { 1 #2 3 #4 #5 } < a >": [0, 3, 4, 6, 8],
            " | Diminished 7 no5 (b9 11) | { 1 b2 b3 4 6 } < b >": [0, 1, 3, 5, 9],
            " | Augmented Major 9 | { 1 2 3 #5 7 } < c >": [0, 2, 4, 8, 11],
            " | Half-Diminished 7 sus2 (13) | { 1 2 #4 6 b7 } < d >": [0, 2, 6, 9, 10]
        },
        "(116) (5-27) Major 9": {
            "Phrygian #5 Pentachord | Minor #5 (b9 11) | { 1 b2 b3 4 b6 } < a >": [0, 1, 3, 5, 8],
            " | Major 9 | { 1 2 3 5 7 } < b >": [0, 2, 4, 7, 11],
            " | 7 sus4 no5 (9 13) | { 1 2 4 6 b7 } < c >": [0, 2, 5, 9, 10],
            " | Minor 7 (b13) | { 1 b3 5 b6 b7 } < d >": [0, 3, 7, 8, 10],
            " | Major (11 13) | { 1 3 4 5 6 } < e >": [0, 4, 5, 7, 9]
        },
        "(117) (5-27M) Minor 9": {
            " | Minor 9 | { 1 2 b3 5 b7 } < c >": [0, 2, 3, 7, 10],
            " | Augmented 7 sus4 (b9) | { 1 b2 4 b6 b7 } < d >": [0, 1, 5, 8, 10],
            " | Major 7 (13) | { 1 3 5 6 7 } < e >": [0, 4, 7, 9, 11],
            " | Minor (11 b13) | { 1 b3 4 5 b6 } < a >": [0, 3, 5, 7, 8],
            " | Major 6 no5 (9 11) | { 1 2 3 4 6 } < b >": [0, 2, 4, 5, 9]
        },
        "(118) (5-28) Dominant 7 (#11)": {
            " | Dominant 7 (#11) | { 1 3 #4 5 b7 } < e >": [0, 4, 6, 7, 10],
            "Lydian b3 #5 Pentachord | Diminished (9 b13) | { 1 2 b3 b5 b6 } < a >": [0, 2, 3, 6, 8],
            " | Dominant 7 b5 (b9) | { 1 b2 3 b5 b7 } < b >": [0, 1, 4, 6, 10],
            " | Minor Major 7 no5 (11 13) | { 1 b3 4 6 7 } < c >": [0, 3, 5, 9, 11],
            " | Augmented sus2 (#11 13) | { 1 2 #4 #5 6 } < d >": [0, 2, 6, 8, 9]
        },
        "(119) (5-28M) Dominant 7 b5 (#9)": {
            " | Dominant 7 b5 (#9) | 1 #2 3 #4 b7) < b >": [0, 3, 4, 6, 10],
            " | Minor 6 (b9) | { 1 b2 b3 5 6 } < c >": [0, 1, 3, 7, 9],
            " | Augmented Major 7 sus2 (#11) | { 1 2 #4 #5 7 } < d >": [0, 2, 6, 8, 11],
            " | Dominant 7 b5 (13) | { 1 3 #4 6 b7 } < e >": [0, 4, 6, 9, 10],
            " | Diminished sus4 ( 9 b13 ) | { 1 2 4 b5 b6 } < a >": [0, 2, 5, 6, 8]
        }, 
        "(120) (5-29) Dominant 7 (11)": {
            " | Dominant 7 (11) | { 1 3 4 5 b7 } < e >": [0, 4, 5, 7, 10],
            "Phrygian #4 #5 Pentachord | Diminished (b9 b13) | { 1 b2 b3 b5 b6 } < a >": [0, 1, 3, 6, 8],
            " | Major 9 sus4 | { 1 2 4 5 7 } < b >": [0, 2, 5, 7, 11],
            " | Minor 7 no5 (11 b13) | { 1 b3 4 6 b7 } < c >": [0, 3, 5, 9, 10],
            " | sus2 (#11 13) | { 1 2 #4 5 6 } < d >": [0, 2, 6, 7, 9]
        },
        "(121) (5-29M) Half-Diminished 7 (11)": {
            " | Half-Diminished 7 (11) | { 1 b3 4 b5 b7 } < b >": [0, 3, 5, 6, 10],
            "Kumoi | Minor 6 (9) | { 1 2 b3 5 6 } < c >": [0, 2, 3, 7, 9],
            "Insen | 7 sus4 (b9) | { 1 b2 4 5 b7 } < d >": [0, 1, 5, 7, 10],
            " | Major 7 no5 (#11 13) | { 1 3 #4 6 7 } < e >": [0, 4, 6, 9, 11],
            " | sus4 (9 b13) | { 1 2 4 5 b6 } < a >": [0, 2, 5, 7, 8]
        },
        "(122) (5-30) Minor Major 7 (11)": {
            " | Minor Major 7 (11) | { 1 b3 4 5 7 } < b >": [0, 3, 5, 7, 11],
            " | Augmented (9 13) | { 1 2 3 #5 6 } < c >": [0, 2, 4, 8, 9],
            " | 7 sus2 (#11) | { 1 2 #4 5 b7 } < d >": [0, 2, 6, 7, 10],
            " | Augmented 7 (11) | { 1 3 4 b6 b7 } < e >": [0, 4, 5, 8, 10],
            " | Augmented (b9 #11) | { 1 b2 3 #4 #5 } < a >": [0, 1, 4, 6, 8],
        },
        "(123) (5-30M) Augmented 7 (#9)": {
            " | Augmented 7 (#9) | { 1 #2 3 #5 b7 } < c >": [0, 3, 4, 8, 10],
            " | sus4 (b9 13) | { 1 b2 4 5 6 } < d >": [0, 1, 5, 7, 9],
            " | Augmented Major 7 (#11) | { 1 3 #4 #5 7 } < e >": [0, 4, 6, 8, 11],
            " | Major (9 b13) | { 1 2 3 5 b6 } < a >": [0, 2, 4, 7, 8],
            " | Half-Diminished 7 sus4 (9) | { 1 2 4 b5 b7 } < b >": [0, 2, 5, 6, 10],
        },
        "(124) (5-31) Diminished 7 (b9)": {
            " | Diminished 7 (b9) | { 1 b2 b3 b5 bb7 } < a >": [0, 1, 3, 6, 9],
            " | Augmented Major 9 sus4 | { 1 2 4 #5 7 } < b >": [0, 2, 5, 8, 11],
            " | Half-Diminished 7 (13) | { 1 b3 b5 6 b7 } < c >": [0, 3, 6, 9, 10],
            " | Minor 6 (#11) | { 1 b3 #4 5 6 } < d >": [0, 3, 6, 7, 9],
            " | Major 6 b5 (#9) | { 1 #2 3 #4 6 } < e >": [0, 3, 4, 6, 9]
        },
        "(125) (5-31M) Dominant 7 (b9)": {
            " | Dominant 7 (b9) | { 1 b2 3 5 b7 } < b >": [0, 1, 4, 7, 10],
            " | Diminished Major 7 (13) | { 1 b3 b5 6 7 } < c >": [0, 3, 6, 9, 11],
            " | Diminished 7 (b13) | { 1 b3 b5 b6 bb7 } < d >": [0, 3, 6, 8, 9],
            " | Diminished 7 (11) | { 1 b3 4 b5 bb7 } < e >": [0, 3, 5, 6, 9],
            " | Diminished 7 (9) | { 1 2 b3 b5 bb7 } < a >": [0, 2, 3, 6, 9]
        },
        "(126) (5-32) Minor 7 (#11)": {
            " | Minor 7 (#11) | { 1 b3 #4 5 b7 } < d >": [0, 3, 6, 7, 10],
            " | Major 6 (#9) | { 1 #2 3 5 6 } < e >": [0, 3, 4, 7, 9],
            " | Major 6 b5 (b9) | { 1 b2 3 #4 6 } < a >": [0, 1, 4, 6, 9],
            " | Minor Major 7 #5 (11) | { 1 b3 4 b6 7 } < b >": [0, 3, 5, 8, 11],
            " | Augmented sus4 (9 13) | { 1 2 4 #5 6 } < c >": [0, 2, 5, 8, 9]
        },
        "(127) (5-32M) Dominant 7 (#9)": {
            " | Dominant 7 (#9) | { 1 #2 3 5 b7 } < b >": [0, 3, 4, 7, 10],
            "Elektra Chord | Major 6 (b9) | { 1 b2 3 5 6 } < c >": [0, 1, 4, 7, 9],
            " | Diminished Major 7 (b13) | { 1 b3 b5 b6 7 } < d >": [0, 3, 6, 8, 11],
            " | Minor 6 #5 (11) | { 1 b3 4 b6 bb7 } < e >": [0, 3, 5, 8, 9],
            " | Diminished 7 sus4 (9) | { 1 2 4 b5 6 } < a >": [0, 2, 5, 6, 9]
        },
        "(128) (5-33) Lydian #5 Pentachord": {
            "Lydian #5 Pentachord | Augmented (9 #11) | { 1 2 3 #4 #5 } < a >": [0, 2, 4, 6, 8],
            " | Dominant 9 b5 | { 1 2 3 b5 b7 } < b >": [0, 2, 4, 6, 10],
            " | Augmented 7 (9) | { 1 2 3 b6 b7 } < c >": [0, 2, 4, 8, 10],
            " | Augmented 7 sus2 (#11) | { 1 2 b5 b6 b7 } < d >": [0, 2, 6, 8, 10],
            " | Augmented 7 (#11) | { 1 3 #4 #5 b7 } < e >": [0, 4, 6, 8, 10]
        },
        "(129) (5-34) Dominant 7 (9)": {
            " | Dominant 7 (9) | { 1 2 3 5 b7 } < b >": [0, 2, 4, 7, 10],
            " | Augmented 7 sus4 (9) | { 1 2 4 b6 b7 } < c >": [0, 2, 5, 8, 10],
            " | Half-Diminished (b13) | { 1 b3 b5 b6 b7 } < d >": [0, 3, 6, 8, 10],
            " | Minor 6 (11) < e >": [0, 3, 5, 7, 9],
            " | Major 6 b5 (9) | { 1 2 3 #4 6 } < a >": [0, 2, 4, 6, 9]
        },
        "(130) (5-35) Major Pentatonic": {
            "Major Pentatonic | Major 6 (9) | { 1 2 3 5 6 } < a >": [0, 2, 4, 7, 9],
            " | 9 sus4 | { 1 2 4 5 b7 } < b >": [0, 2, 5, 7, 10],
            " | Minor 7 #5 (11) | { 1 b3 4 b6 b7 } < c >": [0, 3, 5, 8, 10],
            " | 6 sus4 (9) | { 1 2 4 5 6 } < d >": [0, 2, 5, 7, 9],
            "Minor Pentatonic | Minor 7 (11) | { 1 b3 4 5 b7 } < e >": [0, 3, 5, 7, 10]
        },
        "(131) (5-12) Major (b9 9)": {
            "Phrygian bb3 b4 Pentachord | Major (b9 9) | { 1 b2 2 3 5 } < a >": [0, 1, 2, 4, 7],
            " | Diminished Major 7 (b9) | { 1 b2 b3 b5 7 } < b >": [0, 1, 3, 6, 11],
            " | Major 7 sus4 no5 (9 #13) | { 1 2 4 b7 7 } < c >": [0, 2, 5, 10, 11],
            " | Minor #5 (13) | { 1 b3 #5 6 b7 } < d >": [0, 3, 8, 9, 10],
            " | sus4 (#11 13) | { 1 4 #4 5 6 } < e >": [0, 5, 6, 7, 9]
        },
        "(132) (5-12M) Minor (11 #11)": {
            "Lydian #2 #3 Pentachord | Minor (11 #11) | { 1 b3 4 #4 5 } < a >": [0, 3, 5, 6, 7],
            " | Major 6 no5 (9 #9) | { 1 2 b3 3 6 } < b >": [0, 2, 3, 4, 9],
            " | 7 sus2 (b9) | { 1 b2 2 5 b7 } < c >": [0, 1, 2, 7, 10],
            " | Diminished Major 7 susb2 (13) | { 1 b2 b5 6 7 } < d >": [0, 1, 6, 9, 11],
            " | Augmented Major 7 sus4 (#13) | { 1 4 b6 b7 7 } < e >": [0, 5, 8, 10, 11]
        },
        "(133) (5-17) Augmented Major 7 (b9)": {
            " | Augmented Major 7 (b9) | { 1 b2 3 #5 7 } < c >": [0, 1, 4, 8, 11],
            " | Minor Major 7 (#13) | { 1 b3 5 b7 7 } < d >": [0, 3, 7, 10, 11],
            " | Major 6 (b13) | { 1 3 5 b6 6 } < e >": [0, 4, 7, 8, 9],
            "Ionian #2 #5 Pentachord | Augmented (#9 11) | { 1 #2 3 4 #5 } < a >": [0, 3, 4, 5, 8],
            " | 6 sus4 no5 (b9 9) | { 1 b2 2 4 6 } < b >": [0, 1, 2, 5, 9]
        },
        "(134) (5-Y18) Major 7 (b9)": {
            " | Major 7 (b9) | { 1 b2 3 5 7 } < b >": [0, 1, 4, 7, 11],
            " | Diminished Major 7 (#13) | { 1 b3 b5 b7 7 } < c >": [0, 3, 6, 10, 11],
            " | Minor 6 (b13) | { 1 b3 5 b6 6 } < d >": [0, 3, 7, 8, 9],
            " | Major 6 b5 (11) | { 1 3 4 b5 6 } < e >": [0, 4, 5, 6, 9],
            " | Augmented sus4 (b9 9) | { 1 b2 2 4 b6 } < a >": [0, 1, 2, 5, 8]
        },
        "(135) (5-Y18M) Minor (#11 b13)": {
            " | Minor (#11 b13) | { 1 b3 #4 5 b6 } < a >": [0, 3, 6, 7, 8],
            " | Major 6 no5 (#9 11) | { 1 #2 3 4 6 } < b >": [0, 3, 4, 5, 9],
            " | Diminished 7 sus2 (b9) | { 1 b2 2 b5 bb7 } < c >": [0, 1, 2, 6, 9],
            " | Augmented Major 7 sus4 (b9) | { 1 b2 4 #5 7 } < d >": [0, 1, 5, 8, 11],
            " | Major 7 no5 (#13) | { 1 3 5 b7 7 }  < e >": [0, 4, 7, 10, 11]
        }
    },
    hexads: {
        "(136) (6-1) Chromatic Hexachord": {
            "Chromatic Hexachord, Major Tetrachord add b2 and b3 |  | { 1 b2 2 b3 3 4 } < a >": [0, 1, 2, 3, 4, 5],
            " | Major 7 no5 (b9 9 #9) | { 1 b2 2 b3 3 7 } < b >": [0, 1, 2, 3, 4, 11],
            " | Minor Major 7 no5 (b9 9 #13) | { 1 b2 2 b3 b7 7 } < c >": [0, 1, 2, 3, 10, 11],
            " | Major 7 sus2 no5 (b9 13 #13) | { 1 b2 2 6 b7 7 } < d >": [0, 1, 2, 9, 10, 11],
            " | Augmented Major 7 sus b2 (13 #13) | { 1 b2 b6 6 b7 7 } < e >": [0, 1, 8, 9, 10, 11],
            " | Major 7 no3 (b13 13 #13) | { 1 5 b6 6 b7 7 } < f >": [0, 7, 8, 9, 10, 11]
        },
        "(137) (6-2) Lydian Tetrachord add (b2 b3)": {
            "Lydian Tetrachord add (b2 b3) | Major b5 (b9 9 #9) | { 1 b2 2 b3 3 #4 } < a >": [0, 1, 2, 3, 4, 6],
            " | Minor Major 7 no5 (b9 9 11) | { 1 b2 2 b3 4 7 } < b >": [0, 1, 2, 3, 5, 11],
            " | Major 7 no5 (b9 9 #13) | { 1 b2 2 3 b7 7 } < c >": [0, 1, 2, 4, 10, 11],
            " | Minor Major 7 no5 (b9 13 #13) | { 1 b2 b3 6 b7 7 } < d >": [0, 1, 3, 9, 10, 11],
            " | Augmented Major 7 sus2 (13 #13) | { 1 2 #5 6 b7 7 } < e >": [0, 2, 8, 9, 10, 11],
            " | 7 sus#4 (b13 13) | { 1 #4 5 b6 6 b7 } < f >": [0, 6, 7, 8, 9, 10]
        },
        "(138) (6-2M) Locrian nat2 Pentachord add nat3": {
            "Locrian nat2 Pentachord add nat3 | Major b5 (9 #9 11) | { 1 2 b3 3 4 b5 } < a >": [0, 2, 3, 4, 5, 6],
            " | Dominant 7 no5 (b9 9 #9) | { 1 b2 2 b3 3 b7 } < b >": [0, 1, 2, 3, 4, 10],
            " | Minor Major 7 no5 (b9 9 13) | { 1 b2 b3 6 7 } < c >": [0, 1, 2, 3, 9, 11],
            " | Augmented Major 7 sus2 (b9 #13) | { 1 b2 2 b6 b7 7 } < d >": [0, 1, 2, 8, 10, 11],
            " | Major 7 susb2 (13 #13) | { 1 b2 5 6 b7 7 } < e >": [0, 1, 7, 9, 10, 11],
            " | Augmented Major 7 no3 (#11 13 #13) | { 1 #4 #5 6 b7 7 } | < f >": [0, 6, 8, 9, 10, 11]
        },
        "(139) (6-X3) Locrian Pentachord add nat2": {
            "Locrian Pentachord add nat2 | Diminished (b9 9 11) | { 1 b2 2 b3 4 b5 } < a >": [0, 1, 2, 3, 5, 6],
            " | Major 7 no5 (b9 9 11) | { 1 b2 2 3 4 7 } < b >": [0, 1, 2, 4, 5, 11],
            " | Major 7 no5 (b9 #9 #13) | { 1 b2 b3 3 b7 7 } < c >": [0, 1, 3, 4, 10, 11],
            " | Minor Major 7 no5 (9 13 #13) | { 1 2 b3 6 b7 7 } < d >": [0, 2, 3, 9, 10, 11],
            " | 7 sus b2 (b13 13) | { 1 b2 5 b6 6 b7 } < e >": [0, 1, 7, 8, 9, 10],
            " | Major 7 sus#4 (b13 13) | { 1 #4 5 b6 6 7 } < f >": [0, 6, 7, 8, 9, 11]
        },
        "(140) (6-X3M) Locrian Pentachord add nat3": {
            "Locrian Pentachord add nat3 | Major b5 (b9 #9 11) | { 1 b2 b3 3 4 b5 } < a >": [0, 1, 3, 4, 5, 6],
            " | Major 7 no5 (9 #9 11) | { 1 2 b3 3 4 7 } < b >": [0, 2, 3, 4, 5, 11],
            " | Minor 7 no5 (b9 9 13) | { 1 b2 2 b3 6 b7 } < c >": [0, 1, 2, 3, 9, 10],
            " | Augmented Major 7 sus2 (b9 13) | { 1 b2 2 #5 6 7 } < d >": [0, 1, 2, 8, 9, 11],
            " | Major 7 sus b2 (b13 #13) | { 1 b2 5 b6 b7 7 } < e >": [0, 1, 7, 8, 10, 11],
            " | Major 7 sus#4 (13 #13) | { 1 #4 5 6 b7 7 } < f >": [0, 6, 7, 9, 10, 11]
        },
        "(141) (6-Z4) Ionian b5 Pentachord add b2": {
            "Ionian b5 Pentachord add b2 | Major b5 (b9 9 11) | { 1 b2 2 3 4 b5 } < a >": [0, 1, 2, 4, 5, 6],
            " | Major 7 no5 (b9 #9 11) | { 1 b2 b3 3 4 7 } < b >": [0, 1, 3, 4, 5, 11],
            " | Major 7 no5 (9 #9 #13) | { 1 2 b3 3 b7 7 } < c >": [0, 2, 3, 4, 10, 11],
            " | Augmented 7 sus2 (b9 13) | { 1 b2 2 #5 6 b7 } < d >": [0, 1, 2, 8, 9, 10],
            " | Major 7 sus b2 (b13 13) | { 1 b2 5 b6 6 7 } < e >": [0, 1, 7, 8, 9, 11],
            " | Major 7 sus#4 (b13 #13) | { 1 #4 5 b6 b7 7 } < f >": [0, 6, 7, 8, 10, 11]
        },
        "(142) (6-5) Minor #4 Pentachord add b2": {
            "Minor #4 Pentachord add b2 | Minor (b9 9 #11) | { 1 b2 2 b3 #4 5 } < a >": [0, 1, 2, 3, 6, 7],
            " | Diminished Major 7 sus4 (b9 9) | { 1 b2 2 4 b5 7 } < b >": [0, 1, 2, 5, 6, 11],
            " | Major 7 no 5 (b9 11 #13) | { 1 b2 3 4 b7 7 } < c >": [0, 1, 4, 5, 10, 11],
            " | Major 7 no5 (#9 13 #13) | { 1 b3 3 6 b7 7 } < d >": [0, 3, 4, 9, 10, 11],
            " | sus#4 (b9 b13 13) | { 1 b2 #4 5 b6 6 } < e >": [0, 1, 6, 7, 8, 9],
            " | Major 7 sus4 (#11 b13) | { 1 4 #4 5 b6 7 } < f >": [0, 5, 6, 7, 8, 11]
        },
        "(143) (6-5M) Phrygian Major Pentachord add #4": {
            "Phrygian Major Pentachord add #4 | Major (b9 11 #11) | { 1 b2 3 4 #4 5 } < a >": [0, 1, 4, 5, 6, 7],
            " | Major 7 b5 (#9 11) | { 1 #2 3 4 b5 7 } < b >": [0, 3, 4, 5, 6, 11],
            " | Minor 6 #5 (b9 9) | { 1 b2 2 b3 #5 6 } < c >": [0, 1, 2, 3, 8, 9],
            " | Major 7 sus2 (b9 b13) | { 1 b2 2 5 b6 7 } < d >": [0, 1, 2, 7, 8, 11],
            " | Major 7 sus#4 (b9 #13) | { 1 b2 #4 5 b7 7 } < e >": [0, 1, 6, 7, 10, 11],
            " | Diminished Major 7 sus4 (13 #13) | { 1 4 b5 6 b7 7 } < f >": [0, 5, 6, 9, 10, 11]
        },
        "(144) (6-Z6) Locrian bb3 Pentachord add #4": {
            "Locrian bb3 Pentachord add #4 | sus4 (b9 9 #11) | { 1 b2 2 4 #4 5 } < a >": [0, 1, 2, 5, 6, 7],
            " | Major 7 b5 (b9 11) | { 1 b2 3 4 b5 7 } < b >": [0, 1, 4, 5, 6, 11],
            " | Major 7 no5 (#9 11 #13) | { 1 b3 3 4 b7 7 } < c >": [0, 3, 4, 5, 10, 11],
            " | sus2 (b9 b13 13) | { 1 b2 2 5 b6 6 } < d >": [0, 1, 2, 7, 8, 9],
            " | Major 7 sus#4 (b9 b13) | { 1 b2 #4 5 b6 7 } < e >": [0, 1, 6, 7, 8, 11],
            " | Major 7 sus4 (#11 #13) | { 1 4 #4 5 b7 7 } < f >": [0, 5, 6, 7, 10, 11]
        },
        "(145) (6-7S) Phrygian bb3 #4 Hexachord": {
            "Phrygian bb3 #4 Hexachord | sus#4 (b9 9 b13) | { 1 b2 2 #4 5 b6 } < a >": [0, 1, 2, 6, 7, 8],
            "Messiaen Mode 5 | Major 7 sus4 (b9 #11) | { 1 b2 4 #4 5 7 } < b >": [0, 1, 5, 6, 7, 11],
            " | Major 7 b5 (11 #13) | { 1 3 4 b5 b7 7 } < c >": [0, 4, 5, 6, 10, 11]
        },
        "(146) (6-8) Major Pentachord add b3": {
            "Major Pentachord add b3 | Major (9 #9 11) | { 1 2 b3 3 4 5 } < a >": [0, 2, 3, 4, 5, 7],
            " | Minor 7 no5 (b9 9 11) | { 1 b2 2 b3 4 b7 } < b >": [0, 1, 2, 3, 5, 10],
            " | Major 7 no5 (b9 9 13) | { 1 b2 2 3 6 7 } < c >": [0, 1, 2, 4, 9, 11],
            " | Minor Major 7 #5 (b9 #13) | { 1 b2 b3 #5 b7 7 } < d >": [0, 1, 3, 8, 10, 11],
            " | Major 7 sus2 (13 #13) | { 1 2 5 6 b7 7 } < e >": [0, 2, 7, 9, 10, 11],
            " | 7 sus4 (b13 13) | { 1 4 5 b6 6 b7 } < f >": [0, 5, 7, 8, 9, 10]
        },
        "(147) (6-9) Minor Pentachord add b2": {
            "Minor Pentachord add b2 | Minor (b9 9 11) | { 1 b2 2 b3 4 5 } < a >": [0, 1, 2, 3, 5, 7],
            " | Major 7 b5 (b9 9) | { 1 b2 2 3 b5 7 } < b >": [0, 1, 2, 4, 6, 11],
            " | Minor Major 7 no5 (b9 11 #13) | { 1 b2 b3 4 b7 7 } < c >": [0, 1, 3, 5, 10, 11],
            " | Major 7 no5 (9 13 #13) | { 1 2 3 6 b7 7 } < d >": [0, 2, 4, 9, 10, 11],
            " | 7 sus2 (b13 13) | { 1 2 5 b6 6 b7 } < e >": [0, 2, 7, 8, 9, 10],
            " | 7 sus4 (#11 b13) | { 1 4 #4 5 b6 b7 } < f >": [0, 5, 6, 7, 8, 10]
        },
        "(148) (6-9M) Ionian Pentachord add #4": {
            "Ionian Pentachord add #4 | Major (9 11 #11) | { 1 2 3 4 #4 5 } < a >": [0, 2, 4, 5, 6, 7],
            " | Dominant 7 no5 (9 #9 11) | { 1 2 b3 3 4 b7 } < b >": [0, 2, 3, 4, 5, 10],
            " | Minor 7 #5 (b9 9) | { 1 b2 2 b3 #5 b7 } < c >": [0, 1, 2, 3, 8, 10],
            " | Major 7 sus2 (b9 13) | { 1 b2 2 5 6 7 } < d >": [0, 1, 2, 7, 9, 11],
            " | Augmented Major 7 sus#4 (b9 #13) | { 1 b2 #4 #5 b7 7 } < e >": [0, 1, 6, 8, 10, 11],
            " | Major 7 sus4 (13 #13) | { 1 4 5 6 b7 7 } < f >": [0, 5, 7, 9, 10, 11]
        },
        "(149) (6-X10) Phrygian Pentachord add nat3": {
            "Phrygian Pentachord add nat3 | Major (b9 #9 11) | { 1 b2 b3 3 4 5 } < a >": [0, 1, 3, 4, 5, 7],
            " | Major 7 b5 (9 #9) | { 1 2 b3 3 b5 7 } < b >": [0, 2, 3, 4, 6, 11],
            " | Dominant 7 no5 (b9 9 13) | { 1 b2 2 3 6 b7 } < c >": [0, 1, 2, 4, 9, 10],
            " | Minor Major 7 #5 (b9 13) | { 1 b2 b3 #5 6 7 } < d >": [0, 1, 3, 8, 9, 11],
            " | Major 7 sus2 (b13 #13) | { 1 2 5 b6 b7 7 } < e >": [0, 2, 7, 8, 10, 11],
            " | Augmented 7 sus4 (#11 13) { 1 4 b5 b6 6 b7 } < f >": [0, 5, 6, 8, 9, 10]
        },
        "(150) (6-X10M) Lydian Pentachord add b3": {
            " | Major (9 #9 #11) | { 1 2 b3 3 #4 5 } < a >": [0, 2, 3, 4, 6, 7],
            " | Dominant 7 no5 (b9 9 11) | { 1 b2 2 3 4 b7 } < b >": [0, 1, 2, 4, 5, 10],
            " | Major 7 no5 (b9 #9 13) | { 1 b2 b3 3 6 7 } < c >": [0, 1, 3, 4, 9, 11],
            " | Minor Major 9 #5 (#13) | { 1 2 b3 #5 b7 7 } < d >": [0, 2, 3, 8, 10, 11],
            " | Augmented 7 sus#4 (b9 13) | { 1 b2 #4 #5 6 b7 } < e >": [0, 1, 6, 8, 9, 10],
            " | Major 7 sus4 (b13 13) | { 1 4 5 b6 6 7 } < f >": [0, 5, 7, 8, 9, 11]
        },
        "(151) (6-X11) Major Pentachord add b2": {
            "Major Pentachord add b2 | Major (b9 9 11) | { 1 b2 2 3 4 5 } < a >": [0, 1, 2, 4, 5, 7],
            " | Major 7 b5 (b9 #9) | { 1 b2 b3 3 b5 7 } < b >": [0, 1, 3, 4, 6, 11],
            " | Minor Major 7 (9 11 #13) | { 1 2 b3 4 b7 7 } < c >": [0, 2, 3, 5, 10, 11],
            " | Minor 7 #5 (b9 13) | { 1 b2 b3 #5 6 b7 } < d >": [0, 1, 3, 8, 9, 10],
            " | Major 7 sus2 (b13 13) | { 1 2 5 b6 6 7 } < e >": [0, 2, 7, 8, 9, 11],
            " | 7 sus4 (#11 13) | { 1 4 #4 5 6 b7 } < f >": [0, 5, 6, 7, 9, 10]
        },
        "(152) (6-X11M) Minor Pentachord add #4": {
            "Minor Pentachord add #4 | Minor (9 11 #11) | { 1 2 b3 4 #4 5 } < a >": [0, 2, 3, 5, 6, 7],
            " | Dominant 7 no5 (b9 #9 11) | { 1 b2 b3 3 4 b7 } < b >": [0, 1, 3, 4, 5, 10],
            " | Major 7 no5 (9 #9 13) | { 1 2 b3 3 6 7 } < c >": [0, 2, 3, 4, 9, 11],
            " | 7 sus2 (b9 13) | { 1 b2 2 5 6 b7 } < d >": [0, 1, 2, 7, 9, 10],
            " | Augmented Major 7 sus#4 (b9 13) { 1 b2 #4 #5 6 7 } < e >": [0, 1, 6, 8, 9, 11],
            " | Major 7 sus4 (b13 #13) | { 1 4 5 b6 b7 7 } < f >": [0, 5, 7, 8, 10, 11]
        },
        "(153) (6-X12) Lydian Pentachord add b2": {
            "Lydian Pentachord add b2 | Major (b9 9 #11) | { 1 b2 2 3 #4 5 } < a >": [0, 1, 2, 4, 6, 7],
            " | Diminished Major 7 (b9 11) | { 1 b2 b3 4 b5 7 } < b >": [0, 1, 3, 5, 6, 11],
            " | Major 7 no5 (9 11 #13) | { 1 2 3 4 b7 7 } < c >": [0, 2, 4, 5, 10, 11],
            " | Minor 7 #5 (9 13) | { 1 2 b3 #5 6 b7 } < d >": [0, 2, 3, 8, 9, 10],
            " | 7 sus#4 (b9 b13) | { 1 b2 #4 5 b6 b7 } < e >": [0, 1, 6, 7, 8, 10],
            " | Major 7 sus4 (#11 13) | { 1 4 #4 5 6 7 } < f >": [0, 5, 6, 7, 9, 11]
        },
        "(154) (6-X12M) Phrygian Pentachord add #4": {
            "Phrygian Pentachord add #4 | Minor (b9 11 #11) | { 1 b2 b3 4 #4 5 } < a >": [0, 1, 3, 5, 6, 7],
            " | Major 7 b5 (9 11) | { 1 2 3 4 b5 7 } < b >": [0, 2, 4, 5, 6, 11],
            " | Dominant 7 no 5 (9 #9 13) | { 1 2 b3 3 6 b7 } < c >": [0, 2, 3, 4, 9, 10],
            " | 7 sus2 (b9 b13) | { 1 b2 2 5 b6 b7 } < d >": [0, 1, 2, 7, 8, 10],
            " | Major 7 sus#4 (b9 13) | { 1 b2 #4 5 6 7 } < e >": [0, 1, 6, 7, 9, 11],
            " | Augmented Major 7 sus4 (#11 #13) | { 1 4 b5 b6 b7 7 } < f >": [0, 5, 6, 8, 10, 11]
        },
        "(155) (6-Z13) Lydian #2 Pentachord add b2": {
            "Lydian #2 Pentachord add b2 | Major (b9 #9 #11) | { 1 b2 b3 3 #4 5 } < a >": [0, 1, 3, 4, 6, 7],
            " | Diminished Major 7 (9 11) | { 1 2 b3 4 b5 7 } < b >": [0, 2, 3, 5, 6, 11],
            " | Dominant 7 no 5 (b9 #9 13) | { 1 b2 b3 3 6 b7 } < c >": [0, 1, 3, 4, 9, 10],
            " | Minor Major 7 #5 (9 13) | { 1 2 b3 #5 6 7 } < d >": [0, 2, 3, 8, 9, 11],
            " | 7 sus#4 (b9 13) | { 1 b2 #4 5 6 b7 } < e >": [0, 1, 6, 7, 9, 10],
            " | Augmented Major 7 sus4 (#11 13) | { 1 4 #4 #5 6 7 } < f >": [0, 5, 6, 8, 9, 11]
        },
        "(156) (6-14) Major 7 (9 #9)": {
            " | Major 7 (9 #9) | { 1 2 b3 3 5 7 } < b >": [0, 2, 3, 4, 7, 11],
            " | 7 sus2 no5 (b9 11 13) | { 1 b2 2 4 6 b7 } < c >": [0, 1, 2, 5, 9, 10],
            " | Augmented Major 7 (b9 13) | { 1 b2 3 #5 6 7 } < d >": [0, 1, 4, 8, 9, 11],
            " | Minor Major 7 (b13 #13) | { 1 b3 5 b6 b7 7 } < e >": [0, 3, 7, 8, 10, 11],
            " | Major 6 (11 b13) | { 1 3 4 5 b6 6 } < f >": [0, 4, 5, 7, 8, 9],
            " | Augmented (b9 #9 11) | { 1 b2 b3 3 4 #5 } < a >": [0, 1, 3, 4, 5, 8]
        },
        "(157) (6-14M) Ionian #2 b6 Hexachord": {
            "Ionian #2 b6 Hexachord | Major (#9 11 b13) | { 1 b3 3 4 5 b6 } < a >": [0, 3, 4, 5, 7, 8],
            " | Major 6 no5 (b9 9 11) | { 1 b2 2 3 4 6 } < b >": [0, 1, 2, 4, 5, 9],
            " | Augmented Major 7 (b9 #9) | { 1 b2 b3 3 #5 7 } < c >": [0, 1, 3, 4, 8, 11],
            " | Minor Major 7 (9 #13) | { 1 2 b3 5 b7 7 } < d >": [0, 2, 3, 7, 10, 11],
            " | Augmented 7 sus4 (b9 13) | { 1 b2 4 #5 6 b7 } < e >": [0, 1, 5, 8, 9, 10],
            " | Major 7 (b13 13) | { 1 3 5 b6 6 7 } < f >": [0, 4, 7, 8, 9, 11]
        },
        "(158) (6-15) Ionian #5 Pentachord add b2": {
            "Ionian #5 Pentachord add b2 | Augmented (b9 9 11) | { 1 b2 2 3 4 #5 } < a >": [0, 1, 2, 4, 5, 8],
            " | Major 7 (b9 #9) | { 1 b2 b3 3 5 7 } < b >": [0, 1, 3, 4, 7, 11],
            " | Diminished Major 7 (9 #13) | { 1 2 b3 b5 b7 7 } < c >": [0, 2, 3, 6, 10, 11],
            " | Augmented 7 (b9 13) | { 1 b2 3 #5 6 b7 } < d >": [0, 1, 4, 8, 9, 10],
            " | Minor Major 7 (b13 13) | { 1 b3 5 b6 6 7 } < e >": [0, 3, 7, 8, 9, 11],
            " | Augmented (11 #11 13) | { 1 3 4 #4 #5 6 } < f >": [0, 4, 5, 6, 8, 9]
        },
        "(159) (6-15M) Lydian #2 b6 Hexachord": {
            "Lydian #2 b6 Hexachord | Major (#9 #11 b13) | { 1 #2 3 #4 5 b6 } < a >": [0, 3, 4, 6, 7, 8],
            " | Major 6 no5 (b9 #9 11) | { 1 b2 b3 3 4 6 } < b >": [0, 1, 3, 4, 5, 9],
            " | Augmented Major 7 (9 #9) | { 1 2 b3 3 #5 7 } < c >": [0, 2, 3, 4, 8, 11],
            " | Half-Diminished sus2 (b9 13) | { 1 b2 2 b5 6 b7 } < d >": [0, 1, 2, 6, 9, 10],
            " | Augmented Major 7 sus 4 (b9 13) | { 1 b2 4 #5 6 7 } < e >": [0, 1, 5, 8, 9, 11],
            " | Major 7 (b13 #13) | { 1 3 5 b6 b7 7 } < f >": [0, 4, 7, 8, 10, 11]
        },
        "(160) (6-16) Locrian nat3 Hexachord": {
            "Locrian nat3 Hexachord | Augmented (b9 11 #11) | { 1 b2 3 4 b5 b6 } < a >": [0, 1, 4, 5, 6, 8],
            " | Major 7 (#9 11) | { 1 #2 3 4 5 7 } < b >": [0, 3, 4, 5, 7, 11],
            " | Augmented (b9 9 13) | { 1 b2 2 3 #5 6 } < c >": [0, 1, 2, 4, 8, 9],
            " | Minor Major 7 (b9 b13) | { 1 b2 b3 5 b6 7 } < d >": [0, 1, 3, 7, 8, 11],
            " | Major 7 sus2 (#11 #13) | { 1 2 #4 5 b7 7 } < e >": [0, 2, 6, 7, 10, 11],
            " | Augmented 7 (11 13) | { 1 3 4 #5 6 b7 } < f >": [0, 4, 5, 8, 9, 10]
        },
        "(161) (6-16M) Aeolian b4 Hexachord": {
            "Aeolian b4 Hexachord | Major (9 #9 b13) | { 1 2 b3 3 5 b6 } < a >": [0, 2, 3, 4, 7, 8],
            " | Half-Diminished 7 sus4 (b9 9 11) | { 1 b2 2 4 b5 b7 } < b >": [0, 1, 2, 5, 6, 10],
            " | Major 7 no5 (b9 11 13) | { 1 b2 3 4 6 7 } < c >": [0, 1, 4, 5, 9, 11],
            " | Augmented Major 7 (#9 #13) | { 1 #2 3 #5 b7 7 } < d >": [0, 3, 4, 8, 10, 11],
            " | sus4 (b9 b13 13) | { 1 b2 4 5 b6 6 } < e >": [0, 1, 5, 7, 8, 9],
            " | Major 7 (#11 b13) | { 1 3 #4 5 b6 7 } < f >": [0, 4, 6, 7, 8, 11]
        },
        "(162) (6-X17) Phrygian bb3 b4 Hexachord": {
            "Phrygian bb3 b4 Hexachord | Major (b9 9 b13) | { 1 b2 2 3 5 b6 } < a >": [0, 1, 2, 4, 7, 8],
            " | Minor Major 7 (b9 #11) | { 1 b2 b3 #4 5 7 } < b >": [0, 1, 3, 6, 7, 11],
            " | Diminished Major 7 sus4 (9 #13) | { 1 2 4 b5 b7 7 } < c >": [0, 2, 5, 6, 10, 11],
            " | Augmented 7 (#9 13) | { 1 #2 3 #5 6 b7 } < d >": [0, 3, 4, 8, 9, 10],
            " | sus4 (b9 #11 13) | { 1 b2 4 #4 5 6 } < e >": [0, 1, 5, 6, 7, 9],
            " | Major 7 b5 (11 b13) | { 1 3 4 #4 #5 7 } < f >": [0, 4, 5, 6, 8, 11]
        },
        "(163) (6-X17M) Lydian b2 b6 Hexachord": {
            "Lydian b2 b6 Hexachord | Major (b9 #11 b13) | { 1 b2 3 #4 5 b6 } < a >": [0, 1, 4, 6, 7, 8],
            " | Minor Major 7 (11 #11) | { 1 b3 4 #4 5 7 } < b >": [0, 3, 5, 6, 7, 11],
            " | Augmented (9 #9 13) | { 1 2 b3 3 #5 6 } < c >": [0, 2, 3, 4, 8, 9],
            " | 7 sus#4 (b9 9) | { 1 b2 2 #4 5 b7 } < d >": [0, 1, 2, 6, 7, 10],
            " | Diminished Major 7 sus4 (b9 13) | { 1 b2 4 b5 6 7 } < e >": [0, 1, 5, 6, 9, 11],
            " | Augmented Major 7 (11 #13) | { 1 3 4 #5 b7 7 } < f >": [0, 4, 5, 8, 10, 11]
        },
        "(164) (6-18) Phrygian bb3 Hexachord": {
            "Phrygian bb3 Hexachord | sus4 (b9 9 b13) | { 1 b2 2 4 5 b6 } < a >": [0, 1, 2, 5, 7, 8],
            " | Major 7 (b9 #11) | { 1 b2 3 #4 5 7 } < b >": [0, 1, 4, 6, 7, 11],
            " | Diminished Major 7 (11 #13) | { 1 b3 4 b5 b7 7 } < c >": [0, 3, 5, 6, 10, 11],
            " | Minor 6 (9 b13) | { 1 2 b3 5 b6 6 } < d >": [0, 2, 3, 7, 8, 9],
            " | 7 sus4 (b9 #11) | { 1 b2 4 #4 5 b7 } < e > ": [0, 1, 5, 6, 7, 10],
            " | Major 7 b5 (11 13) | { 1 3 4 b5 6 7 } < f >": [0, 4, 5, 6, 9, 11]
        },
        "(165) (6-18M) Phrygian #4 Hexachord": {
            "Phrygian #4 Hexachord |  Minor (b9 #11 b13) | { 1 b2 b3 #4 5 b6 } < a >": [0, 1, 3, 6, 7, 8],
            " | Major 7 sus2 (11 #11) | { 1 2 4 #4 5 7 } < b >": [0, 2, 5, 6, 7, 11],
            " | Dominant 7 no 5 (#9 11 13) | { 1 #2 3 4 6 b7 } < c >": [0, 3, 4, 5, 9, 10],
            " | sus#4 (b9 9 13) | { 1 b2 2 #4 5 6 } < d >": [0, 1, 2, 6, 7, 9],
            " | Diminished Major 7 sus4 (b9 b13) | { 1 b2 4 b5 b6 7 } < e >": [0, 1, 5, 6, 8, 11],
            " | Major 7 (11 #13) | { 1 3 4 5 b7 7 } < f >": [0, 4, 5, 7, 10, 11]
        },
        "(166) (6-X19) Pelog, Phrygian b4 Hexachord": {
            "Pelog, Phrygian b4 Hexachord | Minor (b9 b11 b13) | { 1 b2 b3 3 5 b6 } < a >": [0, 1, 3, 4, 7, 8],
            " | Minor Major 7 (9 #11) | { 1 2 b3 #4 5 7 } < b >": [0, 2, 3, 6, 7, 11],
            " | Dominant 7 no5 (b9 11 13) | { 1 b2 3 4 6 b7 } < c >": [0, 1, 4, 5, 9, 10],
            " | Augmented Major 7 (#9 13) | { 1 #2 3 #5 6 7 } < d >": [0, 3, 4, 8, 9, 11],
            " | Diminished 7 sus4 (b9 b13) | { 1 b2 4 b5 b6 bb7 } < e >": [0, 1, 5, 6, 8, 9],
            " | Major 7 (11 b13) | { 1 3 4 5 b6 7 } < f >": [0, 4, 5, 7, 8, 11]
        },
        "(167) (6-X19M) Phrygian nat3 Hexachord": {
            "Phrygian nat3 Hexachord | Major (b9 11 b13) | { 1 b2 3 4 5 b6 } < a >": [0, 1, 4, 5, 7, 8],
            " | Major 7 (#9 #11) | { 1 #2 3 #4 5 7 } < b >": [0, 3, 4, 6, 7, 11],
            " | Augmented (b9 #9 13) | { 1 b2 b3 3 #5 6 } < c >": [0, 1, 3, 4, 8, 9],
            " | Minor Major 7 (9 b13) | { 1 2 b3 5 b6 7 } < d >": [0, 2, 3, 7, 8, 11],
            " | Half-Diminished 7 sus4 (b9 13) | { 1 b2 4 b5 6 b7 } < e >": [0, 1, 5, 6, 9, 10],
            " | Augmented Major 7 (11 13) | { 1 3 4 #5 6 7 } < f >": [0, 4, 5, 8, 9, 11]
        },
        "(168) (6-20S) Ionian b2 #5 Hexachord": {
            "Ionian b2 #5 Hexachord, Ode To Napoleon Hexachord | Augmented (b9 11 13) | { 1 b2 3 4 #5 6 } < a >": [0, 1, 4, 5, 8, 9],
            " | Major 7 (#9 b13) | { 1 #2 3 5 b6 7 } < b >": [0, 3, 4, 7, 8, 11]
        },
        "(169) (6-21) Lydian #5 Pentachord add b3": {
            "Lydian #5 Pentachord add b3 | Diminished (9 b11 b13) | { 1 2 b3 3 #4 #5 } < a >": [0, 2, 3, 4, 6, 8],
            " | Dominant 7 b5 (b9 9) | { 1 b2 2 3 b5 b7 } < b >": [0, 1, 2, 4, 6, 10],
            " | Minor Major 7 no5 (b9 11 13) | { 1 b2 b3 4 6 7 } < c >": [0, 1, 3, 5, 9, 11],
            " | Augmented Major 7 (9 #13) | { 1 2 3 #5 b7 7 } < d >": [0, 2, 4, 8, 10, 11],
            " | Augmented 7 sus2 (#11 13) | { 1 2 #4 #5 6 b7 } < e >": [0, 2, 6, 8, 9, 10],
            " | Dominant 7 (#11 b13) | { 1 3 #4 5 b6 b7 } < f >": [0, 4, 6, 7, 8, 10]
        },
        "(170) (6-21M) Major b5 b6 Hexachord": {
            "Major b5 b6 Hexachord | Augmented (9 11 #11) | { 1 2 3 4 b5 b6 } < a >": [0, 2, 4, 5, 6, 8],
            " | Dominant 7 b5 (9 #9) | { 1 2 b3 3 b5 b7 } < b >": [0, 2, 3, 4, 6, 10],
            " | Augmented 7 (b9 9) | { 1 b2 2 3 #5 b7 } < c >": [0, 1, 2, 4, 8, 10],
            " | Minor Major 7 (b9 13) | { 1 b2 b3 5 6 7 } < d >": [0, 1, 3, 7, 9, 11],
            " | Augmented Major 7 sus2 (#11 #13) | { 1 2 b5 b6 b7 7 } < e >": [0, 2, 6, 8, 10, 11],
            " | Augmented 7 (#11 13) | { 1 3 #4 #5 6 b7 } < f >": [0, 4, 6, 8, 9, 10]
        },
        "(171) (6-22) Lydian #5 Pentachord add b2": {
            "Lydian #5 Pentachord add b2 | Augmented  (b9 9 #11) | { 1 b2 2 3 #4 #5 } < a >": [0, 1, 2, 4, 6, 8],
            " | Minor Major 7 (b9 11)| { 1 b2 b3 4 5 7 } < b >": [0, 1, 3, 5, 7, 11],
            " | Major 7 b5 (9 #13) | { 1 2 3 #4 b7 7 } < c >": [0, 2, 4, 6, 10, 11],
            " | Augmented 7 (9 13) | { 1 2 3 #5 6 b7 } < d >": [0, 2, 4, 8, 9, 10],
            " | 7 sus2 (#11 b13) | { 1 2 #4 5 b6 b7 } < e >": [0, 2, 6, 7, 8, 10],
            " | Dominant 7 b5 (11 b13) | { 1 3 4 b5 b6 b7 } < f >": [0, 4, 5, 6, 8, 10]
        },
        "(172) (6-22M) Lydian b6 Hexachord": {
            "Lydian b6 Hexachord | Major (9 #11 b13) | { 1 2 3 #4 5 b6 } < a >": [0, 2, 4, 6, 7, 8],
            " | Dominant 7 b5 (9 11) | { 1 2 3 4 b5 b7 } < b >": [0, 2, 4, 5, 6, 10],
            " | Augmented 7 (9 #9) | { 1 2 b3 3 #5 b7 } < c >": [0, 2, 3, 4, 8, 10],
            " | Half-Diminished sus2 (b9 b13) | { 1 b2 2 b5 b6 b7 } < d >": [0, 1, 2, 6, 8, 10],
            " | Major 7 sus4 (b9 13) | { 1 b2 4 5 6 7 } < e >": [0, 1, 5, 7, 9, 11],
            " | Augmented Major 7 (#11 #13) | { 1 3 b5 b6 b7 7 } < f >": [0, 4, 6, 8, 10, 11]
        },
        "(173) (6-Z23) Locrian nat2 Hexachord": {
            "Locrian nat2 Hexachord | Diminished (9 11 b13) | { 1 2 b3 4 b5 b6 } < a >": [0, 2, 3, 5, 6, 8],
            " | Dominant 7 b5 (b9 #9) | { 1 b2 b3 3 b5 b7 } < b >": [0, 1, 3, 4, 6, 10],
            " | Minor Major 7 no5 (9 11 13) | { 1 2 b3 4 6 7 } < c >": [0, 2, 3, 5, 9, 11],
            " | Minor 7 (b9 13) | { 1 b2 b3 5 6 b7 } < d >": [0, 1, 3, 7, 9, 10],
            " | Augmented Major 7 sus2 (#11 13) | { 1 2 #4 #5 6 7 } < e >": [0, 2, 6, 8, 9, 11],
            " | Dominant 7 (#11 13) | { 1 3 #4 5 6 b7 } < f >": [0, 4, 6, 7, 9, 10]
        },
        "(174) (6-X24) Locrian b4 Hexachord": {
            "Locrian b4 Hexachord | Augmented (b9 #9 #11) | { 1 b2 b3 b4 b5 b6 } < a >": [0, 1, 3, 4, 6, 8],
            " | Minor Major 7 (9 11) | { 1 2 b3 4 5 7 } < b >": [0, 2, 3, 5, 7, 11],
            " | Minor 7 no5 (b9 11 13) | { 1 b2 b3 4 6 b7 } < c >": [0, 1, 3, 5, 9, 10],
            " | Augmented Major 7 (9 13) | { 1 2 3 #5 6 7 } < d >": [0, 2, 4, 8, 9, 11],
            " | 7 sus2 (#11 13) | { 1 2 #4 5 6 b7 } < e >": [0, 2, 6, 7, 9, 10],
            " | Dominant 7 (11 b13) | { 1 3 4 5 b6 b7 } < f >": [0, 4, 5, 7, 8, 10]
        },
        "(175) (6-X24M) Harmonic Major Hexachord": {
            "Harmonic Major Hexachord | Major (9 11 b13) | { 1 2 3 4 5 b6 } < a >": [0, 2, 4, 5, 7, 8],
            " | Half-Diminished 7 (9 11) | { 1 2 b3 4 b5 b7 } < b >": [0, 2, 3, 5, 6, 10],
            " | Augmented 7 (b9 #9) | { 1 b2 b3 b4 b6 b7 } < c >": [0, 1, 3, 4, 8, 10],
            " | Minor Major 7 (9 13) | { 1 2 b3 5 6 7 } < d >": [0, 2, 3, 7, 9, 11],
            " | 7 sus4 (b9 13) | { 1 b2 4 5 6 b7 } < e >": [0, 1, 5, 7, 9, 10],
            " | Augmented Major 7 (#11 13) | { 1 3 #4 #5 6 7 } < f >": [0, 4, 6, 8, 9, 11]
        },
        "(176) (6-X25) Locrian Hexachord": {
            "Locrian Hexachord | Diminished (b9 11 b13) | { 1 b2 b3 4 b5 b6 } < a >": [0, 1, 3, 5, 6, 8],
            " | Major 7 (9 11) | { 1 2 3 4 5 7 } < b >": [0, 2, 4, 5, 7, 11],
            " | Minor 7 no5 (9 11 13) | { 1 2 b3 4 6 b7 } < c >": [0, 2, 3, 5, 9, 10],
            " | Minor 7 (b9 b13) | { 1 b2 b3 5 b6 b7 } < d >": [0, 1, 3, 7, 8, 10],
            " | Major 7 sus2 (#11 13) | { 1 2 #4 5 6 7 } < e >": [0, 2, 6, 7, 9, 11],
            " | Dominant 7 (11 13) | { 1 3 4 5 6 b7 } < f >": [0, 4, 5, 7, 9, 10]
        },
        "(177) (6-X25M) Aeolian Hexachord": {
            "Aeolian Hexachord | Minor (9 11 b13) | { 1 2 b3 4 5 b6 } < a >": [0, 2, 3, 5, 7, 8],
            " | Half-Diminished 7 (b9 11) | { 1 b2 b3 4 b5 b7 } < b >": [0, 1, 3, 5, 6, 10],
            " | Major 7 no5 (9 11 13) | { 1 2 3 4 6 7 } < c >": [0, 2, 4, 5, 9, 11],
            " | Minor 7 (9 13) | { 1 2 b3 5 6 b7 } < d >": [0, 2, 3, 7, 9, 10],
            " | 7 sus4 (b9 b13) | { 1 b2 4 5 b6 b7 } < e >": [0, 1, 5, 7, 8, 10],
            " | Major 7 (#11 13) | { 1 3 #4 5 6 7 } < f >": [0, 4, 6, 7, 9, 11]
        },
        "(178) (6-Z26) Phrygian Hexachord": {
            "Phrygian Hexachord | Minor (b9 11 b13) | { 1 b2 b3 4 5 b6 } < a >": [0, 1, 3, 5, 7, 8],
            " | Major 7 (9 #11) | { 1 2 3 #4 5 7 } < b >": [0, 2, 4, 6, 7, 11],
            " | Dominant 7 no5 (9 11 13) | { 1 2 3 4 6 b7 } < c >": [0, 2, 4, 5, 9, 10],
            " | Minor 7 (9 b13) | { 1 2 b3 5 b6 b7 } < d >": [0, 2, 3, 7, 8, 10],
            " | Half-Diminished 7 sus4 (b9 b13) | { 1 b2 4 b5 b6 b7 } < e >": [0, 1, 5, 6, 8, 10],
            " | Major 7 (11 13) | { 1 3 4 5 6 7 } < f >": [0, 4, 5, 7, 9, 11]
        },
        "(179) (6-27) Lydian #2 Hexachord": {
            "Lydian #2 Hexachord | Major 6 (#9 #11) | { 1 #2 3 #4 5 6 } < f >": [0, 3, 4, 6, 7, 9],
            "Locrian b4 nat6 Hexachord | Major 6 b5 (b9 #9) | { 1 b2 b3 3 b5 6 } < a >": [0, 1, 3, 4, 6, 9],
            " | Minor Major 7 #5 (9 11) | { 1 2 b3 4 b6 7 } < b >": [0, 2, 3, 5, 8, 11],
            " | Half-Diminished 7 (b9 13) | { 1 b2 b3 b5 6 b7 } < c >": [0, 1, 3, 6, 9, 10],
            " | Augmented Major 7 sus4 (9 13) | { 1 2 4 #5 6 7 } < d >": [0, 2, 5, 8, 9, 11],
            " | Minor 7 (#11 13) | { 1 b3 #4 5 6 b7 } < e >": [0, 3, 6, 7, 9, 10]
        },
        "(180) (6-27M) Locrian nat2 nat6 Hexachord": {
            "Locrian nat2 nat6 Hexachord | Diminished 7 (9 11) | { 1 2 b3 4 b5 6 } < a >": [0, 2, 3, 5, 6, 9],
            " | Dominant 7 (b9 #9) | { 1 b2 b3 3 5 b7 } < b >": [0, 1, 3, 4, 7, 10],
            " | Diminished Major 7 (9 13) | { 1 2 b3 b5 6 7 } < c >": [0, 2, 3, 6, 9, 11],
            " | Dominant 7 (b9 13) | { 1 b2 3 5 6 b7 } < d >": [0, 1, 4, 7, 9, 10],
            " | Minor Major 7 #5 (#11 13) | { 1 b3 #4 #5 6 7 } < e >": [0, 3, 6, 8, 9, 11],
            " | Diminished 7 (11 b13) | { 1 b3 4 b5 b6 bb7 } < f >": [0, 3, 5, 6, 8, 9]
        },        
        "(181) (6-Z28) Locrian nat6 Hexachord": {
            "Locrian nat6 Hexachord | Diminished 7 (b9 11) | { 1 b2 b3 4 b5 bb7 } < a >": [0, 1, 3, 5, 6, 9],
            " | Augmented Major 7 (9 11) | { 1 2 3 4 #5 7 } < b >": [0, 2, 4, 5, 8, 11],
            " | Half-Diminished 7 (9 13) | { 1 2 b3 b5 6 b7 } < c >": [0, 2, 3, 6, 9, 10],
            " | Dominant 7 (b9 b13) | { 1 b2 3 5 b6 b7 } < d >": [0, 1, 4, 7, 8, 10],
            " | Minor Major 7 (#11 13) | { 1 b3 #4 5 6 7 } < e >": [0, 3, 6, 7, 9, 11],
            "Lydian #2 #5 Hexachord | Augmented (#9 #11 13) | { 1 #2 3 #4 #5 6 } < f >": [0, 3, 4, 6, 8, 9]
        },
        "(182) (6-Z29) Dorian #4 Hexachord": {
            "Dorian #4 Hexachord, Bridge Chord | Minor 6 (9 #11) | { 1 2 b3 #4 5 6 } < a >": [0, 2, 3, 6, 7, 9],
            " | Dominant 7 (b9 11) | { 1 b2 3 4 5 b7 } < b >": [0, 1, 4, 5, 7, 10],
            " | Major 7 b5 (#9 13) | { 1 #2 3 #4 6 7 } < c >": [0, 3, 4, 6, 9, 11],
            " | Diminished 7 (b9 b13) | { 1 b2 b3 b5 b6 bb7 } < d >": [0, 1, 3, 6, 8, 9],
            " | Major 7 sus4 (9 b13) | { 1 2 4 5 b6 7 } < e >": [0, 2, 5, 7, 8, 11],
            " | Half-Diminished 7 (11 13) | { 1 b3 4 b5 6 b7 } < f >": [0, 3, 5, 6, 9, 10]
        },
        "(183) (6-30S) Dorian b2 #4 Hexachord": {
            "Dorian b2 #4 Hexachord | Minor 6 (b9 #11) | { 1 b2 b3 #4 5 6 } < a >": [0, 1, 3, 6, 7, 9],
            " | Diminished Major 7 sus4 (9 b13) | { 1 2 4 b5 b6 7 } < b >": [0, 2, 5, 6, 8, 11],
            " | Dominant 7 b5 (#9 13) | { 1 #2 3 #4 6 b7 } < c >": [0, 3, 4, 6, 9, 10]
        },
        "(184) (6-30MS) Lydian b3 #5 Hexachord": {
            "Lydian b3 #5 Hexachord | Diminished 7 (9 b13) | { 1 2 b3 b5 b6 bb7 } < a >": [0, 2, 3, 6, 8, 9],
            " | Dominant 7 (b9 #11) | { 1 b2 3 #4 5 b7 } < b >": [0, 1, 4, 6, 7, 10],
            " | Diminished Major 7 (11 13) | { 1 b3 4 b5 6 7 } < c >": [0, 3, 5, 6, 9, 11]
        },
        "(185) (6-31) Dorian b2 #5 Hexachord": {
            "Dorian b2 #5 Hexachord | Minor 6 #5 (b9 11) | { 1 b2 b3 4 #5 6 } < c >": [0, 1, 3, 5, 8, 9],
            " | Major 7 (9 b13) | { 1 2 3 5 b6 7 } < d >": [0, 2, 4, 7, 8, 11],
            " | Half-Diminished 7 sus4 (9 13) | { 1 2 4 b5 6 b7 } < e >": [0, 2, 5, 6, 9, 10],
            " | Dominant 7 (#9 b13) | { 1 #2 3 5 b6 b7 } < f >": [0, 3, 4, 7, 8, 10],
            "Phrygian nat3 nat7 Hexachord | Major 6 (b9 11) | { 1 b2 3 4 5 6 } < a >": [0, 1, 4, 5, 7, 9],
            " | Augmented Major 7 (#9 #11) | { 1 #2 3 #4 #5 7 } < b >": [0, 3, 4, 6, 8, 11]
        },
        "(186) (6-31M) Ionian #5 Hexachord": {
            "Ionian #5 Hexachord | Augmented (9 11 13) | { 1 2 3 4 #5 6 } < a >": [0, 2, 4, 5, 8, 9],
            " | Minor 7 (9 #11) | { 1 2 b3 #4 5 b7 } < b >": [0, 2, 3, 6, 7, 10],
            " | Augmented 7 (b9 11) | { 1 b2 3 4 #5 b7 } < c >": [0, 1, 4, 5, 8, 10],
            " | Major 7 (#9 13) | { 1 #2 3 5 6 7 } < d >": [0, 3, 4, 7, 9, 11],
            "Lydian b2 #5 Hexachord | Augmented (b9 #11 13) | { 1 b2 3 #4 #5 6 } < e >": [0, 1, 4, 6, 8, 9],
            " | Minor Major 7 (11 b13) | { 1 b3 4 5 b6 7 } < f >": [0, 3, 5, 7, 8, 11]
        },
        "(187) (6-32) Major Hexachord": {
            "Major Hexachord | Major (9 11 13) | { 1 2 3 4 5 6 } < a >": [0, 2, 4, 5, 7, 9],
            " | Minor 7 (9 11) | { 1 2 b3 4 5 b7 } < b >": [0, 2, 3, 5, 7, 10],
            " | Minor 7 #5 (b9 11) | { 1 b2 b3 4 b6 b7} < c >": [0, 1, 3, 5, 8, 10],
            " | Major 7 (9 13) | { 1 2 3 5 6 7 } < d >": [0, 2, 4, 7, 9, 11],
            " | 7 sus4 (9 13) | { 1 2 4 5 6 b7 } < e >": [0, 2, 5, 7, 9, 10],
            " | Minor 7 (11 b13) | { 1 b3 4 5 b6 b7 } < f >": [0, 3, 5, 7, 8, 10]
        },
        "(188) (6-33) Dorian Hexachord": {
            "Dorian Hexachord | Minor 6 (9 11) | { 1 2 b3 4 5 6 } < a >": [0, 2, 3, 5, 7, 9],
            " | Minor 7 (b9 11) | { 1 b2 b3 4 5 b7 } < b >": [0, 1, 3, 5, 7, 10],
            " | Major 7 b5 (9 13) | { 1 2 3 #4 6 7 } < c >": [0, 2, 4, 6, 9, 11],
            " | Dominant 7 (9 13) | { 1 2 3 5 6 b7 } < d >": [0, 2, 4, 7, 9, 10],
            " | 7 sus4 (9 b13) | { 1 2 4 5 b6 b7 } < e >": [0, 2, 5, 7, 8, 10],
            " | Half-Diminished 7 (11 b13) | { 1 b3 4 b5 b6 b7 } < f >": [0, 3, 5, 6, 8, 10]
        },
        "(189) (6-33M) Lydian Hexachord": {
            "Lydian Hexachord | Major 6 (9 #11) | { 1 2 3 #4 5 6 } < a >": [0, 2, 4, 6, 7, 9],
            " | Dominant 7 (9 11) | { 1 2 3 4 5 b7 } < b >": [0, 2, 4, 5, 7, 10],
            " | Minor 7 #5 (9 11) | {1 2 b3 4 b6 b7 } < c >": [0, 2, 3, 5, 8, 10],
            " | Half-Diminished 7 (b9 b13) | { 1 b2 b3 b5 b6 b7 } < d >": [0, 1, 3, 6, 8, 10],
            " | Major 7 sus4 (9 11) | { 1 2 4 5 6 7 } < e >": [0, 2, 5, 7, 9, 11],
            " | Minor 7 (11 13) | { 1 b3 4 5 6 b7 } < f >": [0, 3, 5, 7, 9, 10]
        },
        "(190) (6-34) Dorian b2 Hexachord": {
            "Dorian b2 Hexachord | Minor 6 (b9 11) | { 1 b2 b3 4 5 6 } < a >": [0, 1, 3, 5, 7, 9],
            " | Augmented Major 7 (9 #11) | { 1 2 3 #4 #5 7 } < b >": [0, 2, 4, 6, 8, 11],
            " | Dominant 7 b5 (9 13) | { 1 2 3 #4 6 b7 } < c >": [0, 2, 4, 6, 9, 10],
            " | Dominant 7 (9 b13) | { 1 2 3 5 b6 b7 } < d >": [0, 2, 4, 7, 8, 10],
            " | Half-Diminished 7 sus4 (9 b13) | { 1 2 4 b5 b6 b7 } < e >": [0, 2, 5, 6, 8, 10],
            " | Dominant 7 b5 (#9 b13) | { 1 #2 3 b5 b6 b7 } < f >": [0, 3, 4, 6, 8, 10]
        },
        "(191) (6-34M) Lydian Augmented Hexachord": {
            "Lydian Augmented Hexachord | Augmented (9 #11 13) | { 1 2 3 #4 #5 6 } < a >": [0, 2, 4, 6, 8, 9],
            " | Dominant 7 (9 #11) | { 1 2 3 #4 5 b7 } < b >": [0, 2, 4, 6, 7, 10],
            " | Augmented 7 (9 11) | { 1 2 3 4 #5 b7 } < c >": [0, 2, 4, 5, 8, 10],
            " | Half-Diminished 7 (9 b13) | { 1 2 b3 b5 b6 b7 } < d >": [0, 2, 3, 6, 8, 10],
            " | Augmented 7 (b9 #11), Dominant 7 b5 (b9 b13) | { 1 b2 3 b5 b6 b7 } < e >": [0, 1, 4, 6, 8, 10],
            " | Minor Major 7 (11 13) | { 1 b3 4 5 6 7 } < f >": [0, 3, 5, 7, 9, 11]
        },
        "(192) (6-35S) Whole Tone Scale": {
            "Whole Tone Scale, Messiaen Mode 1 | Augmented 7 (9 #11) | { 1 2 3 #4 #5 b7 }  < a >": [0, 2, 4, 6, 8, 10]
        },
        "(193) (6-Y3) Major (b9 9 #9)": {
            " | Major (b9 9 #9) | { 1 b2 2 b3 3 5 } < a >": [0, 1, 2, 3, 4, 7],
            " | Diminished Major 7 (b9 9) | { 1 b2 2 b3 b5 7 } < b >": [0, 1, 2, 3, 6, 11],
            " | Major 7 sus4 no5 { b9 9 #13 } | { 1 b2 2 4 b7 7 } < c >": [0, 1, 2, 5, 10, 11],
            " | Major 7 no5 (b9 13 #13) | { 1 b2 3 6 b7 7 } < d >": [0, 1, 4, 9, 10, 11],
            " | Minor Major 7 #5 (13 #13) | { 1 b3 #5 6 b7 7 } < e >": [0, 3, 8, 9, 10, 11],
            " | sus4 (#11 b13 13) | { 1 4 #4 5 b6 6 } < f >": [0, 5, 6, 7, 8, 9]
        },
        "(194) (6-Y3M) Ionian #2 Pentachord add #4": {
            "Ionian #2 Pentachord add #4 | Major (#9 11 #11) | { 1 #2 3 4 #4 5 } < a >": [0, 3, 4, 5, 6, 7],
            " | Major 6 no5 (b9 9 #9) | { 1 b2 2 b3 3 6 } < b >": [0, 1, 2, 3, 4, 9],
            " | Minor Major 7 #5 (b9 9) | { 1 b2 2 b3 b6 7 } < c >": [0, 1, 2, 3, 8, 11],
            " | Major 7 sus2 (b9 #13) | { 1 b2 2 5 b7 7 } < d >": [0, 1, 2, 7, 10, 11],
            " | Diminished Major 7 susb2 (13 #13) | { 1 b2 b5 6 b7 7 } < e >": [0, 1, 6, 9, 10, 11],
            " | Augmented Major 7 sus4 (13 #13) | { 1 4 #5 6 b7 7 } < f >": [0, 5, 8, 9, 10, 11]
        },
        "(195) (6-4) Major (11 #11 b13)": {
            " | Major (11 #11 b13) | { 1 3 4 #4 5 b6 } < f >": [0, 4, 5, 6, 7, 8],
            " | Augmented (b9 9 #9) | { 1 b2 2 b3 3 #5 } < a >": [0, 1, 2, 3, 4, 8],
            " | Minor Major 7 (b9 9) | { 1 b2 2 b3 5 7 } < b >": [0, 1, 2, 3, 7, 11],
            " | Diminished Major 7 sus2 (b9 #13) | { 1 b2 2 b5 b7 7 } < c >": [0, 1, 2, 6, 10, 11],
            " | Major 7 sus4 no5 (b9 13 #13) | { 1 b2 4 6 b7 7 } < d >": [0, 1, 5, 9, 10, 11],
            " | Augmented Major 7 (13 #13) | { 1 3 #5 6 b7 7 } < e >": [0, 4, 8, 9, 10, 11]
        },        
        "(196) (6-6) Major 7 (11 #11)": {
            " | Major 7 (11 #11) | { 1 3 4 #4 5 7 } < f >": [0, 4, 5, 6, 7, 11],
            " | Minor (b9 9 b13) | { 1 b2 2 b3 5 b6 } < a >": [0, 1, 2, 3, 7, 8],
            " | Major 7 sus#4 (b9 9) | { 1 b2 2 #4 5 7 } < b >": [0, 1, 2, 6, 7, 11],
            " | Diminished Major 7 sus4 (b9 #13) | { 1 b2 4 b5 b7 7 } < c >": [0, 1, 5, 6, 10, 11],
            " | Major 7 no5 (11 13 #13) | { 1 3 4 6 b7 7 } < d >": [0, 4, 5, 9, 10, 11],
            " | sus4 (b9 #11 b13) | { 1 b2 4 #4 5 b6 } < e >": [0, 1, 5, 6, 7, 8]
        },        
        "(197) (6-Y10) Ionian #5 Pentachord add b3": {
            "Ionian #5 Pentachord add b3 | Augmented (9 #9 11) | { 1 2 b3 3 4 #5 } < a >": [0, 2, 3, 4, 5, 8],
            " | Half-Diminished 7 (b9 9) | { 1 b2 2 b3 b5 b7 } < b >": [0, 1, 2, 3, 6, 10],
            " | Major 7 sus4 no5 (b9 9 13) | { 1 b2 2 4 6 7 } < c >": [0, 1, 2, 5, 9, 11],
            " | Augmented Major 7 (b9 #13) | { 1 b2 3 #5 b7 7 } < d >": [0, 1, 4, 8, 10, 11],
            " | Minor Major 7 (13 #13) | { 1 b3 5 6 b7 7 } < e >": [0, 3, 7, 9, 10, 11],
            " | Major 6 (#11 b13) | { 1 4 #4 5 b6 6 } < f >": [0, 4, 6, 7, 8, 9]
        },
        "(198) (6-Y10M) Dominant 7 (b13 13)": {
            " | Dominant 7 (b13 13) | { 1 3 5 b6 6 b7 } < f >": [0, 4, 7, 8, 9, 10],
            " | Augmented (#9 11 #11) | { 1 #2 3 4 #4 #5 } < a >": [0, 3, 4, 5, 6, 8],
            " | Minor 6 no5 (b9 9 11) | { 1 b2 2 b3 4 6 } < b >": [0, 1, 2, 3, 5, 9],
            " | Augmented Major 7 (b9 9) | { 1 b2 2 3 #5 7 } < c >": [0, 1, 2, 4, 8, 11],
            " | Minor Major 7 (b9 #13) | { 1 b2 b3 5 b7 7 } < d >": [0, 1, 3, 7, 10, 11],
            " | Diminished Major 7 sus2 (13 #13) |  < e >": [0, 2, 6, 9, 10, 11]
        },        
        "(199) (6-Y11) Major 7 (b9 9)": {
            " | Major 7 (b9 9) | { 1 b2 2 3 5 7 } < b >": [0, 1, 2, 4, 7, 11],
            " | Diminished Major 7 (b9 #13) | { 1 b2 b3 b5 b7 7 } < c >": [0, 1, 3, 6, 10, 11],
            " | Major 7 sus4 no5 (9 13 #13) | { 1 2 4 6 b7 7 } < d >": [0, 2, 5, 9, 10, 11],
            " | Minor 7 (b13 13) | { 1 b3 5 b6 6 b7 } < e >": [0, 3, 7, 8, 9, 10],
            " | Major 6 (11 #11) | { 1 3 4 #4 5 6 } < f >": [0, 4, 5, 6, 7, 9],
            " | Minor #5 (b9 9 11) | { 1 b2 2 b3 4 b6 } < a >": [0, 1, 2, 3, 5, 8]
        },
        "(200) (6-Y11M) Minor 7 (b9 9)": {
            " | Minor 7 (b9 9) | { 1 b2 2 b3 5 b7 } < c >": [0, 1, 2, 3, 7, 10],
            " | Diminished Major 7 sus2 (b9 13) | { 1 b2 2 b5 6 7 } < d >": [0, 1, 2, 6, 9, 11],
            " | Augmented Major 7 sus4 (b9 #13) | { 1 b2 4 #5 b7 7 } < e >": [0, 1, 5, 8, 10, 11],
            " | Major 7 (13 #13) | { 1 3 5 6 b7 7 } < f >": [0, 4, 7, 9, 10, 11],
            " | Minor (11 #11 b13) | { 1 b3 4 #4 5 b6 } < a >": [0, 3, 5, 6, 7, 8],
            " | Major 6 no5 (9 #9 11) | { 1 2 b3 3 4 6 } < b >": [0, 2, 3, 4, 5, 9]
        },        
        "(201) (6-Y12) Dominant 7 (11 #11)": {
            " | Dominant 7 (11 #11) | { 1 3 4 #4 5 b7 } < f >": [0, 4, 5, 6, 7, 10],
            " | Minor #5 (b9 9) | { 1 b2 2 b3 b5 b6 } < a >": [0, 1, 2, 3, 6, 8],
            " | Major 7 sus4 (b9 9) | { 1 b2 2 4 5 7 } < b >": [0, 1, 2, 5, 7, 11],
            " | Major 7 b5 (b9 #13) | { 1 b2 3 b5 b7 7 } < c >": [0, 1, 4, 6, 10, 11],
            " | Minor Major 7 no5 (11 13 #13) | { 1 b3 4 6 b7 7 } < d >": [0, 3, 5, 9, 10, 11],
            " | sus2 (#11 b13 13) | { 1 2 #4 5 b6 6 }  < e >": [0, 2, 6, 7, 8, 9]
        },
        "(202) (6-Y12M) Minor 6 (b9 9)": {
            " | Minor 6 (b9 9) | { 1 b2 2 b3 5 6 } < c >": [0, 1, 2, 3, 7, 9],
            " | Diminished Major 7 sus2 (b9 b13), Augmented Major 7 sus#4 (b9 #9) | { 1 b2 2 b5 b6 7 } < d >": [0, 1, 2, 6, 8, 11],
            " | Major 7 sus4 (b9 #13 | { 1 b2 4 5 b7 7 } < e >": [0, 1, 5, 7, 10, 11],
            " | Major 7 b5 (13 #13) | { 1 3 b5 6 b7 7 } < f >": [0, 4, 6, 9, 10, 11],
            " | sus2 (11 #11 b13) | { 1 2 4 #4 5 b6 } < a >": [0, 2, 5, 6, 7, 8],
            " | Dominant 7 b5 (#9 11) | { 1 #2 3 4 b5 b7 } < b >": [0, 3, 4, 5, 6, 10]
        },
        "(203) (6-13) Ionian #2 b5 Hexachord": {
            "Ionian #2 b5 Hexachord | Major 6 b5 (#9 11) | { 1 #2 3 4 b5 6 } < f >": [0, 3, 4, 5, 6, 9],
            " | Diminished 7 (b9 9) | { 1 b2 2 b3 b5 bb7 } < a >": [0, 1, 2, 3, 6, 9],
            " | Augmented Major 7 sus4 (b9 9) | { 1 b2 2 4 #5 7 } < b >": [0, 1, 2, 5, 8, 11],
            " | Major 7 (b9 #13) | { 1 b2 3 5 b7 7 } < c >": [0, 1, 4, 7, 10, 11],
            " | Diminished Major 7 (13 #13) | { 1 b3 b5 6 b7 7 } < d >": [0, 3, 6, 9, 10, 11],
            " | Minor 6 (#11 b13) | { 1 b3 #4 5 b6 6 } < e >": [0, 3, 6, 7, 8, 9]
        },        
        "(204) (6-Y17) Locrian bb3 Hexachord": {
            "Locrian bb3 Hexachord | Diminished sus4 (b9 9 b13) | { 1 b2 2 4 b5 b6 } < a >": [0, 1, 2, 5, 6, 8],
            " | Major 7 (b9 11) | { 1 b2 3 4 5 7 } < b >": [0, 1, 4, 5, 7, 11],
            " | Major 7 b5 (#9 #13) | { 1 b3 3 b5 b7 7 } < c >": [0, 3, 4, 6, 10, 11],
            " | Minor 6 (b9 b13) | { 1 b2 b3 5 b6 6 } < d >": [0, 1, 3, 7, 8, 9],
            " | Major 7 sus2 (#11 b13) | { 1 2 #4 5 b6 7 } < e >": [0, 2, 6, 7, 8, 11],
            " | Dominant 7 b5 (11 13) | { 1 3 4 b5 6 b7 } < f >": [0, 4, 5, 6, 9, 10]
        },
        "(205) (6-Y17M) Minor #4 Hexachord": {
            "Minor #4 Hexachord | Minor (9 #11 b13) | { 1 2 b3 #4 5 b6 } < a >": [0, 2, 3, 6, 7, 8],
            " | Dominant 7 b5 (b9 11) | { 1 b2 3 4 b5 b7 } < b >": [0, 1, 4, 5, 6, 10],
            " | Major 7 no5 (#9 11 13) | { 1 #2 3 4 6 7 } < c >": [0, 3, 4, 5, 9, 11],
            " | Augmented sus2 (b9 #11 13) | { 1 b2 2 b5 b6 bb7 } < d >": [0, 1, 2, 6, 8, 9],
            " | Major 7 sus4 (b9 b13) | { 1 b2 4 5 b6 7 } < e >": [0, 1, 5, 7, 8, 11],
            " | Major 7 (#11 #13) | { 1 3 #4 5 b7 7 } < f >": [0, 4, 6, 7, 10, 11]
        },        
        "(206) (6-Y19) Ionian #2 #5 Hexachord": {
            "Ionian #2 #5 Hexachord | Augmented (#9 11 13) | { 1 #2 3 4 #5 6 } < f >": [0, 3, 4, 5, 8, 9],
            "Schoenberg Hexachord | Diminished 7 sus4 (b9 9) | { 1 b2 2 4 b5 6 } < a >": [0, 1, 2, 5, 6, 9],
            " | Augmented Major 7 (b9 11) | { 1 b2 3 4 #5 7 } < b >": [0, 1, 4, 5, 8, 11],
            " | Major 7 (#9 #13) | { 1 #2 3 5 b7 7 } < c >": [0, 3, 4, 7, 10, 11],
            " | Major 6 (b9 b13) | { 1 b2 3 5 b6 6 } < d >": [0, 1, 4, 7, 8, 9],
            " | Minor Major 7 (#11 b13) | { 1 b3 #4 5 b6 7 } < e >": [0, 3, 6, 7, 8, 11]
        },
        "(207) (6-Y19M) Locrian nat3 nat6 Hexachord": {
            "Locrian nat3 nat6 Hexachord | Major 6 b5 (b9 11) | { 1 b2 3 4 b5 6 } < a >": [0, 1, 4, 5, 6, 9],
            " | Augmented Major 7 (#9 11) | { 1 #2 3 4 #5 7 } < b >": [0, 3, 4, 5, 8, 11],
            " | Augmented sus4 (b9 9 13) | { 1 b2 2 4 #5 6 } < c >": [0, 1, 2, 5, 8, 9],
            " | Major 7 (b9 b13) | { 1 b2 3 5 b6 7 } < d >": [0, 1, 4, 7, 8, 11],
            " | Minor Major 7 (#11 #13) | { 1 b3 #4 5 b7 7 } < e >": [0, 3, 6, 7, 10, 11],
            " | Major 6 (#9 b13) | { 1 #2 3 5 b6 6 } < f >": [0, 3, 4, 7, 8, 9]
        },        
        "(208) (6-23) Dorian b4 b5 Hexachord": {
            "Dorian b4 b5 Hexachord | Major 6 b5 (9 #9) | { 1 2 b3 3 b5 6 } < a >": [0, 2, 3, 4, 6, 9],
            " | 7 sus#4 (b9 9) | { 1 b2 2 3 5 b7 } < b >": [0, 1, 2, 4, 7, 10],
            " | Diminished Major 7 (b9 13) | { 1 b2 b3 b5 6 7 } < c >": [0, 1, 3, 6, 9, 11],
            " | Augmented Major 7 sus4 (9 #13) | { 1 2 4 #5 b7 7 } < d >": [0, 2, 5, 8, 10, 11],
            " | Half-Diminished 7 (b13 13) | { 1 b3 b5 b6 6 b7 } < e >" : [0, 3, 6, 8, 9, 10],
            " | Minor 6 (11 #11) | { 1 b3 4 #4 5 6 } < f >": [0, 3, 5, 6, 7, 9]
        },        
        "(209) (6-Y24) Ionian #2 Hexachord": {
            "Ionian #2 Hexachord | Major 6 (#9 11) | { 1 #2 3 4 5 6 } < f >": [0, 3, 4, 5, 7, 9],
            " | Major 6 b5 (b9 9) | { 1 b2 2 3 b5 6 } < a >": [0, 1, 2, 4, 6, 9],
            " | Minor Major 7 #5 (b9 11) | { 1 b2 b3 4 #5 7 } < b >": [0, 1, 3, 5, 8, 11],
            " | Major 7 (9 #13) | { 1 2 3 5 b7 7 } < c >": [0, 2, 4, 7, 10, 11],
            " | Augmented 7 sus4 (9 13) | { 1 2 4 #5 6 b7 } < d >": [0, 2, 5, 8, 9, 10],
            " | Minor 7 (#11 b13) | { 1 b3 #4 5 b6 b7 } < e >": [0, 3, 6, 7, 8, 10]
        },
        "(210) (6-Y24M) Ionian b5 Hexachord": {
            "Ionian b5 Hexachord | Major 6 b5 (9 11) | { 1 2 3 4 b5 6 } < a >": [0, 2, 4, 5, 6, 9],
            " | Dominant 7 (9 #9) | { 1 2 b3 3 5 b7 } < b >": [0, 2, 3, 4, 7, 10],
            " | Augmented 7 sus4 (b9 9 11) | { 1 b2 2 4 #5 b7 } < c >": [0, 1, 2, 5, 8, 10],
            " | Major 7 (b9 13) | { 1 b2 3 5 6 7 } < d >": [0, 1, 4, 7, 9, 11],
            " | Diminished Major 7 (b13 #13) | { 1 b3 b5 b6 b7 7 } < e >": [0, 3, 6, 8, 10, 11],
            " | Minor 6 (11 b13) | { 1 b3 4 5 b6 6 } < f >": [0, 3, 5, 7, 8, 9]
        },        
        "(211) (6-Y25) Lydian #3 Hexachord": {
            " | Major 6 (b9 9) | { 1 b2 2 3 5 6 } < a >": [0, 1, 2, 4, 7, 9],
            " | Diminished Major 7 (b9 b13) | { 1 b2 b3 b5 b6 7 } < b >": [0, 1, 3, 6, 8, 11],
            " | Major 7 sus4 (9 #13) | { 1 2 4 5 b7 7 } < c >": [0, 2, 5, 7, 10, 11],
            " | Minor 7 #5 (11 13) | { 1 b3 4 #5 6 b7 } < d >": [0, 3, 5, 8, 9, 10],
            "Lydian #3 Hexachord | sus2 (11 #11 13) | { 1 2 4 #4 5 6 } < e >": [0, 2, 5, 6, 7, 9],
            " | Dominant 7 (#9 11) | { 1 #2 3 4 5 b7 } < f >": [0, 3, 4, 5, 7, 10]
        },
        "(212) (6-Y25M) Blues Scale": {
            "Blues Scale | Minor 7 (11 #11) | { 1 b3 4 #4 5 b7 } < f >": [0, 3, 5, 6, 7, 10],
            " | Major 6 (9 #9) < a >": [0, 2, 3, 4, 7, 9],
            " | 7 sus4 (b9 9) | { 1 b2 2 4 5 b7 } < b >": [0, 1, 2, 5, 7, 10],
            " | Major 7 b5 (b9 13) | { 1 b2 3 b5 6 7 } < c >": [0, 1, 4, 6, 9, 11],
            " | Minor Major 7 #5 (11 #13) | { 1 b3 4 #5 b7 7 } < d >": [0, 3, 5, 8, 10, 11],
            " | sus4 (9 b13 13) | { 1 2 4 5 b6 6 } < e >": [0, 2, 5, 7, 8, 9]
        },
        "(213) (6-26) Minor Major 7  (11 #13) ": {
            " | Minor Major 7 (11 #13) | { 1 b3 4 5 b7 7 } < c >": [0, 3, 5, 7, 10, 11],
            " | Major 6 (9 b13) | { 1 2 3 5 b6 6 } < d >": [0, 2, 4, 7, 8, 9],
            " | 7 sus2 (11 #11) | { 1 2 4 #4 5 b7 } < e >": [0, 2, 5, 6, 7, 10],
            " | Augmented 7 (#9 11) | { 1 #2 3 4 #5 b7 } < f >": [0, 3, 4, 5, 8, 10],
            " | sus2 (b9 11 13) | { 1 b2 2 4 5 6 } < a >": [0, 1, 2, 5, 7, 9],
            " | Augmented Major 7 (b9 #11) | { 1 b2 3 #4 #5 7 } < b >": [0, 1, 4, 6, 8, 11]
        },
        "(214) (6-28) Dorian b2 b4 Hexachord": {
            "Dorian b2 b4 Hexachord | Major 6 (b9 #9) | { 1 b2 b3 3 5 6 } < a >": [0, 1, 3, 4, 7, 9],
            " | Diminished Major 7 (9 b13) | { 1 2 b3 b5 b6 7 } < b >": [0, 2, 3, 6, 8, 11],
            " | Dominant 7 b5 (b9 13) | { 1 b2 3 b5 6 b7 } < c >": [0, 1, 4, 6, 9, 10],
            " | Minor Major 7 #5 (11 13) | { 1 b3 4 #5 6 7 } < d >": [0, 3, 5, 8, 9, 11],
            " | Diminished 7 sus4 (9 b13) | { 1 2 4 b5 b6 bb7 } < e >": [0, 2, 5, 6, 8, 9],
            " | Dominant 7 (#9 #11) | { 1 #2 3 #4 5 b7 } < f >": [0, 3, 4, 6, 7, 10]
        },
        "(215) (6-29) Lydian b2 Hexachord": {
            "Lydian b2 Hexachord | Major 6 (b9 #11) | { 1 b2 3 #4 5 6 } < a >": [0, 1, 4, 6, 7, 9],
            " | Diminished Major 7 (11 b13) | { 1 b3 4 b5 b6 7 } < b >": [0, 3, 5, 6, 8, 11],
            "Dorian #5 Hexachord | Minor #5 (9 11 13) | { 1 2 b3 4 #5 6 } < c >": [0, 2, 3, 5, 8, 9],
            " | Minor 7 (b9 #11) | { 1 b2 b3 #4 5 b7 } | { 1 b2 b3 #4 5 b7 } < d >": [0, 1, 3, 6, 7, 10],
            " | Diminished Major 7 sus4 (9 13) | { 1 2 4 b5 6 7 } < e >": [0, 2, 5, 6, 9, 11],
            " | Dominant 7 (#9 13) | { 1 #2 3 5 6 b7 } < f >": [0, 3, 4, 7, 9, 10]
        }        
    },       
    septads: {
        "(216) (7-1) Chromatic Septachord": {
            "Chromatic Septachord | Major b5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 b5 } < a >": [0, 1, 2, 3, 4, 5, 6],
            " | Major 7 no 5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 7 } < b >": [0, 1, 2, 3, 4, 5, 11],
            " | Major 7 no 5 (b9 9 #9 #13) | { 1 b2 2 b3 3 b7 7 } < c >": [0, 1, 2, 3, 4, 10, 11],
            " | Minor Major 7 no5 (b9 9 13 #13) | { 1 b2 2 b3 6 b7 7 } < d >": [0, 1, 2, 3, 9, 10, 11],
            " | Augmented Major 7 sus2 (b9 13 #13) | { 1 b2 2 #5 6 b7 7 } < e >": [0, 1, 2, 8, 9, 10, 11],
            " | Major 7 sus b2 (b13 13 #13) | { 1 b2 5 b6 6 b7 7 } < f >": [0, 1, 7, 8, 9, 10, 11],
            " | Major 7 sus#4 (b13 13 #13) | { 1 #4 5 b6 6 b7 7 } < g >": [0, 6, 7, 8, 9, 10, 11]
        },
        "(217) (7-2) Major (b9 9 #9 11)": {
            " | Major (b9 9 #9 11) | { 1 b2 2 b3 3 4 5 } < a >": [0, 1, 2, 3, 4, 5, 7],
            " | Major 7 b5 (b9 9 #9) | { 1 b2 2 b3 3 b5 7 } < b >": [0, 1, 2, 3, 4, 6, 11],
            " | Minor Major 7 no5 (b9 9 11 #13) | { 1 b2 2 b3 4 b7 7 } < c >": [0, 1, 2, 3, 5, 10, 11],
            " | Major 7 no5 (b9 9 13 #13) | { 1 b2 2 3 6 b7 7 } < d >": [0, 1, 2, 4, 9, 10, 11],
            " | Minor Major 7 #5 (b9 13 #13) | { 1 b2 b3 b6 6 b7 7 } < e >": [0, 1, 3, 8, 9, 10, 11],
            " | sus2 (b13 13 #13) | { 1 2 5 b6 6 b7 7 } < f >": [0, 2, 7, 8, 9, 10, 11],
            " | 7 sus4 (#11 b13 13) | { 1 4 #4 5 b6 6 b7 } < g >": [0, 5, 6, 7, 8, 9, 10]
        },
        "(218) (7-2M) Major Pentachord add b3 #4": {
            "Major Pentachord add b3 #4 | Major (9 #9 11 #11) | { 1 2 b3 3 4 #4 5 } < a >": [0, 2, 3, 4, 5, 6, 7],
            " | Dominant 7 no5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 b7 }  < b >": [0, 1, 2, 3, 4, 5, 10],
            " | Major 7 no5 (b9 9 #9 13) | { 1 b2 2 b3 4 6 7 }  < c >": [0, 1, 2, 3, 4, 9, 11],
            " | Minor Major 7 #5 (b9 9 #13) | { 1 b2 2 b3 b6 b7 7 }  < d >": [0, 1, 2, 3, 8, 10, 11],
            " | Major 7 sus2 (b9 13 #13) | { 1 b2 2 5 6 b7 7 }  < e >": [0, 1, 2, 7, 9, 10, 11],
            " | Augmented Major 7 sus#4 (b9 13 #13) | { 1 b2 b5 b6 6 b7 7 }  < f >": [0, 1, 6, 8, 9, 10, 11],
            " | Major 7 sus4 (b13 13 #13) | { 1 4 5 b6 6 b7 7 }  < g >": [0, 5, 7, 8, 9, 10, 11]
        },
        "(219) (7-3) Major 7 (b9 9 #9)": {
            " | Major 7 (b9 9 #9) | { 1 b2 2 b3 3 5 7 } < b >": [0, 1, 2, 3, 4, 7, 11],
            " | Diminished Major 7 (b9 9 #13) | { 1 b2 2 b3 b5 b7 7 } < c >": [0, 1, 2, 3, 6, 10, 11],
            " | Major 7 sus4 no5 (b9 9 13 #13) | { 1 b2 2 4 6 b7 7 } < d >": [0, 1, 2, 5, 9, 10, 11],
            " | Augmented Major 7 (b9 13 #13) | { 1 b2 3 b6 6 b7 7 } < e >": [0, 1, 4, 8, 9, 10, 11],
            " | Minor Major 7 (b13 13 #13) | { 1 b3 5 b6 6 b7 7 } < f >": [0, 3, 7, 8, 9, 10, 11],
            " | Major 6 (11 #11 b13) | { 1 3 4 #4 5 b6 6 } < g >": [0, 4, 5, 6, 7, 8, 9],
            " | Augmented (b9 9 #9 11) | { 1 b2 2 b3 3 4 #5 } < a >": [0, 1, 2, 3, 4, 5, 8]
        },
        "(220) (7-3M) Major 7 (b13 13 #13)": {
            " | Major 7 (b13 13 #13) | { 1 3 5 b6 6 b7 7 } < g >": [0, 4, 7, 8, 9, 10, 11],
            " | Major (#9 11 #11 b13) | { 1 b3 3 4 #4 5 b6 } < a >": [0, 3, 4, 5, 6, 7, 8],
            " | Major 6 no5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 6 } < b >": [0, 1, 2, 3, 4, 5, 9],
            " | Augmented Major 7 (b9 9 #9) | { 1 b2 2 b3 3 #5 7 } < c >": [0, 1, 2, 3, 4, 8, 11],
            " | Minor Major 7 (b9 9 #13) | { 1 b2 2 b3 5 b7 7 } < d >": [0, 1, 2, 3, 7, 10, 11],
            " | Diminished Major 7 sus2 (b9 13 #13) | { 1 b2 2 b5 6 b7 7 } < e >": [0, 1, 2, 6, 9, 10, 11],
            " | Augmented Major 7 sus4 (b9 13 #13) | { 1 b2 4 #5 6 b7 7 } < f >": [0, 1, 5, 8, 9, 10, 11]
        },
        "(221) (7-4) Major (b9 9 #9 #11)": {
            " | Major (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 5 } < a >": [0, 1, 2, 3, 4, 6, 7],
            " | Diminished Major 7 (b9 9 11) | { 1 b2 2 b3 4 b5 7 } < b >": [0, 1, 2, 3, 5, 6, 11],
            " | Major 7 no5 (b9 9 11 #13) | { 1 b2 2 3 4 b7 7 } < c >": [0, 1, 2, 4, 5, 10, 11],
            " | Major 7 no5 (b9 #9 13 #13) | { 1 b2 b3 3 6 b7 7 } < d >": [0, 1, 3, 4, 9, 10, 11],
            " | Minor Major 7 #5 (9 13 #13) | { 1 2 b3 #5 6 b7 7 } < e >": [0, 2, 3, 8, 9, 10, 11],
            " | 7 sus#4 (b9 b13 13) | { 1 b2 #4 5 b6 6 b7 } < f >": [0, 1, 6, 7, 8, 9, 10],
            " | Major 7 sus4 (#11 b13 13) | { 1 4 #4 5 b6 6 7 } < g >": [0, 5, 6, 7, 8, 9, 11]
        },
        "(222) (7-4M) Dominant 7 (b9 9 #9 13)": {
            " | Dominant 7 (b9 9 #9 13) | { 1 b2 2 b3 3 6 b7 } < c >": [0, 1, 2, 3, 4, 9, 10],
            " | Minor Major 7 #5 (b9 9 13) | { 1 b2 2 b3 #5 6 7 } < d >": [0, 1, 2, 3, 8, 9, 11],
            " | Major 7 sus2 (b9 b13 #13) | { 1 b2 2 5 b6 b7 7 } < e >": [0, 1, 2, 7, 8, 10, 11],
            " | Major 7 sus#4 (b9 13 #13) | { 1 b2 #4 5 6 b7 7 } < f >": [0, 1, 6, 7, 9, 10, 11],
            " | Diminished Major 7 sus4 (b13 13 #13) | { 1 4 b5 b6 6 b7 7 } < g >": [0, 5, 6, 8, 9, 10, 11],
            " | Major (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 5 } < a >": [0, 1, 3, 4, 5, 6, 7],
            " | Major 7 b5 (9 #9 11) | { 1 2 b3 3 4 b5 7 } < b >": [0, 2, 3, 4, 5, 6, 11]
        },
        "(223) (7-5) Minor (b9 9 11 #11)": {
            " | Minor (b9 9 11 #11) | { 1 b2 2 b3 4 #4 5 } < a >": [0, 1, 2, 3, 5, 6, 7],
            " | Major 7 b5 (b9 9 11) | { 1 b2 2 3 4 b5 7 } < b >": [0, 1, 2, 4, 5, 6, 11],
            " | Major 7 no 5 (b9 #9 11 #13) | { 1 b2 b3 3 4 b7 7 } < c >": [0, 1, 3, 4, 5, 10, 11],
            " | Major 7 no 5 (9 #9 13 #13) | { 1 2 b3 3 6 b7 7 } < d >": [0, 2, 3, 4, 9, 10, 11],
            " | 7 sus2 (b9 b13 13) | { 1 b2 2 5 b6 6 b7 } < e >": [0, 1, 2, 7, 8, 9, 10],
            " | Major 7 sus#4 (b9 b13 13) | { 1 b2 #4 5 b6 6 7 } < f >": [0, 1, 6, 7, 8, 9, 11],
            " | Major 7 sus4 (#11 b13 #13) | { 1 4 #4 5 b6 b7 7 } < g >": [0, 5, 6, 7, 8, 10, 11]
        },
        "(224) (7-5M) Major (b9 9 11 #11)": {
            " | Major (b9 9 11 #11) | { 1 b2 2 3 4 #4 5 } < a >": [0, 1, 2, 4, 5, 6, 7],
            " | Major 7 b5 (b9 #9 11) | { 1 b2 b3 3 4 b5 7 } < b >": [0, 1, 3, 4, 5, 6, 11],
            " | Major 7 no5 (9 #9 11 #13) | { 1 2 b3 3 4 b7 7 } < c >": [0, 2, 3, 4, 5, 10, 11],
            " | Minor 7 #5 (b9 9 13) | { 1 b2 2 b3 #5 6 b7 } < d >": [0, 1, 2, 3, 8, 9, 10],
            " | Major 7 sus2 (b9 b13 13) | { 1 b2 2 5 b6 6 7 } < e >": [0, 1, 2, 7, 8, 9, 11],
            " | Major 7 sus#4 (b9 b13 #13) | { 1 b2 #4 5 b6 #6 7 } < f >": [0, 1, 6, 7, 8, 10, 11],
            " | Major 7 sus4 (#11 13 #13) | { 1 4 #4 5 6 b7 7 } < g >": [0, 5, 6, 7, 9, 10, 11]
        },
        "(225) (7-6) Major 7 (11 #11 b13)": {
            " | Major 7 (11 #11 b13) | { 1 3 4 #4 5 b6 7 } < g >": [0, 4, 5, 6, 7, 8, 11],
            " | Major (b9 9 #9 b13) | { 1 b2 2 b3 3 5 b6 }  < a >": [0, 1, 2, 3, 4, 7, 8],
            " | Minor Major 7 (b9 9 #11) | { 1 b2 2 b3 #4 5 7 } < b >": [0, 1, 2, 3, 6, 7, 11],
            " | Diminished Major 7 sus4 (b9 9 #13) | { 1 b2 2 4 b5 b7 7 } < c >": [0, 1, 2, 5, 6, 10, 11],
            " | Major 7 no5 (b9 11 13 #13) | { 1 b2 3 4 6 b7 7 } < d >": [0, 1, 4, 5, 9, 10, 11],
            " | Augmented Major 7 (#9 13 #13) | { 1 b3 3 #5 6 b7 7 } < e >": [0, 3, 4, 8, 9, 10, 11],
            " | sus4 (b9 #11 b13 13) | { 1 b2 4 #4 5 b6 6 } < f >": [0, 1, 5, 6, 7, 8, 9]
        },
        "(226) (7-6M) Minor Major 7 (b9 9 b13)": {
            " | Minor Major 7 (b9 9 b13) | { 1 b2 2 b3 5 b6 7 } < d >": [0, 1, 2, 3, 7, 8, 11],
            " | Major 7 sus#4 (b9 9 #13) | { 1 b2 2 #4 5 b7 7 } < e >": [0, 1, 2, 6, 7, 10, 11],
            " | Diminished Major 7 sus4 (b9 13 #13) | { 1 b2 4 b5 6 b7 7 } < f >": [0, 1, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (11 13 #13) | { 1 3 4 #5 6 b7 7 } < g >": [0, 4, 5, 8, 9, 10, 11],
            " | Major (b9 11 #11 b13) | { 1 b2 3 4 #4 5 b6 } < a >": [0, 1, 4, 5, 6, 7, 8],
            " | Augmented (#9 11 #11) | { 1 b3 3 4 #4 5 7 } < b >": [0, 3, 4, 5, 6, 7, 11],
            " | Augmented (b9 9 #9 13) | { 1 b2 2 b3 3 #5 6 } < c >": [0, 1, 2, 3, 4, 8, 9]
        },
        "(227) (7-7) Major 7 (11 #11 #13": {
            " | Major 7 no 5 (#9 11 13 #13) | { 1 b3 3 4 6 b7 7 } < d >": [0, 3, 4, 5, 9, 10, 11],
            " | sus#4 (b9 9 b13 13) | { 1 b2 2 #4 5 b6 6 } < e >": [0, 1, 2, 6, 7, 8, 9],
            " | Major 7 sus b2 (11 #11 b13) | { 1 b2 4 #4 5 b6 7 } < f >": [0, 1, 5, 6, 7, 8, 11],
            " | Major 7 (11 #11 #13) | { 1 3 4 #4 5 b7 7 } < g >": [0, 4, 5, 6, 7, 10, 11],
            " | Minor (b9 9 #11 b13) | { 1 b2 2 b3 #4 5 b6 } < a >": [0, 1, 2, 3, 6, 7, 8],
            " | Major 7 no3 (b9 9 11 #11) | { 1 b2 2 4 #4 5 7 } < b >": [0, 1, 2, 5, 6, 7, 11],
            " | Major 7 b5 (b9 11 #13) | { 1 b2 3 4 b5 b7 7 } < c >": [0, 1, 4, 5, 6, 10, 11]
        },
        "(228) (7-7M) Major 7 (b9 11 #11)": {
            " | Major 7 (b9 11 #11) | { 1 b2 3 4 #4 5 7 } < b >": [0, 1, 4, 5, 6, 7, 11],
            " | Major 7 b5 (#9 11 #13) | { 1 #2 3 4 b5 b7 7 } < c >": [0, 3, 4, 5, 6, 10, 11],
            " | Minor 6 (b9 9 b13) | { 1 b2 2 b3 5 b6 6 } < d >": [0, 1, 2, 3, 7, 8, 9],
            " | Major 7 sus#4 (b9 9 b13) | { 1 b2 2 #4 5 b6 7 } < e >": [0, 1, 2, 6, 7, 8, 11],
            " | Major 7 sus4 (b9 #11 #13) | { 1 b2 4 #4 5 b7 7 } < f >": [0, 1, 5, 6, 7, 10, 11],
            " | Major 7 b5 (11 13 #13) | { 1 3 4 b5 6 b7 7 } < g >": [0, 4, 5, 6, 9, 10, 11],
            " | sus4 (b9 9 #11 b13) | { 1 b2 2 4 #4 5 b6 } < a >": [0, 1, 2, 5, 6, 7, 8]
        },
        "(229) (7-8) Dominant 7 (#11 b13 13)": {
            " | Dominant 7 (#11 b13 13) | { 1 3 #4 5 b6 6 b7 } < g >": [0, 4, 6, 7, 8, 9, 10],
            " | Augmented (9 #9 11 #11) | { 1 2 b3 3 4 #4 #5 } < a >": [0, 2, 3, 4, 5, 6, 8],
            " | Dominant 7 b5 (b9 9 #9) | { 1 b2 2 b3 3 b5 b7 } < b >": [0, 1, 2, 3, 4, 6, 10],
            " | Minor Major 7 no 5 (b9 9 11 13) | { 1 b2 2 b3 4 6 7 } < c >": [0, 1, 2, 3, 5, 9, 11],
            " | Augmented Major 7 (b9 9 #13) | { 1 b2 2 3 #5 b7 7 } < d >": [0, 1, 2, 4, 8, 10, 11],
            " | Minor Major 7 (b9 13 #13) | { 1 b2 b3 5 6 b7 7 } < e >": [0, 1, 3, 7, 9, 10, 11],
            " | Augmented Major 7 sus2 (#11 13 #13) | { 1 2 #4 #5 6 b7 7 } < f >": [0, 2, 6, 8, 9, 10, 11]
        },
        "(230) (7-9) Dominant 7 (11 #11 b13)": {
            " | Dominant 7 (11 #11 b13) | { 1 3 4 #4 5 b6 b7 } < f >": [0, 4, 5, 6, 7, 8, 10],
            " | Augmented (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 #5 } < a >": [0, 1, 2, 3, 4, 6, 8],
            " | Minor Major 7 (b9 9 11) | { 1 b2 2 b3 4 5 7 } < b >": [0, 1, 2, 3, 5, 7, 11],
            " | Major 7 b5 (b9 9 #13) | { 1 b2 2 3 b5 b7 7 } < c >": [0, 1, 2, 4, 6, 10, 11],
            " | Minor Major 7 no5 (b9 11 13 #13) | { 1 b2 b3 4 6 b7 7 } < c >": [0, 1, 3, 5, 9, 10, 11],
            " | Augmented Major 7 (9 13 #13) | { 1 2 3 #5 6 b7 7 } < d >": [0, 2, 4, 8, 9, 10, 11],
            " | 7 sus2 (#11 b13 13) | { 1 2 #4 5 b6 6 b7 } < e >": [0, 2, 6, 7, 8, 9, 10]
        },
        "(231) (7-9M) Major (9 11 #11 b13)": {
            " | Major (9 11 #11 b13) | { 1 2 3 4 #4 5 b6 } < a >": [0, 2, 4, 5, 6, 7, 8],
            " | Dominant 7 b5 (9 #9 11) | { 1 2 b3 3 4 b5 b7 } < b >": [0, 2, 3, 4, 5, 6, 10],
            " | Augmented 7 (b9 9 #9) | { 1 b2 2 b3 3 #5 b7 } < c >": [0, 1, 2, 3, 4, 8, 10],
            " | Minor Major 7 (b9 9 13) | { 1 b2 2 b3 5 6 7 } < d >": [0, 1, 2, 3, 7, 9, 11],
            " | Augmented Major 7 sus#4 (b9 9 #13) | { 1 b2 2 #4 #5 b7 7 } < e >": [0, 1, 2, 6, 8, 10, 11],
            " | Major 7 sus4 (b9 13 #13) | { 1 b2 4 5 6 b7 7 } < f >": [0, 1, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (#11 13 #13) | { 1 3 #4 #5 6 b7 7 } < f >": [0, 4, 6, 8, 9, 10, 11]
        },
        "(232) (7-10) Major 7 (b9 9 #13)": {
            " | Major 7 (b9 9 #13) | { 1 b2 2 3 5 b7 7 } < c >": [0, 1, 2, 4, 7, 10, 11],
            " | Diminished Major 7 (b9 13 #13) | { 1 b2 b3 b5 6 b7 7 } < d >": [0, 1, 3, 6, 9, 10, 11],
            " | Augmented Major 7 sus4 (9 13 #13) | { 1 2 4 #5 6 b7 7 } < e >": [0, 2, 5, 8, 9, 10, 11],
            " | Minor 7 (#11 b13 13) | { 1 b3 #4 5 b6 6 b7 } < f >": [0, 3, 6, 7, 8, 9, 10],
            " | Major 6 (#9 11 #11) | { 1 #2 3 4 #4 5 6 } < g >": [0, 3, 4, 5, 6, 7, 9],
            " | Major 6 b5 (b9 9 #9) | { 1 b2 2 b3 3 b5 6 } < a >": [0, 1, 2, 3, 4, 6, 9],
            " | Minor Major 7 #5 (b9 9 11) | { 1 b2 2 b3 4 #5 7 } < b >": [0, 1, 2, 3, 5, 8, 11]
        },
        "(233) (7-10M) Major 7 (b9 13 #13)": {
            " | Major 7 (b9 13 #13) | { 1 b2 3 5 6 b7 7 } < e >": [0, 1, 4, 7, 9, 10, 11],
            " | Diminished Major 7 (b13 13 #13) | { 1 b3 b5 b6 6 b7 7 } < f >": [0, 3, 6, 8, 9, 10, 11],
            " | Minor 6 (11 #11 b13) | { 1 b3 4 #4 5 b6 6 } < g >": [0, 3, 5, 6, 7, 8, 9],
            " | Major 6 b5 (9 #9 11) | { 1 2 b3 3 4 b5 6 } < a >": [0, 2, 3, 4, 5, 6, 9],
            " | Dominant 7 (b9 9 #9) | { 1 b2 2 b3 3 5 b7 } < b >": [0, 1, 2, 3, 4, 7, 10],
            " | Diminished Major 7 (b9 9 13) | { 1 b2 2 b3 b5 6 7 } < c >": [0, 1, 2, 3, 6, 9, 11],
            " | Augmented Major 7 sus4 (b9 9 #13) | { 1 b2 2 4 #5 b7 7 } < d >": [0, 1, 2, 5, 8, 10, 11]
        },
        "(234) (7-11) Major 7 (9 #9 11)": {
            " | Major 7 (9 #9 11) | { 1 2 b3 3 4 5 7 } < b >": [0, 2, 3, 4, 5, 7, 11],
            " | Minor 7 no 5 (b9 9 11 13) | { 1 b2 2 b3 4 6 b7 } < c >": [0, 1, 2, 3, 5, 9, 10],
            " | Augmented Major 7 (b9 9 13) | { 1 b2 2 3 #5 6 7 } < d >": [0, 1, 2, 4, 8, 9, 11],
            " | Minor Major 7 (b9 b13 #13) | { 1 b2 b3 5 b6 b7 7 } < e >": [0, 1, 3, 7, 8, 10, 11],
            " | Major 7 sus2 (#11 13 #13) | { 1 2 #4 5 6 b7 7 } < f >": [0, 2, 6, 7, 9, 10, 11],
            " | Dominant 7 (11 b13 13) | { 1 3 4 5 b6 6 b7 } < g >": [0, 4, 5, 7, 8, 9, 10],
            " | Augmented (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 #5 } < a >": [0, 1, 3, 4, 5, 6, 8]
        },
        "(235) (7-11M) Major 7 (#11 b13 13)": {
            " | Major 7 (#11 b13 13) | { 1 3 #4 5 b6 6 7 } < g >": [0, 4, 6, 7, 8, 9, 11],
            " | Major (9 #9 11 b13) | { 1 2 b3 3 4 5 b6 } < a >": [0, 2, 3, 4, 5, 7, 8],
            " | Half-Diminished 7 (b9 9 11) | { 1 b2 2 b3 4 b5 b7 } < b >": [0, 1, 2, 3, 5, 6, 10],
            " | Major 7 no5 (b9 9 11 13) | { 1 b2 2 3 4 6 7 } < c >": [0, 1, 2, 4, 5, 9, 11],
            " | Augmented Major 7 (b9 #9 #13) | { 1 b2 b3 3 #5 b7 7 } < d >": [0, 1, 3, 4, 8, 10, 11],
            " | Minor Major 7 (9 13 #13) | { 1 2 b3 5 6 b7 7 } < e >": [0, 2, 3, 7, 9, 10, 11],
            " | 7 sus4 (b9 b13 13) | { 1 b2 4 5 b6 6 b7 } < f >": [0, 1, 5, 7, 8, 9, 10]
        },
        "(236) (7-Z12) Dominant 7 (#9 11 #11)": {
            " | Dominant 7 (#9 11 #11) | { 1 #2 3 4 #4 5 b7 } < g >": [0, 3, 4, 5, 6, 7, 10],
            " | Major 6 (b9 9 #9) | { 1 b2 2 b3 3 5 6 } < a >": [0, 1, 2, 3, 4, 7, 9],
            " | Diminished Major 7 (b9 9 b13) | { 1 b2 2 b3 b5 b6 7 } < b >": [0, 1, 2, 3, 6, 8, 11],
            " | Major 7 sus4 (b9 9 #13) | { 1 b2 4 5 b7 7 } < c >": [0, 1, 2, 5, 7, 10, 11],
            " | Major 7 b5 (b9 13 #13) | { 1 b2 3 b5 6 b7 7 } < d >": [0, 1, 4, 6, 9, 10, 11],
            " | Minor Major 7 #5 (11 13 #13) | { 1 b3 4 #5 6 b7 7 } < e >": [0, 3, 5, 8, 9, 10, 11],
            " | sus2 (11 #11 b13 13) | { 1 2 4 #4 5 b6 6 } < f >": [0, 2, 5, 6, 7, 8, 9]
        },
        "(237) (7-13) Major 7 (b9 #9 11)": {
            " | Major 7 (b9 #9 11) | { 1 b2 b3 3 4 5 7 } < b >": [0, 1, 3, 4, 5, 7, 11],
            " | Major 7 b5 (9 #9 #13) | { 1 2 b3 3 b5 b7 7 } < c >": [0, 2, 3, 4, 6, 10, 11],
            " | Augmented 7 (b9 9 13) | { 1 b2 2 3 #5 6 b7 } < d >": [0, 1, 2, 4, 8, 9, 10],
            " | Minor Major 7 (b9 b13 13) | { 1 b2 b3 5 b6 6 7 } < e >": [0, 1, 3, 7, 8, 9, 11],
            " | Major 7 sus 2 (#11 b13 #13) | { 1 2 #4 5 b6 b7 7 } < f >": [0, 2, 6, 7, 8, 10, 11],
            " | Dominant 7 b5 (11 b13 13) | { 1 3 4 b5 b6 6 b7 } < g >": [0, 4, 5, 6, 8, 9, 10],
            " | Augmented (b9 9 11 #11) | { 1 b2 2 3 4 b5 b6 } < a >": [0, 1, 2, 4, 5, 6, 8]
        },
        "(238) (7-13M) Major 7 (#11 b13 13)": {
            " | Major 7 (#11 b13 #13) | { 1 3 #4 5 b6 b7 7 } < g >": [0, 4, 6, 7, 8, 10, 11],
            " | Major (9 #9 #11 b13) | { 1 2 b3 3 #4 5 b6 } < a >": [0, 2, 3, 4, 6, 7, 8],
            " | Dominant 7 b5 (b9 9 11) | { 1 b2 2 3 4 b5 b7 } < b >": [0, 1, 2, 4, 5, 6, 10],
            " | Major 7 no5 (b9 #9 11 13) | { 1 b2 b3 3 4 6 7 } < c >": [0, 1, 3, 4, 5, 9, 11],
            " | Augmented Major 7 (9 #9 #13) | { 1 2 b3 3 #5 b7 7 } < d >": [0, 2, 3, 4, 8, 10, 11],
            " | Augmented 7 sus2 (b9 #11 13) | { 1 b2 2 #4 #5 6 b7 } < e >": [0, 1, 2, 6, 8, 9, 10],
            " | Major 7 sus4 (b9 b13 13) | { 1 b2 4 5 b6 6 7 } < f >": [0, 1, 5, 7, 8, 9, 11]
        },
        "(239) (7-14) Major 7 (b9 9 #11)": {
            " | Major 7 (b9 9 #11) | { 1 b2 2 3 #4 5 7 } < b >": [0, 1, 2, 4, 6, 7, 11],
            " | Diminished Major 7 (b9 11 #13) | { 1 b2 b3 4 b5 b7 7 } < c >": [0, 1, 3, 5, 6, 10, 11],
            " | Major 7 no5 (9 11 13 #13) | { 1 2 3 4 6 b7 7 } < d >": [0, 2, 4, 5, 9, 10, 11],
            " | Minor 7 (9 b13 13) | { 1 2 b3 5 b6 6 b7 } < e >": [0, 2, 3, 7, 8, 9, 10],
            " | 7 sus4 (b9 #11 b13) | { 1 b2 4 #4 5 b6 b7 } < f >": [0, 1, 5, 6, 7, 8, 10],
            " | Major 7 (11 #11 13) | { 1 3 4 #4 5 6 7 } < g >": [0, 4, 5, 6, 7, 9, 11],
            " | Minor (b9 9 11 b13) | { 1 b2 2 b3 4 5 b6 } < a >": [0, 1, 2, 3, 5, 7, 8]
        },
        "(240) (7-14M) Major 7 (9 11 #11)": {
            " | Major 7 (9 11 #11) | { 1 2 3 4 #4 5 7 } < b >": [0, 2, 4, 5, 6, 7, 11],
            " | Dominant 7 no5 (9 #9 11 13) | { 1 2 b3 3 4 6 b7 } < c >": [0, 2, 3, 4, 5, 9, 10],
            " | Minor 7 (b9 9 b13) | { 1 b2 2 b3 5 b6 b7 } < d >": [0, 1, 2, 3, 7, 8, 10],
            " | Major 7 sus#4 (b9 9 13) | { 1 b2 2 #4 5 6 7 } < e >": [0, 1, 2, 6, 7, 9, 11],
            " | Diminished Major 7 sus4 (b9 b13 #13) | { 1 b2 4 b5 b6 b7 7 } < f >": [0, 1, 5, 6, 8, 10, 11],
            " | Major 7 (11 13 #13) | { 1 3 4 5 6 b7 7 } < g >": [0, 4, 5, 7, 9, 10, 11],
            " | Minor (b9 11 #11 b13) | { 1 b2 b3 4 #4 5 b6 } < a >": [0, 1, 3, 5, 6, 7, 8]
        },
        "(241) (7-15) Minor Major 7 (b9 11 #11)": {
            " | Minor Major 7 (b9 11 #11) | { 1 b2 b3 4 #4 5 7 } < b >": [0, 1, 3, 5, 6, 7, 11],
            " | Major 7 b5 (9 11 #13) | { 1 2 3 4 b5 b7 7 } < c >": [0, 2, 4, 5, 6, 10, 11],
            " | Augmented 7 (9 #9 13) | { 1 2 b3 3 #5 6 b7 } < d >": [0, 2, 3, 4, 8, 9, 10],
            " | 7 sus#4 (b9 9 b13) | { 1 b2 2 #4 5 b6 b7 } < e >": [0, 1, 2, 6, 7, 8, 10],
            " | Major 7 sus4 (b9 #11 13) | { 1 b2 4 #4 5 6 7 } < f >": [0, 1, 5, 6, 7, 9, 11],
            " | Augmented Major 7 (11 #11 #13) | { 1 3 4 #4 #5 b7 7 } < g >": [0, 4, 5, 6, 8, 10, 11],
            " | Major (b9 9 #11 b13) | { 1 b2 2 3 #4 5 b6 } < a >": [0, 1, 2, 4, 6, 7, 8]
        },
        "(242) (7-16) Major 7 (b9 #9 #13)": {
            " | Major 7 (b9 #9 #13) | { 1 b2 b3 3 5 b7 7 } < c >": [0, 1, 3, 4, 7, 10, 11],
            " | Diminished Major 7 (9 13 #13) | { 1 2 b3 b5 6 b7 7 } < d >": [0, 2, 3, 6, 9, 10, 11],
            " | Dominant 7 (b9 b13 13) | { 1 b2 3 5 b6 7 b7 } < e >": [0, 1, 4, 7, 8, 9, 10],
            " | Minor Major 7 (#11 b13 13) | { 1 b3 #4 5 b6 6 7 } < f >": [0, 3, 6, 7, 8, 9, 11],
            " | Major 6 b5 (#9 11 b13) | { 1 b3 3 4 b5 b6 6 } < g >": [0, 3, 4, 5, 6, 8, 9],
            " | Diminished 7 (b9 9 11) | { 1 b2 2 b3 4 b5 bb7 } < a >": [0, 1, 2, 3, 5, 6, 9],
            " | Augmented Major 7 (b9 9 11) | { 1 b2 2 3 4 #5 7 } < b >": [0, 1, 2, 4, 5, 8, 11]
        },
        "(243) (7-16M) Major 7 (b9 b13 #13)": {
            " | Major 7 (b9 b13 #13) | { 1 b2 3 5 b6 b7 7 } < e >": [0, 1, 4, 7, 8, 10, 11],
            " | Minor Major 7 (#11 13 #13) | { 1 b3 #4 5 6 b7 7 }  < f >": [0, 3, 6, 7, 9, 10, 11],
            " | Major 6 (#9 #11 b13) | { 1 #2 3 #4 5 b6 6 } < g >": [0, 3, 4, 6, 7, 8, 9],
            " | Major 6 b5 (b9 #9 11) | { 1 b2 b3 3 4 b5 6 } < a >": [0, 1, 3, 4, 5, 6, 9],
            " | Augmented Major 7 (9 #9 11) | { 1 2 b3 3 4 #5 7 } < b >": [0, 2, 3, 4, 5, 8, 11],
            " | Half-Diminished 7 (b9 9 13) | { 1 b2 2 b3 b5 6 b7 } < c >": [0, 1, 2, 3, 6, 9, 10],
            " | Augmented Major 7 sus4 (b9 9 13) | { 1 b2 2 4 #5 6 7 } < d >": [0, 1, 2, 5, 8, 9, 11]
        },
        "(244) (7-Z17) Major 7 (9 #9 #13)": {
            " | Major 7 (9 #9 #13) | { 1 2 b3 3 5 b7 7 } < c >": [0, 2, 3, 4, 7, 10, 11],
            " | Augmented 7 sus4 (b9 9 13) | { 1 b2 2 4 #5 6 b7 } < d >": [0, 1, 2, 5, 8, 9, 10],
            " | Major 7 (b9 b13 13) | { 1 b2 3 5 b6 6 7 } < e >": [0, 1, 4, 7, 8, 9, 11],
            " | Minor Major 7 (#11 b13 #13) | { 1 b3 #4 5 b6 b7 7 } < f >": [0, 3, 6, 7, 8, 10, 11],
            " | Major 6 (#9 11 b13) | { 1 #2 3 4 5 b6 6 } < g >": [0, 3, 4, 5, 7, 8, 9],
            " | Major 6 b5 (b9 9 11) | { 1 b2 2 3 4 b5 6 } < a >": [0, 1, 2, 4, 5, 6, 9],
            " | Augmented Major 7 (b9 #9 11) | { 1 b2 b3 3 4 #5 7 } < b >": [0, 1, 3, 4, 5, 8, 11]
        },
        "(245) (7-X18) Major 7 (b9 9 b13)": {
            " | Major 7 (b9 9 b13) | { 1 b2 2 3 5 b6 7 } < d >": [0, 1, 2, 4, 7, 8, 11],
            " | Minor Major 7 (b9 #11 #13) | { 1 b2 b3 #4 5 b7 7 }  < e >": [0, 1, 3, 6, 7, 10, 11],
            " | Diminished Major 7 sus4 (9 13 #13) | { 1 2 4 b5 6 b7 7 } < f >": [0, 2, 5, 6, 9, 10, 11],
            " | Dominant 7 (#9 b13 13) | { 1 #2 3 5 b6 6 b7 } < g >": [0, 3, 4, 7, 8, 9, 10],
            " | Major 6 (b9 11 #11) | { 1 b2 3 4 #4 5 6 } < a >": [0, 1, 4, 5, 6, 7, 9],
            " | Major 7 b5 (#9 11 b13) | { 1 #2 3 4 b5 b6 7 } < b >": [0, 3, 4, 5, 6, 8, 11],
            " | Minor 6 #5 (b9 9 11) | { 1 b2 2 b3 4 #5 6 } < c >": [0, 1, 2, 3, 5, 8, 9]
        },
        "(246) (7-X18M) Minor 7 (b9 9 #11)": {
            " | Minor 7 (b9 9 #11) | { 1 b2 2 b3 #4 5 b7 } < b >": [0, 1, 2, 3, 6, 7, 10],
            " | Diminished Major 7 sus4 (b9 9 13) | { 1 b2 2 4 b5 6 7 } < c >": [0, 1, 2, 5, 6, 9, 11],
            " | Augmented Major 7 (b9 11 #13) | { 1 b2 3 4 #5 b7 7 } < d >": [0, 1, 4, 5, 8, 10, 11],
            " | Major 7 (#9 13 #13) | { 1 b3 3 5 6 b7 7 } < e >": [0, 3, 4, 7, 9, 10, 11],
            " | Major 6 (b9 #11 b13) | { 1 b2 3 #4 5 b6 6 } < f >": [0, 1, 4, 6, 7, 8, 9],
            " | Minor Major 7 (11 #11 b13) | { 1 b3 4 #4 5 b6 7 } < g >": [0, 3, 5, 6, 7, 8, 11],
            " | Augmented (9 #9 11 13) | { 1 2 b3 3 4 #5 6 } < a >": [0, 2, 3, 4, 5, 8, 9]
        },
        "(247) (7-19) look me up, Enigmatic Minor, Ionian #2 b5 b6": {
            " | Minor 6 (b9 9 #11) | { 1 b2 2 b3 #4 5 6 } < a >": [0, 1, 2, 3, 6, 7, 9],
            " | Diminished Major 7 sus4 (b9 9 b13) | { 1 b2 2 4 b5 b6 7 } < b >": [0, 1, 2, 5, 6, 8, 11],
            " | Major 7 (b9 11 #13) | { 1 b2 3 4 5 b7 7 } < c >": [0, 1, 4, 5, 7, 10, 11],
            " | Major 7 b5 (#9 13 #13) | { 1 b3 3 b5 6 b7 7 } < d >": [0, 3, 4, 6, 9, 10, 11],
            " | Minor 6 (b9 #11 b13) | { 1 b2 b3 #4 5 b6 bb7 } < e >": [0, 1, 3, 6, 7, 8, 9],
            " | Major 7 sus2 (11 #11 b13) | { 1 2 4 #4 5 b6 7 } < f >": [0, 2, 5, 6, 7, 8, 11],
            " | Dominant 7 b5 (#9 11 13) | { 1 #2 3 4 b5 6 b7 } < g >": [0, 3, 4, 5, 6, 9, 10]
        },
        "(248) (7-19M) Major 7 (b9 #11 #13)": {
            "Lydian b2 #6 | Major 7 (b9 #11 #13) | { 1 b2 3 #4 5 b7 7 } < c >": [0, 1, 4, 6, 7, 10, 11],
            "Lydian #2 #3 #5 #6 | Diminished Major 7 (11 13 #13) | { 1 b3 4 b5 6 b7 7 } < d >": [0, 3, 5, 6, 9, 10, 11],
            "Aeolian #4 bb7 | Minor 6 (9 #11 b13) | { 1 2 b3 #4 5 b6 6 } < e >": [0, 2, 3, 6, 7, 8, 9],
            "Locrian nat3 bb6 | Dominant 7 (b9 11 #11) | { 1 b2 3 4 #4 5 b7 } < f >": [0, 1, 4, 5, 6, 7, 10],
            "Ionian #2 b5 | Major 7 b5 (#9 11 13) | { 1 #2 3 4 b5 6 7 } < g >": [0, 3, 4, 5, 6, 9, 11],
            "Locrian bb3 bb4 bb7 | Diminished 7 (b9 9 b13) | { 1 b2 2 b3 b5 b6 bb7 } < a >": [0, 1, 2, 3, 6, 8, 9],
            "Phrygian bb3 nat7, Ionian b2 bb3 b6 | Major 7 sus4 (b9 9 b13) | { 1 b2 2 4 5 b6 7 } < b >": [0, 1, 2, 5, 7, 8, 11]
        },
        "(249) (7-20) Persian, Ionian #2 #6": {
            "Persian, Ionian #2 #6 | Major 7 (#9 11 #13) | { 1 #2 3 4 5 #6 7 } < c >": [0, 3, 4, 5, 7, 10, 11],
            "Phrygian bb2 b4 bb7 | Major 6 (b9 9 b13) | { 1 b2 bb3 b4 5 b6 bb7 } < d >": [0, 1, 2, 4, 7, 8, 9],
            "Todi, Phrygian #4 nat7, Lydian b2 b3 b6 | Minor Major 7 (b9 #11 b13) | { 1 b2 b3 #4 5 b6 7 } < e >": [0, 1, 3, 6, 7, 8, 11],
            "Lydian #3 #6 | Major 7 sus2 (11 #11 #13) | { 1 2 4 #4 5 b7 7 } < f >": [0, 2, 5, 6, 7, 10, 11],
            "Mixolydian #2 #5 | Augmented 7 (#9 11 13) | { 1 #2 3 4 #5 6 b7 } < g >": [0, 3, 4, 5, 8, 9, 10],
            "Locrian bb3 bb6 bb7 | sus4 (b9 9 #11 13) | { 1 b2 bb3 4 #4 5 6 } < a >": [0, 1, 2, 5, 6, 7, 9],
            "Locrian nat 3 nat7, Ionian b2 b5 b6 | Major 7 b5 (b9 11 b13) | { 1 b2 3 4 b5 b6 7 } < b >": [0, 1, 4, 5, 6, 8, 11]
        },
        "(250) (7-20M) Composite II, Ionian #2 #5 #6": {
            "Composite II, Ionian #2 #5 #6 | Augmented Major 7 (#9 11 #13) | { 1 #2 3 4 #5 #6 7 } < g >": [0, 3, 4, 5, 8, 10, 11],
            "Phrygian bb3 bb7 | sus4 (b9 9 b13 13) | { 1 b2 2 4 5 b6 6 } < a >": [0, 1, 2, 5, 7, 8, 9],
            "Purvi, Lydian b2 b6 | Major 7 (b9 #11 b13) | { 1 b2 3 #4 5 b6 7 } < b >": [0, 1, 4, 6, 7, 8, 11],
            "Lydian #2 #3 #6 | Minor Major 7 (11 #11 #13) | { 1 b3 4 #4 5 b7 7 } < c >": [0, 3, 5, 6, 7, 10, 11],
            "Aeolian b4 bb7 | Major 6 (9 #9 b13) | { 1 2 b3 b4 5 b6 bb7 } < d >": [0, 2, 3, 4, 7, 8, 9],
            "Locrian bb3 bb6 | 7 sus4 (b9 9 #11) | { 1 b2 2 4 #4 5 b7 } < e >": [0, 1, 2, 5, 6, 7, 10],
            "Ionian b2 b5 | Major 7 b5 (b9 11 13) | { 1 b2 3 4 b5 6 7 } < f >": [0, 1, 4, 5, 6, 9, 11]
        },
        "(251) (7-21) Major 7 (#9 11 b13)": {
            "Ionian #2 b6 | Major 7 (#9 11 b13) | { 1 #2 3 4 5 b6 7 } < g >": [0, 3, 4, 5, 7, 8, 11],
            "Locrian bb3 b4 bb5 bb7 | Augmented (b9 9 11 13) | { 1 b2 2 3 4 #5 6 } < a >": [0, 1, 2, 4, 5, 8, 9],
            "Phrygian b4 nat7 | Major 7 (b9 #9 b13) | { 1 b2 b3 3 5 b6 7 } < b >": [0, 1, 3, 4, 7, 8, 11],
            "Lydian b3 #6 | Minor Major 7 (9 #11 #13) | { 1 2 b3 #4 5 b7 7 } < c >": [0, 2, 3, 6, 7, 10, 11],
            "Mixolydian b2 #5 | Augmented 7 (b9 11 13) | { 1 b2 3 4 #5 6 b7 } < d >": [0, 1, 4, 5, 8, 9, 10],
            "Lydian #2 ##4 #5 | Major 7 (#9 b13 13) | { 1 #2 3 5 b6 6 7 } < e >": [0, 3, 4, 7, 8, 9, 11],
            "Locrian nat3 bb7 | Augmented (b9 11 #11 13) | { 1 b2 3 4 b5 b6 bb7 } < f >": [0, 1, 4, 5, 6, 8, 9]
        },
        "(252) (7-21M) Ionian b2 #5": {
            "Ionian b2 #5 | Augmented Major 7 (b9 11 13) | { 1 b2 3 4 #5 6 7 } < d >": [0, 1, 4, 5, 8, 9, 11],
            "Lydian #2 ##4 #5 #6 | Major 7 (#9 b13 #13) | { 1 b3 3 5 b6 b7 7 } < e >": [0, 3, 4, 7, 8, 10, 11],
            "Phrygian nat3 bb7 | Major 6 (b9 11 b13) | { 1 b2 3 4 5 b6 bb7 } < f >": [0, 1, 4, 5, 7, 8, 9],
            "Lydian #2 b6 | Major 7 (#9 #11 b13) | { 1 #2 3 #4 5 b6 7 } < g >": [0, 3, 4, 6, 7, 8, 11],
            "Locrian b4 bb5 bb7 | Augmented (b9 #9 11 13) | { 1 b2 b3 3 4 #5 6 } < a >": [0, 1, 3, 4, 5, 8, 9],
            "Aeolian b4 nat7 | Major 7 (9 #9 b13) | { 1 2 b3 3 5 b6 7 } < b >": [0, 2, 3, 4, 7, 8, 11],
            "Locrian bb3 nat6 | Half-Diminished 7 sus4 (b9 9 13) | { 1 b2 2 4 b5 6 b7 } < c >": [0, 1, 2, 5, 6, 9, 10]
        },
        "(253) (7-22) Hungarian Minor": {
            "Hungarian Minor, Aeolian #4 nat7, Lydian b3 b6 | Minor Major 7 (9 #11 b13) | { 1 2 b3 #4 5 b6 7 } < e >": [0, 2, 3, 6, 7, 8, 11],
            "Oriental, Mixolydian b2 b5, Locrian nat3 nat6 | Dominant 7 b5 (b9 11 13) | { 1 b2 3 4 b5 6 b7 } < f >": [0, 1, 4, 5, 6, 9, 10],
            "Ionian #2 #5 | Augmented Major 7 (#9 11 13) | { 1 #2 3 4 #5 6 7 } < g >": [0, 3, 4, 5, 8, 9, 11],
            "Locrian bb3 bb6 | Diminished 7 sus4 (b9 9 b13) | { 1 b2 bb3 4 b5 b6 bb7 } < a >": [0, 1, 2, 5, 6, 8, 9],
            "Double Harmonic, Bhairav, Ionian b2 b6 | Major 7 (b9 11 b13) | { 1 b2 3 4 5 b6 7 } < b >": [0, 1, 4, 5, 7, 8, 11],
            "Lydian #2 #6 | Major 7 (#9 #11 #13) | { 1 #2 3 #4 5 b7 7 } < c >": [0, 3, 4, 6, 7, 10, 11],
            "Phrygian b4 bb7 | Major 6 (b9 #9 b13) | { 1 b2 b3 b4 5 b6 bb7 } < d >": [0, 1, 3, 4, 7, 8, 9],
        },
        "(254) (7-23) Major 7 (9 13 #13)": {
            " | Major 7 (9 13 #13) | { 1 2 3 5 6 b7 7 } < e >": [0, 2, 4, 7, 9, 10, 11],
            " | 7 sus4 (9 b13 13) | { 1 2 4 5 b6 6 b7 } < f >": [0, 2, 5, 7, 8, 9, 10],
            " | Minor 7 (11 #11 b13) | { 1 b3 4 #4 5 b6 b7 } < g >": [0, 3, 5, 6, 7, 8, 10],
            "Major Hexachord add b3 | Major 6 (9 #9 11) | { 1 2 b3 3 4 5 6 } < a >": [0, 2, 3, 4, 5, 7, 9],
            " | Minor 7 (b9 9 11) | { 1 b2 2 b3 4 5 b7 } < b >": [0, 1, 2, 3, 5, 7, 10],
            " | Major 7 b5 (b9 9 13) | { 1 b2 2 3 b5 6 7 } < c >": [0, 1, 2, 4, 6, 9, 11],
            " | Minor Major 7 #5 (b9 11 #13) | { 1 b2 b3 4 #5 #6 7 } < d >": [0, 1, 3, 5, 8, 10, 11]
        },       
        "(255) (7-23M) Major 7 (b9 9 13)": {
            " | Major 7 (b9 9 13) | { 1 b2 2 3 5 6 7 } < d >": [0, 1, 2, 4, 7, 9, 11],
            " | Minor Major 7 #5 (b9 #11 #13) | { 1 b2 b3 #4 #5 b7 7 } < e >": [0, 1, 3, 6, 8, 10, 11],
            " | Major 7 sus4 (9 13 #13) | { 1 2 4 5 6 b7 7 } < f >": [0, 2, 5, 7, 9, 10, 11],
            " | Minor 7 (11 b13 13) | { 1 b3 4 5 b6 6 b7 } < g >": [0, 3, 5, 7, 8, 9, 10],
            "Ionian Hexachord add #4 | Major 6 (9 11 #11) | { 1 2 3 4 #4 5 6 } < a >": [0, 2, 4, 5, 6, 7, 9],
            " | Dominant 7 (9 #9 11) | { 1 2 b3 3 4 5 b7 } < b >": [0, 2, 3, 4, 5, 7, 10],
            " | Minor 7 #5 (b9 9 11) | { 1 b2 2 b3 4 b6 b7 } < c >": [0, 1, 2, 3, 5, 8, 10]
        },
        "(256) (7-24) Dominant 7 (9 b13 13)": {
            " | Dominant 7 (9 b13 13) | { 1 2 3 5 b6 6 b7 } < e >": [0, 2, 4, 7, 8, 9, 10],
            " | 7 sus2 (11 #11 b13) | { 1 2 4 #4 5 b6 b7 } < f >": [0, 2, 5, 6, 7, 8, 10],
            " | Dominant 7 b5 (#9 11 b13) | { 1 #2 3 4 b5 b6 b7 } < g >": [0, 3, 4, 5, 6, 8, 10],
            "Dorian Hexachord add b2 | Minor 6 (b9 9 11) | { 1 b2 2 b3 4 5 6 }  < a >": [0, 1, 2, 3, 5, 7, 9],
            " | Augmented Major 7 (b9 9 #11) | { 1 b2 2 3 #4 #5 7 } < b >": [0, 1, 2, 4, 6, 8, 11],
            " | Minor Major 7 (b9 11 #13) | { 1 b2 b3 4 5 b7 7 } < c >": [0, 1, 3, 5, 7, 10, 11],
            " | Major 7 b5 (9 13 #13) | { 1 2 3 b5 6 b7 7 } < d >": [0, 2, 4, 6, 9, 10, 11]
        },
        "(257) (7-24M) Enigmatic": {
            "Enigmatic, Lydian Hexachord add b6 | Major 6 (9 #11 b13) | { 1 2 3 #4 5 b6 bb7 } < a >": [0, 2, 4, 6, 7, 8, 9],
            " | Dominant 7 (9 11 #11) | { 1 2 3 #4 5 b7 } < b >": [0, 2, 4, 5, 6, 7, 10],
            " | Augmented 7 (9 #9 11) | { 1 2 b3 3 4 #5 b7 } < c >": [0, 2, 3, 4, 5, 8, 10],
            " | Half-Diminished 7 (b9 9 b13) | { 1 b2 2 b3 b5 b6 b7 } < d >": [0, 1, 2, 3, 6, 8, 10],
            " | Major 7 sus4 (b9 9 13) | { 1 b2 2 4 5 6 7 } < e >": [0, 1, 2, 5, 7, 9, 11],
            " | Augmented Major 7 (b9 #11 #13) | { 1 b2 3 #4 #5 #6 7 } < f >": [0, 1, 4, 6, 8, 10, 11],
            " | Minor Major 7 (11 13 #13) | { 1 b3 4 5 6 b7 7 } < g >": [0, 3, 5, 7, 9, 10, 11]
        },
        "(258) (7-25) Major 7 (9 #9 #11)": {
            "Lydian Hexachord add b3 | Major 7 (9 #9 #11) | { 1 2 b3 3 #4 5 6 } < a >": [0, 2, 3, 4, 6, 7, 9],
            " | Dominant 7 (b9 9 11) | { 1 b2 2 3 4 5 b7 } < b >": [0, 1, 2, 4, 5, 7, 10],
            " | Major 7 b5 (b9 #9 13) | { 1 b2 b3 3 b5 6 7 } < c >": [0, 1, 3, 4, 6, 9, 11],
            " | Minor Major 7 #5 (9 11 #13) | { 1 2 b3 4 #5 b7 7 } < d >": [0, 2, 3, 5, 8, 10, 11],
            " | Minor 7 #5 (b9 #11 13) | { 1 b2 b3 b5 b6 6 b7 } < e >": [0, 1, 3, 6, 8, 9, 10],
            " | Major 7 sus4 (9 b13 13) | { 1 2 4 5 b6 6 7 } < f >": [0, 2, 5, 7, 8, 9, 11],
            " | Minor 7 (11 #11 13) | { 1 b3 4 #4 5 6 b7 } < g >": [0, 3, 5, 6, 7, 9, 10]
        },
        "(259) (7-25M) Dominant 7 (b9 9 13)": {
            " | Dominant 7 (b9 9 13) | { 1 b2 2 3 5 6 b7 } < d >": [0, 1, 2, 4, 7, 9, 10],
            " | Minor Major 7 #5 (b9 #11 13) | { 1 b2 b3 #4 #5 6 7 } < e >": [0, 1, 3, 6, 8, 9, 11],
            " | Major 7 sus4 (9 b13 #13) | { 1 2 4 5 b6 b7 7 } < f >": [0, 2, 5, 7, 8, 10, 11],
            " | Minor 7 #5 (11 #11 13) | { 1 b3 4 #4 #5 6 b7 } < g >": [0, 3, 5, 6, 8, 9, 10],
            "Dorian Hexachord add #4 | Minor 6 (9 11 #11) | { 1 2 b3 4 #4 5 6 } < a >": [0, 2, 3, 5, 6, 7, 9],
            " | Dominant 7 (b9 #9 11) | { 1 b2 b3 3 4 5 b7 } < b >": [0, 1, 3, 4, 5, 7, 10],
            " | Major 7 b5 (9 #9 13) | { 1 2 b3 3 b5 6 7 } < c >": [0, 2, 3, 4, 6, 9, 11]
        },
        "(260) (7-26) Major 7 (9 b13 #13)": {
            " | Major 7 (9 b13 #13) | { 1 2 3 5 b6 b7 7 } < e >": [0, 2, 4, 7, 8, 10, 11],
            " | Augmented 7 sus4 (9 #11 13) | { 1 2 4 #4 #5 6 b7 } < f >": [0, 2, 5, 6, 8, 9, 10],
            " | Dominant 7 (#9 #11 b13) | { 1 #2 3 #4 5 b7 b7 } < g >": [0, 3, 4, 6, 7, 8, 10],
            "Dorian b2 Hexachord add nat3 | Major 6 (b9 #9 11) | { 1 b2 b3 3 4 5 6 } < a >": [0, 1, 3, 4, 5, 7, 9],
            " | Major 7 b5 (9 #9 b13) | { 1 2 b3 3 b5 b6 7 } < b >": [0, 2, 3, 4, 6, 8, 11],
            " | Dominant 7 b5 (b9 9 13) | { 1 b2 2 3 b5 6 b7 } < c >": [0, 1, 2, 4, 6, 9, 10],
            " | Minor Major 7 #5 (b9 11 13) | { 1 b2 b3 4 #5 6 7 } < d >": [0, 1, 3, 5, 8, 9, 11]
        },
        "(261) (7-26M) Major 7 (b9 #9 13)": {
            "Ionian b2 b3 b4 | Major 7 (b9 #9 13) | { 1 b2 b3 3 5 6 7 } < d >": [0, 1, 3, 4, 7, 9, 11],
            "Lydian b3 #5 #6 | Minor Major 7 #5 (9 #11 #13) | { 1 2 b3 #4 #5 #6 7 } < e >": [0, 2, 3, 6, 8, 10, 11],
            "Lydian b2 #5 b7 | Augmented 7 (b9 #11 13) | { 1 b2 3 #4 #5 6 b7 } < f >": [0, 1, 4, 6, 8, 9, 10],
            "Lydian #2 #3 ##4 #5 | Minor Major 7 (11 b13 13) | { 1 b2 4 5 b6 6 7 }  < g >": [0, 3, 5, 7, 8, 9, 11],
            "Mixolydian b5 b6 bb7 | Major 6 b5 (9 11 b13) | { 1 2 3 4 b5 b6 bb7 } < a >": [0, 2, 4, 5, 6, 8, 9],
            "Locrian nat2 b4 bb6 | Dominant 7 (9 #9 #11) | { 1 2 b3 3 #4 5 b7 } < b >": [0, 2, 3, 4, 6, 7, 10],
            "Locrian bb3 b4 bb5 | Augmented 7 (b9 9 11) | { 1 b2 2 3 4 #5 b7 } < c >": [0, 1, 2, 4, 5, 8, 10]
        },
        "(262) (7-27) Ionian b3 nat 6": {
            "Ionian b3 #6 | Minor Major 7 ( 9 11 #13 ) | { 1 2 b3 4 5 #6 7 } < c >": [0, 2, 3, 5, 7, 10, 11],
            "Dorian b2 #5, Phrygian #5 nat6 | Minor7 #5 (b9 11 13) | { 1 b2 b3 4 #5 6 b7 } < d >": [0, 1, 3, 5, 8, 9, 10],
            "Lydian ##4 #5 | Major 7 (9 b13 13) | { 1 2 3 5 b6 6 7 } < e >": [0, 2, 4, 7, 8, 9, 11],
            "Lydian #3 b7, Mixolydian #3 #4 | 7 sus2 (11 #11 13) | { 1 2 4 #4 5 6 b7 } < f >": [0, 2, 5, 6, 7, 9, 10],
            "Mixolydian #2 b6 | Dominant 7 (#9 11 b13) | { 1 #2 3 4 5 b6 b7 } < g >": [0, 3, 4, 5, 7, 8, 10],
            "Major Hexachord add b2 | Major 6 (b9 9 11) | { 1 b2 2 3 4 5 6 } < a >": [0, 1, 2, 4, 5, 7, 9],
            "Locrian b4 nat7 | Diminished Major 7 ( b9 b11 b13 ), Augmented Major 7 ( b9 #9 #11 ) | { 1 b2 b3 b4 b5 b6 7 } < b >": [0, 1, 3, 4, 6, 8, 11]
        },
        "(263) (7-27M) Melodic Minor b4": {
            "Melodic Minor b4, Ionian b3 b4, Dorian b4 nat7 | Minor Major 7 ( 9 b11 13 ), Major 7 ( 9 #9 13 ) | { 1 2 b3 b4 5 6 7 } < d >": [0, 2, 3, 4, 7, 9, 11],
            "Dorian b2 bb3 | 7 sus2 ( b9 11 13 ) | { 1 b2 bb3 4 5 6 b7 } < e >": [0, 1, 2, 5, 7, 9, 10],
            "Lydian b2 #5 | Augmented Major 7 ( b9 #11 13 ) | { 1 b2 3 #4 #5 6 7 } < f >": [0, 1, 4, 6, 8, 9, 11],
            "Lydian #2 #3 ##4 #5 #6 | Minor Major 7 ( 11 b13 #13 ) | { 1 #2 #3 ##4 #5 #6 7 } < g >": [0, 3, 5, 7, 8, 10, 11],
            "Harmonic Major bb7 | Major 6 ( 9 11 b13 ) | { 1 2 3 4 5 b6 bb7 } < a >": [0, 2, 4, 5, 7, 8, 9],
            "Locrian nat2 bb6 | Minor 7 ( 9 11 #11 ) | { 1 2 b3 4 b5 bb6 b7 } < b >": [0, 2, 3, 5, 6, 7, 10],
            "Locrian b4 bb5 | Augmented 7 ( b9 #9 11 ) | { 1 b2 b3 b4 bb5 b6 b7 } < c >": [0, 1, 3, 4, 5, 8, 10]
        },
        "(264) (7-28) Ionian b5 b6": {
            "Ionian b5 b6 | Major 7 b5 ( 9 11 b13 ) | { 1 2 3 4 b5 b6 7 } < b >": [0, 2, 4, 5, 6, 8, 11],
            "Dorian b4 b5 | Half-Diminished 7 ( 9 b11 13 ), Dominant 7 b5 ( 9 #9 13 ) | { 1 2 b3 b4 b5 6 b7 } < c >": [0, 2, 3, 4, 6, 9, 10],
            "Phrygian bb3 b4 | Dominant 7 ( b9 9 b13 ) | { 1 b2 bb3 b4 5 b6 b7 } < d >": [0, 1, 2, 4, 7, 8, 10],
            "Lydian b2 b3 | Minor Major 7 ( b9 #11 13 ) | { 1 b2 b3 #4 5 6 7 } < e >": [0, 1, 3, 6, 7, 9, 11],
            "Lydian #3 #5 #6 | Augmented Major 7 sus4 ( 9 #11 #13 ) | { 1 2 #3 #4 #5 #6 7 } < f >": [0, 2, 5, 6, 8, 10, 11],
            "Lydian #2 #5 #6 | Augmented 7 ( #9 #11 13 ) | { 1 #2 3 #4 #5 6 b7 } < g >": [0, 3, 4, 6, 8, 9, 10],
            "Locrian bb6 bb7 | Minor 6 ( b9 11 #11 ) | { 1 b2 b3 4 b5 bb6 bb7 } < a >": [0, 1, 3, 5, 6, 7, 9]
        },
        "(265) (7-28M) Ionian #5 #6": {
            "Ionian #5 #6 | Augmented Major 7 ( 9 11 #13 ) | { 1 2 3 4 #5 #6 7 } < d >": [0, 2, 4, 5, 8, 10, 11],
            "Dorian #4 #5 | Minor 7 #5 ( 9 #11 13 ) | { 1 2 b3 #4 #5 6 b7 } < e >": [0, 2, 3, 6, 8, 9, 10],
            "Phrygian nat3 #4 | Dominant 7 ( b9 #11 b13 ) | { 1 b2 3 #4 5 b6 b7 } < f >": [0, 1, 4, 6, 7, 8, 10],
            "Lydian #2 #3 | Minor Major 7 ( 11 #11 13 ) | { 1 #2 #3 #4 5 6 7 } < g >": [0, 3, 5, 6, 7, 9, 11],
            "Locrian nat2 b4 bb7 | Diminished 7 ( 9 b11 b13 ) | { 1 2 b3 b4 b5 b6 bb7 } < a >": [0, 2, 3, 4, 6, 8, 9],
            "Locrian bb3 b4 bb6 | Dominant 7 ( b9 9 #11 ) | { 1 b2 bb3 b4 b5 bb6 b7 } < b >": [0, 1, 2, 4, 6, 7, 10],
            "Locrian nat6 nat7 | Diminished Major 7 ( b9 11 13 ) | { 1 b2 b3 4 b5 6 7 } < c >": [0, 1, 3, 5, 6, 9, 11]
        },        
         "(266) (7-29) Ionian #6": {
            "Ionian #6 | Major 7 ( 9 11 #13 ) | { 1 2 3 4 5 #6 7 } < c >": [0, 2, 4, 5, 7, 10, 11],
            "Dorian #5 | Minor 7 #5 ( 9 11 13 ) | { 1 2 b3 4 #5 6 b7 } < d >": [0, 2, 3, 5, 8, 9, 10],
            "Phrygian #4 | Minor 7 ( b9 #11 b13 ) | { 1 b2 b3 #4 5 b6 b7 } < e >": [0, 1, 3, 6, 7, 8, 10],
            "Lydian #3 | Major 7 sus4 ( 9 #11 13 ) | { 1 2 #3 #4 5 6 7 } < f >": [0, 2, 5, 6, 7, 9, 11],
            "Mixolydian #2 | Dominant 7 ( #9 11 13) | { 1 #2 3 4 5 6 b7 } < g >": [0, 3, 4, 5, 7, 9, 10],
            "Locrian bb3 b4 bb6 bb7 | Major 6 ( b9 9 #11 ) | { 1 b2 bb3 b4 b5 bb6 bb7 } < a >": [0, 1, 2, 4, 6, 7, 9],
            "Locrian nat7 | Diminished Major 7 ( b9 11 b13 ) | { 1 b2 b3 4 b5 b6 7 } < b >": [0, 1, 3, 5, 6, 8, 11]
        },
        "(267) (7-29M) Ionian b5": {
            "Ionian b5 | Major 7 b5 ( 9 11 13 ) | { 1 2 3 4 b5 6 7 } < c >": [0, 2, 4, 5, 6, 9, 11],
            "Dorian b4 | Minor 7 ( 9 b11 13 ), Dominant 7 ( 9 #9 13 )  | { 1 2 b3 b4 5 6 b7 } < d >": [0, 2, 3, 4, 7, 9, 10],
            "Phrygian bb3 | 7 sus2 ( b9 11 b13 ) | { 1 b2 bb3 4 5 b6 b7 } < e >": [0, 1, 2, 5, 7, 8, 10],
            "Marwa, Lydian b2 | Major 7 ( b9 #11 13 ) | { 1 b2 3 #4 5 6 7 } < f >": [0, 1, 4, 6, 7, 9, 11],
            "Lydian #2 #3 #5 #6 | Augmented Major 7 sus4 ( #9 #11 #13 )| { 1 #2 #3 #4 #5 #6 7 } < g >": [0, 3, 5, 6, 8, 10, 11],
            "Aeolian bb7 | Minor 6 ( 9 11 b13 ) | { 1 2 b3 4 5 b6 bb7 } < a >": [0, 2, 3, 5, 7, 8, 9],
            "Locrian bb6 | Minor 7 ( b9 11 #11 ) | { 1 b2 b3 4 b5 bb6 b7 } < b >": [0, 1, 3, 5, 6, 7, 10]
        },
        "(268) (7-30) Neapolitan Minor": {
            "Neapolitan Minor, Phrygian nat7 | Minor Major 7 ( b9 11 b13 ) | { 1 b2 b3 4 5 b6 7 } < b >": [0, 1, 3, 5, 7, 8, 11],
            "Lydian #6 | Major 7 ( 9 #11 #13 ) | { 1 2 3 #4 5 #6 7 } < c >": [0, 2, 4, 6, 7, 10, 11],
            "Mixolydian #5 | Augmented 7 ( 9 11 13 ) | { 1 2 3 4 #5 6 b7 } < d >": [0, 2, 4, 5, 8, 9, 10],
            "Hungarian Gypsy, Aeolian #4 | Minor 7 ( 9 #11 b13 ) | { 1 2 b3 #4 5 b6 b7 } < e >": [0, 2, 3, 6, 7, 8, 10],
            "Locrian nat3 | Dominant 7 b5 ( b9 11 b13 ) | { 1 b2 3 4 b5 b6 b7 } < f >": [0, 1, 4, 5, 6, 8, 10],
            "Ionian #2 | Major 7 ( #9 11 13 ) | { 1 #2 3 4 5 6 7 } < g >": [0, 3, 4, 5, 7, 9, 11],
            "Locrian bb3 b4 bb7 | Augmented 6 ( b9 9 #11 ) | { 1 b2 bb3 b4 b5 b6 bb7 } < a >": [0, 1, 2, 4, 6, 8, 9]
        },
        "(269) (7-30M) Ionian b2": {
            "Ionian b2 | Major 7 ( b9 11 13 ) | { 1 b2 3 4 5 6 7 } < f >": [0, 1, 4, 5, 7, 9, 11],
            "Lydian #2 #5 #6 | Augmented Major 7 ( #9 #11 #13 )  | { 1 #2 3 #4 #5 #6 7 } < g >": [0, 3, 4, 6, 8, 10, 11],
            "Phrygian bb7 | Minor 6 ( b9 11 b13 ) | { 1 b2 b3 4 5 b6 bb7 } < a >": [0, 1, 3, 5, 7, 8, 9],
            "Lydian b6 | Major 7 ( 9 #11 b13 ) | { 1 2 3 #4 5 b6 7 } < b >": [0, 2, 4, 6, 7, 8, 11],
            "Mixolydian b5 | Dominant 7 b5 ( 9 11 13 ) | { 1 2 3 4 b5 6 b7 } < c >": [0, 2, 4, 5, 6, 9, 10],
            "Aeolian b4 | Minor 7 ( 9 b11 b13 ), Dominant 7 ( 9 #9 b13 ) | {1 2 b3 b4 5 b6 b7 } < d >": [0, 2, 3, 4, 7, 8, 10],
            "Locrian bb3 | Half-Diminished 7 sus2 ( b9 9 b13 ) | {1 b2 bb3 4 b5 b6 b7} < e >": [0, 1, 2, 5, 6, 8, 10]
        },
        "(270) (7-31) Hungarian Major": {
            "Hungarian Major, Lydian #2 b7, Mixolydian #2 #4 | Dominant 7 ( #9 #11 13 ) | { 1 #2 3 #4 5 6 b7 } < g >": [0, 3, 4, 6, 7, 9, 10],
            "Locrian b4 bb6 bb7 | Major 6 ( b9 #9 #11 ) | { 1 b2 b3 b4 b5 bb6 bb7 } < a >": [0, 1, 3, 4, 6, 7, 9],
            "Locrian nat2 nat7 | Diminished Major 7 ( 9 11 b13 ) | { 1 2 b3 4 b5 b6 7 } < b >": [0, 2, 3, 5, 6, 8, 11],
            "Locrian b4 nat6 | Half-Diminished 7 ( b9 b11 13 ), Dominant 7 b5 ( b9 #9 13 ) | { 1 b2 b3 b4 b5 6 b7 } < c >": [0, 1, 3, 4, 6, 9, 10],
            "Dorian #5 nat7, Melodic Minor #5 | Minor Augmented Major 7 ( 9 11 13 ) | { 1 2 b3 4 #5 6 7 } < d >": [0, 2, 3, 5, 8, 9, 11],
            "Dorian b2 #4, Phrygian #4 nat6 | Minor 7 ( b9 #11 13 ) | {1 b2 b3 #4 5 6 b7 } < e >": [0, 1, 3, 6, 7, 9, 10],
            "Lydian #3 #5 | Augmented Major 7 sus4 ( 9 #11 13 ) | { 1 2 #3 #4 #5 6 7 } < f >": [0, 2, 5, 6, 8, 9, 11]
        },
        "(271) (7-31M) Melodic Minor b5": {
            "Melodic Minor b5, Ionian b3 b5, Dorian b5 nat7 | Diminished Major 7 ( 9 11 13 ) | { 1 2 b3 4 b5 6 7 } < c >": [0, 2, 3, 5, 6, 9, 11],
            "Dorian b2 b4, Phrygian b4 nat6 | Minor 7 ( b9 b11 13), Dominant 7 (b9 #9 13) | { 1 b2 b3 b4 5 6 b7 } < d >": [0, 1, 3, 4, 7, 9, 10],
            "Lydian b3 #5 | Minor Augmented Major 7 ( 9 #11 13 ) | { 1 2 b3 #4 #5 6 7 } < e >": [0, 2, 3, 6, 8, 9, 11],
            "Lydian b2 b7 | Dominant 7 ( b9 #11 13 ) | { 1 b2 3 #4 5 6 b7 } < f >": [0, 1, 4, 6, 7, 9, 10],
            "Lydian #2 #3 #5 | Augmented Major 7 sus4 ( #9 #11 13 ) | { 1 #2 #3 #4 #5 6 7 } < g >": [0, 3, 5, 6, 8, 9, 11],
            "Locrian nat2 bb7 | Diminished 7 ( 9 11 b13 ) | { 1 2 b3 4 b5 b6 bb7 } < a >": [0, 2, 3, 5, 6, 8, 9],
            "Locrian b4 bb6 | Dominant 7 ( b9 #9 #11 ), Minor 7 ( b9 b11 #11 ) | { 1 b2 b3 b4 b5 bb6 b7 } < b >": [0, 1, 3, 4, 6, 7, 10]
        },
        "(272) (7-32) Harmonic Minor": {
            "Harmonic Minor, Aeolian nat7 | Minor Major 7 ( 9 11 b13 ) | { 1 2 b3 4 5 b6 7 } < b >": [0, 2, 3, 5, 7, 8, 11],
            "Locrian nat6 | Half-Diminished 7 ( b9 11 13 ) | { 1 b2 b3 4 b5 6 b7 } < c >": [0, 1, 3, 5, 6, 9, 10],
            "Ionian #5 | Augmented Major 7 ( 9 11 13) | { 1 2 3 4 #5 6 7 } < d >": [0, 2, 4, 5, 8, 9, 11],
            "Dorian #4 | Minor 7 ( 9 #11 13 ) | { 1 2 b3 #4 5 6 b7 } < e >": [0, 2, 3, 6, 7, 9, 10],
            "Phrygian nat3, Phrygian Dominant | Dominant 7 ( b9 11 b13 ) | { 1 b2 3 4 5 b6 b7 } < f >": [0, 1, 4, 5, 7, 8, 10],
            "Lydian #2 | Major 7 ( #9 #11 13 ) | { 1 #2 3 #4 5 6 7} < g >": [0, 3, 4, 6, 7, 9, 11],
            "Locrian b4 bb7 | Diminished 7 ( b9 b11 b13 ) | { 1 b2 b3 b4 b5 b6 bb7 } < a >": [0, 1, 3, 4, 6, 8, 9]
        },
        "(273) (7-32M) Harmonic Major": {
            "Harmonic Major, Ionian b6 | Major 7 ( 9 11 b13 ) | { 1 2 3 4 5 b6 7 } < b >": [0, 2, 4, 5, 7, 8, 11],
            "Dorian b5 | Half-Diminished 7 ( 9  11 13 ) | { 1 2 b3 4 b5 6 b7 } < c >": [0, 2, 3, 5, 6, 9, 10],
            "Phrygian b4 | Minor 7 ( b9 b11 b13 ), Dominant 7 ( b9 #9 b13 ) | { 1 b2 b3 b4 5 b6 b7 } < d >": [0, 1, 3, 4, 7, 8, 10],
            "Lydian b3 | Minor Major 7 ( 9 #11 13 ) | { 1 2 b3 #4 5 6 7 } < e >": [0, 2, 3, 6, 7, 9, 11],
            "Mixolydian b2 | Dominant 7 ( b9 11 13 ) | { 1 b2 3 4 5 6 b7 } < f >": [0, 1, 4, 5, 7, 9, 10],
            "Lydian augmented #2 | Augmented Major 7 ( #9 #11 13 ) | { 1 #2 3 #4 #5 6 7 } < g >": [0, 3, 4, 6, 8, 9, 11],
            "Locrian bb7 | Diminished 7 ( b9 11 b13 ) | {1 b2 b3 4 b5 b6 bb7} < a >": [0, 1, 3, 5, 6, 8, 9]
        },
        "(274) (7-33) Neapolitan Major": {
            "Neapolitan Major, Melodic Minor b2 | Minor Major 7 ( b9 11 13 ) | { 1 b2 b3 4 5 6 7 } < b >": [0, 1, 3, 5, 7, 9, 11],
            "Lydian #5 #6 | Augmented Major 7 ( 9 #11 #13 ) | { 1 2 3 #4 #5 #6 7 } < c >": [0, 2, 4, 6, 8, 10, 11],
            "Lydian Augmented b7 | Augmented 7 ( 9 #11 13 ) | { 1 2 3 #4 #5 6 b7 } < d >": [0, 2, 4, 6, 8, 9, 10],
            "Mixolydian #4 b6, Lydian b6 b7 | Dominant 7 ( 9 #11 b13 ) | { 1 2 3 #4 5 b6 b7 } < e >": [0, 2, 4, 6, 7, 8, 10],
            "Mixolydian b5 b6, Locrian nat2 nat3 | Dominant 7 b5 ( 9 11 b13 ) | { 1 2 3 4 b5 b6 b7 } < f >": [0, 2, 4, 5, 6, 8, 10],
            "Super Locrian nat2  | Augmented 7 ( 9 #9 #11 ) | { 1 2 b3 b4 b5 b6 b7 } < g >": [0, 2, 3, 4, 6, 8, 10],
            "Locrian bb3 b4 | Augmented 7 ( b9 9 #11 ) | { 1 b2 bb3 b4 b5 b6 b7 } < a >": [0, 1, 2, 4, 6, 8, 10]
        },
        "(275) (7-34) Melodic Minor": {
            "Melodic Minor, Ionian b3, Dorian nat7, Jazz Minor | Minor Major 7 ( 9 11 13 ) | { 1 2 b3 4 5 6 7 } < b >": [0, 2, 3, 5, 7, 9, 11],
            "Dorian b2, Phrygian nat6 | Minor 7 ( b9 11 13 ) | { 1 b2 b3 4 5 6 b7 } < c >": [0, 1, 3, 5, 7, 9, 10],
            "Lydian Augmented | Augmented Major 7 ( 9 #11 13 ) | { 1 2 3 #4 #5 6 7 } < d >": [0, 2, 4, 6, 8, 9, 11],
            "Lydian b7, Mixolydian #4, Overtone Scale | Dominant 7 ( 9 #11 13 ) | { 1 2 3 #4 5 6 b7 } < e >": [0, 2, 4, 6, 7, 9, 10],
            "Hindu, Mixolydian b6, Aeolian nat3 | Dominant 7 ( 9 11 b13 ) < f >": [0, 2, 4, 5, 7, 8, 10],
            "Locrian nat2, Aeolian b5 | Half-Diminished ( 9 11 b13 ) | { 1 2 b3 4 b5 b6 b7 } < g >": [0, 2, 3, 5, 6, 8, 10],
            "Super Locrian, Locrian b4, Altered Dominant | Half-Diminished ( b9 b11 b13), Dominant 7 (#5 b5 #9 b9), Altered | { 1 b2 b3 b4 b5 b6 b7 } < a >": [0, 1, 3, 4, 6, 8, 10]
        },
        "(276) (7-35) Major Scale": {
            "Major Scale, Ionian, Bilawal | Major 7 ( 9 11 13 ) | { 1 2 3 4 5 6 7 } < b >": [0, 2, 4, 5, 7, 9, 11],
            "Dorian, Kafi | Minor 7 ( 9 11 13 ) | { 1 2 b3 4 5 6 b7 } < c >": [0, 2, 3, 5, 7, 9, 10],
            "Phrygian, Bhairavi | Minor 7 ( b9 11 b13 ) | { 1 b2 b3 4 5 b6 b7 } < d >": [0, 1, 3, 5, 7, 8, 10],
            "Lydian, Kalyan | Major 7 ( 9 #11 13 ) | { 1 2 3 #4 5 6 7 }  < e >": [0, 2, 4, 6, 7, 9, 11],
            "Mixolydian, Khamaj | Dominant 7 ( 9 11 13 ) | { 1 2 3 4 5 6 b7 } < f >": [0, 2, 4, 5, 7, 9, 10],
            "Aeolian, Asavari | Minor 7 ( 9 11 b13 ) | { 1 2 b3 4 5 b6 b7 } < g >": [0, 2, 3, 5, 7, 8, 10],
            "Locrian | Half-Diminished ( b9 11 b13 ) | { 1 b2 b3 4 b5 b6 b7 } < a >": [0, 1, 3, 5, 6, 8, 10]
        },
        "(277) (7-12) Ionian no 6 add b2": {
            "Ionian no 6 add b2 | Major 7 ( b9 9 11 ) | { 1 b2 2 3 4 5 7 } < b >": [0, 1, 2, 4, 5, 7, 11],
            "Super Locrian no 6 add 7 | Major 7 b5 ( b9 #9 #13 ) | { 1 b2 b3 b4 b5 b7 7 } < c >": [0, 1, 3, 4, 6, 10, 11],
            "Dorian no 5 add 7, Melodic Minor no5 add b7 | Minor Major 7 no5 ( 9 11 13 #13) | { 1 2 b3 4 6 b7 7} < d >": [0, 2, 3, 5, 9, 10, 11],
            "Phrygian no 4 add 6 | Minor 7 ( b9 b13 13 ) | { 1 b2 b3 5 b6 6 b7 } < e >": [0, 1, 3, 7, 8, 9, 10],
            "Lydian no 3 add b6 | Major 7 sus 2 ( #11 b13 13 ) | { 1 2 #4 5 b6 6 7 } < f >": [0, 2, 6, 7, 8, 9, 11],
            "Mixolydian no2 add #4 | Dominant 7 ( 11 #11 13 ) | { 1 3 4 #4 5 6 b7 } < g >": [0, 4, 5, 6, 7, 9, 10],
            "Locrian Hexachord add 2 | Diminished ( b9 9 11 b13 ) | { 1 b2 2 b3 4 b5 b6 } < a >": [0, 1, 2, 3, 5, 6, 8]
        },
        "(278) (7-12M) Ionian no 5 add b3": {
            "Ionian no5 add b3, Melodic Minor no5 add 3 | Major 7 no5 ( 9 #9 11 13 ) | { 1 2 b3 3 4 6 7 } < c >": [0, 2, 3, 4, 5, 9, 11],
            "Dorian no 4 add b2 | Minor 7 ( b9 9 13 ) | { 1 b2 2 b3 5 6 b7 } < d >": [0, 1, 2, 3, 7, 9, 10],
            "Lydian Augmented no 3 add b2 | Augmented Major 7 sus2  ( b9 #11 13 ) | { 1 b2 2 b5 b6 6 7 } < e >": [0, 1, 2, 6, 8, 9, 11],
            "Phrygian no 3 add 7 | Major 7 sus4 (b9 b13 #13) | { 1 b2 4 5 b6 b7 7 } < f >": [0, 1, 5, 7, 8, 10, 11],
            "Lydian no 2 add b7 | Major 7 ( #11 13 #13 ) | { 1 3 #4 5 6 b7 7 } < g >": [0, 4, 6, 7, 9, 10, 11],
            "Aeolian Hexachord add #4 | Minor ( 9 11 #11 b13) | { 1 2 b3 4 #4 5 b6 } < a >": [0, 2, 3, 5, 6, 7, 8],
            "Locrian no6 add 3 | Dominant 7 b5 ( b9 #9 11 ) | { 1 b2 b3 3 4 b5 b7 } < b >": [0, 1, 3, 4, 5, 6, 10]
        },
        "(279) (7-17) Ionian no2 add b6": {
            "Ionian no 2 add b6 | Major 7 ( 11 b13 13 ) | { 1 3 4 5 b6 6 7 } < g >": [0, 4, 5, 7, 8, 9, 11],
            "Locrian Hexachord add 3 | Major ( b9 #9 11 b13 ) | { 1 b2 b3 3 4 5 b6 } < a >": [0, 1, 3, 4, 5, 7, 8],
            "Lydian no 6 add b3 | Major 7 ( 9 #9 #11 ) | { 1 2 b3 3 #4 5 7 } < b >": [0, 2, 3, 4, 6, 7, 11],
            "Mixolydian no 5 add b2 | Dominant 7 no 5( b9 9 11 13 ) | { 1 b2 2 3 4 6 b7 } < c >": [0, 1, 2, 4, 5, 9, 10],
            "Super Locrian Augmented | Augmented Major 7 ( b9 #9 13 ) | { 1 b2 b3 3 #5 6 7 } < d >": [0, 1, 3, 4, 8, 9, 11],
            "Aeolian no 4 add nat7 | Minor Major 7 ( 9 b13 #13 ) | { 1 2 b3 5 b6 b7 7 } < e >": [0, 2, 3, 7, 8, 10, 11],
            "Locrian no 3 add nat6 | Augmented 7 sus4 ( b9 #11 13 ) | { 1 b2 4 b5 b6 6 b7 } < f >": [0, 1, 5, 6, 8, 9, 10]
        },
        "(280) (7-Y18) Harmonic Major Hexachord add b2": {
            "Harmonic Major Hexachord add b2 | Major ( b9 9 11 b13 ) | { 1 b2 2 3 4 5 b6 } < a >": [0, 1, 2, 4, 5, 7, 8],
            "Locrian b4 bb6 nat7 | Major 7 ( b9 #9 #11 ) | { 1 b2 b3 3 #4 5 7 } < b >": [0, 1, 3, 4, 6, 7, 11],
            "Locrian no 6 add nat7 | Diminished Major 7 ( 9 11 #13 ) | { 1 2 b3 4 b5 b7 7 } < c >": [0, 2, 3, 5, 6, 10, 11],
            "Phrygian b4 #5 nat6 | Augmented 7 ( b9 #9 13 ) | { 1 b2 b3 3 #5 6 b7 } < d >": [0, 1, 3, 4, 8, 9, 10],
            "Harmonic Minor no 4 add nat6, Melodic Minor no 4 add b6 | Minor Major 7 ( 9 b13 13 ) | { 1 2 b3 5 b6 6 7 } < e >": [0, 2, 3, 7, 8, 9, 11],
            "Dorian b2 no3 add #4 | 7 sus4 ( b9 #11 13 )  | { 1 b2 4 #4 5 6 b7 } < f >": [0, 1, 5, 6, 7, 9, 10],
            "Lydian Augmented no 2 add 4 | Augmented Major 7 ( 11 #11 13 ) | { 1 3 4 b5 #5 6 7} < g >": [0, 4, 5, 6, 8, 9, 11]
        },
        "(281) (7-Y18M) Locrian b4 bb6 bbb7": {
            "Phrygian no 7 b4 #4 | Major ( b9 #9 #11 b13 ) | { 1 b2 b3 3 #4 5 b6 } < a >": [0, 1, 3, 4, 6, 7, 8],
            "Harmonic/Melodic Minor no6 add #4 | Minor Major 7 ( 9 11 #11 ) | { 1 2 b3 4 #4 5 7 } < b >": [0, 2, 3, 5, 6, 7, 11],
            "Dorian b2 no 5 add 3 | Dominant 7 no 5 ( b9 #9 11 13 ) | { 1 b2 b3 3 4 6 b7 } < c >": [0, 1, 3, 4, 5, 9, 10],
            "Ionian no4 #5 add b3 | Augmented Major 7 ( 9 #9 13 ) | { 1 2 b3 3 #5 6 7 } < d >": [0, 2, 3, 4, 8, 9, 11],
            "Lydian b7 no3 add b2 | 7 sus2 ( b9 #11 13 ) | { 1 b2 2 #4 5 6 b7 } < e >": [0, 1, 2, 6, 7, 9, 10],
            "Lydian b2 #3 #5 | Augmented Major 7 sus4 ( b9 #11 13 ) | { 1 b2 4 #4 #5 6 7 } < f >": [0, 1, 5, 6, 8, 9, 11],
            "Mixolydian b6 no 2 add nat7 | Major 7 ( 11 b13 #13 ) | { 1 3 4 5 b6 b7 7 } < g >": [0, 4, 5, 7, 8, 10, 11]
        },     
    },
    octads: {
        "(282) (8-1) Chromatic Octachord": {
            "Chromatic Octachord | Major (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 5 } < a >": [0, 1, 2, 3, 4, 5, 6, 7],
            " | Major 7 b5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 b5 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 11],
            " | Major 7 no 5 (b9 9 #9 11 #13) | { 1 b2 2 b3 3 4 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 10, 11],
            " | Major 7 no5 (b9 9 #9 13 #13) | { 1 b2 2 b3 3 4 6 b7 7 } < d >": [0, 1, 2, 3, 4, 9, 10, 11],
            " | Minor Major 7 #5 (b9 9 13 #13) | { 1 b2 2 b3 #5 6 b7 7 } < e >": [0, 1, 2, 3, 8, 9, 10, 11],
            " | Major 7 sus2 (b9 9 b13 13 #13) | { 1 b2 2 5 b6 6 b7 7 } < f >": [0, 1, 2, 7, 8, 9, 10, 11],
            " | Major 7 sus#4 (b9 b13 13 #13) | { 1 b2 #4 5 b6 6 b7 7 } < g >": [0, 1, 6, 7, 8, 9, 10, 11],
            " | Major 7 sus4 (#11 b13 13 #13) | { 1 4 #4 5 b6 6 b7 7 } < h >": [0, 5, 6, 7, 8, 9, 10, 11]
        },
        "(283) (8-2) Major 7 (b9 9 #9 11)": {
            " | Major 7 (b9 9 #9 11) | { 1 b2 2 b3 3 4 5 7 } < b >": [0, 1, 2, 3, 4, 5, 7, 11],
            " | Major 7 b5 (b9 9 #9 #13) | { 1 b2 2 b3 3 b5 b7 7 } < c >": [0, 1, 2, 3, 4, 6, 10, 11],
            " | Minor Major 7 no5 (b9 9 11 13 #13) | { 1 b2 2 b3 4 6 b7 7 } < d >": [0, 1, 2, 3, 5, 9, 10, 11],
            " | Augmented Major 7 (b9 9 13 #13) | { 1 b2 2 3 #5 6 b7 7 } < e >": [0, 1, 2, 4, 8, 9, 10, 11],
            " | Minor Major 7 (b9 b13 13 #13) | { 1 b2 b3 5 b6 6 b7 7 } < f >": [0, 1, 3, 7, 8, 9, 10, 11],
            " | Major 7 sus2 (#11 b13 13 #13) | { 1 2 #4 5 b6 6 b7 7 } < g >": [0, 2, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (11 #11 b13 13) | { 1 3 4 #4 5 b6 6 b7 } < h >": [0, 4, 5, 6, 7, 8, 9, 10],
            " | Augmented (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 #5 } < a >": [0, 1, 2, 3, 4, 5, 6, 8],
        },
        "(284) (8-2M) Major 7 (#11 b13 13 #13)": {
            " | Major 7 (#11 b13 13 #13) | { 1 3 #4 5 b6 6 b7 7 } < h >": [0, 4, 6, 7, 8, 9, 10, 11],
            " | Major (9 #9 11 #11 b13) | { 1 2 b3 3 4 #4 5 b6 } < a >": [0, 2, 3, 4, 5, 6, 7, 8],
            " | Dominant 7 b5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 b5 b7 } < b >": [0, 1, 2, 3, 4, 5, 6, 10],
            " | Major 7 no5 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 6 7 } < c >": [0, 1, 2, 3, 4, 5, 9, 11],
            " | Augmented Major 7 (b9 9 #9 #13) | { 1 b2 2 b3 3 #5 b7 7 } < d >": [0, 1, 2, 3, 4, 8, 10, 11],
            " | Minor Major 7 (b9 9 13 #13) | { 1 b2 2 b3 5 6 b7 7 } < e >": [0, 1, 2, 3, 7, 9, 10, 11],
            " | Augmented Major 7 sus #4 (b9 9 13 #13) | { 1 b2 2 #4 #5 6 b7 7 } < f >": [0, 1, 2, 6, 8, 9, 10, 11],
            " | Major 7 sus4 (b9 b13 13 #13) | { 1 b2 4 5 b6 6 b7 7 } < g >": [0, 1, 5, 7, 8, 9, 10, 11]
        },
        "(285) (8-3) Major 7 (b9 9 #9 #13)": {
            " | Major 7 (b9 9 #9 #13) | { 1 b2 2 b3 3 5 b7 7 } < c >": [0, 1, 2, 3, 4, 7, 10, 11],
            " | Diminished Major 7 (b9 9 13 #13) | { 1 b2 2 b3 b5 6 b7 7 } < d >": [0, 1, 2, 3, 6, 9, 10, 11],
            " | Augmented Major 7 sus4 (b9 9 13 #13) | { 1 b2 2 4 #5 6 b7 7 } < e >": [0, 1, 2, 5, 8, 9, 10, 11],
            " | Major 7 (b9 b13 13 #13) | { 1 b2 3 5 b6 6 b7 7 } < f >": [0, 1, 4, 7, 8, 9, 10, 11],
            " | Minor Major 7 (#11 b13 13 #13) | { 1 b3 #4 5 b6 6 b7 7 } < g >": [0, 3, 6, 7, 8, 9, 10, 11],
            " | Major 6 (#9 11 #11 b13) | { 1 b3 3 4 #4 5 b6 6 } < h >": [0, 3, 4, 5, 6, 7, 8, 9],
            " | Major 6 b5 (b9 9 #9 11) | { 1 b2 2 b3 3 4 b5 6 } < a >": [0, 1, 2, 3, 4, 5, 6, 9],
            " | Augmented Major 7 (b9 9 #9 11) | { 1 b2 2 b3 3 4 #5 7 } < b >": [0, 1, 2, 3, 4, 5, 8, 11]
        },
        "(286) (8-4) Major 7 (b9 9 #9 #11)": {
            " | Major 7 (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 5 7 } < b >": [0, 1, 2, 3, 4, 6, 7, 11],
            " | Diminished Major 7 (b9 9 11 #13) | { 1 b2 2 b3 4 b5 b7 7 } < c >": [0, 1, 2, 3, 5, 6, 10, 11],
            " | Major 7 no5 (b9 9 11 13 #13) | { 1 b2 2 3 4 6 b7 7 } < d >": [0, 1, 2, 4, 5, 9, 10, 11],
            " | Augmented Major 7 (b9 #9 13 #13) | { 1 b2 b3 3 #5 6 b7 7 } < e >": [0, 1, 3, 4, 8, 9, 10, 11],
            " | Minor Major 7 (9 b13 13 #13) | { 1 2 b3 5 b6 6 b7 7 } < f >": [0, 2, 3, 7, 8, 9, 10, 11],
            " | 7 sus4 (b9 #11 b13 13) | { 1 b2 4 #4 5 b6 6 b7 } < g >": [0, 1, 5, 6, 7, 8, 9, 10],
            " | Major 7 (11 #11 b13 13) | { 1 3 4 #4 5 b6 6 7 } < h >": [0, 4, 5, 6, 7, 8, 9, 11],
            "Minor Hexachord add (b2 nat 3) | Major (b9 9 #9 11 b13) | { 1 b2 2 b3 3 4 5 b6 } < a >": [0, 1, 2, 3, 4, 5, 7, 8]
        },
        "(287) (8-4M) Major 7 (9 #9 11 #11)": {
            " | Major 7 (9 #9 11 #11) | { 1 2 b3 3 4 #4 5 7 } < b >": [0, 2, 3, 4, 5, 6, 7, 11],
            " | Dominant 7 no5 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 6 b7 } < c >": [0, 1, 2, 3, 4, 5, 9, 10],
            " | Augmented Major 7 (b9 9 #9 13) | { 1 b2 2 b3 3 #5 6 7 } < d >": [0, 1, 2, 3, 4, 8, 9, 11],
            " | Minor Major 7 (b9 9 b13 #13) | { 1 b2 2 b3 5 b6 b7 7 } < e >": [0, 1, 2, 3, 7, 8, 10, 11],
            " | Major 7 sus#4 (b9 9 13 #13) | { 1 b2 2 #4 5 6 b7 7 } < f >": [0, 1, 2, 6, 7, 9, 10, 11],
            " | Augmented Major 7 sus4 (b9 #11 13 #13) | { 1 b2 4 #4 #5 6 b7 7 } < g >": [0, 1, 5, 6, 8, 9, 10, 11],
            " | Major 7 (11 b13 13 #13) | { 1 3 4 5 b6 6 b7 7 } < h >": [0, 4, 5, 7, 8, 9, 10, 11],
            "Phrygian Hexachord add (nat3 #4) | Major (b9 #9 11 #11 b13) | { 1 b2 b3 3 4 #4 5 b6 } < a >": [0, 1, 3, 4, 5, 6, 7, 8],
        },
        "(288) (8-5) Major 7 (11 #11 b13 13)": {
            " | Major 7 (11 #11 b13 #13) | { 1 3 4 #4 5 b6 b7 7 } < h >": [0, 4, 5, 6, 7, 8, 10, 11],
            "Lydian b6 Hexachord add (b2 b3) | Major (b9 9 #9 #11 b13) | { 1 b2 2 b3 3 #4 5 b6 } < a >": [0, 1, 2, 3, 4, 6, 7, 8],
            " | Minor Major 7 (b9 9 11 #11) | { 1 b2 2 b3 4 #4 5 7 } < b >": [0, 1, 2, 3, 5, 6, 7, 11],
            " | Major 7 b5 (b9 9 11 #13) | { 1 b2 2 3 4 b5 b7 7 } < c >": [0, 1, 2, 4, 5, 6, 10, 11],
            " | Major 7 no5 (b9 #9 11 13 #13) | { 1 b2 b3 3 4 6 b7 7 } < d >": [0, 1, 3, 4, 5, 9, 10, 11],
            " | Augmented Major 7 (9 #9 13 #13) | { 1 2 b3 3 #5 6 b7 7 } < e >": [0, 2, 3, 4, 8, 9, 10, 11],
            " | Dominant 7 sus#4 (b9 9 b13 13) | { 1 b2 2 #4 5 b6 6 b7 } < f >": [0, 1, 2, 6, 7, 8, 9, 10],
            " | Major 7 sus4 (b9 #11 b13 13) | { 1 b2 4 #4 5 b6 6 7 } < g >": [0, 1, 5, 6, 7, 8, 9, 11]
        },
        "(289) (8-5M) Major 7 (b9 #9 11 #11)": {
            " | Major 7 (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 5 7 } < b >": [0, 1, 3, 4, 5, 6, 7, 11],
            " | Major 7 b5 (9 #9 11 #13) | { 1 2 b3 3 4 b5 b7 7 } < c >": [0, 2, 3, 4, 5, 6, 10, 11],
            " | Augmented 7 (b9 9 #9 13) | { 1 b2 2 b3 3 #5 6 b7 } < d >": [0, 1, 2, 3, 4, 8, 9, 10],
            " | Minor Major 7 (b9 9 b13 13) | { 1 b2 2 b3 5 b6 6 7 } < e >": [0, 1, 2, 3, 7, 8, 9, 11],
            " | Major 7 sus#4 (b9 9 b13 #13) | { 1 b2 2 #4 5 b6 b7 7 } < f >": [0, 1, 2, 6, 7, 8, 10, 11],
            " | Major 7 sus4 (b9 #11 13 #13) | { 1 b2 4 #4 5  6 b7 7 } < g >": [0, 1, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (11 #11 13 #13) | { 1 3 4 #4 #5 6 b7 7 } < h >": [0, 4, 5, 6, 8, 9, 10, 11],
            "Phrygian Major Hexachord add (nat2 #4) | Major (b9 9 11 #11 b13) | { 1 b2 2 3 4 #4 5 b6 } < a >": [0, 1, 2, 4, 5, 6, 7, 8]
        },
        "(290) (8-6) Major 7 (b9 9 11 #11)": {
            " | Major 7 (b9 9 11 #11) | { 1 b2 2 3 4 #4 5 7 } < b >": [0, 1, 2, 4, 5, 6, 7, 11],
            " | Major 7 b5 (b9 #9 11 #13) | { 1 b2 b3 3 4 b5 b7 7 } < c >": [0, 1, 3, 4, 5, 6, 10, 11],
            " | Major 7 no5 (9 #9 11 13 #13) | { 1 2 b3 3 4 6 b7 7 } < d >": [0, 2, 3, 4, 5, 9, 10, 11],
            " | Minor 7 (b9 9 b13 13) | { 1 b2 2 b3 5 b6 6 b7 } < e >": [0, 1, 2, 3, 7, 8, 9, 10],
            " | Major 7 sus#4 (b9 9 b13 13) | { 1 b2 2 #4 5 b6 6 7 } < f >": [0, 1, 2, 6, 7, 8, 9, 11],
            " | Major 7 sus4 (b9 #11 b13 #13) | { 1 b2 4 #4 5 b6 b7 7 } < g >": [0, 1, 5, 6, 7, 8, 10, 11],
            " | Major 7 (11 #11 13 #13) | { 1 3 4 #4 5 6 b7 7 } < h >": [0, 4, 5, 6, 7, 9, 10, 11],
            "Phrygian Hexachord add (nat2 #4) | Minor (b9 9 11 #11 b13) | { 1 b2 2 b3 4 #4 5 b6 } < a >": [0, 1, 2, 3, 5, 6, 7, 8]
        },
        "(291) (8-7)  Major 7 (b9 9 #9 b13) ": {
            " | Major 7 (b9 9 #9 b13) | { 1 b2 2 b3 3 5 b6 7 } < b >": [0, 1, 2, 3, 4, 7, 8, 11],
            " | Minor Major 7 (b9 9 #11 #13) | { 1 b2 2 b3 #4 5 b7 7 } < c >": [0, 1, 2, 3, 6, 7, 10, 11],
            " | Diminished Major 7 sus4 (b9 9 13 #13) | { 1 b2 2 4 b5 6 b7 7 } < d >": [0, 1, 2, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (b9 11 13 #13) | { 1 b2 3 4 #5 6 b7 7 } < e >": [0, 1, 4, 5, 8, 9, 10, 11],
            " | Major 7 (#9 b13 13 #13) | { 1 b3 3 5 b6 6 b7 7 } < f >": [0, 3, 4, 7, 8, 9, 10, 11],
            " | Major 6 (b9 11 #11 b13) | { 1 b2 3 4 #4 5 b6 6 } < g >": [0, 1, 4, 5, 6, 7, 8, 9],
            " | Major 7 (#9 11 #11 b13) | { 1 b3 3 4 #4 5 b6 7 } < h >": [0, 3, 4, 5, 6, 7, 8, 11],
            " | Augmented (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 #5 6 } < a >": [0, 1, 2, 3, 4, 5, 8, 9]
        },
        "(292) (8-8) Major 7 (b9 11 #11 b13)": {
            "Double Harmonic add #4 | Major 7 (b9 11 #11 b13) | { 1 b2 3 4 #4 5 b6 7 } < g >": [0, 1, 4, 5, 6, 7, 8, 11],
            " | Major 7 (#9 11 #11 #13) | { 1 b3 3 4 #4 5 b7 7 } < h >": [0, 3, 4, 5, 6, 7, 10, 11],
            " | Major 6 (b9 9 #9 b13) | { 1 b2 2 b3 3 5 b6 6 } < a >": [0, 1, 2, 3, 4, 7, 8, 9],
            "Hungarian Minor add b2 | Minor Major 7 (b9 9 #11 b13) | { 1 b2 2 b3 #4 5 b6 7 } < b >": [0, 1, 2, 3, 6, 7, 8, 11],
            " | Major 7 sus4 (b9 9 #11 #13) | { 1 b2 2 #4 5 b7 7 } < c >": [0, 1, 2, 5, 6, 7, 10, 11],
            " | Major 7 b5 (b9 11 13 #13) | { 1 b2 3 4 b5 6 b7 7 } < d >": [0, 1, 4, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (#9 11 13 #13) | { 1 b3 3 4 #5 6 b7 7 } < e >": [0, 3, 4, 5, 8, 9, 10, 11],
            " | sus4 (b9 9 #11 b13 13) | { 1 b2 2 4 #4 5 b6 6 } < f >": [0, 1, 2, 5, 6, 7, 8, 9]
        },
        "(293) (8-9S) Major 7 (b9 11 #11 #13)": {
            " | Major 7 (b9 11 #11 #13) | { 1 b2 3 4 #4 5 b7 7 } < c >": [0, 1, 4, 5, 6, 7, 10, 11],
            " | Major 7 b5 (#9 11 13 #13) | { 1 b3 3 4 b5 6 b7 7 } < d >": [0, 3, 4, 5, 6, 9, 10, 11],
            " | Minor 6 (b9 9 #11 b13) | { 1 b2 2 b3 #4 5 b6 6 } < a >": [0, 1, 2, 3, 6, 7, 8, 9],
            "Messiaen Mode 4 | Major 7 sus4 (b9 9 #11 b13) | { 1 b2 2 4 #4 5 b6 7 } < b >": [0, 1, 2, 5, 6, 7, 8, 11]
        },
        "(294) (8-10) Major 7 (b9 9 13 #13)": {
            " | Major 7 (b9 9 13 #13) | { 1 b2 2 3 5 6 b7 7 } < e >": [0, 1, 2, 4, 7, 9, 10, 11],
            " | Diminished Major 7 (b9 b13 13 #13) | { 1 b2 b3 b5 b6 6 b7 7 } < f >": [0, 1, 3, 6, 8, 9, 10, 11],
            " | Major 7 sus4 (9 b13 13 #13) | { 1 2 4 5 b6 6 b7 7 } < g >": [0, 2, 5, 7, 8, 9, 10, 11],
            " | Minor 7 (11 #11 b13 13) | { 1 b3 4 #4 5 b6 6 b7 } < h >": [0, 3, 5, 6, 7, 8, 9, 10],
            "Major Hexachord add (b3 #4) | Major 6 (9 #9 11 #11) | { 1 2 b3 3 4 #4 5 6 } < a >": [0, 2, 3, 4, 5, 6, 7, 9],
            " | Dominant 7 (b9 9 #9 11) | { 1 b2 2 b3 3 4 5 b7 } < b >": [0, 1, 2, 3, 4, 5, 7, 10],
            " | Major 7 b5 (b9 9 #9 13) | { 1 b2 2 b3 3 b5 6 7 } < c >": [0, 1, 2, 3, 4, 6, 9, 11],
            " | Minor Major 7 #5 (b9 9 11 #13) | { 1 b2 2 b3 4 #5 b7 7 } < d >": [0, 1, 2, 3, 5, 8, 10, 11],
        },
        "(295) (8-11) Major 7 (9 b13 13 #13)": {
            " | Major 7 (9 b13 13 #13) | { 1 2 3 5 b6 6 b7 7 } < f >": [0, 2, 4, 7, 8, 9, 10, 11],
            " | 7 sus4 (9 #11 b13 13) | { 1 2 4 #4 5 b6 6 b7 } < g >": [0, 2, 5, 6, 7, 8, 9, 10],
            " | Dominant 7 (#9 11 #11 b13) | { 1 b3 3 4 #4 5 b6 b7 } < h >": [0, 3, 4, 5, 6, 7, 8, 10],
            "Major Hexachord add (b2 b3) | Major 6 (b9 9 #9 11) | { 1 b2 2 b3 3 4 5 6 } < a >": [0, 1, 2, 3, 4, 5, 7, 9],
            " | Augmented Major 7 (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 #5 7 } < b >": [0, 1, 2, 3, 4, 6, 8, 11],
            " | Minor Major 7 (b9 9 11 #13) | { 1 b2 2 b3 4 5 b7 7 } < c >": [0, 1, 2, 3, 5, 7, 10, 11],
            " | Major 7 b5 (b9 9 13 #13) | { 1 b2 2 3 b5 6 b7 7 } < d >": [0, 1, 2, 4, 6, 9, 10, 11],
            " | Minor Major 7 #5 (b9 11 13 #13) | { 1 b2 b3 4 #5 6 b7 7 } < e >": [0, 1, 3, 5, 8, 9, 10, 11]
        },
        "(296) (8-11M) Major 7 (b9 9 #9 13)": {
            " | Major 7 (b9 9 #9 13) | { 1 b2 2 b3 3 5 6 7 } < d >": [0, 1, 2, 3, 4, 7, 9, 11],
            " | Diminished Major 7 (b9 9 b13 #13) | { 1 b2 2 b3 b5 b6 b7 7 } < e >": [0, 1, 2, 3, 6, 8, 10, 11],
            " | Major 7 sus4 (b9 9 13 #13) | { 1 b2 2 4 5 6 b7 7 } < f >": [0, 1, 2, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 #11 13 #13) | { 1 b2 3 #4 #5 6 b7 7 } < g >": [0, 1, 4, 6, 8, 9, 10, 11],
            " | Minor Major 7 (11 b13 13 #13) | { 1 b3 4 5 b6 6 b7 7 } < h >": [0, 3, 5, 7, 8, 9, 10, 11],
            " | Major 6 (9 11 #11 b13) | { 1 2 3 4 #4 5 b6 6 } < a >": [0, 2, 4, 5, 6, 7, 8, 9],
            " | Dominant 7 (9 #9 11 #11) | { 1 2 b3 3 4 #4 5 b7 } < b >": [0, 2, 3, 4, 5, 6, 7, 10],
            " | Augmented 7 (b9 9 #9 11) | { 1 b2 2 b3 3 4 #5 b7 } < c >": [0, 1, 2, 3, 4, 5, 8, 10]
        },
        "(297) (8-12) Major 7 (b9 9 b13 #13)": {
            " | Major 7 (b9 9 b13 #13) | { 1 b2 2 3 5 b6 b7 7 } < e >": [0, 1, 2, 4, 7, 8, 10, 11],
            " | Minor Major 7 (b9 #11 13 #13) | { 1 b2 b3 #4 5 6 b7 7 } < f >": [0, 1, 3, 6, 7, 9, 10, 11],
            " | Diminished Major 7 sus4 (9 b13 13 #13) | { 1 2 4 b5 b6 6 b7 7 } < g >": [0, 2, 5, 6, 8, 9, 10, 11],
            " | Dominant 7 (#9 #11 b13 13) | { 1 b3 3 #4 5 b6 6 b7 } < h >": [0, 3, 4, 6, 7, 8, 9, 10],
            " | Major 6 (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 5 6 } < a >": [0, 1, 3, 4, 5, 6, 7, 9],
            " | Augmented Major 7 (9 #9 11 #11) | { 1 2 b3 3 4 #4 #5 7 } < b >": [0, 2, 3, 4, 5, 6, 8, 11],
            " | Half-Diminished (b9 9 #9 13) | { 1 b2 2 b3 3 b5 6 b7 } < c >": [0, 1, 2, 3, 4, 6, 9, 10],
            " | Minor Major 7 #5 (b9 9 11 13) | { 1 b2 2 b3 4 #5 6 7 } < d >": [0, 1, 2, 3, 5, 8, 9, 11]
        },
        "(298) (8-12M) Major 7 (b9 #9 13 #13)": {
            " | Major 7 (b9 #9 13 #13) | { 1 b2 b3 3 5 6 b7 7 } < e >": [0, 1, 3, 4, 7, 9, 10, 11],
            " | Diminished Major 7 (9 b13 13 #13) | { 1 2 b3 b5 b6 6 b7 7 } < f >": [0, 2, 3, 6, 8, 9, 10, 11],
            " | Dominant 7 (b9 #11 b13 13) | { 1 b2 3 #4 5 b6 6 b7 } < g >": [0, 1, 4, 6, 7, 8, 9, 10],
            " | Minor Major 7 (11 #11 b13 13 | { 1 b3 4 #4 5 b6 6 7 } < h >": [0, 3, 5, 6, 7, 8, 9, 11],
            " | Major 6 #5 (9 #9 11 #11) | { 1 2 b3 3 4 b5 b6 6 } < a >": [0, 2, 3, 4, 5, 6, 8, 9],
            " | Dominant 7 (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 5 b7 } < b >": [0, 1, 2, 3, 4, 6, 7, 10],
            " | Diminished Major 7 (b9 9 11 13) | { 1 b2 2 b3 4 b5 6 7 } < c >": [0, 1, 2, 3, 5, 6, 9, 11],
            " | Augmented Major 7 (b9 9 11 #13) | { 1 b2 2 3 4 #5 b7 7 } < d >": [0, 1, 2, 4, 5, 8, 10, 11]
        },
        "(299) (8-13) Major 7 (b9 9 11 #13)": {
            " | Major 7 (b9 9 11 #13) | { 1 b2 2 3 4 5 b7 7 } < c >": [0, 1, 2, 4, 5, 7, 10, 11],
            " | Major 7 b5 (b9 #9 13 #13) | { 1 b2 b3 3 b5 6 b7 7 } < d >": [0, 1, 3, 4, 6, 9, 10, 11],
            "Dorian #5 add nat7 | Minor Major 7 #5 (9 11 13 #13) | { 1 2 b3 4 #5 6 b7 7 } < e >": [0, 2, 3, 5, 8, 9, 10, 11],
            " | Minor 7 (b9 #11 b13 13) | { 1 b2 b3 #4 5 b6 6 b7 } < f >": [0, 1, 3, 6, 7, 8, 9, 10],
            " | Major 7 sus2 (11 #11 b13 13) | { 1 2 4 5 b6 6 7 } < g >": [0, 2, 5, 6, 7, 8, 9, 11],
            " | Dominant 7 (#9 11 #11 13) | { 1 b3 3 4 #4 5 6 b7 } < h >": [0, 3, 4, 5, 6, 7, 9, 10],
            " | Major 6 (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 5 6 } < a >": [0, 1, 2, 3, 4, 6, 7, 9],
            " | Diminished Major 7 (b9 9 11 b13) | { 1 b2 2 b3 4 b5 b6 7 } < b >": [0, 1, 2, 3, 5, 6, 8, 11]
        },
        "(300) (8-13M) Major 7 (b9 #11 13 #13)": {
            " | Major 7 (b9 #11 13 #13) | { 1 b2 3 #4 5 6 b7 7 } < g >": [0, 1, 4, 6, 7, 9, 10, 11],
            " | Diminished Major 7 (11 b13 13 #13) | { 1 b3 4 b5 b6 6 b7 7 } < h >": [0, 3, 5, 6, 8, 9, 10, 11],
            " | Minor 6 (9 11 #11 b13) | { 1 2 b3 4 #4 5 b6 6 } < a >": [0, 2, 3, 5, 6, 7, 8, 9],
            " | Dominant 7 (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 5 b7 } < b >": [0, 1, 3, 4, 5, 6, 7, 10],
            " | Major 7 b5 (9 #9 11 13) | { 1 2 b3 3 4 b5 6 7 } < c >": [0, 2, 3, 4, 5, 6, 9, 11],
            " | Dominant 7 (b9 9 #9 13) | { 1 b2 2 b3 3 5 6 b7 } < d >": [0, 1, 2, 3, 4, 7, 9, 10],
            " | Diminished Major 7 (b9 9 b13 13) | { 1 b2 2 b3 b5 b6 6 7 } < e >": [0, 1, 2, 3, 6, 8, 9, 11],
            " | Major 7 sus4 (b9 9 b13 #13) | { 1 b2 2 4 5 b6 b7 7 } < f >": [0, 1, 2, 5, 7, 8, 10, 11]
        },
        "(301) (8-14) Major 7 (b9 9 b13 13)": {
            " | Major 7 (b9 9 b13 13) | { 1 b2 2 3 5 b6 6 7 } < e >": [0, 1, 2, 4, 7, 8, 9, 11],
            " | Minor Major 7 (b9 #11 b13 #13) | { 1 b2 b3 #4 5 b6 b7 7 } < f >": [0, 1, 3, 6, 7, 8, 10, 11],
            " | Major 7 sus2 (11 #11 13 #13) | { 1 2 4 #4 5 6 b7 7 } < g >": [0, 2, 5, 6, 7, 9, 10, 11],
            " | Dominant 7 (#9 11 b13 13) | { 1 b3 3 4 5 b6 6 b7 } < h >": [0, 3, 4, 5, 7, 8, 9, 10],
            " | Major 6 (b9 9 11 #11) | { 1 b2 2 3 4 #4 5 6 } < a >": [0, 1, 2, 4, 5, 6, 7, 9],
            " | Augmented Major 7 (b9 #9 11 #11) | { 1 b2 b3 3 4 #4 #5 7 } < b >": [0, 1, 3, 4, 5, 6, 8, 11],
            " | Major 7 (9 #9 11 #13) | { 1 2 b3 3 4 5 b7 7 } < c >": [0, 2, 3, 4, 5, 7, 10, 11],
            " | Minor 7 #5 (b9 9 11 13) | { 1 b2 2 b3 4 #5 6 b7 } < d >": [0, 1, 2, 3, 5, 8, 9, 10]
        },
        "(302) (8-14M) Major 7 (9 #9 13 #13)": {
            " | Major 7 (9 #9 13 #13) | { 1 2 b3 3 5 6 b 7 7 } < e >": [0, 2, 3, 4, 7, 9, 10, 11],
            " | 7 sus4 (b9 9 b13 13) | { 1 b2 2 4 5 b6 6 b7 } < f >": [0, 1, 2, 5, 7, 8, 9, 10],
            " | Major 7 (b9 #11 b13 13) | { 1 b2 3 #4 5 b6 6 7 } < g >": [0, 1, 4, 6, 7, 8, 9, 11],
            " | Minor Major 7 (11 #11 b13 #13) | { 1 b3 4 #4 5 b6 b7 7 } < h >": [0, 3, 5, 6, 7, 8, 10, 11],
            " | Major 6 (9 #9 11 b13) | { 1 2 b3 3 4 5 b6 6 } < a >": [0, 2, 3, 4, 5, 7, 8, 9],
            " | Minor 7 (b9 9 11 #11) | { 1 b2 2 b3 4 #4 5 b7 } < b >": [0, 1, 2, 3, 5, 6, 7, 10],
            " | Major 7 b5 (b9 9 11 13) | { 1 b2 2 3 4 b5 6 7 } < c >": [0, 1, 2, 4, 5, 6, 9, 11],
            " | Augmented Major 7 (b9 #9 11 #13) | { 1 b2 b3 3 4 #5 b7 7 } < d >": [0, 1, 3, 4, 5, 8, 10, 11]
        },
        "(303) (8-X15) Harmonic Minor add b2": {
            "Harmonic Minor add b2 | Minor Major 7 (b9 9 11 b13) | { 1 b2 2 b3 4 5 b6 7 } < b >": [0, 1, 2, 3, 5, 7, 8, 11],
            "Lydian #6 add b2 | Major 7 (b9 9 #11 #13) | { 1 b2 2 3 #4 5 b7 7 } < c >": [0, 1, 2, 4, 6, 7, 10, 11],
            "Locrian nat6 add nat7 | Diminished Major 7 (b9 11 13 #13) | { 1 b2 b3 4 b5 6 b7 7 } < d >": [0, 1, 3, 5, 6, 9, 10, 11],
            "Ionian #5 add b7 | Augmented Major 7 (9 11 13 #13) | { 1 2 3 4 #5 6 b7 7 } < e >": [0, 2, 4, 5, 8, 9, 10, 11],
            "Aeolian #4 add nat6 | Minor 7 (9 #11 b13 13) | { 1 2 b3 #4 5 b6 6 b7 } < f >": [0, 2, 3, 6, 7, 8, 9, 10],
            "Phrygian Dominant add #4 | Dominant 7 (b9 11 #11 b13) | { 1 b2 3 4 #4 5 b6 b7 } < g >": [0, 1, 4, 5, 6, 7, 8, 10],
            "Ionian #2 add #4 | Major 7 (#9 11 #11 13) | { 1 b3 3 4 #4 5 6 7 } < h >": [0, 3, 4, 5, 6, 7, 9, 11],
            "Super Locrian bb7 add nat2 | Major 6 #5 (b9 9 #9 #11) | { 1 b2 2 b3 3 #4 #5 6 } < a >": [0, 1, 2, 3, 4, 6, 8, 9]
        },
        "(304) (8-X15M) Harmonic Major add #4": {
            "Harmonic Major add #4 | Major 7 (9 11 #11 b13) | { 1 2 3 #4 5 b6 7 } < b >": [0, 2, 4, 5, 6, 7, 8, 11],
            "Mixolydian b5 add b3 | Dominant 7 b5 (9 #9 11 13) | { 1 2 b3 3 4 b5 6 b7 } < c >": [0, 2, 3, 4, 5, 6, 9, 10],
            "Aeolian b4 add b2 | Dominant 7 (b9 9 #9 b13) | { 1 b2 2 b3 3 5 b6 b7 } < d >": [0, 1, 2, 3, 4, 7, 8, 10],
            "Lydian b3 add b2 | Minor Major 7 (b9 9 #11 13) | { 1 b2 2 b3 #4 5 6 7 } < e >": [0, 1, 2, 3, 6, 7, 9, 11],
            "Locrian bb3 add nat7 | Diminished Major 7 sus4 (b9 9 b13 #13) | { 1 b2 2 4 b5 b6 b7 7 } < f >": [0, 1, 2, 5, 6, 8, 10, 11],
            "Ionian b2 add b7 | Major 7 (b9 11 13 #13) | { 1 b2 3 4 5 6 b7 7 } < g >": [0, 1, 4, 5, 7, 9, 10, 11],
            "Lydian Augmented #2 add b7 | Augmented Major 7 (#9 #11 13 #13) | { 1 b3 3 #4 #5 6 b7 7 } < h >": [0, 3, 4, 6, 8, 9, 10, 11],
            "Phrygian bb7 add b5 | Minor 6 (b9 11 #11 b13 13) | { 1 b2 b3 4 #4 5 b6 6 } < a >": [0, 1, 3, 5, 6, 7, 8, 9]
        },        
        "(305) (8-16) Ionian b2 add #4": {
            "Ionian b2 add #4 | Major 7 (b9 11 #11 13) | { 1 b2 3 4 #4 5 6 7 } < g >": [0, 1, 4, 5, 6, 7, 9, 11],
            " | Augmented Major 7 (#9 11 #11 #13) | { 1 b3 3 4 #4 #5 b7 7 } < h >": [0, 3, 4, 5, 6, 8, 10, 11],
            "Aeolian bb7 add b2 | Minor 6 (b9 9 11 b13) | { 1 b2 2 b3 4 5 b6 6 } < a >": [0, 1, 2, 3, 5, 7, 8, 9],
            "Lydian b6 add b2 | Major 7 (b9 9 #11 b13) | { 1 b2 2 3 #4 5 b6 7 } < b >": [0, 1, 2, 4, 6, 7, 8, 11],
            " | Minor Major 7 (b9 11 #11 #13) | { 1 b2 b3 4 #4 5 b7 7 } < c >": [0, 1, 3, 5, 6, 7, 10, 11],
            "Ionian b5 add b7 | Major 7 b5 (9 11 13 #13) | { 1 2 3 4 b5 6 b7 7 } < d >": [0, 2, 4, 5, 6, 9, 10, 11],
            "Aeolian b4 add nat6 | Dominant 7 (9 #9 b13 13) | { 1 2 b3 3 5 b6 6 b7 } < e >": [0, 2, 3, 4, 7, 8, 9, 10],
            "Phrygian bb3 add b5 | 7 sus4 (b9 9 #11 b13 ) | { 1 b2 2 4 #4 5 b6 b7 } < f >": [0, 1, 2, 5, 6, 7, 8, 10]
        },
        "(306) (8-16M) Ionian #2 add b7": {
            "Ionian #2 add b7 | Major 7 (#9 11 13 #13) | { 1 b3 3 4 5 6 b7 7 } < h >": [0, 3, 4, 5, 7, 9, 10, 11],
            "Lydian Hexachord add b2 b6 | Major 6 (b9 9 #11 b13) | { 1 b2 2 3 #4 5 b6 6 } < a >": [0, 1, 2, 4, 6, 7, 8, 9],
            "Phrygian nat7 add #4 | Minor Major 7 (b9 11 #11 b13) | { 1 b2 b3 4 #4 5 b6 7 } < b >": [0, 1, 3, 5, 6, 7, 8, 11],
            "Ionian #6 add #4 | Major 7 (9 11 #11 #13) | { 1 2 3 4 #4 5 b7 7 } < c >": [0, 2, 4, 5, 6, 7, 10, 11],
            "Mixolydian #5 add b3 | Dominant 7 #5 (9 #9 11 13) | { 1 2 b3 3 4 #5 6 b7 } < d >": [0, 2, 3, 4, 5, 8, 9, 10],
            "Aeolian #4 add b2 | Minor 7 (b9 9 #11 b13) | { 1 b2 2 b3 #4 5 b6 b7 } < e >": [0, 1, 2, 3, 6, 7, 8, 10],
            "Lydian #3 add b2 | Major 7 sus4 (b9 9 #11 13) | { 1 b2 2 4 #4 5 6 7 } < f >": [0, 1, 2, 5, 6, 7, 9, 11],
            "Locrian nat3 add nat7 | Augmented Major 7 (b9 11 #11 #13) | { 1 b2 3 4 #4 #5 b7 7 } < g >": [0, 1, 4, 5, 6, 8, 10, 11]
        },
        "(307) (8-17) Harmonic Minor add nat3": {
            "Harmonic Minor add nat3 | Major 7 (9 #9 11 b13) | { 1 2 b3 3 4 5 b6 7 } < b >": [0, 2, 3, 4, 5, 7, 8, 11],
            "Dorian b5 add b2 | Half-Diminished 7 (b9 9 11 13) | { 1 b2 2 b3 4 b5 6 b7 } < c >": [0, 1, 2, 3, 5, 6, 9, 10],
            "Ionian #5 add b2 | Augmented Major 7 (b9 9 11 13) | { 1 b2 2 3 4 #5 6 7 } < d >": [0, 1, 2, 4, 5, 8, 9, 11],
            "Phrygian b4 add nat7 | Major 7 (b9 #9 b13 #13) | { 1 b2 b3 3 5 b6 b7 7 } < e >": [0, 1, 3, 4, 7, 8, 10, 11],
            "Lydian b3 add b7 | Minor Major 7 (9 #11 13 #13) | { 1 2 b3 #4 5 6 b7 7 } < f >": [0, 2, 3, 6, 7, 9, 10, 11],
            "Mixolydian b2 add b6 | Dominant 7 (b9 11 b13 13) | { 1 b2 3 4 5 b6 6 b7 } < g >": [0, 1, 4, 5, 7, 8, 9, 10],
            "Lydian #2 add b6 | Major 7 (#9 #11 b13 13) | { 1 b3 3 #4 5 b6 6 7 } < h >": [0, 3, 4, 6, 7, 8, 9, 11],
            "Locrian bb7 add nat3 | Major 6 #5 (b9 #9 11 #11) | { 1 b2 b3 3 4 b5 b6 6 } < a >": [0, 1, 3, 4, 5, 6, 8, 9]
        },
        "(308) (8-18) Harmonic Major add b2": {
            "Harmonic Major add b2 | Major 7 (b9 9 11 b13) | { 1 b2 2 3 4 5 b6 7 } < b >": [0, 1, 2, 4, 5, 7, 8, 11],
            "Lydian #2 #6 add b2 | Major 7 (b9 #9 #11 #13) | { 1 b2 b3 3 #4 5 b7 7 } < c >": [0, 1, 3, 4, 6, 7, 10, 11],
            "Dorian b5 add nat7 | Diminished Major 7 (9 11 13 #13) | { 1 2 b3 4 b5 6 b7 7 } < d >": [0, 2, 3, 5, 6, 9, 10, 11],
            "Phrygian b4 add nat6 | Dominant 7 (b9 #9 b13 13) | { 1 b2 b3 3 5 b6 6 b7 } < e >": [0, 1, 3, 4, 7, 8, 9, 10],
            "Melodic Minor #4 add b6 | Minor Major 7 (9 #11 b13 13) | { 1 2 b3 #4 5 b6 6 7 } < f >": [0, 2, 3, 6, 7, 8, 9, 11],
            "Mixolydian b2 add b5 | Dominant 7 (b9 11 #11 13) | { 1 b2 3 4 #4 5 6 b7 } < g >": [0, 1, 4, 5, 6, 7, 9, 10],
            "Ionian #2 #5 add #4 | Augmented Major 7 (#9 11 #11 13) | { 1 b3 3 4 #4 #5 6 7 } < h > ": [0, 3, 4, 5, 6, 8, 9, 11],
            "Locrian bb7 add nat2 | Diminished 7 (b9 9 11 b13) | { 1 b2 2 b3 4 b5 b6 6 } < a >": [0, 1, 2, 3, 5, 6, 8, 9]
        },
        "(309) (8-18M) Harmonic Minor add #4": {
            "Harmonic Minor add #4 | Minor Major 7 (9 11 #11 b13) | { 1 2 b3 4 #4 5 b6 7 } < b >": [0, 2, 3, 5, 6, 7, 8, 11],
            "Locrian nat6 add nat3 | Dominant 7 b5 (b9 #9 11 13) | { 1 b2 b3 3 4 b5 6 b7 } < c >": [0, 1, 3, 4, 5, 6, 9, 10],
            "Ionian #5 add b3 | Augmented Major 7 (9 #9 11 13) | { 1 2 b3 3 4 #5 6 7 } < d >": [0, 2, 3, 4, 5, 8, 9, 11],
            "Dorian #4 add b2 | Minor 7 (b9 9 #11 13) | { 1 b2 2 b3 #4 5 6 b7 } < e >": [0, 1, 2, 3, 6, 7, 9, 10],
            "Locrian bb3 bb7 add nat7 | Diminished Major 7 sus4 (b9 9 b13 13) | { 1 b2 2 4 b5 b6 6 7 } < f >": [0, 1, 2, 5, 6, 8, 9, 11],
            "Phrygian Dominant add nat7 | Major 7 (b9 11 b13 #13) | { 1 b2 3 4 5 b6 b7 7 } < g >": [0, 1, 4, 5, 7, 8, 10, 11],
            "Lydian #2 add b7 | Major 7 (#9 #11 13 #13) | { 1 b3 3 #4 5 6 b7 7 } < h >": [0, 3, 4, 6, 7, 9, 10, 11],
            "Phrygian b4 bb7 add #4 | Major 6 (b9 #9 #11 b13) | { 1 b2 b3 4 #4 5 b6 6 } < a >": [0, 1, 3, 4, 6, 7, 8, 9],
        },
        "(310) (8-19) Ionian #2 add b6": {
            "Locrian bb3 bb7 add nat3 | Major 6 b5 (b9 9 11 b13) | { 1 b2 2 3 4 b5 b6 6 } < a >": [0, 1, 2, 4, 5, 6, 8, 9],
            "Phrygian nat7 add nat3 | Major 7 (b9 #9 11 b13) | { 1 b2 b3 3 4 5 b6 7 } < b >": [0, 1, 3, 4, 5, 7, 8, 11],
            "Lydian #6 add b3 | Major 7 (9 #9 #11 #13) | { 1 2 b3 3 #4 5 b7 7 } < c >": [0, 2, 3, 4, 6, 7, 10, 11],
            "Mixolydian #5 add b2 | Augmented 7 (b9 9 11 13) | { 1 b2 2 3 4 #5 6 b7 } < d >": [0, 1, 2, 4, 5, 8, 9, 10],
            "Phrygian b4 bb7 add nat7 | Major 7 (b9 #9 b13 13) | { 1 b2 b3 3 5 b6 6 7 } < e >": [0, 1, 3, 4, 7, 8, 9, 11],
            "Aeolian #4 add nat7 | Minor Major 7 (9 #11 b13 #13) | { 1 2 b3 #4 5 b6 b7 7 } < f >": [0, 2, 3, 6, 7, 8, 10, 11],
            "Locrian nat3 add nat6 | Dominant 7 b5 (b9 11 b13 13) | { 1 b2 3 4 #4 #5 6 b7 } < g >": [0, 1, 4, 5, 6, 8, 9, 10],
            "Ionian #2 add b6 | Major 7 (#9 11 b13 13) | { 1 b3 3 4 5 b6 6 7 } < h >": [0, 3, 4, 5, 7, 8, 9, 11]
        },
        "(311) (8-19M) Ionian b2 add b6": {
            "Ionian b2 add b6 | Major 7 (b9 11 b13 13) | { 1 b2 3 4 5 b6 6 7 } < g >": [0, 1, 4, 5, 7, 8, 9, 11],
            "Lydian #2 b6 add b7 | Major 7 (#9 #11 b13 #13) | { 1 b3 3 #4 5 b6 6 7 } < h >": [0, 3, 4, 6, 7, 8, 10, 11],
            "Phrygian bb7 add nat3 | Major 6 (b9 #9 11 b13) | { 1 b2 b3 3 4 5 b6 6 } < a >": [0, 1, 3, 4, 5, 7, 8, 9],
            "Lydian b6 add b3 | Major 7 (9 #9 #11 b13) | { 1 2 b3 3 #4 5 b6 7 } < b >": [0, 2, 3, 4, 6, 7, 8, 11],
            "Mixolydian b5 add b2 | Dominant 7 b5 (b9 9 11 13) | { 1 b2 2 3 4 b5 6 b7 } < c >": [0, 1, 2, 4, 5, 6, 9, 10],
            "Ionian #2 #5 add b2 | Augmented Major 7 (b9 #9 11 13) | { 1 b2 b3 3 4 #5 6 7 } < d >": [0, 1, 3, 4, 5, 8, 9, 11],
            "Aeolian b4 add nat7 | Major 7 (9 #9 b13 #13) | { 1 2 b3 3 5 b6 b7 7 } < e >": [0, 2, 3, 4, 7, 8, 10, 11],
            "Locrian bb3 add nat6 | Half-Diminished sus4 (b9 9 b13 13) | { 1 b2 2 4 b5 b6 6 b7 } < f >": [0, 1, 2, 5, 6, 8, 9, 10]
        },
        "(312) (8-20) Ionian #2 b6 add #6": {
            "Ionian b6 bb7 add b2 | Major 6 (b9 9 11 b13) | { 1 b2 2 3 4 5 b6 6 } < a >": [0, 1, 2, 4, 5, 7, 8, 9],
            "Phrygian #4 nat7 add nat3 | Major 7 (b9 #9 #11 b13) | { 1 b2 b3 3 #4 5 b6 7 } < b >": [0, 1, 3, 4, 6, 7, 8, 11],
            "Melodic Minor #6 add #4 | Minor Major 7 (9 11 #11 #13) | { 1 2 b3 4 #4 6 b7 7 } < c >": [0, 2, 3, 5, 6, 7, 10, 11],
            "Mixolydian #2 #5 add b2 | Augmented 7 (b9 #9 11 13) | { 1 b2 b3 3 4 #5 6 b7 } < d >": [0, 1, 3, 4, 5, 8, 9, 10],
            "Aeolian b4 nat 7 add nat6 | Major 7 (9 #9 b13 13) | { 1 2 b3 3 5 b6 6 7 } < e >": [0, 2, 3, 4, 7, 8, 9, 11],
            "Dorian b2 bb3 add #4 | 7 sus4 (b9 9 #11 13) | { 1 b2 2 4 #4 5 6 b7 }  < f >": [0, 1, 2, 5, 6, 7, 9, 10],
            "Ionian b2 #5 add #4 | Augmented Major 7 (b9 11 #11 13) | { 1 b2 3 4 #4 #5 6 7 } < g >": [0, 1, 4, 5, 6, 8, 9, 11],
            "Ionian #2 b6 add #6 | Major 7 (#9 11 b13 #13) | { 1 b3 3 4 5 b6 b7 7 } < h >": [0, 3, 4, 5, 7, 8, 10, 11]
        },
        "(313) (8-21) Melodic Minor add b2": {
            "Locrian b4 add nat2 | Augmented 7 (b9 9 #9 #11) | { 1 b2 2 b3 3 b5 b6 b7 } < a >": [0, 1, 2, 3, 4, 6, 8, 10],
            "Melodic Minor add b2 | Minor Major 7 (b9 9 11 13) | { 1 b2 2 b3 4 5 6 7 } < b >": [0, 1, 2, 3, 5, 7, 9, 11],
            "Locrian bb3 b4 add nat 7 | Augmented Major 7 (b9 9 #11 #13) | { 1 b2 2 3 #4 #5 b7 7 } < c >": [0, 1, 2, 4, 6, 8, 10, 11],
            "Dorian b2 add nat7 | Minor Major 7 (b9 11 13 #13) | { 1 b2 b3 4 5 6 b7 7 } < d >": [0, 1, 3, 5, 7, 9, 10, 11],
            "Lydian #5 add b7 | Augmented Major 7 (9 #11 13 #13) | { 1 2 3 #4 #5 } < e >": [0, 2, 4, 6, 8, 9, 10, 11],
            "Lydian b7 add b6 | Dominant 7 (9 #11 b13 13) | { 1 2 3 #4 5 b6 6 b7 } < f >": [0, 2, 4, 6, 7, 8, 9, 10],
            "Mixolydian b6 add #4 | Dominant 7 (9 11 #11 b13) | { 1 2 3 4 #4 5 b6 b7 } < g >": [0, 2, 4, 5, 6, 7, 8, 10],
            "Locrian nat2 add nat3 | Augmented 7 (9 #9 11 #11) | { 1 2 b3 3 4 b5 b6 b7 } < h >": [0, 2, 3, 4, 5, 6, 8, 10]
        },
        "(314) (8-22) Ionian add b2": {
            "Ionian add b2 | Major 7 (b9 9 11 13) | { 1 b2 2 3 4 5 6 7 } < b >": [0, 1, 2, 4, 5, 7, 9, 11],
            "Super Locrian add nat 7 | Augmented Major 7 (b9 #9 #11 #13) | { 1 b2 b3 3 b5 b6 b7 7 } < c >": [0, 1, 3, 4, 6, 8, 10, 11],
            "Bebop Dorian, Dorian add nat7 | Minor Major 7 (9 11 13 #13) | { 1 2 b3 4 5 6 b7 7 } < d >": [0, 2, 3, 5, 7, 9, 10, 11],
            "Phrygian add nat6 | Minor 7 (b9 11 b13 13) | { 1 b2 b3 4 5 b6 6 b7 } < e >": [0, 1, 3, 5, 7, 8, 9, 10],
            "Lydian add b6 | Major 7 (9 #11 b13 13) | { 1 2 3 #4 5 b6 6 7 } < f >": [0, 2, 4, 6, 7, 8, 9, 11],
            "Mixolydian add #4 | Dominant 7 (9 11 #11 13) | { 1 2 3 4 #4 5 6 b7 } < g >": [0, 2, 4, 5, 6, 7, 9, 10],
            "Aeolian add nat3 | Dominant 7 (9 #9 11 b13) | { 1 2 b3 3 4 5 b6 b7 } < h >": [0, 2, 3, 4, 5, 7, 8, 10],
            "Locrian add nat2 | Half-Diminished 7 (b9 9 11 b13) | { 1 b2 2 b3 4 b5 b6 b7 } < a >": [0, 1, 2, 3, 5, 6, 8, 10]
        },
        "(315) (8-22M) Ionian add b3": {
            "Ionian add b3 | Major 7 (9 #9 11 13) | { 1 2 b3 3 4 5 6 7 } < b >": [0, 2, 3, 4, 5, 7, 9, 11],
            "Dorian add b2 | Minor 7 (b9 9 11 13) | { 1 b2 2 b3 4 5 6 b7 } < c >": [0, 1, 2, 3, 5, 7, 9, 10],
            "Lydian #5 add b2 | Augmented Major 7 (b9 9 #11 13) | { 1 b2 2 3 #4 #5 6 7 } < d >": [0, 1, 2, 4, 6, 8, 9, 11],
            "Phrygian add nat7 | Minor Major 7 (b9 11 b13 #13) | { 1 b2 b3 4 5 b6 b7 7 } < e >": [0, 1, 3, 5, 7, 8, 10, 11],
            "Lydian add b7 | Major 7 (9 #11 13 #13) | { 1 2 3 #4 5 6 b7 7 } < f >": [0, 2, 4, 6, 7, 9, 10, 11],
            "Mixolydian add b6 | Dominant 7 (9 11 b13 13) | { 1 2 3 4 5 b6 6 b7 } < g >": [0, 2, 4, 5, 7, 8, 9, 10],
            "Aeolian add #4 | Minor 7 (9 11 #11 b13) | { 1 2 b3 4 #4 5 b6 b7 } < h >": [0, 2, 3, 5, 6, 7, 8, 10],
            "Locrian add nat3 | Dominant 7 b5 (b9 #9 b13) | { 1 b2 b3 3 4 b5 b6 b7 } < a >": [0, 1, 3, 4, 5, 6, 8, 10]
        },
        "(316) (8-23) Ionian add #4": {
            "Ionian add #4 | Major 7 (9 11 #11 13) | { 1 2 3 4 #4 5 6 7 } < g >": [0, 2, 4, 5, 6, 7, 9, 11],
            "Mixolydian add b3 | Dominant 7 (9 #9 11 13) | { 1 2 b3 3 4 5 6 b7 } < h >": [0, 2, 3, 4, 5, 7, 9, 10],
            "Aeolian add b2 | Minor 7 (b9 9 11 b13) | { 1 b2 2 b3 4 5 b6 b7 } < a >": [0, 1, 2, 3, 5, 7, 8, 10],
            "Lydian add b2 | Major 7 (b9 9 #11) | { 1 b2 2 3 #4 5 6 7 } < b >": [0, 1, 2, 4, 6, 7, 9, 11],
            "Locrian add nat7 | Diminished Major 7 (b9 11 b13 #13) | { 1 b2 b3 4 b5 b6 b7 7 } < c >": [0, 1, 3, 5, 6, 8, 10, 11],
            "Bebop Dominant, Ionian add b7 | Major 7 (9 11 13 #13) | { 1 2 3 4 5 6 b7 7 } < d >": [0, 2, 4, 5, 7, 9, 10, 11],
            "Bebop Minor, Aeolian add nat6 | Minor 7 (9 11 b13 13) | { 1 2 b3 4 5 b6 6 b7 } < e >": [0, 2, 3, 5, 7, 8, 9, 10],
            "Bebop Locrian add5, Phrygian add #4 | Minor 7 (b9 11 #11 b13) | { 1 b2 b3 4 #4 5 b6 b7 }  < f >": [0, 1, 3, 5, 6, 7, 8, 10]
        },
        "(317) (8-24) Ionian b2 add b3": {
            "Ionian b2 add b3 | Major 7 (b9 #9 11 13) | { 1 b2 b3 3 4 5 6 7 } < b >": [0, 1, 3, 4, 5, 7, 9, 11],
            "Locrian nat2 b4 add nat7 | Augmented Major 7 (9 #9 #11 #13) | { 1 2 b3 3 #4 #5 b7 7 } < c >": [0, 2, 3, 4, 6, 8, 10, 11],
            "Lydian #5 b7 add b2 | Augmented 7 (b9 9 #11 13) | { 1 b2 2 3 #4 #5 6 b7 } < d >": [0, 1, 2, 4, 6, 8, 9, 10],
            "Phrygian bb7 add nat7 | Minor Major 7 (b9 11 b13 13) < e >": [0, 1, 3, 5, 7, 8, 9, 11],
            "Lydian b6 add b7 | Major 7 (9 #11 b13 #13) | { 1 2 3 #4 5 b6 b7 7 } < f >": [0, 2, 4, 6, 7, 8, 10, 11],
            "Mixolydian b5 add #5 | Augmented 7 (9 11 #11 13) | { 1 2 3 4 #4 #5 6 b7 } < g >": [0, 2, 4, 5, 6, 8, 9, 10],
            "Aeolian b4 add #4 | Dominant 7 (9 #9 #11 b13) | { 1 2 b3 3 #4 5 b6 b7 } < h >": [0, 2, 3, 4, 6, 7, 8, 10],
            "Locrian nat3 add nat2 | Dominant 7 b5 (b9 9 11 b13) | { 1 b2 2 3 4 b5 b6 b7 } < a >": [0, 1, 2, 4, 5, 6, 8, 10],
        },
        "(318) (8-25S) Lydian b6 b7 add b2": {
            "Lydian b6 b7 add b2 | Dominant 7 (b9 9 #11 b13) | { 1 b2 2 3 #4 5 b6 b7 } < a >": [0, 1, 2, 4, 6, 7, 8, 10],
            "Phrygian nat6 nat7 add #4 | Minor Major 7 (b9 11 #11 13) | { 1 b2 b3 4 #4 5 6 7 }  < b >": [0, 1, 3, 5, 6, 7, 9, 11],
            "Messiaen Mode 6, Locrian nat 2 nat3 add nat7 | Major 7 b5 (9 11 b13 #13) | { 1 2 3 4 #4 #5 b7 7 } < c >": [0, 2, 4, 5, 6, 8, 10, 11],
            "Lydian #5 b7 add b3 | Augmented 7 (9 #9 #11 13) | { 1 2 b3 3 #4 #5 6 b7 } < d >": [0, 2, 3, 4, 6, 8, 9, 10]
        },
        "(319) (8-26) Ionian add b6": {
            "Mixolydian add b2 | Dominant 7 (b9 9 11 13) | { 1 b2 2 3 4 5 6 b7 } < c >": [0, 1, 2, 4, 5, 7, 9, 10],
            "Lydian #2 #5 add b2 | Augmented Major 7 (b9 #9 #11 13) | { 1 b2 b3 3 #4 #5 6 7 } < d >": [0, 1, 3, 4, 6, 8, 9, 11],
            "Aeolian add nat7 | Minor Major 7 (9 11 b13 #13) | { 1 2 b3 4 5 b6 b7 7 } < e >": [0, 2, 3, 5, 7, 8, 10, 11],
            "Locrian add nat6 | Half-Diminished 7 (b9 11 b13 13) | { 1 b2 b3 4 b5 b6 6 b7 } < f >": [0, 1, 3, 5, 6, 8, 9, 10],
            "Bebop Major, Ionian add b6 | Major 7 (9 11 b13 13) | { 1 2 3 4 5 b6 6 7 } < g >": [0, 2, 4, 5, 7, 8, 9, 11],
            "Dorian add #4 | Minor 7 (9 11 #11 13) | { 1 2 b3 4 #4 5 6 b7 } < h >": [0, 2, 3, 5, 6, 7, 9, 10],
            "Spanish Phrygian, Phrygian add nat3 | Dominant 7 (b9 #9 b13) | { 1 b2 b3 3 4 5 b6 b7 } < a >": [0, 1, 3, 4, 5, 7, 8, 10],
            "Lydian add b3 | Major 7 (9 #9 #11 13) | { 1 2 b3 3 #4 5 6 7 } < b >": [0, 2, 3, 4, 6, 7, 9, 11]
        },
        "(320) (8-27) Aeolian nat7 add nat6": {
            "Aeolian nat7 add nat6 | Minor Major 7 (9 11 b13 13) | { 1 2 b3 4 5 b6 6 7 } < e >": [0, 2, 3, 5, 7, 8, 9, 11],
            "Dorian b2 add #4 | Minor 7 (b9 11 #11 13) | { 1 b2 b3 4 #4 5 6 b7 } < f >": [0, 1, 3, 5, 6, 7, 9, 10],
            "Ionian b5 add #5 | Augmented Major 7 (9 11 #11 13) | { 1 2 3 4 #4 #5 6 7 } < g >": [0, 2, 4, 5, 6, 8, 9, 11],
            "Dorian b4 add #4, Lydian b7 add b3 | Dominant 7 (9 #9 #11 13) | { 1 2 b3 3 #4 5 6 b7 } < h >": [0, 2, 3, 4, 6, 7, 9, 10],
            "Mixolydian b6 add b2, Phrygian Dominant add nat2 | Dominant 7 (b9 9 11 b13) | { 1 b2 2 3 4 5 b6 b7 } < a >": [0, 1, 2, 4, 5, 7, 8, 10],
            "Lydian #2 add b2 | Major 7 (b9 #9 #11 13) | { 1 b2 b3 3 #4 5 6 7 } < b >": [0, 1, 3, 4, 6, 7, 9, 11],
            "Locrian nat 2 add nat7, Bebop Locrian nat2 | Diminished Major 7 (9 11 b13 #13) | { 1 2 b3 4 b5 b6 b7 7 } < c >": [0, 2, 3, 5, 6, 8, 10, 11],
            "Locrian b4 add nat6 | Augmented 7 (b9 #9 #11 13) | { 1 b2 b3 3 #4 #5 6 b7 } < d >": [0, 1, 3, 4, 6, 8, 9, 10]
        },
        "(321) (8-27M) Melodic Minor add #4": {
            "Melodic Minor add #4 | Minor Major 7 (9 11 #11 13) | { 1 2 b3 4 #4 5 6 7 } < h >": [0, 2, 3, 5, 6, 7, 9, 11],
            "Mixolydian b2 add b3 | Dominant 7 (b9 #9 11 13) | { 1 b2 b3 3 4 5 6 b7 } < a >": [0, 1, 3, 4, 5, 7, 9, 10],
            "Lydian #5 add b3 | Augmented Major 7 (9 #9 #11 13) | { 1 2 b3 3 #4 #5 6 7 } < b >": [0, 2, 3, 4, 6, 8, 9, 11],
            "Lydian b7 add b2 | Dominant 7 (b9 9 #11 13) | { 1 b2 2 3 #4 5 6 b7 } < c >": [0, 1, 2, 4, 6, 7, 9, 10],
            "Locrian bb7 add nat7 | Diminished Major 7 (b9 11 b13 13) | { 1 b2 b3 4 b5 b6 6 7 } < d >": [0, 1, 3, 5, 6, 8, 9, 11],
            "Ionian b6 add b7 | Major 7 (9 11 b13 #13) | { 1 2 3 4 5 b6 b7 7 } < e >": [0, 2, 4, 5, 7, 8, 10, 11],
            "Dorian b5 add #5 | Half-Diminished 7 (9 11 b13 13) | { 1 2 b3 4 b5 b6 6 b7 }  < f >": [0, 2, 3, 5, 6, 8, 9, 10],
            "Phrygian b4 add #4 | Dominant 7 (b9 #9 #11 b13) | { 1 b2 b3 3 #4 5 b6 b7 } < g >": [0, 1, 3, 4, 6, 7, 8, 10],
        },
        "(322) (8-28S) Half-Whole Diminished Scale": {
            "Half-Whole Diminished Scale, Messiaen Mode 2 | Dominant 7 (b9 #9 #11 13) | { 1 b2 b3 3 #4 5 6 b7 } < a >": [0, 1, 3, 4, 6, 7, 9, 10],
            "Whole-Half Diminished Scale | Diminished Major 7 (9 11 b13 13) | { 1 2 b3 4 b5 b6 6 7 } < b >": [0, 2, 3, 5, 6, 8, 9, 11]
        },
        "(323) (8-Y15) ": {
            " | Minor 6 (b9 9 11 #11) | { 1 b2 2 b3 4 #4 5 6 } < a >": [0, 1, 2, 3, 5, 6, 7, 9],
            "Locrian nat3 nat7 add nat2 | Major 7 b5 (b9 9 11 b13) | { 1 b2 2 3 4 b5 b6 7 }  < b >": [0, 1, 2, 4, 5, 6, 8, 11],
            "Ionian #2 #6 add b2 | Major 7 (b9 #9 11 #13) | { 1 b2 b3 3 4 5 b7 7 } < c >": [0, 1, 3, 4, 5, 7, 10, 11],
            " | Major 7 b5 (9 #9 13 #13) | { 1 2 b3 3 b5 6 b7 7 } < d >": [0, 2, 3, 4, 6, 9, 10, 11],
            " | Dominant 7 (b9 9 b13 13) | { 1 b2 2 3 5 b6 6 b7 } < e >": [0, 1, 2, 4, 7, 8, 9, 10],
            " | Minor Major 7 (b9 #11 b13 13) | { 1 b2 b3 #4 5 b6 6 7 } < f >": [0, 1, 3, 6, 7, 8, 9, 11],
            " | Major 7 sus2 (11 #11 b13 #13) | { 1 2 4 #4 5 b6 b7 7 } < g >": [0, 2, 5, 6, 7, 8, 10, 11],
            " | Augmented 7 (#9 11 #11 13)  < h >": [0, 3, 4, 5, 6, 8, 9, 10]
        },
        "(324) (8-Y15M) Major 7 (b9 #11 b13 #13)": {
            "Lydian Hexachord add (b3 b6) | Major 6 (9 #9 #11 b13) | { 1 2 b3  3 #4 5 b6 6 } < a >": [0, 2, 3, 4, 6, 7, 8, 9],
            " | Dominant 7 (b9 9 11 #11) | { 1 b2 2 3 4 #4 5 b7 } < b >": [0, 1, 2, 4, 5, 6, 7, 10],
            " | Major 7 b5 (b9 #9 11 #11 13) | { 1 b2 b3 3 4 b5 6 7 } < c >": [0, 1, 3, 4, 5, 6, 9, 11],
            " | Augmented Major 7 (9 #9 11 #13) | { 1 2 b3 3 4 #5 b7 7 } < d >": [0, 2, 3, 4, 5, 8, 10, 11],
            " | Half-Diminished 7 (b9 9 b13 13) | { 1 b2 2 b3 b5 b6 6 b7 } < e >": [0, 1, 2, 3, 6, 8, 9, 10],
            " | Major 7 sus4 (b9 9 b13 13) | { 1 b2 2 4 5 b6 6 7 } < f >": [0, 1, 2, 5, 7, 8, 9, 11],
            " | Major 7 (b9 #11 b13 #13) | { 1 b2 3 #4 5 b6 b7 7 } < g >": [0, 1, 4, 6, 7, 8, 10, 11],
            " | Minor Major 7 (11 #11 13 #13) | { 1 b3 4 #4 5 6 b7 7 } < h >": [0, 3, 5, 6, 7, 9, 10, 11]
        }
    },
    nonads: {
        "(325) (9-1) Chromatic Nonachord": {
            "Chromatic Nonachord | Major (b9 9 #9) | { 1 b2 2 b3 3 4 #4 5 b6 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 8],
            " | Major 7 (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 5 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 7, 11],
            " | Major 7 b5 (b9 9 #9 11 #13) | { 1 b2 2 b3 3 4 b5 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 6, 10, 11],
            " | Major 7 no5 (b9 9 #9 11 13 #13) | { 1 b2 b3 3 4 6 b7 7 } < d >": [0, 1, 2, 3, 4, 5, 9, 10, 11],
            " | Augmented Major 7 (b9 9 #9 13 #13) | { 1 b2 2 b3 3 #5 6 b7 7 } < e >": [0, 1, 2, 3, 4, 8, 9, 10, 11],
            " | Minor Major 7 (b9 9 b13 13 #13) | { 1 b2 2 b3 5 b6 6 b7 7 } < f >": [0, 1, 2, 3, 7, 8, 9, 10, 11],
            " | Major 7 sus #4 (b9 9 b13 13 #13) | { 1 b2 2 #4 5 b6 6 b7 7 } < g >": [0, 1, 2, 6, 7, 8, 9, 10, 11],
            " | Major 7 sus b2 (11 #11 b13 13 #13) | { 1 b2 4 #4 5 b6 6 b7 7 } < h >": [0, 1, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (11 #11 b13 13 #13) | { 1 3 4 #4 5 b6 6 b7 7 } < i >": [0, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        "(326) (9-2) Major 7 (b9 9 #9 11 #13)": {
            " | Major 7 (b9 9 #9 11 #13) | { 1 b2 2 b3 3 4 5 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 7, 10, 11],
            " | Major 7 b5 (b9 9 #9 13 #13) | { 1 b2 2 b3 3 b5 6 b7 7 } < d >": [0, 1, 2, 3, 4, 6, 9, 10, 11],
            " | Minor Major 7 #5 (b9 9 11 13 #13) | { 1 b2 2 b3 4 #5 6 b7 7 } < e >": [0, 1, 2, 3, 5, 8, 9, 10, 11],
            " | Major 7 (b9 9 b13 13 #13) | { 1 b2 2 3 5 b6 6 b7 7 } < f >": [0, 1, 2, 4, 7, 8, 9, 10, 11],
            " | Minor Major 7 (b9 #11 b13 13 #13) | { 1 b2 b3 #4 5 b6 6 b7 7 } < g >": [0, 1, 3, 6, 7, 8, 9, 10, 11],
            " | Major 7 sus2 (11 #11 b13 13 #13) | { 1 2 4 #4 5 b6 6 b7 7 } < h >": [0, 2, 5, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (#9 11 #11 b13 13) | { 1 b3 3 4 #4 5 b6 6 b7 } < i >": [0, 3, 4, 5, 6, 7, 8, 9, 10],
            " | Major 6 (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 5 6 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 9],
            " | Augmented Major 7 (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 #5 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 8, 11]
        },
        "(327) (9-2M) Major 7 (b9 9 #9 13 #13)": {
            " | Major 7 (b9 9 #9 13 #13) | { 1 b2 2 b3 3 5 6 b7 7 } < e >": [0, 1, 2, 3, 4, 7, 9, 10, 11],
            " | Diminished Major 7 (b9 9 b13 13 #13) | { 1 b2 2 b3 b5 b6 6 b7 7 } < f >": [0, 1, 2, 3, 6, 8, 9, 10, 11],
            " | Major 7 sus4 (b9 9 b13 13 #13) | { 1 b2 2 4 5 b6 6 b7 7 } < g >": [0, 1, 2, 5, 7, 8, 9, 10, 11],
            " | Major 7 (b9 #11 b13 13 #13) | { 1 b2 3 #4 5 b6 6 b7 7 } < h >": [0, 1, 4, 6, 7, 8, 9, 10, 11],
            " | Minor Major 7 (11 #11 b13 13 #13) | { 1 b3 4 #4 5 b6 6 b7 7 } < i >": [0, 3, 5, 6, 7, 8, 9, 10, 11],
            " | Major 6 (9 #9 11 #11 b13) | { 1 2 b3 3 4 #4 5 b6 6 } < a >": [0, 2, 3, 4, 5, 6, 7, 8, 9],
            " | Dominant 7 (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 5 b7 } < b >": [0, 1, 2, 3, 4, 5, 6, 7, 10],
            " | Major 7 b5 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 b5 6 7 } < c >": [0, 1, 2, 3, 4, 5, 6, 9, 11],
            " | Augmented Major 7 (b9 9 #9 11 #13) | { 1 b2 2 b3 3 4 #5 b7 7 } < d >": [0, 1, 2, 3, 4, 5, 8, 10, 11]
        },
        "(328) (9-3) Major 7 (b9 9 #9 11 b13)": {
            " | Major 7 (b9 9 #9 11 b13) | { 1 b2 2 b3 3 4 5 b6 7 } < b >": [0, 1, 2, 3, 4, 5, 7, 8, 11],
            " | Major 7 (b9 9 #9 #11 #13) | { 1 b2 2 b3 3 #4 5 b7 7 } < c >": [0, 1, 2, 3, 4, 6, 7, 10, 11],
            " | Diminished Major 7 (b9 9 11 13 #13) | { 1 b2 2 b3 4 b5 6 b7 7 } < d >": [0, 1, 2, 3, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (b9 9 11 13 #13) | { 1 b2 2 3 4 #5 6 b7 7 } < e >": [0, 1, 2, 4, 5, 8, 9, 10, 11],
            " | Major 7 (b9 #9 b13 13 #13) | { 1 b2 b3 3 5 b6 6 b7 7 } < f >": [0, 1, 3, 4, 7, 8, 9, 10, 11],
            " | Minor Major 7 (9 #11 b13 13 #13) | { 1 2 b3 #4 5 b6 6 b7 7 } < g >": [0, 2, 3, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (b9 11 #11 b13 13) | { 1 b2 3 4 #4 5 b6 6 b7 } < h >": [0, 1, 4, 5, 6, 7, 8, 9, 10],
            " | Major 7 (#9 11 #11 b13 13) | { 1 b3 3 4 #4 5 b6 6 7 } < i >": [0, 3, 4, 5, 6, 7, 8, 9, 11],
            " | Major 6 #5 (b9 9 #9 11 #11) | { 1 b2 2 b3 3 4 #4 #5 6 } < a >": [0, 1, 2, 3, 4, 5, 6, 8, 9]
        },
        "(329) (9-3M) Major 7 (9 #9 11 #11 b13)": {
            " | Major 7 (9 #9 11 #11 b13) | { 1 2 b3 3 4 #4 5 b6 7 } < b >": [0, 2, 3, 4, 5, 6, 7, 8, 11],
            " | Dominant 7 b5 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 b5 6 b7 } < c >": [0, 1, 2, 3, 4, 5, 6, 9, 10],
            " | Augmented Major 7 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 #5 6 7 } < d >": [0, 1, 2, 3, 4, 5, 8, 9, 11],
            " | Major 7 (b9 9 #9 b13 #13) | { 1 b2 2 b3 3 5 b6 b7 7 } < e >": [0, 1, 2, 3, 4, 7, 8, 10, 11],
            " | Minor Major 7 (b9 9 #11 13 #13) | { 1 b2 2 b3 #4 5 6 b7 7 } < f >": [0, 1, 2, 3, 6, 7, 9, 10, 11],
            " | Augmented Major 7 sus4 (b9 9 #11 13 #13) | { 1 b2 2 4 #4 #5 6 b7 7 } < g >": [0, 1, 2, 5, 6, 8, 9, 10, 11],
            " | Major 7 (b9 11 b13 13 #13) | { 1 b2 3 4 5 b6 6 b7 7 } < h >": [0, 1, 4, 5, 7, 8, 9, 10, 11],
            " | Major 7 (#9 #11 b13 13 #13) | { 1 b3 3 #4 5 b6 6 b7 7 } < i >": [0, 3, 4, 6, 7, 8, 9, 10, 11],
            " | Major 6 (b9 #9 11 #11 b13) | { 1 b2 b3 3 4 #4 5 b6 6 } < a >": [0, 1, 3, 4, 5, 6, 7, 8, 9],
        },
        "(330) (9-4) Major 7 (b9 9 #9 #11 b13)": {
            " | Major 7 (b9 9 #9 #11 b13) | { 1 b2 2 b3 3 #4 5 b6 7 } < b >": [0, 1, 2, 3, 4, 6, 7, 8, 11],
            " | Minor Major 7 (b9 9 11 #11 #13) | { 1 b2 2 b3 4 #4 5 b7 7 } < c >": [0, 1, 2, 3, 5, 6, 7, 10, 11],
            " | Major 7 b5 (b9 9 11 13 #13) | { 1 b2 2 3 4 b5 6 b7 7 } < d >": [0, 1, 2, 4, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (b9 #9 11 13 #13) | { 1 b2 b3 3 4 #5 6 b7 7 } < e >": [0, 1, 3, 4, 5, 8, 9, 10, 11],
            " | Major 7 (9 #9 b13 13 #13) | { 1 2 b3 3 5 b6 6 b7 7 } < f >": [0, 2, 3, 4, 7, 8, 9, 10, 11],
            " | 7 sus4 (b9 9 #11 b13 13) | { 1 b2 2 4 #4 5 b6 6 b7 } < g >": [0, 1, 2, 5, 6, 7, 8, 9, 10],
            " | Major 7 (b9 11 #11 b13 13) | { 1 b2 3 4 #4 5 b6 6 7 } < h >": [0, 1, 4, 5, 6, 7, 8, 9, 11],
            " | Major 7 (#9 11 #11 b13 #13) | { 1 b3 3 4 #4 5 b6 b7 7 } < i >": [0, 3, 4, 5, 6, 7, 8, 10, 11],
            " | Major 6 (b9 9 #9 11 b13) | { 1 b2 2 b3 3 4 5 b6 6 } < a >": [0, 1, 2, 3, 4, 5, 7, 8, 9]
        },
        "(331) (9-4M) Major 7 (b9 #9 11 #11 b13)": {
            " | Major 7 (b9 #9 11 #11 b13) | { 1 b2 b3 3 4 #4 5 b6 7 } < b >": [0, 1, 3, 4, 5, 6, 7, 8, 11],
            " | Major 7 (9 #9 11 #11 #13) | { 1 2 b3 3 4 #4 5 b7 7 } < c >": [0, 2, 3, 4, 5, 6, 7, 10, 11],
            " | Augmented 7 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 #5 6 b7 } < d >": [0, 1, 2, 3, 4, 5, 8, 9, 10],
            " | Major 7 (b9 9 #9 b13 13) | { 1 b2 2 b3 3 5 b6 6 7 } < e >": [0, 1, 2, 3, 4, 7, 8, 9, 11],
            " | Minor Major 7 (b9 9 #11 b13 #13) | { 1 b2 2 b3 #4 5 b6 b7 7 } < f >": [0, 1, 2, 3, 6, 7, 8, 10, 11],
            " | Major 7 sus4 (b9 9 #11 13 #13) | { 1 b2 2 4 #4 5 6 b7 7 } < g >": [0, 1, 2, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 11 #11 13 #13) | { 1 b2 3 4 #4 #5 6 b7 7 } < h >": [0, 1, 4, 5, 6, 8, 9, 10, 11],
            " | Major 7 (#9 11 b13 13 #13) | { 1 b3 3 4 5 b6 6 b7 7 } < i >": [0, 3, 4, 5, 7, 8, 9, 10, 11],
            " | Major 6 (b9 9 11 #11 b13) | { 1 b2 2 3 4 #4 5 b6 6 } < a >": [0, 1, 2, 4, 5, 6, 7, 8, 9],
        },
        "(332) (9-5) Major 7 (b9 9 11 #11 #13)": {
            " | Major 7 (b9 9 11 #11 #13) | { 1 b2 2 3 4 #4 5 b7 7 } < c >": [0, 1, 2, 4, 5, 6, 7, 10, 11],
            " | Major 7 b5 (b9 #9 11 13 #13) | { 1 b2 b3 3 4 b5 6 b7 7 } < d >": [0, 1, 3, 4, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (9 #9 11 13 #13) | { 1 2 b3 3 4 #5 6 b7 7 } < e >": [0, 2, 3, 4, 5, 8, 9, 10, 11],
            " | Minor 7 (b9 9 #11 b13 13) | { 1 b2 2 b3 #4 5 b6 6 b7 } < f >": [0, 1, 2, 3, 6, 7, 8, 9, 10],
            " | Major 7 sus4 (1 b2 2 4 #4 5 b6 6 7) | { 1 b2 2 4 #4 5 b6 6 7 }  < g >": [0, 1, 2, 5, 6, 7, 8, 9, 11],
            " | Major 7 (b9 11 #11 b13 #13) | { 1 b2 3 4 #4 5 b6 b7 7 } < h >": [0, 1, 4, 5, 6, 7, 8, 10, 11],
            " | Major 7 (#9 11 #11 13 #13) | { 1 b3 3 4 #4 5 6 b7 7 } < i >": [0, 3, 4, 5, 6, 7, 9, 10, 11],
            " | Major 6 (b9 9 #9 #11 b13) | { 1 b2 2 b3 3 #4 5 b6 6 } < a >": [0, 1, 2, 3, 4, 6, 7, 8, 9],
            " | Minor Major 7 (b9 9 11 #11 b13) | { 1 b2 2 b3 4 #4 5 b6 7 } < b >": [0, 1, 2, 3, 5, 6, 7, 8, 11]
        },
        "(333) (9-5M) Major 7 (b9 9 11 #11 b13)": {
            " | Major 7 (b9 9 11 #11 b13) | { 1 b2 2 3 4 #4 5 b6 7 } < b >": [0, 1, 2, 4, 5, 6, 7, 8, 11],
            " | Major 7 (b9 #9 11 #11 #13) | { 1 b2 b3 3 4 #4 5 b7 7 } < c >": [0, 1, 3, 4, 5, 6, 7, 10, 11],
            " | Major 7 b5 (9 #9 11 13 #13) | { 1 2 b3 3 4 b5 6 b7 7 } < d >": [0, 2, 3, 4, 5, 6, 9, 10, 11],
            " | Dominant 7 (b9 9 #9 b13 13) | { 1 b2 2 b3 3 5 b6 6 b7 } < e >": [0, 1, 2, 3, 4, 7, 8, 9, 10],
            " | Minor Major 7 (b9 9 #11 b13 13) | { 1 b2 2 b3 #4 5 b6 6 7 } < f >": [0, 1, 2, 3, 6, 7, 8, 9, 11],
            " | Major 7 sus4 (b9 9 #11 b13 #13) | { 1 b2 2 4 #4 5 b6 b7 7 } < g >": [0, 1, 2, 5, 6, 7, 8, 10, 11],
            " | Major 7 (b9 11 #11 13 #13) | { 1 b2 3 4 #4 5 6 b7 7 } < h >": [0, 1, 4, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (#9 11 #11 13 #13) | { 1 b3 3 4 #4 #5 6 b7 7 } < i >": [0, 3, 4, 5, 6, 8, 9, 10, 11],
            " | Minor 6 (b9 9 11 #11 b13) | { 1 b2 2 b3 4 #4 5 b6 6 } < a >": [0, 1, 2, 3, 5, 6, 7, 8, 9],
        },
        "(334) (9-6) Ionian add (b2 b3)": {
            "Ionian add (b2 b3) | Major 7 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 5 6 7 } < b >": [0, 1, 2, 3, 4, 5, 7, 9, 11],
            " | Major 7 b5 (b9 9 #9 b13 #13) | { 1 b2 2 b3 3 #4 #5 b7 7 } < c >": [0, 1, 2, 3, 4, 6, 8, 10, 11],
            " | Minor Major 7 (b9 9 11 13 #13) | { 1 b2 2 b3 4 5 6 b7 7 } < d >": [0, 1, 2, 3, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 9 #11 13 #13) | { 1 b2 2 3 #4 #5 6 b7 7 } < e >": [0, 1, 2, 4, 6, 8, 9, 10, 11],
            " | Minor Major 7 (b9 11 b13 13 #13) | { 1 b2 b3 4 5 b6 6 b7 7 } < f >": [0, 1, 3, 5, 7, 8, 9, 10, 11],
            " | Major 7 (9 #11 b13 13 #13) | { 1 2 3 #4 5 b6 6 b7 7 } < g >": [0, 2, 4, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (9 11 #11 b13 13) | { 1 2 3 4 #4 5 b6 6 b7 } < h >": [0, 2, 4, 5, 6, 7, 8, 9, 10],
            " | Dominant 7 (9 #9 11 #11 b13) | { 1 2 b3 3 4 #4 5 b6 b7 } < i >": [0, 2, 3, 4, 5, 6, 7, 8, 10],
            " | Dominant 7 b5 (b9 9 #9 11 b13) | { 1 b2 2 b3 3 4 b5 b6 b7 } < a >": [0, 1, 2, 3, 4, 5, 6, 8, 10]
        },
        "(335) (9-7) Ionian add (#4 b6)": {
            "Ionian add (#4 b6) | Major 7 (9 11 #11 b13 13) | { 1 2 3 4 #4 5 b6 6 7 } < h >": [0, 2, 4, 5, 6, 7, 8, 9, 11],
            " | Dominant 7 (9 #9 11 #11 13) | { 1 2 b3 3 4 #4 5 6 b7 } < i >": [0, 2, 3, 4, 5, 6, 7, 9, 10],
            " | Dominant 7 (b9 9 #9 11 b13) | { 1 b2 2 b3 3 4 5 b6 b7 } < a >": [0, 1, 2, 3, 4, 5, 7, 8, 10],
            " | Major 7 (b9 9 #9 #11 13) | { 1 b2 2 b3 3 #4 5 6 7 } < b >": [0, 1, 2, 3, 4, 6, 7, 9, 11],
            " | Diminished Major 7 (b9 9 11 b13 #13) | { 1 b2 2 b3 4 b5 b6 b7 7 } < c >": [0, 1, 2, 3, 5, 6, 8, 10, 11],
            " | Major 7 (b9 9 11 13 #13) | { 1 b2 2 3 4 5 6 b7 7 } < d >": [0, 1, 2, 4, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 #9 #11 13 #13) | { 1 b2 b3 3 #4 #5 6 b7 7 } < e >": [0, 1, 3, 4, 6, 8, 9, 10, 11],
            " | Minor Major 7 (9 11 b13 13 #13) | { 1 2 b3 4 5 b6 6 b7 7 } < f >": [0, 2, 3, 5, 7, 8, 9, 10, 11],
            " | Minor 7 (b9 11 #11 b13 13) | { 1 b2 b3 4 #4 5 b6 6 b7 } < g >": [0, 1, 3, 5, 6, 7, 8, 9, 10]
        },
        "(336) (9-7M) Ionian add (b3 #4)": {
            "Ionian add (b3 #4) | Major 7 (9 #9 11 #11 13) | { 1 2 b3 3 #4 5 6 7 } < b >": [0, 2, 3, 4, 5, 6, 7, 9, 11],
            " | Dominant 7 (b9 9 #9 11 13) | { 1 b2 2 b3 3 4 5 6 b7 } < c >": [0, 1, 2, 3, 4, 5, 7, 9, 10],
            " | Augmented Major 7 (b9 9 #9 #11 13) | { 1 b2 2 b3 3 #4 #5 6 7 } < d >": [0, 1, 2, 3, 4, 6, 8, 9, 11],
            " | Minor Major 7 (b9 9 11 b13 #13) | { 1 b2 2 b3 4 5 b6 b7 7 } < e >": [0, 1, 2, 3, 5, 7, 8, 10, 11],
            " | Major 7 (b9 9 #11 13 #13) | { 1 b2 2 3 #4 5 6 b7 7 } < f >": [0, 1, 2, 4, 6, 7, 9, 10, 11],
            " | Diminished Major 7 (b9 11 b13 13 #13) | { 1 b2 b3 4 b5 b6 6 b7 7 } < g >": [0, 1, 3, 5, 6, 8, 9, 10, 11],
            " | Major 7 (9 11 b13 13 #13) | { 1 2 3 4 5 b6 6 b7 7 } < h >": [0, 2, 4, 5, 7, 8, 9, 10, 11],
            " | Minor 7 (9 11 #11 b13 13) | { 1 2 b3 4 #4 5 b6 6 b7 } < i >": [0, 2, 3, 5, 6, 7, 8, 9, 10],
            " | Dominant 7 (b9 #9 11 #11 b13) | { 1 b2 b3 3 #4 5 b6 b7 } < a >": [0, 1, 3, 4, 5, 6, 7, 8, 10]
        },
        "(337) (9-8) Major 7 (9 11 #11 b13 #13)": {
            " | Major 7 (9 11 #11 b13 #13) | { 1 2 3 4 #4 5 b6 b7 7 } < h >": [0, 2, 4, 5, 6, 7, 8, 10, 11],
            " | Augmented 7 (9 #9 11 #11 13) | { 1 2 b3 3 4 #4 #5 6 b7 } < i >": [0, 2, 3, 4, 5, 6, 8, 9, 10],
            " | Dominant 7 (b9 9 #9 #11 b13) | { 1 b2 2 b3 3 #4 5 b6 b7 } < a >": [0, 1, 2, 3, 4, 6, 7, 8, 10],
            " | Minor Major 7 (b9 9 11 #11 13) | { 1 b2 2 b3 4 #4 5 6 7 } < b >": [0, 1, 2, 3, 5, 6, 7, 9, 11],
            " | Augmented Major 7 (b9 9 11 #11 #13) | { 1 b2 2 3 4 #4 #5 b7 7 } < c >": [0, 1, 2, 4, 5, 6, 8, 10, 11],
            " | Major 7 (b9 #9 11 13 #13) | { 1 b2 b3 3 4 5 6 b7 7 } < d >": [0, 1, 3, 4, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (9 #9 #11 13 #13) | { 1 2 b3 3 #4 #5 6 b7 7 } < e >": [0, 2, 3, 4, 6, 8, 9, 10, 11],
            " | Dominant 7 (b9 9 #11 b13 13) | { 1 b2 2 3 #4 5 b6 6 b7 } < f >": [0, 1, 2, 4, 6, 7, 8, 9, 10],
            " | Minor Major 7 (b9 11 #11 b13 13) | { 1 b2 b3 4 #4 6 b6 6 7 } < g >": [0, 1, 3, 5, 6, 7, 8, 9, 11]
        },
        "(338) (9-8M) Major 7 (b9 #9 11 #11 13)": {
            " | Major 7 (b9 #9 11 #11 13) | { 1 b2 b3 3 4 #4 5 6 7 } < b >": [0, 1, 3, 4, 5, 6, 7, 9, 11],
            " | Major 7 b5 (9 #9 11 b13 #13) | { 1 2 b3 3 4 b5 b6 b7 7 } < c >": [0, 2, 3, 4, 5, 6, 8, 10, 11],
            " | Augmented 7 (b9 9 #9 #11 13) | { 1 b2 2 b3 3 #4 #5 6 b7 } < d >": [0, 1, 2, 3, 4, 6, 8, 9, 10],
            " | Minor Major 7 (b9 9 11 b13 13) | { 1 b2 2 b3 4 5 b6 6 7 } < e >": [0, 1, 2, 3, 5, 7, 8, 9, 11],
            " | Major 7 (b9 9 #11 b13 #13) | { 1 b2 2 3 #4 5 b6 b7 7 } < f >": [0, 1, 2, 4, 6, 7, 8, 10, 11],
            " | Minor Major 7 (b9 11 #11 13 #13) | { 1 b2 b3 4 #4 5 6 b7 7 } < g >": [0, 1, 3, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (9 11 #11 13 #13) | { 1 2 3 4 #4 #5 6 b7 7 } < h >": [0, 2, 4, 5, 6, 8, 9, 10, 11],
            " | Dominant 7 (9 #9 #11 b13 13) | { 1 2 b3 3 #4 5 b6 6 b7 } < i >": [0, 2, 3, 4, 6, 7, 8, 9, 10],
            " | Dominant 7 (b9 9 11 #11 b13) | { 1 b2 2 3 4 #4 5 b6 b7 } < a >": [0, 1, 2, 4, 5, 6, 7, 8, 10]
        },
        "(339) (9-9) Ionian add (b2 b5)": {
            "Ionian add (b2 b5) | Major 7 (b9 9 11 #11 13) | { 1 b2 2 3 4 #4 5 6 7 } < b >": [0, 1, 2, 4, 5, 6, 7, 9, 11],
            " | Major 7 b5 (b9 #9 11 b13 #13) | { 1 b2 b3 3 4 b5 b6 b7 7 } < c >": [0, 1, 3, 4, 5, 6, 8, 10, 11],
            " | Major 7 (9 #9 11 13 #13) | { 1 2 b3 3 4 5 6 b7 7 } < d >": [0, 2, 3, 4, 5, 7, 9, 10, 11],
            " | Minor 7 (b9 9 11 b13 13) | { 1 b2 2 b3 4 5 b6 6 b7 } < e >": [0, 1, 2, 3, 5, 7, 8, 9, 10],
            " | Major 7 (b9 9 #11 b13 13) | { 1 b2 2 3 #4 5 b6 6 7 } < f >": [0, 1, 2, 4, 6, 7, 8, 9, 11],
            " | Minor Major 7 (b9 11 #11 b13 #13) | { 1 b2 b3 4 #4 5 b6 b7 7 } < g >": [0, 1, 3, 5, 6, 7, 8, 10, 11],
            " | Major 7 (9 11 #11 13 #13) | { 1 2 3 4 #4 5 6 b7 7 } < h >": [0, 2, 4, 5, 6, 7, 9, 10, 11],
            " | Dominant 7 (9 #9 11 b13 13) | { 1 2 b3 3 4 5 b6 6 b7 } < i >": [0, 2, 3, 4, 5, 7, 8, 9, 10],
            " | Minor 7 (b9 9 11 #11 b13) | { 1 b2 2 b3 4 #4 5 b6 b7 } < a >": [0, 1, 2, 3, 5, 6, 7, 8, 10]
        },
        "(340) (9-10) Major 7 (b9 9 11 b13 #13)": {
            " | Major 7 (b9 9 11 b13 #13) | { 1 b2 2 3 4 5 b6 b6 7 } < c >": [0, 1, 2, 4, 5, 7, 8, 10, 11],
            " | Major 7 (b9 #9 #11 13 #13) | { 1 b2 b3 3 #4 5 6 b7 7 } < d >": [0, 1, 3, 4, 6, 7, 9, 10, 11],
            " | Diminished Major 7 (9 11 b13 13 #13) | { 1 2 b3 4 b5 b6 6 b7 7 } < e >": [0, 2, 3, 5, 6, 8, 9, 10, 11],
            " | Dominant 7 (b9 #9 #11 b13 13) | { 1 b2 b3 3 #4 5 b6 6 b7 } < f >": [0, 1, 3, 4, 6, 7, 8, 9, 10],
            " | Minor Major 7 (9 11 #11 b13 13) | { 1 2 b3 4 #4 5 b6 6 7 } < g >": [0, 2, 3, 5, 6, 7, 8, 9, 11],
            " | Dominant 7 (b9 #9 11 #11 13) | { 1 b2 b3 3 4 #4 5 6 b7 } < h >": [0, 1, 3, 4, 5, 6, 7, 9, 10],
            " | Augmented Major 7 (9 #9 11 #11 13) | { 1 2 b3 3 4 #4 #5 6 7 } < i >": [0, 2, 3, 4, 5, 6, 8, 9, 11],
            " | Dominant 7 (b9 9 #9 #11 13) | { 1 b2 2 b3 3 #4 5 6 b7 } < a >": [0, 1, 2, 3, 4, 6, 7, 9, 10],
            " | Diminished Major 7 (b9 9 11 b13 13) | { 1 b2 2 b3 4 b5 b6 6 7 } < b >": [0, 1, 2, 3, 5, 6, 8, 9, 11]
        },
        "(341) (9-11) Ionian add (b3 b6)": {
            "Ionian add (b3 b6) | Major 7 (9 #9 11 b13 13) | { 1 2 b3 3 4 5 b6 6 7 } < i >": [0, 2, 3, 4, 5, 7, 8, 9, 11],
            " | Minor 7 (b9 9 11 #11 13) | { 1 b2 2 b3 4 #4 5 6 b7 } < a >": [0, 1, 2, 3, 5, 6, 7, 9, 10],
            " | Augmented Major 7 (b9 9 11 #11 13) | { 1 b2 2 3 4 #4 #5 6 7 } < b >": [0, 1, 2, 4, 5, 6, 8, 9, 11],
            " | Major 7 (b9 #9 11 b13 #13) | { 1 b2 b3 3 4 5 b6 b7 7 } < c >": [0, 1, 3, 4, 5, 7, 8, 10, 11],
            " | Major 7 (9 #9 #11 13 #13) | { 1 2 b3 3 34 5 6 b7 7 } < d >": [0, 2, 3, 4, 6, 7, 9, 10, 11],
            " | Dominant 7 (b9 9 11 b13 13) | { 1 b2 2 3 4 5 b6 6 b7 } < e >": [0, 1, 2, 4, 5, 7, 8, 9, 10],
            " | Major 7 (b9 #9 #11 b13 13) | { 1 b2 b3 3 #4 5 b6 6 7 } < f >": [0, 1, 3, 4, 6, 7, 8, 9, 11],
            " | Minor Major 7 (9 11 #11 b13 #13) | { 1 2 b3 4 34 5 b6 b7 7 } < g >": [0, 2, 3, 5, 6, 7, 8, 10, 11],
            " | Augmented 7 (b9 #9 11 #11 13) | { 1 b2 b3 3 4 #4 #5 6 b7 } < h >": [0, 1, 3, 4, 5, 6, 8, 9, 10]
        },
        "(342) (9-11M) Ionian add (b2 b6)": {
            "Ionian add (b2 b6) | Major 7 (b9 9 11 b13 13) | { 1 b2 2 3 4 5 b6 6 7 } < e >": [0, 1, 2, 4, 5, 7, 8, 9, 11],
            " | Major 7 (b9 #9 #11 b13 #13) | { 1 b2 b3 3 #4 b6 b7 7 } < f >": [0, 1, 3, 4, 6, 7, 8, 10, 11],
            " | Minor Major 7 (9 #9 11 #11 13 #13) | { 1 2 b3 4 #4 5 6 b7 7 } < g >": [0, 2, 3, 5, 6, 7, 9, 10, 11],
            " | Dominant 7 (b9 #9 11 b13 13) | { 1 b2 b3 3 4 5 b6 6 b7 } < h >": [0, 1, 3, 4, 5, 7, 8, 9, 10],
            " | Major 7 (9 #9 #11 b13 13) | { 1 2 b3 3 #4 5 b6 6 7 } < i >": [0, 2, 3, 4, 6, 7, 8, 9, 11],
            " | Dominant 7 (b9 9 11 #11 13) | { 1 b2 2 3 4 #4 5 6 b7 } < a >": [0, 1, 2, 4, 5, 6, 7, 9, 10],
            " | Augmented Major 7 (b9 #9 11 #11 13) | { 1 b2 b3 3 4 #4 #5 6 7 } < b >": [0, 1, 3, 4, 5, 6, 8, 9, 11],
            " | Major 7 (9 #9 11 b13 #13) | { 1 2 b3 3 4 5 b6 b7 7 } < c >": [0, 2, 3, 4, 5, 7, 8, 10, 11],
            " | Augmented 7 (b9 9 11 #11 13) | { 1 b2 2 b3 4 #4 #5 6 b7 } < d >": [0, 1, 2, 3, 5, 6, 8, 9, 10]
        },
        "(343) (9-12S) Major 7 (b9 #9 11 b13 13)": {
            " | Major 7 (b9 #9 11 b13 13) | { 1 b2 b3 3 4 5 b6 6 7 } < b >": [0, 1, 3, 4, 5, 7, 8, 9, 11],
            "Messiaen Mode 3, Tcherepnin Scale | Major 7 (9 #9 #11 b13 #13) | { 1 2 b3 3 #4 5 b6 b7 7 } < c >": [0, 2, 3, 4, 6, 7, 8, 10, 11],
            " | Augmented 7 (b9 9 11 #11 13) | { 1 b2 2 3 4 #4 #5 6 b7 } < a >": [0, 1, 2, 4, 5, 6, 8, 9, 10]
        }
    },
    decads: {
        "(344) (10-1) Chromatic Decachord": {
            "Chromatic Decachord | Major 6 (b9 9 #9 11 #11 b13) | { 1 b2 2 b3 3 4 #4 5 b6 6 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            " | Major 7 (b9 9 #9 11 #11 b13) | { 1 b2 2 b3 3 4 #4 5 b6 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11],
            " | Major 7 (b9 9 #9 11 #11 #13) | { 1 b2 2 b3 3 4 #4 5 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 6, 7, 10, 11],
            " | Major 7 b5 (b9 9 #9 11 13 #13) | { 1 b2 2 b3 3 4 b5 6 b7 7 } < d >": [0, 1, 2, 3, 4, 5, 6, 9, 10, 11],
            " | Augmented Major 7 (b9 9 #9 11 13 #13) | { 1 b2 2 b3 3 4 #5 6 b7 7 } < e >": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11],
            " | Major 7 (b9 9 #9 b13 13 #13) | { 1 b2 2 b3 3 5 b6 6 b7 7 } < f >": [0, 1, 2, 3, 4, 7, 8, 9, 10, 11],
            " | Minor Major 7 (b9 9 #11 b13 13 #13) | { 1 b2 2 b3 #4 5 b6 6 b7 7 } < g >": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11],
            " | Major 7 sus4 (b9 9 #11 b13 13 #13) | { 1 b2 2 4 #4 5 b6 6 b7 7 } < h >": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (b9 11 #11 b13 13 #13) | { 1 b2 3 4 #4 5 b6 6 b7 7 } < i >": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (#9 11 #11 b13 13 #13) | { 1 b3 3 4 #4 5 b6 6 b7 7 } < j >": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        "(345) (10-2) Ionian add (b2 b3 b5)": {
            "Ionian add (b2 b3 b5) | Major 7 (b9 9 #9 11 #11 13) | { 1 b2 2 b3 3 4 #4 5 6 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11],
            " | Augmented Major 7 | { 1 b2 2 b3 3 4 #4 #5 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11],
            " | Major 7 (b9 9 #9 11 13 #13) | { 1 b2 2 b3 3 4 5 6 b7 7 } < d >": [0, 1, 2, 3, 4, 5, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 9 b3 3 #4 #5 6 b7 7) | { 1 b2 2 b3 3 #4 #5 6 b7 7 } < e >": [0, 1, 2, 3, 4, 6, 8, 9, 10, 11],
            " | Minor Major 7 (b9 9 11 b13 13 #13) | { 1 b2 2 b3 4 5 b6 6 b7 7 } < f >": [0, 1, 2, 3, 5, 7, 8, 9, 10, 11],
            " | Major 7 (b9 9 #11 b13 13 #13) | { 1 b2 2 3 #4 5 b6 6 b7 7 } < g >": [0, 1, 2, 4, 6, 7, 8, 9, 10, 11],
            " | Minor Major 7 (b9 11 #11 b13 13 #13) | { 1 b2 b3 4 #4 5 b6 6 b7 7 } < h >": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (9 11 #11 b13 13 #13) | { 1 2 3 4 #4 5 b6 6 b7 7 } < i >": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (9 #9 11 #11 b13 13) | { 1 2 b3 3 4 #4 5 b6 6 b7 } < j >": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            " | Dominant 7 (b9 9 #9 11 #11 b13) | { 1 b2 2 b3 3 4 #4 5 b6 b7 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]
        },
        "(346) (10-3) Ionian add (b2 b6 b7)": {
            "Ionian add (b2 b6 b7) | Major 7 (b9 9 11 b13 13 #13) | { 1 b2 2 3 4 5 b6 6 b7 7 } < f >": [0, 1, 2, 4, 5, 7, 8, 9, 10, 11],
            " | Major 7 (b9 #9 #11 b13 13 #13) | { 1 b2 b3 3 #4 5 b6 6 b7 7 } < g >": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11],
            " | Minor Major 7 (9 11 #11 b13 13 #13) | { 1 2 b3 4 #4 5 b6 6 b7 7 } < h >": [0, 2, 3, 5, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (b9 #9 11 #11 b13 13) | { 1 b2 b3 3 4 #4 5 b6 6 b7 } < i >": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10],
            " | Major 7 (9 #9 11 #11 b13 13) | { 1 2 b3 3 4 #4 5 b6 6 7 } < j >": [0, 2, 3, 4, 5, 6, 7, 8, 9, 11],
            " | Dominant 7 (b9 9 #9 11 #11 13) | { 1 b2 2 b3 3 4 #4 5 6 b7 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
            " | Major 7 b5 (b9 9 #9 11 b13 13) | { 1 b2 2 b3 3 4 b5 b6 6 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11],
            " | Major 7 (b9 9 #9 11 b13 #13) | { 1 b2 2 b3 3 4 5 b6 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 7, 8, 10, 11],
            " | Major 7 (b9 9 #9 #11 13 #13) | { 1 b2 2 b3 3 #4 5 6 b7 7 } < d >": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11],
            " | Diminished Major 7 (b9 9 11 b13 13 #13) | { 1 b2 2 b3 4 b5 b6 6 b7 7 } < e >": [0, 1, 2, 3, 5, 6, 8, 9, 10, 11]
        },
        "(347) (10-4) Ionian add (b2 b3 b6)": {
            "Ionian add (b2 b3 b6) | Major 7 (b9 9 #9 11 b13 13) | { 1 b2 2 b3 3 4 5 b6 6 7 } < b >": [0, 1, 2, 3, 4, 5, 7, 8, 9, 11],
            " | Major 7 (b9 9 #9 #11 b13 #13) | { 1 b2 2 b3 3 #4 5 b6 b7 7 } < c >": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11],
            " | Major 7 (b9 9 11 #11 13 #13) | { 1 b2 2 b3 4 #4 5 6 b7 7 } < d >": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 9 11 #11 13 #13) | { 1 b2 2 3 4 #4 #5 6 b7 7 } < e >": [0, 1, 2, 4, 5, 6, 8, 9, 10, 11],
            " | Major 7 (b9 #9 11 b13 13 #13) | { 1 b2 b3 3 4 5 b6 6 b7 7 } < f >": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11],
            " | Major 7 (9 #9 #11 b13 13 #13) | { 1 2 b3 3 #4 5 b6 6 b7 7 } < g >": [0, 2, 3, 4, 6, 7, 8, 9, 10, 11],
            " | Dominant 7 (b9 9 11 #11 b13 13) | { 1 b2 2 3 4 #4 5 b6 6 b7 } < h >": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
            " | Major 7 (b9 #9 11 #11 b13 13) | { 1 b2 b3 3 4 #4 5 b6 6 7 } < i >": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11],
            " | Major 7 (9 #9 11 #11 b13 #13) | { 1 2 b3 3 4 #4 5 b7 b7 7 } < j >": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11],
            " | Augmented 7 (b9 9 #9 11 #11 13) | { 1 b2 2 b3 3 4 #4 #5 6 b7 } < a >": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10]
        },
        "(348) (10-5) Ionian add (b2 b5 b7)": {
            "Ionian add (b2 b5 b7) | Major 7 (b9 9 11 #11 13 #13) | { 1 b2 2 3 4 #4 5 6 b7 7 } < d >": [0, 1, 2, 4, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 #9 11 #11 13 #13) | { 1 b2 b3 3 4 #4 #5 6 b7 7 } < e >": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11],
            " | Major 7 (9 #9 11 b13 13 #13) | { 1 2 b3 3 4 5 b6 6 b7 7 } < f >": [0, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            " | Minor 7 (b9 9 11 #11 b13 13) | { 1 b2 2 b3 4 #4 5 b6 6 b7 } < g >": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10],
            " | Major 7 (b9 9 11 #11 b13 13) | { 1 b2 2 3 4 #4 5 b6 6 7 } < h >": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11],
            " | Major 7 (b9 #9 11 #11 b13 #13) | { 1 b2 b3 3 4 #4 5 b6 b7 7 } < i >": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11],
            " | Major 7 (9 #9 11 #11 13 #13) | { 1 2 b3 3 4 #4 5 6 b7 7 } < j >": [0, 2, 3, 4, 5, 6, 7, 9, 10, 11],
            " | Dominant 7 (b9 9 #9 11 b13 13) | { 1 b2 2 b3 3 4 5 b6 6 b7 } < a >": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10],
            " | Major 7 (b9 9 #9 #11 b13 13) | { 1 b2 2 b3 3 #4 5 b6 6 7 } < b >": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11],
            " | Minor Major 7 (b9 9 11 #11 b13 #13) | { 1 b2 2 b3 4 5 b6 b7 7 } < c >": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11]
        },
        "(349) (10-6S) Major 7 (b9 9 11 #11 b13 #13)": {
            " | Major 7 (b9 9 11 #11 b13 #13) | { 1 b2 2 3 4 b5 5 b6 b7 7 } < c >": [0, 1, 2, 4, 5, 6, 7, 8, 10, 11],
            " | Major 7 (b9 #9 11 #11 13 #13) | { 1 b2 b3 3 4 #4 5 6 b7 7 } < d >": [0, 1, 3, 4, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (9 #9 11 #11 13 #13) | { 1 2 b3 3 4 #4 #5 6 b7 7 } < e >": [0, 2, 3, 4, 5, 6, 8, 9, 10, 11],
            " | Dominant 7 (b9 9 #9 #11 b13 13) | { 1 b2 2 b3 3 #4 5 b6 6 b7 } < a >": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
            "Messiaen Mode 7 | Minor Major 7 (b9 9 11 #11 b13 13 ) | { 1 b2 2 b3 4 b5 5 b6 6 7 } < b >": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11]
        }
    },
    undecad: {
        "(350) (11-1) Undecad": {
            " | Dominant 7 (b9 9 #9 11 #11 b13 13) | { 1 b2 2 b3 3 4 #4 5 b6 6 b7 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            " | Major 7 (b9 9 #9 11 #11 b13 13) | { 1 b2 2 b3 3 4 #4 5 b6 6 7 } < b >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
            " | Major 7 (b9 9 #9 11 #11 b13 #13) | { 1 b2 2 b3 3 4 #4 5 b6 b7 7 } < c >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11],
            " | Major 7 (b9 9 #9 11 #11 13 #13) | { 1 b2 2 b3 3 4 #4 5 6 b7 7 } < d >": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
            " | Augmented Major 7 (b9 9 #9 11 #11 13 #13) | { 1 b2 2 b3 3 4 #4 #5 6 b7 7 } < e >": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11],
            " | Major 7 (b9 9 #9 11 b13 13 #13) | { 1 b2 2 b3 3 4 5 b6 6 b7 7 } < f >": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            " | Major 7 (b9 9 #9 #11 b13 13 #13) | { 1 b2 2 b3 3 #4 5 b6 6 b7 7 } < g >": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
            " | Minor Major 7 (b9 9 11 #11 b13 13 #13) | { 1 b2 2 b3 4 #4 5 b6 6 b7 7 } < h >": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (b9 9 11 #11 b13 13 #13) | { 1 b2 2 3 4 #4 5 b6 6 b7 7 } < i >": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11],
            "'Northern Lights Chord' | Major 7 (b9 #9 11 #11 b13 13 #13) | { 1 b2 b3 3 4 #4 5 b6 6 b7 7 } < j >": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            " | Major 7 (9 #9 11 #11 b13 13 #13) | { 1 2 b3 3 4 #4 5 b6 6 b7 7 } < k >": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
    },
    dodecads: {
        "(351) (12-1) Chromatic Scale": {
            "Chromatic Scale | Major 7 ( b9 9 #9 11 #11 b13 13 #13) | { 1 b2 2 b3 3 4 b5 5 b6 6 b7 7 } < a >": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        } 
    }
};



/*
Object.freeze(setList);
var diatonicSubsets = { monad: [1] 
                        secundal: [2, 3, 9, 10, 17, 39, 40, 41, 58, 90, 108, 109, 110, 111]
                        tertial: [4, 5, 23, 24, 25, 57, 64, 65, 66, 112, 113, 116, 117, 129] 
                        quartal: [6, 7, 15, 16, 22, 37, 50, 51, 61, 103, 104, 120, 121, 130] 
                        7no5: [13, 18, 20],
                        7no3: [14, 19, 21], 
                        9no3: [45, 47, 60, 69],
                        9no7: [44, 46, 59, 68], 
                        hexads: [176, 177, 178, 187, 188, 189], 
                        septads: [276] 
                    }
]
*/