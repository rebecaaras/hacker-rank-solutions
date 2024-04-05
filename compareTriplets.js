const a = [5, 6, 7];
const b = [3, 6, 10];

function compareTriplets(a, b) {
    let comparissonScoreArray = [0, 0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            comparissonScoreArray[0] += 1;
        }
        
        else if (a[i] < b[i]) {
            comparissonScoreArray[1] += 1;
        };
    }
    return (console.log(comparissonScoreArray));
}

compareTriplets(a, b);