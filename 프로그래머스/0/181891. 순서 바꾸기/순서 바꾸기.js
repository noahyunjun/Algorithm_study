function solution(num_list, n) {
    let fList = num_list.splice(0,n)
    let sList = num_list.splice(-num_list.length-n)
    return [...sList,...fList]
}