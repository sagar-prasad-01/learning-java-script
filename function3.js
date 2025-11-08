// function Sum() {
//    let a=5;
//    let b=10;
//    console.log("sum=",a+b);  
// }
// Sum()


//Q2------------------------------------

// function EvenOdd(n){
//     if(n%2==0){
//         console.log("even numbeer");
        
//     }
//     else{
//         console.log("odd number");
        
//     }

// }
// console.log(EvenOdd(5));



//Q3-----------------------------------------
// function Ev(k){

//     if(k%2==0){
//         let sum=0;
//          for(let i=10;i>=1;i--){

//         sum=sum+i;

        
//         }
//         return sum;
//     }

//     else{
//         return k*k*k;
//     }

// }
// console.log(Ev(6));


//Q4-------------------------------
function Array() {
    let ar=[25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
   let summ=0;
   
    for(let i=0;i<ar.length;i++){

        summ=summ+ar[i];
    }
    return summ;   
}

console.log(Array());





//wap to add two number using function
//wap take input from user and check number is odd or even
//wap to print reverse table of any number using function