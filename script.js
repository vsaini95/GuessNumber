"use script";

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessgae = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMessgae("No Number!");
  } else if (guess === secret) {
    displayMessgae("Correct Number!");
    document.querySelector(".highscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secret;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secret) {
    if (score > 1) {
      displayMessgae(guess < secret ? "Too Low!" : "Too High!");
      --score;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessgae("You Lost! Try Again");
      document.querySelector(".score").textContent = 0;
    }
  }
  document.querySelector(".score").textContent = score;
});
document.querySelector(".again").addEventListener("click", function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessgae("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
