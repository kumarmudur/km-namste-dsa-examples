// write a function search element in an array and return if found return index or -1
//let arr = [4, 2, 0, 10, 8, 30];

// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) return i;
//     }
//     return -1;
// }

// console.log(searchElement(arr, 10)); // 3
// console.log(searchElement(arr, 30)); // 5
// console.log(searchElement(arr, 25)); // -1


// count negative numbers
let arr = [2, -9, 17, 0, 1, -10, -4, -8]
function negativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) count++
    }
    return count;
}

console.log(negativeNumbers(arr));