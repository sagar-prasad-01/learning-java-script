 
           const fun=()=>{
        n1=parseInt(document.getElementById('num1').value)
        n2=parseInt(document.getElementById('num2').value)
        }
            
        function prime()
            {
            
                let cnt=0;
                for (let i=n1; i<n2; n1++) {
                   for (let j = 1; j <=i; j++) {
                    if(n1%i==0)
                   {
                    cnt++
                   }
                   if(cnt>2){
                    console.log("n1")
                
                   }
                    
                   }
                    
                }
                

            }
            prime();