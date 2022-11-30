var linha=document.querySelectorAll('.linha')
var teclado=document.querySelector('.teclado')

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




