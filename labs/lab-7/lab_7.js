const readline = require('readline-sync');

const userInput = readline.question('Please enter a sentance: ');
let words = userInput.trim().replace(/,/gi, "").split(/\s+/);
const countWords = countWord(words);
for (const word in countWords) {
    console.log(`${word}: ${countWords[word]}`);
}

function countWord(words) {
    const wordCount = {};
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (wordCount[word] === undefined) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    }

    return wordCount;
}