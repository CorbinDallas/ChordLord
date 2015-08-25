var setList = {
    nullSet: {
        "(0-1) Silence, Rest": {
            "Silence": []
        }
    },
    monad: {
        "(1-1) Monad": {
            "Unison, Octave, Monad": [0]
        }
    },
    dyads: {
        "(2-1) Interval Class 1": {
            "Minor 2nd, Half Step, Semitone": [0, 1],
            "Major 7th": [0, 11]
        },
        "(2-2) Interval Class 2": {
            "Major 2nd, Whole Step, Whole Tone, Diminished 3rd": [0, 2],
            "Minor 7th, Augmented 6th": [0, 10]
        },
        "(2-3) Interval Class 3": {
            "Minor 3rd, Augmented 2nd": [0, 3],
            "Major 6th, Diminished 7th": [0, 9]
        },
        "(2-4) Interval Class 4": {
            "Major 3rd, Diminished 4th": [0, 4],
            "Minor 6th, Augmented 5th": [0, 8]
        },
        "(2-5) Interval Class 5": {
            "Perfect 4th, Augmented 3rd": [0, 5],
            "Perfect 5th, Diminished 6th": [0, 7]
        },
        "(2-6S) Interval Class 6": {
            "Augmented 4th, Diminished 5th, Tritone": [0, 6]
        }
    },
    triads: {
        "Tertial (3-11M) Major Triad": {
            "Major Triad": [0, 4, 7],
            "b6/b3 Tertial Triad": [0, 3, 8],
            "6/4 Tertial Triad": [0, 5, 9]
        },
        "Tertial (3-11) Minor Triad": {
            "Minor Triad": [0, 3, 7],
            "6/3 Tertial Triad, Major 6 no5": [0, 4, 9],
            "b6/4 Triad, Augmented sus4": [0, 5, 8]
        },
        "Tertial (3-10) Diminished Triad": {
            "Diminished Triad": [0, 3, 6],
            "6/b3 Tertial Triad, Minor 6 no5, Diminished 7 no5": [0, 3, 9],
            "6/#4 Triad, Diminished 7 no3": [0, 6, 9]
        },
        "Secundal (3-6) Major Trichord": {
            "Major Trichord": [0, 2, 4],
            "b7/2 Triad Cluster, 7 sus2 no5": [0, 2, 10],
            "b7/b6 Triad Cluster, Augmented 7 no3": [0, 8, 10]
        },
        "Secundal (3-2M) Minor Trichord": {
            "Minor Trichord": [0, 2, 3],
            "b7/b2 Triad Cluster, 7 susb2 no5": [0, 1, 10],
            "7/6 Triad Cluster": [0, 9, 11]
        },
        "Secundal (3-2) Phrygian Trichord": {
            "Phrygian Trichord": [0, 1, 3],
            "7/2 Triad Cluster, Major 7 sus2 no5": [0, 2, 11],
            "b7/6 Triad Cluster": [0, 9, 10]
        },
        "Quartal (3-9) sus4": {
            "sus4": [0, 5, 7],
            "sus2": [0, 2, 7],
            "Perfect Quartal Triad, 7 sus4 no5": [0, 5, 10]
        },
        "Quartal (3-5M) Diminished sus4": {
            "Diminished sus4, Rite Chord 1": [0, 5, 6],
            "susb2": [0, 1, 7],
            "Lydian Quartal Triad, Major 7 sus#4 no5": [0, 6, 11]
        },
        "Quartal (3-5) sus#4": {
            "sus#4": [0, 6, 7],
            "Diminished susb2, Rite Chord 2, Viennese Trichord": [0, 1, 6],
            "Ionian Quartal Triad, Major 7 sus4 no5": [0, 5, 11]
        },
        "7 no 3 (3-4M) Major 7 no3": {
            "Major 7 no3": [0, 7, 11],
            "4/3 Mixed Triad": [0, 4, 5],
            "b6/b2 Mixed Triad": [0, 1, 8]
        },
        "7 no 3 (3-7M) 7 no3": {
            "7 no3": [0, 7, 10],
            "4/b3 Mixed Triad": [0, 3, 5],
            "6/2 Mixed Triad": [0, 2, 9]
        },
        "7 no 3 (3-8M) Half Diminished 7 no3": {
            "Half-Diminished 7 no3": [0, 6, 10],
            "#4/3 Mixed Triad": [0, 4, 6],
            "b6/2 Mixed Triad": [0, 2, 8]
        },
        "7 no 5 (3-4) Major 7 no 5": {
            "Major 7 no5": [0, 4, 11],
            "b6/5 Mixed Triad ": [0, 7, 8],
            "4/b2 Mixed Triad": [0, 1, 5]
        },
        "7 no 5 (3-8) Dominant 7 no 5": {
            "Dominant 7 no5, Italian Augmented Sixth": [0, 4, 10],
            "b6/b5 Mixed Triad": [0, 6, 8],
            "#4/2 Mixed Triad": [0, 2, 6]
        },
        "7 no 5 (3-7) Minor 7 no 5": {
            "Minor 7 no5": [0, 3, 10],
            "6/5 Mixed Triad": [0, 7, 9],
            "4/2 Mixed Triad": [0, 2, 5]
        },
        "Diatonic to Melodic/Harmonic Minor (3-12S) Augmented Triad": {
            "Augmented Triad, b6/3 Tertial Triad, 6/b4 Tertial Triad": [0, 4, 8]
        },
        "Diatonic to Melodic/Harmonic Minor (3-3M) Major #2 Trichord": {
            "Major #2 Trichord, b4/b3 Mixed Trichord": [0, 3, 4],
            "6/b2 Mixed Triad, bb7/b2 Triad Cluster": [0, 1, 9],
            "Augmented Major 7 no3, 7/b6 Triad Cluster": [0, 8, 11]
        },
        "Diatonic to Melodic/Harmonic Minor (3-3) Phrygian Major Trichord": {
            "Phrygian Major Trichord, b4/b2 Mixed Triad": [0, 1, 4],
            "Minor Major 7 no5, 7/#2 Triad Cluster": [0, 3, 11],
            "6/#5 Mixed Triad, bb7/b6 Triad Cluster": [0, 8, 9]
        },
        "Chromatic Trichord (3-1) Phrygian bb3 Trichord": {
            "Phrygian bb3 Trichord": [0, 1, 2],
            "7/b2 Triad Cluster": [0, 1, 11],
            "7/#6 Triad Cluster": [0, 10, 11]
        }
    },
    quadrads: {
        "Tertial (4-27) Minor 7 b5": {
            "Minor 7 b5, Half-Diminished 7": [0, 3, 6, 10],
            "Minor 6, Minor (13)": [0, 3, 7, 9],
            "6/#4/3 Tertial Quadrad, Major 6 b5, Major 6 no5 (#11), Major no5 (#11 13)": [0, 4, 6, 9],
            "b6/4/2 Tertial Quadrad, Augmented sus4 (9)": [0, 2, 5, 8]
        },
        "Tertial (4-26) Minor 7": {
            "Minor 7": [0, 3, 7, 10],
            "Major 6, Major (13)": [0, 4, 7, 9],
            "b6/4/b3 Tertial Quadrad": [0, 3, 5, 8],
            "6/4/2 Tertial Quadrad": [0, 2, 5, 9]
        },
        "Tertial (4-20) Major 7": {
            "Major 7": [0, 4, 7, 11],
            "Minor (b13)": [0, 3, 7, 8],
            "6/4/3 Tertial Quadrad, Major 6 no5 (11)": [0, 4, 5, 9],
            "b6/4/b2 Tertial Quadrad": [0, 1, 5, 8]
        },
        "Tertial (4-27M) Dominant 7": {
            "Dominant 7": [0, 4, 7, 10],
            "Diminished (b13)": [0, 3, 6, 8],
            "6/4/b3 Tertial Triad, Minor 6 no5 (11)": [0, 3, 5, 9],
            "6/#4/2 Tertial Quadrad": [0, 2, 6, 9]
        },
        "Quartal (4-23) Perfect Quartal Quadrad": {
            "Minor Quartal Quadrad, Minor 7 no5 (11)": [0, 3, 5, 10],
            "sus2 (13), Major 6 sus2": [0, 2, 7, 9],
            "7 sus4": [0, 5, 7, 10],
            "sus4 (9)": [0, 2, 5, 7]
        },
        "Quartal (4-16M) Mixolydian Quartal Quadrad": {
            "Mixolydian Quartal Quadrad, Dominant 7 no5 (11)": [0, 4, 5, 10],
            "Diminished susb2 (b13)": [0, 1, 6, 8],
            "Major 7 sus4": [0, 5, 7, 11],
            "sus#4 (9)": [0, 2, 6, 7]
        },
        "Quartal (4-8) Ionian Quartal Quadrad": {
            "Ionian Quartal Quadrad, Major 7 no5 (11)": [0, 4, 5, 11],
            "susb2 (b13)": [0, 1, 7, 8],
            "Major 7 sus#4": [0, 6, 7, 11],
            "Diminished sus4 (b9)": [0, 1, 5, 6]
        },
        "Quartal (4-16) Lydian Quartal Quadrad": {
            "Lydian Quartal Quadrad, Major 7 no5 (#11)": [0, 4, 6, 11],
            "sus2 (b13)": [0, 2, 7, 8],
            "Half-Diminished sus4": [0, 5, 6, 10],
            "sus4 (b9)": [0, 1, 5, 7]
        },
        "Secundal (4-11M) Major Tetrachord": {
            "Major Tetrachord": [0, 2, 4, 5],
            "Minor 9 no5": [0, 2, 3, 10],
            "b7/b6/b2 Quadrad Cluster": [0, 1, 8, 10],
            "7/6/5 Quadrad Cluster, Major 7 no3 (13)": [0, 7, 9, 11]
        },
        "Secundal (4-11) Phrygian Tetrachord": {
            "Phrygian Tetrachord": [0, 1, 3, 5],
            "Major 9 no5": [0, 2, 4, 11],
            "b7/6/2 Quadrad Cluster": [0, 2, 9, 10],
            "b7/b6/5 Quadrad Cluster, 7 no3 (b13)": [0, 7, 8, 10]
        },
        "Secundal (4-10) Minor Tetrachord": {
            "Minor Tetrachord": [0, 2, 3, 5],
            "Minor 7 no5 (b9)": [0, 1, 3, 10],
            "7/6/2 Quadrad Cluster": [0, 2, 9, 11],
            "b7/6/5 Quadrad Cluster, 7 no3 (13)": [0, 7, 9, 10]
        },
        "Secundal (4-21) Lydian Tetrachord": {
            "Lydian Tetrachord": [0, 2, 4, 6],
            "Dominant 9 no5": [0, 2, 4, 10],
            "b7/b6/2 Quadrad Cluster": [0, 2, 8, 10],
            "b7/b6/b5 Quadrad Cluster, Half-Diminished 7 no3 (b13)": [0, 6, 8, 10]
        },
        "Add 9 (4-22) Add 9": {
            "Add 9, Major (9), 'Mu Chord', 'Steely Dan Chord'": [0, 2, 4, 7],
            "7 sus4 no5 (9)": [0, 2, 5, 10],
            "Minor 7 no5 (b13), Minor 7 #5": [0, 3, 8, 10],
            "sus4 (13)": [0, 5, 7, 9]
        },
        "Add 9 (4-13) Diminished Add b9": {
            "Diminished (b9)": [0, 1, 3, 6],
            "Major 7 sus4 no5 (9)": [0, 2, 5, 11],
            "Minor 7 no5 (13)": [0, 3, 9, 10],
            "sus#4 (13)": [0, 6, 7, 9]
        },
        "Add 9 (4-Y15) Minor Add b9, All Interval Tetrachord 3": {
            "Minor (b9)": [0, 1, 3, 7],
            "Major 7 sus2 (#11)": [0, 2, 6, 11],
            "Dominant 7 no5 (13)": [0, 4, 9, 10],
            "Diminished sus4 (b13)": [0, 5, 6, 8]
        },
        "Add 9 (4-14) Minor Add 9": {
            "Minor (9)": [0, 2, 3, 7],
            "7 sus4 (b9)": [0, 1, 5, 10],
            "Major 7 no5 (13)": [0, 4, 9, 11],
            "sus4 (b13)": [0, 5, 7, 8]
        },
        "Add 11 (4-14M) Major (11)": {
            "Major 7 sus2": [0, 2, 7, 11],
            "b7/6/4 Mixed Quadrad": [0, 5, 9, 10],
            "Major (11)": [0, 4, 5, 7],
            "b6/b3/b2 Mixed Quadrad": [0, 1, 3, 8]
        },
        "Add 11 (4-22M) Minor (11)": {
            "7 sus2": [0, 2, 7, 10],
            "b7/b6/4 Mixed Quadrad": [0, 5, 8, 10],
            "Minor (11)": [0, 3, 5, 7],
            "6/3/2 Mixed Quadrad, Major 6 no5 (9)": [0, 2, 4, 9]
        },
        "Add 11 (4-13M) Diminished (11)": {
            "7 susb2": [0, 1, 7, 10],
            "7/6/#4 Mixed Quadrad": [0, 6, 9, 11],
            "Diminished (11)": [0, 3, 5, 6],
            "6/b3/2 Mixed Quadrad": [0, 2, 3, 9]
        },
        "Add 11 (4-Y15M) Major (#11), All Interval Tetrachord 4": {
            "Major (#11)": [0, 4, 6, 7],
            "b6/b3/2 Mixed Quadrad": [0, 2, 3, 8],
            "Half-Diminished susb2": [0, 1, 6, 10],
            "7/6/4 Mixed Quadrad": [0, 5, 9, 11]
        },
        "Diatonic to Melodic Minor (4-X15M) Super Locrian Quartal Quadrad": {
            "7 (#9) no5, Minor 7 no5 (b11), Super Locrian Quartal Quadrad, 'Jimi Hendrix Chord' ": [0, 3, 4, 10],
            "6 susb2": [0, 1, 7, 9],
            "Augmented Major 7 sus#4": [0, 6, 8, 11],
            "Diminished sus4 (9)": [0, 2, 5, 6]
        },
        "Diatonic to Melodic Minor (4-25S) Dominant 7 b5": {
            "Dominant 7 b5, Half-Diminished susb4, Dominant 7 no5 (#11), French Augmented Sixth": [0, 4, 6, 10],
            "Augmented sus2 (#11), Diminished sus2 (b13)": [0, 2, 6, 8]
        },
        "Diatonic to Melodic and Harmonic Minor (4-3) Phrygian b4 Tetrachord": {
            "Minor Major 9 no5": [0, 2, 3, 11],
            "b7/6/b2 Quadrad Cluster": [0, 1, 9, 10],
            "7/6/#5 Quadrad Cluster": [0, 8, 9, 11],
            "Phrygian b4 Tetrachord": [0, 1, 3, 4]
        },
        "Diatonic to Melodic and Harmonic Minor (4-12M) Diminished (b11)": {
            "Augmented Major 7 sus2, 7/b6/2 Quadrad Cluster": [0, 2, 8, 11],
            "b7/6/b5 Quadrad Cluster, b7/6/#4 Mixed Quadrad": [0, 6, 9, 10],
            "Lydian #2 Tetrachord, Diminished (b11)": [0, 3, 4, 6],
            "bb7/b3/b2 Quadrad Cluster, 6/b3/b2 Mixed Quadrad": [0, 1, 3, 9]
        },
        "Diatonic to Melodic and Harmonic Minor (4-X15) Melodic/Harmonic Minor Quartal Quadrad, All Interval Tetrachord 1": {
            "7 sus#4": [0, 6, 7, 10],
            "Diminished susb4 (b9), Lydian b2 Tetrachord": [0, 1, 4, 6],
            "Minor Major 7 no5 (11), Melodic/Harmonic Minor Quartal Quadrad": [0, 3, 5, 11],
            "Augmented sus2 (13)": [0, 2, 8, 9]
        },
        "Diatonic to Melodic and Harmonic Minor (4-19) Minor Major 7": {
            "Minor Major 7": [0, 3, 7, 11],
            "Augmented (13), Diminished 7 susb4 no5 (b13)": [0, 4, 8, 9],
            "Augmented (11), b6/4/3 Tertial Quadrad": [0, 4, 5, 8],
            "Augmented (b9), b6/3/b2 Mixed Quadrad, b6/b4/b2 Tertial Quadrad": [0, 1, 4, 8]
        },
        "Diatonic to Melodic and Harmonic Minor (4-12) Diminished (9)": {
            "Diminished (9)": [0, 2, 3, 6],
            "b7/b4/b2 Quartal Quadrad, Dominant 7 no 5 (b9)": [0, 1, 4, 10],
            "Minor Major 7 no 5 (13)": [0, 3, 9, 11],
            "Augmented sus#4 (13), Diminished 7 no3 (b13)": [0, 6, 8, 9]
        },
        "Diatonic to Melodic and Harmonic Minor (4-19M) Augmented Major 7": {
            "Augmented Major 7": [0, 4, 8, 11],
            "Major (b13)": [0, 4, 7, 8],
            "Augmented (#9)": [0, 3, 4, 8],
            "6/4/b2 Tertial Quadrad": [0, 1, 5, 9]
        },
        "Diatonic to Melodic and Harmonic Minor (4-24) Dominant 7 #5": {
            "Augmented 7, b7/b6/b4 Mixed Quadrad, 7 no5 (b13)": [0, 4, 8, 10],
            "Augmented (#11), Diminished susb4 (b13)": [0, 4, 6, 8],
            "Augmented (9), Major Trichord (b13)": [0, 2, 4, 8],
            "Half-Diminished sus2, b7/#4/2 Mixed Quadrad": [0, 2, 6, 10]
        },
        "Diatonic to Harmonic Minor (4-7) Phrygian Major Tetrachord": {
            "Major 7 no5 (#9)": [0, 3, 4, 11],
            "bb7/b6/b2 Quadrad Cluster": [0, 1, 8, 9],
            "7/b6/5 Quadrad Cluster": [0, 7, 8, 11],
            "Phrygian Major Tetrachord": [0, 1, 4, 5]
        },
        "Diatonic to Harmonic Minor (4-28S) Diminished 7": {
            "Diminished 7, 6/#4/#2 Tertial Quadrad, Diminished (13), 6/#4/3 Tertial Quadrad": [0, 3, 6, 9]
        },
        "Diatonic to Harmonic Minor (4-18) Diminished Major 7": {
            "Diminished Major 7, 7/#4/#2 Mixed Quadrad": [0, 3, 6, 11],
            "Diminished 7 no 5 (b13)": [0, 3, 8, 9],
            "Diminished sus4 (13), Diminished 7 sus4": [0, 5, 6, 9],
            "Major (b9)": [0, 1, 4, 7]
        },
        "Diatonic to Harmonic Minor (4-17) Major (#9)": {
            "Major (#9), Minor (b11)": [0, 3, 4, 7],
            "bb7/b4/b2 Mixed Quadrad, 6/3/b2 Mixed Quadrad": [0, 1, 4, 9],
            "Minor Major 7 no 5 (b13), Augmented Major 7 sus#2, Minor Major 7 #5": [0, 3, 8, 11],
            "Augmented sus4 (13)": [0, 5, 8, 9]
        },
        "Diatonic to Harmonic Minor (4-18M) Minor (#11)": {
            "Minor (#11), sus#4 (#9)": [0, 3, 6, 7],
            "6/3/#2 Mixed Quadrad, Super Locrian bb7 Quartal Quadrad": [0, 3, 4, 9],
            "Diminished 7 susb2, Diminished susb2 (13)": [0, 1, 6, 9],
            "7/b6/4 Quartal Quadrad, Augmented Major 7 sus4": [0, 5, 8, 11]
        },
        "Irregular (4-2) Phrygian bb3 b4 Tetrachord": {
            "Phrygian bb3 b4 Tetrachord": [0, 1, 2, 4],
            "Minor Major 7 no5 (b9)": [0, 1, 3, 11],
            "Major 7 sus2 no5 (#13)": [0, 2, 10, 11],
            "b7/6/#5 Quadrad Cluster": [0, 8, 9, 10]
        },
        "Irregular (4-5) Diminished sus2 (b9)*": {
            "Diminished sus2 (b9)*": [0, 1, 2, 6],
            "7/4/b2 Mixed Quadrad": [0, 1, 5, 11],
            "Major 7 no 5 (#13)": [0, 4, 10, 11],
            "sus#4 (b13)": [0, 6, 7, 8]
        },
        "Irregular (4-5M) Diminished nat3 (11)": {
            "b6/bb3/b2 Mixed Quadrad": [0, 1, 2, 8],
            "Major 7 susb2": [0, 1, 7, 11],
            "7/#6/#4 Mixed Quadrad": [0, 6, 10, 11],
            "Diminished nat3 (11)": [0, 4, 5, 6]
        },
        "Irregular (4-2M) Minor b4 Tetrachord": {
            "7/bb3/b2 Quadrad Cluster": [0, 1, 2, 10],
            "7/6/b2 Quadrad Cluster": [0, 1, 9, 11],
            "7/#6/#5 Quadrad Cluster": [0, 8, 10, 11],
            "Minor b4 Tetrachord": [0, 2, 3, 4]
        },
        "Irregular (4-1) Chromatic Tetrachord": {
            "Chromatic Tetrachord": [0, 1, 2, 3],
            "Major 7 sus2 (b9)": [0, 1, 2, 11],
            "7/#6/b2 Quadrad Cluster": [0, 1, 10, 11],
            "Inverted Chromatic Tetrachord": [0, 9, 10, 11]
        },
        "Irregular (4-4) Phrygian bb3 Tetrachord": {
            "Phrygian bb3 Tetrachord": [0, 1, 2, 5],
            "Major 7 no 5 (b9)": [0, 1, 4, 11],
            "Minor Major 7 no 5 (#13)": [0, 3, 10, 11],
            "bb7/b6/5 Quadrad Cluster": [0, 7, 8, 9]
        },
        "Irregular (4-6) sus4 (#11)": {
            "sus2 (b9)*": [0, 1, 2, 7],
            "Diminished Major 7 susb2": [0, 1, 6, 11],
            "7/#6/4 Mixed Quadrad": [0, 5, 10, 11],
            "sus4 (#11)*, 'Dream Chord'": [0, 5, 6, 7]
        },
        "Irregular (4-4M) Ionian #2 Tetrachord": {
            "bb7/bb3/b2 Quadrad Cluster": [0, 1, 2, 9],
            "Augmented Major 7 susb2": [0, 1, 8, 11],
            "Major 7 no3 (#13)": [0, 7, 10, 11],
            "Ionian #2 Tetrachord": [0, 3, 4, 5]
        },
        "Irregular (4-9S) Diminished Major 7 sus4": {
            "sus#4 (b9)": [0, 1, 6, 7],
            "Diminished Major 7 sus4": [0, 5, 6, 11]
        }
    },
    pentads: {
        "Diatonic Secundal (5-Z12) Locrian Pentachord": {
            "Locrian Pentachord, Diminished (b9 11)": [0, 1, 3, 5, 6],
            "Major 7 no5 (9 11)": [0, 2, 4, 5, 11],
            "Minor 7 no5 (9, 13)": [0, 2, 3, 9, 10],
            "7 susb2 (b13)": [0, 1, 7, 8, 10],
            "Major 7 sus#4 (13)": [0, 6, 7, 9, 11]
        },
        "Diatonic Secundal (5-23) Minor Pentachord": {
            "Minor Pentachord, Minor (9 11)": [0, 2, 3, 5, 7],
            "Minor 7 no5 (b9 11)": [0, 1, 3, 5, 10],
            "Major 7 no5 (9 13)": [0, 2, 4, 9, 11],
            "7 sus2 (13)": [0, 2, 7, 9, 10],
            "7 sus4 (b13)": [0, 5, 7, 8, 10]
        },
        "Diatonic Secundal (5-23M) Major Pentachord": {
            "Major Pentachord, Major (9 11)": [0, 2, 4, 5, 7],
            "Minor 7 no5 (9 11)": [0, 2, 3, 5, 10],
            "Minor 7 no5 (b9 b13)": [0, 1, 3, 8, 10],
            "Major 7 sus2 (13)": [0, 2, 7, 9, 11],
            "7 sus4 (13)": [0, 5, 7, 9, 10]
        },
        "Diatonic Secundal (5-24) Phrygian Pentachord": {
            "Phrygian Pentachord, Minor (b9 11)": [0, 1, 3, 5, 7],
            "Major 7 no5 (9 #11)": [0, 2, 4, 6, 11],
            "7 no 5 (9 13)": [0, 2, 4, 9, 10],
            "7 sus2 (b13)": [0, 2, 7, 8, 10],
            "Half-Diminished sus4 (b13)": [0, 5, 6, 8, 10]
        },
        "Diatonic Secundal (5-24M) Lydian Pentachord": {
            "Lydian Pentachord, Major (9 #11)": [0, 2, 4, 6, 7],
            "7 no5 (9 11)": [0, 2, 4, 5, 10],
            "Minor 7 no5 (9 b13)": [0, 2, 3, 8, 10],
            "Half-Diminished susb2 (b13)": [0, 1, 6, 8, 10],
            "Major 7 sus4 (13)": [0, 5, 7, 9, 11]
        },
        "Diatonic Tertial (5-25) Half-Diminished (b9)": {
            "Minor Tetrachord (b13)": [0, 2, 3, 5, 8],
            "Half-Diminished (b9)": [0, 1, 3, 6, 10],
            "Ionian Quartal Triad ( 9 13 )": [0, 2, 5, 9, 11],
            "Minor 7 (b13)": [0, 3, 7, 9, 10],
            "Major ( #11 13 ), Major 6 (#11)": [0, 4, 6, 7, 9]
        },
        "Diatonic Tertial (5-25M) Minor 7 (b9)": {
            "Diminished ( 11 b13 )": [0, 3, 5, 6, 8],
            "Minor Tetrachord (13)": [0, 2, 3, 5, 9],
            "Minor 7 (b9)": [0, 1, 3, 7, 10],
            "Lydian Quartal Triad ( 9 13 )": [0, 2, 6, 9, 11],
            "Dominant 7 (13)": [0, 4, 7, 9, 10]
        },
        "Diatonic Tertial (5-27) Major 7 (9)": {
            "Phrygian Tetrachord (b13)": [0, 1, 3, 5, 8],
            "Major 7 (9)": [0, 2, 4, 7, 11],
            "Perfect Quartal Triad ( 9 13 )": [0, 2, 5, 9, 10],
            "Minor 7 (b13)": [0, 3, 7, 8, 10],
            "Major (11 13)": [0, 4, 5, 7, 9]
        },
        "Diatonic Tertial (5-27M) Minor 7 (9)": {
            "Minor (11 b13)": [0, 3, 5, 7, 8],
            "Major Tetrachord (13)": [0, 2, 4, 5, 9],
            "Minor 7 (9)": [0, 2, 3, 7, 10],
            "Perfect Quartal Triad ( b9 b13 )": [0, 1, 5, 8, 10],
            "Major 7 (13)": [0, 4, 7, 9, 11]
        },
        "Diatonic Tertial (5-34) Dominant 7 (9)": {
            "Lydian Tetrachord (13)": [0, 2, 4, 6, 9],
            "Dominant 7 (9)": [0, 2, 4, 7, 10],
            "Perfect Quartal Triad ( 9 b13 )": [0, 2, 5, 8, 10],
            "Half-Diminished (b13)": [0, 3, 6, 8, 10],
            "Minor (11 13)": [0, 3, 5, 7, 9]
        },
        "Diatonic Quartal (5-29) Dorian Quartal Pentad": {
            "Diminished ( b9 b13 )": [0, 1, 3, 6, 8],
            "Major 7 sus2 sus4": [0, 2, 5, 7, 11],
            "Dorian Quartal Pentad, Minor 7 no5 (11 b13)": [0, 3, 5, 9, 10],
            "6 sus2 sus#4": [0, 2, 6, 7, 9],
            "Dominant 7 (11)": [0, 4, 5, 7, 10]
        },
        "Diatonic Quartal (5-29M) Lydian Quartal Pentad": {
            "sus2 sus4 (b13)": [0, 2, 5, 7, 8],
            "Half-Diminished (11)": [0, 3, 5, 6, 10],
            "Kumoi, Minor (9 13)": [0, 2, 3, 7, 9],
            "Insen, 7 susb2 sus4": [0, 1, 5, 7, 10],
            "Lydian Quartal Pentad, Major 7 no5 ( #11 13 )": [0, 4, 6, 9, 11]
        },
        "Diatonic Quartal (5-20) Mixolydian Quartal Pentad": {
            "Minor (b9 b13)": [0, 1, 3, 7, 8],
            "Major 7 sus2 sus#4": [0, 2, 6, 7, 11],
            "Mixolydian Quartal Pentad, Dominant 7 no5 (11 13)": [0, 4, 5, 9, 10],
            "Diminished  susb2 sus4 (b13)": [0, 1, 5, 6, 8],
            "Major 7 (11)": [0, 4, 5, 7, 11]
        },
        "Diatonic Quartal (5-20M) Ionian Quartal Pentad": {
            "susb2 sus4 (b13)": [0, 1, 5, 7, 8],
            "Major 7 (#11)": [0, 4, 6, 7, 11],
            "Hirajoshi, Minor (9 b13)": [0, 2, 3, 7, 8],
            "Iwato, Half-Diminished susb2 sus4": [0, 1, 5, 6, 10],
            "Ionian Quartal Pentad, Major 7 no5 ( 11 13 )": [0, 4, 5, 9, 11]
        },
        "Diatonic Quartal (5-35) Major/Minor Pentatonic": {
            "Major Pentatonic, Major (9 13)": [0, 2, 4, 7, 9],
            "7 sus2 sus4": [0, 2, 5, 7, 10],
            "Minor Quartal Pentad, Minor 7 no 5 (11 b13)": [0, 3, 5, 8, 10],
            "6 sus2 sus4": [0, 2, 5, 7, 9],
            "Minor Pentatonic, Minor 7 (11)": [0, 3, 5, 7, 10]
        },
        "Diatonic to Melodic Minor (5-33) Lydian Augmented Pentachord": {
            "Whole Tone Pentachord, Lydian Augmented Pentachord": [0, 2, 4, 6, 8],
            "Dominant 7 b5 (9)": [0, 2, 4, 6, 10],
            "Augmented 7 (9)": [0, 2, 4, 8, 10],
            "Augmented 7 sus2 (#11), Dominant 7 b5 sus2 (b13)": [0, 2, 6, 8, 10],
            "Augmented 7 (#11), Dominant7 b5 (b13) ": [0, 4, 6, 8, 10]
        },
        "Diatonic to Melodic Minor (5-30M) Augmented Major 7 (#11)": {
            "Major (9 b13)": [0, 2, 4, 7, 8],
            "Half-Diminished sus2 sus4": [0, 2, 5, 6, 10],
            "Augmented 7 (#9), Super Locrian Quartal Pentad, Minor 7 no5 (b11 b13)": [0, 3, 4, 8, 10],
            "susb2 sus4 (b13)": [0, 1, 5, 7, 9],
            "Augmented Major 7 (#11)": [0, 4, 6, 8, 11]
        },
        "Diatonic to Melodic Minor (5-28M) Dominant 7 b5 (#9)": {
            "Diminished sus2 sus4 (b13)": [0, 2, 5, 6, 8],
            "Dominant 7 b5 (#9), Half-Diminished (b11)": [0, 3, 4, 6, 10],
            "Minor 6 (b9)": [0, 1, 3, 7, 9],
            "Augmented Major 7 sus2 sus#4": [0, 2, 6, 8, 11],
            "Dominant 7 no5 ( #11 13 )": [0, 4, 6, 9, 10]
        },
        "Diatonic to Melodic Minor (5-28) Dominant 7 (#11)": {
            "Diminished (9 b13)": [0, 2, 3, 6, 8],
            "Dominant 7 b5 (b9), Half-Diminished susb2 susb4": [0, 1, 4, 6, 10],
            "Melodic Minor Quartal Pentad, Minor Major 7 no5 ( 11 13 )": [0, 3, 5, 9, 11],
            "Augmented 6 sus2 sus#4": [0, 2, 6, 8, 9],
            "Dominant 7 (#11)": [0, 4, 6, 7, 10]
        },
        "Diatonic to Melodic Minor (5-10M) Locrian nat2 Pentachord": {
            "Locrian nat2 Pentachord": [0, 2, 3, 5, 6],
            "Minor 7 no5 (b9 b11)": [0, 1, 3, 4, 10],
            "Minor Major 7 no5 (9 13)": [0, 2, 3, 9, 11],
            "7 susb2 (13)": [0, 1, 7, 9, 10],
            "Augmented Major 7 sus#4 (13)": [0, 6, 8, 9, 11]
        },
        "Diatonic to Harmonic Minor(5-32) Minor 7 (#11)": {
            "Diminished 7 susb2 susb4": [0, 1, 4, 6, 9],
            "Harmonic Minor Quartal Pentad, Minor Major 7 no5 ( 11 b13 )": [0, 3, 5, 8, 11],
            "Augmented 6 sus2 sus4": [0, 2, 5, 8, 9],
            "Minor 7 (#11)": [0, 3, 6, 7, 10],
            "Major 6 (#9)": [0, 3, 4, 7, 9]
        },
        "Diatonic to Harmonic Minor(5-31M) Dominant 7 (b9)": {
            "Diminished 7 (9), Minor #4 Tetrachord (13)": [0, 2, 3, 6, 9],
            "Dominant 7 (b9)": [0, 1, 4, 7, 10],
            "Diminished Major 7 (13), Lydian Quartal Trichord ( #9 13 )": [0, 3, 6, 9, 11],
            "Diminished 7 (b13)": [0, 3, 6, 8, 9],
            "Diminished (11 13), Diminished 7 (11)": [0, 3, 5, 6, 9]
        },
        "Diatonic to Harmonic Minor(5-31) Diminished 7 (b9)": {
            "Diminished 7 (b9)": [0, 1, 3, 6, 9],
            "Augmented Major 7 sus2 sus4": [0, 2, 5, 8, 11],
            "Half-Diminished 7 (13)": [0, 3, 6, 9, 10],
            "Minor 6 (#11)": [0, 3, 6, 7, 9],
            "Lydian #2 Tetrachord (13)": [0, 3, 4, 6, 9]
        },
        "Diatonic to Harmonic Minor(5-22) Augmented Major 7 (11)": {
            "Major ( b9 b13 )": [0, 1, 4, 7, 8],
            "Minor Major 7 (#11), Major 7 sus#2 sus#4": [0, 3, 6, 7, 11],
            "Augmented (#9 13), Diminished 7 no5 ( b11 b13 ), Super Locrian bb7 Quartal Pentad": [0, 3, 4, 8, 9],
            "Diminished 7 susb2 sus4, Diminished susb2 sus4 (13)": [0, 1, 5, 6, 9],
            "Augmented Major 7 (11), Harmonic Major Quartal Pentad": [0, 4, 5, 8, 11]
        },
        "Diatonic to Harmonic Minor(5-21) Major 7 (#9)": {
            "Augmented (b9 11), Phrygian Major Tetrachord (b13)": [0, 1, 4, 5, 8],
            "Major 7 (#9), Minor 7 (b11)": [0, 3, 4, 7, 11],
            "Super Locrian bb7 Quartal Triad (b9 b13), Augmented 6 (b9)": [0, 1, 4, 8, 9],
            "Minor Major 7 (b13)": [0, 3, 7, 8, 11],
            "Augmented 6 (11)": [0, 4, 5, 8, 9]
        },
        "Diatonic to Harmonic Minor(5-X18) Phrygian Major Pentachord": {
            "Phrygian Major Pentachord": [0, 1, 4, 5, 7],
            "Major 7 no5 (#9 #11)": [0, 3, 4, 6, 11],
            "Diminished 7 no5 (b9 b13)": [0, 1, 3, 8, 9],
            "Major 7 sus2 (b13)": [0, 2, 7, 8, 11],
            "Half-Diminished sus4 (13)": [0, 5, 6, 9, 10]
        },
        "Diatonic to Harmonic Minor(5-16M) Lydian #2 Pentachord": {
            "Lydian #2 Pentachord": [0, 3, 4, 6, 7],
            "Diminished 7 no5 (b9 b11)": [0, 1, 3, 4, 9],
            "Minor Major 7 no5 (9 b13)": [0, 2, 3, 8, 11],
            "Half-Diminished susb2 (13)": [0, 1, 6, 9, 10],
            "Augmented Major 7 sus4 (13)": [0, 5, 8, 9, 11]
        },
        "Diatonic to Harmonic Major(5-16) Phrygian b4 Pentachord": {
            "Phrygian b4 Pentachord": [0, 1, 3, 4, 7],
            "Diminished Major 7 (9)": [0, 2, 3, 6, 11],
            "Dominant 7 no 5 (b9 13)": [0, 1, 4, 9, 10],
            "Augmented Major 7 sus#2 (13)": [0, 3, 8, 9, 11],
            "Diminished 7 sus4 (b13)": [0, 5, 6, 8, 9]
        },
        "Diatonic to Harmonic Major(5-32M) Dominant 7 (#9)": {
            "Major 6 (b9), 'Elektra Chord'": [0, 1, 4, 7, 9],
            "Diminished Major 7 (b13)": [0, 3, 6, 8, 11],
            "Super Locrian bb7 Quartal Pentad": [0, 3, 5, 8, 9],
            "Diminished 7 sus2 sus4, Diminished sus2 sus4 (13)": [0, 2, 5, 6, 9],
            "Dominant 7 (#9), Minor 7 (b11)": [0, 3, 4, 7, 10]
        },
        "Diatonic to Harmonic Major(5-21M) Augmented Major 7 (#9)": {
            "Major (#9 b13), Minor ( b11 b13 )": [0, 3, 4, 7, 8],
            "Phrygian Major Tetrachord (13)": [0, 1, 4, 5, 9],
            "Augmented Major 7 (#9)": [0, 3, 4, 8, 11],
            "Augmented 6 susb2 sus4": [0, 1, 5, 8, 9],
            "Major 7 (b13)": [0, 4, 7, 8, 11]
        },
        "Diatonic to Harmonic Major(5-X18M) Minor #4 Tetrachord": {
            "Minor #4 Tetrachord": [0, 2, 3, 6, 7],
            "Mixolydian Quartal Triad (b9 11)": [0, 1, 4, 5, 10],
            "Major 7 no5 (#9 13)": [0, 3, 4, 9, 11],
            "Diminished 7 susb2 (b13)": [0, 1, 6, 8, 9],
            "Major 7 sus4 (b13)": [0, 5, 7, 8, 11]
        },
        "Diatonic to Double Harmonic (5-Y18M) Minor (#11 b13)": {
            "Minor (#11 b13)": [0, 3, 6, 7, 8],
            "Ionian #2 Tetrachord (13)": [0, 3, 4, 5, 9],
            "Diminished 7 bb3 (b9)": [0, 1, 2, 6, 9],
            "Ionian Quartal Triad (b9 b13), Augmented Major 7 susb2 sus4": [0, 1, 5, 8, 11],
            "Major 7 no5 (#13)": [0, 4, 7, 10, 11]
        },
        "Diatonic to Double Harmonic (5-Y18) Major 7 (b9)": {
            "Phrygian bb3 Tetrachord (b13)": [0, 1, 2, 5, 8],
            "Major 7 (b9)": [0, 1, 4, 7, 11],
            "Lydian Quartal Triad (#9 #13)": [0, 3, 6, 10, 11],
            "Minor bb7 (b13)": [0, 3, 7, 8, 9],
            "Major b5 (11 13)": [0, 4, 5, 6, 9]
        },
        "Diatonic to Double Harmonic (5-15) Dominant 7 b5 (11)": {
            "Diminished bb3 (b9 b13)": [0, 1, 2, 6, 8],
            "Major 7 susb2 sus4": [0, 1, 5, 7, 11],
            "Major 7 no5 (#11 #13), Lydian #6 Quartal Pentad": [0, 4, 6, 10, 11],
            "sus2 sus#4 (b13)": [0, 2, 6, 7, 8],
            "Dominant 7 b5 (11)": [0, 4, 5, 6, 10]
        },
        "Diatonic to Double Harmonic (5-6M) Locrian nat3 Pentachord": {
            "Locrian nat3 Pentachord": [0, 1, 4, 5, 6],
            "Major 7 no5 (#9 11)": [0, 3, 4, 5, 11],
            "Diminished bb3 no5 (b9 b13)": [0, 1, 2, 8, 9],
            "Major 7 susb2 (b13)": [0, 1, 7, 8, 11],
            "Major 7 sus#4 (#13)": [0, 6, 7, 10, 11]
        },
        "Diatonic to Double Harmonic (5-6) Locrian bb3 Pentachord": {
            "Locrian bb3 Pentachord": [0, 1, 2, 5, 6],
            "Major 7 no5 (b9 11)": [0, 1, 4, 5, 11],
            "Major 7 no5 (#9 #13)": [0, 3, 4, 10, 11],
            "Minor susb2 bb7 (b13)": [0, 1, 7, 8, 9],
            "Major 7 sus#4 (b13) ": [0, 6, 7, 8, 11]
        },
        "Diatonic to Harmonic and Melodic Minor (5-30) Minor Major 7 (11)": {
            "Diminished susb2 susb4 (b13)": [0, 1, 4, 6, 8],
            "Minor Major 7 (11)": [0, 3, 5, 7, 11],
            "Augmented ( 9 13 )": [0, 2, 4, 8, 9],
            "7 sus2 sus#4": [0, 2, 6, 7, 10],
            "Mixolydian b6 Quartal Pentad, Dominant 7 no5 ( 11 b13 )": [0, 4, 5, 8, 10]
        },
        "Diatonic to Harmonic and Melodic Minor (5-26M) Dominant 7 (b13)": {
            "Augmented (#9 #11), Diminished (b11 b13)": [0, 3, 4, 6, 8],
            "Phrygian Tetrachord (13)": [0, 1, 3, 5, 9],
            "Augmented Major 7 (9)": [0, 2, 4, 8, 11],
            "Lydian b7 Quartal triad ( 9 13 )": [0, 2, 6, 9, 10],
            "Dominant 7 (b13)": [0, 4, 7, 8, 10]
        },
        "Diatonic to Harmonic and Melodic Minor (5-Z17) Minor Major 7 (9)": {
            "Super Locrian Tetrachord (b13)": [0, 1, 3, 4, 8],
            "Minor Major 7 (9)": [0, 2, 3, 7, 11],
            "Mixolydian Quartal Triad (b9 13)": [0, 1, 5, 9, 10],
            "Augmented Major 7 (13), 'Farben Chord'": [0, 4, 8, 9, 11],
            "Major (11 b13)": [0, 4, 5, 7, 8]
        },
        "Diatonic to Harmonic and Melodic Minor (5-26) Major (#11 b13 )": {
            "Major Tetrachord (b13)": [0, 2, 4, 5, 8],
            "Half-Diminished (9)": [0, 2, 3, 6, 10],
            "Augmented 7 (b9), Dominant 7 no5 (b9 b13)": [0, 1, 4, 8, 10],
            "Minor Major 7 (13)": [0, 3, 7, 9, 11],
            "Diminished 7 susb4 (b13)": [0, 4, 6, 8, 9]
        },
        "Diatonic to Harmonic and Melodic Minor (5-10) Locrian b4 Pentachord": {
            "Locrian b4 Pentachord": [0, 1, 3, 4, 6],
            "Minor Major 7 (9 11)": [0, 2, 3, 5, 11],
            "Minor 7 (b9 13)": [0, 1, 3, 9, 10],
            "Augmented Major 7 sus2 (13)": [0, 2, 8, 9, 11],
            "7 sus#4 (13)": [0, 6, 7, 9, 10]
        },
        "Irregular (5-19M) Major (b9 #11)": {
            "Major (b9 #11)": [0, 1, 4, 6, 7],
            "Diminished Major 7 (11)": [0, 3, 5, 6, 11],
            "Diminished 7 no5 (9 b13)": [0, 2, 3, 8, 9],
            "7 susb2 sus#4": [0, 1, 6, 7, 10],
            "Diminished Major 7 sus4 (13)": [0, 5, 6, 9, 11]
        },
        "Irregular (5-19) Phrygian #4 Pentachord": {
            "Phrygian #4 Pentachord": [0, 1, 3, 6, 7],
            "Diminished Major 7 sus2 sus4": [0, 2, 5, 6, 11],
            "Dominant 7 no5 (#9 13)": [0, 3, 4, 9, 10],
            "6 susb2 sus#4": [0, 1, 6, 7, 9],
            "Diminished Major 7 sus4 (b13)": [0, 5, 6, 8, 11]
        },
        "Irregular (5-14M) Lydian #3 Pentachord": {
            "Lydian #3 Pentachord": [0, 2, 5, 6, 7],
            "Dominant 7 no5 (#9 11)": [0, 3, 4, 5, 10],
            "Minor 6 bb3 (b9) ": [0, 1, 2, 7, 9],
            "Augmented Major 7 susb2 sus#4, Lydian Quartal Triad (b9 b13)": [0, 1, 6, 8, 11],
            "Major 7 sus4 (#13)": [0, 5, 7, 10, 11]
        },
        "Irregular (5-14) Phrygian bb3 Pentachord": {
            "Phrygian bb3 Pentachord": [0, 1, 2, 5, 7],
            "Major 7 b5 (b9)": [0, 1, 4, 6, 11],
            "Minor Major 7 no5 (11 #13)": [0, 3, 5, 10, 11],
            "sus2 bb7 (b13)": [0, 2, 7, 8, 9],
            "Half-Diminished sus4 (b13)": [0, 5, 6, 7, 10]
        },
        "Irregular (5-13M) Major (#11 b13)": {
            "Minor b4 Tetrachord (b13)": [0, 2, 3, 4, 8],
            "Half-Diminished bb3 (b9)": [0, 1, 2, 6, 10],
            "Ionian Quartal Triad (b9 13)": [0, 1, 5, 9, 11],
            "Augmented Major 7 (#13)": [0, 4, 8, 10, 11],
            "Major (#11 b13)": [0, 4, 6, 7, 8]
        },
        "Irregular (5-13) Minor Major 7 (b9)": {
            "Phrygian bb3 b4 Tetrachord (b13)": [0, 1, 2, 4, 8],
            "Minor Major 7 (b9)": [0, 1, 3, 7, 11],
            "Lydian Quartal Triad (9 #13)": [0, 2, 6, 10, 11],
            "Augmented 7 (13)": [0, 4, 8, 9, 10],
            "Major b5 (11 b13)": [0, 4, 5, 6, 8]
        },
        "Irregular (5-17) Augmented Major 7 (b9)": {
            "Augmented (#9 11), Augmented #2 Pentachord, Major #2 Pentachord (b13)": [0, 3, 4, 5, 8],
            "Phrygian bb3 Tetrachord (13)": [0, 1, 2, 5, 9],
            "Augmented Major 7 (b9)": [0, 1, 4, 8, 11],
            "Minor Major 7 (#13)": [0, 3, 7, 10, 11],
            "Major bb7 (b13)": [0, 4, 7, 8, 9]
        },
        "Irregular (5-12M) Lydian #2 #3 Pentachord": {
            "Lydian #2 #3 Pentachord": [0, 3, 5, 6, 7],
            "Minor b4 Tetrachord (13), Diminished 7 no5 (9 b11) ": [0, 2, 3, 4, 9],
            "Minor 7 bb3 (b9)": [0, 1, 2, 7, 10],
            "Lydian Quartal Triad (b9 13) ": [0, 1, 6, 9, 11],
            "Augmented Major 7 sus4 (#13)": [0, 5, 8, 10, 11]
        },
        "Irregular (5-12) Phrygian bb3 b4": {
            "Phrygian bb3 b4 Pentachord": [0, 1, 2, 4, 7],
            "Diminished Major 7 (b9)": [0, 1, 3, 6, 11],
            "Ionian Quartal Triad (9 #13)": [0, 2, 5, 10, 11],
            "Augmented 7 sus#2 (13)": [0, 3, 8, 9, 10],
            "Diminished 7 sus4 (bb13),  Major #3 (#11 13)": [0, 5, 6, 7, 9]
        },
        "Irregular (5-11M) Major #2 Pentachord": {
            "Major #2 Pentachord": [0, 3, 4, 5, 7],
            "Ionian": [0, 1, 2, 4, 9],
            "Minor Major 7 no5 (b9 b13)": [0, 1, 3, 8, 11],
            "Major 7 sus2 (#13)": [0, 2, 7, 10, 11],
            "Augmented 7 sus4 (13)": [0, 5, 8, 9, 10]
        },
        "Irregular (5-11) Minor b4 Pentachord": {
            "Minor b4 Pentachord": [0, 2, 3, 4, 7],
            "Minor 7 bb3 no5 (b9 11)": [0, 1, 2, 5, 10],
            "Major 7 no5 (b9 13)": [0, 1, 4, 9, 11],
            "Augmented Major 7 sus#2 (#13)": [0, 3, 8, 10, 11],
            "sus4 bb7 (b13)": [0, 5, 7, 8, 9]
        },
        "Irregular (5-9M) Major b5 Pentachord": {
            "Major b5 Pentachord": [0, 2, 4, 5, 6],
            "Minor 7 no5 (9 11)": [0, 2, 3, 4, 10],
            "Minor 7 bb3 no5 (b9 b13)": [0, 1, 2, 8, 10],
            "Major 7 susb2 (13)": [0, 1, 7, 9, 11],
            "Augmented Major 7 sus#4 (#13)": [0, 6, 8, 10, 11]
        },
        "Irregular (5-9) Locrian bb3 b4 Pentachord": {
            "Locrian bb3 b4 Pentachord": [0, 1, 2, 4, 6],
            "Minor Major 7 no5 (b9 11)": [0, 1, 3, 5, 11],
            "Major 7 no5 (9 #13)": [0, 2, 4, 10, 11],
            "Augmented 7 sus2 (13)": [0, 2, 8, 9, 10],
            "7 sus#4 (b13)": [0, 6, 7, 8, 10]
        },
        "Irregular (5-8) Locrian nat2 b4 Pentachord": {
            "Locrian nat2 b4 Pentachord": [0, 2, 3, 4, 6],
            "Minor 7 bb3 no5 (b9 b11)": [0, 1, 2, 4, 10],
            "Minor Major 7 no 5 (b9 13)": [0, 1, 3, 9, 11],
            "Augmented Major 7 sus2 (#13)": [0, 2, 8, 10, 11],
            "Augmented 7 sus#4 (13)": [0, 6, 8, 9, 10]
        },
        "Irregular (5-7M) Major 7 b5 (11)": {
            "Lydian b2 #3 Tetrachord": [0, 1, 5, 6, 7],
            "Major 7 b5 (11)": [0, 4, 5, 6, 11],
            "Minor bb3 (b9 b13)": [0, 1, 2, 7, 8],
            "Major 7 susb2 sus#4": [0, 1, 6, 7, 11],
            "Diminished Major 7 sus4 (#13)": [0, 5, 6, 10, 11]
        },
        "Irregular (5-7) bb3 #4 Pentachord": {
            "bb3 #4 Pentachord": [0, 1, 2, 6, 7],
            "Diminished Major 7 susb2 sus4": [0, 1, 5, 6, 11],
            "Ionian #6 Quartal Pentad, Major 7 no5 (11 #13)": [0, 4, 5, 10, 11],
            "susb2 sus#4 (b13)": [0, 1, 6, 7, 8],
            "Major 7 #3 (#11)": [0, 5, 6, 7, 11]
        },
        "Irregular (5-5M) Lydian ##2 #3 Pentachord": {
            "Lydian ##2 #3 Pentachord": [0, 4, 5, 6, 7],
            "bb4 Tetrachord (b13)": [0, 1, 2, 3, 8],
            "Minor Major 7 bb3 (b9)": [0, 1, 2, 7, 11],
            "Lydian Quartal Triad (b9 #13)": [0, 1, 6, 10, 11],
            "Major 7 ##5 sus4 (#13)": [0, 5, 9, 10, 11]
        },
        "Irregular (5-5) Phrygian bb3 bb4 Pentachord": {
            "Phrygian bb3 bb4 Pentachord": [0, 1, 2, 3, 7],
            "Diminished Major 7 bb3 (b9)": [0, 1, 2, 6, 11],
            "Ionian Quartal Triad (b9 #13)": [0, 1, 5, 10, 11],
            "Major 7 ##5 (#13)": [0, 4, 9, 10, 11],
            "Aeolian": [0, 5, 6, 7, 8]
        },
        "Irregular (5-4M) Major #2 b5 Pentachord": {
            "Major #2 b5 Pentachord": [0, 3, 4, 5, 6],
            "Diminished 7 bb3 no5 (b9 bb11) ": [0, 1, 2, 3, 9],
            "Augmented Major 7 bb3 (b9)": [0, 1, 2, 8, 11],
            "Major 7 susb2 (#13)": [0, 1, 7, 10, 11],
            "Major 7 ##5 sus#4 (#13)": [0, 6, 9, 10, 11]
        },
        "Irregular (5-4) Locrian bb3 bb4 Pentachord": {
            "Locrian bb3 bb4 Pentachord": [0, 1, 2, 3, 6],
            "Minor Major 7 bb3 no 5 (b9 11)": [0, 1, 2, 5, 11],
            "Major 7 no5 (b9 #13)": [0, 1, 4, 10, 11],
            "Minor Major 7 ##5 (#13)": [0, 3, 9, 10, 11],
            "sus#4 bb7 (b13)": [0, 6, 7, 8, 9]
        },
        "Irregular (5-3M) Phrygian b4 bb5 Pentachord": {
            "Phrygian b4 bb5 Pentachord": [0, 1, 3, 4, 5],
            "Minor Major 7 no 5 (9 b11)": [0, 2, 3, 4, 11],
            "Minor 7 bb3 no 5 (b9 13)": [0, 1, 2, 9, 10],
            "Augmented Major 7 susb2 (13)": [0, 1, 8, 9, 11],
            "Augmented Major 7 sus ##4 (#13)": [0, 7, 8, 10, 11]
        },
        "Irregular (5-3) Locrian bb3 b4 bb5 Pentachord": {
            "Locrian bb3 b4 bb5 Pentachord": [0, 1, 2, 4, 5],
            "Minor Major 7 no5 (b9 b11)": [0, 1, 3, 4, 11],
            "Minor Major 7 no5 (9 #13)": [0, 2, 3, 10, 11],
            "Augmented 7 susb2 (13)": [0, 1, 8, 9, 10],
            "Augmented Major 7 sus ##4 (13)": [0, 7, 8, 9, 11]
        },
        "Irregular (5-2M) Minor b4 bb5 Pentachord": {
            "Minor b4 bb5 Pentachord": [0, 2, 3, 4, 5],
            "Minor 7 bb3 no5 (b9 bb11)": [0, 1, 2, 3, 10],
            "Minor bb3 Major 7 (b9 13)": [0, 1, 2, 9, 11],
            "Augmented Major 7 susb2 (#13)": [0, 1, 8, 10, 11],
            "Phrygian nat3, Phrygian Dominant": [0, 7, 9, 10, 11]
        },
        "Irregular (5-2) Locrian bb3 bb4 bb5 Pentachord": {
            "Locrian bb3 bb4 bb5 Pentachord": [0, 1, 2, 3, 5],
            "Minor bb3 Major 7 no5 (b9 b11)": [0, 1, 2, 4, 11],
            "Minor Major 7 no5 (b9 #13)": [0, 1, 3, 10, 11],
            "Augmented Major 7 ##5 sus2": [0, 2, 9, 10, 11],
            "Augmented 7 sus##4 (13)": [0, 7, 8, 9, 10]
        },
        "Irregular (5-1) Chromatic Pentachord": {
            "Locrian bb3 bb4 bbb5 Pentachord": [0, 1, 2, 3, 4],
            "Minor Major 7 bb3 no5 (b9 bb11) ": [0, 1, 2, 3, 11],
            "Minor Major 7 bb3 no5 (b9 #13)": [0, 1, 2, 10, 11],
            "Augmented Major 7 ##5 susb2 (#13)": [0, 1, 9, 10, 11],
            "Augmented Major 7 ##5 sus##4 ": [0, 8, 9, 10, 11]
        }
    },
    hexads: {
        "(6-1) Chromatic Hexachord": {
            "Chromatic Hexachord": [0, 1, 2, 3, 4, 5],
            "Major 7 no5 (b9 9 #9)*": [0, 1, 2, 3, 4, 11],
            "Minor Major 7 no5 (b9 9 #13)*": [0, 1, 2, 3, 10, 11],
            "Major 7 sus2 no5 (b9 13 #13)*": [0, 1, 2, 9, 10, 11],
            "Augmented Major 7 sus b2 (13 #13)*": [0, 1, 8, 9, 10, 11],
            "Major 7 no3 (b13 13 #13)*": [0, 7, 8, 9, 10, 11]
        },
        "(6-2) Locrian bb3 bb4 bbb5 bbb6 Hexachord": {
            "Diminished (b9 9 b11)*": [0, 1, 2, 3, 4, 6],
            "Minor Major7 (b9 9 11)*": [0, 1, 2, 3, 5, 11],
            "Major 7 no5 (b9 9 #13)*": [0, 1, 2, 4, 10, 11],
            "Minor Major 7 no5 (b9 13 #13)*": [0, 1, 3, 9, 10, 11],
            "Augmented Major 7 sus2 (13 #13)*": [0, 2, 8, 9, 10, 11],
            "7 sus#4 (b13 13)*": [0, 6, 7, 8, 9, 10]
        },
        "(6-2M) Locrian nat2 b4 bb5 bbb6 Hexachord": {
            "Diminished (9 b11 11)*": [0, 2, 3, 4, 5, 6],
            "Dominant 7 no5 (b9 9 #9)*": [0, 1, 2, 3, 4, 10],
            "Major 7 no5 (b9 9 #9 11)*": [0, 1, 2, 3, 9, 11],
            "Major 7 no 5 (b9 9 #9 #13)*": [0, 1, 2, 8, 10, 11],
            "Minor Major 7 no5 (b9 9 13 #13)*": [0, 1, 7, 9, 10, 11],
            "Augmented 7 sus2 (b9 13)*": [0, 6, 8, 9, 10, 11]
        },
        "(6-X3) Locrian bb3 bb4 bb5 bbb6 Hexachord": {
            "Diminished (b9 9 11)*": [0, 1, 2, 3, 5, 6],
            "Major 7 no5 (b9 9 11)*": [0, 1, 2, 4, 5, 11],
            "Major 7 no5 (b9 #9 #13)*, Minor Major 7 no5 (b9 b11 #13)": [0, 1, 3, 4, 10, 11],
            "Minor Major 7 no5 (9 13 #13)*": [0, 2, 3, 9, 10, 11],
            "7 sus b2 (b13 13)*": [0, 1, 7, 8, 9, 10],
            "Major 7 sus#4 (b13 13)*": [0, 6, 7, 8, 9, 11]
        },
        "(6-X3M) Locrian b4 bb5 bbb6 Hexachord": {
            "Diminished (b9 b11 11)*": [0, 1, 3, 4, 5, 6],
            "Major 7 (9 #9 11)*": [0, 2, 3, 4, 5, 11],
            "Minor 7 no5 (b9 9 13)*": [0, 1, 2, 3, 9, 10],
            "Augmented Major 7 sus2 (b9 13)*": [0, 1, 2, 8, 9, 11],
            "Major 7 sus b2 (b13 #13)*": [0, 1, 7, 8, 10, 11],
            "Major 7 sus#4 (13 #13)*": [0, 6, 7, 9, 10, 11]
        },
        "(6-Y3) Locrian bb3 bb4 bbb5 bb6 Hexachord": {
            "Major (b9 9 #9)*": [0, 1, 2, 3, 4, 7],
            "Diminished Major 7 (b9 9)*": [0, 1, 2, 3, 6, 11],
            "Major 7 sus2 no5 (b9 11 #13)*": [0, 1, 2, 5, 10, 11],
            "Major 7 no5 (b9 13 #13)*": [0, 1, 4, 9, 10, 11],
            "Minor Major 7 #5 (13 #13)*": [0, 3, 8, 9, 10, 11],
            "sus4 (#11 b13 13)*": [0, 5, 6, 7, 8, 9]
        },
        "(6-Y3M) Ionian #2 b5 bb6 Hexachord": {
            "Major (#9 11 #11)*": [0, 3, 4, 5, 6, 7],
            "Major 6 no5 (b9 9 #9)*": [0, 1, 2, 3, 4, 9],
            "Minor Major 7 #5 (b9 9)*": [0, 1, 2, 3, 8, 11],
            "Major 7 sus2 (b9 #13)*": [0, 1, 2, 7, 10, 11],
            "Diminished Major 7 (b9 13 #13)*": [0, 1, 6, 9, 10, 11],
            "Augmented Major 7 sus4 (13 #13)*": [0, 5, 8, 9, 10, 11]
        },
        "(6-4) Locrian bb3 bb4 bb5 Hexachord": {
            "Augmented (b9 9 #9)*": [0, 1, 2, 3, 4, 8],
            "Minor Major 7 (b9 9)": [0, 1, 2, 3, 7, 11],
            "Diminished Major 7 sus2 (b9 #13)*": [0, 1, 2, 6, 10, 11],
            "Major 7 sus4 no5 (b9 13 #13)*": [0, 1, 5, 9, 10, 11],
            "Augmented Major 7 (13 #13)*": [0, 4, 8, 9, 10, 11],
            "Major (11 #11 b13)": [0, 4, 5, 6, 7, 8]
        },
        "(6-Z4) Locrian bb3 b4 bb5 bb6 Hexachord": {
            "Major b5 (b9 9 11)*": [0, 1, 2, 4, 5, 6],
            "Major 7 no5 (b9 #9 11)*": [0, 1, 3, 4, 5, 11],
            "Major 7 no5 (9 #9 #13)*": [0, 2, 3, 4, 10, 11],
            "Augmented 7 sus2 (b9 13)": [0, 1, 2, 8, 9, 10],
            "Major 7 sus b2 (b13 13)*": [0, 1, 7, 8, 9, 11],
            "Major 7 sus#4 (b13 #13)*": [0, 6, 7, 8, 10, 11]
        },
        "(6-5) Locrian bb3 bb4 bb6 Hexachord": {
            "Minor (b9 9 #11)*": [0, 1, 2, 3, 6, 7],
            "Diminished major 7 sus2 (b9 11)*": [0, 1, 2, 5, 6, 11],
            "Major 7 no 5 (b9 11 #13)": [0, 1, 4, 5, 10, 11],
            "Major 7 no5 (#9 13 #13)*": [0, 3, 4, 9, 10, 11],
            "sus#4 (b9 b13 13)*": [0, 1, 6, 7, 8, 9],
            "Major 7 sus4 (#11 b13)*": [0, 5, 6, 7, 8, 11]
        },
        "(6-5M) Locrian nat3 bb6 Hexachord": {
            "Major (b9 11 #11)*": [0, 1, 4, 5, 6, 7],
            "Major 7 b5 (#9 11)": [0, 3, 4, 5, 6, 11],
            "Diminished 7 no5 (b9 9 b13)": [0, 1, 2, 3, 8, 9],
            "Major 7 sus2 (b9 b13)": [0, 1, 2, 7, 8, 11],
            "Major 7 sus#4 (b9 #13)": [0, 1, 6, 7, 10, 11],
            "Diminished Major 7 sus4 (13 #13)*": [0, 5, 6, 9, 10, 11]
        },
        "(6-6) Locrian bb3 bb4 Hexachord": {
            "Minor (b9 9 b13)": [0, 1, 2, 3, 7, 8],
            "Major 7 sus2 (b9 #11)": [0, 1, 2, 6, 7, 11],
            "Diminished Major 7 sus4 (b9 #13)": [0, 1, 5, 6, 10, 11],
            "Major 7 no5 (11 13 #13)": [0, 4, 5, 9, 10, 11],
            "sus4 (b9 #11 b13)*": [0, 1, 5, 6, 7, 8],
            "Major 7 (11 #11)*": [0, 4, 5, 6, 7, 11]
        },
        "(6-Z6) Locrian bb3 bb6 Hexachord": {
            "sus4 (b9 9 #11)*": [0, 1, 2, 5, 6, 7],
            "Major 7 b5 (b9 11)": [0, 1, 4, 5, 6, 11],
            "Major 7 no5 (#9 11 #13)": [0, 3, 4, 5, 10, 11],
            "sus2 (b9 b13 13)": [0, 1, 2, 7, 8, 9],
            "Major 7 sus#4 (b9 b13)": [0, 1, 6, 7, 8, 11],
            "Major 7 sus4 (#11 #13)*": [0, 5, 6, 7, 10, 11]
        },
        "(6-7S) Phrygian bb3 #4 Hexachord": {
            "sus2 (b9 #11 b13)*": [0, 1, 2, 6, 7, 8],
            "Major 7 sus4 (b9 #11)*, Messiaen Mode 5": [0, 1, 5, 6, 7, 11],
            "Major 7 b5 (11 #13)": [0, 4, 5, 6, 10, 11]
        },
        "(6-8) Locrian nat2 b4 bb5 bb6 Hexachord": {
            "Major (9 #9 11)*": [0, 2, 3, 4, 5, 7],
            "Minor 7 no5 (b9 9 11)*": [0, 1, 2, 3, 5, 10],
            "Major 7 no5 (b9 9 13)*": [0, 1, 2, 4, 9, 11],
            "Minor Major 7 #5 (b9 #13)": [0, 1, 3, 8, 10, 11],
            "Major 7 sus2 (13 #13)*": [0, 2, 7, 9, 10, 11],
            "7 sus4 (b13 13)*": [0, 5, 7, 8, 9, 10]
        },
        "(6-9) Locrian bb3 bb4 bb5 bb6 Hexachord": {
            "Minor (b9 9 11)*": [0, 1, 2, 3, 5, 7],
            "Major 7 b5 (b9 9)*": [0, 1, 2, 4, 6, 11],
            "Minor Major 7 no5 (b9 11 #13)": [0, 1, 3, 5, 10, 11],
            "Major 7 no5 (9 13 #13)*": [0, 2, 4, 9, 10, 11],
            "7 sus2 (b13 13)*": [0, 2, 7, 8, 9, 10],
            "7 sus4 (#11 b13)*": [0, 5, 6, 7, 8, 10]
        },
        "(6-9M) Ionian b5 bb6 Hexachord": {
            "Major (9 11 #11)*": [0, 2, 4, 5, 6, 7],
            "Dominant 7 no5 (9 #9 11) ": [0, 2, 3, 4, 5, 10],
            "Minor 7 #5 (b9 9)": [0, 1, 2, 3, 8, 10],
            "Major 7 sus2 (b9 13)*": [0, 1, 2, 7, 9, 11],
            "Augmented Major 7 sus#4 (b9 #13)": [0, 1, 6, 8, 10, 11],
            "Major 7 sus4 (13 #13)*": [0, 5, 7, 9, 10, 11]
        },
        "(6-X10) Locrian b4 bb5 bb6 Hexachord": {
            "Major (b9 #9 11)*": [0, 1, 3, 4, 5, 7],
            "Dimininshed Major 7 (9 b11), Major 7 b5 (9 #9)*": [0, 2, 3, 4, 6, 11],
            "Dominant 7 no5 (b9 9 13)": [0, 1, 2, 4, 9, 10],
            "Minor Major 7 #5 (b9 13)": [0, 1, 3, 8, 9, 11],
            "Major 7 sus2 (b13 #13)": [0, 2, 7, 8, 10, 11],
            "Augmented 7 sus4 (#11 13)*": [0, 5, 6, 8, 9, 10]
        },
        "(6-X10M) Locrian nat2 b4 bb6 Hexachord": {
            "Major (9 #9 #11)*": [0, 2, 3, 4, 6, 7],
            "Dominant 7 no5 (b9 9 11)*": [0, 1, 2, 4, 5, 10],
            "Major 7 no5 (b9 #9 13)*, Minor Major 7 (b9 b11 13)": [0, 1, 3, 4, 9, 11],
            "Minor Major 7 #5 (9 #13)": [0, 2, 3, 8, 10, 11],
            "Augmented 7 sus#4 (b9 13)": [0, 1, 6, 8, 9, 10],
            "Major 7 sus4 (b13 13)": [0, 5, 7, 8, 9, 11]
        },
        "(6-Y10) Aeolian b4 bb5 Hexachord": {
            "Augmented (9 #9 11)*": [0, 2, 3, 4, 5, 8],
            "Half-Diminished 7 (b9 9)*": [0, 1, 2, 3, 6, 10],
            "Major 7 no5 sus2 (b9 13)*": [0, 1, 2, 5, 9, 11],
            "Augmented Major 7 (b9 #13)": [0, 1, 4, 8, 10, 11],
            "Minor Major 7 (13 #13)*": [0, 3, 7, 9, 10, 11],
            "Major 6 (#11 b13)*": [0, 4, 6, 7, 8, 9]
        },
        "(6-Y10M) Ionian #2 b5 b6 Hexachord": {
            "Augmented (#9 11 #11)*, Diminished (b11 11 b13)*, Major b5 (#9 11 b13)": [0, 3, 4, 5, 6, 8],
            "Diminished 7 no5 (b9 9 11)*": [0, 1, 2, 3, 5, 9],
            "Augmented Major 7 (b9 9)*": [0, 1, 2, 4, 8, 11],
            "Minor Major 7 (b9 #13)": [0, 1, 3, 7, 10, 11],
            "Diminished Major 7 sus2 (13 #13)*": [0, 2, 6, 9, 10, 11],
            "Dominant 7 (b13 13)*": [0, 4, 7, 8, 9, 10]
        },
        "(6-X11) Locrian bb3 b4 bb5 bb6 Hexachord": {
            "Major (b9 9 11)*": [0, 1, 2, 4, 5, 7],
            "Diminished Major 7 (b9 11), Major 7 b5 (b9 #9)*": [0, 1, 3, 4, 6, 11],
            "Minor Major 7 (9 11 #13)": [0, 2, 3, 5, 10, 11],
            "Minor 7 #5 (b9 13)": [0, 1, 3, 8, 9, 10],
            "Major 7 sus2 (b13 13)*": [0, 2, 7, 8, 9, 11],
            "7 sus4 (#11 13)": [0, 5, 6, 7, 9, 10]
        },
        "(6-X11M)Locrian nat2 bb6 Hexachord": {
            "Minor (9 11 #11)*": [0, 2, 3, 5, 6, 7],
            "Dominant 7 no5 (b9 #9 11)*": [0, 1, 3, 4, 5, 10],
            "Major 7 no5 (9 #9 13)": [0, 2, 3, 4, 9, 11],
            "7 sus2 (b9 13)": [0, 1, 2, 7, 9, 10],
            "Augmented Major 7 sus#4 (b9 13)": [0, 1, 6, 8, 9, 11],
            "Major 7 sus4 (b13 13)*": [0, 5, 7, 8, 10, 11]
        },
        "(6-Y11) Locrian bb3 bb4 bb5 Hexachord": {
            "Minor #5 (b9 9 11)*": [0, 1, 2, 3, 5, 8],
            "Major 7 (b9 9)*": [0, 1, 2, 4, 7, 11],
            "Diminished Major 7 (b9 #13)": [0, 1, 3, 6, 10, 11],
            "Major 7 sus4 no5 (9 13 #13)*": [0, 2, 5, 9, 10, 11],
            "Minor 7 (b13 13)*": [0, 3, 7, 8, 9, 10],
            "Major 6 (11 #11)*": [0, 4, 5, 6, 7, 9]
        },
        "(6-Y11M) Minor (11 #11 b13)": {
            "Minor (11 #11 b13)": [0, 3, 5, 6, 7, 8],
            "fix me1": [0, 2, 3, 4, 5, 9],
            "fix me2": [0, 1, 2, 3, 7, 10],
            "fix me3": [0, 1, 2, 6, 9, 11],
            "fix me4": [0, 1, 5, 8, 10, 11],
            "fix me5": [0, 4, 7, 9, 10, 11]
        },
        "(6-X12) Locrian bb3 b4 bb6 Hexachord": {
            "Major (b9 9 #11)*": [0, 1, 2, 4, 6, 7],
            "Diminished Major 7 (b9 11)": [0, 1, 3, 5, 6, 11],
            "Major 7 no5 (9 11 #13)": [0, 2, 4, 5, 10, 11],
            "Minor 7 #5 (9 13)": [0, 2, 3, 8, 9, 10],
            "7 sus#4 (b9 b13)": [0, 1, 6, 7, 8, 10],
            "Major 7 sus4 (#11 13)*": [0, 5, 6, 7, 9, 11]
        },
        "(6-X12M) Locrian bb6 Hexachord": {
            "Locrian bb6 Hexachord, Minor (b9 11 #11)*, Diminished (b9 11 bb13)": [0, 1, 3, 5, 6, 7],
            "Major 7 b5 (9 11)": [0, 2, 4, 5, 6, 11],
            "Minor 7 (9 b11 13)": [0, 2, 3, 4, 9, 10],
            "7 sus2 (b9 b13)*": [0, 1, 2, 7, 8, 10],
            "Major 7 sus#4 (b9 13)": [0, 1, 6, 7, 9, 11],
            "Augmented Major 7 sus4 (#11 #13)*": [0, 5, 6, 8, 10, 11]
        },
        "(6-Y12) Locrian bb3 bb4 Hexachord": {
            "Diminished (b9 9 b13)*": [0, 1, 2, 3, 6, 8],
            "Major 7 sus2 (b9 11)*": [0, 1, 2, 5, 7, 11],
            "Major 7 b5 (b9 #13), Major 7 no5 (b9 #11 #13)": [0, 1, 4, 6, 10, 11],
            "Minor Major 7 no5 (13 #13)": [0, 3, 5, 9, 10, 11],
            "sus2 (#11 b13 13)* ": [0, 2, 6, 7, 8, 9],
            "Dominant 7 (11 #11)*": [0, 4, 5, 6, 7, 10]
        },
        "(6-Y12M) Lydian #3 b6 Hexachord": {
            "Lydian #3 b6 Hexachord, sus4 (9 #11 b13)*": [0, 2, 5, 6, 7, 8],
            "Dominant 7 b5 (#9 11)": [0, 3, 4, 5, 6, 10],
            "Minor 6 (b9 9)*": [0, 1, 2, 3, 7, 9],
            "Diminished Major 7 sus2 (b9 b13)*, Augmented Major 7 sus2 (b9 #11)": [0, 1, 2, 6, 8, 11],
            "Major 7 sus4 (b9 #13)": [0, 1, 5, 7, 10, 11],
            "Major 7 ##5 (#11 #13), Major 7 b5 (13 #13)*": [0, 4, 6, 9, 10, 11]
        },
        "(6-13) Ionian #2 b5 Hexachord": {
            "Diminished 7 (b9 9)*": [0, 1, 2, 3, 6, 9],
            "Augmented Major 7 sus2 (b9 11)": [0, 1, 2, 5, 8, 11],
            "Major 7 (b9 #13)": [0, 1, 4, 7, 10, 11],
            "Diminished Major 7 (13 #13)*": [0, 3, 6, 9, 10, 11],
            "Minor 6 (#11 b13)*, Minor bb7 (#11 b13)": [0, 3, 6, 7, 8, 9],
            "Ionian #2 b5 Hexachord, Major 6 b5 (#9 11), Diminished 7 (b11 11)*": [0, 3, 4, 5, 6, 9]
        },
        "(6-Z13) Locrian b4 bb6 Hexachord": {
            "Major (b9 #9 #11)*, Diminished (b9 b11 bb13)": [0, 1, 3, 4, 6, 7],
            "Diminished Major 7 (9 11)": [0, 2, 3, 5, 6, 11],
            "Dominant 7 no 5 (b9 #9 13)*, Minor 7 no5 (b9 b11 13)": [0, 1, 3, 4, 9, 10],
            "Minor Major 7 #5 (9 13)": [0, 2, 3, 8, 9, 11],
            "7 sus#4 (b9 13)": [0, 1, 6, 7, 9, 10],
            "Augmented Major 7 sus4 (#11 13)*": [0, 5, 6, 8, 9, 11]
        },
        "(6-14) Locrian b4 bb5 Hexachord": {
            "Augmented (b9 #9 11)*": [0, 1, 3, 4, 5, 8],
            "Minor Major 7 (9 b11), Major 7 (9 #9)*": [0, 2, 3, 4, 7, 11],
            "7 sus2 no5 (b9 11 13)*": [0, 1, 2, 5, 9, 10],
            "Augmented Major 7 (b9 13)": [0, 1, 4, 8, 9, 11],
            "Minor Major 7 (b13 #13)*": [0, 3, 7, 8, 10, 11],
            "Major 6 (11 b13)*, Major bb7 (11 b13)": [0, 4, 5, 7, 8, 9]
        },
        "(6-14M) Ionian #2 b6 Hexachord": {
            "Ionian #2 b6 Hexachord, Major (#9 11 b13)": [0, 3, 4, 5, 7, 8],
            "Major 6 no5 (b9 9 11)*, Major Tetrachord (b9 13)*": [0, 1, 2, 4, 5, 9],
            "Augmented Major 7 (b9 #9)*, Minor Major 7 no5 (b9 b11 b13), Minor Major 7 #5 (b9 b11)": [0, 1, 3, 4, 8, 11],
            "Minor Major 7 (9 #13)": [0, 2, 3, 7, 10, 11],
            "Augmented 7 sus4 (b9 13)": [0, 1, 5, 8, 9, 10],
            "Major 7 (b13 13)*, Augmented Major 7 (##11 13)": [0, 4, 7, 8, 9, 11]
        },
        "(6-15) Locrian bb3 b4 bb5 Hexachord": {
            "Locrian bb3 b4 bb5 Hexachord, Augmented (b9 9 11)*": [0, 1, 2, 4, 5, 8],
            "Minor Major 7 (b9 b11), Major 7 (b9 #9)*": [0, 1, 3, 4, 7, 11],
            "Diminished Major 7 (9 #13)": [0, 2, 3, 6, 10, 11],
            "Augmented 7 (b9 13)": [0, 1, 4, 8, 9, 10],
            "Minor Major 7 (b13 13)*": [0, 3, 7, 8, 9, 11],
            "Augmented (11 #11 13)*": [0, 4, 5, 6, 8, 9]
        },
        "(6-15M) Lydian #2 b6 Hexachord": {
            "Lydian #2 b6 Hexachord, Major (#9 #11 b13)": [0, 3, 4, 6, 7, 8],
            "Diminished 7 bb5 (b9 b11)*": [0, 1, 3, 4, 5, 9],
            "Augmented Major 7 (9 #9)": [0, 2, 3, 4, 8, 11],
            "Half-Diminished sus2 (b9 13)": [0, 1, 2, 6, 9, 10],
            "Augmented Major 7 sus 4 (b9 13)": [0, 1, 5, 8, 9, 11],
            "Major 7 (b13 #13)": [0, 4, 7, 8, 10, 11]
        },
        "(6-16) Locrian nat3 Hexachord": {
            "Locrian nat3 Hexachord, Major b5 (b9 11 b13)": [0, 1, 4, 5, 6, 8],
            "Major 7 (#9 11)": [0, 3, 4, 5, 7, 11],
            "Augmented (b9 9 13)*": [0, 1, 2, 4, 8, 9],
            "Minor Major 7 (b9 b13)": [0, 1, 3, 7, 8, 11],
            "Major 7 sus2 (#11 #13)": [0, 2, 6, 7, 10, 11],
            "Augmented 7 (11 13)": [0, 4, 5, 8, 9, 10]
        },
        "(6-16M) Aeolian b4 Hexachord": {
            "Aeolian b4 Hexachord, Minor (9 b11 b13)": [0, 2, 3, 4, 7, 8],
            "Half-Diminished 7 sus2 (b9 11)": [0, 1, 2, 5, 6, 10],
            "Major 7 no5 (b9 11 13)": [0, 1, 4, 5, 9, 11],
            "Augmented Major 7 (#9 #13)": [0, 3, 4, 8, 10, 11],
            "6 sus4 (b9 b13)*": [0, 1, 5, 7, 8, 9],
            "Major 7 (#11 b13)": [0, 4, 6, 7, 8, 11]
        },
        "(6-X17) Phrygian bb3 b4 Hexachord": {
            "Phrygian bb3 b4 Hexachord, Major (b9 9 b13)*": [0, 1, 2, 4, 7, 8],
            "Minor Major 7 (b9 #11)": [0, 1, 3, 6, 7, 11],
            "Diminished Major 7 sus4 (9 #13)": [0, 2, 5, 6, 10, 11],
            "Augmented 7 (#9 13)": [0, 3, 4, 8, 9, 10],
            "6 sus4 (b9 #11)*": [0, 1, 5, 6, 7, 9],
            "Major 7 b5 (11 b13)": [0, 4, 5, 6, 8, 11]
        },
        "(6-X17M) Lydian b2 b6 Hexachord": {
            "Lydian b2 b6 Hexachord, Major (b9 #11 b13)": [0, 1, 4, 6, 7, 8],
            "Minor Major 7 (11 #11)*": [0, 3, 5, 6, 7, 11],
            "Diminished 7 no5 (9 b11 b13)": [0, 2, 3, 4, 8, 9],
            "7 sus2 (b9 #11)*": [0, 1, 2, 6, 7, 10],
            "Diminished Major 7 sus4 (b9 13)": [0, 1, 5, 6, 9, 11],
            "Augmented Major 7 (11 #13)": [0, 4, 5, 8, 10, 11]
        },
        "(6-Y17) Locrian bb3 Hexachord": {
            "Locrian bb3 Hexachord, Diminished sus2 (b9 11 b13)*": [0, 1, 2, 5, 6, 8],
            "Major 7 (b9 11)": [0, 1, 4, 5, 7, 11],
            "Major 7 b5 (#9 #13)": [0, 3, 4, 6, 10, 11],
            "Minor 6 (b9 b13)": [0, 1, 3, 7, 8, 9],
            "Major 7 sus2 (#11 b13)": [0, 2, 6, 7, 8, 11],
            "Dominant 7 b5 (11 13)": [0, 4, 5, 6, 9, 10]
        },
        "(6-Y17M) Hungarian Gypsy (Aeolian #4) Hexachord": {
            "Hungarian Gypsy (Aeolian #4) Hexachord, Minor (9 #11 b13)": [0, 2, 3, 6, 7, 8],
            "Dominant 7 b5 (b9 11)": [0, 1, 4, 5, 6, 10],
            "Major 7 no5 (#9 11 13)": [0, 3, 4, 5, 9, 11],
            "Diminished 7 sus2 (b9 b13)": [0, 1, 2, 6, 8, 9],
            "Major 7 sus4 (b9 b13)": [0, 1, 5, 7, 8, 11],
            "Major 7 (#11 #13)": [0, 4, 6, 7, 10, 11]
        },
        "(6-18) Phrygian bb3 Hexachord": {
            "Phrygian bb3 Hexachord, sus2 (b9 11 b13)*": [0, 1, 2, 5, 7, 8],
            "Major 7 (b9 #11)": [0, 1, 4, 6, 7, 11],
            "Diminished Major 7 (11 #13)": [0, 3, 5, 6, 10, 11],
            "Minor 6 (9 b13)": [0, 2, 3, 7, 8, 9],
            "7 sus4 (b9 #11)*": [0, 1, 5, 6, 7, 10],
            "Major 7 b5 (11 13)": [0, 4, 5, 6, 9, 11]
        },
        "(6-18M) Phrygian #4 Hexachord": {
            "Phrygian #4 Hexachord, Minor (b9 #11 b13)": [0, 1, 3, 6, 7, 8],
            "Major 7 sus4 (9 #11)*": [0, 2, 5, 6, 7, 11],
            "Dominant 7 no 5 (#9 11 13)": [0, 3, 4, 5, 9, 10],
            "6 sus2, (b9 #11)": [0, 1, 2, 6, 7, 9],
            "Diminished Major 7 sus4 (b9 b13)": [0, 1, 5, 6, 8, 11],
            "Major 7 (11 #13)": [0, 4, 5, 7, 10, 11]
        },
        "(6-X19) Pelog, Phrygian b4 Hexachord": {
            "Pelog, Phrygian b4 Hexachord, Minor (b9 b11 b13)": [0, 1, 3, 4, 7, 8],
            "Minor Major 7 (9 #11)": [0, 2, 3, 6, 7, 11],
            "Dominant 7 no5 (b9 11 13)": [0, 1, 4, 5, 9, 10],
            "Augmented Major 7 (#9 13)": [0, 3, 4, 8, 9, 11],
            "Diminished 7 sus4 (b9 b13)": [0, 1, 5, 6, 8, 9],
            "Major 7 (11 b13)": [0, 4, 5, 7, 8, 11]
        },
        "(6-X19M) Phrygian nat3 Hexachord": {
            "Phrygian nat3 Hexachord, Major (b9 11 b13)": [0, 1, 4, 5, 7, 8],
            "Major 7 (#9 #11)": [0, 3, 4, 6, 7, 11],
            "Diminished 7 no5 (b9 b11 b13)": [0, 1, 3, 4, 8, 9],
            "Minor Major 7 (9 b13)": [0, 2, 3, 7, 8, 11],
            "Half-Diminished sus4 (b9 13)": [0, 1, 5, 6, 9, 10],
            "Augmented Major 7 (11 13)": [0, 4, 5, 8, 9, 11]
        },
        "(6-Y19) Ionian #2 #5 Hexachord": {
            "Diminished 7 sus2 (b9 11)*, Schoenberg Hexachord": [0, 1, 2, 5, 6, 9],
            "Augmented Major 7 (b9 11)": [0, 1, 4, 5, 8, 11],
            "Major 7 (#9 #13)": [0, 3, 4, 7, 10, 11],
            "Major 6 (b9 b13)": [0, 1, 4, 7, 8, 9],
            "Minor Major 7 (#11 b13)": [0, 3, 6, 7, 8, 11],
            "Ionian #2 #5 Hexachord, Augmented (#9 11 13)": [0, 3, 4, 5, 8, 9]
        },
        "(6-Y19M) Locrian nat3 nat6 Hexachord": {
            "Augmented sus2 (b9 11 13)*": [0, 1, 2, 5, 8, 9],
            "Major 7 (b9 b13)": [0, 1, 4, 7, 8, 11],
            "Minor Major 7 (#11 #13)": [0, 3, 6, 7, 10, 11],
            "Major 6 (#9 b13)*": [0, 3, 4, 7, 8, 9],
            "Locrian nat3 nat6 Hexachord, Major 6 b5 (b9 11)": [0, 1, 4, 5, 6, 9],
            "Augmented Major 7 (#9 11)": [0, 3, 4, 5, 8, 11]
        },
        "(6-20S) Ionian b2 #5 Hexachord": {
            "Ionian b2 #5 Hexachord, Augmented (b9 11 13), 'Ode To Napoleon Hexachord'": [0, 1, 4, 5, 8, 9],
            "Major 7 (#9 b13)": [0, 3, 4, 7, 8, 11]
        },
        "(6-21) Locrian nat2 b4 Hexachord": {
            "Diminished (9 b11 b13)": [0, 2, 3, 4, 6, 8],
            "Half-Diminished 7 sus2 (b9 b11)*": [0, 1, 2, 4, 6, 10],
            "Minor Major 7 no5 (b9 11 13)": [0, 1, 3, 5, 9, 11],
            "Augmented Major 7 (9 #13)": [0, 2, 4, 8, 10, 11],
            "Augmented 7 sus#4 (9 13)": [0, 2, 6, 8, 9, 10],
            "Dominant 7 (#11 b13)": [0, 4, 6, 7, 8, 10]
        },
        "(6-21M) Major b5 b6 Hexachord": {
            "Major b5 (9 11 b13)": [0, 2, 4, 5, 6, 8],
            "Half-Diminished 7 (9 b11)": [0, 2, 3, 4, 6, 10],
            "7 sus2 no5 (b9 b11 b13)*": [0, 1, 2, 4, 8, 10],
            "Minor Major 7 (b9 13)": [0, 1, 3, 7, 9, 11],
            "Augmented Major 7 sus#4 (9 #13)": [0, 2, 6, 8, 10, 11],
            "Augmented 7 (#11 13)": [0, 4, 6, 8, 9, 10]
        },
        "(6-22) Locrian bb3 b4 Hexachord": {
            "Diminished sus2 (b9 b11 b13)": [0, 1, 2, 4, 6, 8],
            "Minor Major 7 (b9 11)": [0, 1, 3, 5, 7, 11],
            "Major 7 no5 (9 #11 #13)": [0, 2, 4, 6, 10, 11],
            "Augmented 7 (9 13)": [0, 2, 4, 8, 9, 10],
            "7 sus#4 (9 b13)": [0, 2, 6, 7, 8, 10],
            "Dominant 7 b5 (11 b13)": [0, 4, 5, 6, 8, 10]
        },
        "(6-22M) Lydian b6 Hexachord": {
            "Lydian b6 Hexachord, Major (9 #11 b13)": [0, 2, 4, 6, 7, 8],
            "Dominant 7 b5 (9 11)": [0, 2, 4, 5, 6, 10],
            "Minor 7 no5 (9 b11 b13)": [0, 2, 3, 4, 8, 10],
            "Half-Diminished sus2 (b9 b13)": [0, 1, 2, 6, 8, 10],
            "Major 7 sus4 (b9 13)": [0, 1, 5, 7, 9, 11],
            "Augmented Major 7 (#11 #13)": [0, 4, 6, 8, 10, 11]
        },
        "(6-23) Dorian b4 b5 Hexachord": {
            "Dorian b4 b5 Hexachord, Diminished 7 (9 b11)": [0, 2, 3, 4, 6, 9],
            "7 sus2 (b9 b11)*": [0, 1, 2, 4, 7, 10],
            "Diminished Major 7 (b9 13)": [0, 1, 3, 6, 9, 11],
            "Augmented Major 7 sus4 (9 #13)": [0, 2, 5, 8, 10, 11],
            "Augmented 7 sus#4 (#9 13)": [0, 3, 6, 8, 9, 10],
            "Lydian #2 #3 Hexachord": [0, 3, 5, 6, 7, 9]
        },
        "(6-Z23) Locrian nat2 Hexachord": {
            "Locrian nat2 Hexachord, Diminished (9 11 b13)": [0, 2, 3, 5, 6, 8],
            "Half-Diminished 7 (b9 11)": [0, 1, 3, 4, 6, 10],
            "Minor Major 7 no5 (9 11 13)": [0, 2, 3, 5, 9, 11],
            "Minor 7 (b9 13)": [0, 1, 3, 7, 9, 10],
            "Augmented Major 7 sus#4 (9 13)": [0, 2, 6, 8, 9, 11],
            "Dominant 7 (#11 13)": [0, 4, 6, 7, 9, 10]
        },
        "(6-X24) Super Locrian Hexachord": {
            "Super Locrian Hexachord, Diminished (b9 b11 b13)": [0, 1, 3, 4, 6, 8],
            "Minor Major 7 (9 11)": [0, 2, 3, 5, 7, 11],
            "Minor 7 no5 (b9 11)": [0, 1, 3, 5, 9, 10],
            "Augmented Major 7 (9 13)": [0, 2, 4, 8, 9, 11],
            "7 sus#4 (9 13)": [0, 2, 6, 7, 9, 10],
            "Dominant 7 (11 b13)": [0, 4, 5, 7, 8, 10]
        },
        "(6-X24M) Harmonic Major Hexachord": {
            "Harmonic Major Hexachord, Major (9 11 b13)": [0, 2, 4, 5, 7, 8],
            "Half-Diminished 7 (9 11)": [0, 2, 3, 5, 6, 10],
            "Minor 7 no5 (b9 11 b13)": [0, 1, 3, 4, 8, 10],
            "Minor Major 7 (9 13)": [0, 2, 3, 7, 9, 11],
            "7 sus4 (b9 13)": [0, 1, 5, 7, 9, 10],
            "Augmented Major 7 (#11 13)": [0, 4, 6, 8, 9, 11]
        },
        "(6-Y24) Ionian #2 Hexachord": {
            "Diminished 7 sus2 (b9 b11)": [0, 1, 2, 4, 6, 9],
            "Minor Major 7 no5 (b9 11 b13)": [0, 1, 3, 5, 8, 11],
            "Major 7 (9 #13)": [0, 2, 4, 7, 10, 11],
            "Augmented 7 sus4 (9 13)": [0, 2, 5, 8, 9, 10],
            "Minor 7 (#11 b13)": [0, 3, 6, 7, 8, 10],
            "Ionian #2 Hexachord": [0, 3, 4, 5, 7, 9]
        },
        "(6-Y24M) Ionian b5 Hexachord": {
            "Ionian b5 Hexachord, Major b5 (9 11 13)": [0, 2, 4, 5, 6, 9],
            "Minor 7 (9 b11)": [0, 2, 3, 4, 7, 10],
            "Augmented 7 sus2 (b9 11)": [0, 1, 2, 5, 8, 10],
            "Major 7 (b9 13)": [0, 1, 4, 7, 9, 11],
            "Augmented Major 7 sus#4 (#9 #13)": [0, 3, 6, 8, 10, 11],
            "Minor 6 (11 b13)": [0, 3, 5, 7, 8, 9]
        },
        "(6-X25) Locrian Hexachord": {
            "Locrian Hexachord, Diminished (b9 11 b13)": [0, 1, 3, 5, 6, 8],
            "Major 7 (9 11)": [0, 2, 4, 5, 7, 11],
            "Minor 7 no5 (9 11 13)": [0, 2, 3, 5, 9, 10],
            "Minor 7 (b9 b13)": [0, 1, 3, 7, 8, 10],
            "Major 7 sus#4 (9 13)": [0, 2, 6, 7, 9, 11],
            "Dominant 7 (11 13)": [0, 4, 5, 7, 9, 10]
        },
        "(6-X25M) Aeolian Hexachord": {
            "Aeolian Hexachord, Minor (9 11 b13)": [0, 2, 3, 5, 7, 8],
            "Half-Diminished 7 (b9 11)": [0, 1, 3, 5, 6, 10],
            "Major 7 no5 (9 11 13)": [0, 2, 4, 5, 9, 11],
            "Minor 7 (9 13)": [0, 2, 3, 7, 9, 10],
            "7 sus4 (b9 b13)": [0, 1, 5, 7, 8, 10],
            "Major 7 (#11 13)": [0, 4, 6, 7, 9, 11]
        },
        "(6-Y25) Lydian #3 Hexachord": {
            "sus2 (b9 11 13)": [0, 1, 2, 4, 7, 9],
            "Diminished Major 7 (b9 b13)": [0, 1, 3, 6, 8, 11],
            "Major 7 sus4 (9 #13)": [0, 2, 5, 7, 10, 11],
            "Minor 7 #5 (11 13)": [0, 3, 5, 8, 9, 10],
            "Lydian #3 Hexachord, 7 sus4 (9 #11 13)": [0, 2, 5, 6, 7, 9],
            "Dominant 7 (#9 11)": [0, 3, 4, 5, 7, 10]
        },
        "(6-Y25M) Blues Scale": {
            "Minor (9 b11 13)": [0, 2, 3, 4, 7, 9],
            "7 sus2 (b9 11)": [0, 1, 2, 5, 7, 10],
            "Major 7 b5 (b9 13)": [0, 1, 4, 6, 9, 11],
            "Augmented Major 7 sus4 (#9 #13)": [0, 3, 5, 8, 10, 11],
            "6 sus4 (9 b13)*": [0, 2, 5, 7, 8, 9],
            "Blues Scale, 7 sus4 (#9 #11)": [0, 3, 5, 6, 7, 10]
        },
        "(6-26) Dorian b2 bb3 Hexachord": {
            "Dorian b2 bb3 Hexachord, sus2 (b9 11 13)": [0, 1, 2, 5, 7, 9],
            "Augmented Major 7 (b9 #11)": [0, 1, 4, 6, 8, 11],
            "Minor Major 7 (11 #13)": [0, 3, 5, 7, 10, 11],
            "Major 6 (9 b13)": [0, 2, 4, 7, 8, 9],
            "7 sus4 (9 #11)": [0, 2, 5, 6, 7, 10],
            "Augmented 7 (#9 11)": [0, 3, 4, 5, 8, 10]
        },
        "(6-Z26) Phrygian Hexachord": {
            "Phrygian Hexachord, Minor (b9 11 b13)": [0, 1, 3, 5, 7, 8],
            "Major 7 (9 #11)": [0, 2, 4, 6, 7, 11],
            "Dominant 7 no5 (9 11 13)": [0, 2, 4, 5, 9, 10],
            "Minor 7 (9 b13)": [0, 2, 3, 7, 8, 10],
            "Half-Diminished 7 sus4 (b9 b13)": [0, 1, 5, 6, 8, 10],
            "Major 7 (11 13)": [0, 4, 5, 7, 9, 11]
        },
        "(6-27) Lydian #2 Hexachord": {
            "Diminished 7 (b9 11)": [0, 1, 3, 4, 6, 9],
            "Minor Major 7 no5 (9 11 b13)": [0, 2, 3, 5, 8, 11],
            "Half-Diminished 7 (b9 13)": [0, 1, 3, 6, 9, 10],
            "Augmented Major 7 sus4 (9 13)": [0, 2, 5, 8, 9, 11],
            "Minor 7 (#11 13)": [0, 3, 6, 7, 9, 10],
            "Lydian #2 Hexachord, Major 6 (#9 #11)": [0, 3, 4, 6, 7, 9]
        },
        "(6-27M) Locrian nat2 nat6 Hexachord": {
            "Diminished 7 (9 11)": [0, 2, 3, 5, 6, 9],
            "Minor 7 (b9 b11)": [0, 1, 3, 4, 7, 10],
            "Diminished Major 7 (9 13)": [0, 2, 3, 6, 9, 11],
            "Dominant 7 (b9 13)": [0, 1, 4, 7, 9, 10],
            "Minor Augmented Major 7 (#11 13)": [0, 3, 6, 8, 9, 11],
            "Diminished 7 (11 b13)": [0, 3, 5, 6, 8, 9]
        },
        "(6-28) Dorian b2 b4 Hexachord": {
            "Dorian b2 b4 Hexachord, Minor (b9 b11 13)": [0, 1, 3, 4, 7, 9],
            "Diminished Major 7 (9 b13)": [0, 2, 3, 6, 8, 11],
            "Dominant 7 no5 (b9 #11 13)": [0, 1, 4, 6, 9, 10],
            "Minor Augmented Major 7 (11 13)": [0, 3, 5, 8, 9, 11],
            "Diminished 7 sus4 (9 b13)": [0, 2, 5, 6, 8, 9],
            "Dominant 7 (#9 #11)": [0, 3, 4, 6, 7, 10]
        },
        "(6-Z28) Lydian #2 #5 Hexachord": {
            "Diminished 7 (b9 11)": [0, 1, 3, 5, 6, 9],
            "Augmented Major 7 (9 11)": [0, 2, 4, 5, 8, 11],
            "Half-Diminished 7 (9 13)": [0, 2, 3, 6, 9, 10],
            "Dominant 7 (b9 b13)": [0, 1, 4, 7, 8, 10],
            "Minor Major 7 (#11 13)": [0, 3, 6, 7, 9, 11],
            "Lydian #2 #5 Hexachord, Augmented (#9 #11 13)": [0, 3, 4, 6, 8, 9]
        },
        "(6-29) Lydian b2 Hexachord": {
            "Lydian b2 Hexachord, Major 6 (b9 #11)": [0, 1, 4, 6, 7, 9],
            "Diminished Major 7 (11 b13)": [0, 3, 5, 6, 8, 11],
            "Dorian #5 Hexachord, Diminished 7 no5 (9 11 b13)": [0, 2, 3, 5, 8, 9],
            "Minor 7 (b9 #11)": [0, 1, 3, 6, 7, 10],
            "Diminished Major 7 sus4 (9 13)": [0, 2, 5, 6, 9, 11],
            "Lydian #2": [0, 3, 4, 7, 9, 10]
        },
        "(6-Z29) Dorian #4 Hexachord": {
            "Diminished 7 (b9 b13)": [0, 1, 3, 6, 8, 9],
            "Major 7 sus4 (9 b13)": [0, 2, 5, 7, 8, 11],
            "Half-Diminished 7 (11 13)": [0, 3, 5, 6, 9, 10],
            "Dorian #4 Hexachord, Minor 6 (9 #11), 'Bridge Chord'": [0, 2, 3, 6, 7, 9],
            "Dominant 7 (b9 11)": [0, 1, 4, 5, 7, 10],
            "Diminished Major 7 (b11 13), Major 7 no5 (#9 #11 13), Major 7 b5 (#9 13)": [0, 3, 4, 6, 9, 11]
        },
        "(6-30S) Dorian b2 #4 Hexachord": {
            "Dorian b2 #4 Hexachord, Minor 6 (b9 #11)": [0, 1, 3, 6, 7, 9],
            "Diminished Major 7 sus4 (9 b13)": [0, 2, 5, 6, 8, 11],
            "Dominant 7 b5 (#9 13), Half-Diminished 7 (b11 13)": [0, 3, 4, 6, 9, 10]
        },
        "(6-30MS) Lydian b3 #5 Hexachord": {
            "Lydian b3 #5 Hexachord, Diminished 7 (9 b13)": [0, 2, 3, 6, 8, 9],
            "Dominant 7 (b9 #11)": [0, 1, 4, 6, 7, 10],
            "Diminished Major 7 (11 13)": [0, 3, 5, 6, 9, 11]
        },
        "(6-31) Dorian b2 #5 Hexachord": {
            "Dorian b2 #5 Hexachord, Minor 6 #5 (b9 11)": [0, 1, 3, 5, 8, 9],
            "Major 7 (9 b13)": [0, 2, 4, 7, 8, 11],
            "Half-Diminished 7 sus4 (9 13)": [0, 2, 5, 6, 9, 10],
            "Dominant 7 (#9 b13)": [0, 3, 4, 7, 8, 10],
            "Major 6 (b9 11)": [0, 1, 4, 5, 7, 9],
            "Augmented Major 7 (#9 #11)": [0, 3, 4, 6, 8, 11]
        },
        "(6-31M) Lydian b2 #5 Hexachord": {
            "Lydian b2 #5 Hexachord, Augmented (b9 #11 13)": [0, 1, 4, 6, 8, 9],
            "Minor Major 7 (11 b13)": [0, 3, 5, 7, 8, 11],
            "Augmented (9 11 13)": [0, 2, 4, 5, 8, 9],
            "Minor 7 (9 #11)": [0, 2, 3, 6, 7, 10],
            "Augmented 7 (b9 11)": [0, 1, 4, 5, 8, 10],
            "Major 7 (#9 13)": [0, 3, 4, 7, 9, 11]
        },
        "(6-32) Major Hexachord": {
            "Major Hexachord, Major 6 (9 11)": [0, 2, 4, 5, 7, 9],
            "Minor 7 (9 11)": [0, 2, 3, 5, 7, 10],
            "Minor 7 no5 (b9 11 b13)": [0, 1, 3, 5, 8, 10],
            "Major 7 (9 13)": [0, 2, 4, 7, 9, 11],
            "7 sus4 (9 13)": [0, 2, 5, 7, 9, 10],
            "Minor 7 (11 b13)": [0, 3, 5, 7, 8, 10]
        },
        "(6-33) Dorian Hexachord": {
            "Dorian Hexachord, Minor 6 (9 11)": [0, 2, 3, 5, 7, 9],
            "Minor 7 (b9 11)": [0, 1, 3, 5, 7, 10],
            "Major 7 no5 (9 #11 13)": [0, 2, 4, 6, 9, 11],
            "Dominant 7 (9 13)": [0, 2, 4, 7, 9, 10],
            "7 sus4 (9 b13)": [0, 2, 5, 7, 8, 10],
            "Half-Diminished 7 (11 b13)": [0, 3, 5, 6, 8, 10]
        },
        "(6-33M) Lydian Hexachord": {
            "Lydian Hexachord, Major 6 (9 #11)": [0, 2, 4, 6, 7, 9],
            "Dominant 7 (9 11)": [0, 2, 4, 5, 7, 10],
            "Minor 7 no5 (9 11 b13)": [0, 2, 3, 5, 8, 10],
            "Half-Diminished 7 (b9 b13)": [0, 1, 3, 6, 8, 10],
            "Major 7 sus4 (9 11)": [0, 2, 5, 7, 9, 11],
            "Minor 7 (11 13)": [0, 3, 5, 7, 9, 10]
        },
        "(6-34) Dorian b2 Hexachord": {
            "Dorian b2 Hexachord, Minor 6 (b9 11)": [0, 1, 3, 5, 7, 9],
            "Augmented Major 7 (9 #11)": [0, 2, 4, 6, 8, 11],
            "Dominant 7 no5 (9 #11 13) ": [0, 2, 4, 6, 9, 10],
            "Dominant 7 (9 b13)": [0, 2, 4, 7, 8, 10],
            "Half-Diminished 7 sus4 (9 b13)": [0, 2, 5, 6, 8, 10],
            "Half-Diminished 7 (b11 b13)": [0, 3, 4, 6, 8, 10]
        },
        "(6-34M) Lydian Augmented Hexachord": {
            "Lydian Augmented Hexachord, Augmented (9 #11 13)": [0, 2, 4, 6, 8, 9],
            "Dominant 7 (9 #11)": [0, 2, 4, 6, 7, 10],
            "Dominant 7 no5 (9 11 b13)": [0, 2, 4, 5, 8, 10],
            "Half-Diminished 7 (9 b13)": [0, 2, 3, 6, 8, 10],
            "Augmented 7 (b9 #11), Half-Diminished 7 sus b4 (b9 b13)": [0, 1, 4, 6, 8, 10],
            "Minor Major 7 (11 13)": [0, 3, 5, 7, 9, 11]
        },
        "(6-35S) Whole Tone Scale": {
            "Whole Tone Scale, Augmented 7 (9 #11), Messiaen Mode 1": [0, 2, 4, 6, 8, 10]
        }
    },
    septads: {
        "(7-35) Major Scale": {
            "Lydian, Kalyan": [0, 2, 4, 6, 7, 9, 11],
            "Major Scale, Ionian, Bilawal": [0, 2, 4, 5, 7, 9, 11],
            "Mixolydian, Khamaj": [0, 2, 4, 5, 7, 9, 10],
            "Dorian, Kafi": [0, 2, 3, 5, 7, 9, 10],
            "Aeolian, Asavari": [0, 2, 3, 5, 7, 8, 10],
            "Phrygian, Bhairavi": [0, 1, 3, 5, 7, 8, 10],
            "Locrian": [0, 1, 3, 5, 6, 8, 10]
        },
        "(7-34) Melodic Minor": {
            "Melodic Minor, Ionian b3, Dorian nat7, Jazz Minor": [0, 2, 3, 5, 7, 9, 11],
            "Dorian b2, Phrygian nat6": [0, 1, 3, 5, 7, 9, 10],
            "Lydian Augmented": [0, 2, 4, 6, 8, 9, 11],
            "Lydian b7, Mixolydian #4, Overtone": [0, 2, 4, 6, 7, 9, 10],
            "Hindu, Mixolydian b6, Aeolian nat3": [0, 2, 4, 5, 7, 8, 10],
            "Locrian nat2, Aeolian b5": [0, 2, 3, 5, 6, 8, 10],
            "Super Locrian, Locrian b4, Altered Dominant": [0, 1, 3, 4, 6, 8, 10]
        },
        "(7-32) Harmonic Minor": {
            "Harmonic Minor, Aeolian nat7": [0, 2, 3, 5, 7, 8, 11],
            "Locrian nat6": [0, 1, 3, 5, 6, 9, 10],
            "Ionian #5": [0, 2, 4, 5, 8, 9, 11],
            "Dorian #4": [0, 2, 3, 6, 7, 9, 10],
            "Phrygian nat3, Phrygian Dominant": [0, 1, 4, 5, 7, 8, 10],
            "Lydian #2": [0, 3, 4, 6, 7, 9, 11],
            "Locrian b4 bb7": [0, 1, 3, 4, 6, 8, 9]
        },
        "(7-32M) Harmonic Major": {
            "Harmonic Major, Ionian b6": [0, 2, 4, 5, 7, 8, 11],
            "Dorian b5": [0, 2, 3, 5, 6, 9, 10],
            "Phrygian b4": [0, 1, 3, 4, 7, 8, 10],
            "Lydian b3": [0, 2, 3, 6, 7, 9, 11],
            "Mixolydian b2": [0, 1, 4, 5, 7, 9, 10],
            "Lydian augmented #2": [0, 3, 4, 6, 8, 9, 11],
            "Locrian bb7": [0, 1, 3, 5, 6, 8, 9]
        },
        "(7-33) Neapolitan Major Family": {
            "Neapolitan Major, Melodic Minor b2, Phyrgian nat6 nat7, Dorian b2 nat7": [0, 1, 3, 5, 7, 9, 11],
            "Lydian #5 #6": [0, 2, 4, 6, 8, 10, 11],
            "Lydian #5 b7, Mixolydian #4 #5": [0, 2, 4, 6, 8, 9, 10],
            "Mixolydian #4 b6, Lydian b6 b7": [0, 2, 4, 6, 7, 8, 10],
            "Mixolydian b5 b6, Locrian nat2 nat3": [0, 2, 4, 5, 6, 8, 10],
            "Locrian nat2 b4": [0, 2, 3, 4, 6, 8, 10],
            "Locrian bb3 b4": [0, 1, 2, 4, 6, 8, 10]
        },
        "(7-31) Hungarian Major": {
            "Hungarian Major, Lydian #2 b7, Mixolydian #2 #4": [0, 3, 4, 6, 7, 9, 10],
            "Locrian b4 bb6 bb7": [0, 1, 3, 4, 6, 7, 9],
            "Locrian nat2 nat7": [0, 2, 3, 5, 6, 8, 11],
            "Locrian b4 nat6": [0, 1, 3, 4, 6, 9, 10],
            "Dorian #5 nat7, Melodic Minor #5": [0, 2, 3, 5, 8, 9, 11],
            "Dorian b2 #4, Phrygian #4 nat6": [0, 1, 3, 6, 7, 9, 10],
            "Lydian #3 #5": [0, 2, 5, 6, 8, 9, 11]
        },
        "(7-31M) Locrian nat2 bb7": {
            "Locrian nat2 bb7": [0, 2, 3, 5, 6, 8, 9],
            "Locrian b4 bb6": [0, 1, 3, 4, 6, 7, 10],
            "Melodic Minor b5, Ionian b3 b5, Dorian b5 nat7": [0, 2, 3, 5, 6, 9, 11],
            "Dorian b2 b4, Phrygian b4 nat6": [0, 1, 3, 4, 7, 9, 10],
            "Lydian b3 #5": [0, 2, 3, 6, 8, 9, 11],
            "Lydian b2 b7": [0, 1, 4, 6, 7, 9, 10],
            "Lydian #2 #3 #5": [0, 3, 5, 6, 8, 9, 11]
        },
        "(7-30M) Phrygian bb7": {
            "Phrygian bb7": [0, 1, 3, 5, 7, 8, 9],
            "Lydian b6": [0, 2, 4, 6, 7, 8, 11],
            "Mixolydian b5": [0, 2, 4, 5, 6, 9, 10],
            "Aeolian b4": [0, 2, 3, 4, 7, 8, 10],
            "Locrian bb3": [0, 1, 2, 5, 6, 8, 10],
            "Ionian b2": [0, 1, 4, 5, 7, 9, 11],
            "Lydian #2 #5 #6": [0, 3, 4, 6, 8, 10, 11]
        },
        "(7-30) Neapolitan Minor": {
            "Neapolitan Minor, Phrygian nat7": [0, 1, 3, 5, 7, 8, 11],
            "Lydian #6": [0, 2, 4, 6, 7, 10, 11],
            "Mixolydian #5": [0, 2, 4, 5, 8, 9, 10],
            "Hungarian Gyypsy, Aeolian #4": [0, 2, 3, 6, 7, 8, 10],
            "Locrian nat3": [0, 1, 4, 5, 6, 8, 10],
            "Ionian #2": [0, 3, 4, 5, 7, 9, 11],
            "Locrian bb3 b4 bb7": [0, 1, 2, 4, 6, 8, 9]
        },
        "(7-29M) Ionian b5": {
            "Ionian b5": [0, 2, 4, 5, 6, 9, 11],
            "Dorian b4": [0, 2, 3, 4, 7, 9, 10],
            "Phrygian bb3": [0, 1, 2, 5, 7, 8, 10],
            "Marwa, Lydian b2": [0, 1, 4, 6, 7, 9, 11],
            "Lydian #2 #3 #5 #6": [0, 3, 5, 6, 8, 10, 11],
            "Aeolian bb7": [0, 2, 3, 5, 7, 8, 9],
            "Locrian bb6": [0, 1, 3, 5, 6, 7, 10]
        },
        "(7-29) Locrian nat7": {
            "Locrian nat7": [0, 1, 3, 5, 6, 8, 11],
            "Ionian #6": [0, 2, 4, 5, 7, 10, 11],
            "Dorian #5": [0, 2, 3, 5, 8, 9, 10],
            "Phrygian #4": [0, 1, 3, 6, 7, 8, 10],
            "Lydian #3": [0, 2, 5, 6, 7, 9, 11],
            "Mixolydian #2": [0, 3, 4, 5, 7, 9, 10],
            "Locrian bb3 b4 bb6 bb7": [0, 1, 2, 4, 6, 7, 9]
        },
        "(7-28M) Locrian nat2 b4 bb7": {
            "Locrian nat2 b4 bb7": [0, 2, 3, 4, 6, 8, 9],
            "Locrian bb3 b4 bb6": [0, 1, 2, 4, 6, 7, 10],
            "Locrian nat6 nat7": [0, 1, 3, 5, 6, 9, 11],
            "Ionian #5 #6": [0, 2, 4, 5, 8, 10, 11],
            "Dorian #4 #5": [0, 2, 3, 6, 8, 9, 10],
            "Phrygian nat3 #4": [0, 1, 4, 6, 7, 8, 10],
            "Lydian #2 #3": [0, 3, 5, 6, 7, 9, 11]
        },
        "(7-28) Locrian bb6 bb7": {
            "Locrian bb6 bb7": [0, 1, 3, 5, 6, 7, 9],
            "Ionian b5 b6": [0, 2, 4, 5, 6, 8, 11],
            "Dorian b4 b5": [0, 2, 3, 4, 6, 9, 10],
            "Phrygian bb3 b4": [0, 1, 2, 4, 7, 8, 10],
            "Lydian b2 b3": [0, 1, 3, 6, 7, 9, 11],
            "Lydian #3 #5 #6": [0, 2, 5, 6, 8, 10, 11],
            "Lydian #2 #5 #6": [0, 3, 4, 6, 8, 9, 10]
        },
        "(7-27M) Mixolydian b6 bb7": {
            "Mixolydian b6 bb7": [0, 2, 4, 5, 7, 8, 9],
            "Locrian nat2 bb6, Aeolian b5 bb6": [0, 2, 3, 5, 6, 7, 10],
            "Locrian b4 bb5": [0, 1, 3, 4, 5, 8, 10],
            "Ionian b3 b4, Melodic Minor b4": [0, 2, 3, 4, 7, 9, 11],
            "Dorian b2 bb3": [0, 1, 2, 5, 7, 9, 10],
            "Lydian b2 #5": [0, 1, 4, 6, 8, 9, 11],
            "Lydian #2 #3 ##4 #5 #6": [0, 3, 5, 7, 8, 10, 11]
        },
        "(7-27) Locrian b4 nat7": {
            "Locrian b4 nat7": [0, 1, 3, 4, 6, 8, 11],
            "Melodic Minor #6, Dorian #6 nat7, Ionian b3 #6": [0, 2, 3, 5, 7, 10, 11],
            "Dorian b2 #5, Phrygian #5 nat6": [0, 1, 3, 5, 8, 9, 10],
            "Lydian ##4 #5": [0, 2, 4, 7, 8, 9, 11],
            "Lydian #3 b7, Mixolydian #3 #4": [0, 2, 5, 6, 7, 9, 10],
            "Mixolydian #2 b6, Aeolian #2 nat3": [0, 3, 4, 5, 7, 8, 10],
            "Locrian bb3 b4 bb6 bb7": [0, 1, 2, 4, 5, 7, 9]
        },
        "(7-26M) Mixolydian b5 b6 bb7": {
            "Mixolydian b5 b6 bb7": [0, 2, 4, 5, 6, 8, 9],
            "Locrian b4 bb6": [0, 2, 3, 4, 6, 7, 10],
            "Locrian bb3 b4 bb5": [0, 1, 2, 4, 5, 8, 10],
            "Melodic Minor b2 b4, Ionian b2 b3 b4, Phrygian b4 nat6 nat7, Dorian b2 b4 nat7": [0, 1, 3, 4, 7, 9, 11],
            "Lydian b3 #5 #6": [0, 2, 3, 6, 8, 10, 11],
            "Mixolydian b2 #4 #5, Lydian b2 #5 b7": [0, 1, 4, 6, 8, 9, 10],
            "Lydian #2 #3 ##4 #5": [0, 3, 5, 7, 8, 9, 11]
        },
        "(7-26) Locrian nat2 b4 nat7": {
            "Locrian nat2 b4 nat7": [0, 2, 3, 4, 6, 8, 11],
            "Locrian bb3 b4 nat6": [0, 1, 2, 4, 6, 9, 10],
            "Melodic Minor b2 #5, Dorian b2 #5 nat7, Phrygian #5 nat6 nat7": [0, 1, 3, 5, 8, 9, 11],
            "Lydian ##4 #5 #6": [0, 2, 4, 7, 8, 10, 11],
            "Mixolydian #3 #4 #5, Lydian #3 #5 b7": [0, 2, 5, 6, 8, 9, 10],
            "Lydian #2 b6 b7, Mixolydian #2 #4 b6, Aeolian #2 #3 #4": [0, 3, 4, 6, 7, 8, 10],
            "Phrygian b4 bb5 bb6 bb7": [0, 1, 3, 4, 5, 7, 9]
        },
        "(7-25M) Locrian nat2 b4 nat6 nat 7": {
            "Locrian nat2 nat6 nat7": [0, 2, 3, 4, 6, 9, 11],
            "Phrygian bb3 b4 nat6 nat7": [0, 1, 2, 4, 7, 9, 10],
            "Lydian b2 b3 #5": [0, 1, 3, 6, 8, 9, 11],
            "Lydian #3 ##4 #5 #6": [0, 2, 5, 7, 8, 10, 11],
            "Lydian #2 #3 #5 b7": [0, 3, 5, 6, 8, 9, 10],
            "Locrian nat2 bb6 bb7, Aeolian b5 bb6 bb7": [0, 2, 3, 5, 6, 7, 9],
            "Locrian b4 bb5 bb6": [0, 1, 3, 4, 5, 7, 10]
        },
        "(7-25) Locrian b4 nat6 nat7": {
            "Locrian b4 nat6 nat7": [0, 1, 3, 4, 6, 9, 11],
            "Ionian b3 #5 #6, Melodic Minor #5 #6": [0, 2, 3, 5, 8, 10, 11],
            "Dorian b2 #4 #5, Phrygian #4 #5 nat6": [0, 1, 3, 6, 8, 9, 10],
            "Lydian #3 ##4 #5 #6": [0, 2, 5, 7, 8, 9, 11],
            "Lydian #2 #3 b7, Mixolydian #2 #3 #4": [0, 3, 5, 6, 7, 9, 10],
            "Locrian nat2 b4 bb6 bb7, Aeolian b4 b5 bb6 bb7": [0, 2, 3, 4, 6, 7, 9],
            "Locrian bb3 b4 bb5 bb6": [0, 1, 2, 4, 5, 7, 10]
        },
        "(7-24M) Enigmatic": {
            "Enigmatic, Lydian b6 bb7": [0, 2, 4, 6, 7, 8, 9],
            "Mixolydian b5 bb6 ": [0, 2, 4, 5, 6, 7, 10],
            "Aeolian b4 bb5": [0, 2, 3, 4, 5, 8, 10],
            "Locrian bb3 bb4": [0, 1, 2, 3, 6, 8, 10],
            "Ionian b2 bb3, Melodic Minor b2 bb3": [0, 1, 2, 5, 7, 9, 11],
            "Lydian b2 #5 #6": [0, 1, 4, 6, 8, 10, 11],
            "Lydian #2 #3 ##4 ##5 #6": [0, 3, 5, 7, 9, 10, 11]
        },
        "(7-24) Phrygian #6 nat7": {
            "Phrygian #6 nat7": [0, 1, 3, 5, 7, 10, 11],
            "Lydian ##5 #6": [0, 2, 4, 6, 9, 10, 11],
            "Lydian ##4 #5 b7": [0, 2, 4, 7, 8, 9, 10],
            "Lydian #3 b6 b7": [0, 2, 5, 6, 7, 8, 10],
            "Mixolydian #2 b5 b6": [0, 3, 4, 5, 6, 8, 10],
            "Locrian bb3 bb4 bb5 bb6 bb7": [0, 1, 2, 3, 5, 7, 9],
            "Locrian bb3 b4 nat 7": [0, 1, 2, 4, 6, 8, 11]
        },
        "(7-23M) Ionian b5 bb6 bb7": {
            "Ionian b5 bb6 bb7": [0, 2, 4, 5, 6, 7, 9],
            "Aeolian b4 bb5 bb6": [0, 2, 3, 4, 5, 7, 10],
            "Locrian bb3 bb4 bb5": [0, 1, 2, 3, 5, 8, 10],
            "Ionian b2 bb3 b4": [0, 1, 2, 4, 7, 9, 11],
            "Lydian b2 b3 #5 #6": [0, 1, 3, 6, 8, 10, 11],
            "Lydian #3 ##4 ##5 #6": [0, 2, 5, 7, 9, 10, 11],
            "Mixolydian #2 #3 ##4 #5": [0, 3, 5, 7, 8, 9, 10]
        },
        "(7-23) Phrygian #5 #6 nat7": {
            "Phrygian #5 #6 nat7": [0, 1, 3, 5, 8, 10, 11],
            "Lydian ##4 ##5 #6": [0, 2, 4, 7, 9, 10, 11],
            "Lydian #3 ##4 #5 b7": [0, 2, 5, 7, 8, 9, 10],
            "Lydian #2 #3 b6 b7": [0, 3, 5, 6, 7, 8, 10],
            "Locrian b4 bb5 bb6 bb7": [0, 2, 3, 4, 5, 7, 9],
            "Locrian bb3 bb4 bb5 bb6": [0, 1, 2, 3, 5, 7, 10],
            "Locrian bb3 b4 nat6 nat7": [0, 1, 2, 4, 6, 9, 11]
        },
        "(7-22) Double Harmonic/Hungarian Minor": {
            "Double Harmonic, Bhairav, Ionian b2 b6, Phrygian nat3 nat7": [0, 1, 4, 5, 7, 8, 11],
            "Lydian #2 #6": [0, 3, 4, 6, 7, 10, 11],
            "Phrygian b4 bb7": [0, 1, 3, 4, 7, 8, 9],
            "Hungarian Minor, Aeolian #4 nat7, Lydian b3 b6": [0, 2, 3, 6, 7, 8, 11],
            "Oriental, Mixolydian b2 b5, Locrian nat3 nat6": [0, 1, 4, 5, 6, 9, 10],
            "Ionian #2 #5": [0, 3, 4, 5, 8, 9, 11],
            "Locrian bb3 bb6": [0, 1, 2, 5, 6, 8, 9]
        },
        "(7-21M) Ionian b2 #5": {
            "Ionian b2 #5": [0, 1, 4, 5, 8, 9, 11],
            "Lydian #2 ##4 #5 #6": [0, 3, 4, 7, 8, 10, 11],
            "Phrygian nat3 bb7, Mixolydian b2 b6 bb7": [0, 1, 4, 5, 7, 8, 9],
            "Lydian #2 b6": [0, 3, 4, 6, 7, 8, 11],
            "Locrian b4 bb5 bb7": [0, 1, 3, 4, 5, 8, 9],
            "Aeolian b4 nat7, Harmonic Minor b4": [0, 2, 3, 4, 7, 8, 11],
            "Locrian bb3 nat6": [0, 1, 2, 5, 6, 9, 10]
        },
        "(7-21) Ionian #2 b6": {
            "Ionian #2 b6": [0, 3, 4, 5, 7, 8, 11],
            "Locrian bb3 b4 bb5 bb7": [0, 1, 2, 4, 5, 8, 9],
            "Phrygian b4 nat7": [0, 1, 3, 4, 7, 8, 11],
            "Lydian b3 #6": [0, 2, 3, 6, 7, 10, 11],
            "Mixolydian b2 #5": [0, 1, 4, 5, 8, 9, 10],
            "Lydian #2 ##4 #5": [0, 3, 4, 7, 8, 9, 11],
            "Locrian nat3 bb7": [0, 1, 4, 5, 6, 8, 9]
        },
        "(7-20M) Composite II, Ionian #2 #5 #6": {
            "Composite II, Ionian #2 #5 #6": [0, 3, 4, 5, 8, 10, 11],
            "Phrygian bb3 bb7": [0, 1, 2, 5, 7, 8, 9],
            "Purvi, Lydian b2 b6": [0, 1, 4, 6, 7, 8, 11],
            "Lydian #2 #3 #6": [0, 3, 5, 6, 7, 10, 11],
            "Aeolian b4 bb7": [0, 2, 3, 4, 7, 8, 9],
            "Locrian bb3 bb6": [0, 1, 2, 5, 6, 7, 10],
            "Locrian nat3 nat6 nat7, Ionian b2 b5": [0, 1, 4, 5, 6, 9, 11]
        },
        "(7-20) Persian, Ionian #2 #6": {
            "Persian, Ionian #2 #6": [0, 3, 4, 5, 7, 10, 11],
            "Phrygian bb2 b4 bb7": [0, 1, 2, 4, 7, 8, 9],
            "Todi, Phrygian #4 nat7, Lydian b2 b3 b6": [0, 1, 3, 6, 7, 8, 11],
            "Lydian #3 #6": [0, 2, 5, 6, 7, 10, 11],
            "Mixolydian #2 #5": [0, 3, 4, 5, 8, 9, 10],
            "Locrian bb3 bb6 bb7": [0, 1, 2, 5, 6, 7, 9],
            "Locrian nat 3 nat7, Ionian b2 b5 b6": [0, 1, 4, 5, 6, 8, 11]
        },
        "(7-19M) Ionian #2 b5": {
            "Ionian #2 b5": [0, 3, 4, 5, 6, 9, 11],
            "Locrian bb3 bb4 bb7": [0, 1, 2, 3, 6, 8, 9],
            "Phrygian bb3 nat7, Ionian b2 bb3 b6": [0, 1, 2, 5, 7, 8, 11],
            "Lydian b2 #6": [0, 1, 4, 6, 7, 10, 11],
            "Lydian #2 #3 #5 #6": [0, 3, 5, 6, 9, 10, 11],
            "Aeolian #4 bb7, Lydian b3 b6 bb7": [0, 2, 3, 6, 7, 8, 9],
            "Locrian nat3 bb6": [0, 1, 4, 5, 6, 7, 10]
        },
        "(7-19) Enigmatic Minor, Ionian #2 b5 b6": {
            "fixmeIonian #2 b5 b6": [0, 1, 2, 3, 6, 7, 9],
            "fixmeLocrian bb3 bb4 bb5 bb7": [0, 1, 2, 5, 6, 8, 11],
            "fixmePhrygian bb3 b4 nat7": [0, 1, 4, 5, 7, 10, 11],
            "fixmePhrygian #4 #6 nat7": [0, 3, 4, 6, 9, 10, 11],
            "fixmeLydian #3 ##5 #6": [0, 1, 3, 6, 7, 8, 9],
            "fixmeMixolydian #2 ##4 #5": [0, 2, 5, 6, 7, 8, 11],
            "fixmeLocrian nat3 bb6 bb7": [0, 3, 4, 5, 6, 9, 10]
        },
        "(7-Y18M) Locrian b4 bb6 bbb7": {
            "Locrian b4 bb6 bbb7": [0, 1, 3, 4, 6, 7, 8],
            "Locrian nat2 bb6 nat7": [0, 2, 3, 5, 6, 7, 11],
            "Locrian b4 bb5 nat6": [0, 1, 3, 4, 5, 9, 10],
            "Dorian b4 #5 nat7": [0, 2, 3, 4, 8, 9, 11],
            "Dorian b2 bb3 #4, Phrygian bb3 #4 nat6": [0, 1, 2, 6, 7, 9, 10],
            "Lydian b2 #5": [0, 1, 5, 6, 8, 9, 11],
            "Lydian ##2 #3 ##4 #5 #6": [0, 4, 5, 7, 8, 10, 11]
        },
        "(7-Y18) Locrian b4 bb6 nat7": {
            "Locrian b4 bb6 nat7": [0, 1, 3, 4, 6, 7, 11],
            "Locrian nat2 #6 nat7": [0, 2, 3, 5, 6, 10, 11],
            "Phrygian b4 #5 nat6, Dorian b2 b4 #5": [0, 1, 3, 4, 8, 9, 10],
            "Dorian ##4 #5 nat7": [0, 2, 3, 7, 8, 9, 11],
            "Lydian b2 #3 b7, Mixolydian b2 #3 #4": [0, 1, 5, 6, 7, 9, 10],
            "Lydian ##2 #3 #5": [0, 4, 5, 6, 8, 9, 11],
            "Locrian bb3 b4 bb6 bbb7": [0, 1, 2, 4, 5, 7, 8]
        },
        "(7-X18M) Lydian b2 b6 bb7": {
            "Lydian b2 b6 bb7": [0, 1, 4, 6, 7, 8, 9],
            "Lydian #2 #3 b6": [0, 3, 5, 6, 7, 8, 11],
            "Locrian nat2 b4 bb5 bb7": [0, 2, 3, 4, 5, 8, 9],
            "Locrian bb3 bb4 b5 bb6": [0, 1, 2, 3, 6, 7, 10],
            "Locrian bb3 nat6 nat7": [0, 1, 2, 5, 6, 9, 11],
            "Ionian b2 #5 #6": [0, 1, 4, 5, 8, 10, 11],
            "Lydian #2 #3 ##4 ##5 #6": [0, 3, 4, 7, 9, 10, 11]
        },
        "(7-X18) Phrygian #4 #6 nat7": {
            "Phrygian #4 #6 nat7": [0, 1, 3, 6, 7, 10, 11],
            "Lydian #3 ##5 #6": [0, 2, 5, 6, 9, 10, 11],
            "Mixolydian #2 ##4 #5, Lydian #2 ##4 #5 b7": [0, 3, 4, 7, 8, 9, 10],
            "Locrian nat3 bb6 bb7": [0, 1, 4, 5, 6, 7, 9],
            "Ionian #2 b5 b6": [0, 3, 4, 5, 6, 8, 11],
            "Locrian bb3 bb4 bb5 bb7": [0, 1, 2, 3, 5, 8, 9],
            "Phrygian bb3 b4 nat7": [0, 1, 2, 4, 7, 8, 11]
        },
        "(7-Z17) Dorian b4 #6 nat7": {
            "Dorian b4 #6 nat7, Melodic b4 #6": [0, 2, 3, 4, 7, 10, 11],
            "Phrygian bb3 #5 nat6, Dorian b2 bb3 #5": [0, 1, 2, 5, 8, 9, 10],
            "Lydian b2 ##4 #5": [0, 1, 4, 7, 8, 9, 11],
            "Lydian #2 #3 ##4 #5 #6": [0, 3, 6, 7, 8, 10, 11],
            "Mixolydian #2 b6 bb7": [0, 3, 4, 5, 7, 8, 9],
            "Locrian bb3 b4 bb5 bb6 bb7": [0, 1, 2, 4, 5, 6, 9],
            "Locrian b4 bb5 nat7": [0, 1, 3, 4, 5, 8, 11]
        },
        "(7-17) Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6": {
            "Locrian nat2 b4 bb6 nat7, Harmonic Minor b4 b5 bb6": [0, 2, 3, 4, 6, 7, 11],
            "Locrian bb3 b4 bb5 nat6": [0, 1, 2, 4, 5, 9, 10],
            "Dorian b2 b4 #5 nat7": [0, 1, 3, 4, 8, 9, 11],
            "Dorian ##4 #5 #6 nat7": [0, 2, 3, 7, 8, 10, 11],
            "Mixolydian b2 #3 #4 #5": [0, 1, 5, 6, 8, 9, 10],
            "Lydian ##2 #3 ##4 #5": [0, 4, 5, 7, 8, 9, 11],
            "Locrian b4 bb5 bb6 bbb7": [0, 1, 3, 4, 5, 7, 8]
        },
        "(7-16M) Lydian #2 b6 bb7": {
            "Lydian #2 b6 bb7": [0, 3, 4, 6, 7, 8, 9],
            "Locrian b4 bb5 bbb6 bbb7": [0, 1, 3, 4, 5, 6, 9],
            "Locrian nat2 b4 bb5 nat7": [0, 2, 3, 4, 5, 8, 11],
            "Locrian bb3 bb4 nat6": [0, 1, 2, 3, 6, 9, 10],
            "Phrygian bb3 #5 nat6, Dorian b2 bb3 #5": [0, 1, 2, 5, 8, 9, 11],
            "Lydian b2 ##4 #5 #6": [0, 1, 4, 7, 8, 10, 11],
            "Lydian #2 ##3 ##4 ##5 #6": [0, 3, 6, 7, 9, 10, 11]
        },
        "(7-16) Phrygian b4 #6 nat7": {
            "Phrygian b4 #6 nat7": [0, 1, 3, 4, 7, 10, 11],
            "Lydian b3 ##5 #6, Dorian #4 ##5 #6 nat7": [0, 2, 3, 6, 9, 10, 11],
            "Mixolydian b2 ##4 #5": [0, 1, 4, 7, 8, 9, 10],
            "Lydian #2 ##3 ##4 #5": [0, 3, 6, 7, 8, 9, 11],
            "Mixolydian #2 b5 b6 bb7, Locrian #2 nat3 bb7": [0, 3, 4, 5, 6, 8, 9],
            "Locrian bb3 bb4 bb5 bbb6 bb7": [0, 1, 2, 3, 5, 6, 9],
            "Locrian bb3 bb4 bb5 nat7": [0, 1, 2, 4, 5, 8, 11]
        },
        "(7-15) Ionian b5 #6": {
            "Ionian b5 #6": [0, 2, 4, 5, 6, 10, 11],
            "Dorian b4 #5": [0, 2, 3, 4, 8, 9, 10],
            "Phrygian bb3 #4": [0, 1, 2, 6, 7, 8, 10],
            "Lydian b2 #3": [0, 1, 5, 6, 7, 9, 11],
            "Lydian ##2 #3 #5 #6": [0, 4, 5, 6, 8, 10, 11],
            "Locrian bb3 b4 bb6 bbb7": [0, 1, 2, 4, 6, 7, 8],
            "Locrian bb3 bb6 nat7": [0, 1, 3, 5, 6, 7, 11]
        },
        "(7-14M) Locrian bb6 bbb7": {
            "Locrian bb6 bbb7": [0, 1, 3, 5, 6, 7, 8],
            "Ionian b5 bb6": [0, 2, 4, 5, 6, 7, 11],
            "Dorian b4 bb5": [0, 2, 3, 4, 5, 9, 10],
            "Phrygian bb3 bb4": [0, 1, 2, 3, 7, 8, 10],
            "Lydian b2 bb3": [0, 1, 2, 6, 7, 9, 11],
            "Lydian b2 #3 #5 #6": [0, 1, 5, 6, 8, 10, 11],
            "Lydian ##2 #3 ##4 ##5 #6": [0, 4, 5, 7, 9, 10, 11]
        },
        "(7-14) Locrian bb3 b4 bb6 nat7": {
            "Locrian bb3 b4 bb6 nat7": [0, 1, 2, 4, 6, 7, 11],
            "Locrian #6 nat7": [0, 1, 3, 5, 6, 10, 11],
            "Ionian ##5 #6": [0, 2, 4, 5, 9, 10, 11],
            "Dorian ##4 #5": [0, 2, 3, 7, 8, 9, 10],
            "Phrygian #3 #4": [0, 1, 5, 6, 7, 8, 10],
            "Lydian ##2 #3": [0, 4, 5, 6, 7, 9, 11],
            "Locrian bb3 bb4 bb5 bb6 bbb7": [0, 1, 2, 3, 5, 7, 8]
        },
        "(7-13M) Dorian b4 #5 #6 nat7": {
            "Dorian b4 #5 #6 nat7": [0, 2, 3, 4, 8, 10, 11],
            "Phrygian bb3 #4 #5 nat6": [0, 1, 2, 6, 8, 9, 10],
            "Lydian b2 #3 ##4 #5": [0, 1, 5, 7, 8, 9, 11],
            "Lydian ##2 ##3 ##4 #5 #6": [0, 4, 6, 7, 8, 10, 11],
            "Locrian nat2 b4 bb5 bb6 bbb7": [0, 2, 3, 4, 6, 7, 8],
            "Locrian bb3 b4 bb5 bbb6": [0, 1, 2, 4, 5, 6, 10],
            "Locrian b4 bb5 nat6 nat7": [0, 1, 3, 4, 5, 9, 11]
        },
        "(7-13) Locrian b4 bb5 bb6 nat7": {
            "Locrian b4 bb5 bb6 nat7": [0, 1, 3, 4, 5, 7, 11],
            "Locrian nat2 b4 #6 nat7": [0, 2, 3, 4, 6, 10, 11],
            "Dorian b2 bb3 #5, Phrygian bb3 #5 nat6": [0, 1, 2, 4, 8, 9, 10],
            "Dorian b2 ##4 #5 nat7, Phrygian ##4 #5 nat6 nat7": [0, 1, 3, 7, 8, 9, 11],
            "Lydian ##3 ##4 #5 #6": [0, 2, 6, 7, 8, 10, 11],
            "Mixolydian ##2 #3 #4 #5, Lydian ##2 #3 #5 b7": [0, 4, 5, 6, 8, 9, 10],
            "Locrian bb3 b4 bb5 bbb6 bbb7": [0, 1, 2, 4, 5, 6, 8]
        },
        "(7-Z12) Mixolydian #2 b5 bb6": {
            "Mixolydian #2 b5 bb6": [0, 3, 4, 5, 6, 7, 10],
            "Locrian bb3 bb4 bbb5 bb6 bb7": [0, 1, 2, 3, 4, 7, 9],
            "Locrian bb3 bb4 nat7": [0, 1, 2, 3, 6, 8, 11],
            "Phrygian bb3 #6 nat7": [0, 1, 2, 5, 7, 10, 11],
            "Lydian b2 ##5 #6": [0, 1, 4, 6, 9, 10, 11],
            "Lydian #2 #3 ###4 ##5 #6": [0, 3, 5, 8, 9, 10, 11],
            "Aeolian #3 #4 bb7": [0, 2, 5, 6, 7, 8, 9]
        },
        "(7-12M) Locrian nat2 bb6 bbb7": {
            "Locrian nat2 bb6 bbb7": [0, 2, 3, 5, 6, 7, 8],
            "Locrian b4 bb5 bbb6": [0, 1, 3, 4, 5, 6, 10],
            "Dorian b4 bb5 nat7": [0, 2, 3, 4, 5, 9, 11],
            "Dorian b2 bb3 bb4, Phrygian bb3 bb4 nat6": [0, 1, 2, 3, 7, 9, 10],
            "Lydian b2 bb3 #5": [0, 1, 2, 6, 8, 9, 11],
            "Lydian b2 #3 ##4 #5 #6": [0, 1, 5, 7, 8, 10, 11],
            "Lydian ##2 ##3 ##4 ##5 #6": [0, 4, 6, 7, 9, 10, 11]
        },
        "(7-12) Dorian b2 ##4 #5": {
            "Dorian b2 ##4 #5": [0, 1, 3, 7, 8, 9, 10],
            "Lydian ##3 ##4 #5": [0, 2, 6, 7, 8, 9, 11],
            "Lydian ##2 #3 b7, Mixolydian ##2 #3 #4": [0, 4, 5, 6, 7, 9, 10],
            "Locrian bb3 bb4 bb5 bbb6 bbb7": [0, 1, 2, 3, 5, 6, 8],
            "Locrian bb3 b4 bb5 bb6 nat7": [0, 1, 2, 4, 5, 7, 11],
            "Locrian b4 #6 nat7": [0, 1, 3, 4, 6, 10, 11],
            "Dorian ##5 #6 nat7": [0, 2, 3, 5, 9, 10, 11]
        },
        "(7-11M) Phrygian b4 #5 #6 nat7": {
            "fixmePhrygian b4 #5 #6 nat7": [0, 2, 3, 4, 5, 7, 8],
            "fixmeDorian ##4 ##5 #6 nat7": [0, 1, 2, 3, 5, 6, 10],
            "fixmeLydian b2 ##3 ###4 ##5 #6": [0, 1, 2, 4, 5, 9, 11],
            "fixmeLydian ###2 ###3 ###4 ##5 #6": [0, 1, 3, 4, 8, 10, 11],
            "fixmeAeolian b4 bb5 bbb6 bbbb7": [0, 2, 3, 7, 9, 10, 11],
            "fixmeLocrian bb3 bb4 bbb5 bbbb6": [0, 1, 5, 7, 8, 9, 10],
            "fixmeLocrian bb3 bb4 bbb5 #6 nat7": [0, 4, 6, 7, 8, 9, 11]
        },
        "(7-11) Aeolian b4 bb5 bb6 nat7": {
            "Aeolian b4 bb5 bb6 nat7": [0, 2, 3, 4, 5, 7, 11],
            "Locrian bb3 bb4 bb5 nat6": [0, 1, 2, 3, 5, 9, 10],
            "Ionian b2 bb3 #5": [0, 1, 2, 4, 8, 9, 11],
            "Phrygian ##4 #5 #6 nat7": [0, 1, 3, 7, 8, 10, 11],
            "Lydian ##3 ##4 ##5 #6": [0, 2, 6, 7, 9, 10, 11],
            "Mixolydian ##2 #3 ##4 #5": [0, 4, 5, 7, 8, 9, 10],
            "Locrian b4 bb5 bbb6 bbb7": [0, 1, 3, 4, 5, 6, 8]
        },
        "(7-10M) Aeolian b4 bb5 bbb6 bb7": {
            "Aeolian b4 bb5 bbb6 bb7": [0, 2, 3, 4, 5, 6, 9],
            "Locrian bb3 bb4 bbb5 bb6": [0, 1, 2, 3, 4, 7, 10],
            "Locrian bb3 bb4 nat6 nat7": [0, 1, 2, 3, 6, 9, 11],
            "Ionian b2 bb3 #5 #6": [0, 1, 2, 5, 8, 10, 11],
            "Lydian b2 ##4 ##5 #6": [0, 1, 4, 7, 9, 10, 11],
            "Lydian #2 ##3 ###4 ##5 #6": [0, 3, 6, 8, 9, 10, 11],
            "Lydian #2 #3 b6 bb7": [0, 3, 5, 6, 7, 8, 9]
        },
        "(7-10) Mixolydian #2 b5 bb6 bb7": {
            "Mixolydian #2 b5 bb6 bb7": [0, 3, 4, 5, 6, 7, 9],
            "Locrian bb3 bb4 bbb5 bbb6 bb7": [0, 1, 2, 3, 4, 6, 9],
            "Locrian bb3 bb4 bb5 nat7": [0, 1, 2, 3, 5, 8, 11],
            "Ionian b2 bb3 b4 #6": [0, 1, 2, 4, 7, 10, 11],
            "Lydian b2 b3 ##5 #6": [0, 1, 3, 6, 9, 10, 11],
            "Lydian #3 ###4 ##5 #6": [0, 2, 5, 8, 9, 10, 11],
            "Mixolydian #2 ##3 ##4 #5": [0, 3, 6, 7, 8, 9, 10]
        },
        "(7-9M) Mixolydian b5 bb6 bbb7": {
            "Mixolydian b5 bb6 bbb7": [0, 2, 4, 5, 6, 7, 8],
            "Locrian b4 bb5 bbb6": [0, 2, 3, 4, 5, 6, 10],
            "Locrian bb3 bb4 bbb5": [0, 1, 2, 3, 4, 8, 10],
            "Dorian b2 bb3 bb4 nat7": [0, 1, 2, 3, 7, 9, 11],
            "Lydian b2 bb3 #5 #6": [0, 1, 2, 6, 8, 10, 11],
            "Lydian b2 #3 ##4 ##5 #6": [0, 1, 5, 7, 9, 10, 11],
            "Lydian ##2 ##3 ###4 ##5 #6": [0, 4, 6, 8, 9, 10, 11]
        },
        "(7-9) Phrygian ##5 #6 nat7": {
            "Phrygian ##5 #6 nat7": [0, 1, 3, 5, 9, 10, 11],
            "Lydian ###4 ##5 #6": [0, 2, 4, 8, 9, 10, 11],
            "Mixolydian ##3 ##4 #5": [0, 2, 6, 7, 8, 9, 10],
            "Mixolydian ##2 #3 #4 b6": [0, 4, 5, 6, 7, 8, 10],
            "Locrian bb3 bb4 bbb5 bb6 bbb7": [0, 1, 2, 3, 4, 6, 8],
            "Locrian bb3 bb4 bb5 bb6 nat7": [0, 1, 2, 3, 5, 7, 11],
            "Locrian bb3 #6 nat7": [0, 1, 2, 4, 6, 10, 11]
        },
        "(7-8) Phrygian ##4 ##5 #6 nat7": {
            "Phrygian ##4 ##5 #6 nat7": [0, 1, 3, 7, 9, 10, 11],
            "Lydian ##3 ###4 ##5 #6": [0, 2, 6, 8, 9, 10, 11],
            "Mixolydian ##2 ##3 ##4 #5": [0, 4, 6, 7, 8, 9, 10],
            "Aeolian b3 bb5 bbb6 bbb7": [0, 2, 3, 4, 5, 6, 8],
            "Locrian bb3 bb4 bbb5 bbb6": [0, 1, 2, 3, 4, 6, 10],
            "Locrian bb3 bb4 bb5 nat6 nat7": [0, 1, 2, 3, 5, 9, 11],
            "Dorian b2 bb3 #5 #6 nat7": [0, 1, 2, 4, 8, 10, 11]
        },
        "(7-7M) Ionian b2 b5 bb6": {
            "Ionian b2 b5 bb6": [0, 1, 4, 5, 6, 7, 11],
            "Ionian #2 b5 #6": [0, 3, 4, 5, 6, 10, 11],
            "Phrygian bb3 bb4 bb7": [0, 1, 2, 3, 7, 8, 9],
            "Lydian b2 bb3 b6": [0, 1, 2, 6, 7, 8, 11],
            "Lydian b2 #3 #6": [0, 1, 5, 6, 7, 10, 11],
            "Lydian ##2 #3 ##5 #6": [0, 4, 5, 6, 9, 10, 11],
            "Locrian bb3 bb6 bbb7": [0, 1, 2, 5, 6, 7, 8]
        },
        "(7-7) Ionian #2 ##5 #6": {
            "Ionian #2 ##5 #6": [0, 3, 4, 5, 9, 10, 11],
            "Phrygian bb3 #4 bb7": [0, 1, 2, 6, 7, 8, 9],
            "Lydian b2 #3 b6": [0, 1, 5, 6, 7, 8, 11],
            "Lydian ##2 #3 #6": [0, 4, 5, 6, 7, 10, 11],
            "Locrian bb3 bb4 bb6 bbb7": [0, 1, 2, 3, 6, 7, 8],
            "Locrian bb3 bb6 nat7": [0, 1, 2, 5, 6, 7, 11],
            "Locrian nat3 #6": [0, 1, 4, 5, 6, 10, 11]
        },
        "(7-6M) Ionian #2 b5 bb6": {
            "Ionian #2 b5 bb6": [0, 3, 4, 5, 6, 7, 11],
            "Locrian bb3 bb4 bbb5 bb7": [0, 1, 2, 3, 4, 8, 9],
            "Phrygian bb3 bb4 nat7": [0, 1, 2, 3, 7, 8, 11],
            "Lydian b2 bb3 #6": [0, 1, 2, 6, 7, 10, 11],
            "Lydian b2 #3 ##5 #6": [0, 1, 5, 6, 9, 10, 11],
            "Lydian ##2 #3 ###4 ##5 #6": [0, 4, 5, 8, 9, 10, 11],
            "Locrian nat3 bb6 bbb7": [0, 1, 4, 5, 6, 7, 8]
        },
        "(7-6) Ionian b2 ##5 #6": {
            "Ionian b2 ##5 #6": [0, 1, 4, 5, 9, 10, 11],
            "Lydian #2 ###4 ##5 #6": [0, 3, 4, 8, 9, 10, 11],
            "Lydian b2 #3 b6 bb7": [0, 1, 5, 6, 7, 8, 9],
            "Lydian ##2 #3 b6": [0, 4, 5, 6, 7, 8, 11],
            "Locrian bb3 bb4 bbb5 bb6 bbb7": [0, 1, 2, 3, 4, 7, 8],
            "Locrian bb3 bb4 bb6 nat7": [0, 1, 2, 3, 6, 7, 11],
            "Locrian bb3 #6 nat7": [0, 1, 2, 5, 6, 10, 11]
        },
        "(7-5M) Locrian b4 bb5 bbb6 nat7": {
            "Locrian b4 bb5 bbb6 nat7": [0, 1, 3, 4, 5, 6, 11],
            "Dorian b4 bb5 #6 nat7": [0, 2, 3, 4, 5, 10, 11],
            "Dorian b2 bb3 bb4 #5": [0, 1, 2, 3, 8, 9, 10],
            "Lydian b2 bb3 ##4 #5": [0, 1, 2, 7, 8, 9, 11],
            "Lydian b2 ##3 ##4 #5 #6": [0, 1, 6, 7, 8, 10, 11],
            "Lydian ###2 ##3 ##4 ##5 #6": [0, 5, 6, 7, 9, 10, 11],
            "Locrian bb3 b4 bb5 bbb6 bbbb7": [0, 1, 2, 4, 5, 6, 7]
        },
        "(7-5) Locrian b4 bb5 #6 nat7": {
            "Locrian b4 bb5 #6 nat7": [0, 1, 3, 4, 5, 10, 11],
            "Dorian b4 ##5 #6": [0, 2, 3, 4, 9, 10, 11],
            "Dorian b2 bb3 ##4 #5": [0, 1, 2, 7, 8, 9, 10],
            "Lydian b2 ##4 #5": [0, 1, 6, 7, 8, 9, 11],
            "Lydian ###2 ##3 ##4 #5 #6": [0, 5, 6, 7, 8, 10, 11],
            "Locrian bb3 bb4 bb5 bbb6 bbbb7": [0, 1, 2, 3, 5, 6, 7],
            "Locrian bb3 bb4 bb5 bbb6 nat7": [0, 1, 2, 4, 5, 6, 11]
        },
        "(7-4M) Locrian b4 bb5 bbb6 bbbb7": {
            "Locrian b4 bb5 bbb6 bbbb7": [0, 1, 3, 4, 5, 6, 7],
            "Aeolian b4 bb5 bbb6 nat7": [0, 2, 3, 4, 5, 6, 11],
            "Dorian b2 bb3 bb4 bbb5": [0, 1, 2, 3, 4, 9, 10],
            "Dorian b2 bb3 bb4 #5 nat7": [0, 1, 2, 3, 8, 9, 11],
            "Lydian b2 bb3 ##4 #5 #6": [0, 1, 2, 7, 8, 10, 11],
            "Lydian b2 ##3 ##4 ##5 #6": [0, 1, 6, 7, 9, 10, 11],
            "Lydian ###2 ##3 ###4 ##5 #6": [0, 5, 6, 8, 9, 10, 11]
        },
        "(7-4) Lydian ###2 ##3 ##4 #5": {
            "Lydian ###2 ##3 ##4 #5": [0, 5, 6, 7, 8, 9, 11],
            "Locrian b2 bb3 bb4 bbb5 bbb6 bbbb7": [0, 1, 2, 3, 4, 6, 7],
            "Locrian b2 bb3 bb4 bb5 bbb6 nat7": [0, 1, 2, 3, 5, 6, 11],
            "Locrian b2 bb3 b4 bb5 #6 nat7": [0, 1, 2, 4, 5, 10, 11],
            "Dorian b2 b4 ##5 #6 nat7": [0, 1, 3, 4, 9, 10, 11],
            "Dorian ###4 ##5 #6 7": [0, 2, 3, 8, 9, 10, 11],
            "Mixolydian b2 ##3 ##4 #5": [0, 1, 6, 7, 8, 9, 10]
        },
        "(7-3M) Mixolydian #2 b5 bb6 bbb7": {
            "fixmeMixolydian #2 b5 bb6 bbb7": [0, 3, 4, 5, 6, 7, 8],
            "fixmeLocrian bb3 bb4 bbb5 bbbb6 bbb7": [0, 1, 2, 3, 4, 5, 9],
            "fixmeLocrian bb3 bb4 bbb5 bb6 nat7": [0, 1, 2, 3, 4, 8, 11],
            "fixmeLocrian bb3 bb4 #6 nat7": [0, 1, 2, 3, 7, 10, 11],
            "fixmeIonian b2 bb3 ##5 #6 nat7": [0, 1, 2, 6, 9, 10, 11],
            "fixmeLydian b2 ###4 ##5 #6": [0, 1, 5, 8, 9, 10, 11],
            "fixmeLydian #2 ###3 ###4 ##5 #6": [0, 4, 7, 8, 9, 10, 11]
        },
        "(7-3) Locrian bb3 bb4 bbb5 bbbb6 bbb7": {
            "Locrian bb3 bb4 bbb5 bbbb6 bbb7": [0, 1, 2, 3, 4, 5, 8],
            "Locrian bb3 bb4 bbb5 bb6 nat7": [0, 1, 2, 3, 4, 7, 11],
            "Locrian bb3 bb4 #6 nat7": [0, 1, 2, 3, 6, 10, 11],
            "Dorian b2 bb3 ##5 #6 nat7": [0, 1, 2, 5, 9, 10, 11],
            "Lydian b2 ###4 ##5 #6": [0, 1, 4, 8, 9, 10, 11],
            "Lydian #2 ###3 ###4 ##5 #6": [0, 3, 7, 8, 9, 10, 11],
            "Lydian ##2 #3 b6 bb7": [0, 4, 5, 6, 7, 8, 9]
        },
        "(7-2M) Aeolian b4 bb5 bbb6 bbbb7": {
            "Aeolian b4 bb5 bbb6 bbbb7": [0, 2, 3, 4, 5, 6, 7],
            "Locrian bb3 bb4 bbb5 bbbb6": [0, 1, 2, 3, 4, 5, 10],
            "Locrian bb3 bb4 bbb5 nat6 nat7": [0, 1, 2, 3, 4, 9, 11],
            "Dorian b2 bb3 bb4 #5 #6 nat7": [0, 1, 2, 3, 8, 10, 11],
            "Lydian b2 bb3 ##4 ##5 #6": [0, 1, 2, 7, 9, 10, 11],
            "Lydian b2 ##3 ###4 ##5 #6": [0, 1, 6, 8, 9, 10, 11],
            "Lydian ###2 ###3 ###4 ##5 #6": [0, 5, 7, 8, 9, 10, 11]
        },
        "(7-2) Locrian bb3 bb4 bbb5 bbbb6 bbbb7": {
            "Locrian bb3 bb4 bbb5 bbbb6 bbbb7": [0, 1, 2, 3, 4, 5, 7],
            "Locrian bb3 bb4 bbb5 bbb6 nat7": [0, 1, 2, 3, 4, 6, 11],
            "Locrian bb3 bb4 bb5 #6 nat7": [0, 1, 2, 3, 5, 10, 11],
            "Dorian b2 bb3 b4 ##5 #6 nat7": [0, 1, 2, 4, 9, 10, 11],
            "Phrygian ###4 ##5 #6 nat7": [0, 1, 3, 8, 9, 10, 11],
            "Lydian ###3 ###4 ##5 #6": [0, 2, 7, 8, 9, 10, 11],
            "Mixolydian ###2 ##3 ##4 #5": [0, 5, 6, 7, 8, 9, 10]
        },
        "(7-1) Chromatic Septachord": {
            "Chromatic Septachord, Locrian bb3 bb4 bbb5 bbbb6 bbbbb7": [0, 1, 2, 3, 4, 5, 6],
            "Locrian bb3 bb4 bbb5 bbbb6 nat7": [0, 1, 2, 3, 4, 5, 11],
            "Locrian bb3 bb4 bbb5 #6 nat7": [0, 1, 2, 3, 4, 10, 11],
            "Dorian b2 bb3 bb4 ##5 #6 nat7": [0, 1, 2, 3, 9, 10, 11],
            "Lydian b2 bb3 ###4 ##5 #6": [0, 1, 2, 8, 9, 10, 11],
            "Lydian b2 ###3 ###4 ##5 #6": [0, 1, 7, 8, 9, 10, 11],
            "Lydian  ####2 ###3 ###4 ##5 #6": [0, 6, 7, 8, 9, 10, 11]
        }
    },
    octads: {
        "(8-1) Complementary to Chromatic Tetrachord": {
            "Chromatic no(b6 6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 7],
            "Chromatic no(5 b6 6 b7)": [0, 1, 2, 3, 4, 5, 6, 11],
            "Chromatic no(b5 5 b6 6)": [0, 1, 2, 3, 4, 5, 10, 11],
            "Chromatic no(4 b5 5 b6)": [0, 1, 2, 3, 4, 9, 10, 11],
            "Chromatic no(3 4 b5 5)": [0, 1, 2, 3, 8, 9, 10, 11],
            "Chromatic no(b3 3 4 b5)": [0, 1, 2, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 3 4)": [0, 1, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 b3 3)": [0, 5, 6, 7, 8, 9, 10, 11]
        },
        "(8-2) Complementary to Minor b4 Tetrachord": {
            "Chromatic no(5 6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 8],
            "Chromatic no(b5 b6 6 b7)": [0, 1, 2, 3, 4, 5, 7, 11],
            "Chromatic no(4 5 b6 6)": [0, 1, 2, 3, 4, 6, 10, 11],
            "Chromatic no(3 b5 5 b6)": [0, 1, 2, 3, 5, 9, 10, 11],
            "Chromatic no(b3 4 b5 5)": [0, 1, 2, 4, 8, 9, 10, 11],
            "Chromatic no(2 3 4 b5)": [0, 1, 3, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3 3 4)": [0, 2, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 b3 7)": [0, 4, 5, 6, 7, 8, 9, 10]
        },
        "(8-2M) Complementary to Super Locrian bb3 b4 Tetrachord": {
            "Chromatic no(b2 6 b7 7)": [0, 2, 3, 4, 5, 6, 7, 8],
            "Chromatic no(5 b6 6 7)": [0, 1, 2, 3, 4, 5, 6, 10],
            "Chromatic no(b5 5 b6 b7)": [0, 1, 2, 3, 4, 5, 9, 11],
            "Chromatic no(4 b5 5 6)": [0, 1, 2, 3, 4, 8, 10, 11],
            "Chromatic no(3 4 b5 b6)": [0, 1, 2, 3, 7, 9, 10, 11],
            "Chromatic no(b3 3 4 5)": [0, 1, 2, 6, 8, 9, 10, 11],
            "Chromatic no(2 b3 3 b5)": [0, 1, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 b3 4)": [0, 4, 6, 7, 8, 9, 10, 11]
        },
        "(8-3) Complementary to Super locrian Tetrachord": {
            "Chromatic no(5 b6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 9],
            "Chromatic no(b5 5 6 b7)": [0, 1, 2, 3, 4, 5, 8, 11],
            "Chromatic no(4 b5 b6 6)": [0, 1, 2, 3, 4, 7, 10, 11],
            "Chromatic no(3 4 5 b6)": [0, 1, 2, 3, 6, 9, 10, 11],
            "Chromatic no(b3 3 b5 5)": [0, 1, 2, 5, 8, 9, 10, 11],
            "Chromatic no(2 b3 4 b5)": [0, 1, 4, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 3 4)": [0, 3, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 b7 7)": [0, 3, 4, 5, 6, 7, 8, 9]
        },
        "(8-4) Complementary to Major #2 Tetrachord": {
            "Chromatic no(b5 6 b7 7)": [0, 1, 2, 3, 4, 5, 7, 8],
            "Chromatic no(4 b6 6 b7)": [0, 1, 2, 3, 4, 6, 7, 11],
            "Chromatic no(3 5 b6 6)": [0, 1, 2, 3, 5, 6, 10, 11],
            "Chromatic no(b3 b5 5 b6)": [0, 1, 2, 4, 5, 9, 10, 11],
            "Chromatic no(2 4 b5 5)": [0, 1, 3, 4, 8, 9, 10, 11],
            "Chromatic no(b2 3 4 b5)": [0, 2, 3, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 3 7)": [0, 1, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 2 b3 b7)": [0, 4, 5, 6, 7, 8, 9, 11]
        },
        "(8-4M) Complementary to Phrygian bb3 Tetrachord": {
            "Chromatic no(2 6 b7 7)": [0, 1, 3, 4, 5, 6, 7, 8],
            "Chromatic no(b2 b6 6 b7)": [0, 2, 3, 4, 5, 6, 7, 11],
            "Chromatic no(b5 5 b6 7)": [0, 1, 2, 3, 4, 5, 9, 10],
            "Chromatic no(4 b5 5 b7)": [0, 1, 2, 3, 4, 8, 9, 11],
            "Chromatic no(3 4 b5 6)": [0, 1, 2, 3, 7, 8, 10, 11],
            "Chromatic no(b3 3 4 b6)": [0, 1, 2, 6, 7, 9, 10, 11],
            "Chromatic no(2 b3 3 5)": [0, 1, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 2 b3 b5)": [0, 4, 5, 7, 8, 9, 10, 11]
        },
        "(8-5) Complementary to Major b5 (11)": {
            "Chromatic no(4 6 b7 7)": [0, 1, 2, 3, 4, 6, 7, 8],
            "Chromatic no(3 b6 6 b7)": [0, 1, 2, 3, 5, 6, 7, 11],
            "Chromatic no(b3 5 b6 6)": [0, 1, 2, 4, 5, 6, 10, 11],
            "Chromatic no(2 #4 5 b6)": [0, 1, 3, 4, 5, 9, 10, 11],
            "Chromatic no(b2 4 b5 5)": [0, 2, 3, 4, 8, 9, 10, 11],
            "Chromatic no(b3 3 4 7)": [0, 1, 2, 6, 7, 8, 9, 10],
            "Chromatic no(2 b3 3 b7)": [0, 1, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 2 b3 6)": [0, 4, 5, 6, 7, 8, 10, 11]
        },
        "(8-5M) Complementary to Diminished bb3 (b9)": {
            "Chromatic no(b3 6 b7 7)": [0, 1, 2, 4, 5, 6, 7, 8],
            "Chromatic no(2 b6 6 b7)": [0, 1, 3, 4, 5, 6, 7, 11],
            "Chromatic no(b2 5 b6 6)": [0, 2, 3, 4, 5, 6, 10, 11],
            "Chromatic no(4 b5 5 7)": [0, 1, 2, 3, 4, 8, 9, 10],
            "Chromatic no(3 4 b5 b7)": [0, 1, 2, 3, 7, 8, 9, 11],
            "Chromatic no(b3 3 4 6)": [0, 1, 2, 6, 7, 8, 10, 11],
            " Chromatic no(2 b3 3 b6)": [0, 1, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 2 b3 5)": [0, 4, 5, 6, 8, 9, 10, 11]
        },
        "(8-6) Complementary to Minor bb3 (b9)": {
            "Chromatic no(3 6 b7 7)": [0, 1, 2, 3, 5, 6, 7, 8],
            "Chromatic no(b3 b6 6 b7)": [0, 1, 2, 4, 5, 6, 7, 11],
            "Chromatic no(2 5 b6 6)": [0, 1, 3, 4, 5, 6, 10, 11],
            "Chromatic no(b2 b5 5 b6)": [0, 2, 3, 4, 5, 9, 10, 11],
            "Chromatic no(3 4 b5 7)": [0, 1, 2, 3, 7, 8, 9, 10],
            "Chromatic no(b3 3 4 b7)": [0, 1, 2, 6, 7, 8, 9, 11],
            "Chromatic no(2 b3 3 6)": [0, 1, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 2 b3 b6)": [0, 4, 5, 6, 7, 9, 10, 11]
        },
        "(8-7) Complementary to Phrygian Major Tetrachord": {
            "Chromatic no(b5 5 b7 7)": [0, 1, 2, 3, 4, 5, 8, 9],
            "Chromatic no(4 b5 6 b7)": [0, 1, 2, 3, 4, 7, 8, 11],
            "Chromatic no(3 4 b6 6)": [0, 1, 2, 3, 6, 7, 10, 11],
            "Chromatic no(b3 3 5 b6)": [0, 1, 2, 5, 6, 9, 10, 11],
            "Chromatic no(2 b3 b5 5)": [0, 1, 4, 5, 8, 9, 10, 11],
            "Chromatic no(b2 2 4 b5)": [0, 3, 4, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 b7 7)": [0, 1, 4, 5, 6, 7, 8, 9],
            "Chromatic no(b2 2 6 b7)": [0, 3, 4, 5, 6, 7, 8, 11]
        },
        "(8-8) Complementary to Ionian Quartal Quadrad": {
            "Chromatic no(4 b5 b7 7)": [0, 1, 2, 3, 4, 7, 8, 9],
            "Chromatic no(3 4 6 b7)": [0, 1, 2, 3, 6, 7, 8, 11],
            "Chromatic no(b3 3 b6 6)": [0, 1, 2, 5, 6, 7, 10, 11],
            "Chromatic no(2 b3 5 b6)": [0, 1, 4, 5, 6, 9, 10, 11],
            "Chromatic no(b2 2 b5 5)": [0, 3, 4, 5, 8, 9, 10, 11],
            "Chromatic no(b3 3 b7 7)": [0, 1, 2, 5, 6, 7, 8, 9],
            "Chromatic no(2 b3 6 b7)": [0, 1, 4, 5, 6, 7, 8, 11],
            "Chromatic no(b2 2 b6 6)": [0, 3, 4, 5, 6, 7, 10, 11]
        },
        "(8-9S) Complementary to Diminished Major 7 sus4": {
            "Chromatic no(3 4 b7 7)": [0, 1, 2, 3, 6, 7, 8, 9],
            "Chromatic no(b3 3 6 b7), Messiaen Mode 4": [0, 1, 2, 5, 6, 7, 8, 11],
            "Chromatic no(2 b3 b6 6)": [0, 1, 4, 5, 6, 7, 10, 11],
            "Chromatic no(b2 2 5 b6)": [0, 3, 4, 5, 6, 9, 10, 11]
        },
        "(8-10) Complementary to Minor Tetrachord": {
            "Chromatic no(b2 b6 b7 7)": [0, 2, 3, 4, 5, 6, 7, 9],
            "Chromatic no(b5 b6 6 7)": [0, 1, 2, 3, 4, 5, 7, 10],
            "Chromatic no(4 5 b6 b7)": [0, 1, 2, 3, 4, 6, 9, 11],
            "Chromatic no(3 b5 5 6)": [0, 1, 2, 3, 5, 8, 10, 11],
            "Chromatic no(b3 4 b5 b6)": [0, 1, 2, 4, 7, 9, 10, 11],
            "Chromatic no(2 3 4 5)": [0, 1, 3, 6, 8, 9, 10, 11],
            "Chromatic no(b2 b3 3 b5)": [0, 2, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 3 7)": [0, 3, 5, 6, 7, 8, 9, 10]
        },
        "(8-11) Complementary to Major Tetrachord": {
            "Chromatic no(b5 b6 b7 7)": [0, 1, 2, 3, 4, 5, 7, 9],
            "Chromatic no(4 5 6 b7)": [0, 1, 2, 3, 4, 6, 8, 11],
            "Chromatic no(3 b5 b6 6)": [0, 1, 2, 3, 5, 7, 10, 11],
            "Chromatic  no(b3 4 5 b6)": [0, 1, 2, 4, 6, 9, 10, 11],
            "Chromatic no(2 3 b5 b6)": [0, 1, 3, 5, 8, 9, 10, 11],
            "Chromatic no(b2 b3 4 b5)": [0, 2, 4, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3 3 7)": [0, 2, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 2 6 7)": [0, 3, 4, 5, 6, 7, 8, 10]
        },
        "(8-11M) Complementary to Minor Tetrachord": {
            "Chromatic no(b2 b3 b7 7)": [0, 2, 4, 5, 6, 7, 8, 9],
            "Chromatic no(b2 b6 6 7)": [0, 2, 3, 4, 5, 6, 7, 10],
            "Chromatic no(b5 5 6 7)": [0, 1, 2, 3, 4, 5, 8, 10],
            "Chromatic no(4 b5 b6 b7)": [0, 1, 2, 3, 4, 7, 9, 11],
            "Chromatic no(3 4 5 6)": [0, 1, 2, 3, 6, 8, 10, 11],
            "Chromatic no(b3 3 b5 b6)": [0, 1, 2, 5, 7, 9, 10, 11],
            "Chromatic no(2 b3 4 5)": [0, 1, 4, 6, 8, 9, 10, 11],
            "Chromatic no(b2 2 3 b5)": [0, 3, 5, 7, 8, 9, 10, 11]
        },
        "(8-12) Complementary to Diminished (9)": {
            "Chromatic no(2 b6 b7 7)": [0, 1, 3, 4, 5, 6, 7, 9],
            "Chromatic no(b2 5 6 b7)": [0, 2, 3, 4, 5, 6, 8, 11],
            "Chromatic no(4 5 b6 7)": [0, 1, 2, 3, 4, 6, 9, 10],
            "Chromatic no(3 b5 5 b7)": [0, 1, 2, 3, 5, 8, 9, 11],
            "Chromatic no(b3 4 b5 6)": [0, 1, 2, 4, 7, 8, 10, 11],
            "Chromatic no(2 3 4 b6)": [0, 1, 3, 6, 7, 9, 10, 11],
            "Chromatic no(b2 b3 3 5)": [0, 2, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 2 4 7)": [0, 3, 4, 6, 7, 8, 9, 10]
        },
        "(8-12M) Complementary to Diminished (b11)": {
            "Chromatic no(b2 5 b7 7)": [0, 2, 3, 4, 5, 6, 8, 9],
            "Chromatic no(4 b6 6 7)": [0, 1, 2, 3, 4, 6, 7, 10],
            "Chromatic no(3 5 b6 b7)": [0, 1, 2, 3, 5, 6, 9, 11],
            "Chromatic no(b3 b5 5 6)": [0, 1, 2, 4, 5, 8, 10, 11],
            "Chromatic no(2 4 b5 b6)": [0, 1, 3, 4, 7, 9, 10, 11],
            "Chromatic no(b2 3 4 5)": [0, 2, 3, 6, 8, 9, 10, 11],
            "Chromatic no(2 b3 4 7)": [0, 1, 4, 6, 7, 8, 9, 10],
            "Chromatic no(b2 2 3 b7)": [0, 3, 5, 6, 7, 8, 9, 11]
        },
        "(8-13) Complementary to Diminished (11)": {
            "Chromatic no(4 b6 b7 7)": [0, 1, 2, 3, 4, 6, 7, 9],
            "Chromatic no(3 5 6 b7)": [0, 1, 2, 3, 5, 6, 8, 11],
            "Chromatic no(b3 b5 b6 6)": [0, 1, 2, 4, 5, 7, 10, 11],
            "Chromatic no(2 4 5 b6)": [0, 1, 3, 4, 6, 9, 10, 11],
            "Chromatic no(b2 3 b5 5)": [0, 2, 3, 5, 8, 9, 10, 11],
            "Chromatic no(2 3 4 7)": [0, 1, 3, 6, 7, 8, 9, 10],
            "Chromatic no(b2 b3 3 b7)": [0, 2, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 2 b6 7)": [0, 3, 4, 5, 6, 7, 9, 10]
        },
        "(8-13M) Complementary to Diminished (b9)": {
            "Chromatic no(b2 3 b7 7)": [0, 2, 3, 5, 6, 7, 8, 9],
            "Chromatic no(2 b6 6 7)": [0, 1, 3, 4, 5, 6, 7, 10],
            "Chromatic no(b2 5 b6 b7)": [0, 2, 3, 4, 5, 6, 9, 11],
            "Chromatic no(4 b5 b6 7)": [0, 1, 2, 3, 4, 7, 9, 10],
            "Chromatic no(3 4 5 b7)": [0, 1, 2, 3, 6, 8, 9, 11],
            "Chromatic no(b3 3 b5 6)": [0, 1, 2, 5, 7, 8, 10, 11],
            "Chromatic no(2 b3 4 b6)": [0, 1, 4, 6, 7, 9, 10, 11],
            "Chromatic no(b2 2 3 5)": [0, 3, 5, 6, 8, 9, 10, 11]
        },
        "(8-14) Complementary to Minor (9)": {
            "Chromatic no(b3 b6 b7 7)": [0, 1, 2, 4, 5, 6, 7, 9],
            "Chromatic no(2 5 6 b7)": [0, 1, 3, 4, 5, 6, 8, 11],
            "Chromatic no(b2 b5 b6 6)": [0, 2, 3, 4, 5, 7, 10, 11],
            "Chromatic no(3 b5 5 7)": [0, 1, 2, 3, 5, 8, 9, 10],
            "Chromatic no(b3 4 b5 b7)": [0, 1, 2, 4, 7, 8, 9, 11],
            "Chromatic no(2 3 4 6)": [0, 1, 3, 6, 7, 8, 10, 11],
            "Chromatic no(b2 b3 3 b6)": [0, 2, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 2 b5 7)": [0, 3, 4, 5, 7, 8, 9, 10]
        },
        "(8-14M) Complementary to Major (11)": {
            "Chromatic no(b2 b5 b7 7)": [0, 2, 3, 4, 5, 7, 8, 9],
            "Chromatic no(3 b6 6 7)": [0, 1, 2, 3, 5, 6, 7, 10],
            "Chromatic no(b3 5 b6 b7)": [0, 1, 2, 4, 5, 6, 9, 11],
            "Chromatic no(2 b5 5 6)": [0, 1, 3, 4, 5, 8, 10, 11],
            "Chromatic no(b2 4 b5 b6)": [0, 2, 3, 4, 7, 9, 10, 11],
            "Chromatic no(b3 3 b5 7)": [0, 1, 2, 5, 7, 8, 9, 10],
            "Chromatic no(2 b3 4 b7)": [0, 1, 4, 6, 7, 8, 9, 11],
            "Chromatic no(b2 2 3 6)": [0, 3, 5, 6, 7, 8, 10, 11]
        },
        "(8-X15) Complementary to Super Locrian Quartal Quadrad": {
            "Chromatic no(4 5 b7 7)": [0, 1, 2, 3, 4, 6, 8, 9],
            "Chromatic no(3 b5 6 b7)": [0, 1, 2, 3, 5, 7, 8, 11],
            "Chromatic no(b3 4 b6 6)": [0, 1, 2, 4, 6, 7, 10, 11],
            "Chromatic no(2 3 5 b6)": [0, 1, 3, 5, 6, 9, 10, 11],
            "Chromatic no(b2 b3 b5 5)": [0, 2, 4, 5, 8, 9, 10, 11],
            "Chromatic no(b2 3 4 7)": [0, 2, 3, 6, 7, 8, 9, 10],
            "Chromatic no(2 b3 6 7)": [0, 1, 4, 5, 6, 7, 8, 10],
            "Chromatic no(b2 b3 b6 b7)": [0, 3, 4, 5, 6, 7, 9, 11]
        },
        "(8-X15M) Complementary to Melodic/Harmonic Minor Quartal Qaudrad": {
            "Chromatic no(2 3 b7 7)": [0, 1, 3, 5, 6, 7, 8, 9],
            "Chromatic no(b2 b3 6 b7)": [0, 2, 4, 5, 6, 7, 8, 11],
            "Chromatic no(b2 5 b6 7)": [0, 2, 3, 4, 5, 6, 9, 10],
            "Chromatic no(4 b5 6 7)": [0, 1, 2, 3, 4, 7, 8, 10],
            "Chromatic no(3 4 b6 b7)": [0, 1, 2, 3, 6, 7, 9, 11],
            "Chromatic no(b3 3 5 6)": [0, 1, 2, 5, 6, 8, 10, 11],
            "Chromatic no(2 b3 b5 b6)": [0, 1, 4, 5, 7, 9, 10, 11],
            "Chromatic no(b2 2 4 5)": [0, 3, 4, 6, 8, 9, 10, 11]
        },
        "(8-Y15) Complementary to Major (#11)": {
            "Chromatic no(3 b6 b7 7) ": [0, 1, 2, 3, 5, 6, 7, 9],
            "Chromatic no(b3 5 6 b7)": [0, 1, 2, 4, 5, 6, 8, 11],
            "Chromatic no(2 b5 b6 6)": [0, 1, 3, 4, 5, 7, 10, 11],
            "Chromatic no(b2 4 5 b6)": [0, 2, 3, 4, 6, 9, 10, 11],
            "Chromatic no(b3 4 b5 7)": [0, 1, 2, 4, 7, 8, 9, 10],
            "Chromatic no(2 3 4 b7)": [0, 1, 3, 6, 7, 8, 9, 11],
            "Chromatic no(b2 b3 3 6)": [0, 2, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 2 5 7)": [0, 3, 4, 5, 6, 8, 9, 10]
        },
        "(8-Y15M) Complementary to Minor (b9)": {
            "Chromatic no(b2 4 b7 7)": [0, 2, 3, 4, 6, 7, 8, 9],
            "Chromatic no(b3 b6 6 7)": [0, 1, 2, 4, 5, 6, 7, 10],
            "Chromatic no(2 5 b6 b7)": [0, 1, 3, 4, 5, 6, 9, 11],
            "Chromatic no(b2 b5 5 6)": [0, 2, 3, 4, 5, 8, 10, 11],
            "Chromatic no(3 4 5 7)": [0, 1, 2, 3, 6, 8, 9, 10],
            "Chromatic no(b3 3 b5 b7)": [0, 1, 2, 5, 7, 8, 9, 11],
            "Chromatic no(2 b3 4 6)": [0, 1, 4, 6, 7, 8, 10, 11],
            "Chromatic no(b2 2 3 b6)": [0, 3, 5, 6, 7, 9, 10, 11]
        },
        "(8-16) Complementary to Major 7 sus4": {
            "Chromatic no(3 b5 b7 7)": [0, 1, 2, 3, 5, 7, 8, 9],
            "Chromatic no(b3 4 6 b7)": [0, 1, 2, 4, 6, 7, 8, 11],
            "Chromatic no(2 3 b6 6)": [0, 1, 3, 5, 6, 7, 10, 11],
            "Chromatic no(b2 b3 5 b6)": [0, 2, 4, 5, 6, 9, 10, 11],
            "Chromatic no(b2 4 b5 7)": [0, 2, 3, 4, 7, 8, 9, 10],
            "Chromatic no(b3 3 6 7)": [0, 1, 2, 5, 6, 7, 8, 10],
            "Chromatic no(2 b3 b6 b7)": [0, 1, 4, 5, 6, 7, 9, 11],
            "Chromatic no(b2 2 5 6)": [0, 3, 4, 5, 6, 8, 10, 11]
        },
        "(8-16M) Complementary to Half-Diminished sus4": {
            "Chromatic no(b3 4 b7 7)": [0, 1, 2, 4, 6, 7, 8, 9],
            "Chromatic no(2 3 6 b7)": [0, 1, 3, 5, 6, 7, 8, 11],
            "Chromatic no(b2 b3 b6 6)": [0, 2, 4, 5, 6, 7, 10, 11],
            "Chromatic no(b2 b5 5 7)": [0, 2, 3, 4, 5, 8, 9, 10],
            "Chromatic no(3 4 6 7)": [0, 1, 2, 3, 6, 7, 8, 10],
            "Chromatic no(b3 3 b6 b7)": [0, 1, 2, 5, 6, 7, 9, 11],
            "Chromatic no(2 b3 5 6)": [0, 1, 4, 5, 6, 8, 10, 11],
            "Chromatic no(b2 2 b5 b6)": [0, 3, 4, 5, 7, 9, 10, 11]
        },
        "(8-17) Complementary to Major (#9)": {
            "Chromatic no(2 5 b7 7)": [0, 1, 3, 4, 5, 6, 8, 9],
            "Chromatic no(b2 b5 6 b7)": [0, 2, 3, 4, 5, 7, 8, 11],
            "Chromatic no(3 5 b6 7)": [0, 1, 2, 3, 5, 6, 9, 10],
            "Chromatic no(b3 b5 5 b7)": [0, 1, 2, 4, 5, 8, 9, 11],
            "Chromatic no(2 4 b5 6)": [0, 1, 3, 4, 7, 8, 10, 11],
            "Chromatic no(b2 3 4 b6)": [0, 2, 3, 6, 7, 9, 10, 11],
            "Chromatic no(2 b3 b5 7)": [0, 1, 4, 5, 7, 8, 9, 10],
            "Chromatic no(b2 2 4 b7)": [0, 3, 4, 6, 7, 8, 9, 11]
        },
        "(8-18) Complementary to Minor (#11)": {
            "Chromatic no(3 5 b7 7)": [0, 1, 2, 3, 5, 6, 8, 9],
            "Chromatic no(b3 b5 6 b7)": [0, 1, 2, 4, 5, 7, 8, 11],
            "Chromatic no(2 4 b6 6)": [0, 1, 3, 4, 6, 7, 10, 11],
            "Chromatic no(b2 3 7 b6)": [0, 2, 3, 5, 6, 9, 10, 11],
            "Chromatic no(2 4 b5 7)": [0, 1, 3, 4, 7, 8, 9, 10],
            "Chromatic no(b2 3 4 b7)": [0, 2, 3, 6, 7, 8, 9, 11],
            "Chromatic no(2 b3 b6 7)": [0, 1, 4, 5, 6, 7, 9, 10],
            "Chromatic no(b2 2 5 b7": [0, 3, 4, 5, 6, 8, 9, 11]
        },
        "(8-18M) Complementary to Minor (b9)": {
            "fixmeChromatic no(2 4 b7 7)": [0, 1, 3, 4, 6, 7, 8, 9],
            "fixmeChromatic no(b2 3 6 b7)": [0, 2, 3, 5, 6, 7, 8, 11],
            "fixmeChromatic no(2 5 b6 7)": [0, 1, 3, 4, 5, 6, 9, 10],
            "fixmeChromatic no(b2 b5 5 b7)": [0, 2, 3, 4, 5, 8, 9, 11],
            "fixmeChromatic no(3 4 6 7)": [0, 1, 2, 3, 6, 7, 9, 10],
            "fixmeChromatic no(b3 3 b6 b7)": [0, 1, 2, 5, 6, 8, 9, 11],
            "fixmeChromatic no(2 b3 5 6)": [0, 1, 4, 5, 7, 8, 10, 11],
            "fixmeChromatic no(b2 2 b5 b6)": [0, 3, 4, 6, 7, 9, 10, 11]
        },
        "(8-19) Complementary to Major (b13)": {
            "Chromatic no(b3 5 b7 7)": [0, 1, 2, 4, 5, 6, 8, 9],
            "Chromatic no(2 b5 6 b7)": [0, 1, 3, 4, 5, 7, 8, 11],
            "Chromatic no(b2 4 b6 6)": [0, 2, 3, 4, 6, 7, 10, 11],
            "Chromatic no(b3 b5 5 7)": [0, 1, 2, 4, 5, 8, 9, 10],
            "Chromatic no(2 4 b5 b7)": [0, 1, 3, 4, 7, 8, 9, 11],
            "Chromatic no(b2 3 4 6)": [0, 2, 3, 6, 7, 8, 10, 11],
            "Chromatic no(2 b3 5 7)": [0, 1, 4, 5, 6, 8, 9, 10],
            "Chromatic no(b2 2 b5 b7)": [0, 3, 4, 5, 7, 8, 9, 11]
        },
        "(8-19M) Complementary to Minor Major 7": {
            "Chromatic no(2 b5 b7 7)": [0, 1, 3, 4, 5, 7, 8, 9],
            "Chromatic no(b2 4 6 b7)": [0, 2, 3, 4, 6, 7, 8, 11],
            "Chromatic no(b3 5 b6 7)": [0, 1, 2, 4, 5, 6, 9, 10],
            "Chromatic no(2 b5 5 b7)": [0, 1, 3, 4, 5, 8, 9, 11],
            "Chromatic no(b2 4 b5 6)": [0, 2, 3, 4, 7, 8, 10, 11],
            "Chromatic no(b3 3 5 7)": [0, 1, 2, 5, 6, 8, 9, 10],
            "Chromatic no(2 b3 b5 b7)": [0, 1, 4, 5, 7, 8, 9, 11],
            "Chromatic no(b2 2 4 6)": [0, 3, 4, 6, 7, 8, 10, 11]
        },
        "(8-20) Complementary to Minor (b13)": {
            "Chromatic no(b3 b5 b7 7)": [0, 1, 2, 4, 5, 7, 8, 9],
            "Chromatic no(2 4 6 b7)": [0, 1, 3, 4, 6, 7, 8, 11],
            "Chromatic no(b2 3 b6 6)": [0, 2, 3, 5, 6, 7, 10, 11],
            "Chromatic no(2 b5 5 7)": [0, 1, 3, 4, 5, 8, 9, 10],
            "Chromatic no(b2 4 b5 b7)": [0, 2, 3, 4, 7, 8, 9, 11],
            "Chromatic no(b3 3 b6 7)": [0, 1, 2, 5, 6, 7, 9, 10],
            "Chromatic no(2 b3 5 b7)": [0, 1, 4, 5, 6, 8, 9, 11],
            "Chromatic no(b2 2 b5 6)": [0, 3, 4, 5, 7, 8, 10, 11]
        },
        "(8-21) Complementary to Lydian Tetrachord": {
            "Chromatic no(4 5 6 7)": [0, 1, 2, 3, 4, 6, 8, 10],
            "Chromatic no(3 b5 b6 b7)": [0, 1, 2, 3, 5, 7, 9, 11],
            "Chromatic no(b3 4 5 6)": [0, 1, 2, 4, 6, 8, 10, 11],
            "Chromatic no(2 3 b5 b6)": [0, 1, 3, 5, 7, 9, 10, 11],
            "Chromatic no(b2 b3 4 5)": [0, 2, 4, 6, 8, 9, 10, 11],
            "Chromatic no(b2 b3 4 7)": [0, 2, 4, 6, 7, 8, 9, 10],
            "Chromatic no(b2 b3 6 7)": [0, 2, 4, 5, 6, 7, 8, 10],
            "Chromatic no(b2 5 6 7)": [0, 2, 3, 4, 5, 6, 8, 10]
        },
        "(8-22) Complementary to Minor (11)": {
            "Chromatic no(3 5 6 7)": [0, 1, 2, 3, 5, 6, 8, 10],
            "Chromatic no(b3 b5 b6 b7)": [0, 1, 2, 4, 5, 7, 9, 11],
            "Chromatic no(2 4 5 6)": [0, 1, 3, 4, 6, 8, 10, 11],
            "Bebop Dorian, Chromatic no(b2 3 b5 b6)": [0, 2, 3, 5, 7, 9, 10, 11],
            "Chromatic no(2 3 b5 7)": [0, 1, 3, 5, 7, 8, 9, 10],
            "Chromatic no(b2 b3 4 b7)": [0, 2, 4, 6, 7, 8, 9, 11],
            "Chromatic no(b2 b3 b6 7)": [0, 2, 4, 5, 6, 7, 9, 10],
            "Chromatic no(b2 b5 6 7)": [0, 2, 3, 4, 5, 7, 8, 10]
        },
        "(8-22M) Complementary to Major (9)": {
            "Chromatic no(3 b5 b6 7)": [0, 1, 2, 3, 5, 7, 9, 10],
            "Chromatic no(b3 4 5 b7)": [0, 1, 2, 4, 6, 8, 9, 11],
            "Chromatic no(2 3 b5 6)": [0, 1, 3, 5, 7, 8, 10, 11],
            "Chromatic no(b2 b3 4 b6)": [0, 2, 4, 6, 7, 9, 10, 11],
            "Chromatic no(b2 b3 b5 7)": [0, 2, 4, 5, 7, 8, 9, 10],
            "Chromatic no(b2 3 6 7)": [0, 2, 3, 5, 6, 7, 8, 10],
            "Chromatic no(2 5 6 7)": [0, 1, 3, 4, 5, 6, 8, 10],
            "Chromatic no(b2 b5 b6 b7)": [0, 2, 3, 4, 5, 7, 9, 11]
        },
        "(8-23) Complementary to Perfect Quartal Quadrad": {
            "Chromatic no(3 b5 6 7)": [0, 1, 2, 3, 5, 7, 8, 10],
            "Chromatic no(b3 4 b6 b7)": [0, 1, 2, 4, 6, 7, 9, 11],
            "Chromatic no(2 3 5 6)": [0, 1, 3, 5, 6, 8, 10, 11],
            "Bebop Dominant, Chromatic no(b2 b3 b5 b6)": [0, 2, 4, 5, 7, 9, 10, 11],
            "Bebop Minor, Chromatic no(b2 3 b5 7)": [0, 2, 3, 5, 7, 8, 9, 10],
            "Bebop Locrian add5, Chromatic no(2 3 6 7)": [0, 1, 3, 5, 6, 7, 8, 10],
            "Chromatic no(b2 b3 b6 b7)": [0, 2, 4, 5, 6, 7, 9, 11],
            "Chromatic no(b2 b5 b6 7)": [0, 2, 3, 4, 5, 7, 9, 10]
        },
        "(8-24) Complementary to Dominant 7 #5": {
            "Chromatic no(b3 5 6 7)": [0, 1, 2, 4, 5, 6, 8, 10],
            "Chromatic no(2 b5 b6 b7)": [0, 1, 3, 4, 5, 7, 9, 11],
            "Chromatic no(b2 4 5 b6)": [0, 2, 3, 4, 6, 8, 10, 11],
            "Chromatic no(b3 4 5 7)": [0, 1, 2, 4, 6, 8, 9, 10],
            "Chromatic no(2 3 b5 b7)": [0, 1, 3, 5, 7, 8, 9, 11],
            "Chromatic no(b2 b3 4 6)": [0, 2, 4, 6, 7, 8, 10, 11],
            "Chromatic no(b2 b3 5 7)": [0, 2, 4, 5, 6, 8, 9, 10],
            "Chromatic no(b2 4 6 7)": [0, 2, 3, 4, 6, 7, 8, 10]
        },
        "(8-25S) Complementary to Dominant 7 b5": {
            "Chromatic no(b3 4 6 7)": [0, 1, 2, 4, 6, 7, 8, 10],
            "Chromatic no(2 3 b6 b7)": [0, 1, 3, 5, 6, 7, 9, 11],
            "Chromatic no(b2 b3 5 6), Messiaen Mode 6": [0, 2, 4, 5, 6, 8, 10, 11],
            "Chromatic no(b2 4 5 7)": [0, 2, 3, 4, 6, 8, 9, 10]
        },
        "(8-26) Spanish Phrygian, Complementary to Minor 7": {
            "Chromatic no(b3 b5 b6 7)": [0, 1, 2, 4, 5, 7, 9, 10],
            "Chromatic no(2 4 5 b7)": [0, 1, 3, 4, 6, 8, 9, 11],
            "Chromatic no(b2 3 b5 6)": [0, 2, 3, 5, 7, 8, 10, 11],
            "Chromatic no(2 3 5 7)": [0, 1, 3, 5, 6, 8, 9, 10],
            "Bebop Major, Chromatic no(b2 b3 b5 b7)": [0, 2, 4, 5, 7, 8, 9, 11],
            "Chromatic no(b2 3 b6 7)": [0, 2, 3, 5, 6, 7, 9, 10],
            "Spanish Phrygian, Chromatic no(2 b5 6 7)": [0, 1, 3, 4, 5, 7, 8, 10],
            "Chromatic no(b2 4 b6 b7)": [0, 2, 3, 4, 6, 7, 9, 11]
        },
        "(8-27) Complementary to Dominant 7": {
            "Chromatic no(b3 b5 6 7)": [0, 1, 2, 4, 5, 7, 8, 10],
            "Chromatic no(2 4 b6 b7)": [0, 1, 3, 4, 6, 7, 9, 11],
            "Bebop Locrian nat2, Chromatic no(b2 3 5 6)": [0, 2, 3, 5, 6, 8, 10, 11],
            "Chromatic no(2 4 5 7)": [0, 1, 3, 4, 6, 8, 9, 10],
            "Chromatic no(b2 3 b5 b7)": [0, 2, 3, 5, 7, 8, 9, 11],
            "Chromatic no(2 3 b6 7)": [0, 1, 3, 5, 6, 7, 9, 10],
            "Chromatic no(b2 b3 5 b7)": [0, 2, 4, 5, 6, 8, 9, 11],
            "Chromatic no(b2 4 b6 7)": [0, 2, 3, 4, 6, 7, 9, 10]
        },
        "(8-27M) Complementary to Half-Diminished 7": {
            "Chromatic no(b3 4 b6 7)": [0, 1, 2, 4, 6, 7, 9, 10],
            "Chromatic no(2 3 5 b7)": [0, 1, 3, 5, 6, 8, 9, 11],
            "Chromatic no(b2 b3 b5 6)": [0, 2, 4, 5, 7, 8, 10, 11],
            "Chromatic no(b2 3 5 7)": [0, 2, 3, 5, 6, 8, 9, 10],
            "Chromatic no(2 4 6 b7)": [0, 1, 3, 4, 6, 7, 8, 10],
            "Chromatic no(b2 3 b6 b7)": [0, 2, 3, 5, 6, 7, 9, 11],
            "Chromatic no(2 b5 b6 7)": [0, 1, 3, 4, 5, 7, 9, 10],
            "Chromatic no(b2 4 5 b7)": [0, 2, 3, 4, 6, 8, 9, 11]
        },
        "(8-28S) Half-Whole Diminished Scale": {
            "Half-Whole Diminished Scale, Messiaen Mode 2": [0, 1, 3, 4, 6, 7, 9, 10],
            "Whole-Half Diminished Scale": [0, 2, 3, 5, 6, 8, 9, 11]
        }
    },
    nonads: {
        "(9-1) Complementary to Chromatic Trichord": {
            "Chromatic no(6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 7, 8],
            "Chromatic no(b6 6 b7)": [0, 1, 2, 3, 4, 5, 6, 7, 11],
            "Chromatic no(5 b6 6)": [0, 1, 2, 3, 4, 5, 6, 10, 11],
            "Chromatic no(#4 5 b6)": [0, 1, 2, 3, 4, 5, 9, 10, 11],
            "Chromatic no(4 b5 5)": [0, 1, 2, 3, 4, 8, 9, 10, 11],
            "Chromatic no(3 4 b5)": [0, 1, 2, 3, 7, 8, 9, 10, 11],
            "Chromatic no(b3 3 4)": [0, 1, 2, 6, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 3)": [0, 1, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 b3)": [0, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        "(9-2) Complementary to Minor Trichord": {
            "Chromatic no(b6 b7 7)": [0, 1, 2, 3, 4, 5, 6, 7, 9],
            "Chromatic no(5 6 b7)": [0, 1, 2, 3, 4, 5, 6, 8, 11],
            "Chromatic no(b5 b6 6)": [0, 1, 2, 3, 4, 5, 7, 10, 11],
            "Chromatic no(4 5 b6)": [0, 1, 2, 3, 4, 6, 9, 10, 11],
            "Chromatic no(3 #4 5)": [0, 1, 2, 3, 5, 8, 9, 10, 11],
            "Chromatic no(b3 4 b5)": [0, 1, 2, 4, 7, 8, 9, 10, 11],
            "Chromatic no(2 3 4)": [0, 1, 3, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3 3)": [0, 2, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 7)": [0, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        "(9-2M) Complementary to Phrygian Trichord": {
            "Chromatic no(b2 b7 7)": [0, 2, 3, 4, 5, 6, 7, 8, 9],
            "Chromatic no(b6 6 7)": [0, 1, 2, 3, 4, 5, 6, 7, 10],
            "Chromatic no(5 b6 b7)": [0, 1, 2, 3, 4, 5, 6, 9, 11],
            "Chromatic no(#4 5 6)": [0, 1, 2, 3, 4, 5, 8, 10, 11],
            "Chromatic no(4 b5 b6)": [0, 1, 2, 3, 4, 7, 9, 10, 11],
            "Chromatic no(3 4 5)": [0, 1, 2, 3, 6, 8, 9, 10, 11],
            "Chromatic no(b3 3 b5)": [0, 1, 2, 5, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 4)": [0, 1, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 3)": [0, 3, 5, 6, 7, 8, 9, 10, 11]
        },
        "(9-3) Complementary to #2 Trichord": {
            "Chromatic no(5 b7 7)": [0, 1, 2, 3, 4, 5, 6, 8, 9],
            "Chromatic no(b5 6 b7)": [0, 1, 2, 3, 4, 5, 7, 8, 11],
            "Chromatic no(4 b6 6)": [0, 1, 2, 3, 4, 6, 7, 10, 11],
            "Chromatic no(3 5 b6)": [0, 1, 2, 3, 5, 6, 9, 10, 11],
            "Chromatic no(b3 #4 5)": [0, 1, 2, 4, 5, 8, 9, 10, 11],
            "Chromatic no(2 4 b5)": [0, 1, 3, 4, 7, 8, 9, 10, 11],
            "Chromatic no(b2 3 4)": [0, 2, 3, 6, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3 7)": [0, 1, 4, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 2 b7)": [0, 3, 4, 5, 6, 7, 8, 9, 11]
        },
        "(9-3M) Complementary to Phrygian Major Trichord": {
            "Chromatic no(2 b7 7)": [0, 1, 3, 4, 5, 6, 7, 8, 9],
            "Chromatic no(b2 6 b7)": [0, 2, 3, 4, 5, 6, 7, 8, 11],
            "Chromatic no(5 b6 7)": [0, 1, 2, 3, 4, 5, 6, 9, 10],
            "Chromatic no(#4 5 b7)": [0, 1, 2, 3, 4, 5, 8, 9, 11],
            "Chromatic no(5 b5 6)": [0, 1, 2, 3, 4, 7, 8, 10, 11],
            "Chromatic no(3 4 b6)": [0, 1, 2, 3, 6, 7, 9, 10, 11],
            "Chromatic no(b3 3 5)": [0, 1, 2, 5, 6, 8, 9, 10, 11],
            "Chromatic no(2 b3 b5)": [0, 1, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2 4)": [0, 3, 4, 6, 7, 8, 9, 10, 11]
        },
        "(9-4) Complementary to Major 7 no3": {
            "Chromatic no(b5 b7 7)": [0, 1, 2, 3, 4, 5, 7, 8, 9],
            "Chromatic no(4 6 b7)": [0, 1, 2, 3, 4, 6, 7, 8, 11],
            "Chromatic no(3 b6 6)": [0, 1, 2, 3, 5, 6, 7, 10, 11],
            "Chromatic no(b3 5 b6)": [0, 1, 2, 4, 5, 6, 9, 10, 11],
            "Chromatic no(2 #4 5)": [0, 1, 3, 4, 5, 8, 9, 10, 11],
            "Chromatic no(b2 4 b5)": [0, 2, 3, 4, 7, 8, 9, 10, 11],
            "Chromatic no(b3 3 7)": [0, 1, 2, 5, 6, 7, 8, 9, 10],
            "Chromatic no(2 b3 b7)": [0, 1, 4, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 2 6)": [0, 3, 4, 5, 6, 7, 8, 10, 11]
        },
        "(9-4M) Complementary to Major 7 no 5": {
            "Chromatic no(b3 b7 7)": [0, 1, 2, 4, 5, 6, 7, 8, 9],
            "Chromatic no(2 6 b7)": [0, 1, 3, 4, 5, 6, 7, 8, 11],
            "Chromatic no(b2 b6 6)": [0, 2, 3, 4, 5, 6, 7, 10, 11],
            "Chromatic no(#4 5 7)": [0, 1, 2, 3, 4, 5, 8, 9, 10],
            "Chromatic no(4 b5 b7)": [0, 1, 2, 3, 4, 7, 8, 9, 11],
            "Chromatic no(3 4 6)": [0, 1, 2, 3, 6, 7, 8, 10, 11],
            "Chromatic no(b3 3 b6)": [0, 1, 2, 5, 6, 7, 9, 10, 11],
            "Chromatic no(2 b3 5)": [0, 1, 4, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 2 b5)": [0, 3, 4, 5, 7, 8, 9, 10, 11]
        },
        "(9-5) Complementary to Diminished sus4": {
            "Chromatic no(4 b7 7)": [0, 1, 2, 3, 4, 6, 7, 8, 9],
            "Chromatic no(3 6 b7)": [0, 1, 2, 3, 5, 6, 7, 8, 11],
            "Chromatic no(b3 b6 6)": [0, 1, 2, 4, 5, 6, 7, 10, 11],
            "Chromatic no(2 5 b6)": [0, 1, 3, 4, 5, 6, 9, 10, 11],
            "Chromatic no(b2 #4 5)": [0, 2, 3, 4, 5, 8, 9, 10, 11],
            "Chromatic no(3 4 7)": [0, 1, 2, 3, 6, 7, 8, 9, 10],
            "Chromatic no(b3 3 b7)": [0, 1, 2, 5, 6, 7, 8, 9, 11],
            "Chromatic no(2 b3 6)": [0, 1, 4, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 2 b6)": [0, 3, 4, 5, 6, 7, 9, 10, 11]
        },
        "(9-5M) Complementary to sus#4": {
            "Chromatic no(3 b7 7)": [0, 1, 2, 3, 5, 6, 7, 8, 9],
            "Chromatic no(b3 6 b7)": [0, 1, 2, 4, 5, 6, 7, 8, 11],
            "Chromatic no(2 b6 6)": [0, 1, 3, 4, 5, 6, 7, 10, 11],
            "Chromatic no(b2 5 b6)": [0, 2, 3, 4, 5, 6, 9, 10, 11],
            "Chromatic no(4 b5 7)": [0, 1, 2, 3, 4, 7, 8, 9, 10],
            "Chromatic no(3 4 b7)": [0, 1, 2, 3, 6, 7, 8, 9, 11],
            "Chromatic no(b3 3 6)": [0, 1, 2, 5, 6, 7, 8, 10, 11],
            "Chromatic no(2 b3 b6)": [0, 1, 4, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 2 5)": [0, 3, 4, 5, 6, 8, 9, 10, 11]
        },
        "(9-6) Complementary to Major Trichord": {
            "Chromatic no(5 6 7)": [0, 1, 2, 3, 4, 5, 6, 8, 10],
            "Chromatic no(b5 b6 b7)": [0, 1, 2, 3, 4, 5, 7, 9, 11],
            "Chromatic no(4 5 6)": [0, 1, 2, 3, 4, 6, 8, 10, 11],
            "Chromatic no(3 b5 b6)": [0, 1, 2, 3, 5, 7, 9, 10, 11],
            "Chromatic no(b3 4 5)": [0, 1, 2, 4, 6, 8, 9, 10, 11],
            "Chromatic no(2 3 #4)": [0, 1, 3, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3 4)": [0, 2, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3 7)": [0, 2, 4, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 6 7)": [0, 2, 3, 4, 5, 6, 7, 8, 10]
        },
        "(9-7) Complementary to 7 no3": {
            "Chromatic no(b5 6 7)": [0, 1, 2, 3, 4, 5, 7, 8, 10],
            "Chromatic no(4 b6 b7)": [0, 1, 2, 3, 4, 6, 7, 9, 11],
            "Chromatic no(3 5 6)": [0, 1, 2, 3, 5, 6, 8, 10, 11],
            "Chromatic no(b3 b5 b6)": [0, 1, 2, 4, 5, 7, 9, 10, 11],
            "Chromatic no(2 4 5)": [0, 1, 3, 4, 6, 8, 9, 10, 11],
            "Chromatic no(b2 3 b5)": [0, 2, 3, 5, 7, 8, 9, 10, 11],
            "Chromatic no(2 3 7)": [0, 1, 3, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 b3 b7)": [0, 2, 4, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 b6 7)": [0, 2, 3, 4, 5, 6, 7, 9, 10]
        },
        "(9-7M) Complementary to Minor 7 no 5": {
            "Chromatic no(b5 b6 7)": [0, 1, 2, 3, 4, 5, 7, 9, 10],
            "Chromatic no(4 5 b7)": [0, 1, 2, 3, 4, 6, 8, 9, 11],
            "Chromatic no(3 #4 6)": [0, 1, 2, 3, 5, 7, 8, 10, 11],
            "Chromatic no(b3 4 b6)": [0, 1, 2, 4, 6, 7, 9, 10, 11],
            "Chromatic no(2 3 5)": [0, 1, 3, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 b3 b5)": [0, 2, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 3 7)": [0, 2, 3, 5, 6, 7, 8, 9, 10],
            "Chromatic no(2 6 7)": [0, 1, 3, 4, 5, 6, 7, 8, 10],
            "Chromatic no(b2 b6 b7)": [0, 2, 3, 4, 5, 6, 7, 9, 11]
        },
        "(9-8) Complementary to Half-Diminished no3": {
            "Chromatic no(4 6 7)": [0, 1, 2, 3, 4, 6, 7, 8, 10],
            "Chromatic no(3 b6 b7)": [0, 1, 2, 3, 5, 6, 7, 9, 11],
            "Chromatic no(b3 5 6)": [0, 1, 2, 4, 5, 6, 8, 10, 11],
            "Chromatic no(2 b5 b6)": [0, 1, 3, 4, 5, 7, 9, 10, 11],
            "Chromatic no(b2 4 5)": [0, 2, 3, 4, 6, 8, 9, 10, 11],
            "Chromatic no(b3 4 7)": [0, 1, 2, 4, 6, 7, 8, 9, 10],
            "Chromatic no(2 3 b7)": [0, 1, 3, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 b3 6)": [0, 2, 4, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 5 7)": [0, 2, 3, 4, 5, 6, 8, 9, 10]
        },
        "(9-8M) Complementary to 7 no5": {
            "Chromatic no(4 5 7)": [0, 1, 2, 3, 4, 6, 8, 9, 10],
            "Chromatic no(3 #4 b7)": [0, 1, 2, 3, 5, 7, 8, 9, 11],
            "Chromatic no(b3 4 6)": [0, 1, 2, 4, 6, 7, 8, 10, 11],
            "Chromatic no(2 3 b6)": [0, 1, 3, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 b3 5)": [0, 2, 4, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 4 7)": [0, 2, 3, 4, 6, 7, 8, 9, 10],
            "Chromatic no(b3 6 7)": [0, 1, 2, 4, 5, 6, 7, 8, 10],
            "Chromatic no(2 b6 b7)": [0, 1, 3, 4, 5, 6, 7, 9, 11],
            "Chromatic no(b2 5 6)": [0, 2, 3, 4, 5, 6, 8, 10, 11]
        },
        "(9-9) Complementary to sus4": {
            "Chromatic no(3 6 7)": [0, 1, 2, 3, 5, 6, 7, 8, 10],
            "Chromatic no(b3 b6 b7)": [0, 1, 2, 4, 5, 6, 7, 9, 11],
            "Chromatic no(2 5 6)": [0, 1, 3, 4, 5, 6, 8, 10, 11],
            "Chromatic no(b2 b5 b6)": [0, 2, 3, 4, 5, 7, 9, 10, 11],
            "Chromatic no(3 #4 7)": [0, 1, 2, 3, 5, 7, 8, 9, 10],
            "Chromatic no(b3 4 b7)": [0, 1, 2, 4, 6, 7, 8, 9, 11],
            "Chromatic no(2 3 6)": [0, 1, 3, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 b3 b6)": [0, 2, 4, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 b5 7)": [0, 2, 3, 4, 5, 7, 8, 9, 10]
        },
        "(9-10) Complementary to Diminished": {
            "Chromatic no(4 b6 7)": [0, 1, 2, 3, 4, 6, 7, 9, 10],
            "Chromatic no(3 5 b7)": [0, 1, 2, 3, 5, 6, 8, 9, 11],
            "Chromatic no(b3 b5 6)": [0, 1, 2, 4, 5, 7, 8, 10, 11],
            "Chromatic no(2 4 b6)": [0, 1, 3, 4, 6, 7, 9, 10, 11],
            "Chromatic no(b2 3 5)": [0, 2, 3, 5, 6, 8, 9, 10, 11],
            "Chromatic no(2 4 7)": [0, 1, 3, 4, 6, 7, 8, 9, 10],
            "Chromatic no(b2 3 b7)": [0, 2, 3, 5, 6, 7, 8, 9, 11],
            "Chromatic no(2 b6 11)": [0, 1, 3, 4, 5, 6, 7, 9, 10],
            "Chromatic no(b2 5 b7)": [0, 2, 3, 4, 5, 6, 8, 9, 11]
        },
        "(9-11) Complementary to Major": {
            "Chromatic no(3 b6 7)": [0, 1, 2, 3, 5, 6, 7, 9, 10],
            "Chromatic no(b3 5 b7)": [0, 1, 2, 4, 5, 6, 8, 9, 11],
            "Chromatic no(2 b5 6)": [0, 1, 3, 4, 5, 7, 8, 10, 11],
            "Chromatic no(b2 4 b6)": [0, 2, 3, 4, 6, 7, 9, 10, 11],
            "Chromatic no(b3 b5 7)": [0, 1, 2, 4, 5, 7, 8, 9, 10],
            "Chromatic no(2 4 b7)": [0, 1, 3, 4, 6, 7, 8, 9, 11],
            "Chromatic no(b2 3 6)": [0, 2, 3, 5, 6, 7, 8, 10, 11],
            "Chromatic no(2 5 7)": [0, 1, 3, 4, 5, 6, 8, 9, 10],
            "Chromatic no(b2 b5 b7)": [0, 2, 3, 4, 5, 7, 8, 9, 11]
        },
        "(9-11M) Complementary to Minor": {
            "Chromatic no(3 5 7)": [0, 1, 2, 3, 5, 6, 8, 9, 10],
            "Chromatic no(b3 b5 b7)": [0, 1, 2, 4, 5, 7, 8, 9, 11],
            "Chromatic no(2 4 6)": [0, 1, 3, 4, 6, 7, 8, 10, 11],
            "Chromatic no(b2 3 b6)": [0, 2, 3, 5, 6, 7, 9, 10, 11],
            "Chromatic no(2 b5 7)": [0, 1, 3, 4, 5, 7, 8, 9, 10],
            "Chromatic no(b2 4 b7)": [0, 2, 3, 4, 6, 7, 8, 9, 11],
            "Chromatic no(b3 b6 7)": [0, 1, 2, 4, 5, 6, 7, 9, 10],
            "Chromatic no(2 5 b7)": [0, 1, 3, 4, 5, 6, 8, 9, 11],
            "Chromatic no(b2 b5 6)": [0, 2, 3, 4, 5, 7, 8, 10, 11]
        },
        "(9-12S) Complementary to Augmented": {
            "Chromatic no(b3 5 7)": [0, 1, 2, 4, 5, 6, 8, 9, 10],
            "Chromatic no(2 b5 b7)": [0, 1, 3, 4, 5, 7, 8, 9, 11],
            "Chromatic no(b2 4 6), Messiaen Mode 3, Tcherepnin Scale": [0, 2, 3, 4, 6, 7, 8, 10, 11]
        }
    },
    decads: {
        "(10-1) Complementary to Interval Class 1": {
            "Chromatic no(b7 7)": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            "Chromatic no(6 b7)": [0, 1, 2, 3, 4, 5, 6, 7, 8, 11],
            "Chromatic no(b6 6)": [0, 1, 2, 3, 4, 5, 6, 7, 10, 11],
            "Chromatic no(5 b6)": [0, 1, 2, 3, 4, 5, 6, 9, 10, 11],
            "Chromatic no(#4 5)": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11],
            "Chromatic no(4 b5)": [0, 1, 2, 3, 4, 7, 8, 9, 10, 11],
            "Chromatic no(3 4)": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b3 3)": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3)": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 2)": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        },
        "(10-2) Complementary to Interval Class 2": {
            "Chromatic no(6 7)": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10],
            "Chromatic no(b6 b7)": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11],
            "Chromatic no(5 6)": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11],
            "Chromatic no(b5 b6)": [0, 1, 2, 3, 4, 5, 7, 9, 10, 11],
            "Chromatic no(4 5)": [0, 1, 2, 3, 4, 6, 8, 9, 10, 11],
            "Chromatic no(3 #4)": [0, 1, 2, 3, 5, 7, 8, 9, 10, 11],
            "Chromatic  no(b3 4)": [0, 1, 2, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no(2 b3)": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 b3)": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 7)": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        "(10-3) Complementary to Interval Class 3": {
            "Chromatic no(b6 7)": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
            "Chromatic no(5 b7)": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11],
            "Chromatic no(#4 6)": [0, 1, 2, 3, 4, 5, 7, 8, 10, 11],
            "Chromatic no(4 b6) ": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11],
            "Chromatic no(3 5)": [0, 1, 2, 3, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b3 b5)": [0, 1, 2, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no(2 4)": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b2 3)": [0, 2, 3, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no(2 7)": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b2 b7)": [0, 2, 3, 4, 5, 6, 7, 8, 9, 11],
        },
        "(10-4) Complementary to Interval Class 4": {
            "Chromatic no(5 7)": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10],
            "Chromatic no(b5 b7)": [0, 1, 2, 3, 4, 5, 7, 8, 9, 11],
            "Chromatic no(4 6)": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11],
            "Chromatic no(3 b6)": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b3 5)": [0, 1, 2, 4, 5, 6, 8, 9, 10, 11],
            "Chromatic no(2 b5)": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no(b2 4)": [0, 2, 3, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no(b3 7)": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
            "Chromatic no(2 b7)": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b2 6)": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11]
        },
        "(10-5) Complementary to Interval Class 5": {
            "Chromatic no(#4 7)": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10],
            "Chromatic no(4 b7)": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11],
            "Chromatic no(3 6)": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b3 b6)": [0, 1, 2, 4, 5, 6, 7, 9, 10, 11],
            "Chromatic no(2 5)": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11],
            "Chromatic no(b2 b5)": [0, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no(3 7)": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10],
            "Chromatic no(b3 b7)": [0, 1, 2, 4, 5, 6, 7, 8, 9, 11],
            "Chromatic no(2 6)": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11],
            "Chromatic no(b2 b6)": [0, 2, 3, 4, 5, 6, 7, 9, 10, 11]
        },
        "(10-6S) Complementary to Interval Class 6": {
            "Chromatic no(4 7)": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
            "Chromatic no(3 b7), Messiaen Mode 7": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11],
            "Chromatic no(b3 6)": [0, 1, 2, 4, 5, 6, 7, 8, 10, 11],
            "Chromatic no(2 b6)": [0, 1, 3, 4, 5, 6, 7, 9, 10, 11],
            "Chromatic no(b2 5)": [0, 2, 3, 4, 5, 6, 8, 9, 10, 11]
        }
    },
    undecad: {
        "(11-1) Undecad": {
            "Chromatic no7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "Chromatic no b7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
            "Chromatic no6": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11],
            "Chromatic no b6": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11],
            "Chromatic no5": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11],
            "Chromatic no#4/b5": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            "Chromatic no4": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
            "Chromatic no3": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no b3": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no2, 'Northern Lights Chord'": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            "Chromatic no b2": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
    },
    dodecads: {
        "(12-1) Chromatic Scale": {
            "Chromatic scale": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
    }
};
Object.freeze(setList);