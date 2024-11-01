function solution(n, control) {
    let [w,a,s,d] = [0,0,0,0];
    for(i=0; i<control.length; i++){
        if(control.charAt(i)==='w'){
            w++
        }
        else if(control.charAt(i)==='a'){
            a++
        }
        else if(control.charAt(i)==='s'){
            s++
        }
        else if(control.charAt(i)==='d'){
            d++
        }
    }
    return n+w-s+d*10-a*10
}