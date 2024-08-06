let x = 0;

document.getElementById("button").onclick = function(){
    document.getElementById("bebe").innerHTML = x += 1;
}
document.getElementById("resetButton").onclick = function(){
    document.getElementById("bebe").innerHTML = x = 0;
}
document.getElementById("decreaseButton").onclick = function(){
    document.getElementById("bebe").innerHTML = x -=1;
}