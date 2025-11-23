// let person={
//     name:"sagar",
//     age:20,
//     city:"siwan"
// }

// console.log(person.name)
// console.log(person)
// person.email="s@gmail.com"
// person.age=15
// console.log(person)






// let person2={
//     name:prompt("enter emp name"),
//     age:prompt("enter emp age"),
//     city:prompt("enter emp city")
// }
// // person2.name=prompt("enter emp name")
// // person2.age=prompt("enter emp age")
// // person2.city=prompt("enter emp city")
// console.log(person2)

// for(k in person2){
//     console.log(k);//for keys
//     console.log(person2.k); //for values
// }


let person={
    name:"sagar",
    age:20,
    city:"siwan"
}
 
let k=Object.keys(person);
console.log(k);
let m=Object.values(person);
console.log(m);


let store={
    name:"kirana store",
    weekincome:[100,200,300,390,400,400],
    franchisy:{
        first:"indp",
        second:"mp nagar"
    },
    fun1:function(){
        console.log(1+2)
    },

     fun2:function(a,b){
        return a-b
    }
}

store.fun1()
console.log(store.fun2(3,2))

console.log(store.weekincome[1]);
console.log(store.franchisy.second);
 

let salary={
    ...person,
    ...store,
    m:"30k",
    y:"3.6lpa"
}
console.log(salary);
 

let {namee,agee}={
    namee:"sagar",
    agee:23
}
console.log(agee); 

let std=[
    {
        sname:"sagar"
    },
    {
         sname:"sonu"
    },
    {
         sname:"saanu"
    }
] 
std.push({
    sname:"rama"
});
std.pop()
console.log(std);

 let std2=std.slice(0,2)
 console.log(std2);

 let std3=std.splice(1,2)
 console.log(std3);
 
 


