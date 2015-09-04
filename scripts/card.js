Card.prototype = {
	//Function that takes in a player's resources and checks if they are sufficient to pay for the card
	playable : function (ammo, parts, energy) {
		if (ammo >= this.ammo && parts >= this.parts && energy >= this.energy) {
			return true;
		}
		return false;
	},

	play : function (target) {
		/////FUNCTION UNFINISHED
	}


}

function Card (card_id, card_name, card_text, ammo, parts, energy, target_type, effect) {
	this.card_id = card_id;
	this.card_name = card_name;
	this.card_text = card_text;
	this.ammo = ammo;
	this.parts = parts;
	this.energy = energy;
	this.target_type = target_type;
	this.effect = effect;
}