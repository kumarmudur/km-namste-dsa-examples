// solution
//
function checkIfPangram(sentence) {
    const result = new Set();

    for (let char of sentence.toLocaleLowerCase()) {
        if (char.match(/[a-z]/i)) {
            result.add(char);
        }
    }
    return result.size === 26;
}

console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));