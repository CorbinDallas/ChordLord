var foundSets = [],
    dupes = [];
function isInFoundSets(newSet) {
    var x, y, isMatch;
    for (x = 0; x < foundSets.length; x++){
        isMatch = true;
        if (foundSets[x].length === newSet.length) {
            for (y = 0; y < newSet.length; y++) {
                if (newSet[y] !== foundSets[x][y]) {
                    isMatch = false;
                    break;
                }
            }
        } else {
            isMatch = false;
        }
        if (isMatch) {
            break;
        }
    }
    return isMatch;
}
Object.keys(setList).forEach(function (set) {
    Object.keys(setList[set]).forEach(function (subset) {
        Object.keys(setList[set][subset]).forEach(function (setName) {
            if (isInFoundSets(setList[set][subset][setName])) {
                dupes.push(setList[set][subset][setName]);
            }
            foundSets.push(setList[set][subset][setName]);
        });
    });
});
if (dupes.length > 0) {
    setTimeout(function () {
        console.log(dupes.join('\n'));
    }, 1000);
}