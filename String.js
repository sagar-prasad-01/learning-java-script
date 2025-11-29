let k="sagar"
console.log(k[0]);

console.log(k.toUpperCase());
console.log(k.toLowerCase());


let name=" hello bhopal mp "
console.log(name);
console.log(name.trimStart());
console.log(name.trimEnd());
console.log(name.trim()); 



let n="hello bhopal bhopal"
console.log(n.repeat(4 ));
console.log(n.replace("bho","bhoooo"));
console.log(n.replaceAll("bho","bho"));


st="hello sagar in "
console.log(st2=`${st}js class`)//  `` back tick template literals

st3=st+st2+"\n in cybrome"//  \n use to go in next line
console.log(st3);


function handle(){

    let name=document.querySelector("#name").value
    let age=document.querySelector("#age").value
    let city=document.querySelector("#city").value
    let data=document.querySelector("#data")

    data.textContent=`my name is ${name} and my age is ${age} my city is ${city }`
    return false


}



