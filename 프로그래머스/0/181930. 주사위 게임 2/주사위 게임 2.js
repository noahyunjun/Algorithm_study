function solution(a, b, c) {
    let answer=0
    if(a===b) answer = b===c ? (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3) : (a+b+c)*(a**2+b**2+c**2)
    else answer = (b===c || a===c) ? (a+b+c)*(a**2+b**2+c**2) :a+b+c  
    return answer;
}