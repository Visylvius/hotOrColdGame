function hotOrCold() {
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function guessRandomNumber() {
  num = prompt('Guess a number between 1 and 100');
  num = Number(num);
  if(isNaN(num)) {
    prompt('That was not a number, please enter a number');
    return false;
  }

  if (num === randomNumber) {
    console.log('Great Job! That was the number!');
  } else if (Math.abs(num - randomNumber) > 50) {
    console.log('Brrrr your freezing!');
  } else if (Math.abs(num - randomNumber) > 30) {
    console.log('your getting warmer');
  } else if (Math.abs(num - randomNumber) > 20) {
    console.log('even warmer');
  } else if (Math.abs(num - randomNumber) > 10) {
    console.log('Your so close');
  } else {
    console.log('your burning hot');
  }
}

  var randomNumber = getRandomNumber();
  var num = -1;
  console.log(randomNumber);
  while (randomNumber != num) {
    guessRandomNumber();
  }
}
