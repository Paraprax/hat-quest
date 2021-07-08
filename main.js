const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

const field1 = [
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
];

class Field {
  constructor(fieldArray) {
    //fieldArray will be an array of row-length arrays of the above turf and hole characters
    this.fieldArray = fieldArray;
  }

  print() {
    for (var i = 0; i < this.fieldArray.length; i++) {
      let string = "";
      for (var j = 0; j < this.fieldArray[i].length; j++) {
        string += this.fieldArray[i][j];
      }
      console.log(string);
    }
  }

  startGame() {
    prompt("Hello");
  }
}

const level1 = new Field(field1);
level1.startGame();
