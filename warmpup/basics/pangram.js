function checkIfPangram(sentense) {
    let result = new Set();

    for (let char of sentense.toLowerCase()) {
        if (char.match(/[a-z]/i)) {
            result.add(char);
        }
    }
    console.log(result);
}

console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));