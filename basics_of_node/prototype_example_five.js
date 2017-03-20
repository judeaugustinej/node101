// prototype help use to add methods and properties to objects
function User(){
    this.name = '';
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + 'give 1 life to' + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted" + targetPlayer.name);
};

Wendy.uppercut(Bucky);

console.log("Bucky" + Bucky.life);
console.log("Wendy" + Wendy.life);

// adding property magic to object User
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);

