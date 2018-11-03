let segmentsDate;

function setup() {
  createCanvas(windowWidth, windowHeight);

  segmentsDate = new showDate(20, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  segmentsDate.update();

  frameRate(1);
}

class showDate {
  constructor(xStart = 0, yStart = 0) {
    const segmentLength = 40;
    const segmentWidth = 14;

    this.firstHour = new sevenSegments(
      xStart,
      yStart,
      segmentLength,
      segmentWidth
    );
    this.secondHour = new sevenSegments(
      xStart + segmentLength * 2,
      yStart,
      segmentLength,
      segmentWidth
    );

    this.firstMinutes = new sevenSegments(
      xStart + segmentLength * 5,
      yStart,
      segmentLength,
      segmentWidth
    );
    this.secondMinutes = new sevenSegments(
      xStart + segmentLength * 7,
      yStart,
      segmentLength,
      segmentWidth
    );

    this.firstSeconds = new sevenSegments(
      xStart + segmentLength * 10,
      yStart,
      segmentLength,
      segmentWidth
    );
    this.secondSeconds = new sevenSegments(
      xStart + segmentLength * 12,
      yStart,
      segmentLength,
      segmentWidth
    );
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
