// setInterval(()=>{document.write("hello")},3000)
// console.log("hello")

var k
let btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    let val=0;
    
    
    k=setInterval(()=>{
        document.querySelector('#value').textContent=++val

    },1000)
})


let btn2=document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    clearInterval(k)
})