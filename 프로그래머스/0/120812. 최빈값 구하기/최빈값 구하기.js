function solution(arr) {
    const frequencyMap = new Map();

    // 빈도수 계산
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // 최대 빈도수 찾기
    let maxFrequency = Math.max(...frequencyMap.values());

    // 최대 빈도수에 해당하는 값들 찾기
    const modes = [];
    frequencyMap.forEach((frequency, num) => {
        if (frequency === maxFrequency) {
            modes.push(num);
        }
    });

    console.log(modes)
    return  modes.length>1 ? -1 : modes[0];
}
