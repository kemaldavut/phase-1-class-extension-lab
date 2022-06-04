// Your code here
class Polygon {
    constructor( PolygonArray ) {
        this.sides = PolygonArray
    }
  
    get countSides () {
      return this.sides.length
    }
  
    get perimeter() {
      if ( !Array.isArray( this.sides ) ) 
      return;
      let sum = 0;
      for ( let int of this.sides ) {
        sum += int
      }
      return sum
    }
  }
  
  class Triangle extends Polygon {
      
    get isValid() {
        let sides = this.sides  // [3, 4, 5]
        if ( sides.count !== 3 ) {
            return ( this.sides [ 0 ] + this.sides [ 1 ] > this.sides [ 2 ] ) && ( this.sides [ 1 ] + this.sides [ 2 ] > this.sides [ 0 ] ) && ( this.sides [ 0 ] + this.sides [ 2 ] > this.sides [ 1 ] )
        
        }
    }
}

class Square  extends Polygon {
    get isValid() {
        let sides = this.sides
        if ( sides.count !== 4 ) {
            return ( this.sides [ 0 ] === this.sides [ 1 ] ) && ( this.sides [ 1 ] === this.sides [ 2 ] ) && ( this.sides [ 2 ] === this.sides [ 3 ] )
        }
    }
    get area() {
        return this.sides [ 0 ] * this.sides [ 0 ]
    }
}

