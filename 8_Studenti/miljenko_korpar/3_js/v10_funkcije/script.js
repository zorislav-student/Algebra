var words = [
  "quickest",
  "jackie brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

var longestWord = findLongestWord(words);
console.log(longestWord);

function findLongestWord(words) {
    var longestWord = "";

    for (var word of words) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }

    return longestWord;
}