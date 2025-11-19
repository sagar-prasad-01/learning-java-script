// setTimeout(()=>{

//     document.querySelector("form").style.display="block"
// },3000)


function handle(){

    let name=document.querySelector("#name").value
    let gmail=document.querySelector("#gmail").value
    let password=document.querySelector("#pass").value
    let mobile=document.querySelector("#mobile").value
    let address=document.querySelector("#address").value

   
    document.querySelector("#h11").textContent=name+gmail+mobile ;
    return false;
}
