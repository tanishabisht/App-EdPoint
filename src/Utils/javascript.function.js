export const objToArr = (obj, addObj={}) => {
    var arr = []
    for (let key in obj){
        arr.push({ ...obj[key], ...addObj, id:key })
    }
    return arr
}