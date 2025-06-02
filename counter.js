let n=0
 h2=document.getElementById('count')

function increment()
{
    n++
    h2.innerHTML=n
    if(n%2==0)
    {
         h2.style.color="red"
    }
    else
    {
         h2.style.color="black"
    }
    }

   

function decrement()
{
    if(n>0)
    {
        n--
    }

   h2.innerHTML=n
   if(n%2==0 & n!=0)
    {
         h2.style.color="red"
    }
    else
    {
         h2.style.color="black"
    }
}
function reset()
{
    n=0 
    h2.innerHTML=n
    h2.style.color="black"
}


//even num come in red


// let h1=document.getElementById('red')
// function func1()
// {
//     h1.style.color="blue"
//     h1.textContent="get out"
// }
// function func2()
// {
//     h1.style.color="black"
//     h1.textContent="Hover on me"
// }