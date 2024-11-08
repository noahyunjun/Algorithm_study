function solution(n) {
    const a = []
    for(i=1; i<=n; i++) i%2 !== 0 && a.push(i)    
    return a
}