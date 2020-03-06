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

    return this.phrases[randomNum];
  }

  startGame() {}
}
