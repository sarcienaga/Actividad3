//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
document.addEventListener("touchstart", touchHandler, true);document.addEventListener("touchmove", touchHandler, true);document.addEventListener("touchend", touchHandler, true);document.addEventListener("touchcancel", touchHandler, true);
$("#obj01").attr("r", step/2);
for (var z=1; z<100/step; z++) {if (z<10){var idz="0"+z.toString()} else {var idz=z.toString()}for (var i=1; i<100/step; i++) {if (i<10){var idi="0"+i.toString()} else {var idi=i.toString()}
var svg = document.getElementsByTagName("svg")[0];var newPoint=document.createElementNS("http://www.w3.org/2000/svg","circle");newPoint.id="p_"+idi+idz;newPoint.style.stroke="rgb(192,192,192)";newPoint.style.strokeWidth="0.2px";svg.appendChild(newPoint);
$("#p_"+idi+idz).attr("r",0.2);$("#p_"+idi+idz).attr("cx",i*step);$("#p_"+idi+idz).attr("cy",z*step);}}drawObj();
}
function adddatamove(num) {for (i=0; i<num; i++) {datamove.push({s: step,r: -1});}}
function adddatarot(d,ang) {if (d==0){ang=-1*ang} datamove.push({s:-1,r: ang});}
function go() { if (datamove.length > 0) {var i = 0; if (godraw) {var counter = 0; var k = setInterval(function() {counter++;
if (counter===5) {if (datamove[i].s > 0) {move(datamove[i].s);} if (datamove[i].s==-1) {rot(datamove[i].r);}drawObj();i++;counter=0;
if (i>datamove.length-1) {clearInterval(k); if (Math.abs(pointsX[0]-posX)<1 && Math.abs(pointsY[0]-posY)<1){var newPath="M ";for (var z = 0; z < pointsX.length; z++) {newPath=newPath+pointsX[z]+","+pointsY[z]+" ";} newPath=newPath+"Z";
var svg = document.getElementsByTagName("svg")[0];var newLine=document.createElementNS("http://www.w3.org/2000/svg","path");
newLine.id="pathEnd";newLine.style.stroke="rgb(220,90,21)";newLine.style.strokeWidth="2px";newLine.style.fill="#ffff00";newLine.style.fillRule="evenodd";newLine.style.fillOpacity="0.6";svg.appendChild(newLine);$("#pathEnd").attr("d",newPath);checkAnswer();}
else{goerror();}}}}, 100);}}}
function rot(ang) {angle=angle+ang; if (angle>360) {angle=angle-360}if (angle<0){angle=360+angle}}
function move(num) {pointsX.push(posX);pointsY.push(posY);posX=posX+step*(Math.cos(Math.PI*angle/180));posY=posY+step*(Math.sin(Math.PI*angle/180));indexpoint++;}
function isCorrect(){run_code();}
function checkAnswer(){var correct=true;
if (numSides()!=4) {correct=false}if (!isSquare()) {correct=false}if (correct){gook();}else{goerror();}
}
function numSides(){var ns=0;var i=0;var count=true;for (var i = 0; i < datamove.length; i++) {if (datamove[i].s==-1){count=true;}else{if (count){ns++;count=false;}}} return ns;}
function isSquare(){if (numSides()==4){var p1X=pos0X;var p1Y=pos0Y;var p2X=0;var p2Y=0;var p3X=0;var p3Y=0;var p4X=0;var p4Y=0;var des=1;var ind=0;
if (datamove[0].s==-1){while (datamove[ind].s==-1){ind++;des++;}} while (datamove[ind].s!=-1){ind++;} p2X=pointsX[ind-(des-1)];p2Y=pointsY[ind-(des-1)];ind++;while (datamove[ind].s==-1){ind++;des++;} while (datamove[ind].s!=-1){ind++;}
p3X=pointsX[ind-des];p3Y=pointsY[ind-des];ind++;while (datamove[ind].s==-1){ind++;des++;} while (datamove[ind].s!=-1){ind++;} p4X=pointsX[ind-(des+1)];p4Y=pointsY[ind-(des+1)];
var d1=0;var d2=0;var d3=0;var d4=0;d1=Math.sqrt((p1X-p2X)*(p1X-p2X)+(p1Y-p2Y)*(p1Y-p2Y));d2=Math.sqrt((p2X-p3X)*(p2X-p3X)+(p2Y-p3Y)*(p2Y-p3Y));d3=Math.sqrt((p3X-p4X)*(p3X-p4X)+(p3Y-p4Y)*(p3Y-p4Y));d4=Math.sqrt((p4X-p1X)*(p4X-p1X)+(p4Y-p1Y)*(p4Y-p1Y));d1=Number(d1.toFixed());d2=Number(d2.toFixed());d3=Number(d3.toFixed());d4=Number(d4.toFixed());
if (d1==d2 && d2==d3 && d3==d4){var ang1=0;var ang2=0;var ang3=0;var ang4=0;var vaX=(p1X-p2X);var vaY=(p1Y-p2Y);var vbX=(p1X-p4X);var vbY=(p1Y-p4Y);var cos1=Math.abs((vaX*vbX+vaY*vbY)/(Math.sqrt(vaX*vaX+vaY*vaY)*Math.sqrt(vbX*vbX+vbY*vbY)));ang1=(Math.acos(cos1)*180)/Math.PI;
var vaX=(p2X-p1X);var vaY=(p2Y-p1Y);var vbX=(p2X-p3X);var vbY=(p2Y-p3Y);var cos1=Math.abs((vaX*vbX+vaY*vbY)/(Math.sqrt(vaX*vaX+vaY*vaY)*Math.sqrt(vbX*vbX+vbY*vbY)));ang2=(Math.acos(cos1)*180)/Math.PI;var vaX=(p3X-p2X);var vaY=(p3Y-p2Y);var vbX=(p3X-p4X);var vbY=(p3Y-p4Y);var cos1=Math.abs((vaX*vbX+vaY*vbY)/(Math.sqrt(vaX*vaX+vaY*vaY)*Math.sqrt(vbX*vbX+vbY*vbY)));ang3=(Math.acos(cos1)*180)/Math.PI;
var vaX=(p4X-p1X);var vaY=(p4Y-p1Y);var vbX=(p4X-p3X);var vbY=(p4Y-p3Y);var cos1=Math.abs((vaX*vbX+vaY*vbY)/(Math.sqrt(vaX*vaX+vaY*vaY)*Math.sqrt(vbX*vbX+vbY*vbY)));ang4=(Math.acos(cos1)*180)/Math.PI;ang1=Number(ang1.toFixed());ang2=Number(ang2.toFixed());ang3=Number(ang3.toFixed());ang4=Number(ang4.toFixed());
if (ang1==90 && ang2==90 && ang3==90 && ang4==90){return true;}else{return false;}}else{return false;}}else{return false;}}
function gook(){var counter = 0;var colors=["#c6fc02","#ffe500","#759307"];var i_color=0;var z = setInterval(function(){$("#obj01").css("fill",colors[i_color]);i_color++;
if (i_color>2){i_color=0;}counter++;if(counter===10) {clearInterval(z);score=score+scoreInc;$("#obj01").attr("fill","#ff0000");showMessage("Ok");$("#buttonOk").remove();}}, 200);}
function goerror() {var counter=0;var colors=["#ff0000", "#ff7700", "#ffe500"];var i_color = 0;var counter = 0;var kerror = setInterval(function() {counter++;if (counter<20){$("#obj01").css("fill", colors[i_color]);i_color++;if (i_color>2){i_color=0;}}
else{clearInterval(kerror);attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}}else {showMessage("Error");}for (var i=0; i < pointsX.length; i++) {$("#line_"+i.toString()).remove();}
angle=angle0;posX=pos0X;posY=pos0Y;pointsX=[];pointsY=[];datamove=[];indexpoint=-1;$("#obj01").attr("fill", colors[0]);$("#pathEnd").remove();drawObj();}},100);}
function randomSort(){}
function drawObj() {$("#obj01").attr("cx", parseFloat(posX));$("#obj01").attr("cy", parseFloat(posY));$("#tr_obj01").attr("x1",parseFloat(posX));$("#tr_obj01").attr("y1",parseFloat(posY));var nx2=posX+step*(Math.cos(Math.PI*angle/180))/2;var ny2=posY+step*(Math.sin(Math.PI*angle/180))/2;$("#tr_obj01").attr("x2",parseFloat(nx2));$("#tr_obj01").attr("y2",parseFloat(ny2));
if (pointsX.length>0) {var svg = document.getElementsByTagName("svg")[0];var newLine=document.createElementNS("http://www.w3.org/2000/svg","line");newLine.id="line_"+indexpoint.toString();newLine.style.stroke="rgb(255,0,0)";newLine.style.strokeWidth="2px";
svg.appendChild(newLine);$("#line_"+indexpoint.toString()).attr("x1",parseFloat(pointsX[indexpoint]));$("#line_"+indexpoint.toString()).attr("y1",parseFloat(pointsY[indexpoint]));$("#line_"+indexpoint.toString()).attr("x2",parseFloat(posX));$("#line_"+indexpoint.toString()).attr("y2",parseFloat(posY));}}
function touchHandler(event) {var touch = event.changedTouches[0];var simulatedEvent = document.createEvent("MouseEvent");simulatedEvent.initMouseEvent({touchstart: "mousedown",
touchmove: "mousemove",touchend: "mouseup"}[event.type], true, true, window, 1,touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);touch.target.dispatchEvent(simulatedEvent);event.preventDefault();};
function randomSort() {}
function goTime() {clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame) {}
function paintBack(){}
function Blockly_GeometriaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
