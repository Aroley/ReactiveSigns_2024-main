let gridX = 6;
let gridY = 7;
let tileArray = [];
let spikey;
let numbers = [];

function preload() {
    font = loadFont('Montserrat-Black.otf');
    font = loadFont('Montserrat-Black.ttf'); // fallback font
}

function setup() {
    createCanvas(600, 700);
    rectMode(CORNER) 
     // spikeys
    spikey = new Spikey(width / 2, height / 2, 10);

    // create grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let showTile = false;
            
            let tile = new Tile(i * 100, j * 100, 100, showTile,i * gridY + j);
            tileArray.push(tile);
            console.log("logged " + tile.x);
        }
    }
    // set up numbers
    let one = [false,false,false,false,false,false,
            false,false,false,false,false,false,
            false,false,true,false,false,false,
            false,false,false,true,true,true,
            true,true,true,true,false,false,false,
            false,false,false,false,false,false,
            false,false,false,false,false,false]
    numbers.push(one)

   
}

// Clear the canvas
function draw() {
    background(255);

    // form grid
    showTemplate(numbers[0])

   
    
    spikey.display();


    

    // draw grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let index = i * gridY + j;
            
            tileArray[index].display();
        }
    } 
   
}

function showTemplate(template){
    for (let i = 0; i < tileArray.length; i++) {
        // get true or false value from the digit template and apply to Tiles
        tileArray[i].show = template[i]
    }
    // adjust the spikeys
    spikey.x=tileArray[14].x
    spikey.y=tileArray[14].y
}

// grid tiles
class Tile {
    constructor(x, y, size, show, id) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.show = show;
        this.id = id+1
    }

    display() {
        if (this.show) {
            noFill();
            stroke(200, 20, 20);
        } else {
            fill(200, 20, 20);
            stroke(0);
        }
        rect(this.x, this.y, this.size, this.size);
        fill(0)
        textAlign(CENTER)
        text(this.id,this.x+50,this.y+50)
    }
}

// Spikey
class Spikey {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.lines = []; // Store the lines to be drawn

        // Generate the lines once
        for (let angle = 0; angle <= 360; angle += 2) {
            let length = random(10, 300);
            this.lines.push({ angle, length });
        }
    }

    display() {
        fill(0);
        stroke(0);
        strokeWeight(0.2);
        ellipse(this.x, this.y, this.size);
        for (let l of this.lines) {
            push();
            translate(this.x, this.y);
            rotate(radians(l.angle));
            line(0, 0, l.length, 0);
            pop();
        }
    }


    wiggle() {
        for (let line of this.lines) {
            line.length = this.sinMovement(line.angle, 0.1, 10, 500);
        }
    }

    sinMovement(angle, offset, minVal, maxVal) {
        let factor = sin(angle + offset)
        let sinMovementVal = map(factor, -1, 1, minVal, maxVal)
        return sinMovementVal;
    }

}