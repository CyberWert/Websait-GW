<SCRIPT>
<!--
// Ripple Text by Kurt Grigg - http://www.btinternet.com/~kurt.grigg/javascript

if  ((document.getElementById) &&
window.addEventListener || window.attachEvent){

(function(){

var msg = '   С Новым годом и Рождеством!!!';
var font = 'Arial';
var size = 11;
var colour = '#F96206';
var delay = 0.75; // Must be less than 1
var speed = 2; // setTimeout - run speed
var yOffSet = 0;
var xOffSet = 0;
var style = 'normal bold';

//---End user config.

var d = document;
msg = msg.split("");
var n = msg.length;
var y = 0;
var x = 0;
var yp = [];
var xp = [];
var yd = [];
var xd = [];
var temp = [];
var idx = document.getElementsByTagName('div').length;
var scy = 0;
var scx = 0;
var dom = (typeof window.pageYOffset == "number");

//Explorer only - double div anti scrollbar hack!
d.write('<div style="position:absolute;top:0px;left:0px;">'
+'<div style="position:relative">');

for (i = 0; i < n; i++){
d.write("<div id='letters"+(idx+i)+"' style='position : absolute;"
+"top : 0px;left : 0px;"
+"height : auto;width : "+size+"px;"
+"text-align : center;"
+"font : " +style+ " " +size+"px "+font+";color : "+colour+"'>"+msg[i]+"<\/div>");
}

document.write('<\/div><\/div>');

function scroll(){
if (dom){
 scy = window.pageYOffset;
 scx = window.pageXOffset;
 }
else{
 scy = d.documentElement.scrollTop||d.body.scrollTop;
 scx = d.documentElement.scrollLeft||d.body.scrollLeft;
 }
}

function mouse(e){
e = e||window.event;
y = yOffSet + ((e.pageY-scy)||e.clientY);
x = xOffSet + ((e.pageX-scx)||e.clientX);
}

function assign(){
 for (i = 0; i < n; i++){
 temp[i].top = Math.floor(yp[i]) + 'px';
 temp[i].left = Math.floor(xp[i]) + (i*(size * 0.7)) + 'px';
 }
}

function ripple(){
yp[0] = yd[0]+=((y+scy)-yd[0]) * delay;
xp[0] = xd[0]+=((x+scx)-xd[0]) * delay;
for (var i = 1; i < n; i++){
 yp[i] = yd[i]+=(yp[i-1] - yd[i]) * delay;
 xp[i] = xd[i]+=(xp[i-1] - xd[i]) * delay;
}
scroll();
assign();
setTimeout(ripple,speed);
}

function init(){
for (i = 0; i < n; i++){
yp[i] = 0;
xp[i] = 0;
yd[i] = 0;
xd[i] = 0;
temp[i] = d.getElementById("letters"+(idx+i)).style;
}
ripple();
}

if (window.addEventListener){
 window.addEventListener("load",init,false);
 document.addEventListener("mousemove",mouse,false);
}
else if (window.attachEvent){
 window.attachEvent("onload",init);
 document.attachEvent("onmousemove",mouse);
}
})();
}
//-->
</SCRIPT>