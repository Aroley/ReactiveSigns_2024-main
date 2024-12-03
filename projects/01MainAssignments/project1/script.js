let gridX = 6
let gridY = 7
let tileArray = []

function preload() {
    font = loadFont('Montserrat-Black.otf')
    font = loadFont('Montserrat-Black.ttf') // fallback font
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    // create grid array
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            /* let showTile = false
            if (i % 2) {
                showTile = !showTile
            } */
            let tile = new Tile(i * 100, j * 100, 100, false)
            tileArray.push(tile)
        }
    }
}

function draw() {

    let s1 = new Spikey(width / 2, height / 2, 2)
    s1.display()

    /* let s2 = new Spikey (400,200,5)
    s2.display()
         */

    // draw grid
    /*for (let i = 0; i < tileArray.length; i++) {
        tileArray[i].display()
        console.log(tileArray[i])
    }*/
}

// grid tiles
class Tile {
    constructor(x, y, size, show) {
        this.x = x
        this.y = y
        this.size = size
        this.show = show
    }

    display() {
        if (this.show) {
            noFill();
            stroke(255, 0, 0)
        } else {
            fill(255, 0, 0)
            noStroke();
        }
        rect(this.x, this.y, this.size, this.size)
    }
}
// Spikey
class Spikey {
    constructor(x, y, size, done) {
        this.x = x
        this.y = y
        this.size = size
        this.done = done
    }

    display() {
        // translate(width/2,height/2)
        fill(0)
        stroke(0)
        strokeWeight(0.1)
        ellipse(this.x, this.y, this.size)
        //rotate(frameCount*0.005);
        for (let angle = 0; angle <= 360; angle += 1) {
            // Save current coordinate system                      
            push()
            translate(this.x, this.y);
            rotate(radians(angle));
            /* let lastVar = randomGen(angle) */
            line(0, 0, random(10, 500), 0); // add last var
            pop()
        }
    }

  /*   randomGen(times) {
        let number = 0
        if (!done) {
            number = random(10, 500)
            if(times<360){
            done = true  
            }
            
        }
        return number
    } */
}