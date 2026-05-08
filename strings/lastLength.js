// find the length of last numbers

// solution 1;
function lengthOfLastWord(s) {
    s = s.trim().split(' ');
    return s[s.length - 1].length;
}

// solution 2
function lengthOfLastWord1(s) {
    let n = s.length - 1;

    while (n >= 0) {
        if (s[n] !== ' ') break;
        --n;
    }

    let count = 0;
    while (n >= 0) {
        if (s[n] === ' ') break;
        --n;
        count++;
    }
    return count;
}

// solution 3
function lengthOfLastWord2(s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] !== ' ') ++count;
        else if (count > 0) break;
        --n;
    }
    return count;
}

console.log(lengthOfLastWord2('   Hello 123World    '));