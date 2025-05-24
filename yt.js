//1) callback function 
setTimeout(function( )
{
    console.log("5s ke bad print hoga");
    
}
,5000)

//2)first class function
function print(a)
{
 a()

}
print(function para(){console.log("fuc btw parameter")})