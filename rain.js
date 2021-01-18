// JavaScript source code
class Rain {

    constructor(width,maxY) {
        this.rainDrops = [];
        this.width = width;
        this.frame = 1;
        this.maxY = maxY;
        fill("blue");
    }

    display() {
        if (this.frame % 10 == 0) {
            for (var i = 0; i < this.width / 10;i++) {
                if (round(random(0, 1)) == 1) {
                    this.rainDrops[this.rainDrops.length] = Matter.Bodies.rectangle(random(-5, 5) + i * 10, 0, 3, 10);
                    World.add(world, this.rainDrops[this.rainDrops.length - 1]);
                }
            }
        }

        for (var i = 0; i < this.rainDrops.length; i++) {
            if (this.rainDrops[i].position.y > this.maxY) {
                this.rainDrops.splice(i, 1);
                continue;
            }

            rect(this.rainDrops[i].position.x, this.rainDrops[i].position.y, 3, 10);
        }

        this.frame++;
    }
}