var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
	];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

//called when card is clicked
function flipCard() {
	//get attribute data id for clicked card
	var cardId = this.getAttribute("data-id");
	//set attribute src to the image of the card
	this.setAttribute('src', cards[cardId].cardImage);
	//add card to array
	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}
//create the board for game
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		//create an image element
		var cardElement = document.createElement('img');
		//set the src attribute
		cardElement.setAttribute('src', 'images/back.png');
		//set data id attribute
		cardElement.setAttribute('data-id', i);
		//add click event
		cardElement.addEventListener('click', flipCard);
		//append the current cardElement to the game board
		document.getElementById('game-board').appendChild(cardElement);	
	}
}
createBoard();