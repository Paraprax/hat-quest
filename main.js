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
        this.yCoord -= 1;
        break;
      case "E":
        this.xCoord += 1;
        break;
      case "S":
        this.yCoord += 1;
        break;
      case "W":
        this.xCoord -= 1;
        break;
      default:
        break;
    }

    console.log(`x: ${this.xCoord}, y: ${this.yCoord}`);

    //end the game if the player went off-map:
    if (
      this.xCoord < 0 ||
      this.yCoord < 0 ||
      this.xCoord > this.fieldArray[0].length ||
      this.yCoord > this.fieldArray.length - 1
    ) {
      console.log("Fell off the map! Game over!");
      return;
    } else if (this.fieldArray[this.yCoord][this.xCoord] == "O") {
      //end the game if the player went in a hole:
      console.log("Fell through a hole! Game over!");
      return;
    } else if (this.fieldArray[this.yCoord][this.xCoord] == "^") {
      //win the game if the player found the hat:
      console.log("Hat found! You win!");
      this.fieldArray[this.yCoord][this.xCoord] = "♔";
      this.print(this.fieldArray);
    } else {
      //otherwise, replace the tile where the player is with the player token:
      this.fieldArray[this.yCoord][this.xCoord] = "*";
      this.print(this.fieldArray);
    }
  }

  playGame() {
    let direction = prompt("[Enter 'N', 'E', 'S', or 'W'.] ");
    //validate that the user picked a cardinal direction:
    if (
      direction == "n" ||
      direction == "e" ||
      direction == "s" ||
      direction == "w"
    ) {
      direction = direction.toUpperCase();
      console.log(`You have selected ${direction}`);
      //send the direction to the 'move' method:
      this.move(direction);
      this.playGame();
    } else {
      //recursion if they picked anything other than NESW:
      console.log("Please enter a valid cardinal direction.");
      this.playGame();
    }
  }

  startGame() {
    console.log("Welcome to the field. Which way do you want to go?");
    //accept input:
    this.playGame();
  }
}

const level1 = new Field(field1);
level1.startGame();
