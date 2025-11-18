// setInterval(()=>{document.write("hello")},3000)
// console.log("hello")

var k
let btn=document.querySelector('#btn');
let val=0;
btn.addEventListener('click',()=>{
    
    
    k=setInterval(()=>{
        document.querySelector('#value').textContent=++val

    },1000)
})


let btn2=document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    clearInterval(k)
})

let btnReset=document.querySelector("#btnr");
btnReset.addEventListener('click',()=>{
val=0;
document.querySelector('#value').textContent=val;
});