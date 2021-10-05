c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

c1.addEventListener("mousedown",myMousedown);
function myMousedown(e){
 color=document.getElementById("color").value
 xposition=e.clientX-c1.offsetLeft;
 yposition=e.clientY-c1.offsetTop;
 circle(xposition,yposition)
}
function  circle(xposition,yposition){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(xposition,yposition,40,0,2*Math.PI);
    ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,c1.width,c1.height)
}