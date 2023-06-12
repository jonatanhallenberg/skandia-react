const animal = {
    weight: 100,
    legsCount: 4,
    canFly: false,
    sound: "bark",
    birthdate: new Date("2011-11-11")
}

const { weight, legsCount, canFly, sound } = animal;

console.log(`Jag väger ${weight} kg, har ${legsCount} ben. Jag kan ${canFly ? '' : 'inte '}flyga. ${sound.toUpperCase()}!!!`)

const animals = ["cat", "horse", "ape", "dog"];

const animalPhrases = animals.map(
    (animal) => "I am a " + animal
)

console.log(animalPhrases);

const animalPhrase = [ "I am a cat", "I am a horse", "I am a ape", "I am a "]

const animalsWithOAsSecondCharacter = animals.filter(
    (animal) => animal[1] === "o"
);

console.log(animalsWithOAsSecondCharacter);