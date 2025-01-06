
//Properties
/**
 * A property is a special class method that
 * behaves as field (or data)
 */

class Triangle{
    constructor(s1,s2,s3){
        this.s1=s1;
        this.s2=s2;
        this.s3=s3;
    }
    toString(){
        return `Triangle(${this.s1}, ${this.s2}, ${this.s3})`;
    }

    draw(){
        console.log(`Drawing ${this}`)
    }

    getPerimeter(){
        return this.s1 + this.s2 + this.s3;
    }
    
    get perimeter(){
        return this.s1 + this.s2 + this.s3;
    }

    set perimeter(value){
        console.error("Can't set perimeter")
    }

}

let t1 = new Triangle(3,4,5);
t1.draw();

console.log('t1.perimeter()',t1.getPerimeter()); // a method call

console.log('t1.perimeter',t1.perimeter); //calls get perimeter()


t1.perimeter=0; //will fail silently ignroing this assignment

console.log('t1.perimeter',t1.perimeter);
