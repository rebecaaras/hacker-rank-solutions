const s = [[4, 9, 2],
           [3, 5, 7],
           [8, 1, 9]]

/* All the magic squares of order 3 */
const allMagicSquares = [[[4,9,2],[3,5,7],[8,1,6]],
                  [[2,7,6],[9,5,1],[4,3,8]],
                  [[6,1,8],[7,5,3],[2,9,4]],
                  [[8,3,4],[1,5,9],[6,7,2]],
                  [[2,9,4],[7,5,3],[6,1,8]],
                  [[6,7,2],[1,5,9],[8,3,4]],
                  [[8,1,6],[3,5,7],[4,9,2]],
                  [[4,3,8],[9,5,1],[2,7,6]]]


function formingMagicSquare(s) {
    let totalCost = [0, 0, 0, 0, 0, 0, 0, 0];
    let minTotalCost = 0;
    for (let i = 0; i < allMagicSquares.length; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                totalCost[i] += Math.abs(allMagicSquares[i][j][k] - s[j][k]);
            }
        }
    }
        
    minTotalCost = Math.min(...totalCost)
    
    return minTotalCost
}

let result = formingMagicSquare(s)
console.log(result)


