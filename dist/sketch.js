let segmentsDate;
let number;

function setup() {
  createCanvas(windowWidth, windowHeight);

  segmentsDate = new showDate(20, 10);

  setInterval(() => {
    number = round(random(0, 9));
  }, 1000);
}

function draw() {
  background(51);

  segmentsDate.update();

  frameRate(1);
}

class showDate {
  constructor(xStart = 0, yStart = 0) {
    this.firstHour = new sevenSegments(xStart, yStart);
    this.secondHour = new sevenSegments(xStart + 70, yStart - 10);

    this.firstMinutes = new sevenSegments(xStart + 100, yStart - 10);
    this.secondMinutes = new sevenSegments(xStart + 70, yStart - 10);

    this.firstSeconds = new sevenSegments(xStart + 100, yStart - 10);
    this.secondSeconds = new sevenSegments(xStart + 70, yStart - 10);
  }

  update() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    this.firstHour.draw(
      hours.toString().length === 1 ? 0 : Number(hours.toString()[0])
    );
    this.secondHour.draw(hours % 10);

    this.drawDotted();

    this.firstMinutes.draw(
      minutes.toString().length === 1 ? 0 : Number(minutes.toString()[0])
    );
    this.secondMinutes.draw(minutes % 10);

    this.drawDotted();

    this.firstSeconds.draw(
      seconds.toString().length === 1 ? 0 : Number(seconds.toString()[0])
    );
    this.secondSeconds.draw(seconds % 10);
  }

  drawDotted() {
    const tops = [25, 80];

    tops.forEach(top => {
      push();
      fill(255, 0, 0);
      translate(77, top);
      beginShape();
      vertex(10, 0);
      vertex(20, 10);
      vertex(10, 20);
      vertex(0, 10);
      endShape(CLOSE);
      pop();
    });
  }
}
