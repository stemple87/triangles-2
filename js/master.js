// Triangle function


function triangle(side1, side2, side3){
  //it does not equal a triangle
    if(side1 + side2 <= side3){
      return true;
  //it has two equal sides
} else if((side1 === side2) && (side2 !== side3)){
      return true;
  //it has not equal sides
} else if((side1 !== side2) && (side2 !== side3)){
      return true;
  //it has all equal sides
} else if((side1 === side2) && (side2 === side3)){
    return true;
  }
}
