let create_btn=document.getElementById("create")
console.log(create_btn)
let read_btn=document.getElementById("read")
console.log(read_btn)
let update_btn=document.getElementById("update")
console.log(update_btn)
let delete_btn=document.getElementById("delete")
console.log(delete_btn)


let arr=[];
let create_form=document.getElementById("inner1")
// console.log(create_form)
const handleadd=()=>{

    let x=document.getElementById("insert_array").value;
    arr.push(x);
    console.log(x)
     Object.assign(create_form.style,{
        left:"-100%",
        top:"30vh"
    })
}

create_btn.addEventListener("click",function(){
    Object.assign(create_form.style,{
        left:"0%",
        top:"30vh"
    })
})
read_btn.addEventListener("click",function(){
    alert(arr)
    
})
update_btn.addEventListener("click",function(){
    alert("hello create")
})
delete_btn.addEventListener("click",function(){
    alert("hello create")
})

