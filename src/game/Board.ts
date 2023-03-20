export default class Board {
  private static NUM_SLOTS = 42;
  fields: number[];

  constructor() {
    this.fields = new Array(Board.NUM_SLOTS);
  }

  getFreeSlots() {
    const freeSlots: number[] = [];

    for (let i = 0; i < this.fields.length; i++) {
      const field = this.fields[i];

      if (field === undefined) {
        freeSlots.push(i);
      }
    }

    return freeSlots;
  }

  clear() {
    this.fields = new Array(Board.NUM_SLOTS);
  }

  set(idx: number, value: number) {
    this.fields[idx] = value;
  }

  slotIsEmpty(idx: number) {
    return this.fields[idx] === undefined;
  }

  // TODO test
  checkFourConnected() {
    return (
      this.checkFourConnectedInRow() ||
      this.checkFourConnectedInCol() ||
      this.checkFourConnectedDiag()
    );
  }

  private checkFourConnectedInRow() {
    for (let i = 0; i <= Board.NUM_SLOTS - 4; i++) {
      if (this.checkAdjacentFour(i, "row")) {
        return true;
      }
    }

    return false;
  }

  private checkFourConnectedInCol() {
    for (let i = 0; i <= 20; i++) {
      if (this.checkAdjacentFour(i, "col")) {
        return true;
      }
    }

    return false;
  }

  private checkFourConnectedDiag() {
    return (
      this._checkFourConnectedDiagBF("diagLeft") ||
      this._checkFourConnectedDiagBF("diagRight")
    );
  }

  // TODO test and rewrite more efficiently
  private _checkFourConnectedDiagBF(direction: "diagLeft" | "diagRight") {
    for (let i = 0; i < Board.NUM_SLOTS; i++) {
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
  ) {
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
      (this.fields[i] === 1 &&
        this.fields[i + step] === 1 &&
        this.fields[i + step * 2] === 1 &&
        this.fields[i + step * 3] === 1) ||
      (this.fields[i] === 2 &&
        this.fields[i + step] === 2 &&
        this.fields[i + step * 2] === 2 &&
        this.fields[i + step * 3] === 2)
    );
  }
}
