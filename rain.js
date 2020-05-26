class rain
{
    constructor(rain)
    {
        this.rain=rain;
        this.x=random(0,1000);
        this.y=random(0,1000);
    }
    display()
    {
        this.y=this.y+10;
        textSize(40);
         stroke("red");
        text(this.rain,this.x,this.y);
    }
}