

//ids pra serem usados no evento target pra 
//dizer em que possicao de  array b que vai guardar numeros no
//local store e quero que fique derteminado numeros
var ids=[  
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  ,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34
  ,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
  ,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66
  ,67,68,69,70,71,72,73,74,75,76,77,78,79,80];





var quadros =document.querySelectorAll('.quadros')
for(let i=0;i<quadros.length;i++){
  quadros[i].setAttribute('id',ids[i])
}



//array criado pra apos sair do broswer os numeros ja estarem no quadros
let b= JSON.parse(localStorage.getItem('b'))|| []
var botoes=document.querySelectorAll(' div > button')



for(let i=0;i<botoes.length;i++){
botoes[i].addEventListener('click',
 //acao de digita no quadros
function imprimirnumero(messagem){
  
  var s=document.querySelectorAll('.quadros')
  div2=document.createElement('div')
  s[i].appendChild(div2)

messagem=teclas[i]
  
div2.innerHTML=teclas[i]
div2.setAttribute('class','impressao')
div2.style.display='none'




for(let i=0;i<s.length;i++){
  s[i].addEventListener('click',escrevenumeros)

 
  function escrevenumeros(e){
      s[i].innerHTML=messagem 
  //    s[i].style.backgroundColor="yellow"
    



localStorage.setItem('b',JSON.stringify(b))

b[e.target.id]=s[i].innerHTML 

}

//removendo evento de click  pra impedir os numeros de iniciais do jogos serem subescrito 
if(s[i].innerHTML!=0){
s[i].removeEventListener('click',escrevenumeros)
}



 
s[i].addEventListener('dblclick',apagarnumeros)

function apagarnumeros(e){
  s[i].innerHTML=""
  s[i].style.backgroundColor="white"
  b[e.target.id]=null


}

//remover evento pra impedir que os números inicias do soduko sejam apagadas 
if(s[i].innerHTML!=0){
  s[i].removeEventListener('dblclick',apagarnumeros)
}


}

})

}

//array pra corrigir jogo 
var checkarray=[
['6','8','9,','5','3','7','2','1','4']
['7','4','2','8','1','9','5','3','6'],
['5','3','1','6','4','2','8','7','9'],
['9','5','6','3','7','1','4','8','2'],
['8','2','3','4','5','6','7','9','1'],
['1','7','4','9','2','8','6','5','3'],
['4','1','7','2','8','3','9','5','6'],
['3','6','5','7','9','4','1','2','8'],
['2','9','8','1','6','5','3','4','7'],
];





window.addEventListener('load',function(){
takestorage()
})



//pegas o numeros de cada quadro e guardados  no localStorage  e imprimir na pagina
///quando houve o evento onload
function takestorage(){

  var f=JSON.parse(localStorage.getItem('b'))||[];
  var j=document.querySelectorAll('.quadros')
  for(let i=0;i<j.length;i++){
 
  for(let i=0;i<f.length;i++){
  
  //condição pra imprimir apenas se conteudo  das divs forem igual a zero 
  if(j[i].innerHTML==0){
    j[i].innerHTML=f[i]
  }
    
  }
}
}






/*

var correcaobutton=document.querySelector('.correcaobutton')
var correcaodiv=document.querySelector('.correcaodiv')

  for(let i=0;i<checkarray.length;i++){
 var  x=checkarray[i];
     
for(let j=0;j<x.length;j++){
  
correcaobutton.addEventListener('click',function (){
var k=linha[i].innerHTML==`<div class="quadros">${checkarray[i][j]}
 </div>`
 if(k){
   linha[i].style.backgroundColor="green"
  correcaodiv.innerHTML="ok"
 } 
 
 else  {
 linha[i].style.backgroundColor="red"
 correcaodiv.innerHTML="erro"
}
})
}}    

var body =document.querySelector('body')
console.log(body)*/