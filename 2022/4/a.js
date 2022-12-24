import { readFileSync } from "node:fs"

// How many pairs where one range fully contains the other

export const input = readFileSync("input.txt").toString().trim().split("\r\n")

let answer = 0

for (const pair of input) {
  const isOverlapping = checkIfPairOverlapsCompletely(pair)
  if (isOverlapping) answer += 1
}

function checkIfPairOverlapsCompletely(pair) {
  const [rangeA, rangeB] = pair.split(',')
  let [aLo, aHi] = rangeA.split('-')
  let [bLo, bHi] = rangeB.split('-')

  aLo = parseInt(aLo)
  aHi = parseInt(aHi)
  bLo = parseInt(bLo)
  bHi = parseInt(bHi)

  // check if rangeA contains rangeB
  if (aLo <= bLo && aHi >= bHi) return true

  // check if rangeB contains rangeA
  if (bLo <= aLo && bHi >= aHi) return true

  // neither range contained the other
  return false
}

// console.log(answer)