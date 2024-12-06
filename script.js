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
    // set up numbers
    zero = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, true, true, true, true, true,
        false, false, false, false, true, true,
        true, true, true, false, false, false,
        false, true, true, false, true, true,
        false, false, false, false, true, true,
        false, true, true, false, false, false,
        false, true, true, false, true, true,
        false, false, false, false, true, true,
        false, true, true, false, false, false,
        false, true, true, false, true, true,
        false, false, false, false, true, true,
        false, true, true, false, false, false,
        false, true, true, false, true, true, false,
        false, false, false, true, true, false, true,
        true, false, false, false, false, true, true,
        true, true, true, false, false, false, false,
        true, true, true, true, true, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
    numbers.push(zero)
    one = [
        false,false,false,false,false,false,false,
        false,false,false,false,false,true,true,true,
        true,false,false,false,false,false,true,true,
        true,true,false,false,false,false,false,false,
        false,true,true,false,false,false,false,false,
        false,false,true,true,false,false,false,false,
        false,false,false,true,true,false,false,false,
        false,false,false,false,true,true,false,false,
        false,false,false,false,false,true,true,false,
        false,false,false,false,false,false,true,true,
        false,false,false,false,false,false,false,true,
        true,false,false,false,false,false,false,false,
        true,true,false,false,false,false,false,false,
        false,true,true,false,false,false,false,false,
        false,false,true,true,false,false,false,false,
        false,false,false,true,true,false,false,false,
        false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false]
    numbers.push(one)

    two = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    numbers.push(two)

    three = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]
    numbers.push(three)

    four = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]
    numbers.push(four)

    five = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]
    numbers.push(five)

    six = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]
    numbers.push(six)

    seven = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    numbers.push(seven)

    eight = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    numbers.push(eight) 

    nine = [
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]
    numbers.push(nine)


}

