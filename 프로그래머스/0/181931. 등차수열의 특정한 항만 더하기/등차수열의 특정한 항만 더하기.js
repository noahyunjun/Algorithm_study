function solution(a, d, included) {
    let result = 0
    included.map((bool, idx)=>result += bool ? a+idx*d : 0)
    return result
}