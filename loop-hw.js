//1)   wap to find last digit of number.
    var n=parseInt(prompt("enter any number"))
    let remlast=n%10;
    console.log("last digit of number : "+remlast)






    //2)  wap to find first digit of number.
    var rev=0;
    while(n>0)
    {
      var rem2 =(n%10); 
    rev=(rev*10)+rem2
       n=parseInt(n/10);
    }
    let remfirst=rev%10
    console.log("first digit of number : " +remfirst);

    //3) wap to add first and last digit digit of number
    console.log( "sum of last and first digit of number : " +(remfirst+remlast)) 


