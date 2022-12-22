// https://adventofcode.com/2022/day/2

// A and X are rock     (1 point)
// B and Y are paper    (2 point)
// C and Z are scissors (3 point)

import { getInput } from "../1/a.js"

export const input = getInput()
const myChoices = input.map((pair) => pair[2])

export const grabSumFromChoices = (choices) => choices.reduce((acc, curr) => {
  if (curr === "X") return acc + 1
  if (curr === "Y") return acc + 2
  if (curr === "Z") return acc + 3
  return acc
}, 0)

// left this here
export const tallyGames = (input) => {
  let gamesTied = 0
  let gamesWon = 0
  let gamesLost = 0

  for (const pair of input) {
    const oppChoice = pair[0]
    const myChoice = pair[2]

    const result = theWinnerIs(oppChoice, myChoice)

    if (result === "tie") gamesTied += 1
    if (result === "opp") gamesLost += 1
    if (result === "me") gamesWon += 1
  }

  return [gamesTied, gamesWon, gamesLost]
}

export const theWinnerIs = (oppChoice, myChoice) => {
  // I win
  if (oppChoice === "A" && myChoice === "Y") return "me"
  if (oppChoice === "B" && myChoice === "Z") return "me"
  if (oppChoice === "C" && myChoice === "X") return "me"

  // we tie
  if (oppChoice === "A" && myChoice === "X") return "tie"
  if (oppChoice === "B" && myChoice === "Y") return "tie"
  if (oppChoice === "C" && myChoice === "Z") return "tie"

  // they win
  return "opp"
}

const [gamesTied, gamesWon] = tallyGames(input)
const sumFromMyChoices = grabSumFromChoices(myChoices)

const answer = (gamesTied * 3) + (gamesWon * 6) + sumFromMyChoices