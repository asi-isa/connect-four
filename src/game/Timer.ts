export default class Timer {
  private static SECOND = 1000;
  private static COUNTDOWN = 33;

  countdown: number;
  onEnd: () => void;
  intervalID: number;

  static new(onEnd: () => void) {
    return new Timer().setOnEnd(onEnd);
  }

  private constructor() {
    this.countdown = Timer.COUNTDOWN;
  }

  private setOnEnd(onEnd: () => void) {
    this.onEnd = onEnd;
    return this;
  }

  restart() {
    this.stop();
    this.countdown = Timer.COUNTDOWN;
    this.start();
  }

  start() {
    this.intervalID = setInterval(() => {
      if (this.countdown === 0) {
        clearInterval(this.intervalID);
        this.onEnd();
      } else {
        this.countdown -= 1;
      }
    }, Timer.SECOND);
  }

  stop() {
    clearInterval(this.intervalID);
  }
}
