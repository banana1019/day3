const arr = [
    [
        {month: 1, total: 90},
        {month: 2, total: 87},
        {month: 3, total: 140}
    ],
    [
        {month: 4, total: 120},
        {month: 5, total: 130},
        {month: 6, total: 150}
    ],
    [
        {month: 7, total: 180},
        {month: 8, total: 240},
        {month: 9, total: 200}
    ],
    [
        {month: 10, total: 180},
        {month: 11, total: 140},
        {month: 12, total: 190}
    ]
]

// 분기별 평균 매출 금액
const parr = []
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0

    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j].total
    }

    const tempAvg = (sum/tempArr.length).toFixed(2)
    console.log(tempAvg)
    parr.push(parseFloat(tempAvg))
}

console.log(parr)

// 최고 매출 월 찾기
let max = 0
let period = 0

for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j].total > max) {
            max = tempArr[j].total
            period = tempArr[j].month
        }
    }
}

console.log("max: " + max)
console.log("period: " + period + " 월입니다.")