// ask the user to enter a word
// const userWord = prompt('Enter a word:');
/**
 * check if a word is a palindrome
 * @param {string} word 
 * @returns {boolean}
*/
// create a function to see if the entered word is a palindrome
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}
// console.log(isPalindrome(userWord));


// Even or Odd --------------------------------------------------------------------->
const form = document.querySelector('form');
const winText = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user choice between even and odd
    const userChoice = document.querySelector('.btn-check:checked').value;
    // get user number choice 
    const userNumber = Number(document.querySelector('#userNumber').value);
    // validate the number input before continue
    if (!isNumValid(userNumber)) {
        document.querySelector('#userNumber').classList.add('is-invalid');
        winText.textContent = '';
        alert('Enter a number from 1 to 5');
    } else {
        document.querySelector('#userNumber').classList.remove('is-invalid');
        // get random pc number
        let pcNumber = getRandNumFrom1To5();
        // add the user number to the computer number
        let sum = userNumber + pcNumber;
        // check who won
        if (isEven(sum) && userChoice === 'even' || !isEven(sum) && userChoice === 'odd') {
            console.log('player win');
            winText.textContent = 'You Win 🥳'
        } else {
            console.log('computer win');
            winText.textContent = 'You Lose 🫣'
        }
    }
})

// generate a random number from 1 to 5 for the computer
function getRandNumFrom1To5() {
    return Math.floor(Math.random() * 5) + 1;
}

// check if even
function isEven(sum) {
    return sum % 2 === 0;
}

// number input validation
function isNumValid(userNumber) {
    if (userNumber < 1 || userNumber > 5) {
        return false
    }
    return true
}