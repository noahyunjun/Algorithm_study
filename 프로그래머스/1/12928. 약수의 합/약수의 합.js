function solution(n) {
    const numArr = Array(Math.floor(n/2)).fill(1)
    
    numArr.forEach((_, index)=>numArr[index] = index + 1)
    
    const result = numArr.reduce((acc, cur)=>{
        return n%cur === 0 ? acc+cur : acc;
    },n)
    
    return result
}