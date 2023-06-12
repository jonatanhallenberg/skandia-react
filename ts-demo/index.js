"use strict";
var _a;
let firstname = "Jonatan";
let age = 36;
let hasWings = false;
let birthDate = new Date("1987-09-13");
const add = (a, b) => {
    console.log(a + (b || 0));
};
const animal = {
    weight: 100,
    legsCount: 4,
    canFly: false,
    birthdate: new Date("2011-11-11")
};
const animals = [
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
];
(_a = animal.sound) === null || _a === void 0 ? void 0 : _a.substring(0, 3);
