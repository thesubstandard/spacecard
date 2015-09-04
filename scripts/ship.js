//Global variables likely to be removed:
CAPITAL_SHIP_MAX_HP = 40;
CAPITAL_SHIP_MAX_SP = 60;

CapitalShip.prototype  = {
	//Checks if ship is alive
	is_alive : function () {
		if (this.hit_points > 0) {
			return true;
		}
		return false;
	},

	//Increases and/or decreases armories, factories, and/or batteries
	economy : function (armories, factories, batteries) {
		this.armories = Math.max(this.armories + armories, 1);
		this.factories = Math.max(this.factories + factories, 1);
		this.batteries = Math.max(this.batteries + batteries, 1);
	},

	//Increases and/or decreases ammo, parts, and/or energy
	resources : function(ammo, parts, energy) {
		this.ammo = Math.max(this.ammo + ammo, 0);
		this.parts = Math.max(this.parts + parts, 0);
		this.energy = Math.max(this.energy + energy, 0);
	},

	//Standard function to increase resources at the start of each turn
	produce : function () {
		this.resources(this.armories, this.factories, this.batteries);
	},

	//Increase ship's hit points or shield points
	//NOTE: Affected by global variables at top of page
	repair : function (hit_points, shield_points) {
		this.hit_points = Math.min(this.hit_points + hit_points, CAPITAL_SHIP_MAX_HP);
		this.shield_points = Math.min(this.shield_points + shield_points, CAPITAL_SHIP_MAX_SP);
	},

	//Standard damage function, which targets shield points, then the hit points
	damage : function (amount) {
		ship_damage = Math.max(amount - this.shield_points, 0);
		shield_damage = Math.min(amount, this.shield_points);
		this.hit_points = Math.max(this.hit_points - ship_damage, 0);
		this.shield_points -= shield_damage;
	},

	ship_damage : function (amount) {
		this.hit_points = Math.max(this.hit_points - amount, 0);
	},

	shield_damage : function (amount) {
		this.shield_points = Math.max(this.shield_points - amount, 0);
	},

	//For console debugging
	print_state : function () {
		console.log(this.user_name + "\n" +
			this.user_type + "\n" +
			this.hit_points + "\n" +
			this.shield_points + "\n" +
			this.armories + "\n" +
			this.factories + "\n" +
			this.batteries + "\n" +
			this.ammo + "\n" +
			this.parts + "\n" +
			this.energy + "\n");
	},

	playable : function(card_index) {
		var ammo = this.ammo;
		var parts = this.parts;
		var energy = this.energy;
		if (this.cards.playable(card_index, ammo, parts, energy)) {
			return true;
		}
		return false;
	}
}

//CapitalShip constructor:
function CapitalShip (user_name, user_type, hit_points, shield_points, armories, factories, batteries, ammo, parts, energy, cards) {
	//Not sure if internal or external
	this.user_name = user_name;
	this.user_type = user_type;
	//Externally accessed
	this.cards = cards;
	//Treated as private
	this.hit_points = hit_points;
	this.shield_points = shield_points;
	this.armories = armories;
	this.factories = factories;
	this.batteries = batteries;
	this.ammo = ammo;
	this.parts = parts;
	this.energy = energy;
}