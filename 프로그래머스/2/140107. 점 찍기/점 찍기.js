function solution(k, d) {
    let count = 0;
    for (let a = 0; a * k <= d; a++) {
        let max_b = Math.floor(Math.sqrt(d**2 - (a * k)**2) / k);
        count += max_b + 1;
    }

    return count;
}
