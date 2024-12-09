/* Reminder to set spikey 1,3,5 to left and spikey 2,4,6 to right */
let cols = 9;
let rows = 16;
let tileArray = [];
let spikey1;
let spikey2;
let spikey3;
let spikey4;
let spikey5;
let spikey6;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let zero;
let numbers = [];
let mousePos
let tileSize = 100

function preload() {
    font = loadFont('Montserrat-Black.otf');
    font = loadFont('Montserrat-Black.ttf'); // fallback font
}

function setup() {
    createCanvas(cols * 100, rows * 100);
    rectMode(CORNER)
    // Spikeys
    spikey1 = new Spikey(width / 2, height / 2, 300);
    spikey2 = new Spikey(width / 2, height / 2, 300);
    spikey3 = new Spikey(width / 2, height / 2, 300);
    spikey4 = new Spikey(width / 2, height / 2, 300);
    spikey5 = new Spikey(width / 2, height / 2, 300);
    spikey6 = new Spikey(width / 2, height / 2, 300);

    // create grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let showTile = true;

            let tile = new Tile(col * tileSize, row * tileSize, 100, showTile, row * cols + col);
            tileArray.push(tile);
        }
    }
    // converted numbers to 0 and 1
    zero = [
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0
    ]
    numbers.push(zero)
    one = [
        0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    numbers.push(one)

    two = [
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 0
    ]
    numbers.push(two)

    three = [
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0
    ]
    numbers.push(three)

    four = [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    numbers.push(four)

    six = [
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 0
    ]
    numbers.push(six)

    seven = [
        0, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    numbers.push(seven)

    showTemplate(numbers[0]);
}

let switchCount = 0;
let currentGridNumber = 0;
let oldGridNumber = 0;
function draw() {

    if (mouseX > width / 2) {
        background(0);

    } else {
        background(255);

    }
    switchCount++
    if (switchCount > 240) {
        currentGridNumber++;
        switchCount = 0
        if (currentGridNumber > 9) {
            currentGridNumber = 0
        }
    }


    // choose number grid to display
    if (currentGridNumber != oldGridNumber) {
        showTemplate(numbers[currentGridNumber])
        oldGridNumber = currentGridNumber;
    }


    spikey1.display();
    spikey2.display();
    spikey3.display();
    spikey4.display();
    spikey5.display();
    spikey6.display();


    // draw grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let index = row * cols + col;
            console.log(tileArray[index])
            tileArray[index].display();
        }
    }

}

function showTemplate(template) {

    for (let i = 0; i < tileArray.length; i++) {
        // get true or false value from the digit template and apply to Tiles
        tileArray[i].show = template[i]
    }

    // adjust the spikeys' position
    switch (template) {
        case zero:

            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = false;
            spikey4.show = false;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[0].x + tileSize/2
            spikey1.y = tileArray[0].y + tileSize/2

            spikey2.x = tileArray[8].x + tileSize/2
            spikey2.y = tileArray[8].y + tileSize/2
            
            spikey3.x = tileArray[63].x -width
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[72].x + width
            spikey4.y = tileArray[72].y + tileSize/2

            spikey5.x = tileArray[135].x + tileSize/2
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[143].x + tileSize/2
            spikey6.y = tileArray[143].y + tileSize/2
            break;

        case one:

            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = false;
            spikey4.show = false;
            spikey5.show = false;
            spikey6.show = true;

            spikey1.x = tileArray[2].x + tileSize/2
            spikey1.y = tileArray[2].y + tileSize/2

            spikey2.x = tileArray[5].x + tileSize/2
            spikey2.y = tileArray[5].y + tileSize/2

            spikey3.x = tileArray[63].x - width
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[71].x + width
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[135].x - width
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[140].x + tileSize/2
            spikey6.y = tileArray[140].y + tileSize/2
            break;

        case two:

            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = true;
            spikey4.show = true;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[0].x + tileSize/2
            spikey1.y = tileArray[0].y + tileSize/2

            spikey2.x = tileArray[8].x + tileSize/2
            spikey2.y = tileArray[8].y + tileSize/2

            spikey3.x = tileArray[63].x + tileSize/2
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[71].x + tileSize/2
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[135].x + tileSize/2
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[143].x + tileSize/2
            spikey6.y = tileArray[143].y + tileSize/2
            break;

        case three:

            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = true;
            spikey4.show = true;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[0].x + tileSize/2
            spikey1.y = tileArray[0].y + tileSize/2

            spikey2.x = tileArray[8].x + tileSize/2
            spikey2.y = tileArray[8].y + tileSize/2

            spikey3.x = tileArray[63].x + tileSize/2
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[71].x + tileSize/2
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[135].x + tileSize/2
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[143].x + tileSize/2
            spikey6.y = tileArray[143].y + tileSize/2
            break;

        case four:
           
        spikey1.show = true;
        spikey2.show = true;
        spikey3.show = true;
        spikey4.show = true;
        spikey5.show = true;
        spikey6.show = true;

        spikey1.x = tileArray[0].x + tileSize/2
        spikey1.y = tileArray[0].y + tileSize/2

        spikey2.x = tileArray[8].x + tileSize/2
        spikey2.y = tileArray[8].y + tileSize/2

        spikey3.x = tileArray[63].x + tileSize/2
        spikey3.y = tileArray[63].y + tileSize/2

        spikey4.x = tileArray[71].x + tileSize/2
        spikey4.y = tileArray[71].y + tileSize/2

        spikey5.x = tileArray[135].x + tileSize/2
        spikey5.y = tileArray[135].y + tileSize/2

        spikey6.x = tileArray[143].x + tileSize/2
        spikey6.y = tileArray[143].y + tileSize/2
        break;

        case six:
            
            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = true;
            spikey4.show = true;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[0].x + tileSize/2
            spikey1.y = tileArray[0].y + tileSize/2

            spikey2.x = tileArray[8].x + tileSize/2
            spikey2.y = tileArray[8].y + tileSize/2

            spikey3.x = tileArray[63].x + tileSize/2
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[71].x + tileSize/2
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[135].x + tileSize/2
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[143].x + tileSize/2
            spikey6.y = tileArray[143].y + tileSize/2
            break;

        case seven:
            
        spikey1.show = true;
        spikey2.show = true;
        spikey3.show = true;
        spikey4.show = true;
        spikey5.show = true;
        spikey6.show = true;

        spikey1.x = tileArray[0].x + tileSize/2
        spikey1.y = tileArray[0].y + tileSize/2

        spikey2.x = tileArray[8].x + tileSize/2
        spikey2.y = tileArray[8].y + tileSize/2

        spikey3.x = tileArray[63].x + tileSize/2
        spikey3.y = tileArray[63].y + tileSize/2

        spikey4.x = tileArray[71].x + tileSize/2
        spikey4.y = tileArray[71].y + tileSize/2

        spikey5.x = tileArray[135].x + tileSize/2
        spikey5.y = tileArray[135].y + tileSize/2

        spikey6.x = tileArray[143].x + tileSize/2
        spikey6.y = tileArray[143].y + tileSize/2
        break;


        default:
        //  spikey1.x = width / 2
        //   spikey1.y = height / 2

    }

}

