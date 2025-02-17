function solution(n) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let compositeCount = 0;

    for (let i = 1; i <= n; i++) {
        if (!isPrime(i) && i !== 1) {
            compositeCount++;
        }
    }

    return compositeCount;
}