ar = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    let sumArrayElements = 0;
    for (let i = 0; i < ar.length; i++) {
        sumArrayElements = sumArrayElements + ar[i];
    }
    
    return sumArrayElements;
}

function main() {
    let result = simpleArraySum(ar);
    console.log(result + '\n');
}

main();