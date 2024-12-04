let gridX = 6;
let gridY = 7;
let tileArray = [];
let spikey;
let spikey2;
let spikey3;
let spikey4;
let spikey5;
let spikey6;
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
     // spikeys
    spikey = new Spikey(width / 2, height / 2, 400);
    spikey2 = new Spikey(width / 2, height / 2, 400);
    spikey3 = new Spikey(width / 2, height / 2, 400);
/*     spikey4 = new Spikey(width / 2, height / 2, 400);
    spikey5 = new Spikey(width / 2, height / 2, 400);
    spikey6 = new Spikey(width / 2, height / 2, 400); */

    // create grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let showTile = false;
            
            let tile = new Tile(i * tileSize, j * tileSize, 100, showTile,i * gridY + j);
            tileArray.push(tile);
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

function draw() {
    background(255);
    // number grid
    showTemplate(numbers[0])

    
    spikey.display();
    spikey2.display();
    spikey3.display();
    

    // draw grid
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            let index = i * gridY + j;
            
            tileArray[index].display();
        }
    } 
   
}

function mouseClicked() {
    tileArray.forEach(tile => {
            
        
    });

}

function showTemplate(template){
    for (let i = 0; i < tileArray.length; i++) {
        // get true or false value from the digit template and apply to Tiles
        tileArray[i].show = template[i]
    }
    // adjust the spikeys' position
    spikey.x=tileArray[14].x
    spikey.y=tileArray[14].y

    spikey2.x=tileArray[28].x
    spikey2.y=tileArray[28].y

    spikey3.x=tileArray[34].x
    spikey3.y=tileArray[34].y+tileSize


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
        noStroke()
        if (this.show) {
            // Debug aid
            /* noFill();
            stroke(200, 20, 20); */
            noFill()
        } else {
            // Debug aid
            fill(255)
            /* fill(200, 20, 20);
            stroke(0); */
        }
        rect(this.x, this.y, this.size, this.size);
        fill(0)
        textAlign(CENTER)
       // text(this.id,this.x+50,this.y+50)
    }
}

class Spikey {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.lines = [];
        

        // generate the lines once
        for (let angle = 0; angle <= 360; angle += 1) {
            let length = random(10, this.size);
            this.lines.push({ angle, length });
            
        } 
    }

    display() {
        mousePos = map(mouseX,0,width,0.005,0.06)
        fill(0);
        stroke(0);
        strokeWeight(0.6);

        // apply lines to Spikey
        for (let l of this.lines) {
            push();
            translate(this.x, this.y);
            rotate(radians(l.angle));
            let oscillatingLength =0
            if(l.length>this.size*0.7){
            oscillatingLength = this.sinMovement(l.angle, frameCount * mousePos, this.size*0.45, this.size);
            }else {
            oscillatingLength = this.sinMovement(l.angle, frameCount * mousePos, this.size*0.2, this.size*0.7);
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