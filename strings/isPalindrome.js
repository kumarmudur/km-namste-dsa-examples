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

console.log(isPalindrome2('A man, a plan, a canal: Panama'));