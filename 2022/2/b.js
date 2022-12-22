import { input, grabSumFromChoices } from "./a.js"

const myChoices = input.map((pair) => {
  const oppChoice = pair[0]
  const desiredResult = pair[2]

  // I must lose
  if (desiredResult === "X") {
    if (oppChoice === "A") return "Z"
    if (oppChoice === "B") return "X"
    if (oppChoice === "C") return "Y"
  }

  // I must tie
  if (desiredResult === "Y") {
    if (oppChoice === "A") return "X"
    if (oppChoice === "B") return "Y"
    if (oppChoice === "C") return "Z"
  }

  // I must win
  if (desiredResult === "Z") {
    if (oppChoice === "A") return "Y"
    if (oppChoice === "B") return "Z"
    if (oppChoice === "C") return "X"
  }
})

const tallyGamesByResults = (results) => {
  let gamesTied = 0
  let gamesWon = 0
  let gamesLost = 0

  for (const result of results) {
    if (result === "X") gamesLost += 1
    if (result === "Y") gamesTied += 1
    if (result === "Z") gamesWon += 1
  }

  return [gamesTied, gamesWon, gamesLost]
}

const results = input.map((pair) => pair[2])
const [gamesTied, gamesWon] = tallyGamesByResults(results)

const sumFromMyChoices = grabSumFromChoices(myChoices)

const answer = (gamesTied * 3) + (gamesWon * 6) + sumFromMyChoices
console.log(answer)
