const arr = [4, 3, 21, 43, 77, 22, 11, 45]

arr.sort((a, b) => {
    console.log(`arr : ${arr}`)
    console.log(`a : ${a}`)
    console.log(`b : ${b}`)
    console.log(a - b)
    console.log("----------------")
    return a - b

})

console.log(arr)