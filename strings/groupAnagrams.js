// group anagrams

// time: O(n*mlogm) : space: O(n * m)
// n - no of strings
// m - max length of each string
// solution 1
function groupAnagrams(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('');
        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }
    }
}

