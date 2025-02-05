const compareNumber=(n,m,ineq)=>{
   return ineq === '>' ? n>m ? 1 : 0 : n<m ? 1 : 0    
}

function solution(ineq, eq, n, m) {
    return eq === '=' ? n===m ? 1 : compareNumber(n,m,ineq) : compareNumber(n,m,ineq)       
}