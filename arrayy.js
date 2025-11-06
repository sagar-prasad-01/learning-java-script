// let name;
// let age;
// name=prompt("enter name")
// age=parseInt(prompt("enter age"))
// let arr =[name,age];

// console.log(arr[0])
// console.log(arr[1])


// let person=[1,2,3,4,5,6,7,8,9,10]; 
// let sum=0;
// for (let i=0; i<person.length; i++) {
// sum=sum+person[i];
// }
// console.log(sum);

//wap to take 10 elemnets and print the square of all even numbers
let person=[]; 
for (let i=0; i<10; i++) {
person[i]=parseInt(prompt("enter elements"));
if(person[i]%2==0){
    console.log(person[i]*person[i])
}
}



let person2=[]; 
sum=0;
for (let i=0; i<10; i++) {
person2[i]=parseInt(prompt("enter elements"));
if(person2[i]%2!=0){
    sum=sum+person2[i];
}
}
console.log(sum);
