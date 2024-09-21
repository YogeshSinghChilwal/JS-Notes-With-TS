// const form = document.querySelector('.form')
// const lowOrHi = document.querySelector(".lowOrHi")
// const preGuess = document.querySelector(".guesses")
// const guessRemaining = document.querySelector(".lastResult")


// let num = 10;
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const input = document.querySelector('#guessField')
//     const inputNumber = parseInt(input.value)
//     input.value = ""

//     console.log(inputNumber)

//     if(inputNumber < randomNum){
//         lowOrHi.innerHTML = "LOW"
//     } else if(inputNumber > randomNum){
//         lowOrHi.innerHTML = "HIGH"
//     }else{
//         lowOrHi.innerHTML = "BINGO!!"
//         return
//     }

//     preGuess.innerHTML = inputNumber
//     guessRemaining.innerHTML = `${--num}`
//     if(num === 0){
//         lowOrHi.innerHTML = "GAME OVER!!"
//     }


// })

// const randomNum = Math.floor(Math.random() * 100 + 1)
// console.log(randomNum);



let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

/*

let randomNumber: number = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt') as HTMLButtonElement | null;
const userInput = document.querySelector('#guessField') as HTMLInputElement | null;
const guessSlot = document.querySelector('.guesses') as HTMLElement | null;
const remaining = document.querySelector('.lastResult') as HTMLElement | null;
const lowOrHi = document.querySelector('.lowOrHi') as HTMLElement | null;
const startOver = document.querySelector('.resultParas') as HTMLElement | null;

const p: HTMLElement = document.createElement('p');

let prevGuess: number[] = [];
let numGuess: number = 1;
let playGame: boolean = true;

if (submit && userInput && guessSlot && remaining && lowOrHi && startOver) {
  if (playGame) {
    submit.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const guess: number = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

  function validateGuess(guess: number) {
    if (isNaN(guess)) {
      alert('Please enter a valid number');
    } else if (guess < 1) {
      alert('Please enter a number more than 1');
    } else if (guess > 100) {
      alert('Please enter a number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess: number) {
    if (guess === randomNumber) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Number is TOO low`);
    } else if (guess > randomNumber) {
      displayMessage(`Number is TOO high`);
    }
  }

  function displayGuess(guess: number) {
    if (userInput && guessSlot && remaining) {
      userInput.value = '';
      guessSlot.innerHTML += `${guess}, `;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess} `;
    }
  }

  function displayMessage(message: string) {
    if (lowOrHi) {
      lowOrHi.innerHTML = `<h2>${message}</h2>`;
    }
  }

  function endGame() {
    if (userInput && startOver) {
      userInput.value = '';
      userInput.setAttribute('disabled', '');
      p.classList.add('button');
      p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
      startOver.appendChild(p);
      playGame = false;
      newGame();
    }
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame') as HTMLElement | null;
    if (newGameButton && userInput && startOver && guessSlot && remaining) {
      newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
      });
    }
  }
} else {
  console.error("One or more elements were not found.");
}
*/