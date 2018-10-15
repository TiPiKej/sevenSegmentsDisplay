class sevenSegments {
  constructor(xStart = 0, yStart = 0) {
    this.xStart = xStart;
    this.yStart = yStart;
    /*
     *
     *         ----1
     *       6|    |2
     *        |    |
     *         ----7
     *       5|    |
     *        |    |3
     *         ----4
     *
     */
    this.segments = [
      {
        // 1
        loc: createVector(0, 0),
        rotate: 0,
        active: false
      },
      {
        // 2
        loc: createVector(61, 8),
        rotate: 90,
        active: false
      },
      {
        // 3
        loc: createVector(61, 64),
        rotate: 90,
        active: false
      },
      {
        // 4
        loc: createVector(0, 56 * 2),
        rotate: 0,
        active: false
      },
      {
        // 5
        loc: createVector(7, 64),
        rotate: 90,
        active: false
      },
      {
        // 6
        loc: createVector(7, 8),
        rotate: 90,
        active: false
      },
      {
        // 7
        loc: createVector(0, 56),
        rotate: 0,
        active: false
      }
    ];
  }
  draw(number = 8) {
    translate(this.xStart, this.yStart);
    let numberOfActivitySegments = [];
    switch (number) {
      case 0:
        numberOfActivitySegments = [1, 2, 3, 4, 5, 6];
        break;
      case 1:
        numberOfActivitySegments = [2, 3];
        break;
      case 2:
        numberOfActivitySegments = [1, 2, 4, 5, 7];
        break;
      case 3:
        numberOfActivitySegments = [1, 2, 3, 4, 7];
        break;
      case 4:
        numberOfActivitySegments = [3, 6, 7];
        break;
      case 5:
        numberOfActivitySegments = [1, 3, 4, 6, 7];
        break;
      case 6:
        numberOfActivitySegments = [1, 3, 4, 5, 6, 7];
        break;
      case 7:
        numberOfActivitySegments = [1, 2, 3];
        break;
      case 8:
        numberOfActivitySegments = [1, 2, 3, 4, 5, 6, 7];
        break;
      case 9:
        numberOfActivitySegments = [1, 2, 3, 4, 6, 7];
        break;
    }
    this.changeActivites(numberOfActivitySegments);
    this.segments.forEach(segment => {
      push();
      translate(segment.loc.x, segment.loc.y);
      rotate(radians(segment.rotate));
      this.oneSegment(segment.active);
      pop();
    });
  }
  changeActivites(numberOfActivitySegments = []) {
    this.segments.forEach(segment => (segment.active = false));
    numberOfActivitySegments.forEach(number => {
      this.segments[number - 1].active = true;
    });
  }
  oneSegment(active = false) {
    const segmentLength = 40;
    const segmentWidth = 7;
    if (active) {
      fill(255, 0, 0);
      noStroke();
    } else {
      fill(51);
      stroke(0);
    }
    beginShape();
    vertex(0, segmentWidth);
    vertex(segmentWidth, 0);
    vertex(segmentWidth + segmentLength, 0);
    vertex(segmentWidth * 2 + segmentLength, segmentWidth);
    vertex(segmentWidth + segmentLength, segmentWidth * 2);
    vertex(segmentWidth, segmentWidth * 2);
    endShape(CLOSE);
  }
}
