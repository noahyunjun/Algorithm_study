const minFind = (arr) => Math.min(...arr)
const maxFind = (arr) => Math.max(...arr)+1

function solution(wallpaper) {
    const arr = [];
    wallpaper.map((item, index)=>{
        for(let i = 0; i<item.length; i++){
            item[i]==='#' && arr.push([index, i])
        }
    })
    const xArr =[]
    const yArr =[]
    arr.map((item)=>{
        xArr.push(item[0])
        yArr.push(item[1])
    })
    return [minFind(xArr), minFind(yArr), maxFind(xArr), maxFind(yArr)]
}