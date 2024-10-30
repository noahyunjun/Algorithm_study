function solution(code) {
    let mode = 0;
    let ret = '';
    [...code].map((s,idx)=>{
        if(s==='1') mode = mode === 0 ? 1 : 0; //모드 변경 함수
        if(mode === 0 && s!=='1'){ //mode가 0이고 s가 1이 아닌경우
            ret = idx%2===0 ? ret+s : ret //짝수일경우 추가
        }
        else if(mode===1 && s!=='1') { //mode가 1이고 s가 1이 아닌경우
            ret = idx%2===1 ? ret+s : ret //홀수일경우 추가
        }
    });
    ret==="" ? ret='EMPTY' : ret

    return ret
    
}