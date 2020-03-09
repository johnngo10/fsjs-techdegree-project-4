/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseDisplay = document.getElementById("phrase");
    const phraseList = phraseDisplay.firstElementChild;
    const thePhrase = this.phrase;
    for (let i = 0; i < thePhrase.length; i++) {
      if (thePhrase[i] !== " ") {
        phraseList.innerHTML += `<li class="hide letter ${thePhrase[i]}">${thePhrase[i]}</li>`;
      } else if (thePhrase[i] === " ") {
        phraseList.innerHTML += `<li class="space"> </li>`;
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    const phrase = game.activePhrase;

    if (phrase.indexOf(letter) > -1) {
      return true;
    } else if (phrase.indexOf(letter) < 0) {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const phraseLetters = document.querySelectorAll(".letter");
    // const checkLetter = this.checkLetter();

    for (let i = 0; i < phraseLetters.length; i++) {
      if (letter === phraseLetters[i].textContent) {
        phraseLetters[i].classList.remove("hide");
        phraseLetters[i].classList.add("show");
      }
    }
  }
}
