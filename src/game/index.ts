import Player from "./Player";
import Board from "./Board";
import Timer from "./Timer";

export default class ConnectFour {
  private static NUM_COLS = 7;
  private static COLUMN_TO_SLOTS_IN_COLUMN = ConnectFour.calculateLookupTable();

  player1: Player;
  player2: Player;
  currentPlayer: Player;
  onGameOver: () => void;
  board: Board;
  timer: Timer;

  static new(onGameOver: () => void) {
    return new ConnectFour().setOnGameOver(onGameOver);
  }

  private constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.currentPlayer = this.player1;
    this.board = new Board();
  }

  start() {
    const onTimerEnd = () => {
      this.playRandom();
    };

    this.timer = Timer.new(onTimerEnd);

    this.timer.start();
  }

  play(slotNum: number) {
    this.timer.stop();

    const col = slotNum % ConnectFour.NUM_COLS;

    const columnSlots = ConnectFour.COLUMN_TO_SLOTS_IN_COLUMN.get(col)!;

    for (const slot of columnSlots) {
      if (this.board.slotIsEmpty(slot)) {
        this.board.set(slot, this.currentPlayer.id);

        const gameOver = this.board.checkFourConnected();

        if (gameOver) {
          this.currentPlayer.addPoint();

          this.onGameOver();
        } else {
          this.switchPlayer();
          this.timer.restart();
        }

        break;
      }
    }
  }

  continue() {
    this.board.clear();

    // alternate who starts
    const overallPoints = this.player1.points + this.player2.points;

    this.currentPlayer = overallPoints % 2 === 0 ? this.player1 : this.player2;

    this.timer.restart();
  }

  private playRandom() {
    const freeSlots = this.board.getFreeSlots();

    // select slot randomly
    const slot = freeSlots[Math.floor(Math.random() * freeSlots.length)];

    this.play(slot);
  }

  private switchPlayer() {
    this.currentPlayer =
      this.currentPlayer.id === 1 ? this.player2 : this.player1;
  }

  private setOnGameOver(onGameOver: () => void) {
    this.onGameOver = onGameOver;
    return this;
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
