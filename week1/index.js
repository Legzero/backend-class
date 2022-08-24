// Asynchronous nature of node
// delcare variables
// class object and Arrays, Accessing items (dot and bracket notation)

const animals = {
    name: 'dog',
    sound: 'bark'
}

const Animal = {
    name: 'dog',
    Sound: 'bark'
}

class Animals {
    constructor (name, sound) {
        this.name=name;
        this.sound=sound;
    }
}
const newAnimals = new Animals('pig', 'grunt')
console.log(animals)
console.log(newAnimals)


const newAnimals1 = new Animals('pig', 'grunt')
const newAnimals2 = new Animals('cow', 'mow')

const animalCollection = [newAnimals1]
animalCollection.push(newAnimals2)
console.log(animalCollection[1].sound)
















let statement = 'statement Number two'
const statement2 ='statement Number one' 

setTimeout (()=> {
    console.log ('statement = we are just getting started') 
}, 4000)

setTimeout (()=> {
    console.log ('statement2') 
}, 4000)

console.log ('statement Number one')
console.log ('statement Number three')