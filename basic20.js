function handle()
{
    let x=document.getElementById("clr").value;
    console.log(x)
    document.body.style.backgroundColor=x;
    document.getElementById('res').innerText=x 
}


function handlecalc()
{
    let x=document.getElementById('calc').value
    let y=eval(x)
    document.getElementById('calc').value=y;
    document.getElementById('res1').innerHTML=y;

}
function kalarchange()
{
    let x=document.getElementById
}