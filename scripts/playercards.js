var INITIAL_HAND_SIZE = 5;

PlayerCards.prototype = {
	//Shuffles any array
	shuffle : function (array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
  		return array;
	},

	draw : function (amount) {
		for (var i = 0; i < amount; i++) {
			if (this.deck.length > 0) {
				//This both removes the card from the deck and adds it to the hand.
				this.hand.push(this.deck.pop());
			}
			//DECIDE HANDLING FOR EMPTY DECK??
		}
	},

	discard : function (index) {
		this.discard_pile.push(this.hand[index]);
		this.hand.splice(index, 1);
	},

	play : function (current_player, index) {
		this.hand[index].play(target);
		this.discard(index);
	},
	
	playable : function (card_index, ammo, parts, energy) {
		if (this.hand[card_index].playable(ammo, parts, energy)) {
			return true;
		}
		return false;
	}

}

function PlayerCards (decklist) {
	this.deck = this.shuffle(decklist);
	this.hand = [];
	this.discard_pile = [];
	this.draw(5);
}