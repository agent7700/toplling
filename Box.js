class Box
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    { Push();
    translate(pos.x,pos.y);  
    rectMode(CENTER); 
    rotate(pos.angle);    
    pop();    
        var pos=this.body.position;
        rect(0,0,this.width,this.height);    
    }
}

