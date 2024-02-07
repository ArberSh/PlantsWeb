import React from 'react'

function Test() {


function prov(num,target){
    for(let i = 0;i < num.length;i++){
        for(let j = 0;j < num.length;j++){
            for(let u = 0;u < i;u++){
                console.log(num[u] + "U")
               if((num[i] != num[j] && num[j] != num[u]) && num[i] + num[j] + num[u] == target){
                console.log(num[i],num[j],num[u])
            }
            return; 
            }
            
        }
    }
}
prov([2,3,9,1,4],7)
    
  return (
    <div>Test</div>
  )
}

export default Test