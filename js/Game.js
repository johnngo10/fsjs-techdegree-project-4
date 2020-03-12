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

  /**
   * Handles game interactions
   */

  handleInteraction(button) {
    const check = phrase.checkLetter(button);
    const show = new Phrase();
    const checkWin = this.checkForWin();

    if (check === false) {
      button.className = "wrong";
      this.removeLife();
    } else if (check === true) {
      button.className = "chosen";
      show.showMatchedLetter(button);
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    }
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const phraseLetters = document.querySelectorAll(".letter");
    const shownLetters = document.querySelectorAll(".show");

    if (phraseLetters.length === shownLetters.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const hearts = document.querySelector("img[src='images/liveHeart.png']");

    if (hearts.src !== "images/lostHeart.png") {
      hearts.src = "images/lostHeart.png";
      this.missed += 1;
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
    } else if (gameWon === false) {
      message.textContent = "Try Again!";
      overlay.classList.remove("start");
      overlay.classList.add("lose");
      overlay.style.display = "block";
    }
  }

  /**
   * Reset Game
   */

  resetGame() {
    const phraseList = document.getElementById("phrase").firstElementChild;
    const keyboard = document.getElementById("qwerty");
    const keys = keyboard.querySelectorAll("button");
    const heartImg = document.querySelectorAll("img[alt='Heart Icon']");
    const overlay = document.getElementById("overlay");
    // empty phrase from display
    phraseList.innerHTML = "";
    // reset missed
    this.missed = 0;
    // reset key buttons
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].className === "chosen") {
        keys[i].className = "key";
        keys[i].removeAttribute("disabled");
      } else if (keys[i].className === "wrong") {
        keys[i].className = "key";
        keys[i].removeAttribute("disabled");
      }
    }
    // reset hearts
    for (let i = 0; i < heartImg.length; i++) {
      if (heartImg[i].src !== "images/liveHeart.png") {
        heartImg[i].src = "images/liveHeart.png";
      }
    }
    // reset overlay
    if (overlay.classList.contains("win")) {
      overlay.classList.remove("win");
    } else if (overlay.classList.contains("lose")) {
      overlay.classList.remove("lose");
    }
  }
}