function draw() {

    if (mouseX > width / 2) {
        background(0);

    } else {
        background(255);

    }

    // choose number grid to display
    showTemplate(numbers[0])


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

            spikey1.x = tileArray[20].x
            spikey1.y = tileArray[20].y

            spikey2.x = tileArray[24].x + tileSize
            spikey2.y = tileArray[24].y

            spikey3.x = -width * 2
            spikey3.y = tileArray[56].y + tileSize

            spikey4.x = +width * 2
            spikey4.y = tileArray[56].y + tileSize

            spikey5.x = tileArray[119].x
            spikey5.y = tileArray[119].y + tileSize

            spikey6.x = tileArray[123].x + tileSize
            spikey6.y = tileArray[123].y + tileSize
            break;

        case one:

            spikey1.x = tileArray[12].x
            spikey1.y = tileArray[12].y

            spikey2.x = tileArray[15].x + tileSize
            spikey2.y = tileArray[15].y

            spikey3.x = tileArray[124].x
            spikey3.y = tileArray[124].y + tileSize

            spikey4.x = -width
            spikey4.y = tileArray[3].y

            spikey5.x = -width
            spikey5.y = tileArray[3].y

            spikey6.x = -width
            spikey6.y = tileArray[3].y
            break;

        case two:
            spikey1.x = tileArray[20].x
            spikey1.y = tileArray[20].y

            spikey2.x = tileArray[24].x + tileSize
            spikey2.y = tileArray[24].y

            spikey3.x = tileArray[65].x
            spikey3.y = tileArray[65].y

            spikey4.x = tileArray[78].x + tileSize
            spikey4.y = tileArray[78].y + tileSize

            spikey5.x = tileArray[119].x
            spikey5.y = tileArray[119].y + tileSize

            spikey6.x = tileArray[123].x + tileSize
            spikey6.y = tileArray[123].y + tileSize
            break;

        case three:
            spikey1.x = tileArray[20].x
            spikey1.y = tileArray[20].y

            spikey2.x = tileArray[24].x + tileSize
            spikey2.y = tileArray[24].y

            spikey3.x = tileArray[74].x
            spikey3.y = tileArray[74].y 

            spikey4.x = width * 2
            spikey4.y = tileArray[74].y + tileSize

            spikey5.x = tileArray[119].x
            spikey5.y = tileArray[119].y + tileSize

            spikey6.x = tileArray[123].x + tileSize
            spikey6.y = tileArray[123].y + tileSize
            break;

            case four:
            spikey1.x = tileArray[20].x
            spikey1.y = tileArray[20].y

            spikey2.x = tileArray[24].x + tileSize
            spikey2.y = tileArray[24].y

            spikey3.x = tileArray[74].x
            spikey3.y = tileArray[74].y + tileSize

            spikey4.x = width * 2
            spikey4.y = tileArray[74].y + tileSize

            spikey5.x = tileArray[119].x
            spikey5.y = tileArray[119].y + tileSize

            spikey6.x = tileArray[123].x + tileSize
            spikey6.y = tileArray[123].y + tileSize
            break;

            case five:
                spikey1.x = tileArray[20].x
                spikey1.y = tileArray[20].y
    
                spikey2.x = tileArray[24].x + tileSize
                spikey2.y = tileArray[24].y
    
                spikey3.x = tileArray[74].x
                spikey3.y = tileArray[74].y + tileSize
    
                spikey4.x = tileArray[69].x + tileSize
                spikey4.y = tileArray[69].y 
    
                spikey5.x = tileArray[119].x
                spikey5.y = tileArray[119].y + tileSize
    
                spikey6.x = tileArray[123].x + tileSize
                spikey6.y = tileArray[123].y + tileSize
            break;

            case six:
                spikey1.x = tileArray[20].x
                spikey1.y = tileArray[20].y
    
                spikey2.x = tileArray[24].x + tileSize
                spikey2.y = tileArray[24].y
    
                spikey3.x = -width * 2
                spikey3.y = tileArray[74].y + tileSize
    
                spikey4.x = tileArray[69].x + tileSize
                spikey4.y = tileArray[69].y 
    
                spikey5.x = tileArray[119].x
                spikey5.y = tileArray[119].y + tileSize
    
                spikey6.x = tileArray[123].x + tileSize
                spikey6.y = tileArray[123].y + tileSize
            break;

            case seven:
                spikey1.x = tileArray[20].x
                spikey1.y = tileArray[20].y
    
                spikey2.x = tileArray[23].x + tileSize
                spikey2.y = tileArray[23].y
    
                spikey3.x = tileArray[66].x
                spikey3.y = tileArray[66].y + tileSize
    
                spikey4.x = tileArray[69].x + tileSize
                spikey4.y = tileArray[69].y + tileSize
    
                spikey5.x = -width * 2
                spikey5.y = tileArray[121].y + tileSize
    
                spikey6.x = tileArray[122].x + tileSize
                spikey6.y = tileArray[122].y + tileSize
            break;

            case eight:
                spikey1.x = tileArray[20].x
                spikey1.y = tileArray[20].y
    
                spikey2.x = tileArray[24].x + tileSize
                spikey2.y = tileArray[24].y
    
                spikey3.x = tileArray[74].x
                spikey3.y = tileArray[74].y 
    
                spikey4.x = tileArray[70].y 
                spikey4.y = tileArray[70].y + tileSize
    
                spikey5.x = tileArray[119].x
                spikey5.y = tileArray[119].y + tileSize
    
                spikey6.x = tileArray[123].x + tileSize
                spikey6.y = tileArray[123].y + tileSize
                break;

                case nine:
                spikey1.x = tileArray[20].x
                spikey1.y = tileArray[20].y
    
                spikey2.x = tileArray[24].x + tileSize
                spikey2.y = tileArray[24].y
    
                spikey3.x = tileArray[74].x
                spikey3.y = tileArray[74].y + tileSize
    
                spikey4.x = width * 2
                spikey4.y = tileArray[74].y + tileSize
    
                spikey5.x = tileArray[119].x
                spikey5.y = tileArray[119].y + tileSize
    
                spikey6.x = tileArray[123].x + tileSize
                spikey6.y = tileArray[123].y + tileSize
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
        fill(0)
        textAlign(CENTER)
       // text(this.id, this.x + 50, this.y + 50)
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