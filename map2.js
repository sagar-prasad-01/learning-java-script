let ar=[

    {
    name:"sagar",
    age:"20"},
    {
    name:"sagar",
    age:"20"},
    {
    name:"sagar",
    age:"10"},
    {
    name:"sagar",
    age:"20"},
    {
    name:"sagar",
    age:"20"}
]

let newar=ar.map((e)=>{if(e.age>10) return e.age}) 
console.log(newar);
console.log(ar);



let ar2=[

    {
    name:"sagar",
    age:"60"},
    {
    name:"sagar",
    age:"20"},
    {
    name:"sagar",
    age:"30"},
    {
    name:"sagar",
    age:"10"},
    {
    name:"sagar",
    age:"50"}
]
let newar2=ar2.filter((e)=>{return e.age>=20 && e.age<=60})
console.log(newar2);




let store=[
    {stname:"store2",
    stlocation:"indp",
    strevenue:8},

   {stname:"store1",
   stlocation:"mp nagar",
   strevenue:10},


   {stname:"store3",
   stlocation:"vishal",
   strevenue:20},

   {stname:"store4",
   stlocation:"indp",
   strevenue:40},

   {stname:"store5",
   stlocation:"mp nagar",
   strevenue:60},
]

let new2=store.filter((e)=>{return e.stlocation=="indp" && e.strevenue>=10})
console.log(new2);