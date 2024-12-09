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
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(zero)
    one = [
        0, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0
    ]
    numbers.push(one)

    two = [
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 1, 0, 0, 
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 1, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 1, 1, 1, 1, 0, 0 
]
    numbers.push(two)

    three = [
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(three)

    four = [
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0
    ]
    numbers.push(four)

    five= [
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(five)

    six = [
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(six)

    seven = [
        0, 0, 1, 1, 1, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0
    ]
    numbers.push(seven)

    eight = [
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(eight)

    nine = [
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 0, 0
    ]
    numbers.push(nine) 

    showTemplate(numbers[0]);
}

let count = 0;
let no = 0;
let oldNo = 0;
function draw() {

    if (mouseX > width / 2) {
        background(0);

    } else {
        background(255);

    }
    count++
    if (count >1000 ) {
        no++;
        count = 0
        if (no>9) {
        no = 0 
        }
    }


/*     // choose number grid to display
    if (no != oldNo) {
     showTemplate(numbers[no])
     oldNo = no;
    } */
    showTemplate(numbers[9])

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
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[7].x 
                spikey2.y = tileArray[7].y 
    
                spikey3.x = tileArray[65].x - width
                spikey3.y = tileArray[65].y + tileSize/2
    
                spikey4.x = tileArray[70].x - width
                spikey4.y = tileArray[70].y + tileSize/2
    
                spikey5.x = tileArray[137].x 
                spikey5.y = tileArray[137].y + tileSize
    
                spikey6.x = tileArray[142].x 
                spikey6.y = tileArray[142].y + tileSize
                break;

        case one:
            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = false;
            spikey4.show = false;
            spikey5.show = false;
            spikey6.show = true;

            spikey1.x = tileArray[4].x 
            spikey1.y = tileArray[4].y 

            spikey2.x = tileArray[7].x 
            spikey2.y = tileArray[7].y 

            spikey3.x = tileArray[63].x - width
            spikey3.y = tileArray[63].y + tileSize/2

            spikey4.x = tileArray[71].x + width
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[135].x - width
            spikey5.y = tileArray[135].y + tileSize/2

            spikey6.x = tileArray[142].x 
            spikey6.y = tileArray[142].y + tileSize
            break;

        case two:
            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = true;
            spikey4.show = true;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[2].x 
            spikey1.y = tileArray[2].y 

            spikey2.x = tileArray[7].x 
            spikey2.y = tileArray[7].y 

            spikey3.x = tileArray[74].x
            spikey3.y = tileArray[74].y - tileSize

            spikey4.x = tileArray[79].x 
            spikey4.y = tileArray[79].y + tileSize

            spikey5.x = tileArray[137].x 
            spikey5.y = tileArray[137].y + tileSize

            spikey6.x = tileArray[142].x 
            spikey6.y = tileArray[142].y + tileSize
            break;

        case three:
            spikey1.show = true;
            spikey2.show = true;
            spikey3.show = true;
            spikey4.show = false;
            spikey5.show = true;
            spikey6.show = true;

            spikey1.x = tileArray[2].x 
            spikey1.y = tileArray[2].y 

            spikey2.x = tileArray[7].x 
            spikey2.y = tileArray[7].y 

            spikey3.x = tileArray[65].x
            spikey3.y = tileArray[65].y + tileSize

            spikey4.x = tileArray[71].x + tileSize/2
            spikey4.y = tileArray[71].y + tileSize/2

            spikey5.x = tileArray[137].x 
            spikey5.y = tileArray[137].y + tileSize

            spikey6.x = tileArray[142].x 
            spikey6.y = tileArray[142].y + tileSize
            break;

            case four:
                spikey1.show = true;
                spikey2.show = true;
                spikey3.show = true;
                spikey4.show = false;
                spikey5.show = true;
                spikey6.show = true;
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[7].x 
                spikey2.y = tileArray[7].y 
    
                spikey3.x = tileArray[74].x
                spikey3.y = tileArray[74].y + tileSize
    
                spikey4.x = tileArray[71].x + tileSize/2
                spikey4.y = tileArray[71].y + tileSize/2
    
                spikey5.x = tileArray[137].x 
                spikey5.y = tileArray[137].y + tileSize
    
                spikey6.x = tileArray[142].x 
                spikey6.y = tileArray[142].y + tileSize
                break;

            case five:
                spikey1.show = true;
                spikey2.show = true;
                spikey3.show = true;
                spikey4.show = true;
                spikey5.show = true;
                spikey6.show = true;
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[7].x 
                spikey2.y = tileArray[7].y 
    
                spikey3.x = tileArray[74].x
                spikey3.y = tileArray[74].y + tileSize
    
                spikey4.x = tileArray[70].x 
                spikey4.y = tileArray[70].y 
    
                spikey5.x = tileArray[137].x 
                spikey5.y = tileArray[137].y + tileSize
    
                spikey6.x = tileArray[142].x 
                spikey6.y = tileArray[142].y + tileSize
                break;

            case six:
               spikey1.show = true;
                spikey2.show = true;
                spikey3.show = false;
                spikey4.show = true;
                spikey5.show = true;
                spikey6.show = true;
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[7].x 
                spikey2.y = tileArray[7].y 
    
                spikey3.x = tileArray[63].x - width
                spikey3.y = tileArray[63].y + tileSize/2
    
                spikey4.x = tileArray[70].x 
                spikey4.y = tileArray[70].y 
    
                spikey5.x = tileArray[137].x 
                spikey5.y = tileArray[137].y + tileSize
    
                spikey6.x = tileArray[142].x 
                spikey6.y = tileArray[142].y + tileSize
                break;

            case seven:
                spikey1.show = true;
                spikey2.show = true;
                spikey3.show = true;
                spikey4.show = true;
                spikey5.show = false;
                spikey6.show = true;
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[6].x 
                spikey2.y = tileArray[6].y 
    
                spikey3.x = tileArray[75].x 
                spikey3.y = tileArray[75].y 
    
                spikey4.x = tileArray[79].x 
                spikey4.y = tileArray[79].y 
    
                spikey5.x = tileArray[135].x - width
                spikey5.y = tileArray[135].y + tileSize/2
    
                spikey6.x = tileArray[141].x 
                spikey6.y = tileArray[141].y + tileSize
                break;

            case eight:
                spikey1.show = true;
                spikey2.show = true;
                spikey3.show = true;
                spikey4.show = true;
                spikey5.show = true;
                spikey6.show = true;
    
                spikey1.x = tileArray[2].x 
                spikey1.y = tileArray[2].y 
    
                spikey2.x = tileArray[7].x 
                spikey2.y = tileArray[7].y 
    
                spikey3.x = tileArray[65].x 
                spikey3.y = tileArray[65].y + tileSize
    
                spikey4.x = tileArray[70].x 
                spikey4.y = tileArray[70].y + tileSize
    
                spikey5.x = tileArray[137].x 
                spikey5.y = tileArray[137].y + tileSize
    
                spikey6.x = tileArray[142].x 
                spikey6.y = tileArray[142].y + tileSize
                break;

                case nine:
                    spikey1.show = true;
                    spikey2.show = true;
                    spikey3.show = true;
                    spikey4.show = false;
                    spikey5.show = true;
                    spikey6.show = true;
        
                    spikey1.x = tileArray[2].x 
                    spikey1.y = tileArray[2].y 
        
                    spikey2.x = tileArray[7].x 
                    spikey2.y = tileArray[7].y 
        
                    spikey3.x = tileArray[74].x 
                    spikey3.y = tileArray[74].y + tileSize
        
                    spikey4.x = tileArray[71].x + width
                    spikey4.y = tileArray[71].y + tileSize
        
                    spikey5.x = tileArray[137].x 
                    spikey5.y = tileArray[137].y + tileSize
        
                    spikey6.x = tileArray[142].x 
                    spikey6.y = tileArray[142].y + tileSize
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
        fill(0)
        textAlign(CENTER)
       //text(this.id, this.x + 50, this.y + 50)
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

  
    updatePosition() {
    
     let distX = (this.x-this.oldX)
            if (abs(distX)>=0.1) {
            distX *= 0.01;
            this.oldX += distX; 
        } else {
            this.oldX = this.x;
        }
            let distY = (this.y-this.oldY)
            if (abs(distY)>=0.1) {
            distY *= 0.01;
            this.oldY += distY;
        } else {
            this.oldY = this.y;
        }

  //  this.oldX = this.x;
 //   this.oldY = this.y;
    }

    display() {
        this.updatePosition() 
        if(this.show) {
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