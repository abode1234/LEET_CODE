// first try
function maxScoreWords(words, letters, score) {
    let letterCount = new Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 97]++;
    }
    //TODO: calculate score

    function calculateScore(word) {
        let wordScore = 0;
        for (let char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    }

    //TODO: backtrack to get max score

    function backtrack(index, letterCount) {
        if (index === words.length) return 0;

        let maxScore = backtrack(index + 1, letterCount);
        let word = words[index];
        let WordUsed = true;
        let tempCount = [...letterCount];

        for (let char of word) {
            let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (tempCount[charCode] === 0) {
                WordUsed = false;
                break;
            }
            tempCount[charCode]--;
        }

        if (WordUsed) {
            let currentWordScore = calculateScore(word);
            maxScore = Math.max(maxScore, currentWordScore + backtrack(index + 1, tempCount));
        }

        return maxScore;
    }

    return backtrack(0, letterCount);
}

console.log(maxScoreWords(
    ["dog","cat","dad","good"],
    ["a","a","c","d","d","d","g","o","o"],
    [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
)); // Expected output: 23

console.log(maxScoreWords(
    ["xxxz","ax","bx","cx"],
    ["z","a","b","c","x","x","x"],
    [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
)); // Expected output: 27

console.log(maxScoreWords(
    ["leetcode"],
    ["l","e","t","c","o","d"],
    [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
)); // Expected output: 0

//second try

