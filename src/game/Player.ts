export default class Player {
  id: number;
  points: number;

  constructor(id: number) {
    this.id = id;
    this.points = 0;
  }

  addPoint() {
    this.points += 1;
  }
}
