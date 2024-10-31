function solution(num_list) {
    let sum = 0;
    let a = 1;
    num_list.map((n)=>{
        sum += n
        a *= n
    })
    return sum**2 > a ? 1 : 0; 
}