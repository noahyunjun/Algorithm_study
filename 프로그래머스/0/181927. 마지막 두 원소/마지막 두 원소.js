function solution(num_list) {
    arr = num_list.slice(-2)
    let num = arr[0] < arr[1] ? arr[1]-arr[0] : arr[1]*2
    num_list.push(num)
    return num_list
}