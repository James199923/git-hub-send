var linha=document.querySelectorAll('.linha')
var teclado=document.querySelector('.teclado')

var ids=[  
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  ,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34
  ,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
  ,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66
  ,67,68,69,70,71,72,73,74,75,76,77,78,79,80];

var teclas=[1,2,3,4,5,6,7,8,9];


for(let i=0;i<teclas.length;i++){
  var button=document.createElement('button')
  teclado.appendChild(button)
  button.classList.add('writebuttons')
   var c=document.querySelectorAll(
     '.writebuttons')
     c[i].innerHTML=teclas[i]
  
}




var gameelementsstart=[
['','8','','','','','2','','4'],
['','','2','','','9','','',''],
['5','','','','','','8','','9'],
['9','5','6','','7','','','8',''],
['8','','','','','','','','1'],
['','7','','2','','','6','5','3'],
['4','','7','','','','','','5'],
['','','','7','','','1','',''],
['2','','8','','','','4','',''],
 ]
 

for(let i=0;i<gameelementsstart.length;i++){
  var l=gameelementsstart[i];
 
for(let j=0;j<l.length;j++){
  linha[i].innerHTML+=`
  <div class="quadros">${gameelementsstart[i][j]}
  </div>`
}}




