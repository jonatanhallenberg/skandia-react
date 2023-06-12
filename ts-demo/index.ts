let firstname = "Jonatan";
let age = 36;
let hasWings = false;
let birthDate = new Date("1987-09-13");

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const add = (a: number, b?: number) => {
    console.log(a + (b || 0));
}

type Animal = {
    weight: number,
    legsCount: number,
    canFly: boolean,
    sound?: string,
    birthdate: Date
}

const animal: Animal = {
    weight: 100,
    legsCount: 4,
    canFly: false,
    birthdate: new Date("2011-11-11")
}

const animals: Array<Animal> = [
    {
        weight: 100,
        legsCount: 4,
        canFly: false,
        birthdate: new Date("2011-11-11")
    },
    {
        weight: 100,
        legsCount: 4,
        canFly: false,
        birthdate: new Date("2011-11-11")
    },
    {
        weight: 100,
        legsCount: 4,
        canFly: false,
        birthdate: new Date("2011-11-11")
    }
]

animal.sound?.substring(0, 3);


