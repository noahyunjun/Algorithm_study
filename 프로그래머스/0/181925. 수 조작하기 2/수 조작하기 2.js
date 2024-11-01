const words ={
    1 : (n)=> "w",
    '-1' : (n)=>"s",
    10 : (n)=>"d",
    '-10' : (n)=>"a",
}
function solution(numLog) {
    let result = ''
    numLog.forEach((current, index)=>result += index+1<numLog.length ? words[numLog[index+1]-current]() : '')
    return result;
}