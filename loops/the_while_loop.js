const cards = ['diamond', 'spade', 'heart', 'club'];
// Write your code below
let currentCard;
//use while loop
while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

