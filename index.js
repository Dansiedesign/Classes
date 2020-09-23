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

get.color()
set current(sound) 
  console.log(howl);


let bane = new Bane('GSD', 'Large','Saddle', 'Bark')
const json = JSON.stringify(bane)
console.log(json);
console.log('Woof!');

