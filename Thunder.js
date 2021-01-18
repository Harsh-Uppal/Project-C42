// JavaScript source code
class Thunder{
    constructor(x,y,imgNo) {
        this.image = loadImage("images/thunderbolt/" + imgNo + ".png");
        this.vals = { x: x, y: y };
    }

    display() {
        image(this.image,this.vals.x,this.vals.y,200,200);
    }
}