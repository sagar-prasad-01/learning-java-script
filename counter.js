let n=0


function increment()
{
    n++
    document.getElementById('count').innerHTML=n
}
function decrement()
{
    if(n>0)
    {
        n--
    }

    document.getElementById('count').innerHTML=n
}
function reset()
{
    n=0 
    document.getElementById('count').innerHTML=n
}
//even num come in red


let h1=document.getElementById('red')
function func1()
{
    h1.style.color="blue"
    h1.textContent="get out"
}
function func2()
{
    h1.style.color="black"
    h1.textContent="Hover on me"
}