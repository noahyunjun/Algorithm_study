function solution(arr, queries) {
    let result = [];
    let answer = [];
    queries.forEach(([a, b, c], index) => {
        result[index] = arr.slice(a, b + 1).filter((n) => c<n);
         if (result[index].length > 0) {
            answer.push(Math.min(...result[index]));
        } else {
            answer.push(-1);
        }
    });
    return answer
}