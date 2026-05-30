// check if array contains duplicates

// solution 1:
// time: O(N^2) | space: O(1)
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

// solution 2:
// time: O(N) | space: O(1)
function containsDuplicate1(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}

// solution 3:
// time: O(NlogN) | space: O(logN)
function containsDuplicate2(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}

console.log(containsDuplicate1([1, 2, 3, 1, 4, 5, 6]));