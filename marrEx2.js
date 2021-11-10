const arr = [
    {month: 1, total: 90},
    {month: 2, total: 87},
    {month: 3, total: 140},
    {month: 4, total: 120},
    {month: 5, total: 130},
    {month: 6, total: 150},
    {month: 7, total: 180},
    {month: 8, total: 240},
    {month: 9, total: 200},
    {month: 10, total: 180},
    {month: 11, total: 140},
    {month: 12, total: 190},
]

// 최고 매출 월 찾기
let max = 0
let period = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i].total > max) {
        max = arr[i].total
        period = i
    }
}

console.log("max: " + max)
console.log("period: " + (period + 1) + " 월입니다.")