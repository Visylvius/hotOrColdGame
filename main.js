var randomNumber = Math.floor(Math.random() * 100) + 1;

function guessRandomNumber(num) {
  num = prompt('Guess a number between 1 and 100');
  num = Number(num);
  var twentyToThirtyArr = [20,21,22,23,24,25,26,27,28,29,30];
  var twentyToTenArr = [20,19,18,17,16,15,14,13,12,11,10];
  if(isNaN(num)) {
    prompt('That was not a number, please enter a number');
    return false;
  }
  if (num === randomNumber) {
    console.log('Great Job! That was the number!');
  } else if (num - 50 || num + 50 < randomNumber) {
    console.log('Brrrr your freezing!');
  } else if (num - 30 || num - 20 || num + 20 || num - 20 < randomNumber) {
    console.log('your getting warmer');
  } else if (num) {
}
}
