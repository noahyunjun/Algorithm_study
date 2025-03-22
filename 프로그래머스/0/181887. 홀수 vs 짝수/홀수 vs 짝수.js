function solution(num_list) {
    const [oddSum, evenSum] = num_list.reduce(
        ([odd, even], num, index) => index % 2 === 0 ? [odd + num, even] : [odd, even + num],[0, 0]
    );
    return Math.max(oddSum, evenSum);
}