function solution(arr, queries) {
    queries.forEach(([a,b,c])=>{
        for(i=a; i<=b; i++){
            if(i%c===0) arr[i]+=1;
        }
    })
    return arr
}