import React from 'react';

export class Hangman extends React.Component {
  constructor() {
    super();

    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // let word;              // Selected word
    // let guess;             // Guess
    // let guesses = [];      // Stored guesses
    // let lives;             // Lives
    // let counter;           // Count correct guesses
    // let space;              // Number of spaces in word '-'
    //
    // // Get elements
    // let showLives = document.getElementById("mylives");
  }

//   // create alphabet ul
//   const buttons = function() {
//     myButtons = document.getElementById('buttons');
//     letters = document.createElement('ul');
//
//     for (let i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       check();
//       myButtons.appendChild(letters);
//       letters.appendChild(list);
//     }
//   };
//
//   // Create guesses ul
//   result = function() {
//     wordHolder = document.getElementById('hold');
//     correct = document.createElement('ul');
//
//     for (let i = 0; i < word.length; i++) {
//       correct.setAttribute('id', 'my-word');
//       guess = document.createElement('li');
//       guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }
//
//       guesses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   };
//
//   // Show lives
//   const comments = function() {
//     showLives.innerHTML = "You have " + lives + " lives";
//     if (lives < 1) {
//       showLives.innerHTML = "Game Over";
//     }
//     for (let i = 0; i < guesses.length; i++) {
//       if (counter + space === guesses.length) {
//         showLives.innerHTML = "You Win!";
//       }
//     }
//   };
//
//   // OnClick Function
//   check = function() {
//     list.onclick = function() {
//       let guess = (this.innerHTML);
//       this.setAttribute("class", "active");
//       this.onclick = null;
//       for (let i = 0; i < word.length; i++) {
//         if (word[i] === guess) {
//           guesses[i].innerHTML = guess;
//           counter += 1;
//         }
//       }
//       let j = (word.indexOf(guess));
//       if (j === -1) {
//         lives -= 1;
//         comments();
//         animate();
//       } else {
//         comments();
//       }
//     }
//   }
//
//
//   // Play
//   const play = function() {
//     let jobs = [
//       "Google", "FaceBook", "GE Digital", "Classy"
//     ];
//
//     chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//     word = word.replace(/\s/g, "-");
//     console.log(word);
//     buttons();
//
//     guesses = [];
//     lives = 10;
//     counter = 0;
//     space = 0;
//     result();
//     comments();
//     selectCat();
//     canvas();
//   };
//
//   play();
//
//   let categoryIndex = categories.indexOf(chosenCategory);
//   let hintIndex = chosenCategory.indexOf(word);
// };

  // Reset

  // document.getElementById('reset').onclick = function() {
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   play();
  // }

  render() {
    return (
      <div>
        <div id="buttons"></div>
          <p id="categoryName"></p>
          <div id="hold"></div>
          <p id="mylives"></p>
          <div class="container">
            <button id="reset">Play again</button>
          </div>
      </div>
    );
  }
}

export default Hangman;
