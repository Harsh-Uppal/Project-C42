// JavaScript source code
class Man{

    constructor(x,y,w,h){
        this.body = Matter.Bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
        this.imageName = "walking_";
        this.frame = 0;
        this.imgNo = 1;
        this.vals = {x:x,y:y,w:w,h:h};
        this.image = [];

        for (var i = 1; i < 9; i++)
        {
            this.image[i] = loadImage(this.imageName + i + ".png");
        }
    }

    display(){
        this.frame++;

        if(this.frame % 10 == 0)
        {
            if(this.imgNo == 8)
                this.imgNo = 0;

            this.imgNo++;
        }

        image(this.image[this.imgNo],this.vals.x - 100,this.vals.y,this.vals.w * 2,this.vals.h);
    }
}