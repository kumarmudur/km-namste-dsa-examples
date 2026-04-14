function  countDigits(num) {

    // handling the 0
    if (num === 0) return 1;

    // converting negative numbers to positive
    num = Math.abs(num);

    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countDigits(-7850))