// so beautiful!

//business Logic
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

//user input

$(document).ready(function(){
  $("#triangleButton").click(function(){
    var sideA = $("#sideA").val();
    var sideB = $("#sideB").val();
    var sideC = $("#sideC").val();

    if(sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <= (sideA + sideB)){
      if(sideA === sideB && sideB === sideC){
        $("#triangleAnswer").text("equalateral")
      } else if (sideA === sideB || sideA === sideC || sideC === sideB){
        $("#triangleAnswer").text("isosceles")
      } else {
        $("#triangleAnswer").text("scalene")
      }
    } else {
      $("#triangleAnswer").text("These sides do not a triangle make")
    }
  });

  });
