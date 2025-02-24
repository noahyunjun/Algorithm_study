function solution(t, p) {
    const numberP = Number(p);
    return Array.from({ length: t.length - p.length + 1 }, (_, i) => 
        Number(t.slice(i, i + p.length))
    ).filter(num => num <= numberP).length;
}
