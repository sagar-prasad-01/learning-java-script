import product from "./ourproduct.js";
import shoes from "./ourshoes.js";
console.log(product)  
console.log(shoes)  

// cloth section here

let prod=document.getElementById("cloth") 
console.log(prod)
prod.innerHTML=product.map((e)=>{
    return`
    <div style="width: 140px; height: 200px; background-color:lightpink; border:2px solid black;" >
     <h3>ID:${e.id}</h3>
        <img src="${e.image}" alt="image" height="100px">
        <br>
        <strong>Price:${e.price}</strong> <br>
        <button onclick="addprice(${e.price})">ADD</button>
        <button onclick="subprice(${e.price})">SUB</button>
        </div>
    `
})
.join("")
//shoes section here
 let shoesproduct=document.getElementById("shoes") ;
 shoesproduct.innerHTML=product.map((e)=>{
    return`
    <div style="width: 140px; height: 200px; background-color:lightblue; border:3px solid black;">
     <h3>ID:${e.id}</h3>
        <img src="${e.image}" alt="image" height="100px">
        <br>
        <strong>Price:${e.price}</strong> <br>
        <button onclick="addprice(${e.price})">ADD</button>
        <button onclick="subprice(${e.price})">SUB</button>
        </div>
    `
})
.join("")
  













let p=0;
let cart=document.getElementById("cart")
window.addprice=(price)=>{
 p+=price;
 if(p<0)
 {
    cart.innerHTML="<h1>empty cart</h1>"
 }
 else{
    cart.innerHTML=p;
 }
 
}
window.subprice=(price)=>{
 p-=price;
  if(p<0)
 {
    cart.innerHTML="<h1>empty cart</h1>"
 }
 else{
    cart.innerHTML=p;
 }
 
}