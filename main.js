var mouse_event = "empty";

var lastposofx,lastposofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthofline = 1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value;
    widthofline = document.getElementById("widthofline").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentposofx = e.clientX - canvas.offsetLeft;
    currentposofy = e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("Last position of x and y coordinates = ");
        console.log("x = "+lastposofx+"y = "+lastposofy);
        ctx.moveTo(lastposofx,lastposofy);

        console.log("Current position of x and y coordinates = ");
        console.log("x = "+currentposofx+"y = "+currentposofy);
        ctx.lineTo(currentposofx,currentposofy);
        ctx.stroke();
    }

        lastposofx = currentposofx;
        lastposofy = currentposofy;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouse_event = "mouseleave";
}
function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}