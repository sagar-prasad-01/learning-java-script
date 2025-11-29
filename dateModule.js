let k= new Date()
console.log(k);
console.log(k.getFullYear());
console.log(k.getMonth()+1);//0 index se start hota month 
console.log(k.getDate());
console.log(k.toLocaleDateString());
console.log(k.toLocaleTimeString());


setInterval(()=>{
let time=new Date();
let m=document.querySelector("#h1")
m.innerHTML=time.toLocaleTimeString()
m.style.color="red"

},1000)

