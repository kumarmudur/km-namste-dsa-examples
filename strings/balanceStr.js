// balance string

// solution 1
function balancedStringSplit(s) {
    let R = 0, L = 0;
    let count = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === 'R') R++;
        else L++;

        if (R === L) {
            count++;
            R = 0;
            L = 0;
        }
    }

    return count;
}

// solution 2
function balancedStringSplit1(s) {
    let temp = 0;
    let count = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === 'R') temp++;
        else temp--;

        if (temp === 0) count++;
    }

    return count;
}

console.log(balancedStringSplit1('RLRRLLRLRL'))

