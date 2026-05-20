// Solution 1
// time: O(nlogn) | space: O(n)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram('anagram', 'nagaram'));

