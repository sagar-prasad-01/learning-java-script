// task number 1
// function square()
// {
//     let n= parseInt(prompt("enter number"));
//     let sqr=n*n;
//     console.log("square of num = "+sqr);
//     if(sqr%2==0)
//     {
//         console.log("number is even")
//     }
//     else
//     {
//         console.log("number is odd")
//     }


// }
// square()




// //task number 2
// function sumofarray()
// {
//     var arr=[]
//     let n=parseInt(prompt("enter length of array"))
//     for(let i=0;i<n;i++)
//     {
//         arr[i]=parseInt(prompt("enter "+i+" element"))
//     }
//     console.log(arr)


//     let sum=0;
//     for(let i=0;i<n;i++)
//     {
//       sum=sum+arr[i]
//     }
//     return sum;
    
// }
// let ans=sumofarray()
// console.log(ans)



// //task number 3
// // function lastdigit(n)
// // {
// //     n=n%10;
// //     return n

// // }
// // let num=parseInt(prompt("enter number"))
// // let ans=lastdigit(num)
// // console.log(ans)



// //task number 4
function numisdiv()
{
    let n=parseInt(prompt("enter number"))
    if(n%3==0)
    {
        console.log("number is divible by 3")
        for(let i=1;i<=10;i++)
        {
            return (n+"x"+i+"="+(n*i))
        }
    }
    else
    {
        console.log("number is  not divible by 3")
        return n
    }
}
console.log(numisdiv())

