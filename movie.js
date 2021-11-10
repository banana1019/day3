const movies = [
    {kissScene: 2, actionScene: 12, category: 'A'},
    {kissScene: 14, actionScene: 2, category: 'M'},
    {kissScene: 2, actionScene: 7, category: 'A'},
    {kissScene: 10, actionScene: 2, category: 'M'},
    {kissScene: 15, actionScene: 6, category: 'M'},
]

const target = {kissScene: 3, actionScene: 8}

movies.sort((a, b) => {
    const distanceA =  Math.sqrt(Math.pow(a.kissScene - target.kissScene, 2) + Math.pow(a.actionScene - target.actionScene, 2))
    const distanceB =  Math.sqrt(Math.pow(b.kissScene - target.kissScene, 2) + Math.pow(b.actionScene - target.actionScene, 2))
    return distanceA - distanceB
})

console.log(movies)

// console.log(movies[0].category)

let countA = 0
let countM = 0

for (let i = 0; i < 3; i++) {
    // console.log(movies[i].category)
    if (movies[i].category == 'A') {
        countA++
    } else {
        countM++
    }
}

let result = countA > countM ? "Action" : "Melo"

console.log(`${result} 영화입니다.`)