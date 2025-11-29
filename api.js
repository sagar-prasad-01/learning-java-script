
async function accessData(){
let data= await fetch("https://jsonplaceholder.typicode.com/comments")
let res=await data.json()
console.log(res);
let k=res.map((e)=>{return e.email})
console.log(k); 

}
 

accessData()
