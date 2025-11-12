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

