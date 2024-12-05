/* Reminder to set spikey 1,3,5 to left and spikey 2,4,6 to right */

let gridX = 6;
let gridY = 7;
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
    createCanvas(600, 700);
    rectMode(CORNER)
    // Spikeys
    spikey1 = new Spikey(width / 2, height / 2, 300);
    spikey2 = new Spikey(width / 2, height / 2, 300);
    spikey3 = new Spikey(width / 2, height / 2, 300);
    spikey4 = new Spikey(width / 2, height / 2, 300);
    spikey5 = new Spikey(width / 2, height / 2, 300);
    spikey6 = new Spikey(width / 2, height / 2, 300);

    // create grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let showTile = true;

            let tile = new Tile(i * tileSize, j * tileSize, 100, showTile, i * gridY + j);
            tileArray.push(tile);
        }
    }
    // set up numbers
    zero = [true, true, true, true, true, true,
        true, true, false, false, false, false,
        false, true, true, false, false, false,
        false, false, true, true, false, false,
        false, false, false, true, true, false,
        false, false, false, false, true, true,
        true, true, true, true, true, true]
    numbers.push(zero)

    one = [false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, true, false, false, false,
        false, false, false, true, true, true,
        true, true, true, true, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false]
    numbers.push(one)

    two = [true, false, false, true, true, true,
        true, true, false, false, true, false,
        false, true, true, false, false, true,
        false, false, true, true, false, false,
        true, false, false, true, true, false,
        false, true, false, false, true, true,
        true, true, true, false, false, true]
    numbers.push(two)

    three = [true, false, false, true, false, false,
        true, true, false, false, true, false,
        false, true, true, false, false, true,
        false, false, true, true, false, false,
        true, false, false, true, true, false,
        false, true, false, false, true, true,
        true, true, true, true, true, true]
    numbers.push(three)

    /* eight = [true, true, true, true, true, true,
        true, true, false, false, true, false,
        false, true, true, false, false, true,
        false, false, true, true, false, false,
        true, false, false, true, true, false,
        false, true, false, false, true, true,
        true, true, true, true, true, true]
    numbers.push(eight) */


}

function draw() {
    background(255);
    // choose number grid to display
    showTemplate(numbers[3])


    spikey1.display();
    spikey2.display();
    spikey3.display();
    spikey4.display();
    spikey5.display();
    spikey6.display();


    // draw grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let index = i * gridY + j;

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

            spikey1.x = tileArray[0].x
            spikey1.y = tileArray[0].y

            spikey2.x = tileArray[35].x + tileSize
            spikey2.y = tileArray[35].y

            spikey3.x = -width
            spikey3.y = tileArray[3].y

            spikey4.x = +width * 2
            spikey4.y = tileArray[38].y + tileSize

            spikey5.x = tileArray[6].x
            spikey5.y = tileArray[6].y + tileSize

            spikey6.x = tileArray[41].x + tileSize
            spikey6.y = tileArray[41].y + tileSize
            break;

        case one:

            spikey1.x = tileArray[14].x
            spikey1.y = tileArray[14].y

            spikey2.x = tileArray[21].x + tileSize
            spikey2.y = tileArray[21].y

            spikey3.x = tileArray[34].x
            spikey3.y = tileArray[34].y + tileSize

            spikey4.x = -width
            spikey4.y = tileArray[3].y

            spikey5.x = -width
            spikey5.y = tileArray[3].y

            spikey6.x = -width
            spikey6.y = tileArray[3].y
            break;

        case two:
            spikey1.x = tileArray[0].x
            spikey1.y = tileArray[0].y

            spikey2.x = tileArray[35].x + tileSize
            spikey2.y = tileArray[35].y

            spikey3.x = tileArray[3].x
            spikey3.y = tileArray[3].y

            spikey4.x = tileArray[38].x + tileSize
            spikey4.y = tileArray[38].y + tileSize

            spikey5.x = tileArray[6].x
            spikey5.y = tileArray[6].y + tileSize

            spikey6.x = tileArray[41].x + tileSize
            spikey6.y = tileArray[41].y + tileSize
            break;

        case three:
            spikey1.x = tileArray[0].x
            spikey1.y = tileArray[0].y

            spikey2.x = tileArray[35].x + tileSize
            spikey2.y = tileArray[35].y

            spikey3.x = tileArray[3].x
            spikey3.y = tileArray[3].y + tileSize / 2

            spikey4.x = tileArray[38].x + +width * 2
            spikey4.y = tileArray[38].y + tileSize / 2

            spikey5.x = tileArray[6].x
            spikey5.y = tileArray[6].y + tileSize

            spikey6.x = tileArray[41].x + tileSize
            spikey6.y = tileArray[41].y + tileSize
            break;

        default:
            spikey1.x = width / 2
            spikey1.y = height / 2

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
            // Debug aid
             noFill();
            //stroke(0); 
            
        } else {
            // Debug aid
            fill(255)
            //fill(200, 20, 20);
            //stroke(0); 
        }
        rect(this.x, this.y, this.size, this.size);
        fill(0)
        textAlign(CENTER)
        //text(this.id, this.x + 50, this.y + 50)
    }
}

class Spikey {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.lines = [];


        // generate the lines once
        // TODO: stop lines after touching filled squares
        for (let angle = 0; angle <= 360; angle += 1) {
            let length = random(10, this.size);
            this.lines.push({ angle, length });

        }
    }

    display() {
        //mousePos = map(mouseX, 0, width, 0.005, 0.06)
        fill(0);
        stroke(0);
        

        // apply lines to Spikey
        for (let l of this.lines) {
            let oscillatingStroke = this.sinMovement(l.angle, frameCount * -0.02, 0, 1);
            strokeWeight(oscillatingStroke);
            push();
            translate(this.x, this.y);
            rotate(radians(l.angle));
            let oscillatingLength = 0
            if (l.length > this.size * 0.7) {
                oscillatingLength = this.sinMovement(l.angle, frameCount * 0.02, this.size * 0.3, this.size + (mouseX * 2));
            } else {
                oscillatingLength = this.sinMovement(l.angle, frameCount * 0.02, this.size * 0.15, this.size * 0.8 + (mouseX * 2));
            }

            line(0, 0, oscillatingLength, 0);
            pop();
        }
    }

    sinMovement(angle, offset, minVal, maxVal) {
        let factor = sin(angle + offset);
        let sinMovementVal = map(factor, -1, 1, minVal, maxVal);
        return sinMovementVal;
    }



}