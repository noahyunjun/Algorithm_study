const compareNumber=(n,m,ineq)=>{
   return ineq === '>' ? n>m ? 1 : 0 : n<m ? 1 : 0    
}

function solution(ineq, eq, n, m) {
    if(eq === '='){
        return n===m ? 1 : compareNumber(n,m,ineq)
    }
    else{
        return compareNumber(n,m,ineq)    
    } 
}