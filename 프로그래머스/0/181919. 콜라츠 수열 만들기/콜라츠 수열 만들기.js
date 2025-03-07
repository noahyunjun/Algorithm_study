function solution(n) {
    let result = n
    const arr = [n]
    while(result>1){
        result = result%2===0 ? result/2 : result*3+1
        arr.push(result)
    }
    return arr
}