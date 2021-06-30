class GameObject {
    constructor(public x: number, public y: number){}
}

class Circle extends GameObject {
    constructor(x:number,y:number, public radius:number){ //required public although public is implicit
    super(x, y);
    
    this.radius = radius; 
    }
    
}

let circle = new Circle(10, 50, 8);
console.log(circle.x, circle.y, circle.radius);  // should print "10 50 8"