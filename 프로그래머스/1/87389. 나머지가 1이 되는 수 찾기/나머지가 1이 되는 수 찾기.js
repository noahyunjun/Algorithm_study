function solution(n) {
    const arr = Array.from({length: n}, (_,i)=>i+1);
    return arr.find(num => n%num===1)
}