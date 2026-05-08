// find the length of last numbers

// solution 1;
function lengthOfLastWord(s) {
    s = s.trim().split(' ');
    return s[s.length - 1].length;
}

console.log(lengthOfLastWord('Hello World'));