//1)   wap to find last digit of number.
let n=parseInt(prompt("enter any number"))
    // let rem=n%10;
    // console.log("last digit of number : "+rem)






    //2)  wap to find first digit of number.
    var rev=0;
    while(n>0)
    {
      let rem2=n%10;
       rev=(rev*10)+rem2;
       n=n/10;
    }
    console.log(rev);


