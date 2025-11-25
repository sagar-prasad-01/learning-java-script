//1
let obj={

    name:"sagar",
    age:"20",
    nmr:"23456789",
    branch:"cse",
    coarse:"javaa"
}


console.log(obj);

//4
let k=Object.keys(obj)
console.log(k[0]);

//3
let obj2={

    name:"sagar",
    age:"20",
    nmr:"23456789",
    branch:"cse",
    coarse:["java"]
}
console.log(obj2);

//5

let obj3={
fun1:function(a,b){
    return a+b
},
fun2:function(a,b){
    return a-b
},
fun3:function(a,b){
    return a*b
    
}
    
}
console.log(obj3.fun1(3,2))
console.log(obj3.fun2(3,2))
console.log(obj3.fun3(3,2))

// //2
// SubmitEvent()
// namee=document.querySelector("#name").value
// console.log(namee);




// let form={
//     name:document.querySelector("#name").value
// }
// console.log(form.name);
