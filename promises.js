console.log("error handing")
try {
    x=12;  
    console.log(x)
    
} catch (error) {
    throw new Error("x ko define kro");
    
}
finally{
    console.log("program finished")
}


let p=new Promise((accept,reject)=>{
    let car=fetch("https://fakestoreapi.in/api/products");
    if(car){
       car.then((e)=>{
        accept(e.json());
       })
    }
    else{
        reject("reject")
    }
})

p.then((e)=>{
    let data=e.products;
    console.log(data)
    

    data.map((e)=>{
        console.log(e.id)
    })
    let apidata=document.getElementById("dataofapi")
     apidata.innerHTML=data.map((e)=>{
        return`
         <div style="width:300px; height: 400px; background-color:lightpink; border:2px solid black; box-shadow: 10px 10px 10px red; " >
        <h2>BRAND:${e.brand}<h2>
        <h2>CATEGORY:${e.category}<h2>
        <h3>Title:${e.title}</h3>
        <img src="${e.image}" alt="image" height="100px">
        <br>
        <strong>Price:${e.price}</strong> <br>
        <button onclick="addprice(${e.price})">ADD</button>
        <button onclick="subprice(${e.price})">SUB</button>
        </div>
        `
    })
  
    // window.addprice(){
    //     alert("hello")
    // }

    // window.subprice(){
    //     alert("dcds")
    // }
})
 
