
// //1
function form1(){
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    if(name=="" || email=="")
    {
        alert("all fields are required");

    } 

}
//2

function form2(){
    let name=document.querySelector("#name2").value
    let age=document.querySelector("#age").value
    let h1=document.querySelector("h1")
    h1.innerHTML=`hello ${name} , your age is ${age}`

    return false

}
 

//3
function form3(){
    let email=document.querySelector("#email2").value

    console.log(email)
    if(!(email.includes("@gmail.com"))){
        alert("errrror")

        document.querySelector("#email2").focus()
         return false
    }
    
     
  

}
//(gamil.includes("@gmail.com"))