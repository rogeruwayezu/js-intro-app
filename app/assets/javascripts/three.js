var boxClick_1 = 0
var boxClick_2 = 0
var boxClick_3 = 0
function ClickAllTheBoxes(boxClick){
  if (boxClick_1 > 0 && boxClick_2 > 0 && boxClick_3 > 0){
    alert("you have won");
  }else if (boxClick === boxClick_1){
    console.log("keep trying");
    boxClick_1++;
  }else if (boxClick === boxClick_2){
    console.log("keep trying");
    boxClick_2++;
  }else if (boxClick === boxClick_3){
    console.log("keep trying");
    boxClick_3++;
  }

  }

