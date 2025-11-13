number=0
function counter(){
    document.getElementById("cnt").textContent=++number;
}
function counter2(){
    if(number>0)
    document.getElementById("cnt").textContent=--number;
}
function counter3(){
    number=0;
    document.getElementById("cnt").textContent=number;
}



function img1(){
    document.getElementById("img4").src="bewkoof_img/1s,1.webp" 
}
function img2(){
    document.getElementById("img4").src="bewkoof_img/2s,1.webp" 
}
function img3(){
    document.getElementById("img4").src="bewkoof_img/3s,1.webp" 
}



document.querySelector(".hii").style.color="red" 
document.querySelectorAll("h3")[2].style.color="red"


btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{alert("hello")});