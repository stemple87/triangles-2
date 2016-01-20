// so beautiful!
function triangle(sideA, sideB, sideC){
  if(sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <= (sideA + sideB)){
    if(sideA === sideB && sideB === sideC){
      return "equalateral";
    } else if (sideA === sideB || sideA === sideC || sideC === sideB){
      return "isosceles";
    } else {
      return "scalene"
    }
  } else {
    return "These sides do not a triangle make";
  }
}
