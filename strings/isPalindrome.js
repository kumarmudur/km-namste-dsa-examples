// isPalindrome

// solution 1
// time: O(n) | space: O(n)
function isPalindrome(s) {
    s = s.toLowerCase();
    let filteredStr = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredStr += s[i];
        }
    }

    let rev = filteredStr.split('').reverse().join('');

    return filteredStr === rev;
}

// solution 2
// time: O(n) | space: O(n)
function isPalindrome2(s) {
    s = s.toLowerCase();
    let filteredStr = '';
    let rev = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredStr += s[i];
            rev = s[i] + rev;
        }
    }

    return filteredStr === rev;
}

// solution 3
// time: O(n) | space: O(1)
// two pointer example
function isPalindrome3(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) ++i;
        else if (!s[j].match(/[a-z0-9]/i)) --j;
        else if (s[i] === s[j]) {
            ++i;
            --j;
        } else return false;
    }

    return true;
}

console.log(isPalindrome3('A man, a plan, a canal: Panama'));