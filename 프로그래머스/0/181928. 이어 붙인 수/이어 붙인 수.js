function solution(num_list) {
    let a='';
    let b='';
    num_list.reduce((start,n)=>{
        n%2===0 ? a=`${a}${n}` : b=`${b}${n}`
    },0)
    return Number(a)+Number(b)

}