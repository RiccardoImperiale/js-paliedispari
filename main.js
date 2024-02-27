// ask the user to enter a word
const userWord = prompt('Enter a word:');
// create a function to see if the entered word is a palindrome
function isPalindrome(word) {
    let isPalindrome;
    let firstHalfWord = '';
    let lastHalfWord = '';
    let reversedWord = word.split("").reverse().join("");

    for (let i = 0; i < word.length / 2; i++) {
        firstHalfWord += word[i];
        lastHalfWord += reversedWord[i];
    }
    return firstHalfWord === lastHalfWord ? isPalindrome = true : isPalindrome = false
}

console.log(isPalindrome(userWord));