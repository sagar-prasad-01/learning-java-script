function validate(){
    let name=document.querySelector("#name").value
    let gamil=document.querySelector("#gmail").value
    let pass=document.querySelector("#pass").value
    let mobile=document.querySelector("#mobile").value
    let address=document.querySelector("#address").value

    if(name==""){
        alert("plese enter your name")
        document.querySelector("#name").focus()

        return false
    }
    if(gamil==""){
        alert("plese enter your gmail")
        document.querySelector("#gmail").focus()
        return false
    }
    else if(!(gamil.includes("@gmail.com"))){
        alert("plese enter valid gmail")
        document.querySelector("#gmail").focus()
        return false

    }
    if(pass==""){
        alert("plese enter your pass")
        document.querySelector("#pass").focus()
        return false
    }
    if(mobile==""){
        alert("plese enter your mobile")
        document.querySelector("#mobile").focus()
        return false
    }
    if(isNaN(mobile)){
         alert("plese enter your mobile in number")
        document.querySelector("#mobile").focus()
        return false
    }
    if(address==""){
        alert("plese enter your address")
        document.querySelector("#address").focus()
        return false
    }
}