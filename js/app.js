/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();

document.getElementById("btn__reset").addEventListener("click", () => {
  game.startGame();
});
