class dog{
  constructor(breed,size,sound){
    this.sound = sound
    console.log(sound);
    this.breed = breed
    this.size = size
  }
}

class Bane extends dog{
  constructor(breed, size, color, sound){
  super(breed,size, sound)
  this.color = color
  console.log(color);
  }

}
let color = {
   get color(){
   return "black"
    }
  }
let sound = {
   set newSound(sound){
    return "Howl"
    }
  }

let bane = new Bane('GSD', 'Large','Saddle', 'Bark')
const json = JSON.stringify(bane)
console.log(json);
console.log('Woof!');
console.log(sound);
console.log(color);

