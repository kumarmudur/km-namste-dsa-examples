// solution
// time: O(N) | space: O(1)
function isAnagram(s, t) {
    let map = {};

    for (let char of s) {
        map[char] = !map[char] ? 1 : map[char] += 1;
    }

    for (let char of t) {
        map[char] = !map[char] ? -1 : map[char] -+ 1;
    }

    for (let [key] in map) {
        if (map[key] !== 0) return false;
    }

    return true;
}

// solution 2
// time: O(N) | space: O(1)
function isAnagrams1(s, t) {
    // Check if the lengths of both strings are equal. If not, return false.
    if (s.length !== t.length) return false;

    // Create an object to store the frequency of characters in both strings.
    let freqMap = {};
    for (let i = 0; i < s.length; i++) {
        // Increment the frequency of the character in string s.
        freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;

        // Decrement the frequency of the character in string t.
        freqMap[t[i]] = (freqMap[t[i]] || 0) - 1;
    }

    // Check if the frequency of all characters is 0.
    for (let char in freqMap) {
        if (freqMap[char] !== 0) return false;
    }

    // If all characters have a frequency of 0, this means that 't' is an anagram of 's'.
    return true;
}

console.log(isAnagram('listen', 'silent'));

