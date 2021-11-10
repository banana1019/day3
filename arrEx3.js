const arr = [88, 97, 45, 63, 71, 52]

// 평균 = 모든 점수의 합 / 개수
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    console.log(`sum: ${sum}`)
}

let avg = (sum / arr.length).toFixed(3)

console.log(`avg: ${avg}`)

// 최저
let min = 101
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    // score가 min보다 작으면 swap
    min = score < min ? score : min
}

console.log(`min: ${min}`)

// 최고
let max = -1
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    // score가 max보다 크면 swap
    if (score > max) {
        max = score
    }
}

console.log(`max: ${max}`)