const compare = function (arr1, arr2) {
    if (!arr1 || !arr2) return false
    let flag = []
    arr1.forEach((item, index) => {
        if (arr2[index].event !== item.event) {
            flag.push(arr2[index])
        }
    })
    return flag
}
const genterId = () => new Date().getTime() + (Math.floor(Math.random() * 5000))
export {
    compare,genterId
}