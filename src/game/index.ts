class ConnectFour {
  private static NUM_COLS = 7;
  private static NUM_ROWS = 6;
  private static NUM_SLOTS = this.NUM_COLS * this.NUM_ROWS;
  private static COLUMN_TO_SLOTS_IN_COLUMN = ConnectFour.calculateLookupTable();

  player1: Player;
  player2: Player;
  currentPlayer: Player;
  board: Board;

  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.board = new Board();
  }

  play(slotNum: number) {
    const col = slotNum % ConnectFour.NUM_COLS;

    const columnSlots = ConnectFour.COLUMN_TO_SLOTS_IN_COLUMN.get(col)!;

    for (const colSlot of columnSlots) {
      if (this.board.fields[colSlot] === undefined) {
        this.board.fields[colSlot] = this.currentPlayer.id;

        const gameOver = this.checkFourConnected();

        if (gameOver) {
          // TODO logic
          console.log("we have a winner", this.currentPlayer.id);
          break;
        } else {
          this.switchPlayer();
          break;
        }
      }
    }
  }

  private switchPlayer() {
    this.currentPlayer =
      this.currentPlayer.id === 1 ? this.player2 : this.player1;
  }

  // TODO test
  private checkFourConnected(): boolean {
    return (
      this.checkFourConnectedInRow() ||
      this.checkFourConnectedInCol() ||
      this.checkFourConnectedDiag()
    );
  }

  private checkFourConnectedInRow(): boolean {
    for (let i = 0; i <= ConnectFour.NUM_SLOTS - 4; i++) {
      if (this.checkAdjacentFour(i, "row")) {
        return true;
      }
    }

    return false;
  }

  private checkFourConnectedInCol(): boolean {
    for (let i = 0; i <= 20; i++) {
      if (this.checkAdjacentFour(i, "col")) {
        return true;
      }
    }

    return false;
  }

  private checkFourConnectedDiag(): boolean {
    return (
      this._checkFourConnectedDiagBF("diagLeft") ||
      this._checkFourConnectedDiagBF("diagRight")
    );
  }

  // TODO test and rewrite more efficiently
  private _checkFourConnectedDiagBF(
    direction: "diagLeft" | "diagRight"
  ): boolean {
    for (let i = 0; i < ConnectFour.NUM_SLOTS; i++) {
      try {
        if (this.checkAdjacentFour(i, direction)) {
          return true;
        }
      } catch (error) {
        continue;
      }
    }

    return false;
  }

  private checkAdjacentFour(
    i: number,
    direction: "row" | "col" | "diagLeft" | "diagRight"
  ): boolean {
    let step: number;

    if (direction === "row") {
      step = 1;
    } else if (direction === "col") {
      step = 7;
    } else if (direction === "diagLeft") {
      step = 6;
    } else {
      step = 8;
    }

    return (
      this.board.fields[i] === this.currentPlayer.id &&
      this.board.fields[i + step] === this.currentPlayer.id &&
      this.board.fields[i + step * 2] === this.currentPlayer.id &&
      this.board.fields[i + step * 3] === this.currentPlayer.id
    );
  }

  private static calculateLookupTable() {
    const columnToSlotsInColumn = new Map<number, number[]>();

    for (let col = 0; col < ConnectFour.NUM_COLS; col++) {
      const slotsInColumn = [
        35 + col,
        28 + col,
        21 + col,
        14 + col,
        7 + col,
        0 + col,
      ];
      columnToSlotsInColumn.set(col, slotsInColumn);
    }

    return columnToSlotsInColumn;
  }
}

class Player {
  id: number;
  points: number;

  constructor(id: number) {
    this.id = id;
    this.points = 0;
  }
}

// TODO necessary?
class Board {
  fields: number[];

  constructor() {
    this.fields = new Array(42);
  }
}

export default ConnectFour;
