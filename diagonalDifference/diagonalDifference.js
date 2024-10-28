/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

arr = [[11, 2, 4],[4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length; j++) {
            if (i == j){
                firstDiagonal = firstDiagonal + arr[i][j];
                console.log('firstDiagonal', arr[i][j])
            } 
            if ((i + j) == arr.length - 1) {
                secondDiagonal = secondDiagonal + arr[i][j];
                console.log('secondDiagonal', arr[i][j])
            }
        }
    }

    return Math.abs(firstDiagonal - secondDiagonal)
}
console.log(diagonalDifference(arr));


