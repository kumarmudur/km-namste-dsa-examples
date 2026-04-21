// solution 1
function findMissingNumber(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i <= nums.length; i++) {
        if(nums[i] !== i) return i;
    }
}

// solution 2
function findMissingNumber2(nums) {
    const n = nums.length;
    const expectedSum= (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}