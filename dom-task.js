for(let i=1;i<=10;i++)
{
    let list=document.getElementsByTagName('li')
    for(let i=0;i<10;i++)
    {
        if(i%2!=0)
        {
            list[i].style.backgroundColor="yellow"
            list[i].style.color="white"
        }
    }
    
}