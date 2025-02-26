function solution(left, right) {
    let result = 0
    for(left; left<=right; left++){
        const div = Array.from({length:left}, (_,i)=>i+1).filter(n => left%n===0).length
        result += div%2===0 ? left : -left
    }
    return result
}