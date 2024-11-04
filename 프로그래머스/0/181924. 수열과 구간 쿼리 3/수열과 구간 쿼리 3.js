const swap=(arr, query)=>{
    [arr[query[0]], arr[query[1]]] = [arr[query[1]], arr[query[0]]]
}

function solution(arr, queries) {
    queries.map((q)=>swap(arr, q))
    return arr
}