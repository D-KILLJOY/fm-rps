const plScore = document.querySelector(".score");
const selection = document.querySelector(".triangle");
const gamePlay = document.querySelector(".game-play");
const playerImg = document.querySelector(".player-img");
const plSelImg = document.querySelector(".pl-sel-img");
const compSelImg = document.querySelector(".cmp-sel-img");
const compImg = document.querySelector(".comp-img");

const messageDoc = document.querySelector(".message");
const rules = document.querySelector(".rules");

// ! BTNS

const selBtn = document.querySelectorAll(".sel-btn");

const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close");
const playAgain = document.querySelector(".play-again");

const bonusGame = document.querySelector(".bonus-btn");

// ! CHOICES
let playerSelection = "";
let cpuSelection = "";

// ! PLAYER SELECTION
let score = 0;

function display() {
	plScore.textContent = score;
}

display();

// ! PLAYER SELECTION

selBtn.forEach((i) => {
	i.addEventListener("click", () => {
		selection.style.display = "none";
		gamePlay.style.display = "block";
		let app = i.getAttribute("value");
		playerSelection = app;

		if (app === "paper") {
			playerImg.src = "./images/icon-paper.svg";
			plSelImg.style.outlineColor = "var(--Paper-Gradient)";
		} else if (app === "rock") {
			playerImg.src = "./images/icon-rock.svg";
			plSelImg.style.outlineColor = "var(--Rock-Gradient)";
		} else {
			playerImg.src = "./images/icon-scissors.svg";
			plSelImg.style.outlineColor = "var(--Scissors-Gradient)";
		}

		compSelection();
		validate();
		display();
	});
});
// ! PLAYER SELECTION

// ! COMP SELECTION

function compSelection() {
	const compsel = ["rock", "paper", "scissors"];
	let compChoice = Math.floor(Math.random() * 3);
	let cpuChoice = compsel[compChoice];
	cpuSelection = cpuChoice;

	if (compChoice === 0) {
		compImg.src = "./images/icon-rock.svg";
		compSelImg.style.outlineColor = "var(--Rock-Gradient)";

		console.log(cpuChoice);
	} else if (compChoice === 1) {
		compImg.src = "./images/icon-paper.svg";
		compSelImg.style.outlineColor = "var(--Paper-Gradient)";
		console.log(cpuChoice);
	} else {
		compImg.src = "./images/icon-scissors.svg";
		compSelImg.style.outlineColor = "var(--Scissors-Gradient)";
		console.log(cpuChoice);
	}
}
// ! COMP SELECTION

// !  SELECTION VALIDATION
function validate() {
	const message = ["you win", "you lose", "draw"];

	if (playerSelection === cpuSelection) {
		messageDoc.textContent = message[2];
	} else if (playerSelection === "rock" && cpuSelection === "scissors") {
		messageDoc.textContent = message[0];
		score++;
	} else if (playerSelection === "rock" && cpuSelection === "paper") {
		messageDoc.textContent = message[1];
	} else if (playerSelection === "paper" && cpuSelection === "scissors") {
		messageDoc.textContent = message[1];
	} else if (playerSelection === "paper" && cpuSelection === "rock") {
		messageDoc.textContent = message[0];
		score++;
	} else if (playerSelection === "scissors" && cpuSelection === "rock") {
		messageDoc.textContent = message[1];
	} else if (playerSelection === "scissors" && cpuSelection === "paper") {
		messageDoc.textContent = message[0];
		score++;
	}
}
// !  SELECTION VALIDATION
rulesBtn.addEventListener("click", () => {
	rules.classList.remove("d-none");
	document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
	rules.classList.add("d-none");
	document.body.classList.remove("no-scroll");
});

// !  PLAY AGAIN
playAgain.addEventListener("click", () => {
	selection.style.display = "flex";
	gamePlay.style.display = "none";
});

// ! BONUS GAME
bonusGame.addEventListener("click", () => {
	alert("COMING SOON");
});