// grid tiles
class Tile {
    constructor(x, y, size, show, id) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.show = show;
        this.id = id + 1
    }

    display() {
        noStroke()
        if (this.show) {
            noFill();

        } else {
            // Debug aid
            if (mouseX > width / 2) {
                fill(0)
            } else {
                fill(255)
            }
            //fill(200, 20, 20);
            //stroke(0); 
        }
        rect(this.x, this.y, this.size, this.size);
        fill(255)
        textAlign(CENTER)
        // text(this.id, this.x + 50, this.y + 50)
    }
}

class Spikey {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;


        this.size = size;
        this.lines = [];
        this.show = true;


        // generate the lines once
        // TODO: stop lines after touching filled squares
        for (let angle = 0; angle <= 360; angle += 1) {
            let length = random(120, this.size);
            this.lines.push({ angle, length });

        }
    }

// transition Spikey to next number
    updatePosition() {
        let distX = (this.x - this.oldX)
        if (abs(distX) >= 0.1) {
            distX *= 0.05;
            this.oldX += distX;
        } else {
            this.oldX = this.x;
        }
        let distY = (this.y - this.oldY)
        if (abs(distY) >= 0.1) {
            distY *= 0.05;
            this.oldY += distY;
        } else {
            this.oldY = this.y;
        }

        //  this.oldX = this.x;
        //   this.oldY = this.y;
    }

    display() {
        this.updatePosition()
        if (this.show) {
            //mousePos = map(mouseX, 0, width, 0.005, 0.06)
            if (mouseX > width / 2) {
                fill(255);
                stroke(255);
            } else {
                fill(0);
                stroke(0);
            }



            // apply lines to Spikey
            for (let l of this.lines) {
                let oscillatingStroke = this.sinMovement(l.angle, frameCount * -0.02, 0, 1);
                strokeWeight(oscillatingStroke);
                push();
                translate(this.oldX, this.oldY);
                rotate(radians(l.angle));
                let oscillatingLength = 0


                if (l.length > this.size * 0.7) {
                    oscillatingLength = this.sinMovement(l.angle, frameCount * 0.02, this.size * 0.3, this.size + (mouseX * 2));
                } else {
                    oscillatingLength = this.sinMovement(l.angle, frameCount * 0.02, this.size * 0.5, this.size * 1 + (mouseX * 2));
                }

                line(0, 0, oscillatingLength, 0);
                pop();
            }
        }
    }

    sinMovement(angle, offset, minVal, maxVal) {
        let factor = sin(angle + offset);
        let sinMovementVal = map(factor, -1, 1, minVal, maxVal);
        return sinMovementVal;
    }



}