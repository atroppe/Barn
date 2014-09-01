function cat (name, color, owner){
	this.name = name;
	this.color = color;
	this.owner = owner;
}

cat.prototype.sounds = function(meow){
					console.log(meow);
}

cat.prototype.diet = function(eat){
				  console.log(eat);
}

cat.prototype.speak = function(words){
				  console.log(words);
}

var Garfield = new cat("Garfield", "orange", "John");
var Daisy = new cat("Daisy", "grey", "ownerless");

Garfield.sounds("zzzzz");
Garfield.diet("lasagna");
Garfield.speak("go away");

Daisy.sounds("mewww");
Daisy.diet("mice");
Daisy.speak("cat's got my tongue");


////////////////////////////////////////////////////////////////////////////////////////////

function dog (name, color, owner){
	this.name = name;
	this.color = color;
	this.owner = owner;
}

dog.prototype.speak = function says(words){
	this.words = words;
	console.log(this.owner + "'s" + " dog says " + this.words);
}

dog.prototype.diet = function(eat){
	console.log(eat);
}

var Bobbi = new dog("Bobbi", "brown", "Raanan");
var Woodrow = new dog("Woodrow", "black", "Moshe");

Woodrow.speak("give me that");
Woodrow.diet("kibble");
Bobbi.speak("I hafta get out of that fence");
Bobbi.diet("cats");

//////////////////////////////////////////////////////////

function horse (name, color, owner){
	this.name = name;
	this.color = color;
	this.owner = owner;
}

var Shadowfax = new horse("Shadowfax", "white", "Gandalf");
var Snowfire = new horse("Snowfire", "purple", "Eragon");

horse.prototype.speak = function says(words){
	this.words = words;
	console.log(words);
}
Shadowfax.speak("I am the best");
Snowfire.speak("no, I am the best");

horse.prototype.diet =function eats(food){
	this.food = food;
	console.log(this.name + " eats " + this.food);
}
Shadowfax.diet("enemies");
Snowfire.diet("apples");

/////////////////////////////////////////////////////////////

function barn(shelteredAnimals){ ///<<<-------- this is where shelteredAnimals is defined.
	if (shelteredAnimals instanceof Array){ 
		this.shelteredAnimals = shelteredAnimals;
	} else {
    	this.shelteredAnimals = [];
	}
}

console.log(barn.shelteredAnimals);

barn.prototype.shelter = function(animal){
	this.shelteredAnimals.push(animal);
}

var myBarn = new barn([new dog()]);
var stinkyBarn = new barn();

myBarn.shelter(Garfield);
stinkyBarn.shelter(Shadowfax);
stinkyBarn.shelter(Snowfire);
myBarn.shelter(Woodrow);
myBarn.shelter(Bobbi);
myBarn.shelter(Daisy);

console.log(myBarn.shelteredAnimals); 
console.log(stinkyBarn.shelteredAnimals);

console.log(stinkyBarn.shelteredAnimals[0]); 
//-----how do i print 1 index from the array?


barn.prototype.rollcall = function(){
	console.log(this.shelteredAnimals);
	this.shelteredAnimals.forEach(function(animal, index){
	animal.speak('msg');
	})
}

stinkyBarn.rollcall();

