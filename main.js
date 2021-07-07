const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const field1 = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

class Field {
    constructor(fieldArray) { //fieldArray will be an array of row-length arrays of the above turf and hole characters
        this.fieldArray = fieldArray;
    }

    print() {
        for (var i = 0; i < this.fieldArray.length; i++) {
            console.log(this.fieldArray[i]);
        }
    }
}