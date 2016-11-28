
function Car(name, model, type) {
    this.name  = name || "General";
    this.type = type;
    this.model = model || "GM";
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.isSaloon = true;
    if (this.name === 'Porshe' || this.name === 'Koenigsegg') {
      this.numOfDoors = 2;
     }

}
var Trailer = function(name, model, type) { //creates a child class Trailer
  Car.call(this, name, model, type);
  this.numOfWheels = 8;
  this.isSaloon = false;
  this.speed = '20 km/h';
}
Trailer.prototype.drive = function(speed) { //new drive initialized
  this.speed = speed;
  if(this.speed == 5){
    return (this.speed = '77 km/h');
  }
  else if(this.speed == 7){
    return (this.speed = "250 km/h")
  }
};

module.exports = Trailer;


