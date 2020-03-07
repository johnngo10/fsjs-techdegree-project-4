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
    console.log(thePhrase);
    for (let i = 0; i < thePhrase.length; i++) {
      if (thePhrase[i] !== " ") {
        console.log("letter");
        phraseList.innerHTML += `<li class="hide letter ${thePhrase[i]}">${thePhrase[i]}</li>`;
      } else if (thePhrase[i] === " ") {
        console.log("space");
        phraseList.innerHTML += `<li class="space"></li>`;
      }
    }
  }

  checkLetter() {}

  showMatchedLetter() {}
}
