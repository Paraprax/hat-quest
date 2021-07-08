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
    this.xCoord = 0;
    this.yCoord = 0;
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

  move(direction) {
    switch (direction) {
      case "N":
        break;
      case "E":
        break;
      case "S":
        break;
      case "W":
        break;
      default:
        break;
    }
  }

  startGame() {
    console.log("Welcome to the field. Which way do you want to go?");
    let direction = prompt("[Enter 'N', 'E', 'S', or 'W'.] ");
    if (
      direction == "n" ||
      direction == "e" ||
      direction == "s" ||
      direction == "w"
    ) {
      direction = direction.toUpperCase();
      console.log(`You have selected ${direction}`);
      //move();
    } else {
      console.log("Please enter a valid cardinal direction.");
      this.startGame();
    }
  }
}

const level1 = new Field(field1);
level1.startGame();
