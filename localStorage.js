localStorage.setItem("name","sagar")
localStorage.setItem("city","siwan")

let name=localStorage.getItem("name")
console.log(name);

localStorage.removeItem("city")

localStorage.clear( )

let k={
    name:"sagar",
    age:23
}

localStorage.setItem("userData",JSON.stringify(k))

let newObject=JSON.parse(localStorage.getItem("userData"))
console.log(newObject.age);



 