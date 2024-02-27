// ask the user to enter a word
const userWord = prompt('Enter a word:');
// create a function to see if the entered word is a palindrome
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

console.log(isPalindrome(userWord));