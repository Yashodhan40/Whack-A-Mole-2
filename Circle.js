class Circle{
    constructor(x,y){
            this.r=20;
            this.x=x;
            this.y=y;

    }
    display(){
            fill("white");
            strokeWeight(2);
            stroke("black");
             
            ellipseMode(CENTER);
            ellipse(this.x,this.y,this.r*2);
    }
}