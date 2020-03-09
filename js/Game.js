/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const fivePhrases = [
      { phrase: "I like tacos" },
      { phrase: "Javascript is fun" },
      { phrase: "I enjoy coding" },
      { phrase: "I want to travel" },
      { phrase: "full stack developer" }
    ];

    return fivePhrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const phraseLength = this.phrases.length;
    const randomNum = Math.floor(Math.random() * (phraseLength - 0)) + 0;

    return this.phrases[randomNum].phrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    const getPhrase = this.getRandomPhrase();
    this.activePhrase = getPhrase.toLowerCase();
    const phrase = new Phrase(this.activePhrase);

    phrase.addPhraseToDisplay();
  }

  handleInteraction() {}

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const phraseLetters = document.querySelectorAll(".letter");

    for (let i = 0; i < phraseLetters.length; i++) {
      if (phraseLetters[i].classList.contains("hide")) {
        return false;
      } else {
        return true;
      }
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = document.querySelector("img[src='images/liveHeart.png']");
    console.log(hearts);
    // const checkLetter = new Phrase().checkLetter();

    // for (let i = 0; i < hearts.length; i++) {
    //   if (checkLetter === false) {
    //     hearts[i].firstElementChild.src = "images/lostHeart.png";
    //     this.missed += 1;
    //   }
    // }

    if (hearts.src !== "images/lostHeart.png") {
      hearts.src = "images/lostHeart.png";
      this.missed += 1;
      console.log(this.missed);
    }

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const message = document.getElementById("game-over-message");
    const overlay = document.getElementById("overlay");

    if (gameWon === true) {
      message.textContent = "You Won";
      overlay.classList.remove("start");
      overlay.classList.add("win");
      overlay.style.display = "block";
      console.log("won");
    } else if (gameWon === false) {
      message.textContent = "Try Again!";
      overlay.classList.remove("start");
      overlay.classList.add("lose");
      overlay.style.display = "block";
      console.log("lost");
    }
  }
}
