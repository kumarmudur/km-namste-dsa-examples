// solution 1
// time: O(N) | space: O(N)
function reverseVowels(s) {
    let first = 0;
    let last = s.length - 1;
    let vowels = 'aeiouAEIOU';
    let arr = s.split('');

    while (first < last) {
        if (first < last && vowels.indexOf(arr[first]) === -1) {
            first++;
        }

        if (first < last && vowels.indexOf(arr[last]) === -1) {
            last--;
        }

        [arr[first], arr[last]] = [arr[last], arr[first]];
        first++;
        last--;
    }

    return arr.join('');
}