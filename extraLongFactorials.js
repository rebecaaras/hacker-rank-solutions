function extraLongFactorials(n) {
    let factorial = BigInt("1");
    for (let i = 1n ; i <= n; i++) {
        factorial = factorial * i;
        //console.log(factorial);
    }
    return console.log(BigInt(factorial).toString());
}
extraLongFactorials(25);