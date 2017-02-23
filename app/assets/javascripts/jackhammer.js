var count = 1
var colors =["purple", "black", "yellow", "orange", "pink"]
function jackhammer(box){
  if (count===1){
    box.style["background-color"] = colors[0];
    count++;
    console.log("keep looking");
  }else if (count===2){
    box.style["background-color"] = colors[1];
    count++;
    console.log("keep looking");
  }else if (count===3){
    box.style["background-color"] = colors[2];
    count++;
    console.log("keep looking");
  }else if (count===4){
    box.style["background-color"] = colors[3];
    count++;
    console.log("keep looking");
  }else if (count===5){
    box.style["background-color"] = colors[4];
    alert("You win!");
  }
       
}
