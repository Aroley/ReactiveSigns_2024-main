let gridX = 6
let gridY = 7
let tileArray = []

function preload() {
    font = loadFont('Montserrat-Black.otf')
    font = loadFont('Montserrat-Black.ttf') // fallback font
}

function setup() {
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

    // draw grid
    for (let i = 0; i < tileArray.length; i++) {
        tileArray[i].display()
        console.log(tileArray[i])
    }
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