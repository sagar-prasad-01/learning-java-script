let p=parseInt(prompt("enter marks of phy"))
let c=parseInt(prompt("enter marks of chemistry"))
let m=parseInt(prompt("enter marks of math"))
let h=parseInt(prompt("enter marks of hindi"))
let e=parseInt(prompt("enter marks of english"))
let x=(p+c+m+h+e)/5;
if(x>89){
console.log("grade is a+")
}
else if(x>79){
console.log("grade is a")

}
else if(x>69){
console.log("grade is b")

}
else if(x>59){
console.log("grade is c")

}
else{
    console.log("you fail(F)");
    
}
