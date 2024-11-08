
function solution(numer1, denom1, numer2, denom2) {
    let [a,b,c,d] = [numer1, denom1, numer2, denom2];
    let [numer3,denom3] = [a*d+b*c,b*d]
    //1. 약분해야하는 분수를 구한다.
    
    let min = Math.min(numer3, denom3)
    //2. 더 작은 값을 구함
    
    const commonDivisors = [];
    //3. 공약수를 담을 배열을 선언한다.
    
    for(let i=1; i<=min; i++){
          if (numer3 % i === 0 && denom3 % i === 0) {
            commonDivisors.push(i);
        }
    }
    //4. 공약수를 담는다. 
    
    let result = []
    commonDivisors.forEach((d)=>{
        if(d!==1){
            result=[numer3/d, denom3/d]
        }
    })
    
    if(result.length===0){
        return [numer3, denom3]
    }
    else{
        return result
    }
}