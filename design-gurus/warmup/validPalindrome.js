// solution
// time; O(N) | space: O(1)
function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (start < end && !s[start].match(/^[a-z0-9]+$/i)) start++;
        while (start <= end && !s[end].match(/^[a-z0-9]+$/i)) end--;
        if (s[start].toUpperCase() !== end.toUpperCase()) return false
        start++;
        end--;
    }

    return true;
}

